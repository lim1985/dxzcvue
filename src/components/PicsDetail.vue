<template>    
<div  class="pics-layout" id="img-box">
	<header id="header">
		<div class="search"><a @click="hideDetail"><i class="icon iconfont icon-fanhui"></i></a></div>
        <div class="wrapper wrapper03" id="wrapper03"><div class="title">{{datas.title}}</div></div>
		<div class="more"><i class="icon iconfont icon-gengduo3"></i></div></header>

    <div class="imgbox">

<div class="im_im"><span></span>


  <swiper :options="swiperOption"  ref="mySwiper">  
            <!-- 这部分放你要渲染的那些内容 -->  
            <template   v-for="(img,index) in datas.imgs">
            <swiper-slide :key="index">  
               <img :src="'http://www.dxzc.gov.cn/'+img">
            </swiper-slide>  
            </template>
            <!-- 这是轮播的小圆点 -->  
         
   </swiper>  
<!-- <div v-swiper:mySwiper="swiperOption">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="img in datas.imgs">
        <img :src="'http://www.dxzc.gov.cn/'+img">
      </div>
    </div>
  
  </div> -->
      </div> 
        <!-- <div class="im_im"><span></span>
        
        <img src="http://www.dxzc.gov.cn/uploadfiles/2015/1/201514153849.jpg">
              </div> 
  -->

         <div class="im-txtbox">
                <div class="im-title"><span>   <div class="swiper-pagination" slot="pagination"></div>  </span>{{datas.title}}</div>
           
            <div class="im-txt">暂无图片说明！</div>
            <!--
            <div class="im-txt1">板桥乡风景</div>
            -->
        </div>
    </div>
</div>   
</template>
<script>
// import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

	export default {
        name: 'app',
       props:['curItem'],
         watch:{
      curItem:'GetcurItem'
             },
		data () {
			return {
        initdata:[],
        notNextTick: true,  
        swiperOption: {
               //是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true  
                pagination :'.swiper-pagination',
                notNextTick: true,  
                pagination:'.swiper-pagination',  
                slidesPerView: 'auto',  
                centeredSlides: true,  
                paginationType : 'fraction',
                paginationClickable: true,  
                spaceBetween:10,  
                onSlideChangeEnd: swiper => {  
                        //这个位置放swiper的回调方法  
                        this.page = swiper.realIndex+1;  
                        this.index = swiper.realIndex;  
         }  
        },
        page:'',
        index:'',
				item: [
					{name: '首页', url: '/'},
        ],
        datas:[]      
        
        	}
    },

    computed: {
    swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
    created(){

    },
    mounted() {
       this.swiper.slideTo(0, 1000, false)
            this.GetcurItem()
      //  this.scrollTop = 500
      // setTimeout(() => {
        //     alert(`异步${this.curItem}`);
        // },100);
    },
    components:{
          swiper, swiperSlide 
    },
    methods:
      {
       GetcurItem:function () {

           this.ListitemgetDetail();
      
        },
          hideDetail()
          {
          //  this.showDetails=false;
            this.$emit('hide')
          },
            ListitemgetDetail:function (itemid) {
              let curitemid=this.curItem
             this.datas=this.initdata
//            let myscroll= $("#tops").scrollTop
//           console.log(myscroll.scrollTop())
//           let curscrolltop=$("#tops")
//           console.log(curscrolltop)
//           curscrolltop.scrollTop(0)
//           console.log(curscrolltop.scrollTop)
        //   let documenttop=document.documentElement.scrollTop
         //  console.log(documenttop)
         //  var scrolltop=document.getElementById('topscoll').scrolltop
         //  let scrolltops = this.$el.querySelector("#topscoll").scrollTop
         //  console.log(scrolltops)
          //  let curHeight =document.getElementById('topscoll').scrollTop
          //  console.log('当前的scrolltop高度是'+curHeight)
              ///Category_1189/Index.aspx 正式接口
           ///detail 测试接口
          this.axios.get('/detail', {//获取新闻列表的内容
            params: {
              itemid: curitemid
            }
          }).then(res => {
            //	this.msg=res.data.data
            //console.log(res.data.data.banners)
            let temp_data=res.data
          // console.log('获取的返回值'+temp_data)
            temp_data =  temp_data.replace(/	/g, "")
            .replace(/\r|\n/g, "")
            .replace(/&lt;/g, "<")
            .replace(/&gt;/g, ">").trim()
            var json=eval("("+ temp_data+")");
           //console.log(json.data.Contents)
               console.log(json.data.Contents)
               let datalist=json.data.Contents
             console.log(datalist)
               this.datas=datalist[0]
                 //计算内容里的图片个数
            for (var x in this.datas)
     {
         var body=this.datas.newsbody
      //   console.log(body)
         var obj=this.datas
       
        //  var curitem=self.newsList.newslist[x].ID
        //  this.curitem=curitem
       //  console.log(showAuthor)
       
         var reg1=/<img.+?\/>/g;
         var r=body.match(reg1);
      //   console.log('r是什么？'+r)
        if(r){
        var imgCount=r.length;
         var reg2=/src="(.+?)"/g;
          var imgs=[];
          for(var i in  r){
            var matchR=r[i].match(reg2);
          //  console.log("图片地址"+RegExp.$1);
            imgs.push(RegExp.$1);
           obj.imgCount=imgCount
           obj.imgs=imgs
         }
       //  console.log('matchr是什么？'+matchR+'打印imgs'+imgs+'图片总数：'+imgCount)
        }
        else
        {
            obj.imgCount=0
        }
     //  console.log('-------------------------------------------')
      }
          }).catch(function () {
            console.log('请求失败了！！');
          });
        },
      
      }
	}
</script>
<style scoped>
  .pics-layout{
    position:fixed;
    top:0;
    bottom:0;
    left:0;
    right:0;
    overflow: auto;
    z-index:1999;
    background:#fff;

  }
  .im_im img
  {
      height:auto;
  }
  .listss
  {
    padding-top:100px;
  }
  .im_im
  {
      height:auto;
  }

</style>




