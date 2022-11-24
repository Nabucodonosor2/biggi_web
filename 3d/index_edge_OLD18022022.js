/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'img3d',
                            type: 'image',
                            rect: ['0px', '0px', '1170px', '551px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"img3d.jpg",'0px','0px']
                        },
                        {
                            id: 'SaladBarRef',
                            symbolName: 'SaladBarRef',
                            type: 'rect',
                            rect: ['0px', '301px', '365', '250', 'auto', 'auto']
                        },
                        {
                            id: 'VitRefPsasnte',
                            symbolName: 'CEDE',
                            type: 'rect',
                            rect: ['0px', '301px', '365', '250', 'auto', 'auto']
                        },
                        {
                            id: 'ModNeutro',
                            symbolName: 'ModNeutro',
                            type: 'rect',
                            rect: ['0px', '301px', '365', '250', 'auto', 'auto']
                        },
                        {
                            id: 'AutoservBanoMaria',
                            symbolName: 'AutoservBanoMaria',
                            type: 'rect',
                            rect: ['0px', '301px', '365', '250', 'auto', 'auto']
                        },
                        {
                            id: 'MantLiq',
                            symbolName: 'MantLiq',
                            type: 'rect',
                            rect: ['0px', '301px', '365', '250', 'auto', 'auto']
                        },
                        {
                            id: 'HervAgua',
                            symbolName: 'HervAgua',
                            type: 'rect',
                            rect: ['0px', '301px', '365', '250', 'auto', 'auto']
                        },
                        {
                            id: 'Bandejero',
                            symbolName: 'Bandejero',
                            type: 'rect',
                            rect: ['0px', '301px', '365', '250', 'auto', 'auto']
                        },
                        {
                            id: 'btn6',
                            type: 'rect',
                            rect: ['203px', '180px', '31px', '28px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,241,60,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            cursor:'pointer'
                        },
                        {
                            id: 'btn5',
                            type: 'rect',
                            rect: ['157px', '159px', '31px', '41px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,210,241,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            cursor:'pointer'
                        },
                        {
                            id: 'btn1',
                            type: 'rect',
                            rect: ['14px', '182px', '60px', '72px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(237,0,0,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            cursor:'pointer'
                        },
                        {
                            id: 'btn2',
                            type: 'rect',
                            rect: ['74px', '182px', '52px', '82px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(237,0,222,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            cursor:'pointer'
                        },
                        {
                            id: 'btn3',
                            type: 'rect',
                            rect: ['126px', '223px', '31px', '51px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(158,0,241,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"],
                            cursor:'not-allowed'
                        },
                        {
                            id: 'btn4',
                            type: 'rect',
                            rect: ['157px', '238px', '120px', '51px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,7,241,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],[],['0','18']],
                            cursor:'pointer'
                        },
                        {
                            id: 'btn7',
                            type: 'rect',
                            rect: ['287px', '182px', '70px', '90px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,241,60,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            cursor:'pointer'
                        },
                        {
                            id: 'btn8',
                            type: 'rect',
                            rect: ['393px', '310px', '70px', '51px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,241,60,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],[],['0','19']],
                            cursor:'pointer'
                        },
                        {
                            id: 'Lavamanos',
                            symbolName: 'Lavamanos',
                            type: 'rect',
                            rect: ['0px', '301px', '365', '250', 'auto', 'auto']
                        },
                        {
                            id: 'btn9',
                            type: 'rect',
                            rect: ['373px', '239px', '39px', '51px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,241,60,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            cursor:'pointer'
                        },
                        {
                            id: 'btn10',
                            type: 'rect',
                            rect: ['1109px', '335px', '31px', '22px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,241,60,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            cursor:'pointer'
                        },
                        {
                            id: 'LavadoraVajilla',
                            symbolName: 'LavadoraVajilla',
                            type: 'rect',
                            rect: ['0px', '301px', '365', '250', 'auto', 'auto']
                        },
                        {
                            id: 'btn11',
                            type: 'rect',
                            rect: ['67px', '96px', '60px', '28px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,241,60,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],[],['11','-30']],
                            cursor:'pointer'
                        },
                        {
                            id: 'btn12',
                            type: 'rect',
                            rect: ['463px', '362px', '80px', '22px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,241,60,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],[],['-21','17']],
                            cursor:'pointer'
                        },
                        {
                            id: 'Refrigerador2',
                            symbolName: 'Refrigerador2',
                            type: 'rect',
                            rect: ['0px', '300px', '74', '113', 'auto', 'auto']
                        },
                        {
                            id: 'Batidora',
                            symbolName: 'Batidora',
                            type: 'rect',
                            rect: ['0px', '301px', '365', '250', 'auto', 'auto']
                        },
                        {
                            id: 'bt14',
                            type: 'rect',
                            rect: ['543px', '368px', '39px', '41px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(245,0,0,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"],
                            cursor:'pointer'
                        },
                        {
                            id: 'Meson',
                            symbolName: 'Meson',
                            type: 'rect',
                            rect: ['0px', '301px', '365', '250', 'auto', 'auto']
                        },
                        {
                            id: 'Carro',
                            symbolName: 'Carro',
                            type: 'rect',
                            rect: ['0px', '301px', '365', '250', 'auto', 'auto']
                        },
                        {
                            id: 'btn15',
                            type: 'rect',
                            rect: ['162px', '37px', '70px', '41px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(245,0,0,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],[],['23','-28']],
                            cursor:'pointer'
                        },
                        {
                            id: 'btn16',
                            type: 'rect',
                            rect: ['233px', '42px', '70px', '28px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(245,0,0,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],[],['0','14']],
                            cursor:'pointer'
                        },
                        {
                            id: 'btn17',
                            type: 'rect',
                            rect: ['347px', '65px', '52px', '28px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(245,0,0,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],[],['0','12']],
                            cursor:'pointer'
                        },
                        {
                            id: 'btn18',
                            type: 'rect',
                            rect: ['646px', '445px', '237px', '22px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(245,0,0,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],[],['0','17']],
                            cursor:'pointer'
                        },
                        {
                            id: 'btn19',
                            type: 'rect',
                            rect: ['907px', '505px', '105px', '28px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(245,0,0,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],[],['0','18']],
                            cursor:'pointer'
                        },
                        {
                            id: 'btn20',
                            type: 'rect',
                            rect: ['365px', '175px', '31px', '28px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(245,0,0,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],[],['0','12']],
                            cursor:'pointer'
                        },
                        {
                            id: 'btn21',
                            type: 'rect',
                            rect: ['412px', '188px', '31px', '28px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(245,0,0,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],[],['0','12']],
                            cursor:'pointer'
                        },
                        {
                            id: 'MesonDesconche',
                            symbolName: 'MesonDesconche',
                            type: 'rect',
                            rect: ['0px', '301px', '365', '250', 'auto', 'auto']
                        },
                        {
                            id: 'btn22',
                            type: 'rect',
                            rect: ['135px', '65px', '31px', '41px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,245,53,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],[],['0','-36']],
                            cursor:'pointer'
                        },
                        {
                            id: 'LavVajInd',
                            symbolName: 'LavVajInd',
                            type: 'rect',
                            rect: ['0px', '301px', '365', '250', 'auto', 'auto']
                        },
                        {
                            id: 'btn23',
                            type: 'rect',
                            rect: ['306px', '35px', '31px', '51px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,245,53,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            cursor:'pointer'
                        },
                        {
                            id: 'Estante',
                            symbolName: 'Estante',
                            type: 'rect',
                            rect: ['0px', '301px', '365', '250', 'auto', 'auto']
                        },
                        {
                            id: 'btn24',
                            type: 'rect',
                            rect: ['365px', '125px', '105px', '51px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(206,245,0,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],[],['0','16']],
                            cursor:'pointer'
                        },
                        {
                            id: 'btn25',
                            type: 'rect',
                            rect: ['400px', '101px', '105px', '51px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(206,245,0,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],[],['0','16']],
                            cursor:'pointer'
                        },
                        {
                            id: 'btn26',
                            type: 'rect',
                            rect: ['443px', '76px', '152px', '51px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(206,245,0,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],[],['0','16']],
                            cursor:'pointer'
                        },
                        {
                            id: 'btn27',
                            type: 'rect',
                            rect: ['528px', '111px', '39px', '98px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(206,245,0,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],[],['-45']],
                            cursor:'pointer'
                        },
                        {
                            id: 'SalseraRef',
                            symbolName: 'SalseraRef',
                            type: 'rect',
                            rect: ['0px', '301px', '365', '250', 'auto', 'auto']
                        },
                        {
                            id: 'MesonRef',
                            symbolName: 'MesonRef',
                            type: 'rect',
                            rect: ['0px', '301px', '365', '250', 'auto', 'auto']
                        },
                        {
                            id: 'btn28',
                            type: 'rect',
                            rect: ['616px', '129px', '60px', '41px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(206,245,0,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],[],['0','14']],
                            cursor:'pointer'
                        },
                        {
                            id: 'btn29',
                            type: 'rect',
                            rect: ['676px', '143px', '60px', '41px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(245,137,0,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],[],['0','13']],
                            cursor:'pointer'
                        },
                        {
                            id: 'btn43',
                            type: 'rect',
                            rect: ['990px', '321px', '39px', '59px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(245,137,0,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],['27'],['0','-9']],
                            cursor:'pointer'
                        },
                        {
                            id: 'VitRefVis',
                            symbolName: 'VitRefVis',
                            type: 'rect',
                            rect: ['0px', '301px', '365', '250', 'auto', 'auto']
                        },
                        {
                            id: 'Refrigerador',
                            symbolName: 'Refrigerador',
                            type: 'rect',
                            rect: ['0px', '301px', '365', '250', 'auto', 'auto']
                        },
                        {
                            id: 'VitRef',
                            symbolName: 'VitRef',
                            type: 'rect',
                            rect: ['0px', '301px', '365', '250', 'auto', 'auto']
                        },
                        {
                            id: 'btn30',
                            type: 'rect',
                            rect: ['741px', '118px', '75px', '80px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(245,137,0,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],[],['-6','15']],
                            cursor:'pointer'
                        },
                        {
                            id: 'btn31',
                            type: 'rect',
                            rect: ['816px', '145px', '80px', '82px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,237,245,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],[],['-6','13']],
                            cursor:'pointer'
                        },
                        {
                            id: 'btn32',
                            type: 'rect',
                            rect: ['900px', '150px', '52px', '90px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,245,45,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],[],['-10','11']],
                            cursor:'pointer'
                        },
                        {
                            id: 'VitRef2',
                            symbolName: 'VitRef2',
                            type: 'rect',
                            rect: ['0px', '301px', '365', '250', 'auto', 'auto']
                        },
                        {
                            id: 'VitRef3',
                            symbolName: 'VitRef3',
                            type: 'rect',
                            rect: ['0px', '301px', '365', '250', 'auto', 'auto']
                        },
                        {
                            id: 'Congelador',
                            symbolName: 'Congelador',
                            type: 'rect',
                            rect: ['0px', '301px', '365', '250', 'auto', 'auto']
                        },
                        {
                            id: 'btn34',
                            type: 'rect',
                            rect: ['951px', '162px', '37px', '87px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(153,245,0,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],[],['-9','15']],
                            cursor:'pointer'
                        },
                        {
                            id: 'btn33',
                            type: 'rect',
                            rect: ['1081px', '204px', '80px', '72px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(153,245,0,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],[],['-14','13']],
                            cursor:'pointer'
                        },
                        {
                            id: 'btn35',
                            type: 'rect',
                            rect: ['987px', '178px', '31px', '80px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,241,60,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],['10']],
                            cursor:'pointer'
                        },
                        {
                            id: 'btn36',
                            type: 'rect',
                            rect: ['1025px', '177px', '52px', '90px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,241,60,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],['13']],
                            cursor:'pointer'
                        },
                        {
                            id: 'btn37',
                            type: 'rect',
                            rect: ['1119px', '283px', '37px', '41px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(153,245,0,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],['13']],
                            cursor:'pointer'
                        },
                        {
                            id: 'btn38',
                            type: 'rect',
                            rect: ['1056px', '436px', '31px', '113px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,241,60,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],['20']],
                            cursor:'pointer'
                        },
                        {
                            id: 'Licuadora',
                            symbolName: 'Licuadora',
                            type: 'rect',
                            rect: ['0px', '301px', '365', '250', 'auto', 'auto']
                        },
                        {
                            id: 'PelPapas',
                            symbolName: 'PelPapas',
                            type: 'rect',
                            rect: ['0px', '301px', '365', '250', 'auto', 'auto']
                        },
                        {
                            id: 'btn39',
                            type: 'rect',
                            rect: ['1093px', '404px', '22px', '22px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(206,245,0,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            cursor:'pointer'
                        },
                        {
                            id: 'btn40',
                            type: 'rect',
                            rect: ['1086px', '383px', '31px', '22px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,107,245,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],['17']],
                            cursor:'pointer'
                        },
                        {
                            id: 'ProcVeg',
                            symbolName: 'ProcVeg',
                            type: 'rect',
                            rect: ['0px', '301', '365', '250', 'auto', 'auto']
                        },
                        {
                            id: 'CocinaSemiInd',
                            symbolName: 'CocinaSemiInd',
                            type: 'rect',
                            rect: ['0px', '301px', '365', '250', 'auto', 'auto']
                        },
                        {
                            id: 'btn41',
                            type: 'rect',
                            rect: ['1107px', '362px', '22px', '22px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(245,0,0,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],['19']],
                            cursor:'pointer'
                        },
                        {
                            id: 'btn42',
                            type: 'rect',
                            rect: ['960px', '374px', '39px', '72px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(245,0,0,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],['19']],
                            cursor:'pointer'
                        },
                        {
                            id: 'btn44',
                            type: 'rect',
                            rect: ['886px', '379px', '52px', '72px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(245,137,0,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],['17']],
                            cursor:'pointer'
                        },
                        {
                            id: 'HornoComb',
                            symbolName: 'HornoComb',
                            type: 'rect',
                            rect: ['0px', '301', '365', '250', 'auto', 'auto']
                        },
                        {
                            id: 'HornoInd',
                            symbolName: 'HornoInd',
                            type: 'rect',
                            rect: ['0px', '301px', '365', '250', 'auto', 'auto']
                        },
                        {
                            id: 'btn45',
                            type: 'rect',
                            rect: ['916px', '324px', '48px', '56px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(62,113,227,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],['19']],
                            cursor:'pointer'
                        },
                        {
                            id: 'btn46',
                            type: 'rect',
                            rect: ['915px', '250px', '37px', '72px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(62,113,227,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],['12']],
                            cursor:'pointer'
                        },
                        {
                            id: 'btn47',
                            type: 'rect',
                            rect: ['873px', '243px', '31px', '72px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(62,113,227,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],['13']],
                            cursor:'pointer'
                        },
                        {
                            id: 'btn48',
                            type: 'rect',
                            rect: ['831px', '262px', '31px', '41px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(233,40,197,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],['13']],
                            cursor:'pointer'
                        },
                        {
                            id: 'btn49',
                            type: 'rect',
                            rect: ['779px', '251px', '49px', '41px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(97,66,233,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],['14']],
                            cursor:'pointer'
                        },
                        {
                            id: 'Freidora',
                            symbolName: 'Freidora',
                            type: 'rect',
                            rect: ['0px', '301px', '365', '250', 'auto', 'auto']
                        },
                        {
                            id: 'PlanchaChurr',
                            symbolName: 'PlanchaChurr',
                            type: 'rect',
                            rect: ['0px', '301px', '365', '250', 'auto', 'auto']
                        },
                        {
                            id: 'ParrGrill',
                            symbolName: 'ParrGrill',
                            type: 'rect',
                            rect: ['0px', '301px', '365', '250', 'auto', 'auto']
                        },
                        {
                            id: 'SartBas',
                            symbolName: 'SartBas',
                            type: 'rect',
                            rect: ['0px', '301px', '365', '250', 'auto', 'auto']
                        },
                        {
                            id: 'btn50',
                            type: 'rect',
                            rect: ['743px', '231px', '40px', '47px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(25,188,219,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],['14']],
                            cursor:'pointer'
                        },
                        {
                            id: 'btn51',
                            type: 'rect',
                            rect: ['680px', '227px', '60px', '41px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(31,219,24,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],['14']],
                            cursor:'pointer'
                        },
                        {
                            id: 'Marmita',
                            symbolName: 'Marmita',
                            type: 'rect',
                            rect: ['0px', '301px', '365', '250', 'auto', 'auto']
                        },
                        {
                            id: 'Campana',
                            symbolName: 'Campana',
                            type: 'rect',
                            rect: ['0px', '301px', '365', '250', 'auto', 'auto']
                        },
                        {
                            id: 'btn52',
                            type: 'rect',
                            rect: ['645px', '211px', '31px', '41px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(31,219,24,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],['15']],
                            cursor:'pointer'
                        },
                        {
                            id: 'btn53',
                            type: 'rect',
                            rect: ['599px', '251px', '92px', '41px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(31,219,24,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],['14'],['-28','2']],
                            cursor:'pointer'
                        },
                        {
                            id: 'btn54',
                            type: 'rect',
                            rect: ['711px', '283px', '92px', '41px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(31,219,24,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],['14'],['-28','2']],
                            cursor:'pointer'
                        },
                        {
                            id: 'AnafeInd',
                            symbolName: 'AnafeInd',
                            type: 'rect',
                            rect: ['0px', '301px', '365', '250', 'auto', 'auto']
                        },
                        {
                            id: 'btn55',
                            type: 'rect',
                            rect: ['603px', '296px', '74px', '41px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(31,219,24,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],['17'],['-10']],
                            cursor:'pointer'
                        },
                        {
                            id: 'btn56',
                            type: 'rect',
                            rect: ['707px', '326px', '74px', '41px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(31,219,24,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],['17'],['-10']],
                            cursor:'pointer'
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '1170px', '551px', 'auto', 'auto'],
                            overflow: 'auto',
                            fill: ["rgba(0,213,253,1.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [
                        [
                            "eid331",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Lavamanos}",
                            '301px',
                            '301px'
                        ],
                        [
                            "eid339",
                            "left",
                            0,
                            0,
                            "linear",
                            "${VitRef}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid328",
                            "top",
                            0,
                            0,
                            "linear",
                            "${VitRefPsasnte}",
                            '301px',
                            '301px'
                        ],
                        [
                            "eid316",
                            "left",
                            0,
                            0,
                            "linear",
                            "${MantLiq}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid301",
                            "left",
                            0,
                            0,
                            "linear",
                            "${Meson}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid376",
                            "top",
                            0,
                            0,
                            "linear",
                            "${CocinaSemiInd}",
                            '301px',
                            '301px'
                        ],
                        [
                            "eid318",
                            "left",
                            0,
                            0,
                            "linear",
                            "${HervAgua}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid355",
                            "left",
                            0,
                            0,
                            "linear",
                            "${PelPapas}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid428",
                            "left",
                            0,
                            0,
                            "linear",
                            "${Campana}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid302",
                            "left",
                            0,
                            0,
                            "linear",
                            "${LavVajInd}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid31",
                            "top",
                            0,
                            0,
                            "linear",
                            "${btn4}",
                            '238px',
                            '238px'
                        ],
                        [
                            "eid434",
                            "top",
                            0,
                            0,
                            "linear",
                            "${AnafeInd}",
                            '301px',
                            '301px'
                        ],
                        [
                            "eid326",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Bandejero}",
                            '301px',
                            '301px'
                        ],
                        [
                            "eid327",
                            "top",
                            0,
                            0,
                            "linear",
                            "${AutoservBanoMaria}",
                            '301px',
                            '301px'
                        ],
                        [
                            "eid303",
                            "left",
                            0,
                            0,
                            "linear",
                            "${Estante}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid342",
                            "top",
                            0,
                            0,
                            "linear",
                            "${VitRef}",
                            '301px',
                            '301px'
                        ],
                        [
                            "eid432",
                            "left",
                            0,
                            0,
                            "linear",
                            "${AnafeInd}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid363",
                            "left",
                            0,
                            0,
                            "linear",
                            "${Refrigerador2}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid386",
                            "left",
                            0,
                            0,
                            "linear",
                            "${HornoInd}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid426",
                            "left",
                            0,
                            0,
                            "linear",
                            "${Marmita}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid322",
                            "top",
                            0,
                            0,
                            "linear",
                            "${ModNeutro}",
                            '301px',
                            '301px'
                        ],
                        [
                            "eid321",
                            "left",
                            0,
                            0,
                            "linear",
                            "${VitRefPsasnte}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid308",
                            "top",
                            0,
                            0,
                            "linear",
                            "${SalseraRef}",
                            '301px',
                            '301px'
                        ],
                        [
                            "eid351",
                            "left",
                            0,
                            0,
                            "linear",
                            "${Licuadora}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid306",
                            "top",
                            0,
                            0,
                            "linear",
                            "${MesonDesconche}",
                            '301px',
                            '301px'
                        ],
                        [
                            "eid313",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Carro}",
                            '301px',
                            '301px'
                        ],
                        [
                            "eid319",
                            "left",
                            0,
                            0,
                            "linear",
                            "${Bandejero}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid325",
                            "top",
                            0,
                            0,
                            "linear",
                            "${HervAgua}",
                            '301px',
                            '301px'
                        ],
                        [
                            "eid340",
                            "left",
                            0,
                            0,
                            "linear",
                            "${VitRef2}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid405",
                            "top",
                            0,
                            0,
                            "linear",
                            "${ParrGrill}",
                            '301px',
                            '301px'
                        ],
                        [
                            "eid413",
                            "top",
                            0,
                            0,
                            "linear",
                            "${SartBas}",
                            '301px',
                            '301px'
                        ],
                        [
                            "eid391",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Freidora}",
                            '301px',
                            '301px'
                        ],
                        [
                            "eid299",
                            "left",
                            0,
                            0,
                            "linear",
                            "${SalseraRef}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid315",
                            "left",
                            0,
                            0,
                            "linear",
                            "${ModNeutro}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid323",
                            "top",
                            0,
                            0,
                            "linear",
                            "${MantLiq}",
                            '301px',
                            '301px'
                        ],
                        [
                            "eid435",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${btn4}",
                            '0',
                            '0'
                        ],
                        [
                            "eid344",
                            "top",
                            0,
                            0,
                            "linear",
                            "${VitRef3}",
                            '301px',
                            '301px'
                        ],
                        [
                            "eid309",
                            "top",
                            0,
                            0,
                            "linear",
                            "${MesonRef}",
                            '301px',
                            '301px'
                        ],
                        [
                            "eid296",
                            "top",
                            0,
                            0,
                            "linear",
                            "${VitRefVis}",
                            '301px',
                            '301px'
                        ],
                        [
                            "eid329",
                            "left",
                            0,
                            0,
                            "linear",
                            "${Lavamanos}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid387",
                            "top",
                            0,
                            0,
                            "linear",
                            "${HornoInd}",
                            '301px',
                            '301px'
                        ],
                        [
                            "eid304",
                            "left",
                            0,
                            0,
                            "linear",
                            "${Carro}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid347",
                            "left",
                            0,
                            0,
                            "linear",
                            "${Congelador}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid310",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Meson}",
                            '301px',
                            '301px'
                        ],
                        [
                            "eid352",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Licuadora}",
                            '301px',
                            '301px'
                        ],
                        [
                            "eid412",
                            "left",
                            0,
                            0,
                            "linear",
                            "${SartBas}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid330",
                            "left",
                            0,
                            0,
                            "linear",
                            "${LavadoraVajilla}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid427",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Marmita}",
                            '301px',
                            '301px'
                        ],
                        [
                            "eid379",
                            "left",
                            0,
                            0,
                            "linear",
                            "${HornoComb}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid32",
                            "background-color",
                            0,
                            0,
                            "linear",
                            "${btn4}",
                            'rgba(0,7,241,1.00)',
                            'rgba(0,7,241,1.00)'
                        ],
                        [
                            "eid311",
                            "top",
                            0,
                            0,
                            "linear",
                            "${LavVajInd}",
                            '301px',
                            '301px'
                        ],
                        [
                            "eid394",
                            "left",
                            0,
                            0,
                            "linear",
                            "${PlanchaChurr}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid300",
                            "left",
                            0,
                            0,
                            "linear",
                            "${MesonRef}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid341",
                            "left",
                            0,
                            0,
                            "linear",
                            "${VitRef3}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid356",
                            "top",
                            0,
                            0,
                            "linear",
                            "${PelPapas}",
                            '301px',
                            '301px'
                        ],
                        [
                            "eid292",
                            "left",
                            0,
                            0,
                            "linear",
                            "${Refrigerador}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid375",
                            "left",
                            0,
                            0,
                            "linear",
                            "${CocinaSemiInd}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid429",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Campana}",
                            '301px',
                            '301px'
                        ],
                        [
                            "eid390",
                            "left",
                            0,
                            0,
                            "linear",
                            "${Freidora}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid295",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Refrigerador}",
                            '301px',
                            '301px'
                        ],
                        [
                            "eid320",
                            "left",
                            0,
                            0,
                            "linear",
                            "${AutoservBanoMaria}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid348",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Congelador}",
                            '301px',
                            '301px'
                        ],
                        [
                            "eid30",
                            "left",
                            0,
                            0,
                            "linear",
                            "${btn4}",
                            '157px',
                            '157px'
                        ],
                        [
                            "eid317",
                            "left",
                            0,
                            0,
                            "linear",
                            "${SaladBarRef}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid332",
                            "top",
                            0,
                            0,
                            "linear",
                            "${LavadoraVajilla}",
                            '301px',
                            '301px'
                        ],
                        [
                            "eid324",
                            "top",
                            0,
                            0,
                            "linear",
                            "${SaladBarRef}",
                            '301px',
                            '301px'
                        ],
                        [
                            "eid343",
                            "top",
                            0,
                            0,
                            "linear",
                            "${VitRef2}",
                            '301px',
                            '301px'
                        ],
                        [
                            "eid27",
                            "skewY",
                            0,
                            0,
                            "linear",
                            "${btn4}",
                            '18deg',
                            '18deg'
                        ],
                        [
                            "eid305",
                            "left",
                            0,
                            0,
                            "linear",
                            "${Batidora}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid404",
                            "left",
                            0,
                            0,
                            "linear",
                            "${ParrGrill}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid364",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Refrigerador2}",
                            '300px',
                            '300px'
                        ],
                        [
                            "eid314",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Batidora}",
                            '301px',
                            '301px'
                        ],
                        [
                            "eid312",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Estante}",
                            '301px',
                            '301px'
                        ],
                        [
                            "eid297",
                            "left",
                            0,
                            0,
                            "linear",
                            "${MesonDesconche}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid395",
                            "top",
                            0,
                            0,
                            "linear",
                            "${PlanchaChurr}",
                            '301px',
                            '301px'
                        ],
                        [
                            "eid293",
                            "left",
                            0,
                            0,
                            "linear",
                            "${VitRefVis}",
                            '0px',
                            '0px'
                        ]
                    ]
                }
            },
            "BaseCuad": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '365px', '250px', 'auto', 'auto'],
                            id: 'Rectangle2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            rect: ['0px', '0px', '365px', '41px', 'auto', 'auto'],
                            id: 'Rectangle3',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(237,0,0,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '365px', '250px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "SaladBarRef": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            id: 'BaseCuadCopy',
                            symbolName: 'BaseCuad',
                            rect: ['0px', '0px', '365', '250', 'auto', 'auto']
                        },
                        {
                            type: 'text',
                            rect: ['15px', '4px', 'auto', 'auto', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px;\">​<span style=\"color: rgb(255, 255, 255); font-size: 16px;\">Salad Bar Refrigerado</span></p>',
                            id: 'Text2',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'left',
                            font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(0,0,0,1)', '700', 'none', 'normal', 'break-word', 'nowrap']
                        },
                        {
                            type: 'image',
                            id: 'saladBarRef',
                            rect: ['45px', '49px', '250px', '188px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/saladBarRef.jpg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '365px', '250px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "cdcd": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'SaladBarRefCopy2',
                            symbolName: 'SaladBarRef',
                            rect: ['0px', '0px', '365', '250', 'auto', 'auto'],
                            type: 'rect'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '365px', '250px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [
                        [
                            "eid6",
                            "left",
                            0,
                            0,
                            "linear",
                            "${SaladBarRefCopy2}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid5",
                            "top",
                            0,
                            0,
                            "linear",
                            "${SaladBarRefCopy2}",
                            '0px',
                            '0px'
                        ]
                    ]
                }
            },
            "CEDE": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            id: 'BaseCuad',
                            symbolName: 'BaseCuad',
                            rect: ['0px', '0px', '365', '250', 'auto', 'auto']
                        },
                        {
                            type: 'text',
                            rect: ['15px', '11px', 'auto', 'auto', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px;\">​Vitrina Refrigerada Pasante</p>',
                            id: 'Text2',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'left',
                            font: ['Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(255,255,255,1.00)', '700', 'none', 'normal', 'break-word', 'nowrap']
                        },
                        {
                            type: 'image',
                            id: 'vitRefPasante',
                            rect: ['42px', '48px', '250px', '188px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/vitRefPasante.jpg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '365px', '250px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "btn2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '52px', '84px', 'auto', 'auto'],
                            opacity: '0.10344828274743',
                            id: 'Rectangle',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(61,231,92,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '52px', '84px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "ModNeutro": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            id: 'ModNeutro',
                            symbolName: 'BaseCuad',
                            rect: ['0px', '0px', '365', '250', 'auto', 'auto']
                        },
                        {
                            rect: ['13px', '12px', 'auto', 'auto', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(255,255,255,1)', '700', 'none', 'normal', 'break-word', 'nowrap'],
                            text: '<p style=\"margin: 0px;\">​Módulo Neutro</p>',
                            id: 'Text2',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'left',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '365px', '250px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "AutoservBanoMaria": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            id: 'ModNeutroCopy',
                            symbolName: 'BaseCuad',
                            rect: ['0px', '0px', '365', '250', 'auto', 'auto']
                        },
                        {
                            type: 'text',
                            id: 'Text',
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 16px; font-weight: 700; color: rgb(255, 255, 255);\">Autoservicio Baño María</span></p>',
                            rect: ['11px', '7px', 'auto', 'auto', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'nowrap']
                        },
                        {
                            type: 'image',
                            id: 'autoservicioBanoMaria',
                            rect: ['58px', '53px', '250px', '188px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/autoservicioBanoMaria.jpg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '365px', '250px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [
                        [
                            "eid25",
                            "top",
                            0,
                            0,
                            "linear",
                            "${ModNeutroCopy}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid24",
                            "left",
                            0,
                            0,
                            "linear",
                            "${ModNeutroCopy}",
                            '0px',
                            '0px'
                        ]
                    ]
                }
            },
            "MantLiq": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '365', '250', 'auto', 'auto'],
                            id: 'ModNeutroCopy2',
                            symbolName: 'BaseCuad',
                            type: 'rect'
                        },
                        {
                            rect: ['11px', '6px', 'auto', 'auto', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'nowrap'],
                            align: 'left',
                            id: 'Text2',
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 16px; font-weight: 700; color: rgb(255, 255, 255);\">Mantenedor de Líquidos</span></p>',
                            textStyle: ['', '', '', '', 'none'],
                            type: 'text'
                        },
                        {
                            rect: ['40px', '52px', '250px', '188px', 'auto', 'auto'],
                            id: 'mantencionLiquidos',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/mantencionLiquidos.jpg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '365px', '250px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [
                        [
                            "eid40",
                            "left",
                            0,
                            0,
                            "linear",
                            "${ModNeutroCopy2}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid41",
                            "top",
                            0,
                            0,
                            "linear",
                            "${ModNeutroCopy2}",
                            '0px',
                            '0px'
                        ]
                    ]
                }
            },
            "HervAgua": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '365', '250', 'auto', 'auto'],
                            id: 'ModNeutroCopy3',
                            symbolName: 'BaseCuad',
                            type: 'rect'
                        },
                        {
                            rect: ['11px', '6px', 'auto', 'auto', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'nowrap'],
                            align: 'left',
                            id: 'Text3',
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 16px; font-weight: 700; color: rgb(255, 255, 255);\">Hervidor de Agua</span></p>',
                            textStyle: ['', '', '', '', 'none'],
                            type: 'text'
                        },
                        {
                            rect: ['50px', '48px', '250px', '188px', 'auto', 'auto'],
                            id: 'hervidorAgua',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/hervidorAgua.jpg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '365px', '250px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [
                        [
                            "eid47",
                            "left",
                            0,
                            0,
                            "linear",
                            "${ModNeutroCopy3}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid48",
                            "top",
                            0,
                            0,
                            "linear",
                            "${ModNeutroCopy3}",
                            '0px',
                            '0px'
                        ]
                    ]
                }
            },
            "Bandejero": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '365', '250', 'auto', 'auto'],
                            id: 'ModNeutroCopy4',
                            symbolName: 'BaseCuad',
                            type: 'rect'
                        },
                        {
                            rect: ['11px', '6px', 'auto', 'auto', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'nowrap'],
                            align: 'left',
                            id: 'Text4',
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 16px; font-weight: 700; color: rgb(255, 255, 255);\">Bandejero</span></p>',
                            textStyle: ['', '', '', '', 'none'],
                            type: 'text'
                        },
                        {
                            rect: ['58px', '55px', '250px', '188px', 'auto', 'auto'],
                            id: 'bandejero',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/bandejero.jpg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '365px', '250px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [
                        [
                            "eid54",
                            "left",
                            0,
                            0,
                            "linear",
                            "${ModNeutroCopy4}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid55",
                            "top",
                            0,
                            0,
                            "linear",
                            "${ModNeutroCopy4}",
                            '0px',
                            '0px'
                        ]
                    ]
                }
            },
            "Lavamanos": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '365', '250', 'auto', 'auto'],
                            id: 'Lavamanos',
                            symbolName: 'BaseCuad',
                            type: 'rect'
                        },
                        {
                            rect: ['10px', '6px', 'auto', 'auto', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'nowrap'],
                            align: 'left',
                            id: 'Text6',
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 18px; font-weight: 700; color: rgb(255, 255, 255);\">Lavamanos</span></p>',
                            textStyle: ['', '', '', '', 'none'],
                            type: 'text'
                        },
                        {
                            rect: ['58px', '51px', '250px', '188px', 'auto', 'auto'],
                            id: 'lavamanos',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/lavamanos.jpg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '365px', '250px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [
                        [
                            "eid60",
                            "left",
                            0,
                            0,
                            "linear",
                            "${Lavamanos}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid61",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Lavamanos}",
                            '0px',
                            '0px'
                        ]
                    ]
                }
            },
            "LavadoraVajilla": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '365', '250', 'auto', 'auto'],
                            id: 'LavamanosCopy',
                            symbolName: 'BaseCuad',
                            type: 'rect'
                        },
                        {
                            rect: ['10px', '6px', 'auto', 'auto', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'nowrap'],
                            align: 'left',
                            id: 'Text7',
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 18px; font-weight: 700; color: rgb(255, 255, 255);\">Lavadora de Vajilla</span></p>',
                            textStyle: ['', '', '', '', 'none'],
                            type: 'text'
                        },
                        {
                            rect: ['58px', '50px', '250px', '188px', 'auto', 'auto'],
                            id: 'lavaplatosIndustrial',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/lavaplatosIndustrial.jpg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '365px', '250px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [
                        [
                            "eid65",
                            "top",
                            0,
                            0,
                            "linear",
                            "${LavamanosCopy}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid64",
                            "left",
                            0,
                            0,
                            "linear",
                            "${LavamanosCopy}",
                            '0px',
                            '0px'
                        ]
                    ]
                }
            },
            "Batidora": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '365', '250', 'auto', 'auto'],
                            id: 'LavamanosCopy',
                            symbolName: 'BaseCuad',
                            type: 'rect'
                        },
                        {
                            rect: ['10px', '11px', 'auto', 'auto', 'auto', 'auto'],
                            id: 'Text',
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-weight: 700; color: rgb(255, 255, 255);\">Batidora</span></p>',
                            font: ['Arial, Helvetica, sans-serif', [18, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'nowrap'],
                            type: 'text'
                        },
                        {
                            rect: ['47px', '53px', '250px', '188px', 'auto', 'auto'],
                            id: 'batidora',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/batidora.jpg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '365px', '250px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "Meson": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '365', '250', 'auto', 'auto'],
                            id: 'LavamanosCopy2',
                            symbolName: 'BaseCuad',
                            type: 'rect'
                        },
                        {
                            rect: ['13px', '11px', 'auto', 'auto', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [18, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'nowrap'],
                            align: 'left',
                            id: 'Text2',
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-weight: 700; color: rgb(255, 255, 255);\">Mesón</span></p>',
                            textStyle: ['', '', '', '', 'none'],
                            type: 'text'
                        },
                        {
                            rect: ['53px', '51px', '250px', '188px', 'auto', 'auto'],
                            id: 'meson',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/meson.jpg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '365px', '250px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [
                        [
                            "eid70",
                            "top",
                            0,
                            0,
                            "linear",
                            "${LavamanosCopy2}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid71",
                            "left",
                            0,
                            0,
                            "linear",
                            "${LavamanosCopy2}",
                            '0px',
                            '0px'
                        ]
                    ]
                }
            },
            "Carro": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '365', '250', 'auto', 'auto'],
                            id: 'LavamanosCopy3',
                            symbolName: 'BaseCuad',
                            type: 'rect'
                        },
                        {
                            rect: ['11px', '10px', 'auto', 'auto', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [18, 'px'], 'rgba(255,255,255,1.00)', '700', 'none', 'normal', 'break-word', 'nowrap'],
                            align: 'left',
                            id: 'Text3',
                            text: '<p style=\"margin: 0px;\">​Carro</p>',
                            textStyle: ['', '', '', '', 'none'],
                            type: 'text'
                        },
                        {
                            rect: ['58px', '50px', '250px', '188px', 'auto', 'auto'],
                            id: 'carro',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/carro.jpg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '365px', '250px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [
                        [
                            "eid77",
                            "top",
                            0,
                            0,
                            "linear",
                            "${LavamanosCopy3}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid76",
                            "left",
                            0,
                            0,
                            "linear",
                            "${LavamanosCopy3}",
                            '0px',
                            '0px'
                        ]
                    ]
                }
            },
            "MesonDesconche": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            id: 'LavamanosCopy4',
                            symbolName: 'BaseCuad',
                            rect: ['0px', '0px', '365', '250', 'auto', 'auto']
                        },
                        {
                            type: 'text',
                            rect: ['10px', '11px', 'auto', 'auto', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px;\">​Mesón Desconche</p>',
                            id: 'Text4',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'left',
                            font: ['Arial, Helvetica, sans-serif', [18, 'px'], 'rgba(255,255,255,1)', '700', 'none', 'normal', 'break-word', 'nowrap']
                        },
                        {
                            type: 'image',
                            id: 'mesonDesconche',
                            rect: ['46px', '48px', '250px', '188px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/mesonDesconche.jpg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '365px', '250px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [
                        [
                            "eid81",
                            "top",
                            0,
                            0,
                            "linear",
                            "${LavamanosCopy4}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid80",
                            "left",
                            0,
                            0,
                            "linear",
                            "${LavamanosCopy4}",
                            '0px',
                            '0px'
                        ]
                    ]
                }
            },
            "LavVajInd": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '365', '250', 'auto', 'auto'],
                            id: 'LavamanosCopy5',
                            symbolName: 'BaseCuad',
                            type: 'rect'
                        },
                        {
                            rect: ['13px', '11px', 'auto', 'auto', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [18, 'px'], 'rgba(255,255,255,1)', '700', 'none', 'normal', 'break-word', 'nowrap'],
                            align: 'left',
                            id: 'Text6',
                            text: '<p style=\"margin: 0px;\">​Lavadora de Vajilla Industrial</p>',
                            textStyle: ['', '', '', '', 'none'],
                            type: 'text'
                        },
                        {
                            rect: ['53px', '50px', '250px', '188px', 'auto', 'auto'],
                            id: 'lavavajillas',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/lavavajillas.jpg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '365px', '250px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [
                        [
                            "eid85",
                            "top",
                            0,
                            0,
                            "linear",
                            "${LavamanosCopy5}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid84",
                            "left",
                            0,
                            0,
                            "linear",
                            "${LavamanosCopy5}",
                            '0px',
                            '0px'
                        ]
                    ]
                }
            },
            "Estante": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '365', '250', 'auto', 'auto'],
                            id: 'LavamanosCopy6',
                            symbolName: 'BaseCuad',
                            type: 'rect'
                        },
                        {
                            rect: ['11px', '11px', 'auto', 'auto', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [18, 'px'], 'rgba(255,255,255,1)', '700', 'none', 'normal', 'break-word', 'nowrap'],
                            align: 'left',
                            id: 'Text7',
                            text: '<p style=\"margin: 0px;\">​Estante</p>',
                            textStyle: ['', '', '', '', 'none'],
                            type: 'text'
                        },
                        {
                            rect: ['58px', '51px', '250px', '188px', 'auto', 'auto'],
                            id: 'estante4repisas',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/estante4repisas.jpg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '365px', '250px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [
                        [
                            "eid91",
                            "top",
                            0,
                            0,
                            "linear",
                            "${LavamanosCopy6}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid90",
                            "left",
                            0,
                            0,
                            "linear",
                            "${LavamanosCopy6}",
                            '0px',
                            '0px'
                        ]
                    ]
                }
            },
            "SalseraRef": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            id: 'LavamanosCopy7',
                            symbolName: 'BaseCuad',
                            rect: ['0px', '0px', '365', '250', 'auto', 'auto']
                        },
                        {
                            type: 'text',
                            rect: ['8px', '10px', 'auto', 'auto', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px;\">​Salsera Refrigerada</p>',
                            id: 'Text8',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'left',
                            font: ['Arial, Helvetica, sans-serif', [18, 'px'], 'rgba(255,255,255,1)', '700', 'none', 'normal', 'break-word', 'nowrap']
                        },
                        {
                            type: 'image',
                            id: 'salseraRef',
                            rect: ['58px', '46px', '250px', '188px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/salseraRef.jpg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '365px', '250px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [
                        [
                            "eid96",
                            "top",
                            0,
                            0,
                            "linear",
                            "${LavamanosCopy7}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid95",
                            "left",
                            0,
                            0,
                            "linear",
                            "${LavamanosCopy7}",
                            '0px',
                            '0px'
                        ]
                    ]
                }
            },
            "MesonRef": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '365', '250', 'auto', 'auto'],
                            id: 'LavamanosCopy',
                            symbolName: 'BaseCuad',
                            type: 'rect'
                        },
                        {
                            rect: ['12px', '6px', 'auto', 'auto', 'auto', 'auto'],
                            id: 'Text',
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 18px; font-weight: 700; color: rgb(255, 255, 255);\">Mesón Refrigerado</span></p>',
                            font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'nowrap'],
                            type: 'text'
                        },
                        {
                            rect: ['53px', '50px', '250px', '188px', 'auto', 'auto'],
                            id: 'moduloRefrigerados',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/moduloRefrigerados.jpg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '365px', '250px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "VitRefVis": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            id: 'LavamanosCopy2',
                            symbolName: 'BaseCuad',
                            rect: ['0px', '0px', '365', '250', 'auto', 'auto']
                        },
                        {
                            type: 'text',
                            rect: ['10px', '7px', 'auto', 'auto', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 18px; font-weight: 700; color: rgb(255, 255, 255);\">Vitrina Refrigerada Visicooler</span></p>',
                            id: 'Text2',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'left',
                            font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'nowrap']
                        },
                        {
                            type: 'image',
                            id: 'vitRefVis',
                            rect: ['44px', '56px', '250px', '188px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/vitRefVis.jpg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '365px', '250px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "Refrigerador": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            id: 'LavamanosCopy3',
                            symbolName: 'BaseCuad',
                            rect: ['0px', '0px', '365', '250', 'auto', 'auto']
                        },
                        {
                            type: 'text',
                            rect: ['11px', '7px', 'auto', 'auto', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 18px; font-weight: 700; color: rgb(255, 255, 255);\">Refrigerador</span></p>',
                            id: 'Text3',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'left',
                            font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'nowrap']
                        },
                        {
                            type: 'image',
                            id: 'refrigerador',
                            rect: ['45px', '50px', '250px', '188px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/refrigerador.jpg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '365px', '250px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "VitRef": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            id: 'LavamanosCopy4',
                            symbolName: 'BaseCuad',
                            rect: ['0px', '0px', '365', '250', 'auto', 'auto']
                        },
                        {
                            type: 'text',
                            rect: ['10px', '7px', 'auto', 'auto', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 18px; font-weight: 700; color: rgb(255, 255, 255);\">Vitrina Refrigerada</span></p>',
                            id: 'Text4',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'left',
                            font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'nowrap']
                        },
                        {
                            type: 'image',
                            id: 'vitRef',
                            rect: ['49px', '50px', '250px', '188px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/vitRef.jpg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '365px', '250px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "VitRef2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '365', '250', 'auto', 'auto'],
                            id: 'LavamanosCopy5',
                            symbolName: 'BaseCuad',
                            type: 'rect'
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(255,255,255,1.00)', '700', 'none', 'normal', 'break-word', 'nowrap'],
                            type: 'text',
                            align: 'left',
                            id: 'Text7',
                            textStyle: ['', '', '', '', 'none'],
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 18px;\">Vitrina Refrigrada</span></p>',
                            rect: ['8px', '4px', 'auto', 'auto', 'auto', 'auto']
                        },
                        {
                            rect: ['51px', '50px', '250px', '188px', 'auto', 'auto'],
                            id: 'vitRef2',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/vitRef2.jpg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '365px', '250px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "Refrigerador2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '365', '250', 'auto', 'auto'],
                            id: 'LavamanosCopy12',
                            symbolName: 'BaseCuad',
                            type: 'rect'
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(255,255,255,1)', '700', 'none', 'normal', 'break-word', 'nowrap'],
                            type: 'text',
                            align: 'left',
                            id: 'Text12',
                            textStyle: ['', '', '', '', 'none'],
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 18px;\">Refrigerador 2</span></p>',
                            rect: ['10px', '5px', 'auto', 'auto', 'auto', 'auto']
                        },
                        {
                            rect: ['58px', '49px', '250px', '188px', 'auto', 'auto'],
                            id: 'refrigerador2',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/refrigerador2.jpg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '74px', '113px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "VitRef3": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '365', '250', 'auto', 'auto'],
                            id: 'LavamanosCopy8',
                            symbolName: 'BaseCuad',
                            type: 'rect'
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(255,255,255,1)', '700', 'none', 'normal', 'break-word', 'nowrap'],
                            type: 'text',
                            align: 'left',
                            id: 'Text8',
                            textStyle: ['', '', '', '', 'none'],
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 18px;\">Vitrina Refrigerada 3</span></p>',
                            rect: ['9px', '4px', 'auto', 'auto', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '365px', '250px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [
                        [
                            "eid139",
                            "left",
                            0,
                            0,
                            "linear",
                            "${LavamanosCopy8}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid140",
                            "top",
                            0,
                            0,
                            "linear",
                            "${LavamanosCopy8}",
                            '0px',
                            '0px'
                        ]
                    ]
                }
            },
            "Congelador": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '365', '250', 'auto', 'auto'],
                            id: 'LavamanosCopy9',
                            symbolName: 'BaseCuad',
                            type: 'rect'
                        },
                        {
                            rect: ['10px', '4px', 'auto', 'auto', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(255,255,255,1)', '700', 'none', 'normal', 'break-word', 'nowrap'],
                            align: 'left',
                            id: 'Text9',
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 18px;\">Congelador</span></p>',
                            textStyle: ['', '', '', '', 'none'],
                            type: 'text'
                        },
                        {
                            rect: ['58px', '52px', '250px', '188px', 'auto', 'auto'],
                            id: 'congeladora',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/congeladora.jpg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '365px', '250px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [
                        [
                            "eid345",
                            "top",
                            0,
                            0,
                            "linear",
                            "${LavamanosCopy9}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid346",
                            "left",
                            0,
                            0,
                            "linear",
                            "${LavamanosCopy9}",
                            '0px',
                            '0px'
                        ]
                    ]
                }
            },
            "Licuadora": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '365', '250', 'auto', 'auto'],
                            id: 'LavamanosCopy10',
                            symbolName: 'BaseCuad',
                            type: 'rect'
                        },
                        {
                            rect: ['10px', '5px', 'auto', 'auto', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(255,255,255,1)', '700', 'none', 'normal', 'break-word', 'nowrap'],
                            align: 'left',
                            id: 'Text10',
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 18px;\">Licuadora</span></p>',
                            textStyle: ['', '', '', '', 'none'],
                            type: 'text'
                        },
                        {
                            rect: ['53px', '54px', '250px', '188px', 'auto', 'auto'],
                            id: 'licuadora',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/licuadora.jpg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '365px', '250px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [
                        [
                            "eid349",
                            "left",
                            0,
                            0,
                            "linear",
                            "${LavamanosCopy10}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid350",
                            "top",
                            0,
                            0,
                            "linear",
                            "${LavamanosCopy10}",
                            '0px',
                            '0px'
                        ]
                    ]
                }
            },
            "PelPapas": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '365', '250', 'auto', 'auto'],
                            id: 'LavamanosCopy11',
                            symbolName: 'BaseCuad',
                            type: 'rect'
                        },
                        {
                            rect: ['12px', '5px', 'auto', 'auto', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(255,255,255,1)', '700', 'none', 'normal', 'break-word', 'nowrap'],
                            align: 'left',
                            id: 'Text11',
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 18px;\">Peladora de papas</span></p>',
                            textStyle: ['', '', '', '', 'none'],
                            type: 'text'
                        },
                        {
                            rect: ['58px', '49px', '250px', '188px', 'auto', 'auto'],
                            id: 'peladoraPapas',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/peladoraPapas.jpg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '365px', '250px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [
                        [
                            "eid354",
                            "top",
                            0,
                            0,
                            "linear",
                            "${LavamanosCopy11}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid353",
                            "left",
                            0,
                            0,
                            "linear",
                            "${LavamanosCopy11}",
                            '0px',
                            '0px'
                        ]
                    ]
                }
            },
            "ProcVeg": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '365', '250', 'auto', 'auto'],
                            id: 'LavamanosCopy13',
                            symbolName: 'BaseCuad',
                            type: 'rect'
                        },
                        {
                            rect: ['10px', '5px', 'auto', 'auto', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(255,255,255,1)', '700', 'none', 'normal', 'break-word', 'nowrap'],
                            align: 'left',
                            id: 'Text13',
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 18px;\">Procesador de Vegetales</span></p>',
                            textStyle: ['', '', '', '', 'none'],
                            type: 'text'
                        },
                        {
                            rect: ['52px', '50px', '250px', '188px', 'auto', 'auto'],
                            id: 'procesadordeVegetales',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/procesadordeVegetales.jpg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '365px', '250px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [
                        [
                            "eid367",
                            "left",
                            0,
                            0,
                            "linear",
                            "${LavamanosCopy13}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid368",
                            "top",
                            0,
                            0,
                            "linear",
                            "${LavamanosCopy13}",
                            '0px',
                            '0px'
                        ]
                    ]
                }
            },
            "CocinaSemiInd": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '365', '250', 'auto', 'auto'],
                            id: 'LavamanosCopy15',
                            symbolName: 'BaseCuad',
                            type: 'rect'
                        },
                        {
                            rect: ['8px', '6px', 'auto', 'auto', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(255,255,255,1)', '700', 'none', 'normal', 'break-word', 'nowrap'],
                            align: 'left',
                            id: 'Text14',
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 18px;\">Cocina Semi Industrial</span></p>',
                            textStyle: ['', '', '', '', 'none'],
                            type: 'text'
                        },
                        {
                            rect: ['58px', '50px', '250px', '188px', 'auto', 'auto'],
                            id: 'cocinaSemiindustrial',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/cocinaSemiindustrial.jpg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '365px', '250px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [
                        [
                            "eid374",
                            "top",
                            0,
                            0,
                            "linear",
                            "${LavamanosCopy15}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid373",
                            "left",
                            0,
                            0,
                            "linear",
                            "${LavamanosCopy15}",
                            '0px',
                            '0px'
                        ]
                    ]
                }
            },
            "HornoComb": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '365', '250', 'auto', 'auto'],
                            id: 'LavamanosCopy16',
                            symbolName: 'BaseCuad',
                            type: 'rect'
                        },
                        {
                            rect: ['10px', '5px', 'auto', 'auto', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(255,255,255,1)', '700', 'none', 'normal', 'break-word', 'nowrap'],
                            align: 'left',
                            id: 'Text15',
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 18px;\">Horno Combinado</span></p>',
                            textStyle: ['', '', '', '', 'none'],
                            type: 'text'
                        },
                        {
                            rect: ['49px', '49px', '250px', '188px', 'auto', 'auto'],
                            id: 'hornoCombinado',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/hornoCombinado.jpg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '365px', '250px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [
                        [
                            "eid378",
                            "top",
                            0,
                            0,
                            "linear",
                            "${LavamanosCopy16}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid377",
                            "left",
                            0,
                            0,
                            "linear",
                            "${LavamanosCopy16}",
                            '0px',
                            '0px'
                        ]
                    ]
                }
            },
            "HornoInd": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '365', '250', 'auto', 'auto'],
                            id: 'LavamanosCopy17',
                            symbolName: 'BaseCuad',
                            type: 'rect'
                        },
                        {
                            rect: ['9px', '5px', 'auto', 'auto', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(255,255,255,1)', '700', 'none', 'normal', 'break-word', 'nowrap'],
                            align: 'left',
                            id: 'Text16',
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 18px;\">Horno Industrial</span></p>',
                            textStyle: ['', '', '', '', 'none'],
                            type: 'text'
                        },
                        {
                            rect: ['58px', '50px', '250px', '188px', 'auto', 'auto'],
                            id: 'hornoIndustrial',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/hornoIndustrial.jpg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '365px', '250px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [
                        [
                            "eid381",
                            "top",
                            0,
                            0,
                            "linear",
                            "${LavamanosCopy17}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid380",
                            "left",
                            0,
                            0,
                            "linear",
                            "${LavamanosCopy17}",
                            '0px',
                            '0px'
                        ]
                    ]
                }
            },
            "Freidora": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '365', '250', 'auto', 'auto'],
                            id: 'LavamanosCopy18',
                            symbolName: 'BaseCuad',
                            type: 'rect'
                        },
                        {
                            rect: ['11px', '4px', 'auto', 'auto', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(255,255,255,1)', '700', 'none', 'normal', 'break-word', 'nowrap'],
                            align: 'left',
                            id: 'Text17',
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 18px;\">Freidora</span></p>',
                            textStyle: ['', '', '', '', 'none'],
                            type: 'text'
                        },
                        {
                            rect: ['58px', '49px', '250px', '188px', 'auto', 'auto'],
                            id: 'freidora',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/freidora.jpg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '365px', '250px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [
                        [
                            "eid388",
                            "left",
                            0,
                            0,
                            "linear",
                            "${LavamanosCopy18}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid389",
                            "top",
                            0,
                            0,
                            "linear",
                            "${LavamanosCopy18}",
                            '0px',
                            '0px'
                        ]
                    ]
                }
            },
            "PlanchaChurr": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '365', '250', 'auto', 'auto'],
                            id: 'LavamanosCopy19',
                            symbolName: 'BaseCuad',
                            type: 'rect'
                        },
                        {
                            rect: ['11px', '5px', 'auto', 'auto', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(255,255,255,1)', '700', 'none', 'normal', 'break-word', 'nowrap'],
                            align: 'left',
                            id: 'Text18',
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 18px;\">Plancha Churrasquera</span></p>',
                            textStyle: ['', '', '', '', 'none'],
                            type: 'text'
                        },
                        {
                            rect: ['50px', '52px', '250px', '188px', 'auto', 'auto'],
                            id: 'planchaChurrasquera',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/planchaChurrasquera.jpg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '365px', '250px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [
                        [
                            "eid393",
                            "left",
                            0,
                            0,
                            "linear",
                            "${LavamanosCopy19}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid392",
                            "top",
                            0,
                            0,
                            "linear",
                            "${LavamanosCopy19}",
                            '0px',
                            '0px'
                        ]
                    ]
                }
            },
            "ParrGrill": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '365', '250', 'auto', 'auto'],
                            id: 'LavamanosCopy20',
                            symbolName: 'BaseCuad',
                            type: 'rect'
                        },
                        {
                            rect: ['10px', '4px', 'auto', 'auto', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(255,255,255,1)', '700', 'none', 'normal', 'break-word', 'nowrap'],
                            align: 'left',
                            id: 'Text19',
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 18px;\">Parrilla Grill</span></p>',
                            textStyle: ['', '', '', '', 'none'],
                            type: 'text'
                        },
                        {
                            rect: ['44px', '54px', '250px', '188px', 'auto', 'auto'],
                            id: 'parrillaGrill',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/parrillaGrill.jpg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '365px', '250px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [
                        [
                            "eid396",
                            "left",
                            0,
                            0,
                            "linear",
                            "${LavamanosCopy20}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid397",
                            "top",
                            0,
                            0,
                            "linear",
                            "${LavamanosCopy20}",
                            '0px',
                            '0px'
                        ]
                    ]
                }
            },
            "SartBas": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            id: 'LavamanosCopy21',
                            symbolName: 'BaseCuad',
                            rect: ['0px', '0px', '365', '250', 'auto', 'auto']
                        },
                        {
                            type: 'text',
                            rect: ['9px', '5px', 'auto', 'auto', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 18px;\">Sartén Basculante</span></p>',
                            id: 'Text20',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'left',
                            font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(255,255,255,1)', '700', 'none', 'normal', 'break-word', 'nowrap']
                        },
                        {
                            type: 'image',
                            id: 'sartenBasc',
                            rect: ['49px', '53px', '250px', '188px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/sartenBasc.jpg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '365px', '250px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [
                        [
                            "eid408",
                            "left",
                            0,
                            0,
                            "linear",
                            "${LavamanosCopy21}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid409",
                            "top",
                            0,
                            0,
                            "linear",
                            "${LavamanosCopy21}",
                            '0px',
                            '0px'
                        ]
                    ]
                }
            },
            "Marmita": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '365', '250', 'auto', 'auto'],
                            id: 'LavamanosCopy22',
                            symbolName: 'BaseCuad',
                            type: 'rect'
                        },
                        {
                            rect: ['13px', '11px', 'auto', 'auto', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [18, 'px'], 'rgba(255,255,255,1)', '700', 'none', 'normal', 'break-word', 'nowrap'],
                            align: 'left',
                            id: 'Text21',
                            text: '<p style=\"margin: 0px;\">M<span style=\"font-size: 18px;\">armita</span></p>',
                            textStyle: ['', '', '', '', 'none'],
                            type: 'text'
                        },
                        {
                            rect: ['58px', '48px', '250px', '188px', 'auto', 'auto'],
                            id: 'marmita',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/marmita.jpg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '365px', '250px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [
                        [
                            "eid415",
                            "top",
                            0,
                            0,
                            "linear",
                            "${LavamanosCopy22}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid414",
                            "left",
                            0,
                            0,
                            "linear",
                            "${LavamanosCopy22}",
                            '0px',
                            '0px'
                        ]
                    ]
                }
            },
            "Campana": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            id: 'LavamanosCopy23',
                            symbolName: 'BaseCuad',
                            rect: ['0px', '0px', '365', '250', 'auto', 'auto']
                        },
                        {
                            type: 'text',
                            rect: ['11px', '10px', 'auto', 'auto', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px;\">​Campana</p>',
                            id: 'Text22',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'left',
                            font: ['Arial, Helvetica, sans-serif', [18, 'px'], 'rgba(255,255,255,1)', '700', 'none', 'normal', 'break-word', 'nowrap']
                        },
                        {
                            type: 'image',
                            id: 'campana',
                            rect: ['45px', '53px', '250px', '188px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/campana.jpg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '365px', '250px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [
                        [
                            "eid418",
                            "left",
                            0,
                            0,
                            "linear",
                            "${LavamanosCopy23}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid419",
                            "top",
                            0,
                            0,
                            "linear",
                            "${LavamanosCopy23}",
                            '0px',
                            '0px'
                        ]
                    ]
                }
            },
            "AnafeInd": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '365', '250', 'auto', 'auto'],
                            id: 'LavamanosCopy24',
                            symbolName: 'BaseCuad',
                            type: 'rect'
                        },
                        {
                            rect: ['10px', '10px', 'auto', 'auto', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [18, 'px'], 'rgba(255,255,255,1)', '700', 'none', 'normal', 'break-word', 'nowrap'],
                            align: 'left',
                            id: 'Text23',
                            text: '<p style=\"margin: 0px;\">​Anafe Industrial</p>',
                            textStyle: ['', '', '', '', 'none'],
                            type: 'text'
                        },
                        {
                            rect: ['52px', '51px', '250px', '188px', 'auto', 'auto'],
                            id: 'anafeIndustrial',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/anafeIndustrial.jpg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '365px', '250px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [
                        [
                            "eid431",
                            "top",
                            0,
                            0,
                            "linear",
                            "${LavamanosCopy24}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid430",
                            "left",
                            0,
                            0,
                            "linear",
                            "${LavamanosCopy24}",
                            '0px',
                            '0px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("index_edgeActions.js");
})("EDGE-136382260");
