<template>
  <div class="topnews">   
  <div  class="tab-news-content">
    <div class="new_home">
        <div class="news-item tpl-1">           
        <div class="text-content"><h2>空降排”国际军事比赛：中国空降战车鏖战赛场</h2></div>        
          <!--  <div class="text-content"><h2>{{c.title}}</h2></div>-->
            <div class="pic-content" ><div class="img-wrap"><img src="http://www.dxzc.gov.cn/UploadFiles/2018/4/2018416104039.jpg"/></div></div>
            </div>
             <ul class="news-from"><ol>推荐</ol><li class="src-net"><a>1111</a></li><li class="src-hor">2222</li><li class="src-time">2233322</li></ul>
           <!-- <ul class="news-from"><ol>推荐</ol><li class="src-net"><a @click="alerts(index)">[{{c.nodeName}}]</a></li><li class="src-hor">来源:{{c.Inputer}}</li><li class="src-time">{{c.InputTime}}</li><li class="src-hor" v-show="c.show">作者:{{c.Author}}</li></ul>-->
           </div>   
       </div>
        </div>  
</template>

<script>
 // import newsDetail from './NewsDetail.vue'
  export default {
  name: 'hello',
      data () {
        return {
          json:[]

        }
      },
    components: {
    //  newsDetail
    },
      mounted()
      {
        //test接口/banns
        //banners接口http://www.dxzc.gov.cn/Category_1188/Index.aspx
        // this.axios.get('/banns').then(res=>{
       
        //   this.dd=res.data.data.banners
        //   this.$nextTick(function (){
        //     this.mountListSuccess();
        //   });
        // });
        // console.log('挂载成功！')
      },
      methods:
    {

    //   HideandShow:function () {
    //     this.showDetails=false
    //     this.showBanner=true
    //   },
      //test接口/detail
      //item获取新闻接口http://www.dxzc.gov.cn/Category_1189/Index.aspx?itemID=53454
    //   getItem: function (itemid) {
    //     let _self=this
    //     this.axios.get('/Category_1189/Index.aspx', {
    //       params: {
    //         itemid: itemid
    //       }
    //     }).then(res => {
    //       //	this.msg=res.data.data
    //       //console.log(res.data.data.banners)
    //       let temp_data=res.data
    //       console.log('获取的返回值'+temp_data)
    //       temp_data =  temp_data.replace(/	/g, "");
    //       temp_data =  temp_data.replace(/\r/g, "");
    //       temp_data =  temp_data.replace(/\n/g, "");
    //       temp_data =  temp_data.replace(/&lt;/g, "<");
    //       temp_data =  temp_data.replace(/&gt;/g, ">").trim();
    //       var json=eval("("+ temp_data+")");
    //       _self.newsData=json.data.Contents
    //       console.log(itemid)
    //       console.log(_self.newsData)
    //       this.showDetails = true
    //       this.$emit('postcuritem',itemid)
    //     }).catch(function () {
    //       console.log('请求失败了！！');
    //     });
    //     this.curitem = itemid;

    //     return this.curitem


    //   },
    //   mountListSuccess()
    // {
    //   $('.hiSlider3').hiSlider({
    //     isFlexible: true,
    //     isSupportTouch: true,
    //     titleAttr: function(curIdx){
    //       return $('img', this).attr('alt');
    //     }
    //   });
    // }
    },
  created:function()
  {
      console.log("")
  },

}
</script>
<style scoped>
.topnews
{}
</style
<!-- Add "scoped" attribute to limit CSS to this component only -->
