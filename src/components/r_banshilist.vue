<template>
  <div class="banshilist-layout">
    <div>
  <el-popover
  ref="popover7"
  placement="right"
  title="大祥"
  popper-class="depnodeslist"
  trigger="click">
  <ul>
    <template v-for="(items,index) in nodelists">
    <li class="nodelists"><router-link :to="items.Uri"><span>{{items.NodeName}}</span></router-link></li>  
      <!-- <li :key="index" @click="GetDp_nodelist(items.NodeID,items.ModelID)" class="nodelists"><span>{{items.NodeName}}</span></li> -->
    </template>
    </ul>
    <hr>
    <div class="dpfooter"></div>
</el-popover>
 </div>
  <div class="tops mg">
       <myBanShidetail  v-on:hide="hidebanshiDetails"  :banshidetail="banshidetail" v-show="showbanshiDetail"></myBanShidetail>
    <div class="loading-layout" v-loading="onloading">
    	<header id="header">
		<div class="search"><a @click="back"><i class="icon iconfont icon-fanhui"></i></a></div>
		<div class="wrapper wrapper03" id="wrapper03"><div class="title">办事服务</div>
</div>
        <div class="more1"><i v-popover:popover7  class="icon iconfont icon-gengduo3"></i></div></header>

<center class="tab-news-content">
	<div class="marig dzjj">
		<div class="search2">
  		<input type="text" class="s_box" placeholder="请搜索" value="" id="J_suggest_input" ><i class="iconfont s_btn" mx-click="search()" data-spm-click="gostr=/alimama.30;locaid=d81551fea">&#xe601;</i>
  </div>
	<ul class="banlist">
<template v-for="(items,index) in bsfwlist">
	<li class="m-item-list">
	   <h2>{{items.title}}</h2>
	      <div class="m-item-box tr_hover" id="item2644">
	          <div class="hd"><div class="row show_bj2"><dl><dd><a href="#"><i class="icon iconfont icon-bumen"></i>办理机构：{{items.ProcessingDepartment}} </a></dd>
<dd><a href="#"><i class="icon iconfont icon-jifenxinxi"></i>收费情况：{{items.IsCharges}}</a></dd><dd style="width: 60%;"><a href="#"><i class="icon iconfont icon-calendar"></i>承诺期限：{{items.PromiseTimeLimit}}工作日</a></dd><dd style="width: 40%;"><a href="#"><i class="icon iconfont icon-icon--"></i>表格下载</a></dd></dl>
	          <div class="links"><span class="link-btn">
	                <a @click="PostbanshiDetail(items.GeneralID)" target="_top">办事详情</a>
	                <a :href="items.HandleOnline" class="disabled">在线办理</a><a class="disabled">在线预约</a><a class="disabled">网上咨询</a><a :href="'tel:'+items.AdvisoryTelephone" class="disabled">电话咨询</a>
		                   </span>
                     </div>
                   </div>
                 </div>
               </div>
             </li>  
 </template>     
</ul>

<div class="page_btn clearfix">
				<a @click="uppage" class="disbtn">上一页</a>	　　<div class="tz"><input class="xzk" name="gotopage" onkeydown="keydowngo('pager.jumpto')" type="text"><span>页</span>　<input onclick="goTo('#',3,5,true,'null',true,'pager')" id="pager.jumpto" value="确定" class="sure" name="pager.jumpto"></div><a @click="nextpage" class="dxia">下一页</a>
			</div>
<!-- <div class="search2">
  		<input type="text" class="s_box" placeholder="请搜索" value="" id="J_suggest_input" ><i class="iconfont s_btn" mx-click="search()" data-spm-click="gostr=/alimama.30;locaid=d81551fea">&#xe601;</i>
  </div> -->
</div>

</center>

</div>
</div>
</div>
</template>
<script>
import myBanShidetail from './banshiDetail'
	export default {
       watch:{
  $route (to, from) 
  {
    this.GetlistbyParams();
  },
  nowpageindex:'GetNowPaglist'
},
   
		name: 'app',
		data () {
			return {
                Detail:[],
                showbanshiDetail:false,
                onloading:true,
                nowpageindex:1,
                bsfwlist:[],
                banshidetail:{},
                scrolls:'',
                nodelists:[],
				item: [
					{name: '首页', url: '/'},

				],
			
			}
		},
  mounted() {
        console.log(this.$route.params)      
        this.GetlistbyParams();
      
    },

	created(){   
    },
       components: {
 myBanShidetail
    },
	methods:
	{
    
        //  pageScroll:function()
        // {
        // window.scrollBy(0,-10);
        // scrolldelay=setTimeout('pageScroll()',100);
        // },
    
        back:function()
       {
        this.onloading=true;
        this.nowpageindex=1;
        this.lists=[];
        console.log(window.history.length);
         window.history.length > 1? this.$router.push('/zwgk') : this.$router.push('/')
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
        PostbanshiDetail:function(id)
        {
               console.log(id)
                    ///Category_1189/Index.aspx 正式接口
           ///detail 测试接口
          this.axios.get('/Category_1189/Index.aspx',{//获取新闻列表的内容
            params: {
              itemid: id
            }
          }).then(res => {          
              if(res.status >= 200 && res.status < 300)  
              {
                  if(typeof res.data=='string')
                  {
                     var html=res.data;
                     var result=   this.Myunilt.fixhtmltoJSON(html);
                     this.banshidetail=result.data.Contents[0];
                     // console.log(result.data.Contents[0])
                     this.showbanshiDetail=true;
                  }
                  else
                  {
                      var result=res.data;
                      this.banshidetail=result.data.Contents[0];
                     // console.log(result.data.Contents[0])
                      this.showbanshiDetail=true;
                  }
         
                
                  this.onloading=false;    
          }}).catch(function () {
            console.log('请求失败了！！');
          });
        },
         hideDetail()
          {
          //  this.showDetails=false;
           this.$emit('hide')    
          },
          hidebanshiDetails()
          {
          //  this.showDetails=false;
           this.showbanshiDetail=false;
          },    
         GetlistbyParams:function()
       {          
           let i= this.$route.params.id
           let m= this.$route.params.ModelID
          //正式地址 '/Category_1193/Index_'+this.nowpageindex+'.aspx'
          //测试地址this.axios.get('/resNodelists/'+this.nowpageindex
       
          // console.log(this.myparams)
         this.axios.get('/Category_1193/Index_'+this.nowpageindex+'.aspx',{
            params: {
             squery:i,
             modelid:m
        }
          }).then(res => {     
                   if(res.status >= 200 && res.status < 300)  
              {    
                 
                console.log(typeof(res.data))   
                var html=res.data; 
             
                   this.onloading=false;
                  if(typeof res.data=='string')
                {
                let list=(this.Myunilt.fixhtmltoJSON(html));  
                console.log(list) 
                   this.bsfwlist=list.newslist
                   this.nodelists=list.newslist.Nodelists;                   
                   console.log('第一个')
                   console.log(list)
                }
                else
                {
                 
                    let list=res.data.newslist
                    this.bsfwlist=list
                    this.nodelists=list[0].Nodelists;
                    //  console.log(list)
                }            
              }
          }).catch(function () {
            console.log('请求失败了1111！！');
          });         
       }           
	}
	}
</script>
<style scoped>
.banshilist-layout
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
  .onselectnodes2
{
   width: 95%;
    float: left;
    padding: 5px;
    font-size: 16px;
    border: 1px #e0e0e0 solid;
    text-align: center;
    /* padding: 5px; */
    margin: 5px;
    border-radius: 3px;
    color:#737373;
    background-color: #f2f6fc;
}
</style>
