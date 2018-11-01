<template>
  <div id="topscoll">
   
  <div class="loading-layout" v-loading="onloading" >
    <div class="detail-layout">
      <template>
     <header  id="header">
        <div class="search"><a @click="hideDetail" ><i class="icon iconfont icon-fanhui"></i></a></div>
        <div class="wrapper wrapper03" id="wrapper03"><div class="title"></div>
      
        </div>
        	<!-- <div class="more"><i class="icon iconfont icon-gengduo3"></i></div> -->
      <!-- <div class="more"><i class="icon iconfont icon-gengduo"></i></div>-->
     </header>
        <!-- <my-menu></my-menu> -->
                  <div class="tt" id="myscrolltop"></div>
     
            <div class="mainbox">
        
  <div class="wrap1">
   <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
    
         <el-tab-pane label="基础信息" name="first">
        <div class="swiper-slide">
           <div class="content-slide">
              <ul data-am-widget="gallery" class="am-gallery am-gallery-tab" data-am-gallery="{ pureview: true }" >
              <li class="am-gallery-item">                
                  <a class="">
                    <h3 class="am-gallery-title">事项名称</h3>
                    <div class="am-gallery-desc">{{this.banshidetail.title}}</div>
                  </a>
              </li>
                <li class="am-gallery-item">                
                  <a class="">
                    <h3 class="am-gallery-title">法定期限</h3>
                    <div class="am-gallery-desc">{{this.banshidetail.LawTimeLimit}}</div>
                  </a>
                   <a class="">
                    <h3 class="am-gallery-title">承诺期限</h3>
                    <div class="am-gallery-desc">{{this.banshidetail.PromiseTimeLimit}}</div>
                  </a>
                   <a class="">
                    <h3 class="am-gallery-title">办理单位</h3>
                    <div class="am-gallery-desc">{{this.banshidetail.ProcessingDepartment}}</div>
                  </a>
                    <a class="">
                    <h3 class="am-gallery-title">办理时间</h3>
                    <div class="am-gallery-desc">{{this.banshidetail.ProcessingTime}}</div>
                  </a>
                     <a class="">
                    <h3 class="am-gallery-title">办理地点</h3>
                    <div class="am-gallery-desc">{{this.banshidetail.ProcessingAddress}}</div>
                  </a>
                      <a class="">
                    <h3 class="am-gallery-title">交通方式</h3>
                    <div class="am-gallery-desc">{{this.banshidetail.TrafficRoutes}}</div>
                  </a>
                       <a class="">
                    <h3 class="am-gallery-title">咨询电话</h3>
                    <div class="am-gallery-desc">{{this.banshidetail.AdvisoryTelephone}}</div>
                  </a>
              </li>
               <li class="am-gallery-item">  
                   <a class="">
                    <h3 class="am-gallery-title">实施依据</h3>
                    <div v-html="this.banshidetail.ExecutionBasis" class="am-gallery-desc"></div>
                  </a>
               </li>
                <li class="am-gallery-item">  
                   <a class="">
                    <h3 class="am-gallery-title">申请材料</h3>
                    <div v-html="this.banshidetail.REREQ" class="am-gallery-desc"></div>
                  </a>
               </li>
                 <li class="am-gallery-item">  
                   <a class="">
                    <h3 class="am-gallery-title">实施条件</h3>
                    <div v-html="this.banshidetail.ExecutionConditions" class="am-gallery-desc"></div>
                  </a>
               </li>
                <li class="am-gallery-item">  
                   <a class="">
                    <h3 class="am-gallery-title">实施程序</h3>
                    <div v-html="this.banshidetail.ExecutionProgram" class="am-gallery-desc"></div>
                  </a>
               </li>
                  <li class="am-gallery-item">  
                   <a class="">
                    <h3 class="am-gallery-title">工作时间</h3>
                    <div class="am-gallery-desc">{{this.banshidetail.ProcessingTime}}</div>
                  </a>
               </li>
                 <li class="am-gallery-item">  
                   <a class="">
                    <h3 class="am-gallery-title">特别程序</h3>
                    <div class="am-gallery-desc"></div>
                  </a>
               </li>
                <li class="am-gallery-item">  
                   <a class="">
                    <h3 class="am-gallery-title">是否收费</h3>
                    <div class="am-gallery-desc">{{this.banshidetail.ChargesBasis}}</div>
                  </a>
                   <a class="">
                    <h3 class="am-gallery-title"><a :href="'http://www.dxzc.gov.cn/UploadFiles/'+this.banshidetail.TableURL">表格下载</a></h3>
                    <div class="am-gallery-desc">表格下载</div>
                  </a>
               </li>

              
                 <!-- <li class="am-gallery-item">  
                 
                   
               </li> -->
             </ul>
           </div>
         </div>
      
      </el-tab-pane>
  
 
    <el-tab-pane label="实施依据" name="second">
      
     <div class="swiper-slide">
           <div class="content-slide">
              <ul data-am-widget="gallery" class="am-gallery am-gallery-tab" data-am-gallery="{ pureview: true }" >
              <li class="am-gallery-item">                
                  <a class="">
                    <h3 class="am-gallery-title">实施依据</h3>
                 <div v-html="this.banshidetail.ExecutionBasis" class="am-gallery-desc"></div>
                  </a>
              </li>
             </ul>
           </div>
         </div>
      
      </el-tab-pane>
    <el-tab-pane label="办理流程图" name="third">
       <div class="swiper-slide">
           <div class="content-slide">
              <ul data-am-widget="gallery" class="am-gallery am-gallery-tab" data-am-gallery="{ pureview: true }" >
              <li class="am-gallery-item">                
                  <a class="">
                    <h3 class="am-gallery-title">办理流程图</h3>
                     
                    <div class="am-gallery-desc">
                          <img :src="'http://www.dxzc.gov.cn/UploadFiles/'+this.banshidetail.WorkflowChart"/>

                    </div>
                  </a>
              </li>
             </ul>
           </div>
         </div>
      
      
      </el-tab-pane>
   
  </el-tabs>
</div>
   </div>




        </template>
              </div>
            </div>
          </div>  
       </template>
<script>

	export default {
      props:['banshidetail'],
            watch:{
      banshidetail:'Getbanshidetail',
   
    },

		name: 'app',
		data () {
			return {
				item: [
					{name: '首页', url: '/'},
        ],
        curitem:'',
    
        newsDetails:[],
        itemid:'',
        newsData:[],
        Detailslist:[],
      //  scrollTop: 0,
        errorlist:false,
        initdata:[],
        onloading:false,
       activeName: 'first'

			}
    },
      components: {

    },
    computed: {

    },
    created(){
        
    },
    mounted() {      
       
                  //  $(".el-tabs__nav").css('width',100%);
      //  this.scrollTop = 500
      // setTimeout(() => {
        //     alert(`异步${this.curItem}`);
        // },100);
    },

    methods:
      {
        Getbanshidetail:function()
        {

          console.log(this.banshidetail)
        },
   hideDetail()
          {
                      //  this.showDetails=false;            
            this.$emit('hide')  
          },
        handleClick(tab, event) {
        console.log(tab, event);
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




