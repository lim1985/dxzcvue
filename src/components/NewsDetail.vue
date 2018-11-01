<template>
  <div id="topscoll">
  <div class="loading-layout" v-loading="onloading" >
    <div class="detail-layout">
      <template v-for="(items,index) in newsData">
     <header :key="index" id="header">
        <div class="search"><a @click="hideDetail"><i class="icon iconfont icon-fanhui"></i></a></div>
        <div class="wrapper wrapper03" id="wrapper03"><div class="title">{{items.nodeName}}</div>
      
        </div>
        	<div class="more"><i class="icon iconfont icon-gengduo3"></i></div>
      <!-- <div class="more"><i class="icon iconfont icon-gengduo"></i></div>-->
     </header>
        <!-- <my-menu></my-menu> -->
                  <div class="tt" id="myscrolltop"></div>
              <div class="tops mg">
                          <center class="tab-news-content">
                            <div class="marig dzjj">	
                                <h3>{{items.title}}</h3>           
                                  <ul class="bock">
                                  <li>索 引 号：{{items.IndexNumber}}</li><li>公开类型：主动公开</li><li>公开机构：{{items.DepartmentName}} </li><li>公开日期：{{items.InputTime}}</li><li style="width: 100% !important;">名    称：{{items.title}}</li><li>文 号：</li><li>主 题 词：</li>
                                  </ul>  
                                   <div v-html="items.newsbody" class="pic-content"></div>
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
                                    <div class="pic-content"><img :src="'http://www.dxzc.gov.cn/uploadfiles/'+item.DefaultPicUrl"></div>
                                    </a>
                                    </div>
                          </template>
                              </div>

                            </div>
                         
                        </center>
            </div>
        </template>
              </div>
            </div>
          </div>  
       </template>
<script>
  // import myMenu from './menu'
  import newsDetail from './NewsDetail.vue'
	export default {
    props:['curItem'],
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
        onloading:false,

			}
    },
    computed: {

    },
    created(){
         
    },
    mounted() {
     this.onloading=true;
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
      //let curHeight =document.getElementById('topscoll').scrolltop
      //document.documentElement.scrollTop = document.body.scrollTop =0;
      //console.log('当前的scrolltop高度是'+curHeight)
      //window.addEventListener('scroll', this.needToTop);  //滚动事件监听
        },

         ListitemgetDetail:function (itemid) {
            let curitemid=itemid
            let v_scrolltop=  $("#tops").scrollTop()
            let v_height=  $("#tops").height()
            console.log(v_scrolltop+'height'+v_height)
              ///Category_1189/Index.aspx 正式接口
           ///detail 测试接口
          this.axios.get('/Category_1189/Index.aspx', {//获取新闻列表的内容
            params: {
              itemid: curitemid
            }
          }).then(res => {          
              if(res.status >= 200 && res.status < 300)  
              {
            let temp_data=res.data      
               
            temp_data =  temp_data.replace(/	/g, "")
            .replace(/\r|\n/g, "")
            .replace(/&lt;/g, "<")
            .replace(/&gt;/g, ">").trim()
            var json=eval("("+ temp_data+")");         
            this.newsData=json.data.Contents        
            console.log('得到的itemid是'+this.curItem)
            this.onloading=false;    
          }}).catch(function () {
            console.log('请求失败了！！');
          });
        },


        Hideloading:function()
        {
            this.onloading=true;
            console.log(this.onloading);
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
          this.Hideloading();
          this.newsData=this.initdata
          this.showDetails = true
          let curitemid=this.curItem
          this.axios.get('/Category_1189/Index.aspx', {//获取新闻列表的内容测试/detail、正式//Category_1189/Index.aspx
            params: {
              itemid: curitemid
            }
          }).then(res => {
          if(res.status >= 200 && res.status < 300)  
           { 
             console.log(res.status)
              let temp_data=res.data
              this.onloading=false
              if(typeof temp_data == "string")
            {
            //  console.log('获取的返回值'+temp_data)
            temp_data =  temp_data.replace(/	/g, "")
            .replace(/\r|\n/g, "")
            .replace(/&lt;/g, "<")
            .replace(/&gt;/g, ">").trim()
            var json=eval("("+ temp_data+")");
          
            this.newsData=json.data.Contents
            console.log(this.newsData)
           
           }
           else
           {
               console.log(res.data.data.Contents)
              this.newsData=res.data.data.Contents
             
           }
           }}).catch(function () {
            console.log('请求失败了aaaa！！');
          });
        },
        curitemgetDepList:function()
        {
          let curitemid=this.curItem
          ///Category_1110/Index.aspx 正式接口
          this.axios.get('/Category_1110/Index.aspx', {//获取当前新闻页的相关内容 代理接口 /list
            params: {
              itemid: curitemid
            }
          }).then(res => {
            //	this.msg=res.data.data
            //console.log(res.data.data.banners)
            console.log('相关内容是')
            // console.log(res)

            let temp_data=res.data.list
            //  console.log('获取的返回值'+temp_data)
            this.Detailslist=temp_data
               var pics=json.data.DefaultPicUrl
            // console.log(pics)
            // console.log(itemid)
            // console.log(_self.newsData)
            console.log('得到的itemid是'+this.curItem)
          }).catch(function () {
            console.log('请求失败了！！');
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
</style>




