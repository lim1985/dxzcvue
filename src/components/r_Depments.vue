<template>
 
<div id="topscoll">

<div ref="myscroll" class="depments-layout">
<div>
  <el-popover
  ref="popover7"
  placement="right"
  :title="'大祥'+deptitle"
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

    <header id="header">
		<div class="search"><a @click="back"><i  class="icon iconfont icon-fanhui"></i></a></div>
		<div class="wrapper wrapper03" id="wrapper03"><div class="title">{{deptitle}}-机构信息</div>
</div>
        <div  v-popover:popover7 class="morelist"><i class="icon iconfont icon-gengduo3"></i></div>
   </header>
    
<div class="tops mg">
<center class="tab-news-content">
	<div class="marig dzjj"><div class="jgti"><a>机构概括</a></div>
  <div v-html="Introduction"></div>  
<div class="jgti"><a>工作职责</a></div>
 <div v-html="WorkDuty"></div> 
<div class="jgti"><a>领导成员及分工</a></div>

<template v-if="LeaderInfo==''">
<ul class="tream">
  <template v-for="(item,index) in personl">

    <li :key="index">
      <img :src="'http://www.dxzc.gov.cn'+item.DefaultPicUrl" :onerror="DefpenImg"><span><b>{{item.HeadShip }}、{{item.Title}}</b><br>{{item.JobHand}}</span>
   </li>
  </template>
</ul>
</template>
<div v-else v-html="LeaderInfo" ></div>
<!-- <ul class="tream">
  <li><img src="images/im.jpg"><span><b>党组书记、局长杨细平</b> <br>分管纪检、监察、党风廉政建设、督查工作、协管城管卫生、控违拆违工作。</span></li>

</ul> -->
<div class="jg10"><a>办公电话</a><span>{{telnum}}</span></div>
<div class="jg12"><a>办公<br>地址</a><div class="zi">{{depaddress}}</div></div>
<div class="jg12"><a>交通<br>方式</a><div class="zi">{{deptras}}</div></div>


</div>
</center>
</div>
</div>
</div>
</template>
<script>
  import myBanShiList from './banshilist'
  import mynodelist from './nodelist'
	export default {
        //  props:['nodelists','personl','LeaderInfo','WorkDuty','deptitle','depaddress','deptras','telnum','Introduction'],
		name: 'app',
		data () {
			return {
				item: [
					{name: '首页', url: '/'},

        ],
        nodelists:{},
        personl:'',
        LeaderInfo:'',
        WorkDuty:'',
        deptitle:'',
        depaddress:'',
        deptras:'',
        telnum:'',
        Introduction:'',
        teUrl:{path:'/category/52/1'},
        lists:{},
        Datalist:{},
        reslt:'',
        DefpenImg: 'this.src="'+ require('.././assets/images/tm.jpg') + '"',
        nowpageindex:1  
			}
		},

	created(){  
	   
  },
  mounted(){     

        this.GetDepmentInfos();
       console.log(this.$route.params)
   
  },
    components: {
     myBanShiList,mynodelist
    },
	methods:
	{
    GetDepmentInfos:function()
    {
     let i= this.$route.params.id
     let m= this.$route.params.ModelID
          //测试地址'/resNodelists/'+this.nowpageindex
      ///'/Category_1193/Index_'+this.nowpageindex+'.aspx'正式地址
 
      console.log(i)
      console.log(m)
      this.axios.get('/Category_1193/Index_'+this.nowpageindex+'.aspx',
        {
           params: {
           squery:i,
           modelid:m
        }
        })
        .then(res=> {                        
         var datalist =res.data;     
         var json=  this.Myunilt.fixhtmltoJSON(datalist)     
         console.log(typeof(json))
         let depmentinfo=json.list
   
                this.WorkDuty=depmentinfo[0].WorkDuty;        
                this.telnum=depmentinfo[0].telnum;
                this.Introduction=depmentinfo[0].Introduction;
                this.LeaderInfo=depmentinfo[0].LeaderInfo;
                this.depaddress=depmentinfo[0].AddressInfo;
                this.telnum=depmentinfo[0].TelPhone;
                this.deptras=depmentinfo[0].Transportation;
                this.deptitle=depmentinfo[0].ParentName; 
                this.nodelists=depmentinfo[0].Nodelists; 
                this.personl=depmentinfo[0].personl; 
            
        //  var html = data;             
        //  var json=this.Myunilt.fixhtmltoJSON(html)      
        console.log(json)
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
    hideDetail()
          {
          //  this.showDetails=false;
           this.$emit('hide')
         
           console.log(this.$refs.myscroll.scrollTop)
           this.$refs.myscroll.scrollTop=0;
          }	           
	}
	}
</script>
<style>
.nodelists
{
    font-size: 16px;
    float: left;
    text-align: left;
    width: 90%;
    padding: 10px;
    color: #2b2b2b;
}
.nodelists span
{
      border-bottom: 1px #409EFF solid;
}

.depnodeslist
{
  top:0px !important;
  height:92%;
  left:115px !important;
  width:100%;
}
  .depments-layout{
    position:fixed;
    top:0;
    bottom:0;
    left:0;
    right:0;
    overflow: auto;
    z-index:989;
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
  .morelist
  {
     float: right;
    text-align: center;
    line-height: 1.3rem;
    padding-right:10px;
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
