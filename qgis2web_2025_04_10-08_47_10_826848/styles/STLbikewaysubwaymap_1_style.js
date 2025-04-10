var size = 0;
var placement = 'point';

var style_STLbikewaysubwaymap_1 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("var value = '';");
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'line';
    if ("" !== null) {
        labelText = String("");
    }
    
        function rules_STLbikewaysubwaymap_1(feature, value) {
            var context = {
                feature: feature,
                variables: {}
            };
            // Start of if blocks and style check logic
            if (exp_STLbikewaysubwaymap_1rule0_eval_expression(context)) {
                      return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(36,93,162,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 6.308}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    }
                    else if (exp_STLbikewaysubwaymap_1rule1_eval_expression(context)) {
                      return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(251,154,153,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 6.308}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    }
                    else if (exp_STLbikewaysubwaymap_1rule2_eval_expression(context)) {
                      return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(77,204,239,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 6.308}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    }
                    else if (exp_STLbikewaysubwaymap_1rule3_eval_expression(context)) {
                      return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(28,129,21,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 6.308}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    }
                    else if (exp_STLbikewaysubwaymap_1rule4_eval_expression(context)) {
                      return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(232,222,18,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 6.308}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    }
                    else if (exp_STLbikewaysubwaymap_1rule5_eval_expression(context)) {
                      return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(126,230,56,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 6.308}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    }
                    else if (exp_STLbikewaysubwaymap_1rule6_eval_expression(context)) {
                      return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,127,0,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 6.308}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    }
                    else if (exp_STLbikewaysubwaymap_1rule7_eval_expression(context)) {
                      return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(106,61,154,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 6.308}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    }
                    else if (exp_STLbikewaysubwaymap_1rule8_eval_expression(context)) {
                      return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(174,19,22,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 6.308}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    }
                    else if (exp_STLbikewaysubwaymap_1rule9_eval_expression(context)) {
                      return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(227,28,194,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 6.308}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    }
                    else if (exp_STLbikewaysubwaymap_1rule10_eval_expression(context)) {
                      return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(253,191,111,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 6.308}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    }
                    else if (exp_STLbikewaysubwaymap_1rule11_eval_expression(context)) {
                      return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(170,109,76,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 6.308}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    }
                    else if (exp_STLbikewaysubwaymap_1rule12_eval_expression(context)) {
                      return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(131,127,80,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 6.308}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    }
                    else if (exp_STLbikewaysubwaymap_1rule13_eval_expression(context)) {
                      return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(64,64,64,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 5.548}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    }
            else {
                return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 5.548}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
            }
        }
        var style = rules_STLbikewaysubwaymap_1(feature, value);
        ;

    return style;
};
