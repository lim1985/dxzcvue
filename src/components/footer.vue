<template>
<footer><ul class="icon_lists clear">
               <li>
                <a href="/Category_302/Index.aspx" class="dqian"><i class="icon iconfont icon-xinwen"></i>
                    <div class="name">2017工作要点</div></a>
                </li>
                <li>
                <a href="/Category_5/Index.aspx"><i class="icon iconfont icon-zhengwu"></i>
                    <div class="name zhengwu">通知公示</div></a>
                </li>
                <li>
                <a href="/Government/Letter/LetterList.aspx"><i class="icon iconfont icon-banshijilu"></i>
                    <div class="name">信件公示</div></a>
                </li>
                <li  style="border-right: none;">
                <a @click='Jq_shownemu'><i class="icon iconfont icon-gengduo1"></i>
                    <div class="name">更多</div></a>
                </li>
        </ul></footer>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
  ,
   methods:{
      Jq_shownemu:function()
      {
           let menu= $(".menu")
           menu.css({"overflow":"hidden","height":"100%","display":"block"})
           let  more=$(".more");
                more.addClass("on");
              

      },
        alerts()
        {
           alert('暂时没有更多栏目')   
           console.log('暂时没有更多栏目')

        },
        menushow()
        {
                this.$emit('show')
        }
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

