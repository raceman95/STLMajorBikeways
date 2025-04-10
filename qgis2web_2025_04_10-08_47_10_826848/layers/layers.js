var wms_layers = [];


        var lyr_OSMGrayscale_0 = new ol.layer.Tile({
            'title': 'OSM Grayscale',
            'opacity': 0.900000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_STLbikewaysubwaymap_1 = new ol.format.GeoJSON();
var features_STLbikewaysubwaymap_1 = format_STLbikewaysubwaymap_1.readFeatures(json_STLbikewaysubwaymap_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_STLbikewaysubwaymap_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_STLbikewaysubwaymap_1.addFeatures(features_STLbikewaysubwaymap_1);
var lyr_STLbikewaysubwaymap_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_STLbikewaysubwaymap_1, 
                style: style_STLbikewaysubwaymap_1,
                popuplayertitle: 'STL bikeway subway map',
                interactive: true,
                title: 'STL bikeway subway map'
            });

lyr_OSMGrayscale_0.setVisible(true);lyr_STLbikewaysubwaymap_1.setVisible(true);
var layersList = [lyr_OSMGrayscale_0,lyr_STLbikewaysubwaymap_1];
lyr_STLbikewaysubwaymap_1.set('fieldAliases', {'id': 'id', 'LineNumber': 'LineNumber', 'Line Name': 'Line Name', 'Notes': 'Notes', 'Label': 'Label', 'Committed': 'Committed', 'Length_mi': 'Length_mi', 'Type': 'Type', 'Road Diet': 'Road Diet', 'Cost': 'Cost', 'Status': 'Status', 'Commit_mi': 'Commit_mi', 'Total_mi': 'Total_mi', });
lyr_STLbikewaysubwaymap_1.set('fieldImages', {'id': 'TextEdit', 'LineNumber': 'TextEdit', 'Line Name': 'TextEdit', 'Notes': 'TextEdit', 'Label': 'TextEdit', 'Committed': 'UniqueValues', 'Length_mi': 'TextEdit', 'Type': 'UniqueValues', 'Road Diet': 'TextEdit', 'Cost': 'UniqueValues', 'Status': 'UniqueValues', 'Commit_mi': 'TextEdit', 'Total_mi': 'TextEdit', });
lyr_STLbikewaysubwaymap_1.set('fieldLabels', {'id': 'hidden field', 'LineNumber': 'inline label - always visible', 'Line Name': 'inline label - always visible', 'Notes': 'inline label - always visible', 'Label': 'inline label - always visible', 'Committed': 'inline label - always visible', 'Length_mi': 'inline label - always visible', 'Type': 'inline label - always visible', 'Road Diet': 'inline label - always visible', 'Cost': 'inline label - always visible', 'Status': 'inline label - always visible', 'Commit_mi': 'inline label - always visible', 'Total_mi': 'inline label - always visible', });
lyr_STLbikewaysubwaymap_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});