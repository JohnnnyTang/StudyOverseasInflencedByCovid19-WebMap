import Utils from './utils.js';
import Legend from './legend.js';

mapboxgl.accessToken='pk.eyJ1IjoiYW5hdG9taWNhbCIsImEiOiJja2x0MjBjc3Ywam0zMm9sZGlyNnY2OHB1In0.H73LoepKneV7RXuE5j69LA';
var map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/anatomical/ckpnpei390krw17pexz56aip6', // style URL
    center: [151.942,19.639], 
    zoom: 1.48, 
    localIdeographFontFamily: "'YRDZST', sans-serif"//引用本地导入字体
});

// 全局定量
const mapSection = document.querySelector('.map-section');

const sectionHeight = mapSection.getBoundingClientRect().height;

const html = document.documentElement;

let aUtil = new Utils(map); // 构建帮助类
let aLegend = new Legend(map); // 图例类

const scrollRange = [
  0, 0.056, 0.1081, 
  0.149 , 0.2135, 0.2789, 
  0.32, 0.3843, 0.4491, 
  0.492, 0.5551, 0.6191, 
  0.66, 0.72435, 0.7896, 
  0.84, 0.8955, 0.96, 
  1.01
];

const layerControl = [
  // 全球
  {
    layers:['COVID-19-globle-line', 'COVID-19-globle-polygon'], 
    flySet: {
      zoom: 1.48, 
      center: [151.942,19.639], 
      speed: 0.3
    }
  }, 
  // 英美
  {
    layers:['COVID-19-UK-USA-admin1'], 
    flySet: {
      zoom:2.22,
      center: [-53.970708, 40.612189], 
      speed: 0.4
    }
  }, {
    layers:['UK-USA-totalStudent-point-19to20'],
    label:'UK-USA-totalStudent-label-19to20'
  }, 
  {
    layers:['UK-USA-totalStudent-point-ave'],
    label:'UK-USA-totalStudent-label-ave'
  }, 
  {
    layers:['UK-USA-totalStudent-point-19to20-ave'],
    label:'UK-USA-totalStudent-label-19to20-ave', 
    flySet: {
      zoom:2.22,
      center: [-53.970708, 40.612189], 
      speed: 0.4
    }
  }, 
  // 英国
  {
    layers:['UK-top20-university-point-19to20'],
    label:'UK-top20-university-label-19to20-or-ave', 
    flySet: {
      zoom: 4.91, 
      center: [-3.690025, 54.573658], 
      speed: 0.2
    }
  }, 
  {
    layers:['UK-top20-university-point-ave'],
    label:'UK-top20-university-label-19to20-or-ave'
  }, 
  {
    layers:['UK-top20-university-point-19to20-ave'],
    label:'UK-top20-university-label-19to20-ave', 
    flySet: {
      zoom: 4.91, 
      center: [-3.690025, 54.573658], 
      speed: 0.2
    }
  }, 
  // 全球-英国
  {
    layers:['UK-top30-originCountry-polygon-19to20'],
    label:'UK-top30-originCountry-label-19to20', 
    flySet: {
      zoom: 1.45, 
      center: [158.106237, 55.981167], 
      speed: 0.4
    }
  }, 
  {
    layers:['UK-top30-originCountry-polygon-ave'],
    label:'UK-top30-originCountry-label-ave'
  }, 
  {
    layers:['UK-top30-originCountry-polygon-19to20-ave'],
    label:'UK-top30-originCountry-label-19to20-ave', 
    flySet: {
      zoom: 1.45, 
      center: [158.106237, 55.981167], 
      speed: 0.4
    }
  }, 
  // 美国
  {
    layers:['USA-top20-university-point-19to20'],
    label:'USA-top20-university-label-19to20-or-ave', 
    flySet: {
      zoom: 3.76, 
      center: [-96.817282, 39.632594], 
      speed: 0.2
    }
  }, 
  {
    layers:['USA-top20-university-point-ave'],
    label:'USA-top20-university-label-19to20-or-ave'
  }, 
  {
    layers:['USA-top20-university-point-19to20-ave'],
    label:'USA-top20-university-label-19to20-ave', 
    flySet: {
      zoom: 3.76, 
      center: [-96.817282, 39.632594], 
      speed: 0.2
    }
  }, 
  // 全球-美国
  {
    layers:['USA-top30-originCountry-polygon-19to20'],
    label:'USA-top30-originCountry-label-19to20', 
    flySet: {
      zoom: 1.48, 
      center: [151.942,24.639], 
      speed: 0.3
    }
  }, 
  {
    layers:['USA-top30-originCountry-polygon-ave'],
    label:'USA-top30-originCountry-label-ave'
  }, 
  {
    layers:['USA-top30-originCountry-polygon-19to20-ave'],
    label:'USA-top30-originCountry-label-19to20-ave', 
    flySet: {
      zoom: 1.48, 
      center: [151.942,24.639], 
      speed: 0.3
    }
  }
];

map.on('load', function() {
  let activeLayerID = ['COVID-19-globle-line', 'COVID-19-globle-polygon']; // 存储当前可视的图层
  let activeLabelID = ''; // 当前可视label

  let scrollRegion = 1;

  aLegend.getLegend(['COVID-19-globle-polygon']);
  //console.log(aUtil.GetLayerMaxOpacity('COVID-19-globle-polygon'));

  document.addEventListener('scroll', (e) => {

    let scrolled = html.scrollTop / (sectionHeight - html.clientHeight);
    //console.log(`scrolled: ${scrolled}`);

    let curRegion = JudgeScrollRegion(scrolled, scrollRegion);
    if(curRegion != scrollRegion) {
      let activeLayers = ChapterChange(curRegion, activeLayerID, activeLabelID);
      activeLayerID = activeLayers[0];
      activeLabelID = activeLayers[1];
      scrollRegion = curRegion;
    }

    ChapterScroll(scrollRange[scrollRegion-1], scrollRange[scrollRegion], scrolled, activeLayerID, activeLabelID);

  });
});

// scroll事件判断章节是否变化
function JudgeScrollRegion(scrolled, scrollRegion) {
  if(scrolled < scrollRange[scrollRegion-1]) {
    for(let i = scrollRegion - 2; i >= 0 ; i++) {
      if(scrolled > scrollRange[i]){
        return i+1;
      }
    }
  }
  else if (scrolled > scrollRange[scrollRegion]) {
    for(let i = scrollRegion+1; i <scrollRange.length ; i++) {
      if(scrolled < scrollRange[i]) {
        return i;
      }
    }
  }
  else {
    return scrollRegion;
  }
}

function ChapterScroll(start, end, scrolled, layers, label) {
  let opacity = aUtil.calculateOpacity(start, end, scrolled);
  for(let aLayer of layers) {
    aUtil.SetLayerOpacity(aLayer, opacity);
  }
  if(label != '') {
    aUtil.SetLabelOpacity(label, opacity);
  }
}

function ChapterChange(chapterID, activeLayerID, activeLabelID) {
  aUtil.LayersInvisible(activeLayerID);
  if(activeLabelID != '') {
    aUtil.LabelInvisible(activeLabelID);
  }
  
  let rst = [layerControl[chapterID-1].layers, ''];

  if(layerControl[chapterID-1].hasOwnProperty("flySet")) {
    map.flyTo(layerControl[chapterID-1].flySet);
  }

  aUtil.InitLayers(layerControl[chapterID-1].layers);
  aLegend.getLegend(layerControl[chapterID-1].layers);

  if(layerControl[chapterID-1].hasOwnProperty("label")) {
    aUtil.InitLabel(layerControl[chapterID-1].label);
    rst[1] = layerControl[chapterID-1].label;
  }
  return rst;
}
