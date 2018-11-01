<template>
<div class="search-layout">
   <news-detail  v-on:hide="HideandShow"  :curItem="curitem" v-show="showDetails"></news-detail>

  <div class="page page-search view">
    <form class="search-area"><span><i @click="hidesearch" class="icon iconfont icon-guanbi"></i></span>
    <div class="input-per">
      <input  v-on:input="delayloadData" v-model="SearchWd" type="text" placeholder="搜索你感兴趣的任何词" class="search1 clickable">

      </div></form>
		<div class="hot-search" ><h4 >热门搜索
      <!--<a href="#" class="rzi">更多热搜></a>-->
      </h4>

      <ol v-show="wdshow" class="hot-list">
          <template v-for="(c,index) in searchwds">
           <li class="red"><span @click="hitswd(c)">{{c}}</span></li>
           </template>

        </ol>
        </div>
        </div>

  <div  class="tab-news-content">
    <div class="new_home">
   <div class="news-item tpl-1">
            <div  v-for="(item,index) in searchlist">
            <div @click="postItemid(item.ID)" class="text-content" ><h2 v-html="item.title"></h2></div>
           <!-- <div class="txt-content" >{{c.intro}}</div>-->
            <ul class="news-from"><!--<ol></ol>--><li class="src-net"><a @click="alerts(index)"></a><li class="src-hor"></li><li class="src-hor"></li></ul>
            </div>
            </div>
            <div class="pagesgo">
    <button @click="uppage"><span>上一页</span></button> <button @click="nextpage"><span>下一页</span></button></div>
</div>
</div>
  <!--
<div class="page page-search view"><form class="search-area"><span><img src="images/es.png"></span><div class="input-per"><input type="text" placeholder="搜索你感兴趣的任何词" class="search1 clickable"></div></form>
		<div class="hot-search" ><h4 >大家都在搜<a href="#" class="rzi">更多热搜></a></h4><ol class="hot-list"><li><a href="#" class="red">宋仲基宋慧乔大婚</a></li><li><a href="#" class="red">美军再曝命案</a></li><li><a href="#">用蟑螂告白遭拒</a></li><li><a href="#">王凯故宫被偶遇偶遇偶遇</a></li><li><a href="#">中国银行</a></li><li><a href="#">奔腾连撞5次奥迪</a></li><li><a href="#">女子穿睡衣上高速</a></li><li><a href="#">陈寒柏辱骂北京队</a></li><li><a href="#">日官方再宣领土权</a></li><li><a href="#">昆明现女性停车位</a></li></ol></div></div>

    <input v-on:input="delayloadData" v-model="SearchWd"></input><button @click="getsearch">全文搜索</button>
    <ul>

    <button @click="nextpage">下一页</button>
    </ul>
<button @click="hidesearch">返回</button> -->
</div>
</template>
<script>
  import myMenu from './menu'
  // import '../assets/bootstrap/css/bootstrap.css'
  // import '../assets/bootstrap/js/bootstrap.min.js'


  import newsDetail from './NewsDetail.vue'
	export default {
    props:[],
    watch:{
      curItem:''
    },
		name: 'app',
		data () {
			return {
            searchwds:['吴劲松','黄艳娥','十九大','扶贫攻坚','重大项目','办事指南','财政预决算','互联网+监督'],
            searchwd:'',
            SearchPages:1,
            channl:2,
            SearchWd:'',
            searchlist:[],
            delayloadDataID:0,
            formatsearchlist:[],
            wdshow:true,
            curitem:'',
            showDetails:false
			        }
    },
    computed: {

    },
    created(){

    },
    mounted() {


      //  this.scrollTop = 500
      // setTimeout(() => {
        //     alert(`异步${this.curItem}`);
        // },100);
    },
    components:{myMenu,newsDetail},
    methods:
      {
        hitswd:function(val)
        {
            this.SearchWd=val
            this.wdshow=false
            this.getsearch()
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
         uppage:function()
        {
            this.SearchPages--
            let s=this.SearchPages

            this.getsearch()
        },
        nextpage:function()
        {
            this.SearchPages++
            this.getsearch()
        },

        delayloadData:function()
        {
          clearTimeout(this.delayloadDataID);
          this.delayloadDataID=setTimeout(()=> {
             this.wdshow=false
             this.getsearch()
          }, 1000);
        },

        getsearch:function () {
            this.searchlist=[]
            let SearchWd =this.SearchWd

            let channl= this.channl
            let pages = this.SearchPages

          this.axios.get('/Search/s.aspx', {//获取新闻列表的内容测试/search/、正式//http://www.dxzc.gov.cn/Search/s.aspx
            params: {
              c : channl,
              wd: SearchWd,
              p : pages,
            }
          }).then(res => {
                   let html= res.data
                    console.log(html)
                   html = html.replace(/>\s+([^\s<]*)\s+</g, '>$1<').trim()
                  // console.log(html)
                              .replace(/<!--[\s\S]*?-->/g, '')
                              .replace(/\n/g, ' ')
                         //     console.log(html)
                             let matches = html.match(/\[jsonsearch\](.*?)\[\/jsonsearch\]/gi)

                             matches=matches.map(function (item)
                             {
                                return item.replace(/\[\/?jsonsearch\]/g, '')

                             })
                            console.log(matches)

                         // let matches = html.match(/\{(.+?)\}/gi)
                           //  console.log(matches)
                           if (matches)
                           {
                           // let json=matches.length;
                            let reg=/\{(.+?)\}/gi
                            for (let i in matches)
                            {
                               let matchr=matches[i].match(reg)
                               let json=eval("("+matchr+")")
                              // console.log(json)
                               this.searchlist.push(json)

                            //   console.log(this.searchlist)
                            }

                           }
                  // console.log(matches)
            //        let matches = html.match()
            //  if (matches !== null) {
            //       let content = matches[1];
            //           console.log(content)
            //                         }
                 //  let json=eval("("+html+")")




            //	this.msg=res.data.data
            //console.log(res.data.data.banners)
            // let temp_data=res.data
            //  console.log('获取的返回值'+temp_data)
            // temp_data =  temp_data.replace(/	/g, "")
            // .replace(/\r|\n/g, "")
            // .replace(/&lt;/g, "<")
            // .replace(/&gt;/g, ">").trim()
            // var json=eval("("+ temp_data+")");
            // console.log(json)
            // this.newsData=json.data.Contents

            // console.log(itemid)
            // console.log(_self.newsData)

          }).catch(function () {
            console.log('请求失败了！！');
          })
             if(SearchWd='')
            {
               this.wdshow=true
            }
        },
           hidesearch()
          {
          //  this.showDetails=false;

            this.wdshow=true
            this.SearchWd=''
            this.searchlist=[]
            this.$emit('hide')
          },

        scrollTops()
        {
      //  let curHeight =document.getElementById('topscoll').scrolltop
          //document.documentElement.scrollTop = document.body.scrollTop =0;
        // console.log('当前的scrolltop高度是'+curHeight)
       //  window.addEventListener('scroll', this.needToTop);  //滚动事件监听

        }



      }
	}
</script>
<style scoped>
  .search-layout{
    position:fixed;
    top:0;
    bottom:0;
    left:0;
    right:0;
    overflow: auto;
    z-index:999;
    background:#fff;

  }
.pagesgo
{}
.pagesgo button
{
border-radius:5px 5px;
    background-color: #6e92ef;
}
.pagesgo span
{
padding: 20px;
    font-size: 0.5rem;
    color: #fff;

}
  .tt
  {
    height:2px;
  }
</style>




