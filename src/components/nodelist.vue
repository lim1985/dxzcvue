<template>
<div class="nodelist-layout">
<div class="tops mg">
     <news-detail  v-on:hide="HideandShowdetail"  :curItem="curitem" v-show="showDetails"></news-detail>
<div class="loading-layout" v-loading="onloading">
    	<header id="header">
		<div class="list_header search"><a  @click="hideDetail"><i class="icon iconfont icon-fanhui"></i></a></div>
		<div class="wrapper wrapper03" id="wrapper03"><div class="title">{{curnodename}}</div>
</div>
        <!-- <div class="more"><i class="icon iconfont icon-gengduo2"></i></div> -->
        
        </header>
    <!-- <div class="search2">
  		<input type="text" class="s_box" placeholder="请搜索" value="" id="J_suggest_input" ><i class="iconfont s_btn" mx-click="search()" data-spm-click="gostr=/alimama.30;locaid=d81551fea">&#xe601;</i>
  </div> -->
<center class="tab-news-content">
	<div class="marig">
		<dl class="newsxu">
       <template v-for="(items,index) in lists">
      <dd :key="index" ><a @click="postItemid(items.ID)" href="#">{{items.title}}  </a><p><i>索引号:{{items.IndexNumber}}</i><span>{{items.InputTime}}</span></p></dd>
		
       </template>
		</dl>
		<div class="page_btn clearfix">
				<a @click="uppage" class="disbtn">上一页</a>	　　
                <!-- <div class="tz"><input class="xzk" name="gotopage"   :value="nowpageindex" type="text">
                <span>页</span>　
                <input @click="getnodeslist(nowpageindex,nodelist.nodes)" id="pager.jumpto" value="确定" class="sure" name="pager.jumpto"></div> -->

                <a @click="nextpage" class="dxia">下一页</a>
			</div>

</div>
</center>
</div>	
</div>
</div>
</template>

<script>
 import newsDetail from '.././components/NewsDetail.vue'
export default {
  props:['myNDparams','curnodename','loading','keyword'],
      watch:{      
      nowpageindex:'GetNowPaglist',      
      myNDparams:'GetlistbyParams'  
  
    },
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      nowpageindex:1,
      nownode:'',
      onloading:true,
      nodelist:[],
      lists:[],
      showDetails:false,
      curitem:''
    }
  } ,
    components: {
newsDetail
  },
    mounted() {
          console.log('子组件传来的值')
        

    },

   created(){
          
    
  },

   methods:{
          GetlistbyParams:function()
       {
         //正式地址：'/Category_1212/Index_'+this.nowpageindex+'.aspx'
         //测试地址：'/ReqListsBysQueryApi/'+this.nowpageindex
         console.log(this.myNDparams)
         this.axios.get('/Category_1212/Index_'+this.nowpageindex+'.aspx',{          
           params: this.myNDparams                         
          }).then(res => {     
                   if(res.status >= 200 && res.status < 300)  
              {          
                console.log(res);
                this.onloading=false;
                this.lists=res.data.newslist; 
              }

          }).catch(function () {
            console.log('请求失败了1111！！');
          });
         
       },
      postItemid:function(itemid)
      {
               this.showDetails=true
               this.curitem = itemid;
      },
       HideandShowdetail:function () {
         this.showDetails=false
        //  this.showBanner=true
        //this.curitem=''
      },
     GetNowPaglist:function()
     {  
          this.GetlistbyParams();     
     },
        uppage:function()
        {
            if(this.nowpageindex==1)
            {
                  this.$message({
          message: '你别费劲了，这已经是第一页了！',
          type: 'warning'
        });
            }
            else
        {
            this.nowpageindex--
               console.log(this.nowpageindex)
        
           
         } 
        },
        nextpage:function()
        {
            this.nowpageindex++
               console.log(this.nowpageindex)
         
            
        },
      Hideloading:function()
        {
            this.onloading=true;
            
        },
   
            hideDetail()
          {
          //  this.showDetails=false;
            this.$emit('hide')
            this.onloading=true;
            this.nowpageindex=1;
            this.lists=[];
          },
        getnodeslist:function(page,nodes)
        {    
         //正式地址：'/Category_1212/Index_'+this.nowpageindex+'.aspx'
         //测试地址：'/ReqListsBysQueryApi/'+this.nowpageindex
         this.axios.get('/Category_1212/Index_'+this.nowpageindex+'.aspx',{
           params: {
              squery: nodes         
              
            }
          }).then(res => {     
                   if(res.status >= 200 && res.status < 300)  
              {          
            console.log(res.data.newslist)  
            this.lists=res.data.newslist;  
              }

          }).catch(function () {
            console.log('请求失败了1111！！');
          });
        }
     
  },

}
</script>
<style scoped>
.nodelist-layout
{
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
  .el-loading-spinner
  {
      top: 45% !important;
  }
</style>

<!-- Add "scoped" attribute to limit CSS to this component only -->
