<template>
  <div><!--:newsData="newsData"-->
 <NewsGZDT v-on:hide="HideandShow" :onloadstatus="onloading" :curItem="curitem" v-show="showDetails"></NewsGZDT>
   <div class="pull">
  
     <scroller :on-refresh="refresh"
               :on-infinite="infinite"
               style="padding-top:0px;" ref="myscroller">
   <!-- <my-topnews></my-topnews> -->
     <my-banner v-on:postcuritem="getnowitem"></my-banner><!--banner组件通过emit方法postcuritem绑定父组件方法getnowitem 然后将curitem送给newsdetail组件-->
  <div  class="tab-news-content">
    <div class="new_home">
      <template v-for="(c,index) in newsall">
      <template v-if="c.isvideo">
         <div class="news-item tpl-1">
            <div>
            <div class="text-content" ><h2>{{c.title}}</h2></div>
          
              <div class="pic-content">
                <p id="video_p">
              <video-player  class="video-player-box"
                 ref="videoPlayer"
                 :options="c.playerOptions"
                :playsinline="true"
                @play="onPlayerPlay($event)"
                @pause="onPlayerPause($event)"
                @ended="onPlayerEnded($event)"
                @loadeddata="onPlayerLoadeddata($event)"
                @waiting="onPlayerWaiting($event)"
                @playing="onPlayerPlaying($event)"
                @timeupdate="onPlayerTimeupdate($event)"
                @canplay="onPlayerCanplay($event)"
                @canplaythrough="onPlayerCanplaythrough($event)"
                @ready="playerReadied"
                @statechanged="playerStateChanged($event)">
              </video-player>
              </p>
          </div>
            <ul class="news-from"><li class="src-v"><ol>视频</ol></li><li class="src-net"><a @click="alerts(index)">[{{c.nodeName}}]</a><li class="src-hor">{{c.Inputer}}</li></ul>
            </div>
            </div>          
        </template>
        <template v-if="c.imgCount===0">
          <div class="news-item tpl-1">
            <div @click="postItemid(c.ID)">
            <div class="text-content" ><h2>{{c.title}}</h2></div>
           <!-- <div class="txt-content" >{{c.intro}}</div>-->
            <ul class="news-from"><!--<ol></ol>--><li class="src-net"><a @click="alerts(index)">[{{c.nodeName}}]</a><li class="src-hor">{{c.Inputer}}</li></ul>
            </div>
            </div>
        </template>

      <template v-if="c.Picheight >=450 && c.imgCount===1">
          <div class="news-item tpl-1">
            <div @click="postItemid(c.ID)">
         <div class="info-content"><div class="text-content"><h2>{{c.title}}</h2></div>
         <div class="pic-content"><div class="img-wrap Pic450"><img :src="'http://www.dxzc.gov.cn/uploadfiles/'+c.DefaultPicUrl"/></div></div>
           <ul class="news-from"><li class="src-net">[{{c.nodeName}}]</li><li class="src-hor">{{c.Inputer}}</li></ul></div>

            </div>
           </div>
      </template>
        <template v-if="c.Picheight <=450 && c.imgCount===1">
          <div class="news-item tpl-2">
            <div @click="postItemid(c.ID)">
         <div class="info-content"><div class="text-content"><h2>{{c.title}}</h2></div>
          </div>
          <div class="tpl2-s"> <ul class="news-from"><li class="src-net"><a @click="alerts(index)">[{{c.nodeName}}]</a></li><li class="src-hor">{{c.Inputer}}</li></ul></div>
          <!--  <div class="text-content"><h2>{{c.title}}</h2></div>-->
            <div class="pic-content" ><div class="img-wrap minPic450"><img :src="'http://www.dxzc.gov.cn/uploadfiles/'+c.DefaultPicUrl"/></div></div>
            </div>
           <!-- <ul class="news-from"><ol>推荐</ol><li class="src-net"><a @click="alerts(index)">[{{c.nodeName}}]</a></li><li class="src-hor">来源:{{c.Inputer}}</li><li class="src-time">{{c.InputTime}}</li><li class="src-hor" v-show="c.show">作者:{{c.Author}}</li></ul>-->
           </div>
        </template>
        <template v-if="c.imgCount===2">
          <div class="news-item tpl-4">
            <div @click="postItemid(c.ID)">
            <div class="text-content"><h2>{{c.title}}</h2></div>
            <div class="pic-content" >
              <div v-for="img in c.imgs" class="img-wrap twoPics"><img :src="'http://www.dxzc.gov.cn'+img"/></div>
            </div>
            </div>
            <ul class="news-from"><li class="src-net"><a @click="alerts(index)">[{{c.nodeName}}]</a></li><li class="src-hor">{{c.Inputer}}</li></ul></div>
        </template>
        <template v-if="c.imgCount>=3">
          <div class="news-item tpl-3">
            <div @click="postItemid(c.ID)">
            <div class="text-content"><h2>{{c.title}}</h2></div>
              <div class="pic-content">
                <div v-for="(img,index) in c.imgs" class="img-wrap morePics"><img :src="'http://www.dxzc.gov.cn'+img"/><div v-show="index==2" class="sub-mark">{{c.imgCount}}图</div></div>
              </div>
            </div>
              <ul class="news-from"><li class="src-net"> <a @click="alerts(index)">[{{c.nodeName}}]</a></li><li class="src-hor">{{c.Inputer}}</li></ul></div>
        </template>
      </template>

    </div>
	</div>
     </scroller>
    </div>

  </div>
  </template>

<script>
  import NewsGZDT from './NewsGZDT.vue'
  import newsDetail from './NewsDetail.vue'
  import myBanner from './banner.vue'
  import myTopnews from './topnews.vue'
export default {
   data () {
    return {
      playerOptions: {
          // videojs options
          controls: true,
          muted: true,
          language: 'zh-CN',
          playbackRates: [0.7, 1.0, 1.5, 2.0],
          sources: [],
          poster: "https://surmon-china.github.io/vue-quill-editor/static/images/surmon-1.jpg"
          // poster: "/static/images/author.jpg",
        },
          nowitemid:'',
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
          items: [],
          newsall:[],
          nowpageindex:1,
          msg:'这是新闻页面',
          imgs:[],
          contents:[],
          imgNum:1,
          showDetails:false,
          onloading:true,
          video:{},
          playstate:{}

      }},
  components: {
    newsDetail,myBanner,NewsGZDT,myTopnews
  },
   computed: {
      player() {
        return this.$refs.videoPlayer.player
      }
    },
   mounted() {
    
      // window.addEventListener('touchmove', func, { passive: false })
       //newslist接口：http://www.dxzc.gov.cn/Live/newsListapi/
       //本地测试接口/newslist
       //线上测试接口/Category_1191/Index.aspx
        
      if (this.nowpageindex=1)
      {
        this.refresh(()=>{//下拉刷新
       
        })
      }
  },

  methods:{
    //视频控件按钮
      // listen event
     // listen event
//       debounce(func, wait, immediate) {
// 	var timeout;
// 	return function() {
// 		var context = this, args = arguments;
// 		var later = function() {
// 			timeout = null;
// 			if (!immediate) func.apply(context, args);
// 		};
// 		var callNow = immediate & !timeout;
// 		clearTimeout(timeout);
// 		timeout = setTimeout(later, wait);
// 		if (callNow) func.apply(context, args);
// 	};
// },
 
// var myEfficientFn = debounce(function() {
// 	// 滚动中的真正的操作
// }, 250);
 
// // 绑定监听
// window.addEventListener('resize', myEfficientFn);

      onPlayerPlay(player) {
        // console.log('player play!', player)
      },
      onPlayerPause(player) {
        // console.log('player pause!', player)
      },
      onPlayerEnded(player) {
        // console.log('player ended!', player)
      },
      onPlayerLoadeddata(player) {
        // console.log('player Loadeddata!', player)
      },
      onPlayerWaiting(player) {
        // console.log('player Waiting!', player)
      },
      onPlayerPlaying(player) {
        // console.log('player Playing!', player)
      },
      onPlayerTimeupdate(player) {
        // console.log('player Timeupdate!', player.currentTime())
      },
      onPlayerCanplay(player) {
        // console.log('player Canplay!', player)
      },
      onPlayerCanplaythrough(player) {
        // console.log('player Canplaythrough!', player)
      },
      // or listen state event
      playerStateChanged(playerCurrentState) {
        // console.log('player current update state', playerCurrentState)
      },
      // player is ready
      playerReadied(player) {
        // seek to 10s
        console.log('example player 1 readied', player)
        player.currentTime(5000)
        // console.log('example 01: the player is readied', player)
      },
      
        loadImage:function(url, callback){
         let imgloader = new Image()
          imgloader.onload = function (){
              if(callback)
              {
                callback(this)
              }
              else
              {
                console.log('回掉函数为空')
              }
              //console.log(loader.width)
          };
            imgloader.src =url
          //  console.log(url)
        },

      getnowitem:function(itemid)
      {
          this.showDetails=true
          this.curitem = itemid;
          console.log('子组件传来的数据'+itemid)
      },
        infinite: function (done) {
        var self = this
        setTimeout(function () {
        var start = self.bottom + 1;
        //self.axios.get('/loadmore/'+self.nowpageindex 测试地址
        //self.axios.get('/Category_1191/Index_'+self.nowpageindex+'.aspx'
       self.axios.get('/loadmore/'+self.nowpageindex,{
       }).then (res=>{
      //   console.log(res.data)
    
         var html=res.data       
         let ret={}   
       ret=self.Myunilt.listsRexg(html)
        //  var json = html.replace(/^\s+|\s+$/g, '')
        //  .replace(/\n/g, '')
        //  .replace(/<br>/g, '')
        //  .replace(/&lt;/g, '<')
        //  .replace(/&gt;/g, '>')
        //  .replace(/>\s+</g, '><');
        //  var ret={}
        //  ret = window.eval('(' + json + ')');
         //console.log(ret.newslist)
                for (var x in ret.newslist)
            {            
              let body=ret.newslist[x].newsbody
              let obj=ret.newslist[x]
              let mypic= ret.newslist[x].DefaultPicUrl
                self.loadImage('http://www.dxzc.gov.cn/uploadfiles/'+mypic,function(img)
             {
               obj.Picheight=img.height          
             })
              let showAuthor=ret.newslist[x].Author
              let mytitle= ret.newslist[x].title         
              obj.show=showAuthor?true:false;   
              var reg1=/<img.+?\/>/g;//获取图片的正则
              var r=body.match(reg1);      
            if(r){
            var imgCount=r.length;
            var reg2=/src="(.+?)"/g;//获取图片地址是正则
              var imgs=[];
              for(var i in  r){
                var matchR=r[i].match(reg2);         
                imgs.push(RegExp.$1);
              obj.imgCount=imgCount
              obj.imgs=imgs.slice(0,3)//只去三张保存在imgs对象中
            }    
        }
        else
        {
            obj.imgCount=0
        }
              let _video_url=ret.newslist[x].url_m   
              obj.isvideo=_video_url.indexOf('.mp4?')>-1    
        if(obj.isvideo)
              {   
   // var objRectList = ss.getClientRects() 
   // console.log(objRectList);  
   // var ss=  elt.getClientRects()
   //  var rectCollection = JSON.stringify(elt.getClientRects(), null, '\t' )                          
                    self.video.type="video/mp4"
                    self.video.src=_video_url
                    self.playerOptions.sources=(self.video);                 
                    obj.imgCount='Nan'              
                    console.log(self.playerOptions)  
                    obj.playerOptions=self.playerOptions  
                  // console.log(self.playerOptions)    
              }      
                    self.newsall.push(ret.newslist[x])         
            }
            // console.log(self.newsall)
      })     
        // setTimeout(() => {
        //     $scroller.get('myscroller').resize()
        //   })
          self.bottom = self.bottom + 10;
          self.$refs.myscroller.resize();
          done();
          self.nowpageindex++
        }, 500)
      },
       refresh: function (done) {
        var self = this
        setTimeout(function () {
        var start = self.top - 1
        //   self.axios.get('/loadmore/'+self.nowpageindex 测试地址
        //   self.axios.get('/Category_1191/Index_'+self.nowpageindex+'.aspx'
  self.axios.get('/loadmore/'+self.nowpageindex,{
       }).then (res=>{
         var html=res.data
          let ret={}   
              ret=self.Myunilt.listsRexg(html)
      //  console.log(ret.newslist)
          for (var i in ret.newslist)
          {
            self.newsall.splice(0, 0)
           // console.log(i.newslist[i].title)
          }
          self.top = 1;
          self.bottom =10;
      })
          self.top = self.top - 0;
          self.$refs.myscroller.resize();
          done();
        }, 1500)
      },
 
     HideandShow:function () {
        this.showDetails=false
        this.loading=true;
        //  this.showBanner=true
        //this.curitem=''
      },
      postItemid:function(itemid)
      {               
               this.showDetails=true
               this.curitem = itemid;
               console.log(this.onloading)             
      },
   
   getImagesWithHtml:function(arr){
    var images = [];
    var reg = /src="([^"]+)"/;
    arr.forEach(function (item){
      var html = item.newsbody;
      var src = html.match(reg);
      if (src) {
        images.push(src[1]);
      }
    })
    //  var images = getImagesWithHtml(temp_data);
  }

  }
}
</script>
<style>
.video-js
{
    width: 100%;
    height: 100%;
    min-width: 9.55rem;
    min-height: 5.4rem;
}
.video-js .vjs-big-play-button
{
    top:40% !important;
    left:35% !important;
    padding: 0;
}
.pull
{


}


</style>


