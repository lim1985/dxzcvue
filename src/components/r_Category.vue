<template>

<div class="nodelist-layout">
  <div>
  <el-popover
  v-model="viewvisible"
  ref="popover7"
  placement="right"
  :title="'大祥'+departmentName"
  popper-class="depnodeslist"
  trigger="click">
  <ul>
    <!-- <li><router-link :to="{path:'/category/55/1'}"><span>111111</span></router-link></li> -->
  <template v-for="(items,index) in objnodelists">
    <li class="nodelists"><router-link @click.native="hidenodelists" :to="items.Uri"><span>{{items.NodeName}}</span></router-link></li>   
      <!-- <li :key="index" @click="GetDp_nodelist(items.NodeID,items.ModelID)" class="nodelists"><span>{{items.NodeName}}</span></li> -->
   </template> 
    </ul>
    <hr>
    <div class="dpfooter"></div>
</el-popover>
 </div>
<div class="tops mg">
     <news-detail  v-on:hide="HideandShowdetail"  :curItem="curitem" v-show="showDetails"></news-detail>
<div class="loading-layout" v-loading="onloading">
    	<header id="header">
		<div class="list_header search"><a><i @click="back" class="icon iconfont icon-fanhui"></i></a></div>
		<div class="wrapper wrapper03" id="wrapper03"><div class="title">大祥{{departmentName}}-{{nodename}}</div>
</div>
        <div class="more1"><i v-popover:popover7 class="icon iconfont icon-gengduo3"></i></div>     
        </header>
    <!-- <div class="search2">
  		<input type="text" class="s_box" placeholder="请搜索" value="" id="J_suggest_input" ><i class="iconfont s_btn" mx-click="search()" data-spm-click="gostr=/alimama.30;locaid=d81551fea">&#xe601;</i>
  </div> -->
 
<center class="tab-news-content">
	<div class="marig">
		<dl class="newsxu">
       <template v-for="(items,index) in lists">
      <dd :key="index"><a @click="postItemid(items.ID)" href="#">{{items.title}} </a><p><i>索引号:{{items.IndexNumber}}</i><span>{{items.InputTime}}</span></p></dd>
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
//   props:['myNDparams','curnodename','loading','keyword'],
watch:{
  $route (to, from) 
  {
    this.GetParamsbyrouter();
  },
  nowpageindex:'GetNowPaglist'
},
    //   watch:{      
     
    //   myNDparams:'GetlistbyParams'  
  
    // },
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      nowpageindex:1,
      nownode:'',
      onloading:true,
      nodelist:[],
      lists:{},
      showDetails:false,
      curitem:'',
      objnodelists:{},
      countPages:0,
      viewvisible:false,
      departmentName:'',
      nodename:''
    }
  } ,
    components: {newsDetail},

    mounted() {
        console.log('子组件传来的值')
        console.log(this.$route.params)
        this.GetParamsbyrouter();
        this.Myunilt.Getchildsnodelist(this.$route.params.id).then(res=>{       
        this.objnodelists=res             
           })  
    },

   created(){
 
  },

   methods:{
      //    GetlistbyParams:function()
      //  {
      //    //正式地址：'/Category_1212/Index_'+this.nowpageindex+'.aspx'
      //    //测试地址：'/ReqListsBysQueryApi/'+this.nowpageindex
      //    console.log(this.myNDparams)
      //    this.axios.get('/Category_1212/Index_'+this.nowpageindex+'.aspx',{          
      //      params: this.myNDparams                         
      //     }).then(res => {     
      //              if(res.status >= 200 && res.status < 300)  
      //         {          
      //           console.log(res);
      //           this.onloading=false;
      //           this.lists=res.data.newslist; 
      //         }

      //     }).catch(function () {
      //       console.log('请求失败了1111！！');
      //     });
         
      //  },
      hidenodelists:function()
      {
        this.viewvisible=false;
        this.nowpageindex=1;
      },
        GetParamsbyrouter()
    {
        let i= this.$route.params.id
        let m= this.$route.params.ModelID
        //测试地址'/resNodelists/'+this.nowpageindex
      ///'/Category_1193/Index_'+this.nowpageindex+'.aspx'正式地址
 
      this.axios.get('/Category_1193/Index_'+this.nowpageindex+'.aspx',
        {
           params: {
           squery:i,
           modelid:m
        }
        })
        .then(res=> {    
                   
              if(res.status >= 200 && res.status < 300)  
              {       
               
                this.onloading=false;
                this.lists=res.data.newslist; 
                console.log(this.lists)
                this.countPages=res.data.newslist[0].countPages;
                this.departmentName=res.data.newslist[0].ParentName;
                 this.nodename=res.data.newslist[0].nodeName;
                console.log(typeof(this.countPages));
                console.log(this.countPages)
              }
   
        })
    },      
        
       back:function()
       {
        this.onloading=true;
        this.nowpageindex=1;
        this.lists=[];
        console.log(window.history.length);
         window.history.length > 1? this.$router.push('/zwgk') : this.$router.push('/')
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
          this.GetParamsbyrouter();     
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
          if(this.nowpageindex==this.countPages)
          {
         this.$message({
          message: '没有了啊，这已经是最后页了！',
          type: 'warning'
        });
          }
          else
          {
            this.nowpageindex++
               console.log(this.nowpageindex)
         }
            
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
  .depnodeslist
{
  top:0px !important;
  height:92%;
  left:115px !important;
  width:60%;
}
.nodelists
{
    font-size: 16px;
    float: left;
    text-align: left;
    width: 60%;
    padding: 10px;
    color: #2b2b2b;
}
.nodelists span
{
      border-bottom: 1px #409EFF solid;
}
.more1
{
  line-height: 1.3rem;
}
</style>

<!-- Add "scoped" attribute to limit CSS to this component only -->
