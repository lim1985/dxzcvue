
import axios from 'axios'
export default {
    Getlistbyparams:function(squery)
    {
      
      let _self=this
      ///ReqListsBysQueryApi 测试代理接口
      ///Category_1212/Index_$1.aspx
      this.axios.get('/Category_1212/Index.aspx', {
        params: {
          squery: squery
        }
      }).then(res => {
        if(res.status >= 200 && res.status < 300)  
        {      
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
    }      
    })
    },

    axiosGetnewslist:function(url,params)
    {
      return axios.get(url,params);
    },    
    ContentsRexg:function(html)
    {
      let json = html.replace(/^\s+|\s+$/g, '')
      .replace(/\n/g, '')
      .replace(/<br>/g, '')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/>\s+</g, '><');
      let ret={}
      ret = window.eval('(' + json + ')');
      return ret;
    },
    listsRexg:function(html)
    {
      let json = html.replace(/^\s+|\s+$/g, '')
      .replace(/\n/g, '')
      .replace(/<br>/g, '')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/>\s+</g, '><');
      return window.eval('(' + json + ')');        
    },
    GetListbyTites:function(s,page)//获取列表根据内容标题的函数 S 为传进来的标题
    {
        //测试地址'/ReqListsBytitlesApi/'+page
      ///Category_1213/Index_'+page+'.aspx' 正式地址
     return axios.get('/Category_1213/Index_'+page+'.aspx',
        {
           params: {
           squery: s
        }
        })
        .then(res=> {              
         var data =res.data;
         var html = data;             
         var json=this.fixhtmltoJSON(html)       
       return json.newslist;
        })
       

    },
    // {PE.Label id="内容信息列表" bindStyle="2018resjsonbynodesandtitle" nodes="{PE.Label id="LIM_工作动态节点ID" /},{PE.Label id="LIM_政策法规节点ID" /},{PE.Label id="LIM_通知公示节点ID" /},5,129,1142,{PE.Label id="LIM_年度报告节点ID" /},{PE.Label id="LIM_资金信息节点ID" /},{PE.Label id="LIM_计划规划节点ID"/},{PE.Label id="LIM_政务服务节点ID不包含乡镇" /},{PE.Label id="LIM_政策解读节点ID" /},{PE.Label id="LIM_政府文件节点ID不包含乡镇" /},1111,1022,1113,5,129,1" outputQty="6"  Titles="@Request_titles" titleLength="70" listOrderType="3" usePage="true" /}
       //测试地址'/Getchildsnodelist
      ///Category_1218/Index.aspx 正式地址
    Getchildsnodelist:function(id)
    {    
     return axios.get('/Category_1218/Index.aspx',
        {
           params: {
           nodeid:id
        }
        })
        .then(res=> {                      
              if(res.status >= 200 && res.status < 300) 
             {
                console.log(typeof(res.data.Nodelists))
              
                return res.data.Nodelists       
             }
   
        })
    },
  
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
    },
    fixhtmltoJSON:function (html){
        var json = html.replace(/^\s+|\s+$/g,'')                         
           .replace(/                 /g,'')         
           .replace(/  /g,'')                
           .replace(/\r/g,'')
           .replace(/\n/g,'')
           .replace(/<br>/g, '')
           .replace(/&lt;/g, '<')
           .replace(/&nbsp;/g, '')
           .replace(/&gt;/g, '>')
           .replace(/>\s+</g, '><')      
          .replace(/				/g,'')  
          .replace(/                        /g, "") 
           var ret = {};
        try{
            ret = window.eval('('+json+')');
        }catch(e){}      
       return ret
    },
    Getcurnodename:function(nodename)
    {
        console.log(nodename)
        ///ReqNodesArrbyNodeid 测试地址
        ///Category_1216/Index.aspx 正式地址
       return axios.get('/Category_1216/Index.aspx',{
        params: {
           squery: nodename
         }
       }).then(res => {  
           if(res.status >= 200 && res.status < 300)  
           {          
           var html = res.data;
           // console.log(html)
           var json=[];
           if(typeof res.data == "string")
           {           
           var json=this.fixhtmltoJSON(html)
           console.log(json.Nodeslist[0])
           return json.Nodeslist[0];
         //   console.log(ele)                       
           }
           else
           {                  
            console.log(html.Nodeslist[0])
          return html.Nodeslist[0];
             //  console.log(ele)
           } 
         }
         })
    },
 }