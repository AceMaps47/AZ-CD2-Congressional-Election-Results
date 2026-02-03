var size = 0;
var placement = 'point';

var style_AZCD2ElectionResults_2 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("cong_22_25");
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    if (value >= 0.000000 && value <= 0.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(255,255,255,0.7)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 0.000000 && value <= 0.050000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(171,204,255,0.7)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 0.050000 && value <= 0.100000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(127,179,255,0.7)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 0.100000 && value <= 0.150000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(88,151,255,0.7)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 0.150000 && value <= 0.200000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(50,133,255,0.7)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 0.200000 && value <= 0.250000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(15,112,255,0.7)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 0.250000 && value <= 0.300000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(8,96,229,0.7)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 0.300000 && value <= 0.350000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(0,82,202,0.7)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 0.350000 && value <= 0.400000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(2,73,191,0.7)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 0.400000 && value <= 0.450000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(0,68,169,0.7)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 0.450000 && value <= 0.500000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(0,52,128,0.7)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 0.500000 && value <= 1.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(1,34,85,0.7)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 1.000000 && value <= 1.050000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(254,204,203,0.7)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 1.050000 && value <= 1.100000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(254,170,170,0.7)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 1.100000 && value <= 1.150000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(254,129,133,0.7)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 1.150000 && value <= 1.200000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(253,95,92,0.7)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 1.200000 && value <= 1.250000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(254,64,64,0.7)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 1.250000 && value <= 1.300000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(234,32,32,0.7)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 1.300000 && value <= 1.350000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(212,0,0,0.7)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 1.350000 && value <= 1.400000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(190,0,0,0.7)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 1.400000 && value <= 1.450000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(170,0,0,0.7)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 1.450000 && value <= 1.500000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(128,0,0,0.7)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 1.500000 && value <= 2.500000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(84,0,0,0.7)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 2.500000 && value <= 3.500000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(255,49,255,0.7)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 3.500000 && value <= 4.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(204,204,204,0.7)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    };

    return style;
};
