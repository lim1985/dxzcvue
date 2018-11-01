<template>
  <div class="menu">
    <ul>
      <li>
        <a href="http://www.dxzc.gov.cn/Category_1210/Index.aspx">{{Items.Pagehome.ItemName}}</a>
       </li>
     
        
      <li v-for="(i,index) in Items.zwdt.items">      
          
          <a :href="i.Url">{{i.ItemName}}</a>
      <!-- <router-link :to="{path:i.Url}">{{i.ItemName}}</router-link> -->
      </li>
    <li v-for="(i,index) in Items.zwdt.items">      
          
          <a :href="i.Url">{{i.ItemName}}</a>
      <!-- <router-link :to="{path:i.Url}">{{i.ItemName}}</router-link> -->
      </li>
         <li v-for="(i,index) in Items.bsdt.items">      
          
          <a :href="i.Url">{{i.ItemName}}</a>
      <!-- <router-link :to="{path:i.Url}">{{i.ItemName}}</router-link> -->
      </li>
           <li v-for="(i,index) in Items.zwgk.items">      
          
          <a :href="i.Url">{{i.ItemName}}</a>
      <!-- <router-link :to="{path:i.Url}">{{i.ItemName}}</router-link> -->
      </li>
          <li v-for="(i,index) in Items.hdjl.items">      
          
          <a :href="i.Url">{{i.ItemName}}</a>
      <!-- <router-link :to="{path:i.Url}">{{i.ItemName}}</router-link> -->
      </li>
           <li v-for="(i,index) in Items.dxgk.items">      
          
          <a :href="i.Url">{{i.ItemName}}</a>
      <!-- <router-link :to="{path:i.Url}">{{i.ItemName}}</router-link> -->
      </li>
   
   
   

       
    


      <ol><span><img src="../assets/images/logo.png"><p>邵阳市大祥区党政门户网</p></span></ol></ul>
  </div>
</template>

<script>
export default {
  name: 'hello',
 mounted() {
   console.log(this.Items);
 },


  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
     Items:{
       Pagehome:{ItemName:'电脑版首页',Url:'http://www.dxzc.gov.cn/Category_1210/Index.aspx'},
      zwdt:{
          title:'政务动态',
          items:[
            {ItemName:'大祥要闻',Url:'http://www.dxzc.gov.cn/Category_1/Index.aspx'},
            {ItemName:'部门动态',Url:'http://www.dxzc.gov.cn/Category_1076/Index.aspx'},
            {ItemName:'基层动态',Url:'http://www.dxzc.gov.cn/Category_25/Index.aspx'},
            {ItemName:'央网推荐',Url:'http://www.dxzc.gov.cn/Category_21/Index.aspx'},
            {ItemName:'省市推荐',Url:'http://www.dxzc.gov.cn/Category_1135/Index.aspx'},
          ],

      },
          bsdt:{
          title:'大祥区网上政务服务大厅',
          items:[
            {ItemName:'办事大厅',Url:'http://wsbs.hunan.gov.cn/virtualhall/index.jsp?reLogin=1&areaCode=430503999000'},
               ],

      } ,
          zwgk:{
          title:'政务公开',
          items:[
            {ItemName:'政务工作要点',Url:'http://www.dxzc.gov.cn/Category_302/Index.aspx'},
            {ItemName:'领导之窗',Url:'http://www.dxzc.gov.cn/Category_122/Index.aspx'},
            {ItemName:'通知公示',Url:'http://www.dxzc.gov.cn/Category_5/Index.aspx'},
            {ItemName:'法规文件',Url:'http://www.dxzc.gov.cn/Category_170/Index.aspx'},
            {ItemName:'人事信息',Url:'http://www.dxzc.gov.cn/Category_165/Index.aspx'},
            {ItemName:'计划规划解读',Url:'http://www.dxzc.gov.cn/Category_203/Index.aspx'},
            {ItemName:'信息公开目录',Url:'http://www.dxzc.gov.cn/Category_44/Index.aspx'},
            {ItemName:'信息公开指南',Url:'http://www.dxzc.gov.cn/Category_61/Index.aspx'},
            {ItemName:'信息公开年报',Url:'http://www.dxzc.gov.cn/Category_815/Index.aspx'},
            {ItemName:'政府工作报告',Url:' http://www.dxzc.gov.cn/Category_617/Index.aspx'},
             {ItemName:'部门权利清单',Url:'http://www.dxzc.gov.cn/UploadFiles/2015/7/20157194332.zip'},
            {ItemName:'部门责任清单',Url:'http://www.dxzc.gov.cn/UploadFiles/2015/7/20157211852.zip'},
                ],

      },
          hdjl:{
          title:'互动交流',
          items:[
            {ItemName:'我要写信',Url:'http://www.dxzc.gov.cn/Government/Letter/Letterwriter.aspx?DepartmentId=15'},
            {ItemName:'信件公示',Url:'http://www.dxzc.gov.cn/Government/Letter/LetterList.aspx'},
            {ItemName:'调查征集',Url:'http://www.dxzc.gov.cn/Category_205/Index.aspx'},
            {ItemName:'进度查询',Url:'http://www.dxzc.gov.cn/Government/Letter/LetterQuery.aspx'},
            {ItemName:'常见问题',Url:'http://www.dxzc.gov.cn/Category_1112/Index.aspx'}
          
                ],

      },
        dxgk:{
          title:'大祥概况',
          items:[
            {ItemName:'大祥概况首页',Url:'#/dxgk'},
          
          
                ],

      },
      //  titles:[],
      
      // {ItemName:'办事',Url:'http://wsbs.hunan.gov.cn/virtualhall/index.jsp?reLogin=1&areaCode=430503999000'},
      // {ItemName:'政务',Url:'http://www.dxzc.gov.cnhttp://www.dxzc.gov.cn/Category_44/Index.aspx'},
      // {ItemName:'互动',Url:'http://www.dxzc.gov.cnhttp://www.dxzc.gov.cn/Category_14/Index.aspx'},
      // {ItemName:'概况',Url:'http://www.dxzc.gov.cnhttp://www.dxzc.gov.cn/Category_9/Index.aspx'},
      //  {ItemName:'通知公示',Url:'http://www.dxzc.gov.cnhttp://www.dxzc.gov.cn/Category_5/Index.aspx'},
      //   {ItemName:'公开招考',Url:'http://www.dxzc.gov.cnhttp://www.dxzc.gov.cn/Category_1121/Index.aspx'},
      //    {ItemName:'法规文件',Url:'http://www.dxzc.gov.cnhttp://www.dxzc.gov.cn/Category_170/Index.aspx'},
      //     {ItemName:'招投标监管',Url:'http://www.dxzc.gov.cnhttp://www.dxzc.gov.cn/Category_1169/Index.aspx'},
      //      {ItemName:'领导之窗',Url:'http://www.dxzc.gov.cnhttp://www.dxzc.gov.cn/Category_122/Index.aspx'},
      //       {ItemName:'办事指南',Url:'http://www.dxzc.gov.cnhttp://www.dxzc.gov.cn/Category_615/Index.aspx'},
      //        {ItemName:'人事信息',Url:'http://www.dxzc.gov.cnhttp://www.dxzc.gov.cn/Category_165/Index.aspx'},
      //         {ItemName:'权利清单',Url:'http://www.dxzc.gov.cn/Item/27329.aspx'},
      //          {ItemName:'责任清单',Url:'http://www.dxzc.gov.cn/Item/27329.aspx'},
      //           {ItemName:'财政信息',Url:'http://www.dxzc.gov.cnhttp://www.dxzc.gov.cn/Category_121/Index.aspx'},
      //            {ItemName:'信件公示',Url:'http://www.dxzc.gov.cnhttp://www.dxzc.gov.cn/Government/Letter/LetterList.aspx'},
      //             {ItemName:'调查征集',Url:'http://www.dxzc.gov.cnhttp://www.dxzc.gov.cn/Category_205/Index.aspx'},
      //              {ItemName:'重大项目',Url:'http://www.dxzc.gov.cnhttp://www.dxzc.gov.cn/Category_1142/Index.aspx'},
      //               {ItemName:'区情简介',Url:'http://www.dxzc.gov.cn/item/26948.aspx'},
      //                {ItemName:'大祥年鉴',Url:'http://www.dxzc.gov.cnhttp://www.dxzc.gov.cn/Category_18/Index.aspx'},
      //                 {ItemName:'邵阳名人',Url:'http://www.dxzc.gov.cnhttp://www.dxzc.gov.cn/Category_152/Index.aspx'},
  
   }
   }
  }
}
</script>
<style scoped>
.menulist
{

}
.menulist h1
{
  
}
</style>

<!-- Add "scoped" attribute to limit CSS to this component only -->

