<template>
<div class="tops mg">
<center class="tab-news-content">
	<div class="marig dzjj">
	
            <h3>{{Datalist.title}}</h3>
           <p class="sjh">时间:{{Datalist.InputTime}}     来源:大祥区人民政府办公室 
</p>

 <div v-html="Datalist.newsbody" ></div>
        <!--<div class="sxyp1">
            <ul class="topdown">
              <li><b style="color:#c81623;">上一篇:</b><a href="#" target="_self">王兰鹏王兰鹏王兰鹏、檀江等乡镇街道道路…</a><span>[02-22]</span></li> 
              <li><b style="color:#c81623;">上一篇:</b><a href="#" target="_self">【新时代新梦想】区人防办开展慰问贫…</a> <span>[02-14]</span></li></ul>
        </div>-->

</div>

</center>
</div>
</template>
<script>
	export default {
		name: 'app',
		data () {
			return {
				item: [
					{name: '首页', url: '/'},

				],
				Datalist:{}
			}
		},

	created(){
		this.curitemgetDetail();
	},
	methods:
	{
		
			 curitemgetDetail:function () {
       
          this.axios.get('/Category_1189/Index.aspx', {//获取新闻列表的内容测试/detail、正式//Category_1189/Index.aspx
            params: {
              ItemID : 23471
            }
          }).then(res => {
       let temp_data=res.data
      //  console.log(res)
         var json=(this.Myunilt.fixhtmltoJSON(res.data));
            //  console.log('获取的返回值'+temp_data)
          
            // var json=this.Myunilt.fixhtmltoJSON(this.Myunilt.fixhtmltoJSON(res.data.data.Contents[0]))
		   console.log(json.data.Contents[0])
      this.Datalist=json.data.Contents[0]
    
        
         
          }).catch(function () {
            console.log('请求失败了！！');
          });
        },
            
	}
	}
</script>
<style>

</style>
