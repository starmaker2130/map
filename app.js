// author(s):  Patrice-Morgan Ongoly
// version: 0.2.2
// last modified: Saturday, June 29, 2019 14:32 EST
// description: 

// required modules
var bodyParser = require('body-parser');
var express = require('express');
var WhichBrowser = require('which-browser');
// main application instance

// var keypress = require('keypress');

var app = express();

// main application settings

var config = {
    PORT: process.env.PORT || 3000,
    DIRECTORY: [
        "./",           /* 0 */
        "./css",        /* 1 */
        "./js",         /* 2 */
        "./media/texture",  /* 3 */
        "./media/gifs", /* 4 */
        "./media/pattern", /* 5 */
        "./media/img",  /* 6 */
        "./media/audio",   /* 7 */
        "./media/model",    /* 8 */
        "./media/upload",       /* 9 */
        "./media/fonts"     /* 10 */
    ]
};

var deviceType = 'unknown';
let dir = config.DIRECTORY;

app.engine('html', require('ejs').renderFile);

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

app.use(express.static('/'));

app.get('/', function(req, res){
    var result = new WhichBrowser(req.headers);
    console.log(result.toString());
    if(result.isType('desktop')){
        console.log('This is a desktop computer.');
        deviceType = 'desktop';
    }
    else{
        console.log('This is a mobile device.');
        deviceType = 'mobile';
    }
    
    res.render('broadcastOriginalAugmentedRealityDapps.html',{root: dir[0]});
});

/*boards*/
app.get('/b/:dia_handle', function(req, res){
    let handle = req.params.dia_handle;
    handle = handle.substring(1);
    res.render(handle+'.html',{root: dir[0]});
});

/* DIAs */

/**/

app.get('/hosts', function(req, res){
    res.render('hosts.html',{root: dir[0]});
});

app.get('/dias', function(req, res){
    res.render('dias.html',{root: dir[0]});
});

app.get('/css/:stylesheet_id', function(req, res){
    let stylesheet_id = req.params.stylesheet_id;
    res.sendFile(stylesheet_id, {root: dir[1]});
});

app.get('/js/:script_id', function(req, res){
    var script_id = req.params.script_id;
    res.sendFile(script_id, {root: dir[2]});
});

app.get('/media/texture/:texture_id', function(req, res){
    var texture_id = req.params.texture_id;
    res.sendFile(texture_id, {root: dir[3]});
});

app.get('/media/gifs/:gif_id', function(req, res){
    var gif_id = req.params.gif_id;
    res.sendFile(gif_id, {root: dir[4]});
});

app.get('/media/pattern/:pattern_id', function(req, res){
    var pattern_id = req.params.pattern_id;
    res.sendFile(pattern_id+'.patt', {root: dir[5]});
});

app.get('/media/img/:img_id', function(req, res){
    var img_id = req.params.img_id;
    res.sendFile(img_id, {root: dir[6]});
});

app.get('/media/audio/:audio_id', function(req, res){
    var audio_id = req.params.audio_id;
    res.sendFile(sound_id, {root: dir[7]});
});

app.get('/media/model/:model_id', function(req, res){
    var model_id = req.params.model_id;
    res.sendFile(model_id, {root: dir[8]});
});

app.get('/media/uploads/:upload_id', function(req, res){
    var upload_id = req.params.upload_id;
    res.sendFile(upload_id, {root: dir[9]});
});

app.get('/media/fonts/:font_id', function(req, res){
    var font_id = req.params.font_id;
    res.sendFile(font_id, {root: dir[10]});
});

var io = require('socket.io').listen(app.listen(config.PORT, function(){
    console.log('------------------------------------------');
    console.log(' connecting to HOUSE OF VENUS BE')
    console.log(`[0] listening on port ${config.PORT}`);
    console.log('------------------------------------------');
    
}));

var scenes = [];
/*

orientation: 0 = landmark; 1 = face; 2 = hand

*/

var guests = [
    
];

var stations = {
    default: {
        name: 'AUGMENTED REALITY INTERNET ASSISTANT Data Specification 0.20.0',
        handle: '@ARia',
        neighbors: {
            ordinality: 0,
            cARds: 0,
            weight: 0
        },
        content:{
            capacity: 0,
            percentage: 0,
            value: {
                LYOKOIN: 0,
                USD: 0,
                EUR: 0
            },
            moderators: [],
            description: 'This is a the default configuration for the AUGMENTED REALITY INTERNET ASSISTANT as defined for the HOUSE OF VENUS PUBLIC AUGMENTED REALITY KINECTOME v. 0.20.0 released on May 21, 2019 at 00:00 (UTC-0500).'
        }
    },
    'Branch Ave': {
        name: 'Branch Ave',
        handle:  '@branchave',
        neighbors: {
            ordinality: 0,
            cARds: 0,
            weight: 0
        },
        content:{
            capacity: 0,
            percentage: 0,
            value: {
                LYOKOIN: 0,
                USD: 0,
                EUR: 0
            },
            moderators: [],
            description: 'This is a the default configuration for the AUGMENTED REALITY INTERNET ASSISTANT as defined for the HOUSE OF VENUS PUBLIC AUGMENTED REALITY KINECTOME v. 0.20.0 released on May 21, 2019 at 00:00 (UTC-0500).',
            id: 'branch-ave-station',
            position: {
                x: 580,
                y: 450
            },
            fillColor: 'white',
            mission: `<div style='width: 50px; height: 50px; border-radius: 50%; display: inline-block; background-image: url("../media/texture/hov-md.png/"); background-size: 100% 100%; margin: 5% 9%;' id='branch-boARd-portal' class='boARd-launch-pin'></div><div style='width: 50px; height: 50px; border-radius: 50%; display: inline-block; background-image: url("../media/img/docs-icon.png/"); background-size: 100% 100%; margin: 5% 9%;' class='boARd-launch-info'></div>`
        }
    },
    'Suitland': {
        name: 'Suitland',
        handle: '@suitland',
        neighbors: {
            ordinality: 0,
            cARds: 0,
            weight: 0
        },
        content:{
            capacity: 0,
            percentage: 0,
            value: {
                LYOKOIN: 0,
                USD: 0,
                EUR: 0
            },
            moderators: [],
            description: 'This is a the default configuration for the AUGMENTED REALITY INTERNET ASSISTANT as defined for the HOUSE OF VENUS PUBLIC AUGMENTED REALITY KINECTOME v. 0.20.0 released on May 21, 2019 at 00:00 (UTC-0500).',
            id: 'suitland-station',
            position: {
                x: 555,
                y: 425
            },
            fillColor: 'white',
            mission: `<div style='width: 50px; height: 50px; border-radius: 50%; display: inline-block; background-image: url("../media/texture/hov-md.png/"); background-size: 100% 100%; margin: 5% 9%;' id='suitland-boARd-portal' class='boARd-launch-pin'></div><div style='width: 50px; height: 50px; border-radius: 50%; display: inline-block; background-image: url("../media/img/docs-icon.png/"); background-size: 100% 100%; margin: 5% 9%;' class='boARd-launch-info'></div>`
        },
    },
    'Naylor Rd': {
        name: 'Naylor Rd',
        handle: '@naylor',
        neighbors: {
            ordinality: 0,
            cARds: 0,
            weight: 0
        },
        content:{
            capacity: 0,
            percentage: 0,
            value: {
                LYOKOIN: 0,
                USD: 0,
                EUR: 0
            },
            moderators: [],
            description: 'This is a the default configuration for the AUGMENTED REALITY INTERNET ASSISTANT as defined for the HOUSE OF VENUS PUBLIC AUGMENTED REALITY KINECTOME v. 0.20.0 released on May 21, 2019 at 00:00 (UTC-0500).',
            id: 'naylor-rd-station',
            position: {
                  x: 530,
                  y: 400
            },
            fillColor: 'white',
            mission: `<div style='width: 50px; height: 50px; border-radius: 50%; display: inline-block; background-image: url("../media/texture/hov-md.png/"); background-size: 100% 100%; margin: 5% 9%;' id='naylor-boARd-portal' class='boARd-launch-pin'></div><div style='width: 50px; height: 50px; border-radius: 50%; display: inline-block; background-image: url("../media/img/docs-icon.png/"); background-size: 100% 100%; margin: 5% 9%;' class='boARd-launch-info'></div>`
        }
    },
    'Southern Ave': {
        name: 'Southern Ave',
        handle: '@southernave',
        neighbors: {
            ordinality: 0,
            cARds: 0,
            weight: 0
        },
        content:{
            capacity: 0,
            percentage: 0,
            value: {
                LYOKOIN: 0,
                USD: 0,
                EUR: 0
            },
            moderators: [],
            description: 'This is a the default configuration for the AUGMENTED REALITY INTERNET ASSISTANT as defined for the HOUSE OF VENUS PUBLIC AUGMENTED REALITY KINECTOME v. 0.20.0 released on May 21, 2019 at 00:00 (UTC-0500).',
            id: 'southern-ave-station',
            position: {
                x: 500,
                y: 405
            },
            fillColor: 'white',
            mission: `<div style='width: 50px; height: 50px; border-radius: 50%; display: inline-block; background-image: url("../media/texture/hov-md.png/"); background-size: 100% 100%; margin: 5% 9%;' id='southern-boARd-portal' class='boARd-launch-pin'></div><div style='width: 50px; height: 50px; border-radius: 50%; display: inline-block; background-image: url("../media/img/docs-icon.png/"); background-size: 100% 100%; margin: 5% 9%;' class='boARd-launch-info'></div>`
        }
    },
    'Congress Heights': {
        handle: '@congressheights',
        neighbors: {
            ordinality: 0,
            cARds: 0,
            weight: 0
        },
        content:{
            capacity: 0,
            percentage: 0,
            value: {
                LYOKOIN: 0,
                USD: 0,
                EUR: 0
            },
            moderators: [],
            description: 'This is a the default configuration for the AUGMENTED REALITY INTERNET ASSISTANT as defined for the HOUSE OF VENUS PUBLIC AUGMENTED REALITY KINECTOME v. 0.20.0 released on May 21, 2019 at 00:00 (UTC-0500).',
            name: 'Congress Heights',
            id: 'congress-heights-station',
            position: {
                x: 470,
                y: 380
            },
            fillColor: 'white',
            mission: `<div style='width: 50px; height: 50px; border-radius: 50%; display: inline-block; background-image: url("../media/texture/hov-md.png/"); background-size: 100% 100%; margin: 5% 9%;' id='congressheights-boARd-portal' class='boARd-launch-pin'></div><div style='width: 50px; height: 50px; border-radius: 50%; display: inline-block; background-image: url("../media/img/docs-icon.png/"); background-size: 100% 100%; margin: 5% 9%;' class='boARd-launch-info'></div>`
        }
    },
    'Anacostia': {
        name: 'Anacostia',
        handle: '@anacostia',
        neighbors: {
            ordinality: 0,
            cARds: 0,
            weight: 0
        },
        content:{
            capacity: 0,
            percentage: 0,
            value: {
                LYOKOIN: 0,
                USD: 0,
                EUR: 0
            },
            moderators: [],
            description: 'This is a the default configuration for the AUGMENTED REALITY INTERNET ASSISTANT as defined for the HOUSE OF VENUS PUBLIC AUGMENTED REALITY KINECTOME v. 0.20.0 released on May 21, 2019 at 00:00 (UTC-0500).',            
            id: 'anacostia-station',
            position: {
                x: 450,
                y: 360
            },
            fillColor: 'white',
            mission: `<div style='width: 50px; height: 50px; border-radius: 50%; display: inline-block; background-image: url("../media/texture/hov-md.png/"); background-size: 100% 100%; margin: 5% 9%;' id='anacostia-boARd-portal' class='boARd-launch-pin'></div><div style='width: 50px; height: 50px; border-radius: 50%; display: inline-block; background-image: url("../media/img/docs-icon.png/"); background-size: 100% 100%; margin: 5% 9%;' class='boARd-launch-info'></div>`
        },
    },
    'Navy Yard-Ballpark': {
        name: 'Navy Yard-Ballpark',
        handle: '@navyyard',
        neighbors: {
            ordinality: 0,
            cARds: 0,
            weight: 0
        },
        content:{
            capacity: 0,
            percentage: 0,
            value: {
                LYOKOIN: 0,
                USD: 0,
                EUR: 0
            },
            moderators: [],
            description: 'This is a the default configuration for the AUGMENTED REALITY INTERNET ASSISTANT as defined for the HOUSE OF VENUS PUBLIC AUGMENTED REALITY KINECTOME v. 0.20.0 released on May 21, 2019 at 00:00 (UTC-0500).',
            id: 'navy-yard-ballpark-station',
            position: {
                x: 410,
                y: 340
            },
            fillColor: 'white',
            mission: `<div style='width: 50px; height: 50px; border-radius: 50%; display: inline-block; background-image: url("../media/texture/hov-md.png/"); background-size: 100% 100%; margin: 5% 9%;' id='ballpark-boARd-portal' class='boARd-launch-pin'></div><div style='width: 50px; height: 50px; border-radius: 50%; display: inline-block; background-image: url("../media/img/docs-icon.png/"); background-size: 100% 100%; margin: 5% 9%;' class='boARd-launch-info'></div>`
        }
    },
    'Waterfront': {
        name: 'Waterfront',
        handle: '@waterfront',
        neighbors: {
            ordinality: 0,
            cARds: 0,
            weight: 0
        },
        content:{
            capacity: 0,
            percentage: 0,
            value: {
                LYOKOIN: 0,
                USD: 0,
                EUR: 0
            },
            moderators: [],
            description: 'This is a the default configuration for the AUGMENTED REALITY INTERNET ASSISTANT as defined for the HOUSE OF VENUS PUBLIC AUGMENTED REALITY KINECTOME v. 0.20.0 released on May 21, 2019 at 00:00 (UTC-0500).',
            id: 'waterfront-station',
            position: {
                x: 380,
                y: 340
            },
            fillColor: 'white',
            mission: `<div style='width: 50px; height: 50px; border-radius: 50%; display: inline-block; background-image: url("../media/texture/hov-md.png/"); background-size: 100% 100%; margin: 5% 9%;' id='waterfront-boARd-portal' class='boARd-launch-pin'></div><div style='width: 50px; height: 50px; border-radius: 50%; display: inline-block; background-image: url("../media/img/docs-icon.png/"); background-size: 100% 100%; margin: 5% 9%;' class='boARd-launch-info'></div>`
        }
    },
    'L Enfant Plaza': {
        name: 'L Enfant Plaza',
        handle: '@lenfant',
        neighbors: {
            ordinality: 0,
            cARds: 0,
            weight: 0
        },
        content:{
            capacity: 0,
            percentage: 0,
            value: {
                LYOKOIN: 0,
                USD: 0,
                EUR: 0
            },
            moderators: [],
            description: 'This is a the default configuration for the AUGMENTED REALITY INTERNET ASSISTANT as defined for the HOUSE OF VENUS PUBLIC AUGMENTED REALITY KINECTOME v. 0.20.0 released on May 21, 2019 at 00:00 (UTC-0500).',
            id: 'lenfant-plaza-station',
            position: {
                x: 360,
                y: 280
            },
            fillColor: 'white',
            mission: `<div style='width: 50px; height: 50px; border-radius: 50%; display: inline-block; background-image: url("../media/texture/hov-md.png/"); background-size: 100% 100%; margin: 5% 9%;' id='lenfant-boARd-portal' class='boARd-launch-pin'></div><div style='width: 50px; height: 50px; border-radius: 50%; display: inline-block; background-image: url("../media/img/docs-icon.png/"); background-size: 100% 100%; margin: 5% 9%;' class='boARd-launch-info'></div>`
        }
    },
    'Archives': {
        name: 'Archives',
        handle: '@archives',
        neighbors: {
            ordinality: 0,
            cARds: 0,
            weight: 0
        },
        content:{
            capacity: 0,
            percentage: 0,
            value: {
                LYOKOIN: 0,
                USD: 0,
                EUR: 0
            },
            moderators: [],
            description: 'This is a the default configuration for the AUGMENTED REALITY INTERNET ASSISTANT as defined for the HOUSE OF VENUS PUBLIC AUGMENTED REALITY KINECTOME v. 0.20.0 released on May 21, 2019 at 00:00 (UTC-0500).',
            id: 'archives-station',
            position: {
                x: 360,
                y: 250
            },
            fillColor: 'white',
            mission: `<div style='width: 50px; height: 50px; border-radius: 50%; display: inline-block; background-image: url("../media/texture/hov-md.png/"); background-size: 100% 100%; margin: 5% 9%;' id='archives-boARd-portal' class='boARd-launch-pin'></div><div style='width: 50px; height: 50px; border-radius: 50%; display: inline-block; background-image: url("../media/img/docs-icon.png/"); background-size: 100% 100%; margin: 5% 9%;' class='boARd-launch-info'></div>`
        }
    },
    'Gallery Place': {
        name: 'Gallery Place',
        handle: '@galleryplace',
        neighbors: {
            ordinality: 0,
            cARds: 0,
            weight: 0
        },
        content:{
            capacity: 0,
            percentage: 0,
            value: {
                LYOKOIN: 0,
                USD: 0,
                EUR: 0
            },
            moderators: [],
            description: 'This is a the default configuration for the AUGMENTED REALITY INTERNET ASSISTANT as defined for the HOUSE OF VENUS PUBLIC AUGMENTED REALITY KINECTOME v. 0.20.0 released on May 21, 2019 at 00:00 (UTC-0500).',
            id: 'gallery-place-station',
            position: {
                x: 360,
                y: 220
            },
            fillColor: 'white',
            mission: `<div style='width: 50px; height: 50px; border-radius: 50%; display: inline-block; background-image: url("../media/texture/hov-md.png/"); background-size: 100% 100%; margin: 5% 9%;' id='galleryplace-boARd-portal' class='boARd-launch-pin'></div><div style='width: 50px; height: 50px; border-radius: 50%; display: inline-block; background-image: url("../media/img/docs-icon.png/"); background-size: 100% 100%; margin: 5% 9%;' class='boARd-launch-info'></div>`
        }
    },
    'Mt Vernon Sq/7th St-Convention Center': {
        name: 'Mt Vernon Sq/7th St-Convention Center',
        handle: '@mtvernon',
        neighbors: {
            ordinality: 0,
            cARds: 0,
            weight: 0
        },
        content:{
            capacity: 0,
            percentage: 0,
            value: {
                LYOKOIN: 0,
                USD: 0,
                EUR: 0
            },
            moderators: [],
            description: 'This is a the default configuration for the AUGMENTED REALITY INTERNET ASSISTANT as defined for the HOUSE OF VENUS PUBLIC AUGMENTED REALITY KINECTOME v. 0.20.0 released on May 21, 2019 at 00:00 (UTC-0500).',
            id: 'mt-vernon-station',
            position: {
                x: 360,
                y: 190
            },
            fillColor: 'white',
            mission: `<div style='width: 50px; height: 50px; border-radius: 50%; display: inline-block; background-image: url("../media/texture/hov-md.png/"); background-size: 100% 100%; margin: 5% 9%;' id='mtvernon-boARd-portal' class='boARd-launch-pin'></div><div style='width: 50px; height: 50px; border-radius: 50%; display: inline-block; background-image: url("../media/img/docs-icon.png/"); background-size: 100% 100%; margin: 5% 9%;' class='boARd-launch-info'></div>`
        }
    },
    'Shaw-Howard U': {
        name: 'Shaw-Howard U',
        handle: '@howard',
        neighbors: {
            ordinality: 0,
            cARds: 0,
            weight: 0
        },
        content:{
            capacity: 0,
            percentage: 0,
            value: {
                LYOKOIN: 0,
                USD: 0,
                EUR: 0
            },
            moderators: [],
            description: 'This is a the default configuration for the AUGMENTED REALITY INTERNET ASSISTANT as defined for the HOUSE OF VENUS PUBLIC AUGMENTED REALITY KINECTOME v. 0.20.0 released on May 21, 2019 at 00:00 (UTC-0500).',
            id: 'shaw-howardu-station',
            position: {
                x: 360,
                y: 160
            },
            fillColor: 'white',
            mission: `<div style='width: 50px; height: 50px; border-radius: 50%; display: inline-block; background-image: url("../media/texture/hov-md.png/"); background-size: 100% 100%; margin: 5% 9%;' id='shaw-boARd-portal' class='boARd-launch-pin'></div><div style='width: 50px; height: 50px; border-radius: 50%; display: inline-block; background-image: url("../media/img/docs-icon.png/"); background-size: 100% 100%; margin: 5% 9%;' class='boARd-launch-info'></div>`
        }
    },
    'U Street': {
        name: 'U Street',
        handle: '@ustreet',
        neighbors: {
            ordinality: 0,
            cARds: 0,
            weight: 0
        },
        content:{
            capacity: 0,
            percentage: 0,
            value: {
                LYOKOIN: 0,
                USD: 0,
                EUR: 0
            },
            moderators: [],
            description: 'This is a the default configuration for the AUGMENTED REALITY INTERNET ASSISTANT as defined for the HOUSE OF VENUS PUBLIC AUGMENTED REALITY KINECTOME v. 0.20.0 released on May 21, 2019 at 00:00 (UTC-0500).',
            id: 'u-street-station',
            position: {
                x: 340,
                y: 140
            },
            fillColor: 'white',
            mission: `<div style='width: 50px; height: 50px; border-radius: 50%; display: inline-block; background-image: url("../media/texture/hov-md.png/"); background-size: 100% 100%; margin: 5% 9%;' id='ustreet-boARd-portal' class='boARd-launch-pin'></div><div style='width: 50px; height: 50px; border-radius: 50%; display: inline-block; background-image: url("../media/img/docs-icon.png/"); background-size: 100% 100%; margin: 5% 9%;' class='boARd-launch-info'></div>`
        }
    },
    'Columbia Heights': {
        name: 'Columbia Heights',
        handle: '@columbiaheights',
        neighbors: {
            ordinality: 0,
            cARds: 0,
            weight: 0
        },
        content:{
            capacity: 0,
            percentage: 0,
            value: {
                LYOKOIN: 0,
                USD: 0,
                EUR: 0
            },
            moderators: [],
            description: 'This is a the default configuration for the AUGMENTED REALITY INTERNET ASSISTANT as defined for the HOUSE OF VENUS PUBLIC AUGMENTED REALITY KINECTOME v. 0.20.0 released on May 21, 2019 at 00:00 (UTC-0500).',
            id: 'columbia-heights-station',
            position: {
                x: 310,
                y: 120
            },
            fillColor: 'white',
            mission: `<div style='width: 50px; height: 50px; border-radius: 50%; display: inline-block; background-image: url("../media/texture/hov-md.png/"); background-size: 100% 100%; margin: 5% 9%;' id='columbiaheights-boARd-portal' class='boARd-launch-pin'></div><div style='width: 50px; height: 50px; border-radius: 50%; display: inline-block; background-image: url("../media/img/docs-icon.png/"); background-size: 100% 100%; margin: 5% 9%;' class='boARd-launch-info'></div>`
        }
    },
    'Georgia Ave-Pentworth': {
        name: 'Georgia Ave-Pentworth',
        handle: '@georgiaave',
        neighbors: {
            ordinality: 0,
            cARds: 0,
            weight: 0
        },
        content:{
            capacity: 0,
            percentage: 0,
            value: {
                LYOKOIN: 0,
                USD: 0,
                EUR: 0
            },
            moderators: [],
            description: 'This is a the default configuration for the AUGMENTED REALITY INTERNET ASSISTANT as defined for the HOUSE OF VENUS PUBLIC AUGMENTED REALITY KINECTOME v. 0.20.0 released on May 21, 2019 at 00:00 (UTC-0500).',
            id: 'georgia-ave-pentworth-station',
            position: {
                x: 340,
                y: 100
            },
            fillColor: 'white',
            mission: `<div style='width: 50px; height: 50px; border-radius: 50%; display: inline-block; background-image: url("../media/texture/hov-md.png/"); background-size: 100% 100%; margin: 5% 9%;' id='georgiaave-boARd-portal' class='boARd-launch-pin'></div><div style='width: 50px; height: 50px; border-radius: 50%; display: inline-block; background-image: url("../media/img/docs-icon.png/"); background-size: 100% 100%; margin: 5% 9%;' class='boARd-launch-info'></div>`
        }
        },
    'Fort Totten': {
        name: 'Fort Totten',
        handle: '@forttotten',
        neighbors: {
            ordinality: 0,
            cARds: 0,
            weight: 0
        },
        content:{
            capacity: 0,
            percentage: 0,
            value: {
                LYOKOIN: 0,
                USD: 0,
                EUR: 0
            },
            moderators: [],
            description: 'This is a the default configuration for the AUGMENTED REALITY INTERNET ASSISTANT as defined for the HOUSE OF VENUS PUBLIC AUGMENTED REALITY KINECTOME v. 0.20.0 released on May 21, 2019 at 00:00 (UTC-0500).',
            id: 'fort-totten-station',
            position: {
                x: 370,
                y: 90
            },
            fillColor: 'white',
            mission: `<div style='cursor: pointer; width: 50px; height: 50px; background-image: url("../media/texture/hov-md.png"); background-size: 100% 100%; background-repeat: no-repeat; margin: 1% auto; border-radius: 50%; display: inline-block; border: 2px black solid;'></div> <div style='cursor: pointer; width: 50px; height: 50px; background-image: url("../media/img/shell.png"); background-size: 100% 100%; background-repeat: no-repeat; margin: 1% auto; border-radius: 50%; display: inline-block; border: 2px red solid;'></div>`
        }
    },
    'West Hyattsville': {
        name: 'West Hyattsville',
        handle: '@hyattsville',
            neighbors: {
            ordinality: 0,
            cARds: 0,
            weight: 0
        },
        content:{
            capacity: 0,
            percentage: 0,
            value: {
                LYOKOIN: 0,
                USD: 0,
                EUR: 0
            },
            moderators: [],
            description: 'This is a the default configuration for the AUGMENTED REALITY INTERNET ASSISTANT as defined for the HOUSE OF VENUS PUBLIC AUGMENTED REALITY KINECTOME v. 0.20.0 released on May 21, 2019 at 00:00 (UTC-0500).',
            id: 'west-hyattsville-station',
            position: {
                x: 410,
                y: 70
            },
            fillColor: 'white',
            mission: `<div style='width: 50px; height: 50px; border-radius: 50%; display: inline-block; background-image: url("../media/texture/hov-md.png/"); background-size: 100% 100%; margin: 5% 9%;' id='gmu-boARd-portal' class='boARd-launch-pin'></div><div style='width: 50px; height: 50px; border-radius: 50%; display: inline-block; background-image: url("../media/img/docs-icon.png/"); background-size: 100% 100%; margin: 5% 9%;' class='boARd-launch-info'></div>`
        }
    },
    'Prince Georges Plaza': {
        name: 'Prince Georges Plaza',
        handle: '@pgplaza',
        neighbors: {
            ordinality: 0,
            cARds: 0,
            weight: 0
        },
        content:{
            capacity: 0,
            percentage: 0,
            value: {
                LYOKOIN: 0,
                USD: 0,
                EUR: 0
            },
            moderators: [],
            description: 'This is a the default configuration for the AUGMENTED REALITY INTERNET ASSISTANT as defined for the HOUSE OF VENUS PUBLIC AUGMENTED REALITY KINECTOME v. 0.20.0 released on May 21, 2019 at 00:00 (UTC-0500).',
            id: 'pg-plaza-station',
            position: {
                x: 440,
                y: 50
            },
            fillColor: 'white',
            mission: `<div style='cursor: pointer; width: 50px; height: 50px; background-image: url("../media/texture/hov-md.png"); background-size: 100% 100%; background-repeat: no-repeat; margin: 1% auto; border-radius: 50%; display: inline-block; border: 2px black solid;'></div> <div style='cursor: pointer; width: 50px; height: 50px; background-image: url("../media/img/shell.png"); background-size: 100% 100%; background-repeat: no-repeat; margin: 1% auto; border-radius: 50%; display: inline-block; border: 2px red solid;'></div>`
        }
    },
    'College Park-U of Md': {
        name: 'College Park-U of Md',
        handle: '@collegepARk',
        neighbors: {
            ordinality: 0,
            cARds: 0,
            weight: 0
        },
        content:{
            capacity: 0,
            percentage: 0,
            value: {
                LYOKOIN: 0,
                USD: 0,
                EUR: 0
            },
            moderators: [],
            description: 'This is a the default configuration for the AUGMENTED REALITY INTERNET ASSISTANT as defined for the HOUSE OF VENUS PUBLIC AUGMENTED REALITY KINECTOME v. 0.20.0 released on May 21, 2019 at 00:00 (UTC-0500).',
            id: 'college-park-station',
            position: {
                x: 470,
                y: 30
            },
            fillColor: 'white',
            mission: `<div style='cursor: pointer; width: 50px; height: 50px; background-image: url("../media/texture/hov-md.png"); background-size: 100% 100%; background-repeat: no-repeat; margin: 1% auto; border-radius: 50%; display: inline-block; border: 2px black solid;'></div> <div style='cursor: pointer; width: 50px; height: 50px; background-image: url("../media/img/shell.png"); background-size: 100% 100%; background-repeat: no-repeat; margin: 1% auto; border-radius: 50%; display: inline-block; border: 2px red solid;'></div>`
        }
    },
    'Greenbelt': {
        name: 'Greenbelt',
        handle: '@greenbelt',
        neighbors: {
            ordinality: 0,
            cARds: 0,
            weight: 0
        },
        content:{
            capacity: 0,
            percentage: 0,
            value: {
                LYOKOIN: 0,
                USD: 0,
                EUR: 0
            },
            moderators: [],
            description: 'This is a the default configuration for the AUGMENTED REALITY INTERNET ASSISTANT as defined for the HOUSE OF VENUS PUBLIC AUGMENTED REALITY KINECTOME v. 0.20.0 released on May 21, 2019 at 00:00 (UTC-0500).',
            id: 'greenbelt-station',
            position: {
                x: 500,
                y: 15
            },
            fillColor: 'white',
            mission: `<div style='cursor: pointer; width: 50px; height: 50px; background-image: url("../media/texture/hov-md.png"); background-size: 100% 100%; background-repeat: no-repeat; margin: 1% auto; border-radius: 50%; display: inline-block; border: 2px black solid;'></div> <div style='cursor: pointer; width: 50px; height: 50px; background-image: url("../media/img/shell.png"); background-size: 100% 100%; background-repeat: no-repeat; margin: 1% auto; border-radius: 50%; display: inline-block; border: 2px red solid;'></div>`
        }
    },
    'Huntington': {
        name: 'Huntington',
        handle: '@huntington',
        neighbors: {
            ordinality: 0,
            cARds: 0,
            weight: 0
        },
        content:{
            capacity: 0,
            percentage: 0,
            value: {
                LYOKOIN: 0,
                USD: 0,
                EUR: 0
            },
            moderators: [],
            description: 'This is a the default configuration for the AUGMENTED REALITY INTERNET ASSISTANT as defined for the HOUSE OF VENUS PUBLIC AUGMENTED REALITY KINECTOME v. 0.20.0 released on May 21, 2019 at 00:00 (UTC-0500).',
            id: 'huntington-station',
            position: {
                x: 280,
                y: 470
            },
            fillColor: 'white',
            mission: `<div style='width: 50px; height: 50px; border-radius: 50%; display: inline-block; background-image: url("../media/texture/hov-md.png/"); background-size: 100% 100%; margin: 5% 9%;' id='huntington-boARd-portal' class='boARd-launch-pin'></div><div style='width: 50px; height: 50px; border-radius: 50%; display: inline-block; background-image: url("../media/img/docs-icon.png/"); background-size: 100% 100%; margin: 5% 9%;' class='boARd-launch-info'></div>`
        }
    },
    'Eisenhower Ave': {
        name: 'Eisenhower Ave',
        handle: '@eisenhower',
        neighbors: {
            ordinality: 0,
            cARds: 0,
            weight: 0
        },
        content:{
            capacity: 0,
            percentage: 0,
            value: {
                LYOKOIN: 0,
                USD: 0,
                EUR: 0
            },
            moderators: [],
            description: 'This is a the default configuration for the AUGMENTED REALITY INTERNET ASSISTANT as defined for the HOUSE OF VENUS PUBLIC AUGMENTED REALITY KINECTOME v. 0.20.0 released on May 21, 2019 at 00:00 (UTC-0500).',
            id: 'eisenhower-ave-station',
            position: {
                x: 280,
                y: 445
            },
            fillColor: 'white',
            mission:  `<div style='width: 50px; height: 50px; border-radius: 50%; display: inline-block; background-image: url("../media/texture/hov-md.png/"); background-size: 100% 100%; margin: 5% 9%;' id='eisenhower-boARd-portal' class='boARd-launch-pin'></div><div style='width: 50px; height: 50px; border-radius: 50%; display: inline-block; background-image: url("../media/img/docs-icon.png/"); background-size: 100% 100%; margin: 5% 9%;' class='boARd-launch-info'></div>`
        }
    },
    'King St-Old Town': {
        name: 'King St-Old Town',
        handle: '@kingstoldtown',
        neighbors: {
            ordinality: 0,
            cARds: 0,
            weight: 0
        },
        content:{
            capacity: 0,
            percentage: 0,
            value: {
                LYOKOIN: 0,
                USD: 0,
                EUR: 0
            },
            moderators: [],
            description: 'This is a the default configuration for the AUGMENTED REALITY INTERNET ASSISTANT as defined for the HOUSE OF VENUS PUBLIC AUGMENTED REALITY KINECTOME v. 0.20.0 released on May 21, 2019 at 00:00 (UTC-0500).',
            id: 'king-st-old-town-station',
            position: {
                x: 280,
                y: 415
            },
            fillColor: 'white',
            mission: `<div style='width: 50px; height: 50px; border-radius: 50%; display: inline-block; background-image: url("../media/texture/hov-md.png/"); background-size: 100% 100%; margin: 5% 9%;' id='kingstoldtown-boARd-portal' class='boARd-launch-pin'></div><div style='width: 50px; height: 50px; border-radius: 50%; display: inline-block; background-image: url("../media/img/docs-icon.png/"); background-size: 100% 100%; margin: 5% 9%;' class='boARd-launch-info'></div>`
        }
    },
    'Braddock Rd': {
        name: 'Braddock Rd',
        handle: '@braddockrd',
        neighbors: {
            ordinality: 0,
            cARds: 0,
            weight: 0
        },
        content:{
            capacity: 0,
            percentage: 0,
            value: {
                LYOKOIN: 0,
                USD: 0,
                EUR: 0
            },
            moderators: [],
            description: 'This is a the default configuration for the AUGMENTED REALITY INTERNET ASSISTANT as defined for the HOUSE OF VENUS PUBLIC AUGMENTED REALITY KINECTOME v. 0.20.0 released on May 21, 2019 at 00:00 (UTC-0500).',
            id: 'braddock-rd-station',
            position: {
                x: 280,
                y: 390
            },
            fillColor: 'white',
            mission: `<div style='width: 50px; height: 50px; border-radius: 50%; display: inline-block; background-image: url("../media/texture/hov-md.png/"); background-size: 100% 100%; margin: 5% 9%;' id='braddock-boARd-portal' class='boARd-launch-pin'></div><div style='width: 50px; height: 50px; border-radius: 50%; display: inline-block; background-image: url("../media/img/docs-icon.png/"); background-size: 100% 100%; margin: 5% 9%;' class='boARd-launch-info'></div>`
        }
    },
    'Ronald Reagan Washington National Airport': {
        name: 'Ronald Reagan Washington National Airport',
        handle: '@reagan',
        neighbors: {
            ordinality: 0,
            cARds: 0,
            weight: 0
        },
        content:{
            capacity: 0,
            percentage: 0,
            value: {
                LYOKOIN: 0,
                USD: 0,
                EUR: 0
            },
            moderators: [],
            description: 'This is a the default configuration for the AUGMENTED REALITY INTERNET ASSISTANT as defined for the HOUSE OF VENUS PUBLIC AUGMENTED REALITY KINECTOME v. 0.20.0 released on May 21, 2019 at 00:00 (UTC-0500).',
            id: 'ronald-reagan-national-station',
            position: {
                x: 280,
                y: 360
            },
            fillColor: 'white',
            mission: `<div style='width: 50px; height: 50px; border-radius: 50%; display: inline-block; background-image: url("../media/texture/hov-md.png/"); background-size: 100% 100%; margin: 5% 9%;' id='reagan-boARd-portal' class='boARd-launch-pin'></div><div style='width: 50px; height: 50px; border-radius: 50%; display: inline-block; background-image: url("../media/img/docs-icon.png/"); background-size: 100% 100%; margin: 5% 9%;' class='boARd-launch-info'></div>`
        }
    },
    'Crystal City': {
        name: 'Crystal City',
        handle: '@crystalcity',
        neighbors: {
            ordinality: 0,
            cARds: 0,
            weight: 0
        },
        content:{
            capacity: 0,
            percentage: 0,
            value: {
                LYOKOIN: 0,
                USD: 0,
                EUR: 0
            },
            moderators: [],
            description: 'This is a the default configuration for the AUGMENTED REALITY INTERNET ASSISTANT as defined for the HOUSE OF VENUS PUBLIC AUGMENTED REALITY KINECTOME v. 0.20.0 released on May 21, 2019 at 00:00 (UTC-0500).',
            id: 'crystal-city-station',
            position: {
                x: 255,
                y: 350
            },
            fillColor: 'white',
            mission: `<div style='width: 50px; height: 50px; border-radius: 50%; display: inline-block; background-image: url("../media/texture/hov-md.png/"); background-size: 100% 100%; margin: 5% 9%;' id='crystalcity-boARd-portal' class='boARd-launch-pin'></div><div style='width: 50px; height: 50px; border-radius: 50%; display: inline-block; background-image: url("../media/img/docs-icon.png/"); background-size: 100% 100%; margin: 5% 9%;' class='boARd-launch-info'></div>`
        }
    },
    'Pentagon City': {
        name: 'Pentagon City',
        handle: '@pentagoncity',
        neighbors: {
            ordinality: 0,
            cARds: 0,
            weight: 0
        },
        content:{
            capacity: 0,
            percentage: 0,
            value: {
                LYOKOIN: 0,
                USD: 0,
                EUR: 0
            },
            moderators: [],
            description: 'This is a the default configuration for the AUGMENTED REALITY INTERNET ASSISTANT as defined for the HOUSE OF VENUS PUBLIC AUGMENTED REALITY KINECTOME v. 0.20.0 released on May 21, 2019 at 00:00 (UTC-0500).',
            id: 'pentagon-city-station',
            position: {
                x: 230,
                y: 340
            },
            fillColor: 'white',
            mission: `<div style='width: 50px; height: 50px; border-radius: 50%; display: inline-block; background-image: url("../media/texture/hov-md.png/"); background-size: 100% 100%; margin: 5% 9%;' id='navyyard-boARd-portal' class='boARd-launch-pin'></div><div style='width: 50px; height: 50px; border-radius: 50%; display: inline-block; background-image: url("../media/img/docs-icon.png/"); background-size: 100% 100%; margin: 5% 9%;' class='boARd-launch-info'></div>`
        }
    },
    'Pentagon': {
        name: 'Pentagon',
        handle: '@pentagon',
        neighbors: {
            ordinality: 0,
            cARds: 0,
            weight: 0
        },
        content:{
            capacity: 0,
            percentage: 0,
            value: {
                LYOKOIN: 0,
                USD: 0,
                EUR: 0
            },
            moderators: [],
            description: 'This is a the default configuration for the AUGMENTED REALITY INTERNET ASSISTANT as defined for the HOUSE OF VENUS PUBLIC AUGMENTED REALITY KINECTOME v. 0.20.0 released on May 21, 2019 at 00:00 (UTC-0500).',
            id: 'pentagon-station',
            position: {
                x: 230,
                y: 315
            },
            fillColor: 'white',
            mission: `<div style='width: 50px; height: 50px; border-radius: 50%; display: inline-block; background-image: url("../media/texture/hov-md.png/"); background-size: 100% 100%; margin: 5% 9%;' id='pentagon-boARd-portal' class='boARd-launch-pin'></div><div style='width: 50px; height: 50px; border-radius: 50%; display: inline-block; background-image: url("../media/img/docs-icon.png/"); background-size: 100% 100%; margin: 5% 9%;' class='boARd-launch-info'></div>`
        }
    },
    'Franconia-Springfield': {
        name: 'Franconia-Springfield',
        handle: '@franconia',
        neighbors: {
            ordinality: 0,
            cARds: 0,
            weight: 0
        },
        content:{
            capacity: 0,
            percentage: 0,
            value: {
                LYOKOIN: 0,
                USD: 0,
                EUR: 0
            },
            moderators: [],
            description: 'This is a the default configuration for the AUGMENTED REALITY INTERNET ASSISTANT as defined for the HOUSE OF VENUS PUBLIC AUGMENTED REALITY KINECTOME v. 0.20.0 released on May 21, 2019 at 00:00 (UTC-0500).',
            id: 'franconia-springfield-station',
            position: {
                x: 150,
                y: 520
            },
            fillColor: 'white',
            mission: `<div style='width: 50px; height: 50px; border-radius: 50%; display: inline-block; background-image: url("../media/texture/hov-md.png/"); background-size: 100% 100%; margin: 5% 9%;' id='franconia-boARd-portal' class='boARd-launch-pin'></div><div style='width: 50px; height: 50px; border-radius: 50%; display: inline-block; background-image: url("../media/img/docs-icon.png/"); background-size: 100% 100%; margin: 5% 9%;' class='boARd-launch-info'></div>`
        }
    },
    'Van Dorn': {
        name: 'Van Dorn',
        handle: '@vandorn',
        neighbors: {
            ordinality: 0,
            cARds: 0,
            weight: 0
        },
        content:{
            capacity: 0,
            percentage: 0,
            value: {
                LYOKOIN: 0,
                USD: 0,
                EUR: 0
            },
            moderators: [],
            description: 'This is a the default configuration for the AUGMENTED REALITY INTERNET ASSISTANT as defined for the HOUSE OF VENUS PUBLIC AUGMENTED REALITY KINECTOME v. 0.20.0 released on May 21, 2019 at 00:00 (UTC-0500).',
            id: 'van-dorn-station',
            position: {
                x: 175,
                y: 480
            },
            fillColor: 'white',
            mission: `<div style='width: 50px; height: 50px; border-radius: 50%; display: inline-block; background-image: url("../media/texture/hov-md.png/"); background-size: 100% 100%; margin: 5% 9%;' id='vandorn-boARd-portal' class='boARd-launch-pin'></div><div style='width: 50px; height: 50px; border-radius: 50%; display: inline-block; background-image: url("../media/img/docs-icon.png/"); background-size: 100% 100%; margin: 5% 9%;' class='boARd-launch-info'></div>`
        }
    },
    'Arlington Cemetery': {
        name: 'Arlington Cemetery',
        handle: '@arlingtoncemetery',
        neighbors: {
            ordinality: 0,
            cARds: 0,
            weight: 0
        },
        content:{
            capacity: 0,
            percentage: 0,
            value: {
                LYOKOIN: 0,
                USD: 0,
                EUR: 0
            },
            moderators: [],
            description: 'This is a the default configuration for the AUGMENTED REALITY INTERNET ASSISTANT as defined for the HOUSE OF VENUS PUBLIC AUGMENTED REALITY KINECTOME v. 0.20.0 released on May 21, 2019 at 00:00 (UTC-0500).',
            id: 'arlington-cemetery-station',
            position: {
                x: 190,
                y: 270 
            },
            fillColor: 'white',
            mission: `<div style='width: 50px; height: 50px; border-radius: 50%; display: inline-block; background-image: url("../media/texture/hov-md.png/"); background-size: 100% 100%; margin: 5% 9%;' id='arlington-boARd-portal' class='boARd-launch-pin'></div><div style='width: 50px; height: 50px; border-radius: 50%; display: inline-block; background-image: url("../media/img/docs-icon.png/"); background-size: 100% 100%; margin: 5% 9%;' class='boARd-launch-info'></div>`
        }
    },
    'Rosslyn': {
        name: 'Rosslyn',
        handle: '@rosslyn',
        neighbors: {
            ordinality: 0,
            cARds: 0,
            weight: 0
        },
        content:{
            capacity: 0,
            percentage: 0,
            value: {
                LYOKOIN: 0,
                USD: 0,
                EUR: 0
            },
            moderators: [],
            description: 'This is a the default configuration for the AUGMENTED REALITY INTERNET ASSISTANT as defined for the HOUSE OF VENUS PUBLIC AUGMENTED REALITY KINECTOME v. 0.20.0 released on May 21, 2019 at 00:00 (UTC-0500).',
            id: 'rosslyn-station',
            position: {
                x: 160,
                y: 200
            },
            fillColor: 'white',
            mission: `<div style='width: 50px; height: 50px; border-radius: 50%; display: inline-block; background-image: url("../media/texture/hov-md.png/"); background-size: 100% 100%; margin: 5% 9%;' id='rosslyn-boARd-portal' class='boARd-launch-pin'></div><div style='width: 50px; height: 50px; border-radius: 50%; display: inline-block; background-image: url("../media/img/docs-icon.png/"); background-size: 100% 100%; margin: 5% 9%;' class='boARd-launch-info'></div>`
        }
    },
    'Foggy Bottom-GWU': {
        name: 'Foggy Bottom-GWU',
        handle: '@foggybottom',
        neighbors: {
            ordinality: 0,
            cARds: 0,
            weight: 0
        },
        content:{
            capacity: 0,
            percentage: 0,
            value: {
                LYOKOIN: 0,
                USD: 0,
                EUR: 0
            },
            moderators: [],
            description: 'This is a the default configuration for the AUGMENTED REALITY INTERNET ASSISTANT as defined for the HOUSE OF VENUS PUBLIC AUGMENTED REALITY KINECTOME v. 0.20.0 released on May 21, 2019 at 00:00 (UTC-0500).',
            id: 'foggy-bottom-gwu-station',
            position: {
                x: 220,
                y: 170
            },
            fillColor: 'white',
            mission: `<div style='width: 50px; height: 50px; border-radius: 50%; display: inline-block; background-image: url("../media/texture/hov-md.png/"); background-size: 100% 100%; margin: 5% 9%;' id='foggybottom-boARd-portal' class='boARd-launch-pin'></div><div style='width: 50px; height: 50px; border-radius: 50%; display: inline-block; background-image: url("../media/img/docs-icon.png/"); background-size: 100% 100%; margin: 5% 9%;' class='boARd-launch-info'></div>`
        }
    },
    'Farragut West': {
        name: 'Farragut West',
        handle: '@farragutwest',
        neighbors: {
            ordinality: 0,
            cARds: 0,
            weight: 0
        },
        content:{
            capacity: 0,
            percentage: 0,
            value: {
                LYOKOIN: 0,
                USD: 0,
                EUR: 0
            },
            moderators: [],
            description: 'This is a the default configuration for the AUGMENTED REALITY INTERNET ASSISTANT as defined for the HOUSE OF VENUS PUBLIC AUGMENTED REALITY KINECTOME v. 0.20.0 released on May 21, 2019 at 00:00 (UTC-0500).',
            id: 'farragut-west-station',
            position: {
                x: 250,
                y: 170
            },
            fillColor: 'white',
            mission: `<div style='width: 50px; height: 50px; border-radius: 50%; display: inline-block; background-image: url("../media/texture/hov-md.png/"); background-size: 100% 100%; margin: 5% 9%;' id='farragut-boARd-portal' class='boARd-launch-pin'></div><div style='width: 50px; height: 50px; border-radius: 50%; display: inline-block; background-image: url("../media/img/docs-icon.png/"); background-size: 100% 100%; margin: 5% 9%;' class='boARd-launch-info'></div>`
        }
    },
    'McPherson Square': {
        name: 'McPherson Square',
        handle: '@mcphersonsq',
        neighbors: {
            ordinality: 0,
            cARds: 0,
            weight: 0
        },
        content:{
            capacity: 0,
            percentage: 0,
            value: {
                LYOKOIN: 0,
                USD: 0,
                EUR: 0
            },
            moderators: [],
            description: 'This is a the default configuration for the AUGMENTED REALITY INTERNET ASSISTANT as defined for the HOUSE OF VENUS PUBLIC AUGMENTED REALITY KINECTOME v. 0.20.0 released on May 21, 2019 at 00:00 (UTC-0500).',
            id: 'mcpherson-square-station',
            position: {
                x: 300,
                y: 170
            },
            fillColor: 'white',
            mission: `<div style='width: 50px; height: 50px; border-radius: 50%; display: inline-block; background-image: url("../media/texture/hov-md.png/"); background-size: 100% 100%; margin: 5% 9%;' id='mcpherson-boARd-portal' class='boARd-launch-pin'></div><div style='width: 50px; height: 50px; border-radius: 50%; display: inline-block; background-image: url("../media/img/docs-icon.png/"); background-size: 100% 100%; margin: 5% 9%;' class='boARd-launch-info'></div>`
        }
    },
    'Metro Center': {
        name: 'Metro Center',
        handle: '@metrocenter',
        neighbors: {
            ordinality: 0,
            cARds: 0,
            weight: 0
        },
        content:{
            capacity: 0,
            percentage: 0,
            value: {
                LYOKOIN: 0,
                USD: 0,
                EUR: 0
            },
            moderators: [],
            description: 'This is a the default configuration for the AUGMENTED REALITY INTERNET ASSISTANT as defined for the HOUSE OF VENUS PUBLIC AUGMENTED REALITY KINECTOME v. 0.20.0 released on May 21, 2019 at 00:00 (UTC-0500).',
            id: 'metro-center-station',
            position: {
                x: 320,
                y: 200
            },
            fillColor: 'white',
            mission: `<div style='width: 50px; height: 50px; border-radius: 50%; display: inline-block; background-image: url("../media/texture/hov-md.png/"); background-size: 100% 100%; margin: 5% 9%;' id='metrocenter-boARd-portal' class='boARd-launch-pin'></div><div style='width: 50px; height: 50px; border-radius: 50%; display: inline-block; background-image: url("../media/img/docs-icon.png/"); background-size: 100% 100%; margin: 5% 9%;' class='boARd-launch-info'></div>`
        }
    },
    'Federal Triangle': {
        name: 'Federal Triangle',
        handle: '@federaltriangle',
        neighbors: {
            ordinality: 0,
            cARds: 0,
            weight: 0
        },
        content:{
            capacity: 0,
            percentage: 0,
            value: {
                LYOKOIN: 0,
                USD: 0,
                EUR: 0
            },
            moderators: [],
            description: 'This is a the default configuration for the AUGMENTED REALITY INTERNET ASSISTANT as defined for the HOUSE OF VENUS PUBLIC AUGMENTED REALITY KINECTOME v. 0.20.0 released on May 21, 2019 at 00:00 (UTC-0500).',
            id: 'federal-triangle-station',
            position: {
                x: 320,
                y: 230
            },
            fillColor: 'white',
            mission: `<div style='width: 50px; height: 50px; border-radius: 50%; display: inline-block; background-image: url("../media/texture/hov-md.png/"); background-size: 100% 100%; margin: 5% 9%;' id='federaltriangle-boARd-portal' class='boARd-launch-pin'></div><div style='width: 50px; height: 50px; border-radius: 50%; display: inline-block; background-image: url("../media/img/docs-icon.png/"); background-size: 100% 100%; margin: 5% 9%;' class='boARd-launch-info'></div>`
        }
    },
    'Smithsonian': {
        name: 'Smithsonian',
        handle: '@smithsonian',
        neighbors: {
            ordinality: 0,
            cARds: 0,
            weight: 0
        },
        content:{
            capacity: 0,
            percentage: 0,
            value: {
                LYOKOIN: 0,
                USD: 0,
                EUR: 0
            },
            moderators: [],
            description: 'This is a the default configuration for the AUGMENTED REALITY INTERNET ASSISTANT as defined for the HOUSE OF VENUS PUBLIC AUGMENTED REALITY KINECTOME v. 0.20.0 released on May 21, 2019 at 00:00 (UTC-0500).',
            id: 'smithsonian-station',
            position: {
                x: 320,
                y: 260
            },
            fillColor: 'white',
            mission: `<div style='width: 50px; height: 50px; border-radius: 50%; display: inline-block; background-image: url("../media/texture/hov-md.png/"); background-size: 100% 100%; margin: 5% 9%;' id='smithsonian-boARd-portal' class='boARd-launch-pin'></div><div style='width: 50px; height: 50px; border-radius: 50%; display: inline-block; background-image: url("../media/img/docs-icon.png/"); background-size: 100% 100%; margin: 5% 9%;' class='boARd-launch-info'></div>`
        }
    },
    'Federal Center SW': {
        name: 'Federal Center SW',
        handle: '@federalcenter',
        neighbors: {
            ordinality: 0,
            cARds: 0,
            weight: 0
        },
        content:{
            capacity: 0,
            percentage: 0,
            value: {
                LYOKOIN: 0,
                USD: 0,
                EUR: 0
            },
            moderators: [],
            description: 'This is a the default configuration for the AUGMENTED REALITY INTERNET ASSISTANT as defined for the HOUSE OF VENUS PUBLIC AUGMENTED REALITY KINECTOME v. 0.20.0 released on May 21, 2019 at 00:00 (UTC-0500).',
            id: 'federal-center-sw-station',
            position: {
                x: 400,
                y: 280
            },
            fillColor: 'white',
            mission: `<div style='width: 50px; height: 50px; border-radius: 50%; display: inline-block; background-image: url("../media/texture/hov-md.png/"); background-size: 100% 100%; margin: 5% 9%;' id='federalcenter-boARd-portal' class='boARd-launch-pin'></div><div style='width: 50px; height: 50px; border-radius: 50%; display: inline-block; background-image: url("../media/img/docs-icon.png/"); background-size: 100% 100%; margin: 5% 9%;' class='boARd-launch-info'></div>`
        }
    },
    'Capitol South': {
        name: 'Capitol South',
        handle: '@capitolsouth',
        neighbors: {
            ordinality: 0,
            cARds: 0,
            weight: 0
        },
        content:{
            capacity: 0,
            percentage: 0,
            value: {
                LYOKOIN: 0,
                USD: 0,
                EUR: 0
            },
            moderators: [],
            description: 'This is a the default configuration for the AUGMENTED REALITY INTERNET ASSISTANT as defined for the HOUSE OF VENUS PUBLIC AUGMENTED REALITY KINECTOME v. 0.20.0 released on May 21, 2019 at 00:00 (UTC-0500).',
            id: 'capitol-south-station',
            position: {
                x: 430,
                y: 280
            },
            fillColor: 'white',
            mission: `<div style='width: 50px; height: 50px; border-radius: 50%; display: inline-block; background-image: url("../media/texture/hov-md.png/"); background-size: 100% 100%; margin: 5% 9%;' id='capitolsouth-boARd-portal' class='boARd-launch-pin'></div><div style='width: 50px; height: 50px; border-radius: 50%; display: inline-block; background-image: url("../media/img/docs-icon.png/"); background-size: 100% 100%; margin: 5% 9%;' class='boARd-launch-info'></div>`
        }
    },
    'Eastern Market': {
        name: 'Eastern Market',
        handle: '@easternmarket',
        neighbors: {
            ordinality: 0,
            cARds: 0,
            weight: 0
        },
        content:{
            capacity: 0,
            percentage: 0,
            value: {
                LYOKOIN: 0,
                USD: 0,
                EUR: 0
            },
            moderators: [],
            description: 'This is a the default configuration for the AUGMENTED REALITY INTERNET ASSISTANT as defined for the HOUSE OF VENUS PUBLIC AUGMENTED REALITY KINECTOME v. 0.20.0 released on May 21, 2019 at 00:00 (UTC-0500).',
            id: 'eastern-market-station',
            position: {
                x: 460,
                y: 250
            },
            fillColor: 'white',
            mission: `<div style='width: 50px; height: 50px; border-radius: 50%; display: inline-block; background-image: url("../media/texture/hov-md.png/"); background-size: 100% 100%; margin: 5% 9%;' id='easternmarket-boARd-portal' class='boARd-launch-pin'></div><div style='width: 50px; height: 50px; border-radius: 50%; display: inline-block; background-image: url("../media/img/docs-icon.png/"); background-size: 100% 100%; margin: 5% 9%;' class='boARd-launch-info'></div>`
        }
    },
    'Potomac Ave': {
        name: 'Potomac Ave',
        hanlde: '@potomacave',
        neighbors: {
            ordinality: 0,
            cARds: 0,
            weight: 0
        },
        content:{
            capacity: 0,
            percentage: 0,
            value: {
                LYOKOIN: 0,
                USD: 0,
                EUR: 0
            },
            moderators: [],
            description: 'This is a the default configuration for the AUGMENTED REALITY INTERNET ASSISTANT as defined for the HOUSE OF VENUS PUBLIC AUGMENTED REALITY KINECTOME v. 0.20.0 released on May 21, 2019 at 00:00 (UTC-0500).',
            id: 'potomac-ave-station',
            position: {
                x: 480,
                y: 235 
            },
            fillColor: 'white',
            mission: `<div style='width: 50px; height: 50px; border-radius: 50%; display: inline-block; background-image: url("../media/texture/hov-md.png/"); background-size: 100% 100%; margin: 5% 9%;' id='potomacave-boARd-portal' class='boARd-launch-pin'></div><div style='width: 50px; height: 50px; border-radius: 50%; display: inline-block; background-image: url("../media/img/docs-icon.png/"); background-size: 100% 100%; margin: 5% 9%;' class='boARd-launch-info'></div>`
        }
    },        
    'Stadium-Armory': {
        name: 'Stadium-Armory',
        handle: '@stadiumarmory',
        neighbors: {
            ordinality: 0,
            cARds: 0,
            weight: 0
        },
        content:{
            capacity: 0,
            percentage: 0,
            value: {
                LYOKOIN: 0,
                USD: 0,
                EUR: 0
            },
            moderators: [],
            description: 'This is a the default configuration for the AUGMENTED REALITY INTERNET ASSISTANT as defined for the HOUSE OF VENUS PUBLIC AUGMENTED REALITY KINECTOME v. 0.20.0 released on May 21, 2019 at 00:00 (UTC-0500).',
            id: 'stadium-armory-station',
            position: {
                x: 505,
                y: 220
            },
            fillColor: 'white',
            mission: `<div style='width: 50px; height: 50px; border-radius: 50%; display: inline-block; background-image: url("../media/texture/hov-md.png/"); background-size: 100% 100%; margin: 5% 9%;' id='stadiumarmory-boARd-portal' class='boARd-launch-pin'></div><div style='width: 50px; height: 50px; border-radius: 50%; display: inline-block; background-image: url("../media/img/docs-icon.png/"); background-size: 100% 100%; margin: 5% 9%;' class='boARd-launch-info'></div>`
        }
    },
    'Benning Road': {
        name: 'Benning Road',
        handle: '@benningroad',
        neighbors: {
            ordinality: 0,
            cARds: 0,
            weight: 0
        },
        content:{
            capacity: 0,
            percentage: 0,
            value: {
                LYOKOIN: 0,
                USD: 0,
                EUR: 0
            },
            moderators: [],
            description: 'This is a the default configuration for the AUGMENTED REALITY INTERNET ASSISTANT as defined for the HOUSE OF VENUS PUBLIC AUGMENTED REALITY KINECTOME v. 0.20.0 released on May 21, 2019 at 00:00 (UTC-0500).',
            id: 'benning-road-station',
            position: {
                x: 530,
                y: 220
            },
            fillColor: 'white',
            mission: `<div style='width: 50px; height: 50px; border-radius: 50%; display: inline-block; background-image: url("../media/texture/hov-md.png/"); background-size: 100% 100%; margin: 5% 9%;' id='benningroad-portal' class='boARd-launch-pin'></div><div style='width: 50px; height: 50px; border-radius: 50%; display: inline-block; background-image: url("../media/img/docs-icon.png/"); background-size: 100% 100%; margin: 5% 9%;' class='boARd-launch-info'></div>`
        }
    },
    'Capitol Heights': {
       name: 'Capitol Heights',
        handle: '@capitolheights',
        neighbors: {
            ordinality: 0,
            cARds: 0,
            weight: 0
        },
        content:{
            capacity: 0,
            percentage: 0,
            value: {
                LYOKOIN: 0,
                USD: 0,
                EUR: 0
            },
            moderators: [],
            description: 'This is a the default configuration for the AUGMENTED REALITY INTERNET ASSISTANT as defined for the HOUSE OF VENUS PUBLIC AUGMENTED REALITY KINECTOME v. 0.20.0 released on May 21, 2019 at 00:00 (UTC-0500).',id: 'capitol-heights-station',
            position: {
                x: 555,
                y: 220
            },
            fillColor: 'white',
            mission: `<div style='width: 50px; height: 50px; border-radius: 50%; display: inline-block; background-image: url("../media/texture/hov-md.png/"); background-size: 100% 100%; margin: 5% 9%;' id='capitolheights-boARd-portal' class='boARd-launch-pin'></div><div style='width: 50px; height: 50px; border-radius: 50%; display: inline-block; background-image: url("../media/img/docs-icon.png/"); background-size: 100% 100%; margin: 5% 9%;' class='boARd-launch-info'></div>`
        }
    },
   'Addison Rd/Seat Pleasant': {
        name: 'Addison Rd/Seat Pleasant',
        handle: '@addisonrd',
        neighbors: {
            ordinality: 0,
            cARds: 0,
            weight: 0
        },
        content:{
            capacity: 0,
            percentage: 0,
            value: {
                LYOKOIN: 0,
                USD: 0,
                EUR: 0
            },
            moderators: [],
            description: 'This is a the default configuration for the AUGMENTED REALITY INTERNET ASSISTANT as defined for the HOUSE OF VENUS PUBLIC AUGMENTED REALITY KINECTOME v. 0.20.0 released on May 21, 2019 at 00:00 (UTC-0500).',
            id: 'addison-rd-station',
            position: {
                x: 580,
                y: 220
            },
            fillColor: 'white',
            mission: `<div style='width: 50px; height: 50px; border-radius: 50%; display: inline-block; background-image: url("../media/texture/hov-md.png/"); background-size: 100% 100%; margin: 5% 9%;' id=addison-boARd-portal' class='boARd-launch-pin'></div><div style='width: 50px; height: 50px; border-radius: 50%; display: inline-block; background-image: url("../media/img/docs-icon.png/"); background-size: 100% 100%; margin: 5% 9%;' class='boARd-launch-info'></div>`
        }
   },
    'Morgan Blvd': {
        name: 'Morgan Blvd',
        handle: '@morganblvd',
        neighbors: {
            ordinality: 0,
            cARds: 0,
            weight: 0
        },
        content:{
            capacity: 0,
            percentage: 0,
            value: {
                LYOKOIN: 0,
                USD: 0,
                EUR: 0
            },
            moderators: [],
            description: 'This is a the default configuration for the AUGMENTED REALITY INTERNET ASSISTANT as defined for the HOUSE OF VENUS PUBLIC AUGMENTED REALITY KINECTOME v. 0.20.0 released on May 21, 2019 at 00:00 (UTC-0500).',
            id: 'morgan-blvd-station',
            position: {
                x: 605,
                y: 220
            },
            fillColor: 'white',
            mission: `<div style='width: 50px; height: 50px; border-radius: 50%; display: inline-block; background-image: url("../media/texture/hov-md.png/"); background-size: 100% 100%; margin: 5% 9%;' id='morganbl-boARd-portal' class='boARd-launch-pin'></div><div style='width: 50px; height: 50px; border-radius: 50%; display: inline-block; background-image: url("../media/img/docs-icon.png/"); background-size: 100% 100%; margin: 5% 9%;' class='boARd-launch-info'></div>`
        },
    },
    'Largo Town Center': {
        name: 'Largo Town Center',
        handle: '@largo',
        neighbors: {
            ordinality: 0,
            cARds: 0,
            weight: 0
        },
        content:{
            capacity: 0,
            percentage: 0,
            value: {
                LYOKOIN: 0,
                USD: 0,
                EUR: 0
            },
            moderators: [],
            description: 'This is a the default configuration for the AUGMENTED REALITY INTERNET ASSISTANT as defined for the HOUSE OF VENUS PUBLIC AUGMENTED REALITY KINECTOME v. 0.20.0 released on May 21, 2019 at 00:00 (UTC-0500).',
            id: 'largo-town-center-station',
            position: {
                x: 630,
                y: 220
            },
            fillColor: 'white',
            mission: `<div style='width: 50px; height: 50px; border-radius: 50%; display: inline-block; background-image: url("../media/texture/hov-md.png/"); background-size: 100% 100%; margin: 5% 9%;' id='largo-boARd-portal' class='boARd-launch-pin'></div><div style='width: 50px; height: 50px; border-radius: 50%; display: inline-block; background-image: url("../media/img/docs-icon.png/"); background-size: 100% 100%; margin: 5% 9%;' class='boARd-launch-info'></div>`
        },
    },
    'Vienna/Fairfax-GMU': {
        name: 'Vienna/ Fairfax-GMU',
        handle: '@vienna',
        neighbors: {
            ordinality: 0,
            cARds: 0,
            weight: 0
        },
        content:{
            capacity: 0,
            percentage: 0,
            value: {
                LYOKOIN: 0,
                USD: 0,
                EUR: 0
            },
            moderators: [],
            description: 'This is a the default configuration for the AUGMENTED REALITY INTERNET ASSISTANT as defined for the HOUSE OF VENUS PUBLIC AUGMENTED REALITY KINECTOME v. 0.20.0 released on May 21, 2019 at 00:00 (UTC-0500).',
            id: 'vienna-gmu-station',
            position: {
                x: 15,
                y: 230
            },
            fillColor: 'white',
            mission: `<div style='width: 50px; height: 50px; border-radius: 50%; display: inline-block; background-image: url("../media/texture/hov-md.png/"); background-size: 100% 100%; margin: 5% 9%;' id='gmu-boARd-portal' class='boARd-launch-pin'></div><div style='width: 50px; height: 50px; border-radius: 50%; display: inline-block; background-image: url("../media/img/docs-icon.png/"); background-size: 100% 100%; margin: 5% 9%;' class='boARd-launch-info'></div>`
        }
    },
    'Dunn Loring/Merrifeld': {
        name: 'Dunn Loring/ Merrifeld',
        handle: '@dunnloring',
        neighbors: {
            ordinality: 0,
            cARds: 0,
            weight: 0
        },
        content:{
            capacity: 0,
            percentage: 0,
            value: {
                LYOKOIN: 0,
                USD: 0,
                EUR: 0
            },
            moderators: [],
            description: 'This is a the default configuration for the AUGMENTED REALITY INTERNET ASSISTANT as defined for the HOUSE OF VENUS PUBLIC AUGMENTED REALITY KINECTOME v. 0.20.0 released on May 21, 2019 at 00:00 (UTC-0500).',
            id: 'dunn-loring-merrifeld-station',
            position: {
                x: 35,
                y: 230
            },
            fillColor: 'white',
            mission: `<div style='width: 50px; height: 50px; border-radius: 50%; display: inline-block; background-image: url("../media/texture/hov-md.png/"); background-size: 100% 100%; margin: 5% 9%;' id='dunnloring-boARd-portal' class='boARd-launch-pin'></div><div style='width: 50px; height: 50px; border-radius: 50%; display: inline-block; background-image: url("../media/img/docs-icon.png/"); background-size: 100% 100%; margin: 5% 9%;' class='boARd-launch-info'></div>`
        }
    },
    'West Falls Church/VT-UVA': {
        name: 'West Falls Church/ VT-UVA',
        handle: '@westfallschurch',
        neighbors: {
            ordinality: 0,
            cARds: 0,
            weight: 0
        },
        content:{
            capacity: 0,
            percentage: 0,
            value: {
                LYOKOIN: 0,
                USD: 0,
                EUR: 0
            },
            moderators: [],
            description: 'This is a the default configuration for the AUGMENTED REALITY INTERNET ASSISTANT as defined for the HOUSE OF VENUS PUBLIC AUGMENTED REALITY KINECTOME v. 0.20.0 released on May 21, 2019 at 00:00 (UTC-0500).',
            id: 'west-falls-vt-uva-station',
            position: {
                x: 55,
                y: 230
            },
            fillColor: 'white',
            mission: `<div style='width: 50px; height: 50px; border-radius: 50%; display: inline-block; background-image: url("../media/texture/hov-md.png/"); background-size: 100% 100%; margin: 5% 9%;' id='westfalls-boARd-portal' class='boARd-launch-pin'></div><div style='width: 50px; height: 50px; border-radius: 50%; display: inline-block; background-image: url("../media/img/docs-icon.png/"); background-size: 100% 100%; margin: 5% 9%;' class='boARd-launch-info'></div>`
        }
    },
    'East Falls Church': {
        name: 'East Falls Church',
        handle: '@eastfallschurch',
        neighbors: {
            ordinality: 0,
            cARds: 0,
            weight: 0
        },
        content:{
            capacity: 0,
            percentage: 0,
            value: {
                LYOKOIN: 0,
                USD: 0,
                EUR: 0
            },
            moderators: [],
            description: 'This is a the default configuration for the AUGMENTED REALITY INTERNET ASSISTANT as defined for the HOUSE OF VENUS PUBLIC AUGMENTED REALITY KINECTOME v. 0.20.0 released on May 21, 2019 at 00:00 (UTC-0500).',
            id: 'east-falls-church-station',
            position: {
                x: 75,
                y: 230
            },
            fillColor: 'white',
            mission: `<div style='width: 50px; height: 50px; border-radius: 50%; display: inline-block; background-image: url("../media/texture/hov-md.png/"); background-size: 100% 100%; margin: 5% 9%;' id='eastfalls-boARd-portal' class='boARd-launch-pin'></div><div style='width: 50px; height: 50px; border-radius: 50%; display: inline-block; background-image: url("../media/img/docs-icon.png/"); background-size: 100% 100%; margin: 5% 9%;' class='boARd-launch-info'></div>`
        }
    },
    'Ballston-MU': {
        name: 'Ballston-MU',
        handle: '@ballston',
        neighbors: {
            ordinality: 0,
            cARds: 0,
            weight: 0
        },
        content:{
            capacity: 0,
            percentage: 0,
            value: {
                LYOKOIN: 0,
                USD: 0,
                EUR: 0
            },
            moderators: [],
            description: 'This is a the default configuration for the AUGMENTED REALITY INTERNET ASSISTANT as defined for the HOUSE OF VENUS PUBLIC AUGMENTED REALITY KINECTOME v. 0.20.0 released on May 21, 2019 at 00:00 (UTC-0500).',
            id: 'ballston-mu-station',
            position: {
                x: 95,
                y: 230
            },
            fillColor: 'white',
            mission: `<div style='width: 50px; height: 50px; border-radius: 50%; display: inline-block; background-image: url("../media/texture/hov-md.png/"); background-size: 100% 100%; margin: 5% 9%;' id='ballstonmu-boARd-portal' class='boARd-launch-pin'></div><div style='width: 50px; height: 50px; border-radius: 50%; display: inline-block; background-image: url("../media/img/docs-icon.png/"); background-size: 100% 100%; margin: 5% 9%;' class='boARd-launch-info'></div>`
        }
    },
    'Virginia Sq-GMU': {
        name: 'Virginia Sq-GMU',
        handle: '@gmu',
        neighbors: {
            ordinality: 0,
            cARds: 0,
            weight: 0
        },
        content:{
            capacity: 0,
            percentage: 0,
            value: {
                LYOKOIN: 0,
                USD: 0,
                EUR: 0
            },
            moderators: [],
            description: 'This is a the default configuration for the AUGMENTED REALITY INTERNET ASSISTANT as defined for the HOUSE OF VENUS PUBLIC AUGMENTED REALITY KINECTOME v. 0.20.0 released on May 21, 2019 at 00:00 (UTC-0500).',
            id: 'virginia-square-gmu-station',
            position: {
                x: 115,
                y: 230
            },
            fillColor: 'white',
            mission: `<div style='width: 50px; height: 50px; border-radius: 50%; display: inline-block; background-image: url("../media/texture/hov-md.png/"); background-size: 100% 100%; margin: 5% 9%;' id='gmu-portal' class='boARd-launch-pin'></div><div style='width: 50px; height: 50px; border-radius: 50%; display: inline-block; background-image: url("../media/img/docs-icon.png/"); background-size: 100% 100%; margin: 5% 9%;' class='boARd-launch-info'></div>`
        }
    },
    'Clarendon': {
        name: 'Clarendon',
        handle: '@clarendon',
        neighbors: {
            ordinality: 0,
            cARds: 0,
            weight: 0
        },
        content:{
            capacity: 0,
            percentage: 0,
            value: {
                LYOKOIN: 0,
                USD: 0,
                EUR: 0
            },
            moderators: [],
            description: 'This is a the default configuration for the AUGMENTED REALITY INTERNET ASSISTANT as defined for the HOUSE OF VENUS PUBLIC AUGMENTED REALITY KINECTOME v. 0.20.0 released on May 21, 2019 at 00:00 (UTC-0500).',
            id: 'clarendon-station',
            position: {
                x: 135,
                y: 230
            },
            fillColor: 'white',
            mission: `<div style='width: 50px; height: 50px; border-radius: 50%; display: inline-block; background-image: url("../media/texture/hov-md.png/"); background-size: 100% 100%; margin: 5% 9%;' id='clarendon-boARd-portal' class='boARd-launch-pin'></div><div style='width: 50px; height: 50px; border-radius: 50%; display: inline-block; background-image: url("../media/img/docs-icon.png/"); background-size: 100% 100%; margin: 5% 9%;' class='boARd-launch-info'></div>`
        }
    },
    'Court House': {
        name: 'Court House',
        handle: '@courthouse',
        neighbors: {
            ordinality: 0,
            cARds: 0,
            weight: 0
        },
        content:{
            capacity: 0,
            percentage: 0,
            value: {
                LYOKOIN: 0,
                USD: 0,
                EUR: 0
            },
            moderators: [],
            description: 'This is a the default configuration for the AUGMENTED REALITY INTERNET ASSISTANT as defined for the HOUSE OF VENUS PUBLIC AUGMENTED REALITY KINECTOME v. 0.20.0 released on May 21, 2019 at 00:00 (UTC-0500).',
            id: 'court-house-station',
            position: {
                x: 155,
                y: 230
            },
            fillColor: 'white',
            mission: `<div style='width: 50px; height: 50px; border-radius: 50%; display: inline-block; background-image: url("../media/texture/hov-md.png/"); background-size: 100% 100%; margin: 5% 9%;' id='courthouse-boARd-portal' class='boARd-launch-pin'></div><div style='width: 50px; height: 50px; border-radius: 50%; display: inline-block; background-image: url("../media/img/docs-icon.png/"); background-size: 100% 100%; margin: 5% 9%;' class='boARd-launch-info'></div>`
        }
    },
    'Minnesota Ave': {
        name: 'Minnesota Ave',
        handle: '@minnesotaave',
        neighbors: {
            ordinality: 0,
            cARds: 0,
            weight: 0
        },
        content:{
            capacity: 0,
            percentage: 0,
            value: {
                LYOKOIN: 0,
                USD: 0,
                EUR: 0
            },
            moderators: [],
            description: 'This is a the default configuration for the AUGMENTED REALITY INTERNET ASSISTANT as defined for the HOUSE OF VENUS PUBLIC AUGMENTED REALITY KINECTOME v. 0.20.0 released on May 21, 2019 at 00:00 (UTC-0500).',
            id: 'minnesota-ave-station',
            position: {
                x: 545,
                y: 190
            },
            fillColor: 'white',
            mission: `<div style='width: 50px; height: 50px; border-radius: 50%; display: inline-block; background-image: url("../media/texture/hov-md.png/"); background-size: 100% 100%; margin: 5% 9%;' id='minnesotaave-boARd-portal' class='boARd-launch-pin'></div><div style='width: 50px; height: 50px; border-radius: 50%; display: inline-block; background-image: url("../media/img/docs-icon.png/"); background-size: 100% 100%; margin: 5% 9%;' class='boARd-launch-info'></div>`
        }
    },
    'Deanwood': {
        name: 'Deanwood',
        handle:'@deanwood',
        neighbors: {
            ordinality: 0,
            cARds: 0,
            weight: 0
        },
        content:{
            capacity: 0,
            percentage: 0,
            value: {
                LYOKOIN: 0,
                USD: 0,
                EUR: 0
            },
            moderators: [],
            description: 'This is a the default configuration for the AUGMENTED REALITY INTERNET ASSISTANT as defined for the HOUSE OF VENUS PUBLIC AUGMENTED REALITY KINECTOME v. 0.20.0 released on May 21, 2019 at 00:00 (UTC-0500).',
            id: 'deanwood-station',
            position: {
                x: 565,
                y: 160
            },
            fillColor: 'white',
            mission: `<div style='width: 50px; height: 50px; border-radius: 50%; display: inline-block; background-image: url("../media/texture/hov-md.png/"); background-size: 100% 100%; margin: 5% 9%;' id='deanwood-boARd-portal' class='boARd-launch-pin'></div><div style='width: 50px; height: 50px; border-radius: 50%; display: inline-block; background-image: url("../media/img/docs-icon.png/"); background-size: 100% 100%; margin: 5% 9%;' class='boARd-launch-info'></div>`
        }
    },
    'Cheverly': {
        name: 'Cheverly',
        handle: '@cheverly',
        neighbors: {
            ordinality: 0,
            cARds: 0,
            weight: 0
        },
        content:{
            capacity: 0,
            percentage: 0,
            value: {
                LYOKOIN: 0,
                USD: 0,
                EUR: 0
            },
            moderators: [],
            description: 'This is a the default configuration for the AUGMENTED REALITY INTERNET ASSISTANT as defined for the HOUSE OF VENUS PUBLIC AUGMENTED REALITY KINECTOME v. 0.20.0 released on May 21, 2019 at 00:00 (UTC-0500).',
            id: 'cheverly-station',
            position: {
                x: 585,
                y: 130
            },
            fillColor: 'white',
            mission: `<div style='width: 50px; height: 50px; border-radius: 50%; display: inline-block; background-image: url("../media/texture/hov-md.png/"); background-size: 100% 100%; margin: 5% 9%;' id='cheverly-boARd-portal' class='boARd-launch-pin'></div><div style='width: 50px; height: 50px; border-radius: 50%; display: inline-block; background-image: url("../media/img/docs-icon.png/"); background-size: 100% 100%; margin: 5% 9%;' class='boARd-launch-info'></div>`
        }
    },
    'Landover': {
        name: 'Landover',
        handle: '@landover',
        neighbors: {
            ordinality: 0,
            cARds: 0,
            weight: 0
        },
        content:{
            capacity: 0,
            percentage: 0,
            value: {
                LYOKOIN: 0,
                USD: 0,
                EUR: 0
            },
            moderators: [],
            description: 'This is a the default configuration for the AUGMENTED REALITY INTERNET ASSISTANT as defined for the HOUSE OF VENUS PUBLIC AUGMENTED REALITY KINECTOME v. 0.20.0 released on May 21, 2019 at 00:00 (UTC-0500).',
            id: 'landover-station',
            position: {
                x: 605,
                y: 100
            },
            fillColor: 'white',
            mission: `<div style='width: 50px; height: 50px; border-radius: 50%; display: inline-block; background-image: url("../media/texture/hov-md.png/"); background-size: 100% 100%; margin: 5% 9%;' id='landover-boARd-portal' class='boARd-launch-pin'></div><div style='width: 50px; height: 50px; border-radius: 50%; display: inline-block; background-image: url("../media/img/docs-icon.png/"); background-size: 100% 100%; margin: 5% 9%;' class='boARd-launch-info'></div>`
        }
    },
    'New Carrolton': {
        name: 'New Carrolton',
        handle: '@newcarrolton',
        neighbors: {
            ordinality: 0,
            cARds: 0,
            weight: 0
        },
        content:{
            capacity: 0,
            percentage: 0,
            value: {
                LYOKOIN: 0,
                USD: 0,
                EUR: 0
            },
            moderators: [],
            description: 'This is a the default configuration for the AUGMENTED REALITY INTERNET ASSISTANT as defined for the HOUSE OF VENUS PUBLIC AUGMENTED REALITY KINECTOME v. 0.20.0 released on May 21, 2019 at 00:00 (UTC-0500).',
            id: 'new-carrolton-station',
            position: {
                x: 625,
                y: 70
            },
            fillColor: 'white',
            mission: `<div style='width: 50px; height: 50px; border-radius: 50%; display: inline-block; background-image: url("../media/texture/hov-md.png/"); background-size: 100% 100%; margin: 5% 9%;' id='newcarrolton-boARd-portal' class='boARd-launch-pin'></div><div style='width: 50px; height: 50px; border-radius: 50%; display: inline-block; background-image: url("../media/img/docs-icon.png/"); background-size: 100% 100%; margin: 5% 9%;' class='boARd-launch-info'></div>`
        }
    },
    'Wiehle-Reston East': {
        name: 'Wiehle-Reston East',
        handle: '@reston',
        neighbors: {
            ordinality: 0,
            cARds: 0,
            weight: 0
        },
        content:{
            capacity: 0,
            percentage: 0,
            value: {
                LYOKOIN: 0,
                USD: 0,
                EUR: 0
            },
            moderators: [],
            description: 'This is a the default configuration for the AUGMENTED REALITY INTERNET ASSISTANT as defined for the HOUSE OF VENUS PUBLIC AUGMENTED REALITY KINECTOME v. 0.20.0 released on May 21, 2019 at 00:00 (UTC-0500).',
            id: 'wiehle-reston-east-station',
            position: {
                x: 25,
                y: 130
            },
            fillColor: 'white',
            mission: `<div style='width: 50px; height: 50px; border-radius: 50%; display: inline-block; background-image: url("../media/texture/hov-md.png/"); background-size: 100% 100%; margin: 5% 9%;' id='wiehlereston-boARd-portal' class='boARd-launch-pin'></div><div style='width: 50px; height: 50px; border-radius: 50%; display: inline-block; background-image: url("../media/img/docs-icon.png/"); background-size: 100% 100%; margin: 5% 9%;' class='boARd-launch-info'></div>`
        }
    },
    'Spring Hill': {
        name: 'Spring Hill',
        handle: '@springhill',
        neighbors: {
            ordinality: 0,
            cARds: 0,
            weight: 0
        },
        content:{
            capacity: 0,
            percentage: 0,
            value: {
                LYOKOIN: 0,
                USD: 0,
                EUR: 0
            },
            moderators: [],
            description: 'This is a the default configuration for the AUGMENTED REALITY INTERNET ASSISTANT as defined for the HOUSE OF VENUS PUBLIC AUGMENTED REALITY KINECTOME v. 0.20.0 released on May 21, 2019 at 00:00 (UTC-0500).',
            id: 'spring-hill-station',
            position: {
                x: 40,
                y: 150
            },
            fillColor: 'white',
            mission:`<div style='width: 50px; height: 50px; border-radius: 50%; display: inline-block; background-image: url("../media/texture/hov-md.png/"); background-size: 100% 100%; margin: 5% 9%;' id='springhill-boARd-portal' class='boARd-launch-pin'></div><div style='width: 50px; height: 50px; border-radius: 50%; display: inline-block; background-image: url("../media/img/docs-icon.png/"); background-size: 100% 100%; margin: 5% 9%;' class='boARd-launch-info'></div>`
        }
    },
    'Greensboro': {
        name: 'Greensboro',
        handle: '@greensboro',
        neighbors: {
            ordinality: 0,
            cARds: 0,
            weight: 0
        },
        content:{
            capacity: 0,
            percentage: 0,
            value: {
                LYOKOIN: 0,
                USD: 0,
                EUR: 0
            },
            moderators: [],
            description: 'This is a the default configuration for the AUGMENTED REALITY INTERNET ASSISTANT as defined for the HOUSE OF VENUS PUBLIC AUGMENTED REALITY KINECTOME v. 0.20.0 released on May 21, 2019 at 00:00 (UTC-0500).',
            id: 'greensboro-station',
            position: {
                x: 55,
                y: 170
            },
            fillColor: 'white',
            mission: `<div style='width: 50px; height: 50px; border-radius: 50%; display: inline-block; background-image: url("../media/texture/hov-md.png/"); background-size: 100% 100%; margin: 5% 9%;' id='greensboro-boARd-portal' class='boARd-launch-pin'></div><div style='width: 50px; height: 50px; border-radius: 50%; display: inline-block; background-image: url("../media/img/docs-icon.png/"); background-size: 100% 100%; margin: 5% 9%;' class='boARd-launch-info'></div>`
        }
    },
    'Tysons Corner': {
        name: 'Tysons Corner',
        handle: '@tysonscorner',
        neighbors: {
            ordinality: 0,
            cARds: 0,
            weight: 0
        },
        content:{
            capacity: 0,
            percentage: 0,
            value: {
                LYOKOIN: 0,
                USD: 0,
                EUR: 0
            },
            moderators: [],
            description: 'This is a the default configuration for the AUGMENTED REALITY INTERNET ASSISTANT as defined for the HOUSE OF VENUS PUBLIC AUGMENTED REALITY KINECTOME v. 0.20.0 released on May 21, 2019 at 00:00 (UTC-0500).',
            id: 'tysons-corner-station',
            position: {
                x: 70,
                y: 190
            },
            fillColor: 'white',
            mission: `<div style='width: 50px; height: 50px; border-radius: 50%; display: inline-block; background-image: url("../media/texture/hov-md.png/"); background-size: 100% 100%; margin: 5% 9%;' id='tysonscorner-boARd-portal' class='boARd-launch-pin'></div><div style='width: 50px; height: 50px; border-radius: 50%; display: inline-block; background-image: url("../media/img/docs-icon.png/"); background-size: 100% 100%; margin: 5% 9%;' class='boARd-launch-info'></div>`
        }
    },
    'McLean': {
        name: 'McLean',
        handle: '@mclean',
        neighbors: {
            ordinality: 0,
            cARds: 0,
            weight: 0
        },
        content:{
            capacity: 0,
            percentage: 0,
            value: {
                LYOKOIN: 0,
                USD: 0,
                EUR: 0
            },
            moderators: [],
            description: 'This is a the default configuration for the AUGMENTED REALITY INTERNET ASSISTANT as defined for the HOUSE OF VENUS PUBLIC AUGMENTED REALITY KINECTOME v. 0.20.0 released on May 21, 2019 at 00:00 (UTC-0500).',
            id: 'mclean-station',
            position: {
                x: 85,
                y: 210
            },
            fillColor: 'white',
            mission: `<div style='width: 50px; height: 50px; border-radius: 50%; display: inline-block; background-image: url("../media/texture/hov-md.png/"); background-size: 100% 100%; margin: 5% 9%;' id='mclean-boARd-portal' class='boARd-launch-pin'></div><div style='width: 50px; height: 50px; border-radius: 50%; display: inline-block; background-image: url("../media/img/docs-icon.png/"); background-size: 100% 100%; margin: 5% 9%;' class='boARd-launch-info'></div>`
        }
    },   	     
    'Shady Grove': {
        name: 'Shady Grove',
        handle: '@shadygrove',
        neighbors: {
            ordinality: 0,
            cARds: 0,
            weight: 0
        },
        content:{
            capacity: 0,
            percentage: 0,
            value: {
                LYOKOIN: 0,
                USD: 0,
                EUR: 0
            },
            moderators: [],
            description: 'This is a the default configuration for the AUGMENTED REALITY INTERNET ASSISTANT as defined for the HOUSE OF VENUS PUBLIC AUGMENTED REALITY KINECTOME v. 0.20.0 released on May 21, 2019 at 00:00 (UTC-0500).',
            id: 'shady-grove-station',
            position: {
                x: 50,
                y: 20
            },
            fillColor: 'white',
            mission: `<div style='width: 50px; height: 50px; border-radius: 50%; display: inline-block; background-image: url("../media/texture/hov-md.png/"); background-size: 100% 100%; margin: 5% 9%;' id='shadygrove-boARd-portal' class='boARd-launch-pin'></div><div style='width: 50px; height: 50px; border-radius: 50%; display: inline-block; background-image: url("../media/img/docs-icon.png/"); background-size: 100% 100%; margin: 5% 9%;' class='boARd-launch-info'></div>`
        }
    },
    'Rockville': {
        name: 'Rockville',
        handle: '@rockville',
        neighbors: {
            ordinality: 0,
            cARds: 0,
            weight: 0
        },
        content:{
            capacity: 0,
            percentage: 0,
            value: {
                LYOKOIN: 0,
                USD: 0,
                EUR: 0
            },
            moderators: [],
            description: 'This is a the default configuration for the AUGMENTED REALITY INTERNET ASSISTANT as defined for the HOUSE OF VENUS PUBLIC AUGMENTED REALITY KINECTOME v. 0.20.0 released on May 21, 2019 at 00:00 (UTC-0500).',
            id: 'rockville-station',
            position: {
                x: 65,
                y: 35
            },
            fillColor: 'white',
            mission: `<div style='width: 50px; height: 50px; border-radius: 50%; display: inline-block; background-image: url("../media/texture/hov-md.png/"); background-size: 100% 100%; margin: 5% 9%;' id='rockville-boARd-portal' class='boARd-launch-pin'></div><div style='width: 50px; height: 50px; border-radius: 50%; display: inline-block; background-image: url("../media/img/docs-icon.png/"); background-size: 100% 100%; margin: 5% 9%;' class='boARd-launch-info'></div>`
        }
    },	
    'Twinbrook': {
        name: 'Twinbrook',
        handle: '@twinbrook',
        neighbors: {
            ordinality: 0,
            cARds: 0,
            weight: 0
        },
        content:{
            capacity: 0,
            percentage: 0,
            value: {
                LYOKOIN: 0,
                USD: 0,
                EUR: 0
            },
            moderators: [],
            description: 'This is a the default configuration for the AUGMENTED REALITY INTERNET ASSISTANT as defined for the HOUSE OF VENUS PUBLIC AUGMENTED REALITY KINECTOME v. 0.20.0 released on May 21, 2019 at 00:00 (UTC-0500).',
            id: 'twinbrook-station',
            position: {
                x: 80,
                y: 50
            },
            fillColor: 'white',
            mission: `<div style='width: 50px; height: 50px; border-radius: 50%; display: inline-block; background-image: url("../media/texture/hov-md.png/"); background-size: 100% 100%; margin: 5% 9%;' id='twinbrook-boARd-portal' class='boARd-launch-pin'></div><div style='width: 50px; height: 50px; border-radius: 50%; display: inline-block; background-image: url("../media/img/docs-icon.png/"); background-size: 100% 100%; margin: 5% 9%;' class='boARd-launch-info'></div>`
        }
    },
    'White Flint': {
        name: 'White Flint',
        handle: '@whiteflint',
        neighbors: {
            ordinality: 0,
            cARds: 0,
            weight: 0
        },
        content:{
            capacity: 0,
            percentage: 0,
            value: {
                LYOKOIN: 0,
                USD: 0,
                EUR: 0
            },
            moderators: [],
            description: 'This is a the default configuration for the AUGMENTED REALITY INTERNET ASSISTANT as defined for the HOUSE OF VENUS PUBLIC AUGMENTED REALITY KINECTOME v. 0.20.0 released on May 21, 2019 at 00:00 (UTC-0500).',
            id: 'white-flint-station',
            position: {
                x: 95,
                y: 65
            },
            fillColor: 'white',
            mission: `<div style='width: 50px; height: 50px; border-radius: 50%; display: inline-block; background-image: url("../media/texture/hov-md.png/"); background-size: 100% 100%; margin: 5% 9%;' id='whiteflint-boARd-portal' class='boARd-launch-pin'></div><div style='width: 50px; height: 50px; border-radius: 50%; display: inline-block; background-image: url("../media/img/docs-icon.png/"); background-size: 100% 100%; margin: 5% 9%;' class='boARd-launch-info'></div>`
        }
},
    'Grosvenor-Strathmore': {
        name: 'Grosvenor-Strathmore',
        handle: '@grosvenor',
        neighbors: {
            ordinality: 0,
            cARds: 0,
            weight: 0
        },
        content:{
            capacity: 0,
            percentage: 0,
            value: {
                LYOKOIN: 0,
                USD: 0,
                EUR: 0
            },
            moderators: [],
                description: 'This is a the default configuration for the AUGMENTED REALITY INTERNET ASSISTANT as defined for the HOUSE OF VENUS PUBLIC AUGMENTED REALITY KINECTOME v. 0.20.0 released on May 21, 2019 at 00:00 (UTC-0500).',
            id: 'grosvenor-strathmore-station',
            position: {
                x: 110,
                y: 80
            },
            fillColor: 'white',
            mission: `<div style='width: 50px; height: 50px; border-radius: 50%; display: inline-block; background-image: url("../media/texture/hov-md.png/"); background-size: 100% 100%; margin: 5% 9%;' id='grosvenor-boARd-portal' class='boARd-launch-pin'></div><div style='width: 50px; height: 50px; border-radius: 50%; display: inline-block; background-image: url("../media/img/docs-icon.png/"); background-size: 100% 100%; margin: 5% 9%;' class='boARd-launch-info'></div>`
        }
    },
    'Medical Center': {
        name: 'Medical Center',
        handle: '@medicalcenter',
        neighbors: {
            ordinality: 0,
            cARds: 0,
            weight: 0
        },
        content:{
            capacity: 0,
            percentage: 0,
            value: {
                LYOKOIN: 0,
                USD: 0,
                EUR: 0
            },
            moderators: [],
            description: 'This is a the default configuration for the AUGMENTED REALITY INTERNET ASSISTANT as defined for the HOUSE OF VENUS PUBLIC AUGMENTED REALITY KINECTOME v. 0.20.0 released on May 21, 2019 at 00:00 (UTC-0500).',            
            id: 'medical-center-station',
            position: {
                x: 125,
                y: 95
            },
            fillColor: 'white',
            mission: `<div style='width: 50px; height: 50px; border-radius: 50%; display: inline-block; background-image: url("../media/texture/hov-md.png/"); background-size: 100% 100%; margin: 5% 9%;' id='medicalcenter-boARd-portal' class='boARd-launch-pin'></div><div style='width: 50px; height: 50px; border-radius: 50%; display: inline-block; background-image: url("../media/img/docs-icon.png/"); background-size: 100% 100%; margin: 5% 9%;' class='boARd-launch-info'></div>`
        }
    },
    'Bethesda': {
        name: 'Bethesda',
        handle: '@bethesda',
        neighbors: {
            ordinality: 0,
            cARds: 0,
            weight: 0
        },
        content:{
            capacity: 0,
            percentage: 0,
            value: {
                LYOKOIN: 0,
                USD: 0,
                EUR: 0
            },
            moderators: [],
            description: 'This is a the default configuration for the AUGMENTED REALITY INTERNET ASSISTANT as defined for the HOUSE OF VENUS PUBLIC AUGMENTED REALITY KINECTOME v. 0.20.0 released on May 21, 2019 at 00:00 (UTC-0500).',
            id: 'bethesda-station',
            position: {
                x: 150,
                y: 105
            },
            fillColor: 'white',
            mission: `<div style='width: 50px; height: 50px; border-radius: 50%; display: inline-block; background-image: url("../media/texture/hov-md.png/"); background-size: 100% 100%; margin: 5% 9%;' id='bethesda-boARd-portal' class='boARd-launch-pin'></div><div style='width: 50px; height: 50px; border-radius: 50%; display: inline-block; background-image: url("../media/img/docs-icon.png/"); background-size: 100% 100%; margin: 5% 9%;' class='boARd-launch-info'></div>`
        }
    },
    'Friendship Heights': {
        name: 'Friendship Heights',
        handle: '@friendshipheights',
        neighbors: {
            ordinality: 0,
            cARds: 0,
            weight: 0
        },
        content:{
            capacity: 0,
            percentage: 0,
            value: {
                LYOKOIN: 0,
                USD: 0,
                EUR: 0
            },
            moderators: [],
            description: 'This is a the default configuration for the AUGMENTED REALITY INTERNET ASSISTANT as defined for the HOUSE OF VENUS PUBLIC AUGMENTED REALITY KINECTOME v. 0.20.0 released on May 21, 2019 at 00:00 (UTC-0500).',
            id: 'friendship-heights-station',
            position: {
                x: 170,
                y: 105
            },
            fillColor: 'white',
            mission: `<div style='width: 50px; height: 50px; border-radius: 50%; display: inline-block; background-image: url("../media/texture/hov-md.png/"); background-size: 100% 100%; margin: 5% 9%;' id='friendship-boARd-portal' class='boARd-launch-pin'></div><div style='width: 50px; height: 50px; border-radius: 50%; display: inline-block; background-image: url("../media/img/docs-icon.png/"); background-size: 100% 100%; margin: 5% 9%;' class='boARd-launch-info'></div>`
        }
    },         
    'Tenleytown  AU': {
        name: 'Tenleytown  AU',
        handle: '@tenleytownau',
        neighbors: {
            ordinality: 0,
            cARds: 0,
            weight: 0
        },
        content:{
            capacity: 0,
            percentage: 0,
            value: {
                LYOKOIN: 0,
                USD: 0,
                EUR: 0
            },
            moderators: [],
            description: 'This is a the default configuration for the AUGMENTED REALITY INTERNET ASSISTANT as defined for the HOUSE OF VENUS PUBLIC AUGMENTED REALITY KINECTOME v. 0.20.0 released on May 21, 2019 at 00:00 (UTC-0500).',
            id: 'tenleytown-au-station',
            position: {
                x: 195,
                y: 105
            },
            fillColor: 'white',
            mission: `<div style='width: 50px; height: 50px; border-radius: 50%; display: inline-block; background-image: url("../media/texture/hov-md.png/"); background-size: 100% 100%; margin: 5% 9%;' id='tenleytownau-boARd-portal' class='boARd-launch-pin'></div><div style='width: 50px; height: 50px; border-radius: 50%; display: inline-block; background-image: url("../media/img/docs-icon.png/"); background-size: 100% 100%; margin: 5% 9%;' class='boARd-launch-info'></div>`
    }
    },
    'Van Ness-UDC': {
        name: 'Van Ness-UDC',
        handle: '@udc',
        neighbors: {
            ordinality: 0,
            cARds: 0,
            weight: 0
        },
        content:{
            capacity: 0,
            percentage: 0,
            value: {
                LYOKOIN: 0,
                USD: 0,
                EUR: 0
            },
            moderators: [],
            description: 'This is a the default configuration for the AUGMENTED REALITY INTERNET ASSISTANT as defined for the HOUSE OF VENUS PUBLIC AUGMENTED REALITY KINECTOME v. 0.20.0 released on May 21, 2019 at 00:00 (UTC-0500).',
            id: 'van-ness-udc-station',
            position: {
                x: 215,
                y: 105
            },
            fillColor: 'white',
            mission: `<div style='width: 50px; height: 50px; border-radius: 50%; display: inline-block; background-image: url("../media/texture/hov-md.png/"); background-size: 100% 100%; margin: 5% 9%;' id='vanness-boARd-portal' class='boARd-launch-pin'></div><div style='width: 50px; height: 50px; border-radius: 50%; display: inline-block; background-image: url("../media/img/docs-icon.png/"); background-size: 100% 100%; margin: 5% 9%;' class='boARd-launch-info'></div>`
        }
    },
    'Cleveland Park': {
        name: 'Cleveland Park',
        handle: '@clevelandpARk',
        neighbors: {
            ordinality: 0,
            cARds: 0,
            weight: 0
        },
        content:{
            capacity: 0,
            percentage: 0,
            value: {
                LYOKOIN: 0,
                USD: 0,
                EUR: 0
            },
            moderators: [],
            description: 'This is a the default configuration for the AUGMENTED REALITY INTERNET ASSISTANT as defined for the HOUSE OF VENUS PUBLIC AUGMENTED REALITY KINECTOME v. 0.20.0 released on May 21, 2019 at 00:00 (UTC-0500).',
            id: 'cleveland-park-station',
            position: {
                x: 235,
                y: 105
            },
            fillColor: 'white',
            mission:`<div style='width: 50px; height: 50px; border-radius: 50%; display: inline-block; background-image: url("../media/texture/hov-md.png/"); background-size: 100% 100%; margin: 5% 9%;' id='clevelandpark-boARd-portal' class='boARd-launch-pin'></div><div style='width: 50px; height: 50px; border-radius: 50%; display: inline-block; background-image: url("../media/img/docs-icon.png/"); background-size: 100% 100%; margin: 5% 9%;' class='boARd-launch-info'></div>`
        }
    },
    'Woodley Park': {
        name: 'Woodley Park',
        handle: '@woodleypARk',
        neighbors: {
            ordinality: 0,
            cARds: 0,
            weight: 0
        },
        content:{
            capacity: 0,
            percentage: 0,
            value: {
                LYOKOIN: 0,
                USD: 0,
                EUR: 0
            },
            moderators: [],
            description: 'This is a the default configuration for the AUGMENTED REALITY INTERNET ASSISTANT as defined for the HOUSE OF VENUS PUBLIC AUGMENTED REALITY KINECTOME v. 0.20.0 released on May 21, 2019 at 00:00 (UTC-0500).',
            id: 'woodley-park-station',
            position: {
                x: 250,
                y: 120
            },
            fillColor: 'white',
            mission: `<div style='width: 50px; height: 50px; border-radius: 50%; display: inline-block; background-image: url("../media/texture/hov-md.png/"); background-size: 100% 100%; margin: 5% 9%;' id='woodleypark-boARd-portal' class='boARd-launch-pin'></div><div style='width: 50px; height: 50px; border-radius: 50%; display: inline-block; background-image: url("../media/img/docs-icon.png/"); background-size: 100% 100%; margin: 5% 9%;' class='boARd-launch-info'></div>`
        }
    },
    'DuPont Circle': {
        name: 'DuPont Circle',
        handle: '@dupontcircle',
        neighbors: {
            ordinality: 0,
            cARds: 0,
            weight: 0
        },
        content:{
            capacity: 0,
            percentage: 0,
            value: {
                LYOKOIN: 0,
                USD: 0,
                EUR: 0
            },
            moderators: [],
            description: 'This is a the default configuration for the AUGMENTED REALITY INTERNET ASSISTANT as defined for the HOUSE OF VENUS PUBLIC AUGMENTED REALITY KINECTOME v. 0.20.0 released on May 21, 2019 at 00:00 (UTC-0500).',
            id: 'dupont-circle-station',
            position: {
                x: 265,
                y: 135
            },
            fillColor: 'white',
            mission: `<div style='width: 50px; height: 50px; border-radius: 50%; display: inline-block; background-image: url("../media/texture/hov-md.png/"); background-size: 100% 100%; margin: 5% 9%;' id='dupont-boARd-portal' class='boARd-launch-pin'></div><div style='width: 50px; height: 50px; border-radius: 50%; display: inline-block; background-image: url("../media/img/docs-icon.png/"); background-size: 100% 100%; margin: 5% 9%;' class='boARd-launch-info'></div>`
        }
    },
    'Farragut North': {
        name: 'Farragut North',
        handle: '@farragutnorth',
        neighbors: {
            ordinality: 0,
            cARds: 0,
            weight: 0
        },
        content:{
            capacity: 0,
            percentage: 0,
            value: {
                LYOKOIN: 0,
                USD: 0,
                EUR: 0
            },
            moderators: [],
            description: 'This is a the default configuration for the AUGMENTED REALITY INTERNET ASSISTANT as defined for the HOUSE OF VENUS PUBLIC AUGMENTED REALITY KINECTOME v. 0.20.0 released on May 21, 2019 at 00:00 (UTC-0500).',
            id: 'farragut-north-station',
            position: {
                x: 280,
                y: 150
            },
            fillColor: 'white',
            mission: `<div style='width: 50px; height: 50px; border-radius: 50%; display: inline-block; background-image: url("../media/texture/hov-md.png/"); background-size: 100% 100%; margin: 5% 9%;' id='farragutnorth-boARd-portal' class='boARd-launch-pin'></div><div style='width: 50px; height: 50px; border-radius: 50%; display: inline-block; background-image: url("../media/img/docs-icon.png/"); background-size: 100% 100%; margin: 5% 9%;' class='boARd-launch-info'></div>`
        }
    },
    'Judiciary Sq': {
        name: 'Judiciary Sq',
        handle: '@judiciarysq',
        neighbors: {
            ordinality: 0,
            cARds: 0,
            weight: 0
        },
        content:{
            capacity: 0,
            percentage: 0,
            value: {
                LYOKOIN: 0,
                USD: 0,
                EUR: 0
            },
            moderators: [],
            description: 'This is a the default configuration for the AUGMENTED REALITY INTERNET ASSISTANT as defined for the HOUSE OF VENUS PUBLIC AUGMENTED REALITY KINECTOME v. 0.20.0 released on May 21, 2019 at 00:00 (UTC-0500).',
            id: 'judiciary-sq-station',
            position: {
                x: 395,
                y: 220
            },
            fillColor: 'white',
            mission: `<div style='width: 50px; height: 50px; border-radius: 50%; display: inline-block; background-image: url("../media/texture/hov-md.png/"); background-size: 100% 100%; margin: 5% 9%;' id='judiciarysq-boARd-portal' class='boARd-launch-pin'></div><div style='width: 50px; height: 50px; border-radius: 50%; display: inline-block; background-image: url("../media/img/docs-icon.png/"); background-size: 100% 100%; margin: 5% 9%;' class='boARd-launch-info'></div>`
        }
    },
    'Union Station': {
        name: 'Union Station',
        handle: '@unionstation',
        neighbors: {
            ordinality: 0,
            cARds: 0,
            weight: 0
        },
        content:{
            capacity: 0,
            percentage: 0,
            value: {
                LYOKOIN: 0,
                USD: 0,
                EUR: 0
            },
            moderators: [],
            description: 'This is a the default configuration for the AUGMENTED REALITY INTERNET ASSISTANT as defined for the HOUSE OF VENUS PUBLIC AUGMENTED REALITY KINECTOME v. 0.20.0 released on May 21, 2019 at 00:00 (UTC-0500).',
            id: 'union-station-station',
            position: {
                x: 425,
                y: 205
            },
            fillColor: 'white',
            mission: `<div style='width: 50px; height: 50px; border-radius: 50%; display: inline-block; background-image: url("../media/texture/hov-md.png/"); background-size: 100% 100%; margin: 5% 9%;' id='union-boARd-portal' class='boARd-launch-pin'></div><div style='width: 50px; height: 50px; border-radius: 50%; display: inline-block; background-image: url("../media/img/docs-icon.png/"); background-size: 100% 100%; margin: 5% 9%;' class='boARd-launch-info'></div>`
        }
    },
    'NoMa-Gallaudet U': {
        name: 'NoMa-Gallaudet U',
        handle: '@noma',
        neighbors: {
            ordinality: 0,
            cARds: 0,
            weight: 0
        },
        content:{
            capacity: 0,
            percentage: 0,
            value: {
                LYOKOIN: 0,
                USD: 0,
                EUR: 0
            },
            moderators: [],
            description: 'This is a the default configuration for the AUGMENTED REALITY INTERNET ASSISTANT as defined for the HOUSE OF VENUS PUBLIC AUGMENTED REALITY KINECTOME v. 0.20.0 released on May 21, 2019 at 00:00 (UTC-0500).',
            id: 'noma-gallaudetu-station',
            position: {
                x: 425,
                y: 185
            },
            fillColor: 'white',
            mission: `<div style='width: 50px; height: 50px; border-radius: 50%; display: inline-block; background-image: url("../media/texture/hov-md.png/"); background-size: 100% 100%; margin: 5% 9%;' id='noma-boARd-portal' class='boARd-launch-pin'></div><div style='width: 50px; height: 50px; border-radius: 50%; display: inline-block; background-image: url("../media/img/docs-icon.png/"); background-size: 100% 100%; margin: 5% 9%;' class='boARd-launch-info'></div>`
        }
    },
    'Rhode Island Ave': {
        name: 'Rhode Island Ave',
        handle: '@rhodeisland',
        neighbors: {
            ordinality: 0,
            cARds: 0,
            weight: 0
        },
        content:{
            capacity: 0,
            percentage: 0,
            value: {
                LYOKOIN: 0,
                USD: 0,
                EUR: 0
            },
            moderators: [],
            description: 'This is a the default configuration for the AUGMENTED REALITY INTERNET ASSISTANT as defined for the HOUSE OF VENUS PUBLIC AUGMENTED REALITY KINECTOME v. 0.20.0 released on May 21, 2019 at 00:00 (UTC-0500).',
            id: 'rhode-island-ave-station',
            position: {
                x: 425,
                y: 165
            },
            fillColor: 'white',
            mission: `<div style='width: 50px; height: 50px; border-radius: 50%; display: inline-block; background-image: url("../media/texture/hov-md.png/"); background-size: 100% 100%; margin: 5% 9%;' id='rhodeisland-boARd-portal' class='boARd-launch-pin'></div><div style='width: 50px; height: 50px; border-radius: 50%; display: inline-block; background-image: url("../media/img/docs-icon.png/"); background-size: 100% 100%; margin: 5% 9%;' class='boARd-launch-info'></div>`
        }
    },
    'Brookland-CUA': {
        name: 'Brookland-CUA',
        handle: '@brooklandcua',
        neighbors: {
            ordinality: 0,
            cARds: 0,
            weight: 0
        },
        content:{
            capacity: 0,
            percentage: 0,
            value: {
                LYOKOIN: 0,
                USD: 0,
                EUR: 0
            },
            moderators: [],
            description: 'This is a the default configuration for the AUGMENTED REALITY INTERNET ASSISTANT as defined for the HOUSE OF VENUS PUBLIC AUGMENTED REALITY KINECTOME v. 0.20.0 released on May 21, 2019 at 00:00 (UTC-0500).',
            id: 'brookland-cua-station',
            position: {
                x: 425,
                y: 145
            },
            fillColor: 'white',
            mission: `<div style='width: 50px; height: 50px; border-radius: 50%; display: inline-block; background-image: url("../media/texture/hov-md.png/"); background-size: 100% 100%; margin: 5% 9%;' id='brooklandcua-boARd-portal' class='boARd-launch-pin'></div><div style='width: 50px; height: 50px; border-radius: 50%; display: inline-block; background-image: url("../media/img/docs-icon.png/"); background-size: 100% 100%; margin: 5% 9%;' class='boARd-launch-info'></div>`
        }
    },
    'Takoma': {
        name: 'Takoma',
        handle: '@takoma',
        neighbors: {
            ordinality: 0,
            cARds: 0,
            weight: 0
        },
        content:{
            capacity: 0,
            percentage: 0,
            value: {
                LYOKOIN: 0,
                USD: 0,
                EUR: 0
            },
            moderators: [],
            description: 'This is a the default configuration for the AUGMENTED REALITY INTERNET ASSISTANT as defined for the HOUSE OF VENUS PUBLIC AUGMENTED REALITY KINECTOME v. 0.20.0 released on May 21, 2019 at 00:00 (UTC-0500).',
            id: 'takoma-station',
            position: {
                x: 340,
                y: 80
            },
            fillColor: 'white',
            mission: `<div style='width: 50px; height: 50px; border-radius: 50%; display: inline-block; background-image: url("../media/texture/hov-md.png"); background-size: 100% 100%; margin: 5% 9%;' id='takoma-boARd-portal' class='boARd-launch-pin'></div><div style='width: 50px; height: 50px; border-radius: 50%; display: inline-block; background-image: url("../media/img/docs-icon.png/"); background-size: 100% 100%; margin: 5% 9%;' class='boARd-launch-info'></div>`
        }
    },
    'HOUSEOFVENUS' : {
        name: 'House of Venus',
        handle: '@houseofvenus',
        neighbors: {
            ordinality: 5,
            cARds: 14,
            weight: 0
        },
        content:{
            ledgerspace: {
                hosts: [
                    {
                        name: "",
                        inception: "21 May, 2019",
                        hdd: 128,
                        ram: 10,
                        wifi: 6,
                        bluetooth: true,
                        battery: {
                            level: 100,
                            type: "Li",
                            manufacturer: "ONN"
                        },
                        ip: "127.0.0.1",
                        lat: null,
                        long: null,
                        altitude: null,
                        owner: "Patrice-Morgan T. Ongoly"
                    },
                    {
                        name: "",
                        inception: "21 May, 2019",
                        hdd: 128,
                        ram: 10,
                        wifi: 6,
                        bluetooth: true,
                        battery: {
                            level: 100,
                            type: "Li",
                            manufacturer: "ONN"
                        },
                        ip: "127.0.0.1",
                        lat: null,
                        long: null,
                        altitude: null,
                        owner: "Patrice-Morgan T. Ongoly"
                    },
                    {
                        name: "",
                        inception: "21 May, 2019",
                        hdd: 128,
                        ram: 10,
                        wifi: 6,
                        bluetooth: true,
                        battery: {
                            level: 100,
                            type: "Li",
                            manufacturer: "ONN"
                        },
                        ip: "127.0.0.1",
                        lat: null,
                        long: null,
                        altitude: null,
                        owner: "Patrice-Morgan T. Ongoly"
                    },
                    {
                        name: "",
                        inception: "21 May, 2019",
                        hdd: 128,
                        ram: 10,
                        wifi: 6,
                        bluetooth: true,
                        battery: {
                            level: 100,
                            type: "Li",
                            manufacturer: "ONN"
                        },
                        ip: "127.0.0.1",
                        lat: null,
                        long: null,
                        altitude: null,
                        owner: "Patrice-Morgan T. Ongoly"
                    },
                    {
                        name: "",
                        inception: "21 May, 2019",
                        hdd: 128,
                        ram: 10,
                        wifi: 6,
                        bluetooth: true,
                        battery: {
                            level: 100,
                            type: "Li",
                            manufacturer: "ONN"
                        },
                        ip: "127.0.0.1",
                        lat: null,
                        long: null,
                        altitude: null,
                        owner: "Patrice-Morgan T. Ongoly"
                    },
                ],
                dias: [
                    {
                        name: "",
                        author: "Patrice-Morgan T. Ongoly",
                        base: {
                            size: "14MB",
                            pointer: "xpointerx"
                        }
                    },
                    {
                        name: "",
                        author: "Patrice-Morgan T. Ongoly",
                        base: {
                            size: "14MB",
                            pointer: "xpointerx"
                        }
                    },
                    {
                        name: "",
                        author: "Patrice-Morgan T. Ongoly",
                        base: {
                            size: "14MB",
                            pointer: "xpointerx"
                        }
                    },
                    {
                        name: "",
                        author: "Patrice-Morgan T. Ongoly",
                        base: {
                            size: "14MB",
                            pointer: "xpointerx"
                        }
                    },
                    {
                        name: "",
                        author: "Patrice-Morgan T. Ongoly",
                        base: {
                            size: "14MB",
                            pointer: "xpointerx"
                        }
                    },
                    {
                        name: "",
                        author: "Patrice-Morgan T. Ongoly",
                        base: {
                            size: "14MB",
                            pointer: "xpointerx"
                        }
                    },
                    {
                        name: "",
                        author: "Patrice-Morgan T. Ongoly",
                        base: {
                            size: "14MB",
                            pointer: "xpointerx"
                        }
                    },
                    {
                        name: "",
                        author: "Patrice-Morgan T. Ongoly",
                        base: {
                            size: "14MB",
                            pointer: "xpointerx"
                        }
                    },
                    {
                        name: "",
                        author: "Patrice-Morgan T. Ongoly",
                        base: {
                            size: "14MB",
                            pointer: "xpointerx"
                        }
                    },
                    {
                        name: "",
                        author: "Patrice-Morgan T. Ongoly",
                        base: {
                            size: "14MB",
                            pointer: "xpointerx"
                        }
                    },
                    {
                        name: "",
                        author: "Patrice-Morgan T. Ongoly",
                        base: {
                            size: "14MB",
                            pointer: "xpointerx"
                        }
                    },
                    {
                        name: "",
                        author: "Patrice-Morgan T. Ongoly",
                        base: {
                            size: "14MB",
                            pointer: "xpointerx"
                        }
                    },
                    {
                        name: "",
                        author: "Patrice-Morgan T. Ongoly",
                        base: {
                            size: "14MB",
                            pointer: "xpointerx"
                        }
                    },
                    {
                        name: "",
                        author: "Patrice-Morgan T. Ongoly",
                        base: {
                            size: "14MB",
                            pointer: "xpointerx"
                        }
                    },
                    {
                        name: "",
                        author: "Patrice-Morgan T. Ongoly",
                        base: {
                            size: "14MB",
                            pointer: "xpointerx"
                        }
                    }
                ]
            },
            capacity: 128,
            percentage: 0,
            value: {
                LYOKOIN: 67/3,
                USD: 1340,
                EUR: 0
            },
            moderators: [
                {
                    name: 'Patrice-Morgan Tandou Ongoly'
                },
                {
                    name: 'Beatrice Goma'
                }
            ],
            description: 'The first serialization of an unpermissioned BOARD for DECENTRALIZED IMMERSIVE APPLICATIONs on a HOUSE OF VENUS PUBLIC AUGMENTED REALITY KINECTOME [pARk v. 0.20.0. released on May 21, 2019 at 00:00 (UTC-0500)]. HOSTs are in blue; DIAs are in red.'
        }
    },
    'Silver Spring': {
        name: 'Silver Spring',
        handle: '@acornpARk',
        neighbors: {
            ordinality: 2,
            cARds: 12,
            weight: 0
        },
        content:{
            capacity: 128,
            percentage: 0,
            value: {
                LYOKOIN: 0,
                USD: 0,
                EUR: 0
            },
            moderators: [],
            description: 'This is a the default configuration for the AUGMENTED REALITY INTERNET ASSISTANT as defined for the HOUSE OF VENUS PUBLIC AUGMENTED REALITY KINECTOME v. 0.20.0 released on May 21, 2019 at 00:00 (UTC-0500).',
            id: 'silver-spring-station',
            position: {
                x: 325,
                y: 70
            },
            fillColor: 'red',
            mission: `<div style='width: 50px; height: 50px; border-radius: 50%; display: inline-block; background-image: url("../media/texture/hov-md.png/"); background-size: 100% 100%; margin: 5% 9%;' id='acornpark-boARd-portal' class='boARd-launch-pin'></div><div style='width: 50px; height: 50px; border-radius: 50%; display: inline-block; background-image: url("../media/img/docs-icon.png/"); background-size: 100% 100%; margin: 5% 9%;' class='boARd-launch-info'></div>`
        }
    },
    'Forest Glen': {
        name: 'Forest Glen',
        handle: '@forestglen',
        neighbors: {
            ordinality: 0,
            cARds: 0,
            weight: 0
        },
        content:{
            capacity: 0,
            percentage: 0,
            value: {
                LYOKOIN: 0,
                USD: 0,
                EUR: 0
            },
            moderators: [],
            description: 'This is a the default configuration for the AUGMENTED REALITY INTERNET ASSISTANT as defined for the HOUSE OF VENUS PUBLIC AUGMENTED REALITY KINECTOME v. 0.20.0 released on May 21, 2019 at 00:00 (UTC-0500).',
            id: 'forest-glen-station',
            position: {
                x: 325,
                y: 50
            },
            fillColor: 'white',
            mission: `<div style='width: 50px; height: 50px; border-radius: 50%; display: inline-block; background-image: url("../media/texture/hov-md.png/"); background-size: 100% 100%; margin: 5% 9%;' id='forestglen-boARd-portal' class='boARd-launch-pin'></div><div style='width: 50px; height: 50px; border-radius: 50%; display: inline-block; background-image: url("../media/img/docs-icon.png/"); background-size: 100% 100%; margin: 5% 9%;' class='boARd-launch-info'></div>`
        }
    },
    'Wheaton': {
        name: 'Wheaton',
        handle: '@wheaton',
        neighbors: {
            ordinality: 0,
            cARds: 0,
            weight: 0
        },
        content:{
            capacity: 0,
            percentage: 0,
            value: {
                LYOKOIN: 0,
                USD: 0,
                EUR: 0
            },
            moderators: [],
            description: 'This is a the default configuration for the AUGMENTED REALITY INTERNET ASSISTANT as defined for the HOUSE OF VENUS PUBLIC AUGMENTED REALITY KINECTOME v. 0.20.0 released on May 21, 2019 at 00:00 (UTC-0500).',
            id: 'wheaton-station',
            position: {
                x: 325,
                y: 30
            },
            fillColor: 'white',
            mission: `<div style='width: 50px; height: 50px; border-radius: 50%; display: inline-block; background-image: url("../media/texture/hov-md.png/"); background-size: 100% 100%; margin: 5% 9%;' id='wheatonboARd-portal' class='boARd-launch-pin'></div><div style='width: 50px; height: 50px; border-radius: 50%; display: inline-block; background-image: url("../media/img/docs-icon.png/"); background-size: 100% 100%; margin: 5% 9%;' class='boARd-launch-info'></div>`
        }
    },
    'Glenmont': {
        name: 'Glenmont',
        handle: '@glenmont',
        neighbors: {
            ordinality: 0,
            cARds: 0,
            weight: 0
        },
        content:{
            capacity: 0,
            percentage: 0,
            value: {
                LYOKOIN: 0,
                USD: 0,
                EUR: 0
            },
            moderators: [],
                description: 'This is a the default configuration for the AUGMENTED REALITY INTERNET ASSISTANT as defined for the HOUSE OF VENUS PUBLIC AUGMENTED REALITY KINECTOME v. 0.20.0 released on May 21, 2019 at 00:00 (UTC-0500).',
                id: 'glenmont-station',
                position: {
                    x: 325,
                    y: 10
                },
                fillColor: 'white',
                mission: `<div style='width: 50px; height: 50px; border-radius: 50%; display: inline-block; background-image: url("../media/texture/hov-md.png/"); background-size: 100% 100%; margin: 5% 9%;' id='glenmont-boARd-portal' class='boARd-launch-pin'></div><div style='width: 50px; height: 50px; border-radius: 50%; display: inline-block; background-image: url("../media/img/docs-icon.png/"); background-size: 100% 100%; margin: 5% 9%;' class='boARd-launch-info'></div>`
        }
    }    
};

var WWWPeeks = {
    requests: {
        H: [],
        D: []
    },
    visited: [],
    hosts: {
        
    },
    dias: {
        
    }
};

io.sockets.on('connection', function(socket){
    console.log('client connected.');
    var conn = socket;
    
    socket.on('checkDeviceType', function(data){
        socket.emit('loadDeviceType', {type: deviceType});
    });
    
    socket.on('pingARIA', function(data){
        /*
        * monday may 05, 2019
        * 1307 est (utc-0500)
        * patrice-morgan ongoly
        *
        * this function receives a data object that contains the name of a board, the location of the requesting ENTITY, if the ENTITY is
        * a SUBJECT-OBJECT (VIEWER) then the data object should contain the latitude and longitude of the VIEWER, the accuracy of said measurements,
        * and a timestamp
        * based on this information the server [i.e. this file] reads another file [currently included in this script as a JavaScript object] that 
        * contains the board list as read from the pARk tHDL
        *
        */
        
        let name = data.name;
        let type = data.type;
        if(type=='SUBJECT-OBJECT'){
            let result = stations[name];
            socket.emit('returnARIALedgerSpaceSummary', {status: true, summary: result});
        }
        else if(type=='OBJECT-SUBJECT'){
            console.log('OBJECT-SUbjECT request received. set up object in ENVIRONMENT.');
        }
        else if(type=='ENVIRONMENT'){
            console.log('loading new data for ENVIRONMENT.');
        }
        else{
            console.log('no action associated with this ENTITY type in the current ATOWN specification v. 0.20.0');
            console.log(type);
        }
    });
    
    socket.on("requestHostsForHouseGuest", function(data){
        console.log(` -------------- fx] request hosts for house guest ------- \n status: ${data.status}`);
        if(data.status){
            let query = data.name;
            let result = stations[query];
           
            console.log(` query: ${query} \n result: `);
            console.log(result);
            WWWPeeks.requests.H.push(query);
            WWWPeeks.hosts[query] = result;
            socket.emit("connectHouseGuestToHosts", {status: true});
        }
    });
    
    socket.on("requestDIAsForHouseGuest", function(data){
        console.log(` -------------- fx] request dias for house guest ------- \n status: ${data.status}`);
        if(data.status){
            let query = data.name;
            let result = stations[query];
           
            console.log(` query: ${query} \n result: `);
            console.log(result);
            WWWPeeks.requests.D.push(query);
            WWWPeeks.dias[query] = result;
            socket.emit("connectHouseGuestToDIAs", {status: true});
        }
    });
    
    socket.on("loadDataForHouseGuest", function(data){
        console.log(` ~~~ fx] load data for house guest ~~~~~~~~~~~~~~~~`);
        let req = null;
        let latest = null;
        let source = null;
        if(data.status){
            console.log(` type: ${data.type}`);
            
            if(data.type=="HOST"){
                req = WWWPeeks.requests.H;
                source = WWWPeeks.hosts[req.shift()];
            }
            else if(data.type=="DIA"){
                req = WWWPeeks.requests.D;
                source = WWWPeeks.dias[req.shift()];
            }

            latest = source;
            console.log(latest);
            WWWPeeks.visited.push(latest);
        
            socket.emit("populateDataFields", {status: true, type: data.type, list: [latest]});
        }
    });
    
    socket.on('requestStationHandle', function(data){
        console.log('-------------------------------- \n REQUEST STATION HANDLE FX \n --------------------------------')
        let result = stations[data.name].handle;
        console.log(result);
        console.log(' ------sub complete ------------');
        socket.emit('returnStationHandle', {status: true, handle: result});
    });
    
    socket.on('identify', function(data){
        console.log('configurind id...');
        var remote = data;
        var user  = {
            manufacturer: remote.manufacturer,
            author: remote.author,
            source: remote.source,
            socket: conn,
            id: guests.length
        };
        guests.push(user);
        console.log('remote registered.');
        console.log(`connection ${user.socket.id} established b/w remote ${user.source.tapin} and ${user.source.product} ${user.source.device}`);
    });
    
    socket.on('startWebcamCapture', function(data){
        var settings = data;
        var target = data.target;// 0 = default = backend only; 1 = front-end only
        var delay = data.renderRate;
        if (settings.test==0){
            facialRecognitionTest(socket, target, delay);
        }
        else if(settings.test==1){
            gestureTrackingTest(socket, target, delay);
        }
        else{
            console.log('test value not recognized.')
        }
    });
        
    socket.on('disconnect', function(){
        console.log(`socket ${socket.id} disconnected.`);
    });
});