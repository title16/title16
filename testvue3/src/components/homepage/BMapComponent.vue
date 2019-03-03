<template>
<div>
 
      <div id="XSDFXPage" class="XSDFXPage"></div>
    
</div>
</template>
<script>
  export default {
    name:'app',
    data() {
      return {
       
      };
    },
    components:{
    
    },
    methods: {
      
    },
    mounted() {
            var map = new BMap.Map("XSDFXPage",{enableMapClick:true});
            // 初始化地图,设置中心点坐标和地图级别
            map.centerAndZoom(new BMap.Point(120.368591,30.32697), 14);
            // 添加地图类型控件
            map.addControl(new BMap.MapTypeControl());  
            // 设置地图显示的城市 此项是必须设置的
            map.setCurrentCity("杭州");           
            // 开启鼠标滚轮缩放      
            map.enableScrollWheelZoom(true);

            var point = new BMap.Point(120.368591,30.32697); 
            var marker = new BMap.Marker(point);          
            map.addOverlay(marker);      
            marker.addEventListener("click", function(){    
                alert("杭州市江干区学源街258号中国计量大学");    
            });      
            var opts = {    
            width : 300,        
            height: 100,         
            title : "地址" 
            }    
        var infoWindow = new BMap.InfoWindow("杭州市江干区学源街258号中国计量大学", opts);  
        map.openInfoWindow(infoWindow, map.getCenter());          
          
        }
  }
   
</script>
<style>
  
.XSDFXPage{
          width: 100%;
          height: 500px;
          overflow: hidden;
          margin: 0;
          font-family: "微软雅黑";
      }
  @media (max-width: 960px) {
    .XSDFXPage{
          width: 100%;
          height: 300px;
          overflow: hidden;
          margin: 0;
          font-family: "微软雅黑";
      }
  }
  .anchorBL{
    display:none;
}
</style>
