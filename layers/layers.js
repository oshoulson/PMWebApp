ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:3857").setExtent([-20037508.342789, -20037508.342789, 20037508.342789, 20037508.342789]);
var wms_layers = [];

var format_LowerMurray_0 = new ol.format.GeoJSON();
var features_LowerMurray_0 = format_LowerMurray_0.readFeatures(json_LowerMurray_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LowerMurray_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LowerMurray_0.addFeatures(features_LowerMurray_0);
var lyr_LowerMurray_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LowerMurray_0, 
                style: style_LowerMurray_0,
                interactive: true,
                title: '<img src="styles/legend/LowerMurray_0.png" /> Lower Murray'
            });
var format_VictorianProper_1 = new ol.format.GeoJSON();
var features_VictorianProper_1 = format_VictorianProper_1.readFeatures(json_VictorianProper_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VictorianProper_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VictorianProper_1.addFeatures(features_VictorianProper_1);
var lyr_VictorianProper_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VictorianProper_1, 
                style: style_VictorianProper_1,
                interactive: true,
                title: '<img src="styles/legend/VictorianProper_1.png" /> Victorian Proper'
            });
var format_Kulin_2 = new ol.format.GeoJSON();
var features_Kulin_2 = format_Kulin_2.readFeatures(json_Kulin_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kulin_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kulin_2.addFeatures(features_Kulin_2);
var lyr_Kulin_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Kulin_2, 
                style: style_Kulin_2,
                interactive: true,
                title: '<img src="styles/legend/Kulin_2.png" /> Kulin'
            });
var format_EastVictorian_3 = new ol.format.GeoJSON();
var features_EastVictorian_3 = format_EastVictorian_3.readFeatures(json_EastVictorian_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EastVictorian_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EastVictorian_3.addFeatures(features_EastVictorian_3);
var lyr_EastVictorian_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EastVictorian_3, 
                style: style_EastVictorian_3,
                interactive: true,
                title: '<img src="styles/legend/EastVictorian_3.png" /> East Victorian'
            });
var format_Kulin_4 = new ol.format.GeoJSON();
var features_Kulin_4 = format_Kulin_4.readFeatures(json_Kulin_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kulin_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kulin_4.addFeatures(features_Kulin_4);
var lyr_Kulin_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Kulin_4, 
                style: style_Kulin_4,
                interactive: true,
                title: '<img src="styles/legend/Kulin_4.png" /> Kulin'
            });
var format_EastVictorian_5 = new ol.format.GeoJSON();
var features_EastVictorian_5 = format_EastVictorian_5.readFeatures(json_EastVictorian_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EastVictorian_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EastVictorian_5.addFeatures(features_EastVictorian_5);
var lyr_EastVictorian_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EastVictorian_5, 
                style: style_EastVictorian_5,
                interactive: true,
                title: '<img src="styles/legend/EastVictorian_5.png" /> East Victorian'
            });
var format_YuinKuric_6 = new ol.format.GeoJSON();
var features_YuinKuric_6 = format_YuinKuric_6.readFeatures(json_YuinKuric_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_YuinKuric_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_YuinKuric_6.addFeatures(features_YuinKuric_6);
var lyr_YuinKuric_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_YuinKuric_6, 
                style: style_YuinKuric_6,
                interactive: true,
                title: '<img src="styles/legend/YuinKuric_6.png" /> Yuin-Kuric'
            });
var format_CentralNSW_7 = new ol.format.GeoJSON();
var features_CentralNSW_7 = format_CentralNSW_7.readFeatures(json_CentralNSW_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CentralNSW_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CentralNSW_7.addFeatures(features_CentralNSW_7);
var lyr_CentralNSW_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CentralNSW_7, 
                style: style_CentralNSW_7,
                interactive: true,
                title: '<img src="styles/legend/CentralNSW_7.png" /> Central NSW'
            });
var format_Muruwari_8 = new ol.format.GeoJSON();
var features_Muruwari_8 = format_Muruwari_8.readFeatures(json_Muruwari_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Muruwari_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Muruwari_8.addFeatures(features_Muruwari_8);
var lyr_Muruwari_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Muruwari_8, 
                style: style_Muruwari_8,
                interactive: true,
                title: '<img src="styles/legend/Muruwari_8.png" /> Muruwari'
            });
var format_Anaiwan_9 = new ol.format.GeoJSON();
var features_Anaiwan_9 = format_Anaiwan_9.readFeatures(json_Anaiwan_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Anaiwan_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Anaiwan_9.addFeatures(features_Anaiwan_9);
var lyr_Anaiwan_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Anaiwan_9, 
                style: style_Anaiwan_9,
                interactive: true,
                title: '<img src="styles/legend/Anaiwan_9.png" /> Anaiwan'
            });
var format_Victorian_10 = new ol.format.GeoJSON();
var features_Victorian_10 = format_Victorian_10.readFeatures(json_Victorian_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Victorian_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Victorian_10.addFeatures(features_Victorian_10);
var lyr_Victorian_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Victorian_10, 
                style: style_Victorian_10,
                interactive: true,
                title: '<img src="styles/legend/Victorian_10.png" /> Victorian'
            });
var format_LowerMurray_11 = new ol.format.GeoJSON();
var features_LowerMurray_11 = format_LowerMurray_11.readFeatures(json_LowerMurray_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LowerMurray_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LowerMurray_11.addFeatures(features_LowerMurray_11);
var lyr_LowerMurray_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LowerMurray_11, 
                style: style_LowerMurray_11,
                interactive: true,
                title: '<img src="styles/legend/LowerMurray_11.png" /> Lower Murray'
            });
var format_VictorianProper_12 = new ol.format.GeoJSON();
var features_VictorianProper_12 = format_VictorianProper_12.readFeatures(json_VictorianProper_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VictorianProper_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VictorianProper_12.addFeatures(features_VictorianProper_12);
var lyr_VictorianProper_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VictorianProper_12, 
                style: style_VictorianProper_12,
                interactive: true,
                title: '<img src="styles/legend/VictorianProper_12.png" /> Victorian Proper'
            });
var format_Kulin_13 = new ol.format.GeoJSON();
var features_Kulin_13 = format_Kulin_13.readFeatures(json_Kulin_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kulin_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kulin_13.addFeatures(features_Kulin_13);
var lyr_Kulin_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Kulin_13, 
                style: style_Kulin_13,
                interactive: true,
                title: '<img src="styles/legend/Kulin_13.png" /> Kulin'
            });
var format_EastVictorian_14 = new ol.format.GeoJSON();
var features_EastVictorian_14 = format_EastVictorian_14.readFeatures(json_EastVictorian_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EastVictorian_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EastVictorian_14.addFeatures(features_EastVictorian_14);
var lyr_EastVictorian_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EastVictorian_14, 
                style: style_EastVictorian_14,
                interactive: true,
                title: '<img src="styles/legend/EastVictorian_14.png" /> East Victorian'
            });
var format_NSW_15 = new ol.format.GeoJSON();
var features_NSW_15 = format_NSW_15.readFeatures(json_NSW_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NSW_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NSW_15.addFeatures(features_NSW_15);
var lyr_NSW_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NSW_15, 
                style: style_NSW_15,
                interactive: true,
                title: '<img src="styles/legend/NSW_15.png" /> NSW'
            });
var format_YuinKuric_16 = new ol.format.GeoJSON();
var features_YuinKuric_16 = format_YuinKuric_16.readFeatures(json_YuinKuric_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_YuinKuric_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_YuinKuric_16.addFeatures(features_YuinKuric_16);
var lyr_YuinKuric_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_YuinKuric_16, 
                style: style_YuinKuric_16,
                interactive: true,
                title: '<img src="styles/legend/YuinKuric_16.png" /> Yuin-Kuric'
            });
var format_CentralNSW_17 = new ol.format.GeoJSON();
var features_CentralNSW_17 = format_CentralNSW_17.readFeatures(json_CentralNSW_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CentralNSW_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CentralNSW_17.addFeatures(features_CentralNSW_17);
var lyr_CentralNSW_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CentralNSW_17, 
                style: style_CentralNSW_17,
                interactive: true,
                title: '<img src="styles/legend/CentralNSW_17.png" /> Central NSW'
            });
var format_Muruwari_18 = new ol.format.GeoJSON();
var features_Muruwari_18 = format_Muruwari_18.readFeatures(json_Muruwari_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Muruwari_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Muruwari_18.addFeatures(features_Muruwari_18);
var lyr_Muruwari_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Muruwari_18, 
                style: style_Muruwari_18,
                interactive: true,
                title: '<img src="styles/legend/Muruwari_18.png" /> Muruwari'
            });
var format_Anaiwan_19 = new ol.format.GeoJSON();
var features_Anaiwan_19 = format_Anaiwan_19.readFeatures(json_Anaiwan_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Anaiwan_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Anaiwan_19.addFeatures(features_Anaiwan_19);
var lyr_Anaiwan_19 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Anaiwan_19, 
                style: style_Anaiwan_19,
                interactive: true,
                title: '<img src="styles/legend/Anaiwan_19.png" /> Anaiwan'
            });
var format_NorthCoast_20 = new ol.format.GeoJSON();
var features_NorthCoast_20 = format_NorthCoast_20.readFeatures(json_NorthCoast_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NorthCoast_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NorthCoast_20.addFeatures(features_NorthCoast_20);
var lyr_NorthCoast_20 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NorthCoast_20, 
                style: style_NorthCoast_20,
                interactive: true,
                title: '<img src="styles/legend/NorthCoast_20.png" /> North Coast'
            });
var format_Durubalic_21 = new ol.format.GeoJSON();
var features_Durubalic_21 = format_Durubalic_21.readFeatures(json_Durubalic_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Durubalic_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Durubalic_21.addFeatures(features_Durubalic_21);
var lyr_Durubalic_21 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Durubalic_21, 
                style: style_Durubalic_21,
                interactive: true,
                title: '<img src="styles/legend/Durubalic_21.png" /> Durubalic'
            });
var format_Bandjalangic_22 = new ol.format.GeoJSON();
var features_Bandjalangic_22 = format_Bandjalangic_22.readFeatures(json_Bandjalangic_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bandjalangic_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bandjalangic_22.addFeatures(features_Bandjalangic_22);
var lyr_Bandjalangic_22 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Bandjalangic_22, 
                style: style_Bandjalangic_22,
                interactive: true,
                title: '<img src="styles/legend/Bandjalangic_22.png" /> Bandjalangic'
            });
var format_WakaKabic_23 = new ol.format.GeoJSON();
var features_WakaKabic_23 = format_WakaKabic_23.readFeatures(json_WakaKabic_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WakaKabic_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WakaKabic_23.addFeatures(features_WakaKabic_23);
var lyr_WakaKabic_23 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_WakaKabic_23, 
                style: style_WakaKabic_23,
                interactive: true,
                title: '<img src="styles/legend/WakaKabic_23.png" /> Waka-Kabic'
            });
var format_Bigambul_24 = new ol.format.GeoJSON();
var features_Bigambul_24 = format_Bigambul_24.readFeatures(json_Bigambul_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bigambul_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bigambul_24.addFeatures(features_Bigambul_24);
var lyr_Bigambul_24 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Bigambul_24, 
                style: style_Bigambul_24,
                interactive: true,
                title: '<img src="styles/legend/Bigambul_24.png" /> Bigambul'
            });
var format_Guyambal_25 = new ol.format.GeoJSON();
var features_Guyambal_25 = format_Guyambal_25.readFeatures(json_Guyambal_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Guyambal_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Guyambal_25.addFeatures(features_Guyambal_25);
var lyr_Guyambal_25 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Guyambal_25, 
                style: style_Guyambal_25,
                interactive: true,
                title: '<img src="styles/legend/Guyambal_25.png" /> Guyambal'
            });
var format_Gumbaynggirr_26 = new ol.format.GeoJSON();
var features_Gumbaynggirr_26 = format_Gumbaynggirr_26.readFeatures(json_Gumbaynggirr_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Gumbaynggirr_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Gumbaynggirr_26.addFeatures(features_Gumbaynggirr_26);
var lyr_Gumbaynggirr_26 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Gumbaynggirr_26, 
                style: style_Gumbaynggirr_26,
                interactive: true,
                title: '<img src="styles/legend/Gumbaynggirr_26.png" /> Gumbaynggirr'
            });
var format_Durubalic_27 = new ol.format.GeoJSON();
var features_Durubalic_27 = format_Durubalic_27.readFeatures(json_Durubalic_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Durubalic_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Durubalic_27.addFeatures(features_Durubalic_27);
var lyr_Durubalic_27 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Durubalic_27, 
                style: style_Durubalic_27,
                interactive: true,
                title: '<img src="styles/legend/Durubalic_27.png" /> Durubalic'
            });
var format_Bandjalangic_28 = new ol.format.GeoJSON();
var features_Bandjalangic_28 = format_Bandjalangic_28.readFeatures(json_Bandjalangic_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bandjalangic_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bandjalangic_28.addFeatures(features_Bandjalangic_28);
var lyr_Bandjalangic_28 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Bandjalangic_28, 
                style: style_Bandjalangic_28,
                interactive: true,
                title: '<img src="styles/legend/Bandjalangic_28.png" /> Bandjalangic'
            });
var format_WakaKabic_29 = new ol.format.GeoJSON();
var features_WakaKabic_29 = format_WakaKabic_29.readFeatures(json_WakaKabic_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WakaKabic_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WakaKabic_29.addFeatures(features_WakaKabic_29);
var lyr_WakaKabic_29 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_WakaKabic_29, 
                style: style_WakaKabic_29,
                interactive: true,
                title: '<img src="styles/legend/WakaKabic_29.png" /> Waka-Kabic'
            });
var format_Bigambul_30 = new ol.format.GeoJSON();
var features_Bigambul_30 = format_Bigambul_30.readFeatures(json_Bigambul_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bigambul_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bigambul_30.addFeatures(features_Bigambul_30);
var lyr_Bigambul_30 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Bigambul_30, 
                style: style_Bigambul_30,
                interactive: true,
                title: '<img src="styles/legend/Bigambul_30.png" /> Bigambul'
            });
var format_Guyambal_31 = new ol.format.GeoJSON();
var features_Guyambal_31 = format_Guyambal_31.readFeatures(json_Guyambal_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Guyambal_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Guyambal_31.addFeatures(features_Guyambal_31);
var lyr_Guyambal_31 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Guyambal_31, 
                style: style_Guyambal_31,
                interactive: true,
                title: '<img src="styles/legend/Guyambal_31.png" /> Guyambal'
            });
var format_Gumbaynggirr_32 = new ol.format.GeoJSON();
var features_Gumbaynggirr_32 = format_Gumbaynggirr_32.readFeatures(json_Gumbaynggirr_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Gumbaynggirr_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Gumbaynggirr_32.addFeatures(features_Gumbaynggirr_32);
var lyr_Gumbaynggirr_32 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Gumbaynggirr_32, 
                style: style_Gumbaynggirr_32,
                interactive: true,
                title: '<img src="styles/legend/Gumbaynggirr_32.png" /> Gumbaynggirr'
            });
var format_Paakintyi_33 = new ol.format.GeoJSON();
var features_Paakintyi_33 = format_Paakintyi_33.readFeatures(json_Paakintyi_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Paakintyi_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Paakintyi_33.addFeatures(features_Paakintyi_33);
var lyr_Paakintyi_33 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Paakintyi_33, 
                style: style_Paakintyi_33,
                interactive: true,
                title: '<img src="styles/legend/Paakintyi_33.png" /> Paakintyi'
            });
var format_Yarli_34 = new ol.format.GeoJSON();
var features_Yarli_34 = format_Yarli_34.readFeatures(json_Yarli_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Yarli_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Yarli_34.addFeatures(features_Yarli_34);
var lyr_Yarli_34 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Yarli_34, 
                style: style_Yarli_34,
                interactive: true,
                title: '<img src="styles/legend/Yarli_34.png" /> Yarli'
            });
var format_NorthwestNSW_35 = new ol.format.GeoJSON();
var features_NorthwestNSW_35 = format_NorthwestNSW_35.readFeatures(json_NorthwestNSW_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NorthwestNSW_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NorthwestNSW_35.addFeatures(features_NorthwestNSW_35);
var lyr_NorthwestNSW_35 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NorthwestNSW_35, 
                style: style_NorthwestNSW_35,
                interactive: true,
                title: '<img src="styles/legend/NorthwestNSW_35.png" /> Northwest NSW'
            });
var format_Paakintyi_36 = new ol.format.GeoJSON();
var features_Paakintyi_36 = format_Paakintyi_36.readFeatures(json_Paakintyi_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Paakintyi_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Paakintyi_36.addFeatures(features_Paakintyi_36);
var lyr_Paakintyi_36 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Paakintyi_36, 
                style: style_Paakintyi_36,
                interactive: true,
                title: '<img src="styles/legend/Paakintyi_36.png" /> Paakintyi'
            });
var format_Yarli_37 = new ol.format.GeoJSON();
var features_Yarli_37 = format_Yarli_37.readFeatures(json_Yarli_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Yarli_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Yarli_37.addFeatures(features_Yarli_37);
var lyr_Yarli_37 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Yarli_37, 
                style: style_Yarli_37,
                interactive: true,
                title: '<img src="styles/legend/Yarli_37.png" /> Yarli'
            });
var format_Karnic_38 = new ol.format.GeoJSON();
var features_Karnic_38 = format_Karnic_38.readFeatures(json_Karnic_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Karnic_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Karnic_38.addFeatures(features_Karnic_38);
var lyr_Karnic_38 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Karnic_38, 
                style: style_Karnic_38,
                interactive: true,
                title: '<img src="styles/legend/Karnic_38.png" /> Karnic'
            });
var format_SouthwestQueensland_39 = new ol.format.GeoJSON();
var features_SouthwestQueensland_39 = format_SouthwestQueensland_39.readFeatures(json_SouthwestQueensland_39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SouthwestQueensland_39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SouthwestQueensland_39.addFeatures(features_SouthwestQueensland_39);
var lyr_SouthwestQueensland_39 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SouthwestQueensland_39, 
                style: style_SouthwestQueensland_39,
                interactive: true,
                title: '<img src="styles/legend/SouthwestQueensland_39.png" /> Southwest Queensland'
            });
var format_NorthwestNSW_40 = new ol.format.GeoJSON();
var features_NorthwestNSW_40 = format_NorthwestNSW_40.readFeatures(json_NorthwestNSW_40, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NorthwestNSW_40 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NorthwestNSW_40.addFeatures(features_NorthwestNSW_40);
var lyr_NorthwestNSW_40 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NorthwestNSW_40, 
                style: style_NorthwestNSW_40,
                interactive: true,
                title: '<img src="styles/legend/NorthwestNSW_40.png" /> Northwest NSW'
            });
var format_Paakintyi_41 = new ol.format.GeoJSON();
var features_Paakintyi_41 = format_Paakintyi_41.readFeatures(json_Paakintyi_41, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Paakintyi_41 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Paakintyi_41.addFeatures(features_Paakintyi_41);
var lyr_Paakintyi_41 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Paakintyi_41, 
                style: style_Paakintyi_41,
                interactive: true,
                title: '<img src="styles/legend/Paakintyi_41.png" /> Paakintyi'
            });
var format_Yarli_42 = new ol.format.GeoJSON();
var features_Yarli_42 = format_Yarli_42.readFeatures(json_Yarli_42, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Yarli_42 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Yarli_42.addFeatures(features_Yarli_42);
var lyr_Yarli_42 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Yarli_42, 
                style: style_Yarli_42,
                interactive: true,
                title: '<img src="styles/legend/Yarli_42.png" /> Yarli'
            });
var format_Karnic_43 = new ol.format.GeoJSON();
var features_Karnic_43 = format_Karnic_43.readFeatures(json_Karnic_43, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Karnic_43 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Karnic_43.addFeatures(features_Karnic_43);
var lyr_Karnic_43 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Karnic_43, 
                style: style_Karnic_43,
                interactive: true,
                title: '<img src="styles/legend/Karnic_43.png" /> Karnic'
            });
var format_Ngura_44 = new ol.format.GeoJSON();
var features_Ngura_44 = format_Ngura_44.readFeatures(json_Ngura_44, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ngura_44 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ngura_44.addFeatures(features_Ngura_44);
var lyr_Ngura_44 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Ngura_44, 
                style: style_Ngura_44,
                interactive: true,
                title: '<img src="styles/legend/Ngura_44.png" /> Ngura'
            });
var format_ThuraYuraArandic_45 = new ol.format.GeoJSON();
var features_ThuraYuraArandic_45 = format_ThuraYuraArandic_45.readFeatures(json_ThuraYuraArandic_45, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ThuraYuraArandic_45 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ThuraYuraArandic_45.addFeatures(features_ThuraYuraArandic_45);
var lyr_ThuraYuraArandic_45 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ThuraYuraArandic_45, 
                style: style_ThuraYuraArandic_45,
                interactive: true,
                title: '<img src="styles/legend/ThuraYuraArandic_45.png" /> Thura-Yura-Arandic'
            });
var format_ThuraYura_46 = new ol.format.GeoJSON();
var features_ThuraYura_46 = format_ThuraYura_46.readFeatures(json_ThuraYura_46, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ThuraYura_46 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ThuraYura_46.addFeatures(features_ThuraYura_46);
var lyr_ThuraYura_46 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ThuraYura_46, 
                style: style_ThuraYura_46,
                interactive: true,
                title: '<img src="styles/legend/ThuraYura_46.png" /> Thura-Yura'
            });
var format_Arandic_47 = new ol.format.GeoJSON();
var features_Arandic_47 = format_Arandic_47.readFeatures(json_Arandic_47, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Arandic_47 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Arandic_47.addFeatures(features_Arandic_47);
var lyr_Arandic_47 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Arandic_47, 
                style: style_Arandic_47,
                interactive: true,
                title: '<img src="styles/legend/Arandic_47.png" /> Arandic'
            });
var format_ThuraYura_48 = new ol.format.GeoJSON();
var features_ThuraYura_48 = format_ThuraYura_48.readFeatures(json_ThuraYura_48, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ThuraYura_48 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ThuraYura_48.addFeatures(features_ThuraYura_48);
var lyr_ThuraYura_48 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ThuraYura_48, 
                style: style_ThuraYura_48,
                interactive: true,
                title: '<img src="styles/legend/ThuraYura_48.png" /> Thura-Yura'
            });
var format_Arandic_49 = new ol.format.GeoJSON();
var features_Arandic_49 = format_Arandic_49.readFeatures(json_Arandic_49, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Arandic_49 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Arandic_49.addFeatures(features_Arandic_49);
var lyr_Arandic_49 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Arandic_49, 
                style: style_Arandic_49,
                interactive: true,
                title: '<img src="styles/legend/Arandic_49.png" /> Arandic'
            });
var format_Kalkatungic_50 = new ol.format.GeoJSON();
var features_Kalkatungic_50 = format_Kalkatungic_50.readFeatures(json_Kalkatungic_50, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kalkatungic_50 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kalkatungic_50.addFeatures(features_Kalkatungic_50);
var lyr_Kalkatungic_50 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Kalkatungic_50, 
                style: style_Kalkatungic_50,
                interactive: true,
                title: '<img src="styles/legend/Kalkatungic_50.png" /> Kalkatungic'
            });
var format_Mayabic_51 = new ol.format.GeoJSON();
var features_Mayabic_51 = format_Mayabic_51.readFeatures(json_Mayabic_51, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mayabic_51 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mayabic_51.addFeatures(features_Mayabic_51);
var lyr_Mayabic_51 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Mayabic_51, 
                style: style_Mayabic_51,
                interactive: true,
                title: '<img src="styles/legend/Mayabic_51.png" /> Mayabic'
            });
var format_Gulf_52 = new ol.format.GeoJSON();
var features_Gulf_52 = format_Gulf_52.readFeatures(json_Gulf_52, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Gulf_52 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Gulf_52.addFeatures(features_Gulf_52);
var lyr_Gulf_52 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Gulf_52, 
                style: style_Gulf_52,
                interactive: true,
                title: '<img src="styles/legend/Gulf_52.png" /> Gulf'
            });
var format_Kalkatungic_53 = new ol.format.GeoJSON();
var features_Kalkatungic_53 = format_Kalkatungic_53.readFeatures(json_Kalkatungic_53, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kalkatungic_53 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kalkatungic_53.addFeatures(features_Kalkatungic_53);
var lyr_Kalkatungic_53 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Kalkatungic_53, 
                style: style_Kalkatungic_53,
                interactive: true,
                title: '<img src="styles/legend/Kalkatungic_53.png" /> Kalkatungic'
            });
var format_Mayabic_54 = new ol.format.GeoJSON();
var features_Mayabic_54 = format_Mayabic_54.readFeatures(json_Mayabic_54, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mayabic_54 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mayabic_54.addFeatures(features_Mayabic_54);
var lyr_Mayabic_54 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Mayabic_54, 
                style: style_Mayabic_54,
                interactive: true,
                title: '<img src="styles/legend/Mayabic_54.png" /> Mayabic'
            });
var format_PamaMaric_55 = new ol.format.GeoJSON();
var features_PamaMaric_55 = format_PamaMaric_55.readFeatures(json_PamaMaric_55, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PamaMaric_55 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PamaMaric_55.addFeatures(features_PamaMaric_55);
var lyr_PamaMaric_55 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PamaMaric_55, 
                style: style_PamaMaric_55,
                interactive: true,
                title: '<img src="styles/legend/PamaMaric_55.png" /> Pama Maric'
            });
var format_Paman_56 = new ol.format.GeoJSON();
var features_Paman_56 = format_Paman_56.readFeatures(json_Paman_56, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Paman_56 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Paman_56.addFeatures(features_Paman_56);
var lyr_Paman_56 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Paman_56, 
                style: style_Paman_56,
                interactive: true,
                title: '<img src="styles/legend/Paman_56.png" /> Paman'
            });
var format_MaricLaguages_57 = new ol.format.GeoJSON();
var features_MaricLaguages_57 = format_MaricLaguages_57.readFeatures(json_MaricLaguages_57, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MaricLaguages_57 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MaricLaguages_57.addFeatures(features_MaricLaguages_57);
var lyr_MaricLaguages_57 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MaricLaguages_57, 
                style: style_MaricLaguages_57,
                interactive: true,
                title: '<img src="styles/legend/MaricLaguages_57.png" /> Maric Laguages'
            });
var format_Dyirbalic_58 = new ol.format.GeoJSON();
var features_Dyirbalic_58 = format_Dyirbalic_58.readFeatures(json_Dyirbalic_58, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Dyirbalic_58 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Dyirbalic_58.addFeatures(features_Dyirbalic_58);
var lyr_Dyirbalic_58 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Dyirbalic_58, 
                style: style_Dyirbalic_58,
                interactive: true,
                title: '<img src="styles/legend/Dyirbalic_58.png" /> Dyirbalic'
            });
var format_Paman_59 = new ol.format.GeoJSON();
var features_Paman_59 = format_Paman_59.readFeatures(json_Paman_59, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Paman_59 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Paman_59.addFeatures(features_Paman_59);
var lyr_Paman_59 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Paman_59, 
                style: style_Paman_59,
                interactive: true,
                title: '<img src="styles/legend/Paman_59.png" /> Paman'
            });
var format_MaricLaguages_60 = new ol.format.GeoJSON();
var features_MaricLaguages_60 = format_MaricLaguages_60.readFeatures(json_MaricLaguages_60, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MaricLaguages_60 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MaricLaguages_60.addFeatures(features_MaricLaguages_60);
var lyr_MaricLaguages_60 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MaricLaguages_60, 
                style: style_MaricLaguages_60,
                interactive: true,
                title: '<img src="styles/legend/MaricLaguages_60.png" /> Maric Laguages'
            });
var format_Dyirbalic_61 = new ol.format.GeoJSON();
var features_Dyirbalic_61 = format_Dyirbalic_61.readFeatures(json_Dyirbalic_61, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Dyirbalic_61 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Dyirbalic_61.addFeatures(features_Dyirbalic_61);
var lyr_Dyirbalic_61 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Dyirbalic_61, 
                style: style_Dyirbalic_61,
                interactive: true,
                title: '<img src="styles/legend/Dyirbalic_61.png" /> Dyirbalic'
            });
var format_Southeastern_62 = new ol.format.GeoJSON();
var features_Southeastern_62 = format_Southeastern_62.readFeatures(json_Southeastern_62, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Southeastern_62 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Southeastern_62.addFeatures(features_Southeastern_62);
var lyr_Southeastern_62 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Southeastern_62, 
                style: style_Southeastern_62,
                interactive: true,
                title: '<img src="styles/legend/Southeastern_62.png" /> Southeastern'
            });
var format_Victorian_63 = new ol.format.GeoJSON();
var features_Victorian_63 = format_Victorian_63.readFeatures(json_Victorian_63, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Victorian_63 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Victorian_63.addFeatures(features_Victorian_63);
var lyr_Victorian_63 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Victorian_63, 
                style: style_Victorian_63,
                interactive: true,
                title: '<img src="styles/legend/Victorian_63.png" /> Victorian'
            });
var format_LowerMurray_64 = new ol.format.GeoJSON();
var features_LowerMurray_64 = format_LowerMurray_64.readFeatures(json_LowerMurray_64, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LowerMurray_64 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LowerMurray_64.addFeatures(features_LowerMurray_64);
var lyr_LowerMurray_64 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LowerMurray_64, 
                style: style_LowerMurray_64,
                interactive: true,
                title: '<img src="styles/legend/LowerMurray_64.png" /> Lower Murray'
            });
var format_VictorianProper_65 = new ol.format.GeoJSON();
var features_VictorianProper_65 = format_VictorianProper_65.readFeatures(json_VictorianProper_65, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VictorianProper_65 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VictorianProper_65.addFeatures(features_VictorianProper_65);
var lyr_VictorianProper_65 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VictorianProper_65, 
                style: style_VictorianProper_65,
                interactive: true,
                title: '<img src="styles/legend/VictorianProper_65.png" /> Victorian Proper'
            });
var format_Kulin_66 = new ol.format.GeoJSON();
var features_Kulin_66 = format_Kulin_66.readFeatures(json_Kulin_66, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kulin_66 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kulin_66.addFeatures(features_Kulin_66);
var lyr_Kulin_66 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Kulin_66, 
                style: style_Kulin_66,
                interactive: true,
                title: '<img src="styles/legend/Kulin_66.png" /> Kulin'
            });
var format_EastVictorian_67 = new ol.format.GeoJSON();
var features_EastVictorian_67 = format_EastVictorian_67.readFeatures(json_EastVictorian_67, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EastVictorian_67 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EastVictorian_67.addFeatures(features_EastVictorian_67);
var lyr_EastVictorian_67 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EastVictorian_67, 
                style: style_EastVictorian_67,
                interactive: true,
                title: '<img src="styles/legend/EastVictorian_67.png" /> East Victorian'
            });
var format_NSW_68 = new ol.format.GeoJSON();
var features_NSW_68 = format_NSW_68.readFeatures(json_NSW_68, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NSW_68 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NSW_68.addFeatures(features_NSW_68);
var lyr_NSW_68 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NSW_68, 
                style: style_NSW_68,
                interactive: true,
                title: '<img src="styles/legend/NSW_68.png" /> NSW'
            });
var format_YuinKuric_69 = new ol.format.GeoJSON();
var features_YuinKuric_69 = format_YuinKuric_69.readFeatures(json_YuinKuric_69, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_YuinKuric_69 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_YuinKuric_69.addFeatures(features_YuinKuric_69);
var lyr_YuinKuric_69 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_YuinKuric_69, 
                style: style_YuinKuric_69,
                interactive: true,
                title: '<img src="styles/legend/YuinKuric_69.png" /> Yuin-Kuric'
            });
var format_CentralNSW_70 = new ol.format.GeoJSON();
var features_CentralNSW_70 = format_CentralNSW_70.readFeatures(json_CentralNSW_70, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CentralNSW_70 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CentralNSW_70.addFeatures(features_CentralNSW_70);
var lyr_CentralNSW_70 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CentralNSW_70, 
                style: style_CentralNSW_70,
                interactive: true,
                title: '<img src="styles/legend/CentralNSW_70.png" /> Central NSW'
            });
var format_Muruwari_71 = new ol.format.GeoJSON();
var features_Muruwari_71 = format_Muruwari_71.readFeatures(json_Muruwari_71, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Muruwari_71 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Muruwari_71.addFeatures(features_Muruwari_71);
var lyr_Muruwari_71 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Muruwari_71, 
                style: style_Muruwari_71,
                interactive: true,
                title: '<img src="styles/legend/Muruwari_71.png" /> Muruwari'
            });
var format_Anaiwan_72 = new ol.format.GeoJSON();
var features_Anaiwan_72 = format_Anaiwan_72.readFeatures(json_Anaiwan_72, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Anaiwan_72 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Anaiwan_72.addFeatures(features_Anaiwan_72);
var lyr_Anaiwan_72 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Anaiwan_72, 
                style: style_Anaiwan_72,
                interactive: true,
                title: '<img src="styles/legend/Anaiwan_72.png" /> Anaiwan'
            });
var format_NorthCoast_73 = new ol.format.GeoJSON();
var features_NorthCoast_73 = format_NorthCoast_73.readFeatures(json_NorthCoast_73, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NorthCoast_73 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NorthCoast_73.addFeatures(features_NorthCoast_73);
var lyr_NorthCoast_73 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NorthCoast_73, 
                style: style_NorthCoast_73,
                interactive: true,
                title: '<img src="styles/legend/NorthCoast_73.png" /> North Coast'
            });
var format_Durubalic_74 = new ol.format.GeoJSON();
var features_Durubalic_74 = format_Durubalic_74.readFeatures(json_Durubalic_74, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Durubalic_74 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Durubalic_74.addFeatures(features_Durubalic_74);
var lyr_Durubalic_74 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Durubalic_74, 
                style: style_Durubalic_74,
                interactive: true,
                title: '<img src="styles/legend/Durubalic_74.png" /> Durubalic'
            });
var format_Bandjalangic_75 = new ol.format.GeoJSON();
var features_Bandjalangic_75 = format_Bandjalangic_75.readFeatures(json_Bandjalangic_75, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bandjalangic_75 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bandjalangic_75.addFeatures(features_Bandjalangic_75);
var lyr_Bandjalangic_75 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Bandjalangic_75, 
                style: style_Bandjalangic_75,
                interactive: true,
                title: '<img src="styles/legend/Bandjalangic_75.png" /> Bandjalangic'
            });
var format_WakaKabic_76 = new ol.format.GeoJSON();
var features_WakaKabic_76 = format_WakaKabic_76.readFeatures(json_WakaKabic_76, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WakaKabic_76 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WakaKabic_76.addFeatures(features_WakaKabic_76);
var lyr_WakaKabic_76 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_WakaKabic_76, 
                style: style_WakaKabic_76,
                interactive: true,
                title: '<img src="styles/legend/WakaKabic_76.png" /> Waka-Kabic'
            });
var format_Bigambul_77 = new ol.format.GeoJSON();
var features_Bigambul_77 = format_Bigambul_77.readFeatures(json_Bigambul_77, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bigambul_77 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bigambul_77.addFeatures(features_Bigambul_77);
var lyr_Bigambul_77 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Bigambul_77, 
                style: style_Bigambul_77,
                interactive: true,
                title: '<img src="styles/legend/Bigambul_77.png" /> Bigambul'
            });
var format_Guyambal_78 = new ol.format.GeoJSON();
var features_Guyambal_78 = format_Guyambal_78.readFeatures(json_Guyambal_78, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Guyambal_78 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Guyambal_78.addFeatures(features_Guyambal_78);
var lyr_Guyambal_78 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Guyambal_78, 
                style: style_Guyambal_78,
                interactive: true,
                title: '<img src="styles/legend/Guyambal_78.png" /> Guyambal'
            });
var format_Gumbaynggirr_79 = new ol.format.GeoJSON();
var features_Gumbaynggirr_79 = format_Gumbaynggirr_79.readFeatures(json_Gumbaynggirr_79, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Gumbaynggirr_79 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Gumbaynggirr_79.addFeatures(features_Gumbaynggirr_79);
var lyr_Gumbaynggirr_79 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Gumbaynggirr_79, 
                style: style_Gumbaynggirr_79,
                interactive: true,
                title: '<img src="styles/legend/Gumbaynggirr_79.png" /> Gumbaynggirr'
            });
var format_Central_80 = new ol.format.GeoJSON();
var features_Central_80 = format_Central_80.readFeatures(json_Central_80, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Central_80 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Central_80.addFeatures(features_Central_80);
var lyr_Central_80 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Central_80, 
                style: style_Central_80,
                interactive: true,
                title: '<img src="styles/legend/Central_80.png" /> Central'
            });
var format_SouthwestQueensland_81 = new ol.format.GeoJSON();
var features_SouthwestQueensland_81 = format_SouthwestQueensland_81.readFeatures(json_SouthwestQueensland_81, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SouthwestQueensland_81 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SouthwestQueensland_81.addFeatures(features_SouthwestQueensland_81);
var lyr_SouthwestQueensland_81 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SouthwestQueensland_81, 
                style: style_SouthwestQueensland_81,
                interactive: true,
                title: '<img src="styles/legend/SouthwestQueensland_81.png" /> Southwest Queensland'
            });
var format_NorthwestNSW_82 = new ol.format.GeoJSON();
var features_NorthwestNSW_82 = format_NorthwestNSW_82.readFeatures(json_NorthwestNSW_82, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NorthwestNSW_82 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NorthwestNSW_82.addFeatures(features_NorthwestNSW_82);
var lyr_NorthwestNSW_82 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NorthwestNSW_82, 
                style: style_NorthwestNSW_82,
                interactive: true,
                title: '<img src="styles/legend/NorthwestNSW_82.png" /> Northwest NSW'
            });
var format_Paakintyi_83 = new ol.format.GeoJSON();
var features_Paakintyi_83 = format_Paakintyi_83.readFeatures(json_Paakintyi_83, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Paakintyi_83 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Paakintyi_83.addFeatures(features_Paakintyi_83);
var lyr_Paakintyi_83 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Paakintyi_83, 
                style: style_Paakintyi_83,
                interactive: true,
                title: '<img src="styles/legend/Paakintyi_83.png" /> Paakintyi'
            });
var format_Yarli_84 = new ol.format.GeoJSON();
var features_Yarli_84 = format_Yarli_84.readFeatures(json_Yarli_84, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Yarli_84 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Yarli_84.addFeatures(features_Yarli_84);
var lyr_Yarli_84 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Yarli_84, 
                style: style_Yarli_84,
                interactive: true,
                title: '<img src="styles/legend/Yarli_84.png" /> Yarli'
            });
var format_Karnic_85 = new ol.format.GeoJSON();
var features_Karnic_85 = format_Karnic_85.readFeatures(json_Karnic_85, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Karnic_85 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Karnic_85.addFeatures(features_Karnic_85);
var lyr_Karnic_85 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Karnic_85, 
                style: style_Karnic_85,
                interactive: true,
                title: '<img src="styles/legend/Karnic_85.png" /> Karnic'
            });
var format_Ngura_86 = new ol.format.GeoJSON();
var features_Ngura_86 = format_Ngura_86.readFeatures(json_Ngura_86, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ngura_86 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ngura_86.addFeatures(features_Ngura_86);
var lyr_Ngura_86 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Ngura_86, 
                style: style_Ngura_86,
                interactive: true,
                title: '<img src="styles/legend/Ngura_86.png" /> Ngura'
            });
var format_ThuraYuraArandic_87 = new ol.format.GeoJSON();
var features_ThuraYuraArandic_87 = format_ThuraYuraArandic_87.readFeatures(json_ThuraYuraArandic_87, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ThuraYuraArandic_87 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ThuraYuraArandic_87.addFeatures(features_ThuraYuraArandic_87);
var lyr_ThuraYuraArandic_87 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ThuraYuraArandic_87, 
                style: style_ThuraYuraArandic_87,
                interactive: true,
                title: '<img src="styles/legend/ThuraYuraArandic_87.png" /> Thura-Yura-Arandic'
            });
var format_ThuraYura_88 = new ol.format.GeoJSON();
var features_ThuraYura_88 = format_ThuraYura_88.readFeatures(json_ThuraYura_88, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ThuraYura_88 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ThuraYura_88.addFeatures(features_ThuraYura_88);
var lyr_ThuraYura_88 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ThuraYura_88, 
                style: style_ThuraYura_88,
                interactive: true,
                title: '<img src="styles/legend/ThuraYura_88.png" /> Thura-Yura'
            });
var format_Arandic_89 = new ol.format.GeoJSON();
var features_Arandic_89 = format_Arandic_89.readFeatures(json_Arandic_89, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Arandic_89 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Arandic_89.addFeatures(features_Arandic_89);
var lyr_Arandic_89 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Arandic_89, 
                style: style_Arandic_89,
                interactive: true,
                title: '<img src="styles/legend/Arandic_89.png" /> Arandic'
            });
var format_Northern_90 = new ol.format.GeoJSON();
var features_Northern_90 = format_Northern_90.readFeatures(json_Northern_90, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Northern_90 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Northern_90.addFeatures(features_Northern_90);
var lyr_Northern_90 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Northern_90, 
                style: style_Northern_90,
                interactive: true,
                title: '<img src="styles/legend/Northern_90.png" /> Northern'
            });
var format_Gulf_91 = new ol.format.GeoJSON();
var features_Gulf_91 = format_Gulf_91.readFeatures(json_Gulf_91, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Gulf_91 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Gulf_91.addFeatures(features_Gulf_91);
var lyr_Gulf_91 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Gulf_91, 
                style: style_Gulf_91,
                interactive: true,
                title: '<img src="styles/legend/Gulf_91.png" /> Gulf'
            });
var format_Kalkatungic_92 = new ol.format.GeoJSON();
var features_Kalkatungic_92 = format_Kalkatungic_92.readFeatures(json_Kalkatungic_92, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kalkatungic_92 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kalkatungic_92.addFeatures(features_Kalkatungic_92);
var lyr_Kalkatungic_92 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Kalkatungic_92, 
                style: style_Kalkatungic_92,
                interactive: true,
                title: '<img src="styles/legend/Kalkatungic_92.png" /> Kalkatungic'
            });
var format_Mayabic_93 = new ol.format.GeoJSON();
var features_Mayabic_93 = format_Mayabic_93.readFeatures(json_Mayabic_93, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mayabic_93 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mayabic_93.addFeatures(features_Mayabic_93);
var lyr_Mayabic_93 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Mayabic_93, 
                style: style_Mayabic_93,
                interactive: true,
                title: '<img src="styles/legend/Mayabic_93.png" /> Mayabic'
            });
var format_PamaMaric_94 = new ol.format.GeoJSON();
var features_PamaMaric_94 = format_PamaMaric_94.readFeatures(json_PamaMaric_94, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PamaMaric_94 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PamaMaric_94.addFeatures(features_PamaMaric_94);
var lyr_PamaMaric_94 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PamaMaric_94, 
                style: style_PamaMaric_94,
                interactive: true,
                title: '<img src="styles/legend/PamaMaric_94.png" /> Pama Maric'
            });
var format_Paman_95 = new ol.format.GeoJSON();
var features_Paman_95 = format_Paman_95.readFeatures(json_Paman_95, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Paman_95 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Paman_95.addFeatures(features_Paman_95);
var lyr_Paman_95 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Paman_95, 
                style: style_Paman_95,
                interactive: true,
                title: '<img src="styles/legend/Paman_95.png" /> Paman'
            });
var format_MaricLaguages_96 = new ol.format.GeoJSON();
var features_MaricLaguages_96 = format_MaricLaguages_96.readFeatures(json_MaricLaguages_96, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MaricLaguages_96 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MaricLaguages_96.addFeatures(features_MaricLaguages_96);
var lyr_MaricLaguages_96 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MaricLaguages_96, 
                style: style_MaricLaguages_96,
                interactive: true,
                title: '<img src="styles/legend/MaricLaguages_96.png" /> Maric Laguages'
            });
var format_Dyirbalic_97 = new ol.format.GeoJSON();
var features_Dyirbalic_97 = format_Dyirbalic_97.readFeatures(json_Dyirbalic_97, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Dyirbalic_97 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Dyirbalic_97.addFeatures(features_Dyirbalic_97);
var lyr_Dyirbalic_97 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Dyirbalic_97, 
                style: style_Dyirbalic_97,
                interactive: true,
                title: '<img src="styles/legend/Dyirbalic_97.png" /> Dyirbalic'
            });
var format_Western_98 = new ol.format.GeoJSON();
var features_Western_98 = format_Western_98.readFeatures(json_Western_98, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Western_98 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Western_98.addFeatures(features_Western_98);
var lyr_Western_98 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Western_98, 
                style: style_Western_98,
                interactive: true,
                title: '<img src="styles/legend/Western_98.png" /> Western'
            });
var format_YolnguWarluwaric_99 = new ol.format.GeoJSON();
var features_YolnguWarluwaric_99 = format_YolnguWarluwaric_99.readFeatures(json_YolnguWarluwaric_99, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_YolnguWarluwaric_99 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_YolnguWarluwaric_99.addFeatures(features_YolnguWarluwaric_99);
var lyr_YolnguWarluwaric_99 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_YolnguWarluwaric_99, 
                style: style_YolnguWarluwaric_99,
                interactive: true,
                title: '<img src="styles/legend/YolnguWarluwaric_99.png" /> Yolngu Warluwaric'
            });
var format_Warluwaric_100 = new ol.format.GeoJSON();
var features_Warluwaric_100 = format_Warluwaric_100.readFeatures(json_Warluwaric_100, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Warluwaric_100 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Warluwaric_100.addFeatures(features_Warluwaric_100);
var lyr_Warluwaric_100 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Warluwaric_100, 
                style: style_Warluwaric_100,
                interactive: true,
                title: '<img src="styles/legend/Warluwaric_100.png" /> Warluwaric'
            });
var format_Yolngu_101 = new ol.format.GeoJSON();
var features_Yolngu_101 = format_Yolngu_101.readFeatures(json_Yolngu_101, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Yolngu_101 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Yolngu_101.addFeatures(features_Yolngu_101);
var lyr_Yolngu_101 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Yolngu_101, 
                style: style_Yolngu_101,
                interactive: true,
                title: '<img src="styles/legend/Yolngu_101.png" /> Yolngu'
            });
var format_Nyungic_102 = new ol.format.GeoJSON();
var features_Nyungic_102 = format_Nyungic_102.readFeatures(json_Nyungic_102, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Nyungic_102 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Nyungic_102.addFeatures(features_Nyungic_102);
var lyr_Nyungic_102 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Nyungic_102, 
                style: style_Nyungic_102,
                interactive: true,
                title: '<img src="styles/legend/Nyungic_102.png" /> Nyungic'
            });
var format_Desert_103 = new ol.format.GeoJSON();
var features_Desert_103 = format_Desert_103.readFeatures(json_Desert_103, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Desert_103 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Desert_103.addFeatures(features_Desert_103);
var lyr_Desert_103 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Desert_103, 
                style: style_Desert_103,
                interactive: true,
                title: '<img src="styles/legend/Desert_103.png" /> Desert'
            });
var format_Marrngu_104 = new ol.format.GeoJSON();
var features_Marrngu_104 = format_Marrngu_104.readFeatures(json_Marrngu_104, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Marrngu_104 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Marrngu_104.addFeatures(features_Marrngu_104);
var lyr_Marrngu_104 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Marrngu_104, 
                style: style_Marrngu_104,
                interactive: true,
                title: '<img src="styles/legend/Marrngu_104.png" /> Marrngu'
            });
var format_NgumpinYapa_105 = new ol.format.GeoJSON();
var features_NgumpinYapa_105 = format_NgumpinYapa_105.readFeatures(json_NgumpinYapa_105, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NgumpinYapa_105 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NgumpinYapa_105.addFeatures(features_NgumpinYapa_105);
var lyr_NgumpinYapa_105 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NgumpinYapa_105, 
                style: style_NgumpinYapa_105,
                interactive: true,
                title: '<img src="styles/legend/NgumpinYapa_105.png" /> Ngumpin-Yapa'
            });
var format_Western_Desert_106 = new ol.format.GeoJSON();
var features_Western_Desert_106 = format_Western_Desert_106.readFeatures(json_Western_Desert_106, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Western_Desert_106 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Western_Desert_106.addFeatures(features_Western_Desert_106);
var lyr_Western_Desert_106 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Western_Desert_106, 
                style: style_Western_Desert_106,
                interactive: true,
                title: '<img src="styles/legend/Western_Desert_106.png" /> Western_Desert'
            });
var format_Southwestern_107 = new ol.format.GeoJSON();
var features_Southwestern_107 = format_Southwestern_107.readFeatures(json_Southwestern_107, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Southwestern_107 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Southwestern_107.addFeatures(features_Southwestern_107);
var lyr_Southwestern_107 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Southwestern_107, 
                style: style_Southwestern_107,
                interactive: true,
                title: '<img src="styles/legend/Southwestern_107.png" /> Southwestern'
            });
var format_Pilbara_108 = new ol.format.GeoJSON();
var features_Pilbara_108 = format_Pilbara_108.readFeatures(json_Pilbara_108, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pilbara_108 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pilbara_108.addFeatures(features_Pilbara_108);
var lyr_Pilbara_108 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Pilbara_108, 
                style: style_Pilbara_108,
                interactive: true,
                title: '<img src="styles/legend/Pilbara_108.png" /> Pilbara'
            });
var format_KanyaraMantharta_109 = new ol.format.GeoJSON();
var features_KanyaraMantharta_109 = format_KanyaraMantharta_109.readFeatures(json_KanyaraMantharta_109, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KanyaraMantharta_109 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KanyaraMantharta_109.addFeatures(features_KanyaraMantharta_109);
var lyr_KanyaraMantharta_109 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KanyaraMantharta_109, 
                style: style_KanyaraMantharta_109,
                interactive: true,
                title: '<img src="styles/legend/KanyaraMantharta_109.png" /> Kanyara-Mantharta'
            });
var format_Mantharta_110 = new ol.format.GeoJSON();
var features_Mantharta_110 = format_Mantharta_110.readFeatures(json_Mantharta_110, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mantharta_110 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mantharta_110.addFeatures(features_Mantharta_110);
var lyr_Mantharta_110 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Mantharta_110, 
                style: style_Mantharta_110,
                interactive: true,
                title: '<img src="styles/legend/Mantharta_110.png" /> Mantharta'
            });
var format_Kanyara_111 = new ol.format.GeoJSON();
var features_Kanyara_111 = format_Kanyara_111.readFeatures(json_Kanyara_111, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kanyara_111 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kanyara_111.addFeatures(features_Kanyara_111);
var lyr_Kanyara_111 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Kanyara_111, 
                style: style_Kanyara_111,
                interactive: true,
                title: '<img src="styles/legend/Kanyara_111.png" /> Kanyara'
            });
var format_Ngayarda_112 = new ol.format.GeoJSON();
var features_Ngayarda_112 = format_Ngayarda_112.readFeatures(json_Ngayarda_112, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ngayarda_112 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ngayarda_112.addFeatures(features_Ngayarda_112);
var lyr_Ngayarda_112 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Ngayarda_112, 
                style: style_Ngayarda_112,
                interactive: true,
                title: '<img src="styles/legend/Ngayarda_112.png" /> Ngayarda'
            });
var format_Nyungic_113 = new ol.format.GeoJSON();
var features_Nyungic_113 = format_Nyungic_113.readFeatures(json_Nyungic_113, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Nyungic_113 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Nyungic_113.addFeatures(features_Nyungic_113);
var lyr_Nyungic_113 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Nyungic_113, 
                style: style_Nyungic_113,
                interactive: true,
                title: '<img src="styles/legend/Nyungic_113.png" /> Nyungic'
            });
var format_Kartu_114 = new ol.format.GeoJSON();
var features_Kartu_114 = format_Kartu_114.readFeatures(json_Kartu_114, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kartu_114 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kartu_114.addFeatures(features_Kartu_114);
var lyr_Kartu_114 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Kartu_114, 
                style: style_Kartu_114,
                interactive: true,
                title: '<img src="styles/legend/Kartu_114.png" /> Kartu'
            });
var format_Mirning_115 = new ol.format.GeoJSON();
var features_Mirning_115 = format_Mirning_115.readFeatures(json_Mirning_115, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mirning_115 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mirning_115.addFeatures(features_Mirning_115);
var lyr_Mirning_115 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Mirning_115, 
                style: style_Mirning_115,
                interactive: true,
                title: '<img src="styles/legend/Mirning_115.png" /> Mirning'
            });
var format_Warluwaric_116 = new ol.format.GeoJSON();
var features_Warluwaric_116 = format_Warluwaric_116.readFeatures(json_Warluwaric_116, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Warluwaric_116 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Warluwaric_116.addFeatures(features_Warluwaric_116);
var lyr_Warluwaric_116 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Warluwaric_116, 
                style: style_Warluwaric_116,
                interactive: true,
                title: '<img src="styles/legend/Warluwaric_116.png" /> Warluwaric'
            });
var format_Yolngu_117 = new ol.format.GeoJSON();
var features_Yolngu_117 = format_Yolngu_117.readFeatures(json_Yolngu_117, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Yolngu_117 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Yolngu_117.addFeatures(features_Yolngu_117);
var lyr_Yolngu_117 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Yolngu_117, 
                style: style_Yolngu_117,
                interactive: true,
                title: '<img src="styles/legend/Yolngu_117.png" /> Yolngu'
            });
var format_YolnguWarluwaric_118 = new ol.format.GeoJSON();
var features_YolnguWarluwaric_118 = format_YolnguWarluwaric_118.readFeatures(json_YolnguWarluwaric_118, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_YolnguWarluwaric_118 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_YolnguWarluwaric_118.addFeatures(features_YolnguWarluwaric_118);
var lyr_YolnguWarluwaric_118 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_YolnguWarluwaric_118, 
                style: style_YolnguWarluwaric_118,
                interactive: true,
                title: '<img src="styles/legend/YolnguWarluwaric_118.png" /> Yolngu Warluwaric'
            });
var format_Warluwaric_119 = new ol.format.GeoJSON();
var features_Warluwaric_119 = format_Warluwaric_119.readFeatures(json_Warluwaric_119, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Warluwaric_119 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Warluwaric_119.addFeatures(features_Warluwaric_119);
var lyr_Warluwaric_119 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Warluwaric_119, 
                style: style_Warluwaric_119,
                interactive: true,
                title: '<img src="styles/legend/Warluwaric_119.png" /> Warluwaric'
            });
var format_Yolngu_120 = new ol.format.GeoJSON();
var features_Yolngu_120 = format_Yolngu_120.readFeatures(json_Yolngu_120, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Yolngu_120 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Yolngu_120.addFeatures(features_Yolngu_120);
var lyr_Yolngu_120 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Yolngu_120, 
                style: style_Yolngu_120,
                interactive: true,
                title: '<img src="styles/legend/Yolngu_120.png" /> Yolngu'
            });
var format_Nyungic_121 = new ol.format.GeoJSON();
var features_Nyungic_121 = format_Nyungic_121.readFeatures(json_Nyungic_121, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Nyungic_121 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Nyungic_121.addFeatures(features_Nyungic_121);
var lyr_Nyungic_121 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Nyungic_121, 
                style: style_Nyungic_121,
                interactive: true,
                title: '<img src="styles/legend/Nyungic_121.png" /> Nyungic'
            });
var format_Desert_122 = new ol.format.GeoJSON();
var features_Desert_122 = format_Desert_122.readFeatures(json_Desert_122, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Desert_122 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Desert_122.addFeatures(features_Desert_122);
var lyr_Desert_122 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Desert_122, 
                style: style_Desert_122,
                interactive: true,
                title: '<img src="styles/legend/Desert_122.png" /> Desert'
            });
var format_Marrngu_123 = new ol.format.GeoJSON();
var features_Marrngu_123 = format_Marrngu_123.readFeatures(json_Marrngu_123, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Marrngu_123 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Marrngu_123.addFeatures(features_Marrngu_123);
var lyr_Marrngu_123 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Marrngu_123, 
                style: style_Marrngu_123,
                interactive: true,
                title: '<img src="styles/legend/Marrngu_123.png" /> Marrngu'
            });
var format_NgumpinYapa_124 = new ol.format.GeoJSON();
var features_NgumpinYapa_124 = format_NgumpinYapa_124.readFeatures(json_NgumpinYapa_124, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NgumpinYapa_124 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NgumpinYapa_124.addFeatures(features_NgumpinYapa_124);
var lyr_NgumpinYapa_124 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NgumpinYapa_124, 
                style: style_NgumpinYapa_124,
                interactive: true,
                title: '<img src="styles/legend/NgumpinYapa_124.png" /> Ngumpin-Yapa'
            });
var format_Western_Desert_125 = new ol.format.GeoJSON();
var features_Western_Desert_125 = format_Western_Desert_125.readFeatures(json_Western_Desert_125, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Western_Desert_125 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Western_Desert_125.addFeatures(features_Western_Desert_125);
var lyr_Western_Desert_125 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Western_Desert_125, 
                style: style_Western_Desert_125,
                interactive: true,
                title: '<img src="styles/legend/Western_Desert_125.png" /> Western_Desert'
            });
var format_Southwestern_126 = new ol.format.GeoJSON();
var features_Southwestern_126 = format_Southwestern_126.readFeatures(json_Southwestern_126, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Southwestern_126 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Southwestern_126.addFeatures(features_Southwestern_126);
var lyr_Southwestern_126 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Southwestern_126, 
                style: style_Southwestern_126,
                interactive: true,
                title: '<img src="styles/legend/Southwestern_126.png" /> Southwestern'
            });
var format_Pilbara_127 = new ol.format.GeoJSON();
var features_Pilbara_127 = format_Pilbara_127.readFeatures(json_Pilbara_127, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pilbara_127 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pilbara_127.addFeatures(features_Pilbara_127);
var lyr_Pilbara_127 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Pilbara_127, 
                style: style_Pilbara_127,
                interactive: true,
                title: '<img src="styles/legend/Pilbara_127.png" /> Pilbara'
            });
var format_KanyaraMantharta_128 = new ol.format.GeoJSON();
var features_KanyaraMantharta_128 = format_KanyaraMantharta_128.readFeatures(json_KanyaraMantharta_128, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KanyaraMantharta_128 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KanyaraMantharta_128.addFeatures(features_KanyaraMantharta_128);
var lyr_KanyaraMantharta_128 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KanyaraMantharta_128, 
                style: style_KanyaraMantharta_128,
                interactive: true,
                title: '<img src="styles/legend/KanyaraMantharta_128.png" /> Kanyara-Mantharta'
            });
var format_Mantharta_129 = new ol.format.GeoJSON();
var features_Mantharta_129 = format_Mantharta_129.readFeatures(json_Mantharta_129, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mantharta_129 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mantharta_129.addFeatures(features_Mantharta_129);
var lyr_Mantharta_129 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Mantharta_129, 
                style: style_Mantharta_129,
                interactive: true,
                title: '<img src="styles/legend/Mantharta_129.png" /> Mantharta'
            });
var format_Kanyara_130 = new ol.format.GeoJSON();
var features_Kanyara_130 = format_Kanyara_130.readFeatures(json_Kanyara_130, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kanyara_130 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kanyara_130.addFeatures(features_Kanyara_130);
var lyr_Kanyara_130 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Kanyara_130, 
                style: style_Kanyara_130,
                interactive: true,
                title: '<img src="styles/legend/Kanyara_130.png" /> Kanyara'
            });
var format_Ngayarda_131 = new ol.format.GeoJSON();
var features_Ngayarda_131 = format_Ngayarda_131.readFeatures(json_Ngayarda_131, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ngayarda_131 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ngayarda_131.addFeatures(features_Ngayarda_131);
var lyr_Ngayarda_131 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Ngayarda_131, 
                style: style_Ngayarda_131,
                interactive: true,
                title: '<img src="styles/legend/Ngayarda_131.png" /> Ngayarda'
            });
var format_Nyungic_132 = new ol.format.GeoJSON();
var features_Nyungic_132 = format_Nyungic_132.readFeatures(json_Nyungic_132, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Nyungic_132 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Nyungic_132.addFeatures(features_Nyungic_132);
var lyr_Nyungic_132 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Nyungic_132, 
                style: style_Nyungic_132,
                interactive: true,
                title: '<img src="styles/legend/Nyungic_132.png" /> Nyungic'
            });
var format_Kartu_133 = new ol.format.GeoJSON();
var features_Kartu_133 = format_Kartu_133.readFeatures(json_Kartu_133, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kartu_133 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kartu_133.addFeatures(features_Kartu_133);
var lyr_Kartu_133 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Kartu_133, 
                style: style_Kartu_133,
                interactive: true,
                title: '<img src="styles/legend/Kartu_133.png" /> Kartu'
            });
var format_Mirning_134 = new ol.format.GeoJSON();
var features_Mirning_134 = format_Mirning_134.readFeatures(json_Mirning_134, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mirning_134 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mirning_134.addFeatures(features_Mirning_134);
var lyr_Mirning_134 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Mirning_134, 
                style: style_Mirning_134,
                interactive: true,
                title: '<img src="styles/legend/Mirning_134.png" /> Mirning'
            });
var format_Marrngu_135 = new ol.format.GeoJSON();
var features_Marrngu_135 = format_Marrngu_135.readFeatures(json_Marrngu_135, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Marrngu_135 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Marrngu_135.addFeatures(features_Marrngu_135);
var lyr_Marrngu_135 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Marrngu_135, 
                style: style_Marrngu_135,
                interactive: true,
                title: '<img src="styles/legend/Marrngu_135.png" /> Marrngu'
            });
var format_NgumpinYapa_136 = new ol.format.GeoJSON();
var features_NgumpinYapa_136 = format_NgumpinYapa_136.readFeatures(json_NgumpinYapa_136, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NgumpinYapa_136 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NgumpinYapa_136.addFeatures(features_NgumpinYapa_136);
var lyr_NgumpinYapa_136 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NgumpinYapa_136, 
                style: style_NgumpinYapa_136,
                interactive: true,
                title: '<img src="styles/legend/NgumpinYapa_136.png" /> Ngumpin-Yapa'
            });
var format_Western_Desert_137 = new ol.format.GeoJSON();
var features_Western_Desert_137 = format_Western_Desert_137.readFeatures(json_Western_Desert_137, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Western_Desert_137 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Western_Desert_137.addFeatures(features_Western_Desert_137);
var lyr_Western_Desert_137 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Western_Desert_137, 
                style: style_Western_Desert_137,
                interactive: true,
                title: '<img src="styles/legend/Western_Desert_137.png" /> Western_Desert'
            });
var format_Desert_138 = new ol.format.GeoJSON();
var features_Desert_138 = format_Desert_138.readFeatures(json_Desert_138, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Desert_138 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Desert_138.addFeatures(features_Desert_138);
var lyr_Desert_138 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Desert_138, 
                style: style_Desert_138,
                interactive: true,
                title: '<img src="styles/legend/Desert_138.png" /> Desert'
            });
var format_Marrngu_139 = new ol.format.GeoJSON();
var features_Marrngu_139 = format_Marrngu_139.readFeatures(json_Marrngu_139, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Marrngu_139 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Marrngu_139.addFeatures(features_Marrngu_139);
var lyr_Marrngu_139 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Marrngu_139, 
                style: style_Marrngu_139,
                interactive: true,
                title: '<img src="styles/legend/Marrngu_139.png" /> Marrngu'
            });
var format_NgumpinYapa_140 = new ol.format.GeoJSON();
var features_NgumpinYapa_140 = format_NgumpinYapa_140.readFeatures(json_NgumpinYapa_140, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NgumpinYapa_140 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NgumpinYapa_140.addFeatures(features_NgumpinYapa_140);
var lyr_NgumpinYapa_140 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NgumpinYapa_140, 
                style: style_NgumpinYapa_140,
                interactive: true,
                title: '<img src="styles/legend/NgumpinYapa_140.png" /> Ngumpin-Yapa'
            });
var format_Western_Desert_141 = new ol.format.GeoJSON();
var features_Western_Desert_141 = format_Western_Desert_141.readFeatures(json_Western_Desert_141, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Western_Desert_141 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Western_Desert_141.addFeatures(features_Western_Desert_141);
var lyr_Western_Desert_141 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Western_Desert_141, 
                style: style_Western_Desert_141,
                interactive: true,
                title: '<img src="styles/legend/Western_Desert_141.png" /> Western_Desert'
            });
var format_Southwestern_142 = new ol.format.GeoJSON();
var features_Southwestern_142 = format_Southwestern_142.readFeatures(json_Southwestern_142, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Southwestern_142 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Southwestern_142.addFeatures(features_Southwestern_142);
var lyr_Southwestern_142 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Southwestern_142, 
                style: style_Southwestern_142,
                interactive: true,
                title: '<img src="styles/legend/Southwestern_142.png" /> Southwestern'
            });
var format_Pilbara_143 = new ol.format.GeoJSON();
var features_Pilbara_143 = format_Pilbara_143.readFeatures(json_Pilbara_143, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pilbara_143 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pilbara_143.addFeatures(features_Pilbara_143);
var lyr_Pilbara_143 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Pilbara_143, 
                style: style_Pilbara_143,
                interactive: true,
                title: '<img src="styles/legend/Pilbara_143.png" /> Pilbara'
            });
var format_KanyaraMantharta_144 = new ol.format.GeoJSON();
var features_KanyaraMantharta_144 = format_KanyaraMantharta_144.readFeatures(json_KanyaraMantharta_144, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KanyaraMantharta_144 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KanyaraMantharta_144.addFeatures(features_KanyaraMantharta_144);
var lyr_KanyaraMantharta_144 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KanyaraMantharta_144, 
                style: style_KanyaraMantharta_144,
                interactive: true,
                title: '<img src="styles/legend/KanyaraMantharta_144.png" /> Kanyara-Mantharta'
            });
var format_Mantharta_145 = new ol.format.GeoJSON();
var features_Mantharta_145 = format_Mantharta_145.readFeatures(json_Mantharta_145, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mantharta_145 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mantharta_145.addFeatures(features_Mantharta_145);
var lyr_Mantharta_145 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Mantharta_145, 
                style: style_Mantharta_145,
                interactive: true,
                title: '<img src="styles/legend/Mantharta_145.png" /> Mantharta'
            });
var format_Kanyara_146 = new ol.format.GeoJSON();
var features_Kanyara_146 = format_Kanyara_146.readFeatures(json_Kanyara_146, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kanyara_146 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kanyara_146.addFeatures(features_Kanyara_146);
var lyr_Kanyara_146 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Kanyara_146, 
                style: style_Kanyara_146,
                interactive: true,
                title: '<img src="styles/legend/Kanyara_146.png" /> Kanyara'
            });
var format_Ngayarda_147 = new ol.format.GeoJSON();
var features_Ngayarda_147 = format_Ngayarda_147.readFeatures(json_Ngayarda_147, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ngayarda_147 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ngayarda_147.addFeatures(features_Ngayarda_147);
var lyr_Ngayarda_147 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Ngayarda_147, 
                style: style_Ngayarda_147,
                interactive: true,
                title: '<img src="styles/legend/Ngayarda_147.png" /> Ngayarda'
            });
var format_Nyungic_148 = new ol.format.GeoJSON();
var features_Nyungic_148 = format_Nyungic_148.readFeatures(json_Nyungic_148, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Nyungic_148 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Nyungic_148.addFeatures(features_Nyungic_148);
var lyr_Nyungic_148 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Nyungic_148, 
                style: style_Nyungic_148,
                interactive: true,
                title: '<img src="styles/legend/Nyungic_148.png" /> Nyungic'
            });
var format_Kartu_149 = new ol.format.GeoJSON();
var features_Kartu_149 = format_Kartu_149.readFeatures(json_Kartu_149, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kartu_149 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kartu_149.addFeatures(features_Kartu_149);
var lyr_Kartu_149 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Kartu_149, 
                style: style_Kartu_149,
                interactive: true,
                title: '<img src="styles/legend/Kartu_149.png" /> Kartu'
            });
var format_Mirning_150 = new ol.format.GeoJSON();
var features_Mirning_150 = format_Mirning_150.readFeatures(json_Mirning_150, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mirning_150 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mirning_150.addFeatures(features_Mirning_150);
var lyr_Mirning_150 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Mirning_150, 
                style: style_Mirning_150,
                interactive: true,
                title: '<img src="styles/legend/Mirning_150.png" /> Mirning'
            });
var format_Mantharta_151 = new ol.format.GeoJSON();
var features_Mantharta_151 = format_Mantharta_151.readFeatures(json_Mantharta_151, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mantharta_151 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mantharta_151.addFeatures(features_Mantharta_151);
var lyr_Mantharta_151 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Mantharta_151, 
                style: style_Mantharta_151,
                interactive: true,
                title: '<img src="styles/legend/Mantharta_151.png" /> Mantharta'
            });
var format_Kanyara_152 = new ol.format.GeoJSON();
var features_Kanyara_152 = format_Kanyara_152.readFeatures(json_Kanyara_152, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kanyara_152 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kanyara_152.addFeatures(features_Kanyara_152);
var lyr_Kanyara_152 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Kanyara_152, 
                style: style_Kanyara_152,
                interactive: true,
                title: '<img src="styles/legend/Kanyara_152.png" /> Kanyara'
            });
var format_KanyaraMantharta_153 = new ol.format.GeoJSON();
var features_KanyaraMantharta_153 = format_KanyaraMantharta_153.readFeatures(json_KanyaraMantharta_153, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KanyaraMantharta_153 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KanyaraMantharta_153.addFeatures(features_KanyaraMantharta_153);
var lyr_KanyaraMantharta_153 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KanyaraMantharta_153, 
                style: style_KanyaraMantharta_153,
                interactive: true,
                title: '<img src="styles/legend/KanyaraMantharta_153.png" /> Kanyara-Mantharta'
            });
var format_Mantharta_154 = new ol.format.GeoJSON();
var features_Mantharta_154 = format_Mantharta_154.readFeatures(json_Mantharta_154, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mantharta_154 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mantharta_154.addFeatures(features_Mantharta_154);
var lyr_Mantharta_154 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Mantharta_154, 
                style: style_Mantharta_154,
                interactive: true,
                title: '<img src="styles/legend/Mantharta_154.png" /> Mantharta'
            });
var format_Kanyara_155 = new ol.format.GeoJSON();
var features_Kanyara_155 = format_Kanyara_155.readFeatures(json_Kanyara_155, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kanyara_155 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kanyara_155.addFeatures(features_Kanyara_155);
var lyr_Kanyara_155 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Kanyara_155, 
                style: style_Kanyara_155,
                interactive: true,
                title: '<img src="styles/legend/Kanyara_155.png" /> Kanyara'
            });
var format_Ngayarda_156 = new ol.format.GeoJSON();
var features_Ngayarda_156 = format_Ngayarda_156.readFeatures(json_Ngayarda_156, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ngayarda_156 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ngayarda_156.addFeatures(features_Ngayarda_156);
var lyr_Ngayarda_156 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Ngayarda_156, 
                style: style_Ngayarda_156,
                interactive: true,
                title: '<img src="styles/legend/Ngayarda_156.png" /> Ngayarda'
            });
var format_Pilbara_157 = new ol.format.GeoJSON();
var features_Pilbara_157 = format_Pilbara_157.readFeatures(json_Pilbara_157, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pilbara_157 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pilbara_157.addFeatures(features_Pilbara_157);
var lyr_Pilbara_157 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Pilbara_157, 
                style: style_Pilbara_157,
                interactive: true,
                title: '<img src="styles/legend/Pilbara_157.png" /> Pilbara'
            });
var format_KanyaraMantharta_158 = new ol.format.GeoJSON();
var features_KanyaraMantharta_158 = format_KanyaraMantharta_158.readFeatures(json_KanyaraMantharta_158, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KanyaraMantharta_158 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KanyaraMantharta_158.addFeatures(features_KanyaraMantharta_158);
var lyr_KanyaraMantharta_158 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KanyaraMantharta_158, 
                style: style_KanyaraMantharta_158,
                interactive: true,
                title: '<img src="styles/legend/KanyaraMantharta_158.png" /> Kanyara-Mantharta'
            });
var format_Mantharta_159 = new ol.format.GeoJSON();
var features_Mantharta_159 = format_Mantharta_159.readFeatures(json_Mantharta_159, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mantharta_159 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mantharta_159.addFeatures(features_Mantharta_159);
var lyr_Mantharta_159 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Mantharta_159, 
                style: style_Mantharta_159,
                interactive: true,
                title: '<img src="styles/legend/Mantharta_159.png" /> Mantharta'
            });
var format_Kanyara_160 = new ol.format.GeoJSON();
var features_Kanyara_160 = format_Kanyara_160.readFeatures(json_Kanyara_160, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kanyara_160 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kanyara_160.addFeatures(features_Kanyara_160);
var lyr_Kanyara_160 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Kanyara_160, 
                style: style_Kanyara_160,
                interactive: true,
                title: '<img src="styles/legend/Kanyara_160.png" /> Kanyara'
            });
var format_Ngayarda_161 = new ol.format.GeoJSON();
var features_Ngayarda_161 = format_Ngayarda_161.readFeatures(json_Ngayarda_161, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ngayarda_161 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ngayarda_161.addFeatures(features_Ngayarda_161);
var lyr_Ngayarda_161 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Ngayarda_161, 
                style: style_Ngayarda_161,
                interactive: true,
                title: '<img src="styles/legend/Ngayarda_161.png" /> Ngayarda'
            });
var format_Nyungic_162 = new ol.format.GeoJSON();
var features_Nyungic_162 = format_Nyungic_162.readFeatures(json_Nyungic_162, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Nyungic_162 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Nyungic_162.addFeatures(features_Nyungic_162);
var lyr_Nyungic_162 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Nyungic_162, 
                style: style_Nyungic_162,
                interactive: true,
                title: '<img src="styles/legend/Nyungic_162.png" /> Nyungic'
            });
var format_Kartu_163 = new ol.format.GeoJSON();
var features_Kartu_163 = format_Kartu_163.readFeatures(json_Kartu_163, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kartu_163 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kartu_163.addFeatures(features_Kartu_163);
var lyr_Kartu_163 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Kartu_163, 
                style: style_Kartu_163,
                interactive: true,
                title: '<img src="styles/legend/Kartu_163.png" /> Kartu'
            });
var format_Mirning_164 = new ol.format.GeoJSON();
var features_Mirning_164 = format_Mirning_164.readFeatures(json_Mirning_164, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mirning_164 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mirning_164.addFeatures(features_Mirning_164);
var lyr_Mirning_164 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Mirning_164, 
                style: style_Mirning_164,
                interactive: true,
                title: '<img src="styles/legend/Mirning_164.png" /> Mirning'
            });

        var lyr_BaseMap_165 = new ol.layer.Tile({
            'title': 'Base Map',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_PamaNyungan_166 = new ol.format.GeoJSON();
var features_PamaNyungan_166 = format_PamaNyungan_166.readFeatures(json_PamaNyungan_166, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PamaNyungan_166 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PamaNyungan_166.addFeatures(features_PamaNyungan_166);
var lyr_PamaNyungan_166 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PamaNyungan_166, 
                style: style_PamaNyungan_166,
                interactive: true,
                title: '<img src="styles/legend/PamaNyungan_166.png" /> Pama Nyungan'
            });
var format_IndividualLanguages_167 = new ol.format.GeoJSON();
var features_IndividualLanguages_167 = format_IndividualLanguages_167.readFeatures(json_IndividualLanguages_167, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IndividualLanguages_167 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IndividualLanguages_167.addFeatures(features_IndividualLanguages_167);
var lyr_IndividualLanguages_167 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_IndividualLanguages_167, 
                style: style_IndividualLanguages_167,
                interactive: true,
                title: '<img src="styles/legend/IndividualLanguages_167.png" /> Individual Languages'
            });
var group_KanyaraMantharta = new ol.layer.Group({
                                layers: [lyr_Mantharta_159,lyr_Kanyara_160,],
                                title: "Kanyara-Mantharta"});
var group_Pilbara = new ol.layer.Group({
                                layers: [lyr_KanyaraMantharta_158,group_KanyaraMantharta,lyr_Ngayarda_161,],
                                title: "Pilbara"});
var group_Southwestern = new ol.layer.Group({
                                layers: [lyr_Pilbara_157,group_Pilbara,lyr_Ngayarda_161,lyr_Nyungic_162,lyr_Kartu_163,lyr_Mirning_164,],
                                title: "Southwestern"});
var group_Desert = new ol.layer.Group({
                                layers: [lyr_Marrngu_139,lyr_NgumpinYapa_140,lyr_Western_Desert_141,],
                                title: "Desert"});
var group_Nyungic = new ol.layer.Group({
                                layers: [group_Desert,lyr_Desert_138,group_Southwestern,lyr_Southwestern_142,],
                                title: "Nyungic"});
var group_YolnguWarluwaric = new ol.layer.Group({
                                layers: [lyr_Warluwaric_119,lyr_Yolngu_120,],
                                title: "Yolngu-Warluwaric"});
var group_Western = new ol.layer.Group({
                                layers: [group_Nyungic,group_YolnguWarluwaric,],
                                title: "Western"});
var group_PamaMaric = new ol.layer.Group({
                                layers: [lyr_Paman_95,lyr_MaricLaguages_96,lyr_Dyirbalic_97,],
                                title: "Pama-Maric"});
var group_Gulf = new ol.layer.Group({
                                layers: [lyr_Kalkatungic_92,lyr_Mayabic_93,],
                                title: "Gulf"});
var group_Northern = new ol.layer.Group({
                                layers: [group_PamaMaric,lyr_PamaMaric_94,group_Gulf,lyr_Gulf_91,lyr_Dyirbalic_97,],
                                title: "Northern"});
var group_ThuraYuraArandic = new ol.layer.Group({
                                layers: [lyr_ThuraYura_88,lyr_Arandic_89,],
                                title: "Thura-Yura-Arandic"});
var group_NorthwestNSW = new ol.layer.Group({
                                layers: [lyr_Paakintyi_83,lyr_Yarli_84,],
                                title: "Northwest NSW"});
var group_SouthwestQueensland = new ol.layer.Group({
                                layers: [group_NorthwestNSW,lyr_NorthwestNSW_82,lyr_Karnic_85,],
                                title: "Southwest Queensland"});
var group_Central = new ol.layer.Group({
                                layers: [group_SouthwestQueensland,lyr_SouthwestQueensland_81,lyr_Ngura_86,group_ThuraYuraArandic,lyr_ThuraYuraArandic_87,],
                                title: "Central"});
var group_NorthCoast = new ol.layer.Group({
                                layers: [lyr_Durubalic_74,lyr_Bandjalangic_75,lyr_WakaKabic_76,lyr_Bigambul_77,lyr_Guyambal_78,lyr_Gumbaynggirr_79,],
                                title: "North Coast"});
var group_NewSouthWales = new ol.layer.Group({
                                layers: [lyr_YuinKuric_69,lyr_CentralNSW_70,lyr_Muruwari_71,lyr_Anaiwan_72,],
                                title: "New South Wales"});
var group_VictorianProper = new ol.layer.Group({
                                layers: [lyr_Kulin_66,lyr_EastVictorian_67,],
                                title: "Victorian Proper"});
var group_Victorian = new ol.layer.Group({
                                layers: [lyr_LowerMurray_64,group_VictorianProper,lyr_VictorianProper_65,],
                                title: "Victorian"});
var group_Southeastern = new ol.layer.Group({
                                layers: [group_Victorian,lyr_Victorian_63,group_NewSouthWales,lyr_NSW_68,group_NorthCoast,lyr_NorthCoast_73,],
                                title: "Southeastern"});
var group_PamaNyungan = new ol.layer.Group({
                                layers: [group_Western,lyr_Western_98,group_Central,lyr_Central_80,group_Southeastern,lyr_Southeastern_62,group_Northern,lyr_Northern_90,],
                                title: "Pama-Nyungan"});

lyr_LowerMurray_0.setVisible(true);lyr_VictorianProper_1.setVisible(true);lyr_Kulin_2.setVisible(true);lyr_EastVictorian_3.setVisible(true);lyr_Kulin_4.setVisible(true);lyr_EastVictorian_5.setVisible(true);lyr_YuinKuric_6.setVisible(true);lyr_CentralNSW_7.setVisible(true);lyr_Muruwari_8.setVisible(true);lyr_Anaiwan_9.setVisible(true);lyr_Victorian_10.setVisible(true);lyr_LowerMurray_11.setVisible(true);lyr_VictorianProper_12.setVisible(true);lyr_Kulin_13.setVisible(true);lyr_EastVictorian_14.setVisible(true);lyr_NSW_15.setVisible(true);lyr_YuinKuric_16.setVisible(true);lyr_CentralNSW_17.setVisible(true);lyr_Muruwari_18.setVisible(true);lyr_Anaiwan_19.setVisible(true);lyr_NorthCoast_20.setVisible(true);lyr_Durubalic_21.setVisible(true);lyr_Bandjalangic_22.setVisible(true);lyr_WakaKabic_23.setVisible(true);lyr_Bigambul_24.setVisible(true);lyr_Guyambal_25.setVisible(true);lyr_Gumbaynggirr_26.setVisible(true);lyr_Durubalic_27.setVisible(true);lyr_Bandjalangic_28.setVisible(true);lyr_WakaKabic_29.setVisible(true);lyr_Bigambul_30.setVisible(true);lyr_Guyambal_31.setVisible(true);lyr_Gumbaynggirr_32.setVisible(true);lyr_Paakintyi_33.setVisible(true);lyr_Yarli_34.setVisible(true);lyr_NorthwestNSW_35.setVisible(true);lyr_Paakintyi_36.setVisible(true);lyr_Yarli_37.setVisible(true);lyr_Karnic_38.setVisible(true);lyr_SouthwestQueensland_39.setVisible(true);lyr_NorthwestNSW_40.setVisible(true);lyr_Paakintyi_41.setVisible(true);lyr_Yarli_42.setVisible(true);lyr_Karnic_43.setVisible(true);lyr_Ngura_44.setVisible(true);lyr_ThuraYuraArandic_45.setVisible(true);lyr_ThuraYura_46.setVisible(true);lyr_Arandic_47.setVisible(true);lyr_ThuraYura_48.setVisible(true);lyr_Arandic_49.setVisible(true);lyr_Kalkatungic_50.setVisible(true);lyr_Mayabic_51.setVisible(true);lyr_Gulf_52.setVisible(true);lyr_Kalkatungic_53.setVisible(true);lyr_Mayabic_54.setVisible(true);lyr_PamaMaric_55.setVisible(true);lyr_Paman_56.setVisible(true);lyr_MaricLaguages_57.setVisible(true);lyr_Dyirbalic_58.setVisible(true);lyr_Paman_59.setVisible(true);lyr_MaricLaguages_60.setVisible(true);lyr_Dyirbalic_61.setVisible(true);lyr_Southeastern_62.setVisible(true);lyr_Victorian_63.setVisible(true);lyr_LowerMurray_64.setVisible(true);lyr_VictorianProper_65.setVisible(true);lyr_Kulin_66.setVisible(true);lyr_EastVictorian_67.setVisible(true);lyr_NSW_68.setVisible(true);lyr_YuinKuric_69.setVisible(true);lyr_CentralNSW_70.setVisible(true);lyr_Muruwari_71.setVisible(true);lyr_Anaiwan_72.setVisible(true);lyr_NorthCoast_73.setVisible(true);lyr_Durubalic_74.setVisible(true);lyr_Bandjalangic_75.setVisible(true);lyr_WakaKabic_76.setVisible(true);lyr_Bigambul_77.setVisible(true);lyr_Guyambal_78.setVisible(true);lyr_Gumbaynggirr_79.setVisible(true);lyr_Central_80.setVisible(true);lyr_SouthwestQueensland_81.setVisible(true);lyr_NorthwestNSW_82.setVisible(true);lyr_Paakintyi_83.setVisible(true);lyr_Yarli_84.setVisible(true);lyr_Karnic_85.setVisible(true);lyr_Ngura_86.setVisible(true);lyr_ThuraYuraArandic_87.setVisible(true);lyr_ThuraYura_88.setVisible(true);lyr_Arandic_89.setVisible(true);lyr_Northern_90.setVisible(true);lyr_Gulf_91.setVisible(true);lyr_Kalkatungic_92.setVisible(true);lyr_Mayabic_93.setVisible(true);lyr_PamaMaric_94.setVisible(true);lyr_Paman_95.setVisible(true);lyr_MaricLaguages_96.setVisible(true);lyr_Dyirbalic_97.setVisible(true);lyr_Western_98.setVisible(true);lyr_YolnguWarluwaric_99.setVisible(true);lyr_Warluwaric_100.setVisible(true);lyr_Yolngu_101.setVisible(true);lyr_Nyungic_102.setVisible(true);lyr_Desert_103.setVisible(true);lyr_Marrngu_104.setVisible(true);lyr_NgumpinYapa_105.setVisible(true);lyr_Western_Desert_106.setVisible(true);lyr_Southwestern_107.setVisible(true);lyr_Pilbara_108.setVisible(true);lyr_KanyaraMantharta_109.setVisible(true);lyr_Mantharta_110.setVisible(true);lyr_Kanyara_111.setVisible(true);lyr_Ngayarda_112.setVisible(true);lyr_Nyungic_113.setVisible(true);lyr_Kartu_114.setVisible(true);lyr_Mirning_115.setVisible(true);lyr_Warluwaric_116.setVisible(true);lyr_Yolngu_117.setVisible(true);lyr_YolnguWarluwaric_118.setVisible(true);lyr_Warluwaric_119.setVisible(true);lyr_Yolngu_120.setVisible(true);lyr_Nyungic_121.setVisible(true);lyr_Desert_122.setVisible(true);lyr_Marrngu_123.setVisible(true);lyr_NgumpinYapa_124.setVisible(true);lyr_Western_Desert_125.setVisible(true);lyr_Southwestern_126.setVisible(true);lyr_Pilbara_127.setVisible(true);lyr_KanyaraMantharta_128.setVisible(true);lyr_Mantharta_129.setVisible(true);lyr_Kanyara_130.setVisible(true);lyr_Ngayarda_131.setVisible(true);lyr_Nyungic_132.setVisible(true);lyr_Kartu_133.setVisible(true);lyr_Mirning_134.setVisible(true);lyr_Marrngu_135.setVisible(true);lyr_NgumpinYapa_136.setVisible(true);lyr_Western_Desert_137.setVisible(true);lyr_Desert_138.setVisible(true);lyr_Marrngu_139.setVisible(true);lyr_NgumpinYapa_140.setVisible(true);lyr_Western_Desert_141.setVisible(true);lyr_Southwestern_142.setVisible(true);lyr_Pilbara_143.setVisible(true);lyr_KanyaraMantharta_144.setVisible(true);lyr_Mantharta_145.setVisible(true);lyr_Kanyara_146.setVisible(true);lyr_Ngayarda_147.setVisible(true);lyr_Nyungic_148.setVisible(true);lyr_Kartu_149.setVisible(true);lyr_Mirning_150.setVisible(true);lyr_Mantharta_151.setVisible(true);lyr_Kanyara_152.setVisible(true);lyr_KanyaraMantharta_153.setVisible(true);lyr_Mantharta_154.setVisible(true);lyr_Kanyara_155.setVisible(true);lyr_Ngayarda_156.setVisible(true);lyr_Pilbara_157.setVisible(true);lyr_KanyaraMantharta_158.setVisible(true);lyr_Mantharta_159.setVisible(true);lyr_Kanyara_160.setVisible(true);lyr_Ngayarda_161.setVisible(true);lyr_Nyungic_162.setVisible(true);lyr_Kartu_163.setVisible(true);lyr_Mirning_164.setVisible(true);lyr_BaseMap_165.setVisible(true);lyr_PamaNyungan_166.setVisible(true);lyr_IndividualLanguages_167.setVisible(true);
var layersList = [lyr_BaseMap_165,group_PamaNyungan,lyr_PamaNyungan_166,lyr_IndividualLanguages_167,];
lyr_LowerMurray_0.set('fieldAliases', {'id': 'id', 'label': 'label', });
lyr_VictorianProper_1.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'label': 'label', });
lyr_Kulin_2.set('fieldAliases', {'id': 'id', 'label': 'label', });
lyr_EastVictorian_3.set('fieldAliases', {'id': 'id', 'label': 'label', });
lyr_Kulin_4.set('fieldAliases', {'id': 'id', 'label': 'label', });
lyr_EastVictorian_5.set('fieldAliases', {'id': 'id', 'label': 'label', });
lyr_YuinKuric_6.set('fieldAliases', {'id': 'id', 'label': 'label', });
lyr_CentralNSW_7.set('fieldAliases', {'id': 'id', 'label': 'label', });
lyr_Muruwari_8.set('fieldAliases', {'id': 'id', 'Label': 'Label', });
lyr_Anaiwan_9.set('fieldAliases', {'id': 'id', 'label': 'label', });
lyr_Victorian_10.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'label': 'label', });
lyr_LowerMurray_11.set('fieldAliases', {'id': 'id', 'label': 'label', });
lyr_VictorianProper_12.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'label': 'label', });
lyr_Kulin_13.set('fieldAliases', {'id': 'id', 'label': 'label', });
lyr_EastVictorian_14.set('fieldAliases', {'id': 'id', 'label': 'label', });
lyr_NSW_15.set('fieldAliases', {'id': 'id', 'label': 'label', 'layer': 'layer', 'path': 'path', });
lyr_YuinKuric_16.set('fieldAliases', {'id': 'id', 'label': 'label', });
lyr_CentralNSW_17.set('fieldAliases', {'id': 'id', 'label': 'label', });
lyr_Muruwari_18.set('fieldAliases', {'id': 'id', 'Label': 'Label', });
lyr_Anaiwan_19.set('fieldAliases', {'id': 'id', 'label': 'label', });
lyr_NorthCoast_20.set('fieldAliases', {'id': 'id', 'label': 'label', 'layer': 'layer', 'path': 'path', });
lyr_Durubalic_21.set('fieldAliases', {'id': 'id', 'label': 'label', });
lyr_Bandjalangic_22.set('fieldAliases', {'id': 'id', 'label': 'label', });
lyr_WakaKabic_23.set('fieldAliases', {'id': 'id', 'label': 'label', });
lyr_Bigambul_24.set('fieldAliases', {'id': 'id', 'Label': 'Label', });
lyr_Guyambal_25.set('fieldAliases', {'id': 'id', 'Label': 'Label', });
lyr_Gumbaynggirr_26.set('fieldAliases', {'id': 'id', 'Label': 'Label', });
lyr_Durubalic_27.set('fieldAliases', {'id': 'id', 'label': 'label', });
lyr_Bandjalangic_28.set('fieldAliases', {'id': 'id', 'label': 'label', });
lyr_WakaKabic_29.set('fieldAliases', {'id': 'id', 'label': 'label', });
lyr_Bigambul_30.set('fieldAliases', {'id': 'id', 'Label': 'Label', });
lyr_Guyambal_31.set('fieldAliases', {'id': 'id', 'Label': 'Label', });
lyr_Gumbaynggirr_32.set('fieldAliases', {'id': 'id', 'Label': 'Label', });
lyr_Paakintyi_33.set('fieldAliases', {'id': 'id', 'label': 'label', });
lyr_Yarli_34.set('fieldAliases', {'id': 'id', 'label': 'label', });
lyr_NorthwestNSW_35.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'label': 'label', });
lyr_Paakintyi_36.set('fieldAliases', {'id': 'id', 'label': 'label', });
lyr_Yarli_37.set('fieldAliases', {'id': 'id', 'label': 'label', });
lyr_Karnic_38.set('fieldAliases', {'id': 'id', 'label': 'label', });
lyr_SouthwestQueensland_39.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'label': 'label', });
lyr_NorthwestNSW_40.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'label': 'label', });
lyr_Paakintyi_41.set('fieldAliases', {'id': 'id', 'label': 'label', });
lyr_Yarli_42.set('fieldAliases', {'id': 'id', 'label': 'label', });
lyr_Karnic_43.set('fieldAliases', {'id': 'id', 'label': 'label', });
lyr_Ngura_44.set('fieldAliases', {'id': 'id', 'label': 'label', });
lyr_ThuraYuraArandic_45.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'label': 'label', });
lyr_ThuraYura_46.set('fieldAliases', {'id': 'id', 'label': 'label', });
lyr_Arandic_47.set('fieldAliases', {'id': 'id', 'label': 'label', });
lyr_ThuraYura_48.set('fieldAliases', {'id': 'id', 'label': 'label', });
lyr_Arandic_49.set('fieldAliases', {'id': 'id', 'label': 'label', });
lyr_Kalkatungic_50.set('fieldAliases', {'id': 'id', 'label': 'label', });
lyr_Mayabic_51.set('fieldAliases', {'id': 'id', 'label': 'label', });
lyr_Gulf_52.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'label': 'label', });
lyr_Kalkatungic_53.set('fieldAliases', {'id': 'id', 'label': 'label', });
lyr_Mayabic_54.set('fieldAliases', {'id': 'id', 'label': 'label', });
lyr_PamaMaric_55.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'label': 'label', });
lyr_Paman_56.set('fieldAliases', {'id': 'id', 'label': 'label', });
lyr_MaricLaguages_57.set('fieldAliases', {'id': 'id', 'label': 'label', });
lyr_Dyirbalic_58.set('fieldAliases', {'id': 'id', 'label': 'label', });
lyr_Paman_59.set('fieldAliases', {'id': 'id', 'label': 'label', });
lyr_MaricLaguages_60.set('fieldAliases', {'id': 'id', 'label': 'label', });
lyr_Dyirbalic_61.set('fieldAliases', {'id': 'id', 'label': 'label', });
lyr_Southeastern_62.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'label': 'label', });
lyr_Victorian_63.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'label': 'label', });
lyr_LowerMurray_64.set('fieldAliases', {'id': 'id', 'label': 'label', });
lyr_VictorianProper_65.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'label': 'label', });
lyr_Kulin_66.set('fieldAliases', {'id': 'id', 'label': 'label', });
lyr_EastVictorian_67.set('fieldAliases', {'id': 'id', 'label': 'label', });
lyr_NSW_68.set('fieldAliases', {'id': 'id', 'label': 'label', 'layer': 'layer', 'path': 'path', });
lyr_YuinKuric_69.set('fieldAliases', {'id': 'id', 'label': 'label', });
lyr_CentralNSW_70.set('fieldAliases', {'id': 'id', 'label': 'label', });
lyr_Muruwari_71.set('fieldAliases', {'id': 'id', 'Label': 'Label', });
lyr_Anaiwan_72.set('fieldAliases', {'id': 'id', 'label': 'label', });
lyr_NorthCoast_73.set('fieldAliases', {'id': 'id', 'label': 'label', 'layer': 'layer', 'path': 'path', });
lyr_Durubalic_74.set('fieldAliases', {'id': 'id', 'label': 'label', });
lyr_Bandjalangic_75.set('fieldAliases', {'id': 'id', 'label': 'label', });
lyr_WakaKabic_76.set('fieldAliases', {'id': 'id', 'label': 'label', });
lyr_Bigambul_77.set('fieldAliases', {'id': 'id', 'Label': 'Label', });
lyr_Guyambal_78.set('fieldAliases', {'id': 'id', 'Label': 'Label', });
lyr_Gumbaynggirr_79.set('fieldAliases', {'id': 'id', 'Label': 'Label', });
lyr_Central_80.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'label': 'label', });
lyr_SouthwestQueensland_81.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'label': 'label', });
lyr_NorthwestNSW_82.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'label': 'label', });
lyr_Paakintyi_83.set('fieldAliases', {'id': 'id', 'label': 'label', });
lyr_Yarli_84.set('fieldAliases', {'id': 'id', 'label': 'label', });
lyr_Karnic_85.set('fieldAliases', {'id': 'id', 'label': 'label', });
lyr_Ngura_86.set('fieldAliases', {'id': 'id', 'label': 'label', });
lyr_ThuraYuraArandic_87.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'label': 'label', });
lyr_ThuraYura_88.set('fieldAliases', {'id': 'id', 'label': 'label', });
lyr_Arandic_89.set('fieldAliases', {'id': 'id', 'label': 'label', });
lyr_Northern_90.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'label': 'label', });
lyr_Gulf_91.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'label': 'label', });
lyr_Kalkatungic_92.set('fieldAliases', {'id': 'id', 'label': 'label', });
lyr_Mayabic_93.set('fieldAliases', {'id': 'id', 'label': 'label', });
lyr_PamaMaric_94.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'label': 'label', });
lyr_Paman_95.set('fieldAliases', {'id': 'id', 'label': 'label', });
lyr_MaricLaguages_96.set('fieldAliases', {'id': 'id', 'label': 'label', });
lyr_Dyirbalic_97.set('fieldAliases', {'id': 'id', 'label': 'label', });
lyr_Western_98.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'label': 'label', });
lyr_YolnguWarluwaric_99.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'label': 'label', });
lyr_Warluwaric_100.set('fieldAliases', {'id': 'id', 'label': 'label', });
lyr_Yolngu_101.set('fieldAliases', {'id': 'id', 'label': 'label', });
lyr_Nyungic_102.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'label': 'label', });
lyr_Desert_103.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'label': 'label', });
lyr_Marrngu_104.set('fieldAliases', {'id': 'id', 'label': 'label', });
lyr_NgumpinYapa_105.set('fieldAliases', {'id': 'id', 'label': 'label', });
lyr_Western_Desert_106.set('fieldAliases', {'id': 'id', 'label': 'label', });
lyr_Southwestern_107.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'label': 'label', });
lyr_Pilbara_108.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'label': 'label', });
lyr_KanyaraMantharta_109.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'label': 'label', });
lyr_Mantharta_110.set('fieldAliases', {'id': 'id', 'label': 'label', });
lyr_Kanyara_111.set('fieldAliases', {'id': 'id', 'label': 'label', });
lyr_Ngayarda_112.set('fieldAliases', {'id': 'id', 'label': 'label', });
lyr_Nyungic_113.set('fieldAliases', {'id': 'id', 'label': 'label', });
lyr_Kartu_114.set('fieldAliases', {'id': 'id', 'label': 'label', });
lyr_Mirning_115.set('fieldAliases', {'id': 'id', 'label': 'label', });
lyr_Warluwaric_116.set('fieldAliases', {'id': 'id', 'label': 'label', });
lyr_Yolngu_117.set('fieldAliases', {'id': 'id', 'label': 'label', });
lyr_YolnguWarluwaric_118.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'label': 'label', });
lyr_Warluwaric_119.set('fieldAliases', {'id': 'id', 'label': 'label', });
lyr_Yolngu_120.set('fieldAliases', {'id': 'id', 'label': 'label', });
lyr_Nyungic_121.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'label': 'label', });
lyr_Desert_122.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'label': 'label', });
lyr_Marrngu_123.set('fieldAliases', {'id': 'id', 'label': 'label', });
lyr_NgumpinYapa_124.set('fieldAliases', {'id': 'id', 'label': 'label', });
lyr_Western_Desert_125.set('fieldAliases', {'id': 'id', 'label': 'label', });
lyr_Southwestern_126.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'label': 'label', });
lyr_Pilbara_127.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'label': 'label', });
lyr_KanyaraMantharta_128.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'label': 'label', });
lyr_Mantharta_129.set('fieldAliases', {'id': 'id', 'label': 'label', });
lyr_Kanyara_130.set('fieldAliases', {'id': 'id', 'label': 'label', });
lyr_Ngayarda_131.set('fieldAliases', {'id': 'id', 'label': 'label', });
lyr_Nyungic_132.set('fieldAliases', {'id': 'id', 'label': 'label', });
lyr_Kartu_133.set('fieldAliases', {'id': 'id', 'label': 'label', });
lyr_Mirning_134.set('fieldAliases', {'id': 'id', 'label': 'label', });
lyr_Marrngu_135.set('fieldAliases', {'id': 'id', 'label': 'label', });
lyr_NgumpinYapa_136.set('fieldAliases', {'id': 'id', 'label': 'label', });
lyr_Western_Desert_137.set('fieldAliases', {'id': 'id', 'label': 'label', });
lyr_Desert_138.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'label': 'label', });
lyr_Marrngu_139.set('fieldAliases', {'id': 'id', 'label': 'label', });
lyr_NgumpinYapa_140.set('fieldAliases', {'id': 'id', 'label': 'label', });
lyr_Western_Desert_141.set('fieldAliases', {'id': 'id', 'label': 'label', });
lyr_Southwestern_142.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'label': 'label', });
lyr_Pilbara_143.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'label': 'label', });
lyr_KanyaraMantharta_144.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'label': 'label', });
lyr_Mantharta_145.set('fieldAliases', {'id': 'id', 'label': 'label', });
lyr_Kanyara_146.set('fieldAliases', {'id': 'id', 'label': 'label', });
lyr_Ngayarda_147.set('fieldAliases', {'id': 'id', 'label': 'label', });
lyr_Nyungic_148.set('fieldAliases', {'id': 'id', 'label': 'label', });
lyr_Kartu_149.set('fieldAliases', {'id': 'id', 'label': 'label', });
lyr_Mirning_150.set('fieldAliases', {'id': 'id', 'label': 'label', });
lyr_Mantharta_151.set('fieldAliases', {'id': 'id', 'label': 'label', });
lyr_Kanyara_152.set('fieldAliases', {'id': 'id', 'label': 'label', });
lyr_KanyaraMantharta_153.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'label': 'label', });
lyr_Mantharta_154.set('fieldAliases', {'id': 'id', 'label': 'label', });
lyr_Kanyara_155.set('fieldAliases', {'id': 'id', 'label': 'label', });
lyr_Ngayarda_156.set('fieldAliases', {'id': 'id', 'label': 'label', });
lyr_Pilbara_157.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'label': 'label', });
lyr_KanyaraMantharta_158.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'label': 'label', });
lyr_Mantharta_159.set('fieldAliases', {'id': 'id', 'label': 'label', });
lyr_Kanyara_160.set('fieldAliases', {'id': 'id', 'label': 'label', });
lyr_Ngayarda_161.set('fieldAliases', {'id': 'id', 'label': 'label', });
lyr_Nyungic_162.set('fieldAliases', {'id': 'id', 'label': 'label', });
lyr_Kartu_163.set('fieldAliases', {'id': 'id', 'label': 'label', });
lyr_Mirning_164.set('fieldAliases', {'id': 'id', 'label': 'label', });
lyr_PamaNyungan_166.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'label': 'label', });
lyr_IndividualLanguages_167.set('fieldAliases', {'language_code': 'Language Code', 'language_name': 'Language Name', 'language_synonym': 'Other Names', 'thesaurus_heading_language': 'thesaurus_heading_language', 'approximate_latitude_of_language_variety': 'approximate_latitude_of_language_variety', 'approximate_longitude_of_language_variety': 'approximate_longitude_of_language_variety', 'uri': 'URI', });
lyr_LowerMurray_0.set('fieldImages', {'id': 'Hidden', 'label': 'TextEdit', });
lyr_VictorianProper_1.set('fieldImages', {'fid': 'Hidden', 'id': 'Hidden', 'label': 'TextEdit', });
lyr_Kulin_2.set('fieldImages', {'id': 'Hidden', 'label': 'TextEdit', });
lyr_EastVictorian_3.set('fieldImages', {'id': 'Hidden', 'label': 'TextEdit', });
lyr_Kulin_4.set('fieldImages', {'id': 'Hidden', 'label': 'TextEdit', });
lyr_EastVictorian_5.set('fieldImages', {'id': 'Hidden', 'label': 'TextEdit', });
lyr_YuinKuric_6.set('fieldImages', {'id': 'Hidden', 'label': 'TextEdit', });
lyr_CentralNSW_7.set('fieldImages', {'id': 'Hidden', 'label': 'TextEdit', });
lyr_Muruwari_8.set('fieldImages', {'id': 'Hidden', 'Label': '', });
lyr_Anaiwan_9.set('fieldImages', {'id': 'Hidden', 'label': 'TextEdit', });
lyr_Victorian_10.set('fieldImages', {'fid': 'Hidden', 'id': 'Hidden', 'label': 'TextEdit', });
lyr_LowerMurray_11.set('fieldImages', {'id': 'Hidden', 'label': 'TextEdit', });
lyr_VictorianProper_12.set('fieldImages', {'fid': 'Hidden', 'id': 'Hidden', 'label': 'TextEdit', });
lyr_Kulin_13.set('fieldImages', {'id': 'Hidden', 'label': 'TextEdit', });
lyr_EastVictorian_14.set('fieldImages', {'id': 'Hidden', 'label': 'TextEdit', });
lyr_NSW_15.set('fieldImages', {'id': 'Hidden', 'label': 'TextEdit', 'layer': 'Hidden', 'path': 'Hidden', });
lyr_YuinKuric_16.set('fieldImages', {'id': 'Hidden', 'label': 'TextEdit', });
lyr_CentralNSW_17.set('fieldImages', {'id': 'Hidden', 'label': 'TextEdit', });
lyr_Muruwari_18.set('fieldImages', {'id': 'Hidden', 'Label': '', });
lyr_Anaiwan_19.set('fieldImages', {'id': 'Hidden', 'label': 'TextEdit', });
lyr_NorthCoast_20.set('fieldImages', {'id': 'Hidden', 'label': 'TextEdit', 'layer': 'Hidden', 'path': 'Hidden', });
lyr_Durubalic_21.set('fieldImages', {'id': 'Hidden', 'label': 'TextEdit', });
lyr_Bandjalangic_22.set('fieldImages', {'id': 'Hidden', 'label': 'TextEdit', });
lyr_WakaKabic_23.set('fieldImages', {'id': 'Hidden', 'label': 'TextEdit', });
lyr_Bigambul_24.set('fieldImages', {'id': 'Hidden', 'Label': '', });
lyr_Guyambal_25.set('fieldImages', {'id': 'Hidden', 'Label': '', });
lyr_Gumbaynggirr_26.set('fieldImages', {'id': 'Hidden', 'Label': '', });
lyr_Durubalic_27.set('fieldImages', {'id': 'Hidden', 'label': 'TextEdit', });
lyr_Bandjalangic_28.set('fieldImages', {'id': 'Hidden', 'label': 'TextEdit', });
lyr_WakaKabic_29.set('fieldImages', {'id': 'Hidden', 'label': 'TextEdit', });
lyr_Bigambul_30.set('fieldImages', {'id': 'Hidden', 'Label': '', });
lyr_Guyambal_31.set('fieldImages', {'id': 'Hidden', 'Label': '', });
lyr_Gumbaynggirr_32.set('fieldImages', {'id': 'Hidden', 'Label': '', });
lyr_Paakintyi_33.set('fieldImages', {'id': 'Hidden', 'label': 'TextEdit', });
lyr_Yarli_34.set('fieldImages', {'id': 'Hidden', 'label': 'TextEdit', });
lyr_NorthwestNSW_35.set('fieldImages', {'fid': 'Hidden', 'id': 'Hidden', 'label': 'TextEdit', });
lyr_Paakintyi_36.set('fieldImages', {'id': 'Hidden', 'label': 'TextEdit', });
lyr_Yarli_37.set('fieldImages', {'id': 'Hidden', 'label': 'TextEdit', });
lyr_Karnic_38.set('fieldImages', {'id': 'Hidden', 'label': 'TextEdit', });
lyr_SouthwestQueensland_39.set('fieldImages', {'fid': 'Hidden', 'id': 'Hidden', 'label': 'TextEdit', });
lyr_NorthwestNSW_40.set('fieldImages', {'fid': 'Hidden', 'id': 'Hidden', 'label': 'TextEdit', });
lyr_Paakintyi_41.set('fieldImages', {'id': 'Hidden', 'label': 'TextEdit', });
lyr_Yarli_42.set('fieldImages', {'id': 'Hidden', 'label': 'TextEdit', });
lyr_Karnic_43.set('fieldImages', {'id': 'Hidden', 'label': 'TextEdit', });
lyr_Ngura_44.set('fieldImages', {'id': 'Hidden', 'label': 'TextEdit', });
lyr_ThuraYuraArandic_45.set('fieldImages', {'fid': 'Hidden', 'id': 'Hidden', 'label': 'TextEdit', });
lyr_ThuraYura_46.set('fieldImages', {'id': 'Hidden', 'label': 'TextEdit', });
lyr_Arandic_47.set('fieldImages', {'id': 'Hidden', 'label': 'TextEdit', });
lyr_ThuraYura_48.set('fieldImages', {'id': 'Hidden', 'label': 'TextEdit', });
lyr_Arandic_49.set('fieldImages', {'id': 'Hidden', 'label': 'TextEdit', });
lyr_Kalkatungic_50.set('fieldImages', {'id': 'Hidden', 'label': 'TextEdit', });
lyr_Mayabic_51.set('fieldImages', {'id': 'Hidden', 'label': 'TextEdit', });
lyr_Gulf_52.set('fieldImages', {'fid': 'Hidden', 'id': 'Hidden', 'label': 'TextEdit', });
lyr_Kalkatungic_53.set('fieldImages', {'id': 'Hidden', 'label': 'TextEdit', });
lyr_Mayabic_54.set('fieldImages', {'id': 'Hidden', 'label': 'TextEdit', });
lyr_PamaMaric_55.set('fieldImages', {'fid': 'Hidden', 'id': 'Hidden', 'label': 'TextEdit', });
lyr_Paman_56.set('fieldImages', {'id': 'Hidden', 'label': 'TextEdit', });
lyr_MaricLaguages_57.set('fieldImages', {'id': 'Hidden', 'label': 'TextEdit', });
lyr_Dyirbalic_58.set('fieldImages', {'id': 'Hidden', 'label': 'TextEdit', });
lyr_Paman_59.set('fieldImages', {'id': 'Hidden', 'label': 'TextEdit', });
lyr_MaricLaguages_60.set('fieldImages', {'id': 'Hidden', 'label': 'TextEdit', });
lyr_Dyirbalic_61.set('fieldImages', {'id': 'Hidden', 'label': 'TextEdit', });
lyr_Southeastern_62.set('fieldImages', {'fid': 'Hidden', 'id': 'Hidden', 'label': 'TextEdit', });
lyr_Victorian_63.set('fieldImages', {'fid': 'Hidden', 'id': 'Hidden', 'label': 'TextEdit', });
lyr_LowerMurray_64.set('fieldImages', {'id': 'Hidden', 'label': 'TextEdit', });
lyr_VictorianProper_65.set('fieldImages', {'fid': 'Hidden', 'id': 'Hidden', 'label': 'TextEdit', });
lyr_Kulin_66.set('fieldImages', {'id': 'Hidden', 'label': 'TextEdit', });
lyr_EastVictorian_67.set('fieldImages', {'id': 'Hidden', 'label': 'TextEdit', });
lyr_NSW_68.set('fieldImages', {'id': 'Hidden', 'label': 'TextEdit', 'layer': 'Hidden', 'path': 'Hidden', });
lyr_YuinKuric_69.set('fieldImages', {'id': 'Hidden', 'label': 'TextEdit', });
lyr_CentralNSW_70.set('fieldImages', {'id': 'Hidden', 'label': 'TextEdit', });
lyr_Muruwari_71.set('fieldImages', {'id': 'Hidden', 'Label': '', });
lyr_Anaiwan_72.set('fieldImages', {'id': 'Hidden', 'label': 'TextEdit', });
lyr_NorthCoast_73.set('fieldImages', {'id': 'Hidden', 'label': 'TextEdit', 'layer': 'Hidden', 'path': 'Hidden', });
lyr_Durubalic_74.set('fieldImages', {'id': 'Hidden', 'label': 'TextEdit', });
lyr_Bandjalangic_75.set('fieldImages', {'id': 'Hidden', 'label': 'TextEdit', });
lyr_WakaKabic_76.set('fieldImages', {'id': 'Hidden', 'label': 'TextEdit', });
lyr_Bigambul_77.set('fieldImages', {'id': 'Hidden', 'Label': '', });
lyr_Guyambal_78.set('fieldImages', {'id': 'Hidden', 'Label': '', });
lyr_Gumbaynggirr_79.set('fieldImages', {'id': 'Hidden', 'Label': '', });
lyr_Central_80.set('fieldImages', {'fid': 'Hidden', 'id': 'Hidden', 'label': 'TextEdit', });
lyr_SouthwestQueensland_81.set('fieldImages', {'fid': 'Hidden', 'id': 'Hidden', 'label': 'TextEdit', });
lyr_NorthwestNSW_82.set('fieldImages', {'fid': 'Hidden', 'id': 'Hidden', 'label': 'TextEdit', });
lyr_Paakintyi_83.set('fieldImages', {'id': 'Hidden', 'label': 'TextEdit', });
lyr_Yarli_84.set('fieldImages', {'id': 'Hidden', 'label': 'TextEdit', });
lyr_Karnic_85.set('fieldImages', {'id': 'Hidden', 'label': 'TextEdit', });
lyr_Ngura_86.set('fieldImages', {'id': 'Hidden', 'label': 'TextEdit', });
lyr_ThuraYuraArandic_87.set('fieldImages', {'fid': 'Hidden', 'id': 'Hidden', 'label': 'TextEdit', });
lyr_ThuraYura_88.set('fieldImages', {'id': 'Hidden', 'label': 'TextEdit', });
lyr_Arandic_89.set('fieldImages', {'id': 'Hidden', 'label': 'TextEdit', });
lyr_Northern_90.set('fieldImages', {'fid': 'Hidden', 'id': 'Hidden', 'label': 'TextEdit', });
lyr_Gulf_91.set('fieldImages', {'fid': 'Hidden', 'id': 'Hidden', 'label': 'TextEdit', });
lyr_Kalkatungic_92.set('fieldImages', {'id': 'Hidden', 'label': 'TextEdit', });
lyr_Mayabic_93.set('fieldImages', {'id': 'Hidden', 'label': 'TextEdit', });
lyr_PamaMaric_94.set('fieldImages', {'fid': 'Hidden', 'id': 'Hidden', 'label': 'TextEdit', });
lyr_Paman_95.set('fieldImages', {'id': 'Hidden', 'label': 'TextEdit', });
lyr_MaricLaguages_96.set('fieldImages', {'id': 'Hidden', 'label': 'TextEdit', });
lyr_Dyirbalic_97.set('fieldImages', {'id': 'Hidden', 'label': 'TextEdit', });
lyr_Western_98.set('fieldImages', {'fid': 'Hidden', 'id': 'Hidden', 'label': 'TextEdit', });
lyr_YolnguWarluwaric_99.set('fieldImages', {'fid': 'Hidden', 'id': 'Hidden', 'label': 'TextEdit', });
lyr_Warluwaric_100.set('fieldImages', {'id': 'Hidden', 'label': 'TextEdit', });
lyr_Yolngu_101.set('fieldImages', {'id': 'Hidden', 'label': 'TextEdit', });
lyr_Nyungic_102.set('fieldImages', {'fid': 'Hidden', 'id': 'Hidden', 'label': 'TextEdit', });
lyr_Desert_103.set('fieldImages', {'fid': 'Hidden', 'id': 'Hidden', 'label': 'TextEdit', });
lyr_Marrngu_104.set('fieldImages', {'id': 'Hidden', 'label': 'TextEdit', });
lyr_NgumpinYapa_105.set('fieldImages', {'id': 'Hidden', 'label': 'TextEdit', });
lyr_Western_Desert_106.set('fieldImages', {'id': 'Hidden', 'label': 'TextEdit', });
lyr_Southwestern_107.set('fieldImages', {'fid': 'Hidden', 'id': 'Hidden', 'label': 'TextEdit', });
lyr_Pilbara_108.set('fieldImages', {'fid': 'Hidden', 'id': 'Hidden', 'label': 'TextEdit', });
lyr_KanyaraMantharta_109.set('fieldImages', {'fid': 'Hidden', 'id': 'Hidden', 'label': 'TextEdit', });
lyr_Mantharta_110.set('fieldImages', {'id': 'Hidden', 'label': 'TextEdit', });
lyr_Kanyara_111.set('fieldImages', {'id': 'Hidden', 'label': 'TextEdit', });
lyr_Ngayarda_112.set('fieldImages', {'id': 'Hidden', 'label': 'TextEdit', });
lyr_Nyungic_113.set('fieldImages', {'id': 'Hidden', 'label': 'TextEdit', });
lyr_Kartu_114.set('fieldImages', {'id': 'Hidden', 'label': 'TextEdit', });
lyr_Mirning_115.set('fieldImages', {'id': 'Hidden', 'label': 'TextEdit', });
lyr_Warluwaric_116.set('fieldImages', {'id': 'Hidden', 'label': 'TextEdit', });
lyr_Yolngu_117.set('fieldImages', {'id': 'Hidden', 'label': 'TextEdit', });
lyr_YolnguWarluwaric_118.set('fieldImages', {'fid': 'Hidden', 'id': 'Hidden', 'label': 'TextEdit', });
lyr_Warluwaric_119.set('fieldImages', {'id': 'Hidden', 'label': 'TextEdit', });
lyr_Yolngu_120.set('fieldImages', {'id': 'Hidden', 'label': 'TextEdit', });
lyr_Nyungic_121.set('fieldImages', {'fid': 'Hidden', 'id': 'Hidden', 'label': 'TextEdit', });
lyr_Desert_122.set('fieldImages', {'fid': 'Hidden', 'id': 'Hidden', 'label': 'TextEdit', });
lyr_Marrngu_123.set('fieldImages', {'id': 'Hidden', 'label': 'TextEdit', });
lyr_NgumpinYapa_124.set('fieldImages', {'id': 'Hidden', 'label': 'TextEdit', });
lyr_Western_Desert_125.set('fieldImages', {'id': 'Hidden', 'label': 'TextEdit', });
lyr_Southwestern_126.set('fieldImages', {'fid': 'Hidden', 'id': 'Hidden', 'label': 'TextEdit', });
lyr_Pilbara_127.set('fieldImages', {'fid': 'Hidden', 'id': 'Hidden', 'label': 'TextEdit', });
lyr_KanyaraMantharta_128.set('fieldImages', {'fid': 'Hidden', 'id': 'Hidden', 'label': 'TextEdit', });
lyr_Mantharta_129.set('fieldImages', {'id': 'Hidden', 'label': 'TextEdit', });
lyr_Kanyara_130.set('fieldImages', {'id': 'Hidden', 'label': 'TextEdit', });
lyr_Ngayarda_131.set('fieldImages', {'id': 'Hidden', 'label': 'TextEdit', });
lyr_Nyungic_132.set('fieldImages', {'id': 'Hidden', 'label': 'TextEdit', });
lyr_Kartu_133.set('fieldImages', {'id': 'Hidden', 'label': 'TextEdit', });
lyr_Mirning_134.set('fieldImages', {'id': 'Hidden', 'label': 'TextEdit', });
lyr_Marrngu_135.set('fieldImages', {'id': 'Hidden', 'label': 'TextEdit', });
lyr_NgumpinYapa_136.set('fieldImages', {'id': 'Hidden', 'label': 'TextEdit', });
lyr_Western_Desert_137.set('fieldImages', {'id': 'Hidden', 'label': 'TextEdit', });
lyr_Desert_138.set('fieldImages', {'fid': 'Hidden', 'id': 'Hidden', 'label': 'TextEdit', });
lyr_Marrngu_139.set('fieldImages', {'id': 'Hidden', 'label': 'TextEdit', });
lyr_NgumpinYapa_140.set('fieldImages', {'id': 'Hidden', 'label': 'TextEdit', });
lyr_Western_Desert_141.set('fieldImages', {'id': 'Hidden', 'label': 'TextEdit', });
lyr_Southwestern_142.set('fieldImages', {'fid': 'Hidden', 'id': 'Hidden', 'label': 'TextEdit', });
lyr_Pilbara_143.set('fieldImages', {'fid': 'Hidden', 'id': 'Hidden', 'label': 'TextEdit', });
lyr_KanyaraMantharta_144.set('fieldImages', {'fid': 'Hidden', 'id': 'Hidden', 'label': 'TextEdit', });
lyr_Mantharta_145.set('fieldImages', {'id': 'Hidden', 'label': 'TextEdit', });
lyr_Kanyara_146.set('fieldImages', {'id': 'Hidden', 'label': 'TextEdit', });
lyr_Ngayarda_147.set('fieldImages', {'id': 'Hidden', 'label': 'TextEdit', });
lyr_Nyungic_148.set('fieldImages', {'id': 'Hidden', 'label': 'TextEdit', });
lyr_Kartu_149.set('fieldImages', {'id': 'Hidden', 'label': 'TextEdit', });
lyr_Mirning_150.set('fieldImages', {'id': 'Hidden', 'label': 'TextEdit', });
lyr_Mantharta_151.set('fieldImages', {'id': 'Hidden', 'label': 'TextEdit', });
lyr_Kanyara_152.set('fieldImages', {'id': 'Hidden', 'label': 'TextEdit', });
lyr_KanyaraMantharta_153.set('fieldImages', {'fid': 'Hidden', 'id': 'Hidden', 'label': 'TextEdit', });
lyr_Mantharta_154.set('fieldImages', {'id': 'Hidden', 'label': 'TextEdit', });
lyr_Kanyara_155.set('fieldImages', {'id': 'Hidden', 'label': 'TextEdit', });
lyr_Ngayarda_156.set('fieldImages', {'id': 'Hidden', 'label': 'TextEdit', });
lyr_Pilbara_157.set('fieldImages', {'fid': 'Hidden', 'id': 'Hidden', 'label': 'TextEdit', });
lyr_KanyaraMantharta_158.set('fieldImages', {'fid': 'Hidden', 'id': 'Hidden', 'label': 'TextEdit', });
lyr_Mantharta_159.set('fieldImages', {'id': 'Hidden', 'label': 'TextEdit', });
lyr_Kanyara_160.set('fieldImages', {'id': 'Hidden', 'label': 'TextEdit', });
lyr_Ngayarda_161.set('fieldImages', {'id': 'Hidden', 'label': 'TextEdit', });
lyr_Nyungic_162.set('fieldImages', {'id': 'Hidden', 'label': 'TextEdit', });
lyr_Kartu_163.set('fieldImages', {'id': 'Hidden', 'label': 'TextEdit', });
lyr_Mirning_164.set('fieldImages', {'id': 'Hidden', 'label': 'TextEdit', });
lyr_PamaNyungan_166.set('fieldImages', {'fid': 'Hidden', 'id': 'Hidden', 'label': 'TextEdit', });
lyr_IndividualLanguages_167.set('fieldImages', {'language_code': 'TextEdit', 'language_name': 'TextEdit', 'language_synonym': 'Hidden', 'thesaurus_heading_language': 'Hidden', 'approximate_latitude_of_language_variety': 'Hidden', 'approximate_longitude_of_language_variety': 'Hidden', 'uri': 'TextEdit', });
lyr_LowerMurray_0.set('fieldLabels', {});
lyr_VictorianProper_1.set('fieldLabels', {});
lyr_Kulin_2.set('fieldLabels', {});
lyr_EastVictorian_3.set('fieldLabels', {});
lyr_Kulin_4.set('fieldLabels', {});
lyr_EastVictorian_5.set('fieldLabels', {});
lyr_YuinKuric_6.set('fieldLabels', {});
lyr_CentralNSW_7.set('fieldLabels', {});
lyr_Muruwari_8.set('fieldLabels', {});
lyr_Anaiwan_9.set('fieldLabels', {});
lyr_Victorian_10.set('fieldLabels', {});
lyr_LowerMurray_11.set('fieldLabels', {});
lyr_VictorianProper_12.set('fieldLabels', {});
lyr_Kulin_13.set('fieldLabels', {});
lyr_EastVictorian_14.set('fieldLabels', {});
lyr_NSW_15.set('fieldLabels', {});
lyr_YuinKuric_16.set('fieldLabels', {});
lyr_CentralNSW_17.set('fieldLabels', {});
lyr_Muruwari_18.set('fieldLabels', {});
lyr_Anaiwan_19.set('fieldLabels', {});
lyr_NorthCoast_20.set('fieldLabels', {});
lyr_Durubalic_21.set('fieldLabels', {});
lyr_Bandjalangic_22.set('fieldLabels', {});
lyr_WakaKabic_23.set('fieldLabels', {});
lyr_Bigambul_24.set('fieldLabels', {});
lyr_Guyambal_25.set('fieldLabels', {});
lyr_Gumbaynggirr_26.set('fieldLabels', {});
lyr_Durubalic_27.set('fieldLabels', {});
lyr_Bandjalangic_28.set('fieldLabels', {});
lyr_WakaKabic_29.set('fieldLabels', {});
lyr_Bigambul_30.set('fieldLabels', {});
lyr_Guyambal_31.set('fieldLabels', {});
lyr_Gumbaynggirr_32.set('fieldLabels', {});
lyr_Paakintyi_33.set('fieldLabels', {});
lyr_Yarli_34.set('fieldLabels', {});
lyr_NorthwestNSW_35.set('fieldLabels', {});
lyr_Paakintyi_36.set('fieldLabels', {});
lyr_Yarli_37.set('fieldLabels', {});
lyr_Karnic_38.set('fieldLabels', {});
lyr_SouthwestQueensland_39.set('fieldLabels', {});
lyr_NorthwestNSW_40.set('fieldLabels', {});
lyr_Paakintyi_41.set('fieldLabels', {});
lyr_Yarli_42.set('fieldLabels', {});
lyr_Karnic_43.set('fieldLabels', {});
lyr_Ngura_44.set('fieldLabels', {});
lyr_ThuraYuraArandic_45.set('fieldLabels', {});
lyr_ThuraYura_46.set('fieldLabels', {});
lyr_Arandic_47.set('fieldLabels', {});
lyr_ThuraYura_48.set('fieldLabels', {});
lyr_Arandic_49.set('fieldLabels', {});
lyr_Kalkatungic_50.set('fieldLabels', {});
lyr_Mayabic_51.set('fieldLabels', {});
lyr_Gulf_52.set('fieldLabels', {});
lyr_Kalkatungic_53.set('fieldLabels', {});
lyr_Mayabic_54.set('fieldLabels', {});
lyr_PamaMaric_55.set('fieldLabels', {});
lyr_Paman_56.set('fieldLabels', {});
lyr_MaricLaguages_57.set('fieldLabels', {});
lyr_Dyirbalic_58.set('fieldLabels', {});
lyr_Paman_59.set('fieldLabels', {});
lyr_MaricLaguages_60.set('fieldLabels', {});
lyr_Dyirbalic_61.set('fieldLabels', {});
lyr_Southeastern_62.set('fieldLabels', {});
lyr_Victorian_63.set('fieldLabels', {});
lyr_LowerMurray_64.set('fieldLabels', {});
lyr_VictorianProper_65.set('fieldLabels', {});
lyr_Kulin_66.set('fieldLabels', {});
lyr_EastVictorian_67.set('fieldLabels', {});
lyr_NSW_68.set('fieldLabels', {});
lyr_YuinKuric_69.set('fieldLabels', {});
lyr_CentralNSW_70.set('fieldLabels', {});
lyr_Muruwari_71.set('fieldLabels', {});
lyr_Anaiwan_72.set('fieldLabels', {});
lyr_NorthCoast_73.set('fieldLabels', {});
lyr_Durubalic_74.set('fieldLabels', {});
lyr_Bandjalangic_75.set('fieldLabels', {});
lyr_WakaKabic_76.set('fieldLabels', {});
lyr_Bigambul_77.set('fieldLabels', {});
lyr_Guyambal_78.set('fieldLabels', {});
lyr_Gumbaynggirr_79.set('fieldLabels', {});
lyr_Central_80.set('fieldLabels', {});
lyr_SouthwestQueensland_81.set('fieldLabels', {});
lyr_NorthwestNSW_82.set('fieldLabels', {});
lyr_Paakintyi_83.set('fieldLabels', {});
lyr_Yarli_84.set('fieldLabels', {});
lyr_Karnic_85.set('fieldLabels', {});
lyr_Ngura_86.set('fieldLabels', {});
lyr_ThuraYuraArandic_87.set('fieldLabels', {});
lyr_ThuraYura_88.set('fieldLabels', {});
lyr_Arandic_89.set('fieldLabels', {});
lyr_Northern_90.set('fieldLabels', {});
lyr_Gulf_91.set('fieldLabels', {});
lyr_Kalkatungic_92.set('fieldLabels', {});
lyr_Mayabic_93.set('fieldLabels', {});
lyr_PamaMaric_94.set('fieldLabels', {});
lyr_Paman_95.set('fieldLabels', {});
lyr_MaricLaguages_96.set('fieldLabels', {});
lyr_Dyirbalic_97.set('fieldLabels', {});
lyr_Western_98.set('fieldLabels', {});
lyr_YolnguWarluwaric_99.set('fieldLabels', {});
lyr_Warluwaric_100.set('fieldLabels', {});
lyr_Yolngu_101.set('fieldLabels', {});
lyr_Nyungic_102.set('fieldLabels', {});
lyr_Desert_103.set('fieldLabels', {});
lyr_Marrngu_104.set('fieldLabels', {});
lyr_NgumpinYapa_105.set('fieldLabels', {});
lyr_Western_Desert_106.set('fieldLabels', {});
lyr_Southwestern_107.set('fieldLabels', {});
lyr_Pilbara_108.set('fieldLabels', {});
lyr_KanyaraMantharta_109.set('fieldLabels', {});
lyr_Mantharta_110.set('fieldLabels', {});
lyr_Kanyara_111.set('fieldLabels', {});
lyr_Ngayarda_112.set('fieldLabels', {});
lyr_Nyungic_113.set('fieldLabels', {});
lyr_Kartu_114.set('fieldLabels', {});
lyr_Mirning_115.set('fieldLabels', {});
lyr_Warluwaric_116.set('fieldLabels', {});
lyr_Yolngu_117.set('fieldLabels', {});
lyr_YolnguWarluwaric_118.set('fieldLabels', {});
lyr_Warluwaric_119.set('fieldLabels', {});
lyr_Yolngu_120.set('fieldLabels', {});
lyr_Nyungic_121.set('fieldLabels', {});
lyr_Desert_122.set('fieldLabels', {});
lyr_Marrngu_123.set('fieldLabels', {});
lyr_NgumpinYapa_124.set('fieldLabels', {});
lyr_Western_Desert_125.set('fieldLabels', {});
lyr_Southwestern_126.set('fieldLabels', {});
lyr_Pilbara_127.set('fieldLabels', {});
lyr_KanyaraMantharta_128.set('fieldLabels', {});
lyr_Mantharta_129.set('fieldLabels', {});
lyr_Kanyara_130.set('fieldLabels', {});
lyr_Ngayarda_131.set('fieldLabels', {});
lyr_Nyungic_132.set('fieldLabels', {});
lyr_Kartu_133.set('fieldLabels', {});
lyr_Mirning_134.set('fieldLabels', {});
lyr_Marrngu_135.set('fieldLabels', {});
lyr_NgumpinYapa_136.set('fieldLabels', {});
lyr_Western_Desert_137.set('fieldLabels', {});
lyr_Desert_138.set('fieldLabels', {});
lyr_Marrngu_139.set('fieldLabels', {});
lyr_NgumpinYapa_140.set('fieldLabels', {});
lyr_Western_Desert_141.set('fieldLabels', {});
lyr_Southwestern_142.set('fieldLabels', {});
lyr_Pilbara_143.set('fieldLabels', {});
lyr_KanyaraMantharta_144.set('fieldLabels', {});
lyr_Mantharta_145.set('fieldLabels', {});
lyr_Kanyara_146.set('fieldLabels', {});
lyr_Ngayarda_147.set('fieldLabels', {});
lyr_Nyungic_148.set('fieldLabels', {});
lyr_Kartu_149.set('fieldLabels', {});
lyr_Mirning_150.set('fieldLabels', {});
lyr_Mantharta_151.set('fieldLabels', {});
lyr_Kanyara_152.set('fieldLabels', {});
lyr_KanyaraMantharta_153.set('fieldLabels', {});
lyr_Mantharta_154.set('fieldLabels', {});
lyr_Kanyara_155.set('fieldLabels', {});
lyr_Ngayarda_156.set('fieldLabels', {});
lyr_Pilbara_157.set('fieldLabels', {});
lyr_KanyaraMantharta_158.set('fieldLabels', {});
lyr_Mantharta_159.set('fieldLabels', {});
lyr_Kanyara_160.set('fieldLabels', {});
lyr_Ngayarda_161.set('fieldLabels', {});
lyr_Nyungic_162.set('fieldLabels', {});
lyr_Kartu_163.set('fieldLabels', {});
lyr_Mirning_164.set('fieldLabels', {});
lyr_PamaNyungan_166.set('fieldLabels', {'label': 'no label', });
lyr_IndividualLanguages_167.set('fieldLabels', {'language_code': 'inline label', 'language_name': 'no label', 'uri': 'no label', });
lyr_IndividualLanguages_167.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});