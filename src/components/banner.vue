<template>
  <div>
    <!--<news-detail  v-on:hide="HideandShow" :show="showDetails" :curItem="curitem" :newsData="newsData" v-show="showDetails"></news-detail>-->
	<div v-show="showBanner" class="banner">
    <ul class="hiSlider hiSlider3">
<!--
<li  :data-title="item.title" class="hiSlider-item" v-for="(item,index) in dd"><a  :href="'http://www.dxzc.gov.cn/item/'+item.itemId+'.aspx'">
    <img :src="'http://www.dxzc.gov.cn'+item.DefaultPic" :alt="item.title"></a>

</li>
-->
    <li :data-title="item.title" class="hiSlider-item" v-for="(item,index) in dd"><a @click="getItem(item.itemId)">
      <img :src="'http://www.dxzc.gov.cn'+item.DefaultPic" :alt="item.title"></a>
    </li>

<!--
	
		<li data-title="22222" class="hiSlider-item"><a><img src="http://www.dxzc.gov.cn/UploadFiles/2017/8/201782595349.jpg" alt="22222"></a></li>
		<li data-title="33333" class="hiSlider-item"><a><img src="http://www.dxzc.gov.cn/UploadFiles/2017/8/201782885131.jpg" alt="33333"></a></li>
		<li data-title="44444" class="hiSlider-item"><a><img src="http://www.dxzc.gov.cn/UploadFiles/2017/8/2017825121842.JPG" alt="44444"></a></li>
		<li data-title="55555" class="hiSlider-item"><a><img src="http://www.dxzc.gov.cn/UploadFiles/2017/8/201782595349.jpg" alt="55555"></a></li>
			<li data-title="11111" class="hiSlider-item"><a><img src="http://www.dxzc.gov.cn/UploadFiles/2017/8/20178289633.JPG" alt="11111"></a></li>
		<li data-title="22222" class="hiSlider-item"><a><img src="http://www.dxzc.gov.cn/UploadFiles/2017/8/201782595349.jpg" alt="22222"></a></li>
-->
	</ul>
    </div>

  </div>
</template>

<script>

 // import newsDetail from './NewsDetail.vue'
  import './../assets/js/jquery.hiSlider.min.js'

  export default {
  name: 'hello',
      data () {
        return {

          dd:[],
          obj:[],
          curitem:'',
          showDetails:false,
          showBanner:true,
          itemId:'',
          show:'true',
          newsData:[],
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
        this.axios.get('/Category_1188/Index.aspx').then(res=>{
          //	this.msg=res.data.data
          //console.log(res.data.data.banners)
          //  console.log(res)
          this.dd=res.data.data.banners
          this.$nextTick(function (){
            this.mountListSuccess();
          });
        });
        console.log('挂载成功！')
      },
      methods:
    {

      HideandShow:function () {
        this.showDetails=false
        this.showBanner=true
      },
      //test接口/detail
      //item获取新闻接口http://www.dxzc.gov.cn/Category_1189/Index.aspx?itemID=53454
      getItem: function (itemid) {
        let _self=this
        this.axios.get('/Category_1189/Index.aspx', {
          params: {
            itemid: itemid
          }
        }).then(res => {
          //	this.msg=res.data.data
          //console.log(res.data.data.banners)
          let temp_data=res.data
          console.log('获取的返回值'+temp_data)
          temp_data =  temp_data.replace(/	/g, "");
          temp_data =  temp_data.replace(/\r/g, "");
          temp_data =  temp_data.replace(/\n/g, "");
          temp_data =  temp_data.replace(/&lt;/g, "<");
          temp_data =  temp_data.replace(/&gt;/g, ">").trim();
          var json=eval("("+ temp_data+")");
          _self.newsData=json.data.Contents
          console.log(itemid)
          console.log(_self.newsData)
          this.showDetails = true
          this.$emit('postcuritem',itemid)
        }).catch(function () {
          console.log('请求失败了！！');
        });
        this.curitem = itemid;

        return this.curitem


      },
      mountListSuccess()
    {
      $('.hiSlider3').hiSlider({
        isFlexible: true,
        isSupportTouch: true,
        titleAttr: function(curIdx){
          return $('img', this).attr('alt');
        }
      });
    }
    },
  created:function()
  {
      console.log("")
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
