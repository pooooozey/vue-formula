<template>
  <div id="box">
  	<transition name="" mode="out-in">
      <router-view></router-view>
    </transition>
  	<div class="foot">
  		<router-link to="/online" active-class="active">平台</router-link>
  		<router-link to="/local" active-class="active">本地</router-link>
	</div>
  </div>
</template>

<script>

</script>

<style>
a:active {outline: none;star:expression(this.onFocus=this.blur());}
a,button,input,span{-webkit-tap-highlight-color:rgba(255,0,0,0);}
*{margin:0;padding:0;list-style:none;outline:none;word-wrap:break-word;}
img{border:none}
table{table-layout:fixed; border-collapse:collapse}
a{ text-decoration:none;}
input{ border-radius:0; background:none;}
body{ background:#f1f1f1; font-size:12px; font-family:helvetica,Arial,"微软雅黑","宋体"; -webkit-text-size-adjust:none;}
.fl{ float:left;}
.fr{ float:right;}
.fb{ font-weight:bold;}
.tc{ text-align:center;}
.hide{ display:none;}

.main{
	padding:55px 0 50px 0;
}
.main dl{
	margin:0 0 5px 0;
	overflow:hidden;
}
.main dt{
	font-size:16px;
	height:40px;
	line-height:40px;
	background:#fff;
	margin:0 0 5px 0;
	padding:0 0 0 10px;
}
.head{
	width:100%;
	height:50px;
	line-height:50px;
	background:#619cec;
	color:#fff;
	text-align:center;
	font-size:18px;
	position:fixed;
	left:0;
	top:0;
	z-index:100;
}
.head .edit{
	position:absolute;
	right:50px;
	top:0;
	font-size:14px;
	color:#fff;
}
.head .add{
	position:absolute;
	right:10px;
	top:0;
	font-size:14px;
	color:#fff;
}
.head .back{
	position:absolute;
	left:10px;
	top:0;
	font-size:14px;
	color:#fff;
}
.foot{
	width:100%;
	height:50px;
	line-height:50px;
	position:fixed;
	left:0;
	bottom:0;
	z-index:100;
	background:#fff;
    display:-moz-box;
    display:-webkit-box;
    display:box;
    text-align:center;
    font-size:14px;
}
.foot a{
	color:#666;
	display:block;
    -moz-box-flex:1;
    -webkit-box-flex:1;
    box-flex:1;
}
.foot .active{
	background:#619cec;
	color:#fff;
}
.detail {
    position: absolute;
    left: 0;
    top: 50px;
    right: 0;
    bottom: 50px;
    background: #fff;
    overflow-y: auto;
}

.detail .detail_box {
    margin: 0 10px;
}

.detail h2 {
    font-size: 18px;
    text-align: center;
    color: #666;
    font-weight: bold;
    margin: 20px 0 10px 0;
}

.detail img {
    max-width: 100%;
}

.detail .load {
    margin: 40px 0 20px 0;
}

.detail .cont {
    line-height: 24px;
    color: #666;
    font-size: 14px;
}
</style>
