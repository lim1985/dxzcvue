<template>
<div class="mainbox">
<PicDetail v-on:hide="HideandShow" :curItem="curitem" v-show="PicsHide"></PicDetail>
<NewsGZDT v-on:hide="HideandShowdetail"  :curItem="curitem" v-show="showDetails"></NewsGZDT>

    <div class="abban"><img src=".././assets/images/bann_02.jpg"></div>
    <div class="about"><div class="nian12"><div class="abim"><img src=".././assets/images/t_02.jpg"></div><div class="f11">大祥区系1997年10月市辖三区行政区划调整后组建而成，
      2016年辖板桥乡、蔡锷乡、罗市镇等3个乡镇和红旗、中心、
      城北、城西、百春园、翠园、城南、学院路、火车南站、檀江、雨溪等11个街道。土地总面积214.66平方公里...
      ..，其中城区面积25.8平方公里，耕地面积8.43千公顷。2016年末常住人口34.37万人，人口出生率14.09‰，自然增长率7.5‰。年内气温最高36.4℃，最低0.2℃，降水量1478.3毫米。是邵阳市的政治、文教、金融、商贸中心。</a></div></div>
      
      <div class="butme"><a @click="postItemid2(20691)">了解详情</a></div>
      
      </div>
    <div class="dxnj"><div class="nian12"><div class="ziti">大祥年鉴</div>
      <div class="f16">2016年，大祥区辖2个乡1个镇11个街道。土地总面积215平方公里，其中耕地面积8.43千公顷。年末常住人口34.37万人，人口出生率14.09%，自然增长率7.5%。
        <br>地区生产总值139.5亿元，同比增长8.7%。第一、二、三产业产值分别为6.7亿元、53.5亿元、79.4...</a></div>
    </div>
      <ul class="niji">

        <li><a  @click="postItemid2(53121)" class="red n1">2017年大祥年鉴</a></li>
        <li><a  @click="postItemid2(41940)" class="n2">2016年大祥年鉴</a></li>
        <li><a  @click="postItemid2(26948)" class="n3">2015年大祥年鉴</a></li>
        <li class="n4"><a  @click="postItemid2(21498)">2014年大祥年鉴</a></li>
        <li class="n5"><a  @click="postItemid2(20404)">2013年大祥年鉴</a></li>
        <li class="n6"><a  @click="postItemid2(19421)">2012年大祥年鉴</a></li>

      </ul>
      <div class="butme"><a href="#">了解详情</a></div>
    </div>
    <div class="symr"><div class="nian12"><div class="ziti">邵阳名人</div><div class="abim"><img src=".././assets/images/t_07.jpg"></div><div class="f12"><p style="font-size: 0.5rem;">蔡锷(1882.12.18—1916.11.8)<br>中国最早的现代军人，“护国战争”的领导者。</p>蔡锷（1882年-1916年），湖南邵阳人（今邵阳市大祥区蔡锷乡蔡锷村），出身于贫寒的裁缝家庭，后留学日本，积极探索拯救中国命运的途径，回国后多次发动、领导武装起义，是中华民国初年杰出的军事领袖。<br>
      1899年赴日本，就读于东京大同高等学校、横滨东亚商业学校。1900年随唐才常回国参加自立军起义。失败后改名“锷”，立志“流血救民”。复去日本。先入成城学校，继入陆军士官学校，学习军事，曾参与组织“拒俄义勇队”。</a></div></div>
      <div class="butme"><a  @click="postItemid2(21241)">了解详情</a></div></div>
    <div class="shiye"><div class="nian12"><div class="ziti">社会事业</div><div class="niantxt">大祥区社会事业顺利推进，民主法治不断加强。今年完成易地扶贫搬迁461户，改造D级危房661户，实现脱贫2285人。省、市13项重点民生实事项目全面完成或超额完成任务。居民养老、医疗救助等政策全面落实。发放各类惠农补贴7713万元。新增保障性廉租房354套。改造薄弱学校3所。农村广播实现“村村响”。省、市13项重点民生实事项目全面完成或超额完成任务。居民养老、医疗救助等政策全面落实。发放各类惠农补贴7713万元。新增保障性廉租房354套。改造薄弱学校3所。农村广播实现“村村响”。</div></div>
      <ul class="syul"><li class="s1"><a href="#"><p class="t1">完成易地扶贫</p><p class="t2">搬迁461户</p></a></li><li class="s2"><a href="#"><p class="t1">改造D级</p><p class="t2">危房661户</p></a></li><li class="s3"><a href="#"><p class="t1">实现脱贫</p><p class="t2">2285人</p></a></li><li class="s4"><a href="#"><p class="t1">发放各类惠农</p><p class="t2">7713万元</p></a></li><li class="s5"><a href="#"><p class="t1">新增保障性</p><p class="t2">廉租房354套</p></a></li><li class="s6"><a href="#"><p class="t1">化解各类矛盾</p><p class="t2">纠纷678起</p></a></li></ul>
      <div class="butme"><a @click="postItemid2(20692)">了解详情</a></div></div>
    
    <div class="syfj">
      <div class="nian12"><div class="ziti">邵阳映像</div></div>
      <div class="wrap2">
        <el-tabs v-model="activeName2" type="card" @tab-click="handleClick" >
          <template v-for="(item,index) in piclistdata">
          <el-tab-pane :key="item.id" :label="item.lable" :name="item.nodeid">
      <div class="swiper-slide">
              <div class="content-slide">
      <ul data-am-widget="gallery" class="am-gallery am-avg-sm-2
am-avg-md-3 am-avg-lg-4 am-gallery-overlay" data-am-gallery="{ pureview: true }" >
            <template  v-for="(item,index) in datas">
              <li>
                    <div  class="am-gallery-item">
                      <a @click="postItemid(item.ID)" class="">
                        <img :src="'http://www.dxzc.gov.cn/uploadfiles/'+item.DefaultPicUrl"  :alt="item.title"/>
                        <h3 class="am-gallery-title">{{item.title}}</h3>
                        <div class="am-gallery-desc">{{item.imgCount}}图</div>
                      </a>
                    </div>
              </li>
              </template>

                </ul>
                  </div>
            </div>
          </el-tab-pane>
          </template>
       </el-tabs>
       </div>
          <!-- <el-tab-pane label="历史记忆" name="third">  
               <div class="swiper-slide">
              <div class="content-slide">
                <ul data-am-widget="gallery" class="am-gallery am-avg-sm-2
am-avg-md-3 am-avg-lg-4 am-gallery-overlay" data-am-gallery="{ pureview: true }" >
              <li>
                    <div class="am-gallery-item">
                      <a href="../assets/images/3.jpg" class="">
                        <img src="../assets/images/3.jpg"  alt="我相信"/>
                        <h3 class="am-gallery-title">我相信</h3>
                        <div class="am-gallery-desc">20图</div>
                      </a>
                    </div>
                  </li>

                </ul>
              </div>
            </div>
            </el-tab-pane> -->
            <!--<div class="tabs">-->
          <!--<a href="#" hidefocus="true" class="active">城市风光</a>-->
          <!--<a href="#" hidefocus="true">美丽乡村</a>-->
          <!--<a href="#" hidefocus="true">历史记忆</a>-->
        <!--</div>--> 
  
      <div class="butme"><a href="#">了解详情</a></div>
    </div>
    <div class="quhua"><div class="nian12"><div class="ziti">行政区划</div>
      <div class="qutxt"><p>大祥区位于东径111°22′26〞-111°35′42〞,北纬27°4′45〞-27°14′46〞。地处邵阳市区的西南部，东与邵东县接壤，西、南同 邵阳县接壤，北隔资江与北塔区相望、东、北濒邵水与双清区相邻。总面积214.66平方公里，总人 口34.36万人，其中城区面积25.8平方公里.非农业人口20.13万人。<br>
        　　辖2个乡、1个镇、11个街道：蔡锷乡、板桥乡、罗市镇、中心路街道、红旗路街道、城北路街道、城西街道、翠园街道、百春园街道、城南街道、火车南站街道、学院路街道、雨溪街道、檀江街道。区人民政府驻敏州西路。
        <a @click="postItemid2(20695)" class="red">【查看详情】</a></p></div></div>
      <ul class="quul">
        <template v-for="(item,index) in x_zhenlist">
    <a :key="index" :href="'http://www.dxzc.gov.cn/Category_'+item.id+'/Index.aspx'"><li :class="'q'+(index+1)" >{{item.x_z_name}}</li></a>

  </template>
        </ul>
      <div class="butme1"><a @click="postItemid2(20695)">了解详情</a></div>
    </div>
    <div class="jcss"><div class="nian12">
      <div class="ziti">基础设施</div><div class="abim"><img src=".././assets/images/t_14.jpg"></div>
      <div class="f13">交通运输  已形成由铁路、公路、水路等3种运输方式构成的交通运输网络。2011年客运总量3108万人次，货运总量2567万吨。
      洛湛铁路，境内长8.1千米。邵阳火车南站位于城南街道，每日始发客车4列，过境客车10列，往东直达上海，往南直抵广州、湛江、南宁，北上通达青岛、北京等地，均为快车。
      沪昆（上海-昆明）高速公路，境内长16.6千米，与邵（阳）衡（阳）高速、邵永（州）高速相通，设有邵阳南互通进出口，与西湖路、邵州路、207 国道衔接。320国道，
      境内长4.9千米，双向4车道。207国道，境内长9.7千米，双向4车道。217省道，境内长10.6千米，是境内通往湘南与广 西的主要公路。有县（区）道6条，总长43.2千米，
      乡道12条，总长65.3千米。</a></div></div><div class="butme">
        <a @click="postItemid2(20696)">了解详情</a></div></div>
    <div class="amap"><div class="nian12"><div class="ziti">自然地理</div><div class="abim"><img src=".././assets/images/t_11.jpg"></div>
    <div class="f11">地形地貌 地处衡（阳）邵（阳）低山丘陵地带，地势由南向北倾斜，地形分为三大块：南面低山，平均海拔450米，罗市镇吊井岭为境内最高点，海拔504米；
      中、西部 丘陵冈地，海拔300米左右；东部和北部沿邵水、资江一带为堆积平原，低平宽阔，海拔230～250米。最低点为城北路街道南江嘴，海拔226米。</a></div>
      </div><div class="butme"><a @click="postItemid2(20694)">了解详情</a></div></div>
    <div class="jjfc"><div class="nian12"><div class="ziti">经济发展</div><div class="abim"><img src=".././assets/images/c.jpg"></div>
    <div class="f14">2016年全年实现地区生产总值139.5亿元、增长8.7％；财政总收入5.7亿元、增长8.2％，其中一般预算收入3.8亿元、增长16.7％；规模工业增加值34.1亿元、
      增长5.6%；固定资产投资83.7亿元、增长15.1％；社会消费品零售总额62.1亿元、增长11.8%；城镇居民人均可支配收入23581元、增长9.9%；农民人均纯收入15810元、增长12%；
      实际利用外资2065万美元、增长4.8%；实际利用内资92.5亿元、增长26.1%；</a></div></div><div class="butme">
        <a @click="postItemid2(20693)">了解详情</a></div></div>
  </div>

</template>
<script>
  // import '../assets/js/amazeui.js'
  // import '../assets/js/idangerous.swiper.min.js'

  // import '.././assets/css/iconfont.css'
  import PicDetail from '../components/PicsDetail' 
  import NewsGZDT from '../components/NewsGZDT'
	export default {
    
		name: 'app',
		data () {
			return {
        x_zhenlist:[
          {id:'675',x_z_name:'蔡锷乡人民政府' },
          {id:'684',x_z_name:'城南街道' },
          {id:'702',x_z_name:'中心路街道' },
          {id:'747',x_z_name:'火车南站街道' },
          {id:'711',x_z_name:'城北路街道' },
          {id:'720',x_z_name:'城西街道' },
          {id:'693',x_z_name:'红旗路街道' },
          {id:'729',x_z_name:'翠园街道' },
          {id:'756',x_z_name:'百春园街道' },
          {id:'738',x_z_name:'学院路街道' },
          {id:'666',x_z_name:'罗市镇' },
          {id:'639',x_z_name:'板桥乡人民政府' },
          {id:'648',x_z_name:'雨溪街道' },
            ],
        activeName2: '195',
        PicsHide:false,
        showDetails:false,
				item: [
					{name: '首页', url: '/'},

        ],
        curitem:'',
        datas:[],
        piclistdata:[
          {nodeid:'195',lable:'城市风光',name:'first'},
          {nodeid:'197',lable:'美丽乡村',name:'second'},
          {nodeid:'196',lable:'历史记忆',name:'third'}
        ],
        nowpageindex:1
       
			}

    },
      components: {
     PicDetail,NewsGZDT
  },
     created(){
      
      this.Getpiclists(195)
     },
    methods: {
      HideandShowdetail:function()
      {            
        this.showDetails=false
     
       },
       HideandShow:function () {
        this.PicsHide=false
        //  this.showBanner=true
        //this.curitem=''
      },
       postItemid:function(itemid)
      {
             this.PicsHide=true
             this.curitem = itemid;
      },
         postItemid2:function(itemid)
      {
             this.showDetails=true
             this.curitem = itemid;
      },
      handleClick(tab, event) {
        let nodeid=tab.name
      this.Getpiclists(nodeid)
      //  console.log(tab, event);
      },
      Getpiclists:function(nodeid)
      {
        let Getnodeid=nodeid

        //正式地址 self.axios.get('/Category_1193/Index_'+self.nowpageindex+'.aspx'//测试地址 this.axios.get('/resNodelists'
          this.axios.get('/resNodelists/'+this.nowpageindex, {//获取新闻列表的内容/Category_1193/Index.aspx//代理地址    this.axios.get('/Nodelists'
            params: {
              squery: Getnodeid
            }
          }).then(res => {
         
            //	this.msg=res.data.data     
            let temp_data=res.data.newslist
this.datas=temp_data;
            console.log(temp_data);
            //  console.log('获取的返回值'+temp_data)
            temp_data =  temp_data.replace(/	/g, "")
            .replace(/\r|\n/g, "")
            .replace(/&lt;/g, "<")
            .replace(/&gt;/g, ">").trim()
            var json=eval("("+ temp_data+")");
            this.datas=json.newslist
        
      //  console.log(this.datas)
        //计算内容里的图片个数
            for (var x in this.datas)
         {
         var body=this.datas[x].newsbody
       //  console.log(body)
         var obj=this.datas[x]
       
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
           obj.imgs=imgs.slice(0,3)
         }
       //  console.log('matchr是什么？'+matchR+'打印imgs'+imgs+'图片总数：'+imgCount)
        }
        else
        {
            obj.imgCount=0
        }
     //  console.log('-------------------------------------------')
      }
         
           
          //   this.newsData=json
          //  console.log(this.newsData)
            // console.log(_self.newsData)
        //  console.log('得到的itemid是'+this.curItem)

          }).catch(function () {
          //  console.log('请求失败了！！');
          });
      }
    }
	}
</script>
<style>

.el-tabs--card>.el-tabs__header .el-tabs__item.is-active
{
  color: #fff;
    background: #c81623;
    border-radius: 5px 5px 0px 0px;
}
.el-tabs--card>.el-tabs__header .el-tabs__nav
{
  width:100%;
}
.el-tabs__item
{
  width:33.33%;
 font-size:17px !important;
}
.el-tabs__header
{
 margin:0 0px !important;
}
.syfj
{
  height:19rem !important;

}
.wrap2
{
  height:15rem !important; 
}
.am-gallery-overlay .am-gallery-item img
{
  height:110px;
}
.im_im
{
  top:30%;
}
    </style>