var wms_layers = [];

var lyr_OrtofografiadeAndaluca2016ColorRGB050mPixel025mPixel_0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://www.ideandalucia.es/wms/ortofoto2016",
    attributions: ' ',
                              params: {
                                "LAYERS": "ortofotografia_2016_rgb",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Ortofografia de Andalucía 2016 Color RGB (0.50m Pixel / 0.25m Pixel)",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_OrtofografiadeAndaluca2016ColorRGB050mPixel025mPixel_0, 0]);
var format_ServidumbreAcueductoentities_1 = new ol.format.GeoJSON();
var features_ServidumbreAcueductoentities_1 = format_ServidumbreAcueductoentities_1.readFeatures(json_ServidumbreAcueductoentities_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ServidumbreAcueductoentities_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ServidumbreAcueductoentities_1.addFeatures(features_ServidumbreAcueductoentities_1);
var lyr_ServidumbreAcueductoentities_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ServidumbreAcueductoentities_1, 
                style: style_ServidumbreAcueductoentities_1,
                interactive: true,
                title: '<img src="styles/legend/ServidumbreAcueductoentities_1.png" /> Servidumbre Acueducto entities'
            });
var format_OcupacionTemporalentities_2 = new ol.format.GeoJSON();
var features_OcupacionTemporalentities_2 = format_OcupacionTemporalentities_2.readFeatures(json_OcupacionTemporalentities_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OcupacionTemporalentities_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OcupacionTemporalentities_2.addFeatures(features_OcupacionTemporalentities_2);
var lyr_OcupacionTemporalentities_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_OcupacionTemporalentities_2, 
                style: style_OcupacionTemporalentities_2,
                interactive: true,
                title: '<img src="styles/legend/OcupacionTemporalentities_2.png" /> Ocupacion Temporal entities'
            });
var format_EjeConduccionesexistentesentities_3 = new ol.format.GeoJSON();
var features_EjeConduccionesexistentesentities_3 = format_EjeConduccionesexistentesentities_3.readFeatures(json_EjeConduccionesexistentesentities_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EjeConduccionesexistentesentities_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EjeConduccionesexistentesentities_3.addFeatures(features_EjeConduccionesexistentesentities_3);
var lyr_EjeConduccionesexistentesentities_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EjeConduccionesexistentesentities_3, 
                style: style_EjeConduccionesexistentesentities_3,
                interactive: true,
                title: '<img src="styles/legend/EjeConduccionesexistentesentities_3.png" /> Eje Conducciones existentes entities'
            });
var format_EjeConduccionesproyectadasentities_4 = new ol.format.GeoJSON();
var features_EjeConduccionesproyectadasentities_4 = format_EjeConduccionesproyectadasentities_4.readFeatures(json_EjeConduccionesproyectadasentities_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EjeConduccionesproyectadasentities_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EjeConduccionesproyectadasentities_4.addFeatures(features_EjeConduccionesproyectadasentities_4);
var lyr_EjeConduccionesproyectadasentities_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EjeConduccionesproyectadasentities_4, 
                style: style_EjeConduccionesproyectadasentities_4,
                interactive: true,
                title: '<img src="styles/legend/EjeConduccionesproyectadasentities_4.png" /> Eje Conducciones proyectadas entities'
            });
var format_PekalizacionEjeConduccionesproyectadasentities_5 = new ol.format.GeoJSON();
var features_PekalizacionEjeConduccionesproyectadasentities_5 = format_PekalizacionEjeConduccionesproyectadasentities_5.readFeatures(json_PekalizacionEjeConduccionesproyectadasentities_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PekalizacionEjeConduccionesproyectadasentities_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PekalizacionEjeConduccionesproyectadasentities_5.addFeatures(features_PekalizacionEjeConduccionesproyectadasentities_5);
var lyr_PekalizacionEjeConduccionesproyectadasentities_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PekalizacionEjeConduccionesproyectadasentities_5, 
                style: style_PekalizacionEjeConduccionesproyectadasentities_5,
                interactive: true,
                title: '<img src="styles/legend/PekalizacionEjeConduccionesproyectadasentities_5.png" /> Pekalizacion Eje Conducciones proyectadas entities'
            });
var format_PekalizacionEjeConduccionesproyectadasentities_6 = new ol.format.GeoJSON();
var features_PekalizacionEjeConduccionesproyectadasentities_6 = format_PekalizacionEjeConduccionesproyectadasentities_6.readFeatures(json_PekalizacionEjeConduccionesproyectadasentities_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PekalizacionEjeConduccionesproyectadasentities_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PekalizacionEjeConduccionesproyectadasentities_6.addFeatures(features_PekalizacionEjeConduccionesproyectadasentities_6);
var lyr_PekalizacionEjeConduccionesproyectadasentities_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PekalizacionEjeConduccionesproyectadasentities_6, 
                style: style_PekalizacionEjeConduccionesproyectadasentities_6,
                interactive: true,
                title: '<img src="styles/legend/PekalizacionEjeConduccionesproyectadasentities_6.png" /> Pekalizacion Eje Conducciones proyectadas entities'
            });
var format_ArquetasExpropiacionenDominioentities_7 = new ol.format.GeoJSON();
var features_ArquetasExpropiacionenDominioentities_7 = format_ArquetasExpropiacionenDominioentities_7.readFeatures(json_ArquetasExpropiacionenDominioentities_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ArquetasExpropiacionenDominioentities_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ArquetasExpropiacionenDominioentities_7.addFeatures(features_ArquetasExpropiacionenDominioentities_7);
var lyr_ArquetasExpropiacionenDominioentities_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ArquetasExpropiacionenDominioentities_7, 
                style: style_ArquetasExpropiacionenDominioentities_7,
                interactive: true,
                title: '<img src="styles/legend/ArquetasExpropiacionenDominioentities_7.png" /> Arquetas Expropiacion en Dominio entities'
            });

lyr_OrtofografiadeAndaluca2016ColorRGB050mPixel025mPixel_0.setVisible(true);lyr_ServidumbreAcueductoentities_1.setVisible(true);lyr_OcupacionTemporalentities_2.setVisible(true);lyr_EjeConduccionesexistentesentities_3.setVisible(true);lyr_EjeConduccionesproyectadasentities_4.setVisible(true);lyr_PekalizacionEjeConduccionesproyectadasentities_5.setVisible(true);lyr_PekalizacionEjeConduccionesproyectadasentities_6.setVisible(true);lyr_ArquetasExpropiacionenDominioentities_7.setVisible(true);
var layersList = [lyr_OrtofografiadeAndaluca2016ColorRGB050mPixel025mPixel_0,lyr_ServidumbreAcueductoentities_1,lyr_OcupacionTemporalentities_2,lyr_EjeConduccionesexistentesentities_3,lyr_EjeConduccionesproyectadasentities_4,lyr_PekalizacionEjeConduccionesproyectadasentities_5,lyr_PekalizacionEjeConduccionesproyectadasentities_6,lyr_ArquetasExpropiacionenDominioentities_7];
lyr_ServidumbreAcueductoentities_1.set('fieldAliases', {'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_OcupacionTemporalentities_2.set('fieldAliases', {'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_EjeConduccionesexistentesentities_3.set('fieldAliases', {'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_EjeConduccionesproyectadasentities_4.set('fieldAliases', {'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_PekalizacionEjeConduccionesproyectadasentities_5.set('fieldAliases', {'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_PekalizacionEjeConduccionesproyectadasentities_6.set('fieldAliases', {'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_ArquetasExpropiacionenDominioentities_7.set('fieldAliases', {'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_ServidumbreAcueductoentities_1.set('fieldImages', {'Layer': 'TextEdit', 'PaperSpace': 'CheckBox', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_OcupacionTemporalentities_2.set('fieldImages', {'Layer': 'TextEdit', 'PaperSpace': 'CheckBox', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_EjeConduccionesexistentesentities_3.set('fieldImages', {'Layer': 'TextEdit', 'PaperSpace': 'CheckBox', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_EjeConduccionesproyectadasentities_4.set('fieldImages', {'Layer': 'TextEdit', 'PaperSpace': 'CheckBox', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_PekalizacionEjeConduccionesproyectadasentities_5.set('fieldImages', {'Layer': 'TextEdit', 'PaperSpace': 'CheckBox', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_PekalizacionEjeConduccionesproyectadasentities_6.set('fieldImages', {'Layer': 'TextEdit', 'PaperSpace': 'CheckBox', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_ArquetasExpropiacionenDominioentities_7.set('fieldImages', {'Layer': 'TextEdit', 'PaperSpace': 'CheckBox', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_ServidumbreAcueductoentities_1.set('fieldLabels', {'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHandle': 'no label', 'Text': 'no label', });
lyr_OcupacionTemporalentities_2.set('fieldLabels', {'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHandle': 'no label', 'Text': 'no label', });
lyr_EjeConduccionesexistentesentities_3.set('fieldLabels', {'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHandle': 'no label', 'Text': 'no label', });
lyr_EjeConduccionesproyectadasentities_4.set('fieldLabels', {'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHandle': 'no label', 'Text': 'no label', });
lyr_PekalizacionEjeConduccionesproyectadasentities_5.set('fieldLabels', {'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHandle': 'no label', 'Text': 'no label', });
lyr_PekalizacionEjeConduccionesproyectadasentities_6.set('fieldLabels', {'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHandle': 'no label', 'Text': 'no label', });
lyr_ArquetasExpropiacionenDominioentities_7.set('fieldLabels', {'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHandle': 'no label', 'Text': 'no label', });
lyr_ArquetasExpropiacionenDominioentities_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});