<template>
  <div><!--:newsData="newsData"-->
   <news-detail  v-on:hide="HideandShow"  :curItem="curitem" v-show="showDetails"></news-detail>
  <div  class="tab-news-content">
    <div class="new_home">

      <template v-for="(c,index) in newsall">
        <template v-if="c.imgCount===0">
          <div class="news-item tpl-1">
            <div @click="postItemid(c.ID)">
            <div class="text-content" ><h2>{{c.title}}</h2></div>
           <!-- <div class="txt-content" >{{c.intro}}</div>-->
            <ul class="news-from"><ol>置顶</ol><li class="src-net"><a @click="alerts(index)">[{{c.nodeName}}]</a><li class="src-hor">来源:{{c.Inputer}}</li></ul>
            </div>
            </div>
        </template>
        <template v-if="c.imgCount===1">
          <div class="news-item tpl-2">
            <div @click="postItemid(c.ID)">
         <div class="info-content"><div class="text-content"><h2>{{c.title}}</h2></div>
           <ul class="news-from"><ol>置顶</ol><li class="src-net">{{c.nodeName}}</li></ul></div>
          <!--  <div class="text-content"><h2>{{c.title}}</h2></div>-->
            <div class="pic-content" ><div class="img-wrap"><img :src="'http://www.dxzc.gov.cn/uploadfiles/'+c.DefaultPicUrl"/></div></div>
            </div>
           <!-- <ul class="news-from"><ol>推荐</ol><li class="src-net"><a @click="alerts(index)">[{{c.nodeName}}]</a></li><li class="src-hor">来源:{{c.Inputer}}</li><li class="src-time">{{c.InputTime}}</li><li class="src-hor" v-show="c.show">作者:{{c.Author}}</li></ul>-->
           </div>
        </template>
        <template v-if="c.imgCount===2">
          <div class="news-item tpl-4">
            <div @click="postItemid(c.ID)">
            <div class="text-content"><h2>{{c.title}}</h2></div>
            <div class="pic-content" >
              <div v-for="img in c.imgs" class="img-wrap"><img :src="'http://www.dxzc.gov.cn'+img"/></div>
            </div>
            </div>
            <ul class="news-from"><li class="src-net"><a @click="alerts(index)">[{{c.nodeName}}]</a></li><li class="src-hor">来源:{{c.Inputer}}</li></ul></div>
        </template>
        <template v-if="c.imgCount>=3">
          <div class="news-item tpl-3">
            <div @click="postItemid(c.ID)">
            <div class="text-content"><h2>{{c.title}}</h2></div>
              <div class="pic-content">
                <div v-for="(img,index) in c.imgs" class="img-wrap"><img :src="'http://www.dxzc.gov.cn'+img"/></div>
              </div>
            </div>
              <ul class="news-from"><ol>置顶</ol><li class="src-net"> <a @click="alerts(index)">[{{c.nodeName}}]</a></li><li class="src-hor">来源:{{c.Inputer}}</li></ul></div>
        </template>
      </template>
    </div>
<!--
<div>
		<!--无图片样式-->
      <!--  <div class="news-item tpl-1"><a href="more.html"><div class="text-content"><h2>【项目攻坚】大祥区全面启动海螺云峰二期矿山征地工作</h2></div>
<div class="txt-content">8月24日下午，大祥区召开海螺云峰公司二期矿山项目征地动员大会，区委书记吴劲松，区人大常委会原主任、正县级干部杨科，区公安分局政委李爱军等区领导出席会议，区指挥部、海螺云峰公司、相关乡镇、街道及村、社区负责同志参加会议。</div>
<ul class="news-from"><ol>置顶</ol><li class="src-net"><a href="#">[扶贫攻坚]</a></li><li class="src-time">08-07</li><li class="src-hor">作者</li></ul></a></div>-->

	<!--右边一张图片样式-->
  <!-- 	<div class="news-item tpl-2"><a href="more.html">
           <div class="info-content"><div class="text-content"><h2>市政府专题听取市政协关于“两个文件”落实情况的监督性调研通报</h2></div>
           <ul class="news-from"><ol>置顶</ol><li class="src-net">省市推荐</li><li class="src-time">08-07</li><li class="src-hor">作者</li></ul></div>
       <div class="pic-content"></div>
       </a></div>-->

   <!--两张图片样式-->
  <!-- 	<div class="news-item tpl-4"><a href="more.html"><div class="text-content"><h2>区政协主席陆先宏深入社区走访</h2></div>
<div class="pic-content">
 <div class="img-wrap"><img src="http://www.dxzc.gov.cn/UploadFiles/2017/8/201782512149.JPG"></div>
 <div class="img-wrap"><img src="http://www.dxzc.gov.cn/UploadFiles/2017/8/2017825121842.JPG">
</div></div>
<ul class="news-from"><li class="src-net">大祥要闻</li><li class="src-time">08-07</li><li class="src-hor">作者</li></ul></a></div>-->
           <!--三张图片样式-->
  <!-- 	<div class="news-item tpl-3">
       <a href="more.html"><div class="text-content"><h2>【扶贫攻坚】区委书记吴劲松到罗市镇调研扶贫工作</h2></div>
   <div class="pic-content"><div class="img-wrap"><img src="http://www.dxzc.gov.cn/UploadFiles/2017/8/2017823103735.jpg"></div>
         <div class="img-wrap"><img src="http://www.dxzc.gov.cn/UploadFiles/2017/8/2017823103749.jpg"></div>
       <div class="img-wrap"><img src="http://www.dxzc.gov.cn/UploadFiles/2017/8/201782310405.jpg"></div>	</div>
<ul class="news-from"><ol>置顶</ol><li class="src-net"> 今日头条</li><li class="src-time">08-07</li><li class="src-hor">作者</li></ul></a></div>-->

   <!--三张图片样式-->
  <!-- <div class="news-item tpl-3"><a href="more.html"><div class="text-content"><h2>【扶贫攻坚】檀江街道举办农村贫困人员劳动就业技能培训班</h2></div>
<div class="pic-content"><div class="img-wrap"><img src="http://www.dxzc.gov.cn/UploadFiles/2017/8/2017824163536.JPG"></div>
                        <div class="img-wrap"><img src="http://www.dxzc.gov.cn/UploadFiles/2017/8/2017824163554.JPG"></div>
                        <div class="img-wrap"><img src="http://www.dxzc.gov.cn/UploadFiles/2017/8/2017824163639.JPG"></div>
                        </div>
   <ul class="news-from"><ol>推荐</ol><li class="src-net"> [扶贫攻坚]</li><li class="src-time">08-07</li><li class="src-hor">作者</li></ul></a></div>-->

<!--两张图片样式-->
  <!-- 	<div class="news-item tpl-4"><a href="more.html"><div class="text-content"><h2>【扶贫攻坚】区委书记吴劲松到蔡锷乡走访慰问贫困户</h2></div>
<div class="pic-content"><div class="img-wrap"><img src="http://www.dxzc.gov.cn/UploadFiles/2017/8/20178289553.JPG"></div>
<div class="img-wrap"><img src="http://www.dxzc.gov.cn/UploadFiles/2017/8/20178289633.JPG"></div></div>
<ul class="news-from"><li class="src-net">大祥要闻</li><li class="src-time">08-07</li><li class="src-hor">作者</li></ul></a></div>-->


   <!--单张图片推荐样式-->
  <!--   <div class="news-item tpl-1"><a href="more.html"><div class="text-content"><h2>【项目攻坚】大祥区全面启动海螺云峰二期矿山征地工作</h2></div>
<div class="pic-content"><div class="img-wrap"><img src="http://www.dxzc.gov.cn/UploadFiles/2017/9/20179309823.gif"></div></div>
<ul class="news-from"><ol>推荐</ol><li class="src-net"></li><li class="src-time">08-07</li><li class="src-hor">作者</li></ul></a></div>-->

   <!--单张图片推荐样式-->
  <!--   <div class="news-item tpl-1"><a href="more.html"><div class="text-content"><h2>【项目攻坚】大祥区全面启动海螺云峰二期矿山征地工作</h2></div>
<div class="pic-content"><div class="img-wrap"><img src="http://www.dxzc.gov.cn/UploadFiles/2017/8/2017828145657.png"></div></div>
<ul class="news-from"><ol>推荐</ol><li class="src-net"></li><li class="src-time">08-07</li><li class="src-hor">作者</li></ul></a></div>-->
   <!--单张图片推荐样式-->
    <!--  <div class="news-item tpl-1"><a href="more.html"><div class="text-content"><h2>我区召开规范民办教育机构办学行为专项治理工作会议</h2></div>
<div class="pic-content"><div class="img-wrap"><img src="http://www.dxzc.gov.cn/UploadFiles/2017/8/201782593446.JPG"></div></div>
<ul class="news-from"><ol>推荐</ol><li class="src-net"></li><li class="src-time">08-07</li><li class="src-hor">作者</li></ul></a></div>
    <div class="news-item tpl-3"><a href="more.html"><div class="text-content"><h2>大祥区委书记吴劲松：以服务赢项目、 以速度求实效，加快滨江金融商贸新城建设</h2></div>
<div class="pic-content">
<div class="img-wrap"><img src="http://www.dxzc.gov.cn/UploadFiles/2017/8/2017822184450.png"></div>
<div class="img-wrap"><img src="http://www.dxzc.gov.cn/UploadFiles/2017/8/2017822184542.png"></div>
<div class="img-wrap"><img src="http://www.dxzc.gov.cn/UploadFiles/2017/8/2017822184645.png"></div></div>
<ul class="news-from"><ol>置顶</ol><li class="src-net"> 今日头条</li><li class="src-time">08-07</li><li class="src-hor">作者111</li></ul></a></div>
	</div>-->
  </div>
  </div>

</template>

<script>

  import newsDetail from './NewsDetail.vue'
export default {
   data () {
    return {
          obj:[],
          curitem:'',
          showDetails:false,
          showBanner:true,
          itemId:'',
          show:'true',
          newsData:[],
          json:[],
          newsList:{},
          newsbody:[],
          images:[],
          newsall:{},
    msg:'这是新闻页面',imgs:[],contents:[],imgNum:1,showDetails:false
      }},
  components: {
    newsDetail
  },
  computed:
      {
       // imgitems:function(){
       // 	return this.items.slice(0,1)
      //  }
        } ,
   mounted() {
       //newslist接口：http://www.dxzc.gov.cn/Live/newsListapi/
       //本地测试接口/newslist
       //线上测试接口/Category_1191/Index.aspx
    var self=this
    this.axios.get('/Category_1191/Index.aspx').then(res=>{
        var html =res.data
     //   console.log(html)
 	      var json = html.replace(/^\s+|\s+$/g,'')
	      .replace(/\n/g, '')
	      .replace(/<br>/g, '')
	      .replace(/&lt;/g, '<')
	      .replace(/&gt;/g, '>')
        .replace(/>\s+</g, '><');
        var ret={}
        ret = window.eval('('+json+')');
        self.newsList=ret
    //    console.log(self.newsList.newslist)
        self.newsall=self.newsList.newslist
        console.log(self.newsall)
      for (var x in self.newsList.newslist)
     {
         var body=self.newsList.newslist[x].newsbody
         var obj=self.newsList.newslist[x]
         var showAuthor=self.newsList.newslist[x].Author
        //  var curitem=self.newsList.newslist[x].ID
        //  this.curitem=curitem
       //  console.log(showAuthor)
         if( showAuthor=='')
         {
           obj.show= false
         }
         else
         {
            obj.show=true
         }
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


   // console.log(self.newsList[0].newsbody)
    //  self.images= self.getImagesWithHtml(self.newsList.newslist)
     // console.log('2222'+self.newsList)
     // self.gethtmlobj(self.newsList)

   //  self.images=self.newsList.newslist.forEach(function (item) {
   //    var html=item.newsbody
  //     var reg = /src="([^"]+)"/;
  //     console.log('获取newsbody的内容'+html)
   //    var src = html.match(reg);
  //     if (src) {
   //      self.images.push(src[1]);
//
   //    }
   //  })

      //  self.newsList=res.data.data.data//temp_data是个数组
     // console.log('输出temp:'+self.newsList)
   //   var images=self.getImagesWithHtml(temp_data)
    //   for (var i in self.newsList.newsList)//循环这个数组
    //  {
     // 	var news=self.newsList[i]
      //  console.log("打印"+news.title)
    //  }
    })


        var self=this
        for(var i in  self.myDatas)
        {
        	var obj=self.myDatas[i]
          console.log(obj)
        //   console.log('总共有'+obj.adds+'个数据')
          //  var imgCount= obj.imgs.slice(0, 2).length
          var imgCount= obj.imgs.length
          obj.imgs = obj.imgs.slice(0,3);
       //    obj.imgscount=obj.imgs.slice(0, 3)
        //  console.log( '图片数据'+obj.imgscount)
             //  console.log(imgCount)
          obj.imgCount=imgCount
          console.log('有图片数据'+imgCount+'个')        }
         //  self.contents=self.myDatas
        // console.log('这个数组里有'+self.myDatas+'个数据')
  },

  methods:{
    alerts:function()
    {
            alert("该功能还在开发中...")
    },
     HideandShow:function () {
        this.showDetails=false
        //  this.showBanner=true
        //this.curitem=''
      },
      postItemid:function(itemid)
      {
               this.showDetails=true
               this.curitem = itemid;
      },
      //   getItem: function (itemid) {
      //   let _self=this
      //   ///detail 测试代理接口
      //   ///Category_1189/Index.aspx zhengshi jiekou
      //   this.axios.get('/detail', {
      //     params: {
      //       itemid: itemid
      //     }
      //   }).then(res => {
      //     //	this.msg=res.data.data
      //     //console.log(res.data.data.banners)
      //     let temp_data=res.data
      //     console.log('获取的返回值'+temp_data)
      //     temp_data =  temp_data.replace(/	/g, "");
      //     temp_data =  temp_data.replace(/\r/g, "");
      //     temp_data =  temp_data.replace(/\n/g, "");
      //     temp_data =  temp_data.replace(/&lt;/g, "<");
      //     temp_data =  temp_data.replace(/&gt;/g, ">").trim();
      //     var json=eval("("+ temp_data+")");
      //     _self.newsData=json.data.Contents
      //     console.log(itemid)
      //    // console.log(_self.newsData)
      //     this.showDetails = true
      //   }).catch(function () {
      //     console.log('请求失败了！！');
      //   });
      // //  this.curitem = itemid;

      // },

fixJSON:function (html){
	var json = html.replace(/^\s+|\s+$/g,'')
	   .replace(/\n/g, '')
	   .replace(/<br>/g, '')
	   .replace(/&lt;/g, '<')
	   .replace(/&gt;/g, '>')
	   .replace(/>\s+</g, '><');
	var imgs = (json.match(/src="([^"]+)(?=")/g)||[]).map(function (img){
	    return img.replace('src="', '');
	});
	var ret = {};
	try{
		ret = window.eval('('+json+')');
	}catch(e){}
	ret.images = imgs;
   return ret
}
,
   getImagesWithHtml:function(arr){
    var images = [];
    var reg = /src="([^"]+)"/;
    arr.forEach(function (item){
      var html = item.newsbody;
      var src = html.match(reg);
      if (src) {
        images.push(src[1]);
      }
    });
    //  var images = getImagesWithHtml(temp_data);
  },
  gethtmlobj:function(obj)
  {
     for (var i in obj)
     {
      //   console.log(obj[i])
       self.contents=obj[i]
     //  console.log('对象类型是'+typeof(self.contents))
       self.newsbody=self.contents.newsbody
     //  console.log(images)
     //  console.log('newsbody对象类型'+typeof( self.newsbody))
    //   for (var x in self.contents)
      // {
      // var html=html+self.contents[x].newsbody
      //   console.log('这里打印的第'+x+'项'+ html+'是'+typeof(html))
        //  console.log(x.newsbody)
      // }
    // var html = obj[i]
  //   for (var i=1; i <html.length;i++)
       //console.log('这是第'+i+'条记录 '+html[i].newsbody)
       //text=text.replace(/\s/g,"");
     }
  }
  }
}
</script>


