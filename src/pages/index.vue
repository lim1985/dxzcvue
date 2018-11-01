<template>
  <div>         <!-- <my-news  v-show="shownewslist"></my-news>-->
      <my-newsload v-show="shownewslist"></my-newsload>
  </div>
</template>

<script>

    import myNews from '../components/newslist'
     import myNewsload from '../components/newslistload'
    export default {
  name: 'app',
   data() {
            return {
              shownewslist:true
            }
    },
  components: {
    myNews,myNewsload
  },
    methods:{
    }
    }
</script>
