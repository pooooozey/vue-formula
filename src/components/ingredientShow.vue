<template>
	<li>
        <span class="fl">{{name}}</span>
        <span class="fr">{{weight}}克</span>
    </li>
</template>

<script>
export default {
	props: ['weight','name']
}
</script>

