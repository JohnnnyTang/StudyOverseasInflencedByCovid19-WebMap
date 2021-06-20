export default class Utils { // 帮助类
    
    constructor(map) { // 传入map构建类，便于后续操作
        this.map = map;
    }

    // 可以用于计算转换时图层的透明度
    calculateOpacity(start, end, percent) {
        if (percent - start < 0 || percent - end > 0) return 0;
        
        return (percent - start) / (end - start);
    }
      

    GetLayerMaxOpacity(layerID) {
        let layertype = this.map.getLayer(layerID).type;
        let opacity = 0;
        opacity = this.map.getPaintProperty(layerID, layertype+"-opacity");
        return opacity;
    }

    // 用于调节图层透明度
    SetLayerOpacity(layerID, opacity) {
        let layerType = this.map.getLayer(layerID).type;
        this.map.setPaintProperty(layerID, layerType + '-opacity', opacity);
        if(layerType == 'circle') {
            this.map.setPaintProperty(layerID, 'circle-stroke-opacity', opacity);
        }
    }
    
    SetLabelOpacity(layerID, opacity) { // 文字图层
        this.map.setPaintProperty(layerID, 'text-opacity', opacity);
    }
    
    // 用于控制图层是否可见
    LayerInvisible(layerID) { // 使其不可见
        this.map.setLayoutProperty(layerID, 'visibility', 'none');
    }
    
    LayerVisible(layerID) {
        this.map.setLayoutProperty(layerID, 'visibility', 'visible');
    }

    LayersInvisible(layers) {
        for(let aLayer of layers) {
            this.LayerInvisible(aLayer);
        }
    }

    LabelInvisible(labelID) {
        this.map.setLayoutProperty(labelID, 'visibility', 'none');
    }

    // 初始化图层，设置为可见但透明度为0
    InitLayer(layerID) {
        this.LayerVisible(layerID);
        this.SetLayerOpacity(layerID, 0);
    }

    InitLayers(layers) {
        for(let aLayer of layers) {
            this.InitLayer(aLayer);
        }
    }

    InitLabel(labelID) {
        this.LayerVisible(labelID);
        this.SetLabelOpacity(labelID, 0);
    }

}