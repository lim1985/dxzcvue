<template>
  <div>
	<header id="header">
		<div class="search"><i @click="showsearch" class="icon iconfont icon-search"></i></div>
    <mysearch  v-on:hide="HideandShow"  v-show="searchshow"></mysearch>
			<div class="wrapper wrapper03" id="wrapper03">
<div class="scroller">
	<ul class="clearfix">
    <li @click="showCurindex(index)" v-for="(item,index) in siDer">
     <!-- <router-link :class="index==nowIndex ?'one':''" :to="{path:item.Url}">{{item.ItemName}}</router-link>-->
   <!--   <router-link :class="index==nowIndex ?'one':''" :to="item.Url">{{item.ItemName}}</router-link>-->

     <a :class="index==nowIndex ?'one':''" :href="item.Url">{{item.ItemName}}</a>
    
<span class="bttoms"></span>
      </li>
  </ul>
</div>
</div>
		<div class="more"><i class="icon iconfont icon-gengduo"></i></div>
    </header>
  <my-menu></my-menu>
  </div>
</template>

<script>
  import './../assets/js/navbarscroll.js'
  import myMenu from './menu'
  import mysearch from './search'

export default {
  name: 'hello',
      data () {
        return {
          curindex:'',
          nowIndex:'',
          msg: 'Welcome to Your Vue.js App',
          searchshow:false,
          siDer:[
            {ItemName:'动态',Url:'/'},
            {ItemName:'办事',Url:'http://zwfw.hunan.gov.cn/hnvirtualhall/430503999000/jsp/index.jsp'},
            {ItemName:'政务',Url:'#/zwgk'},
            {ItemName:'互动',Url:'http://www.dxzc.gov.cn/Category_14/Index.aspx'},
            {ItemName:'概况',Url:'#/dxgk'},

          ]
        }
      },
  methods:
    {
      HideandShow()
      {
        this.searchshow=false
      },

            showCurindex(index)
            {
            	this.nowIndex=index;
            	this.curindex=index;
              var curid=this.curindex
              console.log(curid);

            }
            ,
             showsearch()
            {
            return this.searchshow=true
            }
    },
  components: {
    myMenu,mysearch
  },
      mounted()
  {
    $('.wrapper').navbarscroll()

    //demo示例五 通过id调取
    $('#demo05').navbarscroll({
      defaultSelect:6,
      endClickScroll:function(obj){
        console.log(obj.text())
      }
    });

    //demo示例六 通过id调取
    $('#demo06').navbarscroll({
      defaultSelect:3,
      scrollerWidth:6,
      fingerClick:1,
      endClickScroll:function(obj){
        console.log(obj.text())
      }
    });
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

