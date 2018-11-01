<template>
   <div id="main">
      <news-detail  v-on:hide="HideandShowdetail"  :curItem="curitem" v-show="showDetails"></news-detail>
       <mynodelist v-on:hide="HideandShownodelist" :curnodename="curnodename"  :myNDparams="params" v-show="shownodelist"></mynodelist>
      <myBanShiList v-on:hide="HideandShowbanshilist" :curnodename="curnodename" :myBSparams="params"  v-show="showbanshilist"></myBanShiList>
        <mydepments v-on:hide="HideandShowdepment" :nodelists="nodelists" :LeaderInfo="LeaderInfo" :personl="personl"  :WorkDuty="WorkDuty" :deptitle="deptitle" :depaddress="depaddress" :deptras="deptras" :telnum="telnum" :Introduction="Introduction" v-show="showdepinfo"></mydepments>
  	  <div class="iconnav">
            <ul>
          <li>
            <a href="http://wsbs.hunan.gov.cn/virtualhall/index.jsp?reLogin=1&areaCode=430503999000" class="hov">
          <i class="icon iconfont icon-webicon17"></i><span><p class="txt">我要办</p></span></a>
          </li>
             <li><a href="http://www.dxzc.gov.cn/Category_10/Index.aspx"><i class="icon iconfont icon-chakan"></i><span><p class="txt">我要看</p></span></a></li>
             <li><a href="http://www.dxzc.gov.cn/Government/Letter/LetterList.aspx"><i class="icon iconfont icon-wenda"></i><span><p class="txt">我要问</p></span></a></li>
            <li><a href="http://www.dxzc.gov.cn/Government/ApplyFormQuery.aspx"><i class="icon iconfont icon-chaxun"></i>
           <span><p class="txt">我要查</p></span></a></li>
        <li><a href="http://www.dxzc.gov.cn/Government/Letter/Letterwriter.aspx?DepartmentId=15">
        <i class="icon iconfont icon-pingjiaguanli"></i>
        <span>
            <p class="txt">我要评</p></span></a></li>
            </ul>
        </div>
<el-popover
  title="选择栏目"  
  transition="fade-in-linear"
  ref="popover4"
  placement="left"
  width="330"
  trigger="click">
 
  <ul class="selectNodes">   
  <template v-for="(items,index) in Nodelist">
     <li v-if="items.onuser" :key="index" class="Defaultshow">{{items.nodename}}</li>      
     <li v-else :class="{'selectshownodes':items.showstatus,'onselectnodes':!items.showstatus}" @click="shownodws(items.ID)" :key="index">{{items.nodename}}</li>  
  </template>
   </ul>
</el-popover>

   	<div class="zfgk">
  	  <div class="title1"><a v-popover:popover4>
        <el-badge is-dot class="item">
 <i class="icon iconfont icon-gengduo"></i>
</el-badge>
<span>政务公开工作要点</span></a></div>
  	  <ul class="zful">      
           <template  v-for="(items,index) in Nodelist"> 
                 <li @click="postnodes(items.nodenametarget)" v-if="items.onuser"  :key="index" :style="calcStyle(index)" v-show="items.onuser"><a target="_self"><i :class="'icon iconfont '+items.ionc"></i>
                 <span>{{items.nodename}}</span></a></li>        
             
                 <li  v-else @click="postnodes(items.nodenametarget)" :key="index" v-show="items.showstatus" :style="calcStyle(index)"><a target="_self"><i :class="'icon iconfont '+items.ionc"></i>
                 <span>{{items.nodename}}</span></a></li>
           </template>       
      </ul>
  	</div>

  	<div class="xxgk">
  		<div class="title1"><a href="#">
        <!-- <i class="icon iconfont icon-gengduo"></i> -->
        <span>信息公开</span></a></div>
  		<ul class="xxr"><li><a target="_self" href="/#/depmorepage"><i class="icon iconfont icon-file"></i><span>公开指南</span></a></li>
  	  	<li><a @click="postnodes('年度报告')"><i class="icon iconfont icon-rili"></i><span>公开年报</span></a></li>
  	  	<li><a target="_self" href="#tabcon"><i class="icon iconfont icon-webicon17"></i><span>公开目录</span></a></li>
  	  	<li style="margin-right: 0;"><a target="_blank" href="/Government/m_ApplyForm.aspx"><i class="icon iconfont icon-biaoshilei_yiduxinxi"></i><span>依申请公开</span></a></li></ul>
  	</div>

  	<!-- <ul class="ico3"><li style="width: 40%;"><a target="_blank" href="#"><i class="icon iconfont icon-wenhuamingsheng"></i><span>重点办事服务</span></a></li>
  	  <li><a target="_blank" href="#"><i class="icon iconfont icon-09"></i><span>办事指南</span></a></li>
  	  <li style="margin-right: 0;"><a target="_blank" href="#"><i class="icon iconfont icon-tongzhi"></i><span>通知公示</span></a></li></ul> -->
 
<div  class="tabcon">
  		<ul class="tati">
        <li><a id="one1" @click="setTab('one',1,4,'区政府工作部门')" class="hover" style="width: 24%;">区政府<br>工作部门</a></li>
        <li><a id="one2" @click="setTab('one',2,4,'区政府直属事业机构')" style="width: 29%;">区政府直属<br>事业机构</a></li>
  		<li><a id="one3" @click="setTab('one',3,4,'区政府行政执法机构')" style="width: 28%;">区政府行政<br>执法机构</a></li>
        <li><a id="one4" @click="setTab('one',4,4,'乡镇街道')">乡镇<br>街道</a></li></ul>
        <div class="tabonebox">
 <el-dialog 
  :title="deptitle"
  :visible.sync="centerDialogVisible"
  width="80%"
  center>
  <span>办公地址：{{depaddress}}</span><br>
   <span>交通路线：{{deptras}}</span><br>
    <span><a :href="'tel:'+telnum" class="call">拨打电话：{{telnum}}</a></span>
  <span slot="footer" class="dialog-footer">
    <!-- <el-button @click="centerDialogVisible = false">取 消</el-button> -->
    <!-- <el-button type="primary"><router-link :to="teUrl">进入部门</router-link></el-button> -->
    <el-button type="primary" @click="getDepinfo">进入部门</el-button>
  </span>
</el-dialog>
            <ul id="tab_one_1" style="display: block;">

          <template  v-for="(items,index) in depmentlists">
           <li :key="index" @click="showdialog(index)">{{items.ParentName}}</li>
          
          </template>

             
             </ul>
            <ul id="tab_one_2" style="display:none">
                 <template  v-for="(items,index) in depmentlists">
           <li :key="index" @click="showdialog(index)">{{items.ParentName}}</li>
          
          </template>
    <!--  <li class="js-mytooltip type-inline-block style-block style-block-one"
           data-mytooltip-custom-class="align-center"
           data-mytooltip-direction="right"
           data-mytooltip-template="办公电话：0739-5398159 办公地址：敏州西路大祥区政府办公大楼8楼 交通路线：市内乘坐12、36路公交到大祥区政府下车">区发改局</li> 
           -->
          
            </ul>
            <ul id="tab_one_3" style="display: none;">
            	       <template  v-for="(items,index) in depmentlists">
           <li :key="index" @click="showdialog(index)">{{items.ParentName}}</li>
          
          </template>
            </ul>
            <ul id="tab_one_4" style="display:none">
            	       <template  v-for="(items,index) in depmentlists">
           <li :key="index" @click="showdialog(index)">{{items.ParentName}}</li>
          
          </template>
            </ul>
        </div>
  	</div> 

<div class="xxcon">
  		<ul class="xxl"><li><a id="two1" @click="setTabs('two',1,2)" class="hover">政务公开热点</a></li>
        <li><a id="two2" @click="setTabs('two',2,2)">大祥概况</a></li></ul>
        <div class="tabtwobox">
        	<ul id="tab_two_1" style="display: block;">
        	  <li><a href="http://www.dxzc.gov.cn/Category_122/Index.aspx"><i class="icon iconfont icon-lingdao"></i><span>领导之窗</span></a></li>
        	  <li><a href="http://www.dxzc.gov.cn/Category_107/Index.aspx"><i class="icon iconfont icon-bumen"></i><span>政府采购</span></a></li>
        	
        	  <li><a @click="postnodes('实事项目')" style="margin-right: 0;"><i class="icon iconfont icon-hrrenshirenshiguanli380"></i><span>实事项目</span></a></li>
        	  <li><a href="http://www.dxzc.gov.cn/Category_1138/Index.aspx"><i class="icon iconfont icon-tongjitubiao"></i><span>财政预决算</span></a></li>
        	  <li><a href="http://wsxf.hunan.gov.cn/index.cmd?xzqhdm=430503&djjgdm=43050300000000499&jgmc=%E5%A4%A7%E7%A5%A5%E5%8C%BA%E7%BD%91%E4%B8%8A%E4%BF%A1%E8%AE%BF%E6%8A%95%E8%AF%89%E5%B9%B3%E5%8F%B0"><i class="icon iconfont icon-gongzuohuibao"></i><span>网上信访</span></a></li>
        	  <li><a  @click="postnodes('应急管理')" style="margin-right: 0;"><i class="icon iconfont icon-wodehezuo"></i><span>应急管理</span></a></li>
        </ul>
        	<ul id="tab_two_2" style="display: none;">
        	  <li><a @click="postItemid(20696)"><i class="icon iconfont icon-qiangli"></i><span>基础设施</span></a></li>
        	  <li><a @click="postItemid(469)"><i class="icon iconfont icon-hrrenshirenshiguanli380"></i><span>邵阳名人</span></a></li>
        	  <li><a @click="postItemid(20695)" style="margin-right: 0;"><i class="icon iconfont icon-zhongxinhuanjing"></i><span>行政区划</span></a></li>
        	  <li><a @click="postItemid(20693)"><i class="icon iconfont icon-daifukuan"></i><span>经济发展</span></a></li>
        	  <li><a @click="postItemid(53121)"><i class="icon iconfont icon-shipinxiaoshouqiye"></i><span>大祥年鉴</span></a></li>
        	  <li><a @click="postItemid(20692)" style="margin-right: 0;"><i class="icon iconfont icon-msnui-service"></i><span>社会事业</span></a></li>
        	</ul>
        </div>
  	</div>
    	<el-popover
  title="选择显示栏目"
  transition="el-zoom-in-bottom"
  popper-class="zwgklists"
  ref="popover8"
  placement="left"
  v-model="visibles"
  trigger="click">
  <div class="guanbi">
<i @click="visibles = false" class="icon iconfont icon-guanbi"></i></div>
  <el-tabs :tab-position="tabPosition" style="height: 100%;">
  <template v-for="(items,index) in topnodes">
    <el-tab-pane :label="items.name"><span class="nodelists parnodes">{{items.name}}</span>
      <ul><template v-for="(c) in items.items">
   <li class="childnodelists">{{c.childNodes}}</li>
  </template>
</ul>
</el-tab-pane>    
 </template>
    </el-tabs>
    
</el-popover>
  	
  <div class="fgwj">
  	 <div class="title1">
    
       <span @click="postnodes('通知公示')">通知公示</span>         
         <ul class="fgw">
             <li><a  id="three1" @click="setTabs('three',1,3)" class="hover">通知公示</a></li>
        <li><a  id="three2" @click="setTabs('three',2,3)">实事项目</a></li>
        <li><a  id="three3" @click="setTabs('three',3,3)">公开招考</a></li>
        </ul>
      </div>
   
        <div  class="tabthreebox">
            	<ul id="tab_three_1" style="display: block;">
   <template v-for="(i,index) in tzgsjd">
        <li :key="index"><a @click="postItemid(i.ID)" :key="index" href="#">{{i.title}}</a><span><div class="src-net">{{i.nodeName}}</div><div class="src-time">{{i.InputTime}}</div><div class="src-hor">{{i.Inputer}}</div></span></li>
  	</template>
        	</ul>
        	<ul id="tab_three_2" style="display: none;">
   <template v-for="(i,index) in ssxmjd">
        <li :key="index"><a @click="postItemid(i.ID)" :key="index" href="#">{{i.title}}</a><span><div class="src-net">{{i.nodeName}}</div><div class="src-time">{{i.InputTime}}</div><div class="src-hor">{{i.Inputer}}</div></span></li>
  	</template>
        	</ul>
            <ul id="tab_three_3" style="display: none;">
                 <template v-for="(i,index) in gkzkjd">
        <li :key="index"><a @click="postItemid(i.ID)" :key="index" href="#">{{i.title}}</a><span><div class="src-net">{{i.nodeName}}</div><div class="src-time">{{i.InputTime}}</div><div class="src-hor">{{i.Inputer}}</div></span></li>
  		  	</template>
            </ul>
        </div>
        
 </div>
  <div class="fgwj">
  	 <div class="title1">
         <!-- <el-badge is-dot class="morebadge">
       <i v-popover:popover8 class="icon iconfont icon-gengduo"></i>
         </el-badge> -->
       <span @click="postnodes('法规文件')">法规文件</span>
         
         <ul class="fgw">
        <li><a  id="threes1" @click="setTabs('threes',1,2)" class="hover">政府文件</a></li>
        <li><a  id="threes2" @click="setTabs('threes',2,2)">政策解读</a></li>
        </ul>
      </div>
   
        <div  class="tabthreebox">
        	<ul id="tab_threes_1" style="display: block;">
   <template v-for="(i,index) in zfwj">
        <li :key="index"><a  @click="postItemid(i.ID)" :key="index" href="#">{{i.title}}</a><span><div class="src-net">{{i.nodeName}}</div><div class="src-time">{{i.InputTime}}</div><div class="src-hor">{{i.Inputer}}</div></span></li>
  	</template>
        	</ul>
            <ul id="tab_threes_2" style="display: none;">
                 <template v-for="(i,index) in zcjd">
    
        <li :key="index"><a  @click="postItemid(i.ID)"  :key="index" href="#">{{i.title}}</a><span><div class="src-net">{{i.nodeName}}</div><div class="src-time">{{i.InputTime}}</div><div class="src-hor">{{i.Inputer}}</div></span></li>
  		  	</template>
            </ul>
        </div>
        
 </div>  
  	<div class="ghjd">
  		<div class="title1"><span  @click="postnodes('计划规划')">规划计划及解读</span></div>
  		<ul class="ghul">
  		     <template v-for="(i,index) in jhghjd">
        <li :key="index"><a  @click="postItemid(i.ID)" :key="index" href="#">{{i.title}}</a><span><div class="src-net">{{i.nodeName}}</div><div class="src-time">{{i.InputTime}}</div><div class="src-hor">{{i.Inputer}}</div></span></li>
  		  	</template>
          		</ul>
  	</div>
    
    </div>
</template>
  <script>
     import mydepments from '.././components/depments.vue'
     import myBanShiList from '.././components/banshilist.vue'
     import mynodelist from '.././components/nodelist'
     import newsDetail from '.././components/NewsDetail.vue'

  	export default {    
		name: 'app',
		data () {
			return {     
                    showbanshilist:false,
                    keyword:'',
                    shownodelist:false,
                    curitem:'',
                    curnodename:'',
                    showdepinfo:false,
                    visibles:false,
                    tabPosition:'left',
                    nodesshow:false,
                    visible2:true,
                    dialogTableVisible:false,
                    LiMarrgin:'margin-right: 0;',
                    depmentlists:{},
                    showDetails:false,
                    centerDialogVisible: false,
                    deptitle:'',
                    depaddress:'',
                    deptras:'',
                    telnum:'',
                    Introduction:'',
                    DepsInfo:'',
                    WorkDuty:'',
                    personl:[],
                    LeaderInfo:'',
                    nodelists:[],
                    nodes:[],
                    node_index:[],
                    topnodes:[],
            /*通知公示节点集*/tzgsnodes:'221,202,5,129,62,1050,1056,1054,1052,820,478,388,62,532,1061,1058,52,1048,131,568,631,622,550,1046,406,274,775,766,595,361,559,352,505,370,793,577,586,523,424,811,460,78,433,469,487,415,379,451,442,604,514,1043,784,613,496,397,5',
            /*政府文件节点集*/zfwjnodes:'252,257,279,829,833,837,841,845,849,853,858,862,866,870,874,878,882,886,890,894,898,902,906,910,914,926,930,938,1111,1022',
            /*政策解读节点集*/zcjdnodes:'1012,960,976,992,980,996,1000,984,1016,1008,972,888,847,912,259,267,928,956,952,920,916,880,855,281,1040,940,835,924,831,900,839,932,908,864,1020,254,868,884,892,860,843,876,872,904,1024,948,851,968,1004,964,988,1113',
            /*计划规划及解读节点集合*/jhghjdnodes:'246,263,271,285,359,368,377,386,395,404,413,422,431,440,449,458,467,476,485,494,512,521,530,539,548,557,566,575,584,602,203',
            /*实事项目节点集*/ssxmnodes:'758,641,158,677,713,686,722,731,637,799,772,808,695,821,749,668,479,389,1079,533,1062,790,151,51,569,632,623,551,542,461,407,275,776,767,596,362,560,353,506,371,794,578,524,425,812,2,434,470,488,416,380,452,443,515,803,614,398,1087,127,659,740,650,704,25,221,202,5,129,62,1050,1056,1054,1052,820,478,388,62,532,1061,1058,52,1048,131,568,631,622,550,1046,406,274,775,766,595,361,559,352,505,370,793,577,586,523,424,811,460,78,433,469,487,415,379,451,442,604,514,1043,784,613,496,397,5,129,1',
            /*公开招考*/gkzknodes:'1121,202',
             
   
                    Nodelist:[
                      {"ID":"0","onuser":true,"nodename":"减税降费降低要素","showstatus":false,"NodeID":"1200","ionc":"icon-xiaofei01","nodenametarget":"资金信息"},
                      {"ID":"1","onuser":true,"nodename":"重大建设项目","showstatus":false,"NodeID":"1118","ionc":"icon-xiangzhenguanli","nodenametarget":"重大项目"},
                      {"ID":"2","onuser":true,"nodename":"公共资源配置","showstatus":false,"NodeID":"1116","ionc":"icon-ziyuan","nodenametarget":"公共资源配置"},
                      {"ID":"3","onuser":true,"nodename":"“放管服”改革","showstatus":false,"NodeID":"173","ionc":"icon-msnui-service","nodenametarget":"政务服务"},
                      {"ID":"4","nodename":"防范遏制重特大生","showstatus":false,"NodeID":"204","ionc":"icon-baohu","nodenametarget":"安全生产"},
                      {"ID":"5","nodename":"产品质量提升","showstatus":false,"NodeID":"1207","ionc":"icon-zhiliangbz","nodenametarget":"质量提升"},
                      {"ID":"6","nodename":"扶贫脱贫","showstatus":false,"NodeID":"1208","ionc":"icon-jingzhunfupin","nodenametarget":"扶贫脱贫"},
                      {"ID":"7","nodename":"环境保护","showstatus":false,"NodeID":"818","ionc":"icon-huanjingbaohu","nodenametarget":"环境保护"},
                      {"ID":"8","nodename":"食品药品安全","showstatus":false,"NodeID":"817","ionc":"icon-shipin","nodenametarget":"食品药品安全"},
                      {"ID":"9","nodename":"教育卫生领域","showstatus":false,"NodeID":"154","ionc":"icon-jiaoyu","nodenametarget":"科技信息"},
                      {"ID":"10","nodename":"社会救助","showstatus":false,"NodeID":"1208","ionc":"icon-wodehezuo","nodenametarget":"社会救助"},
                      {"ID":"11","nodename":"财税体制改革","showstatus":false,"NodeID":"1204","ionc":"icon-servicejinkoubaoshui","nodenametarget":"财税体制改革"},
                      {"ID":"12","nodename":"促房地产市场发展","showstatus":false,"NodeID":"","ionc":""},
                      {"ID":"13","nodename":"消费升级","showstatus":false,"NodeID":"1207","ionc":"icon-jifenxinxi","nodenametarget":"消费升级"},
                      {"ID":"14","nodename":"化解过剩产能","showstatus":false,"NodeID":"1206","ionc":"icon-xiaofeiquan","nodenametarget":"化解过剩产能"},
                      {"ID":"15","nodename":"加强预期引导","showstatus":false,"NodeID":"170","ionc":"icon-qiangli","nodenametarget":"加强预期引导"}                           
                      ]  ,
                        dialogImageUrl: '',
                        dialogVisible: false,
                        nowpageindex:1,
                       /*政府文件*/   zfwj:[],
                       /*通知公示*/   tzgsjd:[],
                       /*政策解读*/   zcjd:[],
                       /*计划规划解读*/  jhghjd:[],
                       /*实事项目*/  ssxmjd:[],
                       /*公开招考*/  gkzkjd:[],
                       lists:{},
                       params:{}
                        
                     


                     
			}

    },
    components: {
        mydepments,myBanShiList,mynodelist,newsDetail

    },
     created(){
    this.checklstonewlist();
    
      
     },
     mounted()
     {
          this.setTab('one',1,4,'区政府工作部门');
        
           // this.getnodelists();
            this.getnodeslist(this.tzgsnodes,'tzgsjd');
            this.getnodeslist(this.zfwjnodes,'zfwj');
            this.getnodeslist(this.zcjdnodes,'zcjd');
            this.getnodeslist(this.jhghjdnodes,'jhghjd');    
            this.getnodeslist(this.gkzknodes,'gkzkjd');    
            
            
          this.Myunilt.GetListbyTites('实事',this.nowpageindex).then(v=>{
          this.ssxmjd=v;
          });
         
     },
    methods: {
      
       getnodeslist:function(s,Nodes)
      {
        
        let _self=this
        //'/ReqListsBysQueryApi/'+this.nowpageindex, 测试代理接口
        //'/Category_1212/Index_'+this.nowpageindex+'.aspx'
        this.axios.get('/Category_1212/Index_'+this.nowpageindex+'.aspx', {
          params: {
            squery: s
          }
        }).then(res => {
           console.log(res);
      var json =res.data;
      if(typeof res.data=='string')
      {
        var html = data
           json=this.Myunilt.fixhtmltoJSON(html)    
            this[Nodes]=json.newslist;
          }
          else
          {
             this[Nodes]=json.newslist;
          }    
      })
      },
    
         setTabs:function (name,cursel,n)
     { 
        for(var i=1;i<=n;i++)
            { 
            var menu=document.getElementById(name+i); 
            var con=document.getElementById("tab_"+name+"_"+i); 
            menu.className=i==cursel?"hover":""; 
            con.style.display=i==cursel?"block":"none"; 
            }
          
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
         HideandShownodelist:function () {//政务公开列表隐藏方法
         this.shownodelist=false
        //  this.showBanner=true
        //this.curitem=''
      },
        HideandShowbanshilist:function()//办事服务列表隐藏方法
        {
              this.showbanshilist=false;

        },
      
            setTab:function (name,cursel,n,CategoryName)
     { 
           for(var i=1;i<=n;i++)
            { 
            var menu=document.getElementById(name+i); 
            var con=document.getElementById("tab_"+name+"_"+i); 
            menu.className=i==cursel?"hover":""; 
            con.style.display=i==cursel?"block":"none"; 
            }
             this.axios.get('/Category_1211/Index.aspx', {//获取新闻列表的内容测试/depmentlist、正式//Category_1211/Index.aspx
            params: {
              CategoryName: CategoryName
            }
          }).then(res => {
            //     console.log(res.data.list)
                let datalist=res.data
                // let json=eval(datalist)
                // console.log(datalist)
            // datalist =  datalist.replace(/	/g, "")
            //     .replace(/\r|\n/g, "")
            //     .replace(/&lt;/g, "<")
            //     .replace(/&gt;/g, ">").trim()              
            var json=  this.Myunilt.fixhtmltoJSON(datalist)       
          // let json=JSON.parse(html)
                console.log(json)
              this.depmentlists=json.list            
      
          }).catch(function () {
            console.log('请求失败了！！');
          });
         },
            HideandShowdepment:function () {
              this.showdepinfo=false  
          },
           showdialog:function(i)
          {  
               let dialogmessage=this.depmentlists[i]
              this.deptitle=dialogmessage.ParentName
              this.depaddress=dialogmessage.AddressInfo
              this.deptras=dialogmessage.Transportation
              this.telnum=dialogmessage.TelPhone
              this.WorkDuty=dialogmessage.WorkDuty
              this.Introduction=dialogmessage.Introduction              
              this.personl=dialogmessage.personl
              this.LeaderInfo=dialogmessage.LeaderInfo
              this.centerDialogVisible=true;
              this.nodelists=dialogmessage.Nodelists            
          },
          getDepinfo:function()
          {
            this.centerDialogVisible=false;
            this.showdepinfo=true;   
          },
        checklstonewlist:function()
        {
          let arr=this.Nodelist
          let lsarr=localStorage.getItem('nodes_index')
           let stringlsarr= JSON.stringify(lsarr)
              arr.forEach(function (item, i){
               if(stringlsarr.indexOf(i)>-1)
               {
                  item.showstatus= true
               }
               else
               {
                 item.showstatus=false
               }            
          });
        },        
        removelocalstore:function(i,itemname)
         {
              let data=localStorage.getItem(itemname);
              let arr=[];
              if(data)
              {    let list=[]
                   arr=data.split(',') 
                   for(let x=0;x<=arr.length;x++)
                   {
                        if (arr[x]==i)
                      {
                          arr.splice(x,1);
                      }
                   }
                     localStorage.clear();
                    this.saveToLocalStore(arr,itemname)    
              }           
              
         },
         saveToLocalStore:function(val,itemname)
         {
          let data=localStorage.getItem(itemname);
          let arr=[];
          if (data)
          {
          arr=data.split(',')       
          }
          arr.push(val)         
          localStorage.setItem(itemname,arr);
        
        },
          shownodws:function(i)
        {
           
           if (this.Nodelist[i].showstatus=!this.Nodelist[i].showstatus)
           {
             this.saveToLocalStore(this.Nodelist[i].ID,'nodes_index') 
                 
           }
           else
           {
             this.removelocalstore(this.Nodelist[i].ID,'nodes_index')          
           }            
        },
          postnodes:function(nodename)
      {       

     this.Myunilt.Getcurnodename(nodename).then(v=>{
           var myparams = v;     
           var params = {
            squery: myparams.nodes,
            modelid:myparams.ModelID       
            };          
            if (myparams.queryKey != 'nodename') {
            params[myparams.queryKey] = myparams.queryVal;           
           }
         
           if(myparams.ModelID=="114")
           {
             this.params= params     
             this.curnodename=nodename  
             this.showbanshilist=true;             
           }
           else
           {
             this.params= params   
             this.curnodename=nodename          
             this.shownodelist=true;             
           }
          })
      },
     calcStyle(key) {
        let style = {}
        if (key % 2 !== 0) {
            style = {'margin-right':0}
        }
        return style
    }
      
      }
      }
      </script>
<style>
.el-loading-parent--relative
{
  height: 100%;
}
/* .loading-layou
{
  position:fixed;
    top:0;
    bottom:0;
    left:0;
    right:0;
    overflow: auto;
    z-index:1100;
    background:#fff;

} */
 
 
.el-notification__content ul li{

    float: left;
    width: 25%;
}
.el-notification__content ul{

  
}
.el-notification.right
{
right: 0px !important; 

}
.el-notification
{
  width:380px;
}
.el-tag
{
    width: 45%;
    margin: 5px;
    padding: 0 5px;
    font-size: 15px;
    text-align: center;
}

.onselectnodes
{
   width: 46%;
    float: left;
    padding: 5px;
    font-size: 13px;
    border: 1px #DCDFE6 solid;
    text-align: center;
    /* padding: 5px; */
    margin: 5px;
    border-radius: 3px;
    color: #606266;
    background-color: #DCDFE6;
}
.selectshownodes
{
      width: 46%;
    float: left;
    padding: 5px;
    font-size: 13px;
    border: 1px #ffffff solid;
    text-align: center;
    /* padding: 5px; */
    margin: 5px;
    border-radius: 3px;
    color: #F2F6FC;
    background-color: #F56C6C;

}
.Defaultshow
{
   width: 46%;
    float: left;
    padding: 5px;
    font-size: 13px;
    border: 1px #ffffff solid;
    text-align: center;
    /* padding: 5px; */
    margin: 5px;
    border-radius: 3px;
    color: #C0C4CC;
    background-color: #EBEEF5;
}
.item
{
left: 22%;
}
.el-badge__content.is-dot
{
  width:12px;
  height:12px;
}
.zwgklists
{
 width:330px;
 left:0px !important; 
    height: 92%;
   
    margin-top: -5px;

}
.childs
{

}
.childs li
{
float: left;
}
.el-tabs__item
{

  padding: 0 10px;
}
.guanbi i
{}
.guanbi
{
float: right;
    margin: -35px -5px;
    background-color: #F2F6FC;
    width: 24px;

}
.parnodes
{

}
.childnodelists
{
  font-size: 15px;
    float: left;
    text-align: left;
    width: 90%;
    padding: 10px;
    color: #909399;

}
.morebedge
{
    float: right;
    right: 0;
    font-size: 0.45rem;
    width: 8%;
    color: #c81624;
    text-align: center;
    top: 5px;
    line-height: 19px;
}
</style>