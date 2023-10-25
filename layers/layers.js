var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_SolideoMadrid1_1 = new ol.format.GeoJSON();
var features_SolideoMadrid1_1 = format_SolideoMadrid1_1.readFeatures(json_SolideoMadrid1_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SolideoMadrid1_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SolideoMadrid1_1.addFeatures(features_SolideoMadrid1_1);
var lyr_SolideoMadrid1_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SolideoMadrid1_1, 
                style: style_SolideoMadrid1_1,
                interactive: true,
                title: '<img src="styles/legend/SolideoMadrid1_1.png" /> Solideo Madrid 1'
            });
var group_Mapasdefondo = new ol.layer.Group({
                                layers: [lyr_GoogleSatellite_0,],
                                title: "Mapas de fondo"});

lyr_GoogleSatellite_0.setVisible(true);lyr_SolideoMadrid1_1.setVisible(true);
var layersList = [group_Mapasdefondo,lyr_SolideoMadrid1_1];
lyr_SolideoMadrid1_1.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'area': 'area', 'gml_id': 'gml_id', 'lowerCorner': 'lowerCorner', 'upperCorner': 'upperCorner', 'beginLifespanVersion': 'beginLifespanVersion', 'conditionOfConstruction': 'conditionOfConstruction', 'beginning': 'beginning', 'end': 'end', 'endLifespanVersion': 'endLifespanVersion', 'informationSystem': 'informationSystem', 'reference': 'reference', 'localId': 'localId', 'namespace': 'namespace', 'horizontalGeometryEstimatedAccuracy': 'horizontalGeometryEstimatedAccuracy', 'horizontalGeometryEstimatedAccuracy_uom': 'horizontalGeometryEstimatedAccuracy_uom', 'horizontalGeometryReference': 'horizontalGeometryReference', 'referenceGeometry': 'referenceGeometry', 'currentUse': 'currentUse', 'numberOfBuildingUnits': 'numberOfBuildingUnits', 'numberOfDwellings': 'numberOfDwellings', 'numberOfFloorsAboveGround': 'numberOfFloorsAboveGround', 'documentLink': 'documentLink', 'format': 'format', 'sourceStatus': 'sourceStatus', 'officialAreaReference': 'officialAreaReference', 'value': 'value', 'value_uom': 'value_uom', 'layer': 'layer', 'path': 'path', });
lyr_SolideoMadrid1_1.set('fieldImages', {'fid': 'Range', 'id': 'TextEdit', 'area': 'Range', 'gml_id': 'TextEdit', 'lowerCorner': 'TextEdit', 'upperCorner': 'TextEdit', 'beginLifespanVersion': 'DateTime', 'conditionOfConstruction': 'TextEdit', 'beginning': 'DateTime', 'end': 'DateTime', 'endLifespanVersion': 'DateTime', 'informationSystem': 'TextEdit', 'reference': 'TextEdit', 'localId': 'TextEdit', 'namespace': 'TextEdit', 'horizontalGeometryEstimatedAccuracy': 'TextEdit', 'horizontalGeometryEstimatedAccuracy_uom': 'TextEdit', 'horizontalGeometryReference': 'TextEdit', 'referenceGeometry': 'CheckBox', 'currentUse': 'TextEdit', 'numberOfBuildingUnits': 'Range', 'numberOfDwellings': 'Range', 'numberOfFloorsAboveGround': 'TextEdit', 'documentLink': 'TextEdit', 'format': 'TextEdit', 'sourceStatus': 'TextEdit', 'officialAreaReference': 'TextEdit', 'value': 'Range', 'value_uom': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_SolideoMadrid1_1.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'area': 'no label', 'gml_id': 'no label', 'lowerCorner': 'no label', 'upperCorner': 'no label', 'beginLifespanVersion': 'no label', 'conditionOfConstruction': 'no label', 'beginning': 'no label', 'end': 'no label', 'endLifespanVersion': 'no label', 'informationSystem': 'no label', 'reference': 'no label', 'localId': 'no label', 'namespace': 'no label', 'horizontalGeometryEstimatedAccuracy': 'no label', 'horizontalGeometryEstimatedAccuracy_uom': 'no label', 'horizontalGeometryReference': 'no label', 'referenceGeometry': 'no label', 'currentUse': 'no label', 'numberOfBuildingUnits': 'no label', 'numberOfDwellings': 'no label', 'numberOfFloorsAboveGround': 'no label', 'documentLink': 'no label', 'format': 'no label', 'sourceStatus': 'no label', 'officialAreaReference': 'no label', 'value': 'no label', 'value_uom': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_SolideoMadrid1_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});