<template>
  <div class="Mg-video">
   
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      htmls:'',
      params:{'itemid':'55872'}
    }
  
  },
   mounted()
  {
     this.Myunilt.axiosGetnewslist('/banns').then(res=>{       
     console.log(res)            
           }),
     this.Myunilt.axiosGetnewslist('/detail',{
       params:this.params
     }).then(res=>{      
       var html=res.data
       var json
       json= this.Myunilt.ContentsRexg(html)
       console.log(typeof(json.data))
     console.log(json)            
           })
         
           
  	// this.GetMGTV();
  },
  methods:
  {
   
  		GetMGTV:function()
  		{
  			 this.axios.get('/Getrednet', {//获取新闻列表的内容
        
          }).then(res => {          
              if(res.status >= 200 && res.status < 300)  
              {
           			console.log(res)
           			this.htmls=res.data;
          }}).catch(function () {
            console.log('请求失败了！！');
          });
  		}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
