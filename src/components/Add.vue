<template>
    <div>
        <div class="head">
        	<a class="back" @click.prevent="back">&lt; 返回</a>
            添加配方
            <span class="add" @click="save">确认</span>
        </div>
        <div class="add_box">
            <div class="content">
                <div class="row">
                    <div class="title">种类名称</div>
                    <div class="cont">
                        <input type="text" ref="title" class="ipt ipt-title">
                    </div>
                </div>
                <div class="row">
                    <p class="tip">下方输入每100克主料的配方</p>
                </div>
                <Ingredient ref="ingredient" v-for="item in ingredients" :ID="item.id" :key="item.id" :name="item.name" :weight="item.weight" v-on:remove="removeIngredient" v-on:edit="editIngredient"></Ingredient>
                <a class="add-btn" @click.prevent="add">+ 添加一项配料</a>
            </div>
        </div>
    </div>
</template>
<script>
import Ingredient from './ingredient.vue'
export default {
	data () {
        return {
          ingredients : []
        }
    },
    mounted () {
		if(this.$route.query.ID){
			//修改
			let item = this.loadLocalData();
			console.log(this.ingredients)
            this.$refs.title.value = item.title;
		}else{
			this.add();
		}
	},
    methods: {
        back() {
            this.$router.go(-1)
        },
	    loadLocalData(){
	        let arr = JSON.parse(localStorage.getItem("formulaList"))||[];
	        let item = this.getItemFromLocal(this.$route.query.ID,arr);
	        let This = this;
	        
	        item.ingredients.map(function(item){
	            This.pushItemIngredients(item);
	        });
	        return item;
	    },
	    getItemFromLocal(ID,arr){
	    	console.log(arr)
	        for(let i=0;i<arr.length;i++){
	            if(arr[i].id==ID){
	                return arr[i];
	            }
	        }
	    },
	    pushItemIngredients(item){
	    	let ingredient = {};
        	ingredient.id = "ingredient"+parseInt(Math.random()*100)+new Date().getTime();
        	ingredient.name = item.name;
        	ingredient.weight = item.weight;

        	this.ingredients.push(ingredient);
	    },
        add() {
        	let ingredient = {};
        	ingredient.id = "ingredient"+parseInt(Math.random()*100)+new Date().getTime();
        	ingredient.name = "";
        	ingredient.weight = "";

        	this.ingredients.push(ingredient);
        },
        removeIngredient(ID){
        	let ind = -1;
        	for (let i=0;i<this.ingredients.length;i++) {
				if(ID==this.ingredients[i].id){
					ind = i;
					break;
				}
			}
			if(ind>=0){
				this.ingredients.splice(ind,1);
			}
        },
        editIngredient(cont){
        	let ind = -1;
        	for (let i=0;i<this.ingredients.length;i++) {
				if(cont.id==this.ingredients[i].id){
					ind = i;
					break;
				}
			}
			if(ind>=0){
				this.ingredients.splice(ind,1,cont);

			}
        },
        save(){
        	let formula = {
	            ingredients : []
	        };
	        formula.title = this.$refs.title.value.trim();
	        
	        if(!formula.title){
	            this.$refs.title.focus();
	            return;
	        }

	        for(let a in this.$refs.ingredient){

	            let name = this.$refs.ingredient[a].$refs.name.value.trim();
	            let wg = parseInt(this.$refs.ingredient[a].$refs.weight.value.trim());

	            if(!name){
	                this.$refs.ingredient[a].$refs.name.focus();
	                return;
	            }else if(!wg){
	                this.$refs.ingredient[a].$refs.weight.value = "";
	                this.$refs.ingredient[a].$refs.weight.focus();
	                return;
	            }
	            formula.ingredients.push({
	                name : name,
	                weight : wg,
	                total : wg
	            });
	        }

	        let local = JSON.parse(localStorage.getItem("formulaList"))||[];

	        if(this.$route.query.ID){
	            //修改
	            for(let i=0;i<local.length;i++){
	                if(local[i].id==this.$route.query.ID){
	                    formula.id = this.$route.query.ID;
	                    formula.imgsrc = local[i].imgsrc;
	                    local[i] = formula;
	                }
	            }

	        }else{
	            //新加
	            
	        	formula.imgsrc = "/dist/default_img1.jpg";

	            //提交保存
	            let randomID = "formulaList"+parseInt(Math.random()*100)+new Date().getTime();
	            formula.id = randomID;

	            local.push(formula);
	        }

	        localStorage.setItem("formulaList",JSON.stringify(local));
	        this.$router.push({ path: '/local' })
        }
    },
	components : {
		Ingredient : Ingredient
	}
}
</script>
<style>
.add_box{
	position:absolute;
	left:0;
	top:50px;
	right:0;
	bottom:50px;
	background:#fff;
	overflow-y:auto;
}
</style>
