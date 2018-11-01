<template>
  <div id="topscoll">
    <div class="loading-layout" :loading="onloadstatus" >
    <div class="detail-layout">
      <template v-for="(items,index) in newsData">
      <header id="header">
        <div class="search"><a @click="hideDetail"><i class="icon iconfont icon-fanhui"></i></a></div>
        <div class="wrapper wrapper03" id="wrapper03"><div class="title">{{items.nodeName}}</div>
        </div>
       <div class="more"><i class="icon iconfont icon-gengduo3"></i></div>
     </header>
        <!-- <my-menu></my-menu> -->
        <div class="tt" id="myscrolltop"></div>
    <center id="tops" class="mg">
      <div class="tab-news-content">
        <div class="new_home">
          <div class="news-item tpl-1"><div class="text-content"><h2>{{items.title}}</h2></div>
            <ul class="news-from"><ol>推荐</ol><li class="src-net"></li><li class="src-hor">{{items.DepartmentName}}</li><li class="src-time">{{items.InputTime}}</li></ul>
              <div v-show="items.isvideo" class="mgvideo">                  
               <video :src="items.url_m"  controls="controls" width="100%" height="100%"></video>                               
              </div>         
               <div v-show="items.isoutsideUrl" class="mgvideo">
              <iframe  frameborder="0" :src="items.url_m" width="100%" height="500" name="outsi"></iframe>                 
              </div>
            <div v-html="items.newsbody" class="pic-content">
              <div class="img-wrap">
              {{items.DefaultPicUrl}}
            </div>
            </div>   
          </div>
          <div class="titb">- 相关阅读 -</div>
          <div class="news-item tpl-2" v-for="(item,index) in Detailslist">
          <template v-if="item.error==300">
          <h3>{{item.reust}}</h3>
          </template>
          <template v-if="item.error==200">
            <div  @click="ListitemgetDetail(item.ID)">
            <a href="#myscrolltop">
            <div class="info-content"><div class="text-content"><h2>{{item.title}}</h2></div>
              <ul class="news-from"><ol>置顶</ol><li class="src-net">{{item.nodeName}}</li><li class="src-time">{{item.InputTime}}</li><li class="src-hor"></li></ul></div>
            <div class="pic-content minPic450"><img :src="'http://www.dxzc.gov.cn/uploadfiles/'+item.DefaultPicUrl"></div>
            </a>
            </div>
         </template>
            </div>
            </div>
      </div>
      </center>
     </template>

    </div>
  </div>
  </div>
</template>
<script>
  // import myMenu from './menu'

  import newsDetail from './NewsDetail.vue'
	export default {
    props:['curItem','onloadstatus'],
    watch:{
      curItem:'GetcurItem'
    },
		name: 'app',
		data () {
			return {
				item: [
					{name: '首页', url: '/'},
        ],
        curitem:'',
        showDetails:false,
        newsDetails:[],
        itemid:'',
        newsData:[],
        Detailslist:[],
      //  scrollTop: 0,
        errorlist:false,
        initdata:[],
        onloading:true
      
			}
    },
    computed: {

    },
    created(){

    },
    mounted() {
      console.log('好了!');
      console.log(this.onloadstatus)
      //  this.scrollTop = 500
      // setTimeout(() => {
        //     alert(`异步${this.curItem}`);
        // },100);
    },
    components:{newsDetail},
    methods:
      {

        scrollTops()
        {
      //  let curHeight =document.getElementById('topscoll').scrolltop
          //document.documentElement.scrollTop = document.body.scrollTop =0;
        // console.log('当前的scrolltop高度是'+curHeight)
       //  window.addEventListener('scroll', this.needToTop);  //滚动事件监听

        },

         ListitemgetDetail:function (itemid) {//相关列表获取内容
            let curitemid=itemid
            let v_scrolltop=  $("#tops").scrollTop()
            let v_height=  $("#tops").height()
            console.log(v_scrolltop+'height'+v_height)

              ///Category_1189/Index.aspx 正式接口
           ///detail 测试接口
          this.axios.get('/detail', {//获取新闻列表的内容
            params: {
              itemid: curitemid
            }
          }).then(res => {
                if(res.status >= 200 && res.status < 300)  
              {   
            this.onloading=false;
            let temp_data=res.data  
            var json=  this.Myunilt.fixhtmltoJSON(temp_data)      
            this.newsData=json.data.Contents       
            console.log('得到的itemid是'+this.curItem)
            
              }

          }).catch(function () {
            console.log('请求失败了！！');
          });
        },



        HideandShow:function () {
        this.showDetails=false
        //  this.showBanner=true
        //this.curitem=''
      },
        GetcurItem:function () {
          this.curitemgetDetail();
          this.curitemgetDepList();
        },
        curitemgetDetail:function () {

          this.newsData=this.initdata
          this.showDetails = true
          let curitemid=this.curItem
          console.log(this.curItem)
          this.axios.get('/detail', {//获取新闻列表的内容测试/detail、正式//Category_1189/Index.aspx
            params: {
              itemid: curitemid
            }
          }).then(res => {
           if(res.status >= 200 && res.status < 300)  
              {             
                var temp_data=res.data
              //  console.log(res.data.data.Contents[0])  
                if(typeof(temp_data)=='string')
                {
                
                var json=this.Myunilt.fixhtmltoJSON(temp_data)    
                console.log(json.data.Contents)
                this.newsData=json.data.Contents  
                var _video_url=this.newsData[0].url_m
            
                // var regs=/^[\u4e00-\u9fa5]/

                // if(!regs.test(bodycontents))
                // {
                //   console.log('有中文');
                // }
                // else
                // {
                //    console.log('没有中文');
                // }
               
                //  console.log(result)
                // this.newsData[0].isvideo=_video_url.indexOf('.mp4?')>-1
                this.onloading=false;
             
               if (_video_url)
              {
                      this.newsData[0].isoutsideUrl=true;
              }
               else if(_video_url.indexOf('.mp4?')>-1)
              {
                     this.newsData[0].isvideo=true
                
              }
              else
              {
                    this.newsData[0].isvideo=false
                    this.newsData[0].isoutsideUrl=false;
              }
                // if (_video_url.indexOf('.mp4?')>-1)
                // {
                //   this.newsData[0].isvideo=true   
                //   console.log(this.newsData)            
                // }
                // else // /^[\u4e00-\u9fa5_a-zA-Z0-9]+$/ or /^[\u4e00-\u9fa5]$/
                // {
                //   this.newsData[0].isUrl=true     
                //     console.log(this.newsData)           
                // }
            
                
                }
                else
                {
                  this.newsData=res.data.data.Contents
                  this.onloading=false;
                  console.log('obj成功')
                }
           }            
          }).catch(function () {
            console.log('请求失败了！33！');
          });
        },
        curitemgetDepList:function()
        {
          let curitemid=this.curItem
          ///Category_1110/Index.aspx 正式接口
          this.axios.get('/list', {//获取当前新闻页的相关内容 代理接口 /list
            params: {
              itemid: curitemid
            }
          }).then(res => {
            if(res.status >= 200 && res.status < 300)  
              {   

            let temp_data=res.data.list
            //  console.log('获取的返回值'+temp_data)
            this.Detailslist=temp_data
            var pics=json.data.DefaultPicUrl      
            this.onloading=false;
            console.log('得到的itemid是'+this.curItem)
              }
          }).catch(function () {
            console.log('请求失败了！111！');
          });
        },
        hideDetail()
          {
          //  this.showDetails=false;
            this.$emit('hide')
          }
      }
	}
</script>
<style scoped>
.icon-gengduo3
{
  line-height: 1.3rem;
}
 .loading-layout{
    position:fixed;
    top:0;
    bottom:0;
    left:0;
    right:0;
    overflow: auto;
    z-index:1000;
    background:#fff;

  } 
  .detail-layout{
    position:fixed;
    top:0;
    bottom:0;
    left:0;
    right:0;
    overflow: auto;
    z-index:999;
    background:#fff;

  }

  #topscoll{
    position:fixed;
    top:0;
    bottom:0;
    left:0;
    right:0;
    overflow: auto;
    z-index:999;
    background:#fff;
  }
  .tt
  {
    height:2px;
  }
  .mgvideo
  {

  }
</style>




