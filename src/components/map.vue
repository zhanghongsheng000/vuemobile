<template>
    <div class="map-box">
      <div class="map-search">
        <div class="map-top clearfix">
          <div class="map-back fl" @click="toBack">
            <i class="el-icon-arrow-left"></i>
          </div>
          <div class="map-sea fl">
            <el-input v-model="mapsea" placeholder="请输入楼盘、房源名称"></el-input>
          </div>
          <div class="tolist fl" @click="toList">
            <a href="javascript:;"></a>
          </div>
        </div>
        <option-bar></option-bar>
      </div>
      <div class="map-main" id="myMap">

      </div>
    </div>
</template>
<script>
  import option from '@/components/option'
  export default {
    data(){
      return {
        mapsea:"",
        //以下为接口参数部分
        //根据城市名称，获取县区列表，房源总数和特价房列表
        //当前城市名称。根据定位异步获取。默认为郑州
        // 接口(1)URL，获取房源总数， 'map/getRoomNewInfo'
        // 接口(2)URL，获取县区列表 'map/getRoomNewInfo'
        // 接口(3)URL，获取特价房列表 'map/getSpecialOfferRoomList'
        cityName:{"cityName":"郑州市"},
        //根据楼盘ID，查询房间列表。
        //接口URL，'/map/getRoomListByBuildingGroupId'
        buildingGroupsObj:{
          "buildingGroupId":{
            "canNull":false,
            "paramsName":"",
            "value":"",
            "text":""
          },//楼盘ID
          "indexId":{
            "canNull":false,
            "paramsName":"开始页码",
            "value":"0",
            "text":""
          },//开始页码
          "direction":{
            "canNull":false,
            "paramsName":"翻页方向",
            "value":"UP",
            "text":""
          },//翻页方向"
          "buildingGroupsObj":{
            "canNull":true,
            "paramsName":"装修",
            "value":"",
            "text":""
          },//装修
          "roomOrient":{
            "canNull":true,
            "paramsName":"朝向",
            "value":"",
            "text":""
          },//房间朝向
          "roomArea":{
            "canNull":true,
            "paramsName":"房间面积",
            "value":"",
            "text":""
          },//房间面积
          "rentRange":{
            "canNull":true,
            "paramsName":"租金范围",
            "value":"",
            "text":""
          }//租金范围
        },
        //根据条件查询房源列表 参数对象
        // 接口URL '/map/searchRoomListByPage'
        criteriaObj: {
          //城市名称
          "cityName": {
            "canNull": false,
            "paramsName": "",
            "value": "",
            "text": ""
          },
          //楼盘名称
          "buildingGroupName": {
            "canNull": true,
            "paramsName": "",
            "value": "",
            "text": ""
          },
          //县区编码
          "countryCode": {
            "canNull": true,
            "paramsName": "",
            "value": "",
            "text": ""
          },
          //租金范围
          "rentRange": {
            "canNull": true,
            "paramsName": "",
            "value": "",
            "text": ""
          },
          //房间面积
          "roomArea": {
            "canNull": true,
            "paramsName": "",
            "value": "",
            "text": ""
          },
          /*       //楼盘类型
           "buildingGroupType":{
           "canNull":true,
           "paramsName":"",
           "value":"",
           "text":""
           },*/
          //地图缩放等级
          "mapZoom": {
            "canNull": false,
            "paramsName": "缩放级别",
            "value": "12",
            "text": ""
          },
          //房间朝向
          "roomOrient": {
            "canNull": true,
            "paramsName": "",
            "value": "",
            "text": ""
          },
          //装修类型
          "roomFitment": {
            "canNull": true,
            "paramsName": "",
            "value": "",
            "text": ""
          },
          //第一条信息ID
          "indexId": {
            "canNull": false,
            "paramsName": "开始条数",
            "value": "0",
            "text": ""
          },
          //翻页方向
          "direction": {
            "canNull": false,
            "paramsName": "翻页方向",
            "value": "DOWN",
            "text": ""
          }
        },
        // 多条件搜索房源查询列表（比上一个多了一个边界值）
        // 接口URL '/map/getRoomListByConditon'
        criteriaObjWithBounds: {
          //城市名称
          "cityName":{
            "canNull":false,
            "paramsName":"",
            "value":"",
            "text":""
          },
          "buildingGroupName":{
            "canNull":true,
            "paramsName":"",
            "value":"",
            "text":""
          },//楼盘名称
          "countryCode":{
            "canNull":true,
            "paramsName":"",
            "value":"",
            "text":""
          },//县区编码
          "rentRange":{
            "canNull":true,
            "paramsName":"",
            "value":"",
            "text":""
          },//租金范围
          "roomArea":{
            "canNull":true,
            "paramsName":"",
            "value":"",
            "text":""
          },//房间面积
          /*        "buildingGroupType":{
           "canNull":true,
           "paramsName":"",
           "value":"",
           "text":""
           },//楼盘类型*/
          "mapZoom":{
            "canNull":false,
            "paramsName":"缩放级别",
            "value":"12",
            "text":""
          },//地图缩放等级
          "roomOrient":{
            "canNull":true,
            "paramsName":"",
            "value":"",
            "text":""
          },//房间朝向
          "roomFitment":{
            "canNull":true,
            "paramsName":"",
            "value":"",
            "text":""
          },//装修类型
          "indexId":{
            "canNull":false,
            "paramsName":"开始条数",
            "value":"0",
            "text":""
          },//第一条信息ID
          "direction":{
            "canNull":false,
            "paramsName":"翻页方向",
            "value":"down",
            "text":""
          },//翻页方向
          "minLatitude":{
            "canNull":false,
            "paramsName":"最小纬度",
            "value":"",
            "text":""
          },//最小纬度
          "maxLatitude":{
            "canNull":false,
            "paramsName":"最大纬度",
            "value":"",
            "text":""
          },//最小纬度
          "minLongitude":{
            "canNull":false,
            "paramsName":"最小经度",
            "value":"",
            "text":""
          },//最小纬度
          "maxLongitude":{
            "canNull":false,
            "paramsName":"最大经度",
            "value":"",
            "text":""
          }//最小纬度
        },
        //分类搜索具体静态的分类参数。
        staticCriteriaObj:"",
        //地图对象
        map:"",
        //县区Json
        currentCountryJson:{},
        //楼盘Json
        currentBuildingGroupsJson:{},//window.currentBuildingGroupsJson;
        //房间JSON，会根据地图缩放等级，边界值以及是否地图覆盖物（overlay）是否被点击而发生改变
        currentBuildingRoomInfoObj:{},//roomInfoJson.roomInfo_list;
        //特价房JSON，会渲染在页面的右侧
        currentSpecialRoomInfoObj:{},//roomInfoJson.roomInfo_list;
        //当前中心点 是一个Poniter对象
        //currentCenter:new BMap.Point(113.66695,34.806082),
        //当前地图级别 是一个整形数字
        //在地图级别决定了显示类型。<14  >=14为楼盘 初始为12
        currentZoom:12,
        //变化前的地图等级。是为了判定地图显示等级是否发生了改变
        originalZoom:12,
        //当前地图的中心
        currentCenter:{},
        //当前元素展示类型。元素展示类型有三种，分别为country(县区) buildingGroups(社区) 。会根据不同的类型给予不同的样式和数据展示。
        //默认设置为县区
        currentElementType:"country",
        //当前要设置为覆盖物的实体
        currentElementObj:{},
        //获取当前房间列表的接口。 每一次会会涉及到房间列表更新的方法被调用，都要修改这个URL
        currentFunForGetRoomList:function(){},
        //当前翻页方向
        currentDirection:"DOWN",
        //当前页码
        currentIndexId:0,
        //拖拽地图的一个参数。上一次查询完成之后再进行下一次，以免拖拽频繁导致卡顿
        dragFlag:true,
        //当前地图的行政区划覆盖物
        currentBoundaryObj:[],
        //当前信息窗口OBJ
        currentInfoWindowJson:{},
        //当前楼盘的房间列表JSON
        currentRoomListJson:{}
      }
    },
    methods:{
      toBack(){
        this.$router.back()
      },
      toList(){
        this.$router.push('/Building')
      },
      /*
      地图覆盖物部分的核心内容
      * */
      //初始化地图
      initMap(){
        this.map = new BMap.Map("myMap",{enableMapClick:false,minZoom:11,maxZoom:19});
        this.map.centerAndZoom("郑州市",12);
        this.map.enableScrollWheelZoom(true);
        let that = this;
        //添加地图标尺
/*        let bottom_left_control = new BMap.ScaleControl({anchor: BMAP_ANCHOR_BOTTOM_LEFT});
        let bottom_left_navigation = new BMap.NavigationControl({anchor: BMAP_ANCHOR_BOTTOM_LEFT});  //左上角，添加默认缩放平移控件
        let bottom_right_navigation = new BMap.NavigationControl({anchor: BMAP_ANCHOR_BOTTOM_LEFT, type: BMAP_NAVIGATION_CONTROL_SMALL});
        this.map.addControl(bottom_left_control);
        this.map.addControl(bottom_left_navigation);
        this.map.addControl(bottom_right_navigation);*/
       this.map.enableDragging();

        //添加拖拽事件监听
        this.map.addEventListener("dragend", function(evt){
          var cp = that.map.getCenter();
          //拖拽后更改全局变量：当前地图中心点
          that.currentCenter = cp;
          let currentBounds = that.map.getBounds();
          let centerText = "发生了拖拽事件，当前中心坐标是："+cp.lng + "," + cp.lat+"。";
          console.log(centerText)
          let boundsText = "西南角经度是："+currentBounds.getSouthWest().lng+",纬度是:"+currentBounds.getSouthWest().lat+";东北角经度是:"+currentBounds.getNorthEast().lng+",纬度是"+currentBounds.getNorthEast().lat;
          console.log(boundsText)
          if(that.dragFlag){
            //getCriteriaSearchByConditonWithBounds();
          }

        });

        //添加移动事件监听
        /*    map.addEventListener("moveend", function(evt){
         　　var cp = map.getCenter();
         //拖拽后更改全局变量：当前地图中心点
         currentCenter = cp;
         currentBounds = map.getBounds();
         centerText = "发生了移动事件，当前中心坐标是："+cp.lng + "," + cp.lat+"。";
         boundsText = "西南角经度是："+currentBounds.getSouthWest().lng+",纬度是:"+currentBounds.getSouthWest().lat+";东北角经度是:"+currentBounds.getNorthEast().lng+",纬度是"+currentBounds.getNorthEast().lat;
         //console.log(centerText+boundsText);
         remove_overlay();
         add_overlay();
         });
         */
        //监听缩放开始事件
        this.map.addEventListener("zoomstart",function(){
          that.originalZoom = that.map.getZoom();

        })
        //添加缩放事件
        this.map.addEventListener("zoomend", (evt)=>{
          var cz = that.map.getZoom();
          //缩放后更改全局变量：当前地图缩放等级
          that.currentZoom = cz;
          //如果非点击的情况下由楼盘界面回到了县区界面，则将原条件去掉县区重新请求。
          //此时的请求不包括边界值。
          if(that.originalZoom>14&&cz<=14){
            that.currentElementType = "country";
            that.currentElementObj = that.currentCountryJson;
            //缩放等级由楼盘界面回到县区界面时，要在搜索条件中去掉县区。
            that.criteriaObj.countryCode.value = "";
            that.criteriaObj.countryCode.text = "";
            //this.writeSelectedDiv();
            this.getCriteriaSearchByConditon();
          }
          //如果非点击的情况下由县区界面进入到楼盘界面，则进行不再次请求
          else if(that.originalZoom<=14&& cz>14){
            that.currentElementType = "buildingGroups";
            that.currentElementObj = this.currentBuildingGroupsJson;
            that.getCriteriaSearchByConditon();
          }
        });
      },
      createComaplexCustomOverlay(rootObj,dataObj,elementType){
        //因为这个方法调用的时候是被new成了对象。当被调用时，this的指向就会根据当时的上下文环境发生改变。安全起见，建议传一个this进来。
        // 复杂的自定义覆盖物（overlay）
        function ComaplexCustomOverlay(dataObj ,/*mouseoverText,*/elementType){
          this._dataObj = dataObj;
          //elementType有两种。分别为country(县区) buildingGroups(楼盘) 。会根据不同的类型给予不同的样式和数据展示。
          this._point = new BMap.Point(this._dataObj.longitude?this._dataObj.longitude:this._dataObj.longtitude,this._dataObj.latitude)
          this._elementType = elementType;
        }
        ComaplexCustomOverlay.prototype = new BMap.Overlay();
        ComaplexCustomOverlay.prototype.initialize = function(map){
          this._map = map;
          //设置显示名称
          var tempText = "";
          if(this._elementType=="country"){
            tempText = this._dataObj.countryName;
          }
          else if(this._elementType = "buildingGroups"){
            tempText = this._dataObj.buildingGroupName;
          }
          var text = this._text = tempText;
          //设置DIV原始的显示等级
          var originalZIndex = BMap.Overlay.getZIndex(this._dataObj.latitude);
          var div = this._div = document.createElement("div");
          var span = this._span = document.createElement("span");
          span.className = "show";
          div.className = "overlay "+this._elementType + "Style";
          //设置div的ID
          var divId = "";
          if(this._elementType=="country"){
            divId = this._dataObj.countryCode;
          }
          else if(this._elementType = "buildingGroups"){
            divId = this._dataObj.buildingGroupId;
          }
          div.id = divId;

          //设置DIV原始的显示等级
          div.style.zIndex = originalZIndex;
          for(let o in this._dataObj){
            div.setAttribute("data_"+o,this._dataObj[o])
            this._dataObj[o]
          }
          let elString = "<span class=\"fir\">"+text+"</span>"+"<span class=\"sec\">"+this._dataObj.emptyRentNumber+"套</span>"
          div.innerHTML = elString;

          div.onclick = function(){
            rootObj.elementClick(div)
          }
          this._map.getPanes().labelPane.appendChild(div);


          return div;
        }
        ComaplexCustomOverlay.prototype.draw = function(){
          var map = this._map;
          var pixel = map.pointToOverlayPixel(this._point);
          this._div.style.left = pixel.x -40 + "px";
          /*      if(currentElementType = "buildingGroups"){
           this._div.style.left = pixel.x - parseInt(this._arrow.style.left) + "px";
           }*/
          this._div.style.top  = pixel.y -40 + "px";
        }
        return new ComaplexCustomOverlay(dataObj,elementType);
      },
      //添加覆盖物（overlay）,会根据全局变量来设置。
      add_overlay(){
        //设置地图级别
        this.map.setZoom(this.currentZoom);
        this.changeDataByZoom()
        for(let o in this.currentElementObj){
          var dataObj = this.currentElementObj[o];
          var  myComapOverlay = new this.createComaplexCustomOverlay(this,dataObj,this.currentElementType);
          this.map.addOverlay(myComapOverlay);
          //this.map.setCenter(new BMap.Point(this.currentCenter.lng,this.currentCenter.lat))
        }

      },
      //清除覆盖物（overlay）
      remove_overlay(){
        this.map.clearOverlays();
      },
      //根据地图级别和可视边界，改变显示数据
      changeDataByZoom(){
        //临时obj，用于存储临时的数据
        var tempObj = {};
        //清空当前数据
        this.currentElementObj = [];
        //根据地图级别筛选JSON内容
        this.currentZoom = this.map.getZoom();
        if(this.currentZoom<=14){
          this.currentElementType = "country";
          tempObj = this.currentCountryJson;
        }
        else if(this.currentZoom>14){
          this.currentElementType = "buildingGroups";
          tempObj = this.currentBuildingGroupsJson;
        }
        /* //根据地图边界值筛选JSON内容
         currentBounds = map.getBounds();
         //西南角经纬度
         var WNlng = currentBounds.getSouthWest().lng;
         var WNlat = currentBounds.getSouthWest().lat;
         //东北角经纬度
         var NElng = currentBounds.getNorthEast().lng;
         var NElat = currentBounds.getNorthEast().lat;*/
        /*        for(o in tempObj){
         var lat = tempObj[o].latitude;
         var lng = tempObj[o].longitude?tempObj[o].longitude:tempObj[o].longtitude;
         if(WNlat<=lat&&NElat>=lat&&WNlng<=lng&&NElng>=lng){
         currentElementObj.push(tempObj[o])
         }
         }*/
        this.currentElementObj = tempObj;
        //直接修改的全局变量，不需要返回值了。
        return null;
      },
      //覆盖物元素点击事件。根据不同的当前状态显示不同的内容
      elementClick(element){
        console.log(this)
        this.currentCenter.lng = element.getAttribute("data_longitude")?element.getAttribute("data_longitude"):element.getAttribute("data_longtitude");
        this.currentCenter.lat = element.getAttribute("data_latitude");
        if(element.className.match("buildingGroupsStyle")){
          /*//window.open("building_details.html?buildingId="+element.getAttribute("data_buildinggroupid"),"_blank")
          //更换左侧房源列表
          buildingGroupsObj.buildingGroupId.value = element.getAttribute("data_buildinggroupid");
          //将当前覆盖物居中
          var latitude = $(element).attr("data_latitude");
          var longitude = $(element).attr("data_longtitude");
          map.panTo(new BMap.Point(longitude,latitude))
          $(element).css({
            "background-color":"#c3a612",
            "border-color":"#c3a612",
          });
          //element.style.zIndex = "9999"
          //$(element).siblings().removeClass("buildingGroupsHover");
          $(element).siblings().css({
            "background-color":"rgb(66, 130, 197)",
            "border-color":"rgb(66, 130, 197)",
            "z-index":""
          });

          //根据楼盘ID查询当前条件下的房源并写入左侧信息列表
          this.getCriteriaSearchByConditonByBuildingGroupId();*/
        }
        else{
          //如果点击的是县区的覆盖物，则地图降级显示
          this.currentElementType = "buildingGroups";
          this.currentZoom = 15;
          var countryCode = element.getAttribute("data_countrycode");
          var tempCountryName = element.getAttribute("data_countryName");
          this.criteriaObj.countryCode.value = countryCode;
          this.criteriaObj.countryCode.text = tempCountryName;
          this.currentCountryName = tempCountryName;
          //因为此处修改地图缩放等级后，会自动进行一次搜索。所以这里不再另外搜索.只是修改地图缩放等级，自动触发查询
          this.map.setZoom(this.currentZoom);
          //writeSelectedDiv()
          //getCriteriaSearchByConditon();
        }

      },
      /*工具方法*/
      //分类搜索
      getCriteriaSearchByConditon(isFirstFlag){
        this.remove_overlay();
        //如果没有传入是否第一次调用FLAG，则给其赋值为false
        if(isFirstFlag==null){
          isFirstFlag = false
        }
        //如果是第一次调用并且本地有数据，则不进行搜索，直接写入数据
        if(isFirstFlag){
          var re = this.readObjFromStorage("globalSearchResult");
          if(re.result.countryList){
            this.currentCountryJson = re.result.countryList;
            this.currentElementType = "country";
            this.map.setZoom(14);
            for(let o in this.currentCountryJson){
              if(this.currentCountryJson[o].longitude==null){
                this.currentCountryJson[o].longitude = "113.66695";
              }
              if(this.currentCountryJson[o].latitude==null){
                this.currentCountryJson[o].latitude = "34.806082";
              }
            }


          }

          if( re.result.buildingGroupList){
            this.currentBuildingGroupsJson = re.result.buildingGroupList;
            this.currentElementType = "buildingGroups";
            this.map.setZoom(15);
            for(let o in this.currentBuildingGroupsJson){
              if(this.currentBuildingGroupsJson[o].buildingGroupPicture==null || this.currentBuildingGroupsJson[o].buildingGroupPicture=="" || this.currentBuildingGroupsJson[o].buildingGroupPicture=="/img/builing"){
                this.currentBuildingGroupsJson[o].buildingGroupPicture = "images/map/favicon.gif";//+getRandomFromMToN(1,6)+".png"
              }
              else{
                this.currentBuildingGroupsJson[o].buildingGroupPicture = "http://116.255.247.182:8080"+this.currentBuildingGroupsJson[o].buildingGroupPicture
              }
              if(this.currentBuildingGroupsJson[o].longtitude==null){
                this.currentBuildingGroupsJson[o].longtitude = "113.66695";
              }
              if(this.currentBuildingGroupsJson[o].latitude==null){
                this.currentBuildingGroupsJson[o].latitude = "34.806082";
              }
              if(this.currentBuildingGroupsJson[o].completedTime==null||this.currentBuildingGroupsJson[o].completedTime==""){
                this.currentBuildingGroupsJson[o].completedTime = "20"+this.getRandomFromMToN(10,17)+"年"+this.getRandomFromMToN(1,12)+"月"+this.etRandomFromMToN(1,30)+"日";
              }
            }


          }
          if(re.result.buildingList){
            this.currentBuildingRoomInfoObj = re.result.buildingList;
            for(let o in this.currentBuildingRoomInfoObj){
              if(this.currentBuildingRoomInfoObj[o].buildingPicture==null || this.currentBuildingRoomInfoObj[o].buildingPicture=="picUrl"){
                this.currentBuildingRoomInfoObj[o].buildingPicture = "images/map/test.jpg";
              }
              else{
                this.currentBuildingRoomInfoObj[o].buildingPicture = "http://116.255.247.182:8080"+this.currentBuildingRoomInfoObj[o].buildingPicture;
              }
              if(this.currentBuildingRoomInfoObj[o].buildingAddress==null){
                this.currentBuildingRoomInfoObj[o].buildingAddress = "";
              }
            }
          }
          this.criteriaObj.direction.value = this.currentDirection;
          this.criteriaObj.indexId.value = this.currentIndexId = re.param.indexId;

          var buildingGroupTotalNum = re.result.buildingGroupTotalNum;
          var buildingTotalNum = re.result.buildingTotalNum;
          var buildingRoomNum = re.result.buildingRoomNum;
          //修改左侧房源列表
          //this.editCurrentRoomNum(buildingGroupTotalNum,buildingTotalNum,buildingRoomNum);

          //onOff=false;
          //$('.offfbuild').addClass('hide');
          //init()
          //changeDataByZoom();
          //渲染地图覆盖物
          this.add_overlay();
          //修改当前获取房间列表的方法，以便于获取更多页的信息
          /*           currentFunForGetRoomList = function(){
                         getCriteriaSearchByConditon();
                     }*/
        }
        else{
          //打开加载中效果
          //$(".loader_layer").css("display","block");
          this.searchRoomListByPage((response) => {
            var re = response;
            this.writeObjToStorage("globalSearchResult",response)
            this.writeObjToStorage("criteriaObj",this.criteriaObj)
           // $(".loader_layer").css("display","none");
            if(re.result.countryList){
              this.currentCountryJson = re.result.countryList;
              this.currentElementType = "country";
              for(let o in this.currentCountryJson){
                if(this.currentCountryJson[o].longitude==null){
                  this.currentCountryJson[o].longitude = "113.66695";
                }
                if(this.currentCountryJson[o].latitude==null){
                  this.currentCountryJson[o].latitude = "34.806082";
                }
              }
            }

            if( re.result.buildingGroupList){
              this.currentBuildingGroupsJson = re.result.buildingGroupList;
              this.currentElementType = "buildingGroups"
              for(let o in this.currentBuildingGroupsJson){
                if(this.currentBuildingGroupsJson[o].buildingGroupPicture==null || this.currentBuildingGroupsJson[o].buildingGroupPicture=="" || this.currentBuildingGroupsJson[o].buildingGroupPicture=="/img/builing"){
                  this.currentBuildingGroupsJson[o].buildingGroupPicture = "images/map/favicon.gif";//+getRandomFromMToN(1,6)+".png"
                }
                else{
                  this.currentBuildingGroupsJson[o].buildingGroupPicture = "http://116.255.247.182:8080"+this.currentBuildingGroupsJson[o].buildingGroupPicture
                }
                if(this.currentBuildingGroupsJson[o].longtitude==null){
                  this.currentBuildingGroupsJson[o].longtitude = "113.66695";
                }
                if(this.currentBuildingGroupsJson[o].latitude==null){
                  this.currentBuildingGroupsJson[o].latitude = "34.806082";
                }
                if(this.currentBuildingGroupsJson[o].completedTime==null||this.currentBuildingGroupsJson[o].completedTime==""){
                  this.currentBuildingGroupsJson[o].completedTime = "20"+this.getRandomFromMToN(10,17)+"年"+this.getRandomFromMToN(1,12)+"月"+this.getRandomFromMToN(1,30)+"日";
                }
              }


            }
            if(re.result.buildingList){
              this.currentBuildingRoomInfoObj = re.result.buildingList;
              for(let o in this.currentBuildingRoomInfoObj){
                if(this.currentBuildingRoomInfoObj[o].buildingPicture==null || this.currentBuildingRoomInfoObj[o].buildingPicture=="picUrl"){
                  this.currentBuildingRoomInfoObj[o].buildingPicture = "images/map/test.jpg";
                }
                else{
                  this.currentBuildingRoomInfoObj[o].buildingPicture = "http://116.255.247.182:8080"+this.currentBuildingRoomInfoObj[o].buildingPicture;
                }
                if(this.currentBuildingRoomInfoObj[o].buildingAddress==null){
                  this.currentBuildingRoomInfoObj[o].buildingAddress = "";
                }
              }
            }
            this.criteriaObj.direction.value = this.currentDirection;
            this.criteriaObj.indexId.value = this.currentIndexId = re.param.indexId;

            var buildingGroupTotalNum = re.result.buildingGroupTotalNum;
            var buildingTotalNum = re.result.buildingTotalNum;
            var buildingRoomNum = re.result.buildingRoomNum;
            //修改左侧房源列表
            //editCurrentRoomNum(buildingGroupTotalNum,buildingTotalNum,buildingRoomNum);


            //onOff=false;
           // $('.offfbuild').addClass('hide');
            //init()
            //changeDataByZoom();
            //渲染地图覆盖物
            this.add_overlay();
            //修改当前获取房间列表的方法，以便于获取更多页的信息
            /*                currentFunForGetRoomList = function(){
                                getCriteriaSearchByConditon();
                            }*/
          })
        }

      },
      //获取m到n之间的随机数
      getRandomFromMToN(m,n){
        var dv = n-m
        var num = Math.random()*dv + m
        num = parseInt(num,10)
        return num
      },
      //编辑参数列表
      editParamsFromJson(obj){
        var tempObj = {};
        //console.log(criteriaObj)
        if(obj.mapZoom){
          obj.mapZoom.value = this.currentZoom;
        }
        if(obj.maxLatitude){
          obj.minLatitude.value = this.currentBounds.getSouthWest().lat;
          obj.maxLatitude.value = this.currentBounds.getNorthEast().lat;
          obj.minLongitude.value = this.currentBounds.getSouthWest().lng;
          obj.maxLongitude.value = this.currentBounds.getNorthEast().lng;
        }
        if(obj.cityName){
          obj.cityName.value = this.cityName.cityName;
        }
        for(let o in obj){
          if(obj[o].value!==""){
            tempObj[o] = obj[o].value;
          }
        }

        //console.log(tempObj);
        return tempObj;
      },

      //向localStorage存入对象或者JSON
      //name为key。obj为内容
      writeObjToStorage(name,obj){
        if(typeof obj == "object"){
          obj = JSON.stringify(obj);
          localStorage.setItem(name,obj);
        }
      },
      //读取localStorage的对象或者JSON
      //name为key
      readObjFromStorage(name){
        var result = localStorage.getItem(name);
        if(typeof result == "string"){
          result = JSON.parse(result);
        }
        return result;
      },
      /*
     以下为请求部分。
     一共六个接口，
     设置6个请求。
     可以重复使用
     */
      //根据城市名称，获取最新房源信息。
      getRoomNewInfo(callBackFun){
        this.$http.get('/map/getRoomNewInfo',{params:this.cityName})
          .then(res=>{
            let data = res.data
            // console.log(data)
            if(data.resultCode==200){
              // console.log(data.result)
              callBackFun(data);
            }
          })
          .catch(err=>{
            console.log(err)
          })
      },
      //根据城市名称，获取县区列表。
      getCountryList(callBackFun){
        this.$http.get('/map/getCountryList',{params:this.cityName})
          .then(res=>{
            let data = res.data
            // console.log(data)
            if(data.resultCode==200){
              // console.log(data.result)
              callBackFun(data);
            }
          })
          .catch(err=>{
            console.log(err)
          })
      },
      //根据城市名称，获取特价房列表。
      getSpecialOfferRoomList(callBackFun){
        this.$http.get('/map/getSpecialOfferRoomList',{params:this.cityName})
          .then(res=>{
            let data = res.data
            // console.log(data)
            if(data.resultCode==200){
              // console.log(data.result)
              callBackFun(data);
            }
          })
          .catch(err=>{
            console.log(err)
          })
      },
      //根据楼盘ID，查询房间列表。
      getRoomListByBuildingGroupId(callBackFun){
        this.$http.get('/map/getRoomListByBuildingGroupId',{params:this.editParamsFromJson(this.criteriaObj)})
          .then(res=>{
            let data = res.data
            // console.log(data)
            if(data.resultCode==200){
              // console.log(data.result)
              callBackFun(data);
            }
          })
          .catch(err=>{
            console.log(err)
          })
      },
      //多条件搜索房源查询列表。
      searchRoomListByPage(callBackFun){
        this.$http.get('/map/searchRoomListByPage',{params:this.editParamsFromJson(this.criteriaObj)})
          .then(res=>{
            let data = res.data
            // console.log(data)
            if(data.resultCode==200){
              // console.log(data.result)
              callBackFun(data);
            }
          })
          .catch(err=>{
            console.log(err)
          })
      },
      //根据条件查询房源列表（有边界值）
      getRoomListByConditon(callBackFun){
        this.$http.get('/map/getRoomListByConditon',{params:this.editParamsFromJson(this.criteriaObj)})
          .then(res=>{
            let data = res.data
            // console.log(data)
            if(data.resultCode==200){
              // console.log(data.result)
              callBackFun(data);
            }
          })
          .catch(err=>{
            console.log(err)
          })
      }




    },
    mounted:function(){
      this.initMap();
      this.getCriteriaSearchByConditon()
      this.getRoomNewInfo(function(data){
        console.log(data)
      })
    },
    components: {
      optionBar:option
    },
  }
</script>
<style lang="less" scoped>
  .bm-view{
    width: 100%;
    height: 100%;
  }
  .map-box{
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    .map-search{
      position: fixed;
      width: 100%;
      left: 0;
      top: 0;
      z-index: 200;
      .map-top{
        height:.64rem;
        padding:.18rem 0 .18rem .3rem ;
        line-height:.64rem;
        background-color: #29a1f7;
        position: relative;
        z-index: 500;
      }
    }
    .map-back i{
      margin-right: .3rem;
      font-size: .4rem;
      color:#fff;
    }
    .map-sea{
      width: 5.4rem;
      height: .64rem;
      margin-right: .2rem;
    }
    .tolist{
      width: .6rem;
      height: .64rem;
      a{
        display: inline-block;
        width: 100%;
        height: 100%;
        background: url("../assets/img/tolist.png") center center no-repeat;
        -webkit-background-size: .33rem;
        background-size: .33rem;
      }
    }
    .map-main{
      /*background-color: rgba(0,0,0,.3);*/
      position: fixed;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      z-index: 100;
    }
  }

</style>
<style lang="less">
.map-box{
  .el-input__inner{
    height: .64rem;
    line-height: .64rem;
    border-color:#29a1f7;
  }
  .el-input__inner:hover{
    border-color:#29a1f7;
  }
}
/*地图覆盖物部分*/
.countryStyle{
  position: absolute;
  background-color: rgba(255, 102, 0, 0.8);
  border: 1px solid rgba(255, 102, 0, 0.8);
  color: white;
  height: 80px;
  width: 80px;
  border-radius: 50%;
  padding: 2px;
  line-height: 80px;
  text-align: center;
  white-space: nowrap;
  -moz-user-select: none;
  font-size: 16px;
  cursor:pointer;
  overflow: hidden;
  text-overflow: ellipsis;
}
.countryStyle:hover{
  background-color:rgb(66, 130, 197);
  border-color:rgb(66, 130, 197);
}
.countryStyle span.fir{
  display:block;
  height:40px;
  width:80px;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 65px;
  font-size:16px;
}
.countryStyle span.sec{
  display:block;
  height:25px;
  width:80px;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 25px;
  font-size:14px;
}
.blockStyle{
  position: absolute;
  background-color: rgba(66, 130, 197, 0.8);
  border: 1px solid rgba(66, 130, 197, 0.8);
  color: white;
  height: 70px;
  width: 70px;
  border-radius: 50%;
  padding: 2px;
  line-height: 70px;
  text-align: center;
  white-space: nowrap;
  -moz-user-select: none;
  font-size: 16px;
  cursor:pointer;
  overflow: hidden;
  text-overflow: ellipsis;
}
.buildingGroupsStyleText{
  height:150px;
  line-height: 30px;
  white-space: nowrap;
  box-shadow: 3px 3px 4px rgba(0,0,0,0.3);
  border-radius: 15px;
  background-color: rgba(98,171,0,0.8);
  cursor: pointer;
  position: absolute;
  z-index: 2;
  color: #fff;
  padding: 0 10px;
  font-size: 14px;
  overflow: hidden;
  text-overflow: ellipsis;
}
.buildingGroupsStyle{
  border-style:solid;
  border-width:1px;
  border-color:rgba(255, 102, 0, 0.8);
  height:30px;
  background-color: rgba(255, 102, 0, 0.8);
  line-height: 30px;
  white-space: nowrap;
  border-radius: 15px;
  cursor: pointer;
  position: absolute;
  z-index: 2;
  color: #fff;
  /* padding: 0 10px;*/
  font-size: 12px;
  overflow: hidden;
  text-overflow: ellipsis;
}
.buildingGroupsStyle:hover{
  border-color:rgb(66, 130, 197);
  background-color:rgb(66, 130, 197);
}
.buildingGroupsStyle .fir{
  display:inline-block;
  height:30px;
  line-height:30px;
  background-color:#ffffff;
  color:#000000;
  font-size:12px;
  padding-left:10px;
  padding-right:10px;
}
.buildingGroupsStyle .sec{
  display:inline-block;
  height:30px;
  line-height:30px;
  font-size:12px;
  padding-left:10px;
  padding-right:10px;
}

.spanText{
  width:90px;
  display:block;
  height: 60px;
  line-height: 30px;
  white-space: nowrap;
}
span.spanText:first-child{
  height:30px;
}
.anchorBL{
  /*visibility:hidden;*/
}
.show{
  display:block;
}
.hidden{
  display:none;
}
.left{
  text-align:left;
  height:30px;
  display:block;
}
.right{
  text-align:left;
  height:30px;
  display:block;
}
.buildingGroupsOver{
  background-color: #f8f8f8!important;
  -moz-box-shadow: 0px 0px 8px #888888;
  box-shadow: 0px 0px 8px #888888;
  border-color:#f8f8f8!important;
  z-index: 99999!important;
}
.buildingGroupsOverlay{
  background-color: #cbb38f!important;
  -moz-box-shadow: 0px 0px 8px #888888;
  box-shadow: 0px 0px 8px #888888;
  border-color:#cbb38f!important;
  z-index: 99999!important;
}


/*防止抖动，暂时只能如此*/
span.hidden {
  height: 110px;
}
span.show {
  height: 110px;
}

.flimg span{
  position: absolute;
  left: 0;
  top: 0;
  width: 78px;
  height: 20px;
  text-align: center;
  line-height: 20px;
  background-color: #ff6600;
  color: #fff;
}
.last_room{
  display:none;
}
.buildingGroupsStyle img{
  width:60px;
  height:60px;
}

.clear{
  both:clear;
  height:1px;
}
.infoDetail{
  width:110px;
  height:160px;
  position:absolute;
  top:25%;
  left:-180px;
  background-color: rgba(66, 130, 197, 0.9);
  border-radius:10px;
  display:none;
}
.infoDetail span.infoDetailText{
  display:block;
  height:40px;
  width:90px;
  line-height:40px;
  font-size:14px;
  color:white;
  padding-left:10px;
}
</style>
