<template>
    <div>
      这是办事服务页面
        <ul>
            <li v-for="i in item">
                {{i.name}}
            </li>
        </ul>
    </div>
</template>
<script>
	export default {
		name: 'app',
		data () {
			return {
				item: [
					{name: '首页', url: '/'},

				]
			}
		},

	created(){
	gotoUrl();

	},
	methods:
	{
		gotoUrl()
		{
  			window.location ="http://www.dxzc.gov.cn";
		}
            
	}
	}
</script>
<style></style>
