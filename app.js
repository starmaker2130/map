// author(s):  Patrice-Morgan Ongoly
// version: 0.2.2
// last modified: Monday, July 2, 2018 12:32 EST
// description: 

// required modules
var bodyParser = require('body-parser');
var express = require('express');
var formidable = require('formidable');
var util = require('util');
var fs = require('fs');
var WhichBrowser = require('which-browser');
// main application instance

var app = express();

// main application settings

var config = {
    PORT: process.env.PORT || 8008,
    DIRECTORY: [
        './',           /* 0 */
        './css',        /* 1 */
        './js',         /* 2 */
        './media/texture',  /* 3 */
        './media/gifs', /* 4 */
        './media/pattern', /* 5 */
        './media/img',  /* 6 */
        './media/sounds',   /* 7 */
        './media/model',    /* 8 */
        './uploads',        /* 9 */
        './drafts/docs',       /* 10 */
        './media/upload',       /* 11 */
        './media/room',         /* 12 */
        './media/img/bg',       /* 13 */
        './media/room/media/model', /* 14 */
        './board/',             /* 15 */
    ]
};

var deviceType = 'unknown';
let dir = config.DIRECTORY;

app.engine('html', require('ejs').renderFile);

/*

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

*/

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

app.get('/stream', function(req, res){
    res.render('stream-main-menu.html',{root: dir[0]});
});

app.get('/streamChannel', function(req, res){
    res.render('stream-channel-page.html',{root: dir[0]});
});

app.get('/deliver', function(req, res){
    res.render('deliver-main-menu.html',{root: dir[0]});
});

app.get('/deliverPayment', function(req, res){
    res.render('deliver-payment-page.html',{root: dir[0]});
});

app.get('/deliverDrinks', function(req, res){
    res.render('deliver-drinks-menu.html',{root: dir[0]});
});

app.get('/deliverSnacks', function(req, res){
    res.render('deliver-snacks-menu.html',{root: dir[0]});
});

app.get('/deliver18', function(req, res){
    res.render('deliver-18-menu.html',{root: dir[0]});
});

app.get('/deliverReceipt', function(req, res){
    res.render('deliver-receipt-page.html',{root: dir[0]});
});

app.get('/deliverTracking', function(req, res){
    res.render('deliver-tracking-page.html',{root: dir[0]});
});

/**/

app.get('/remote', function(req, res){
    res.render('remote.html',{root: dir[0]});
});

app.get('/postAR', function(req, res){
    res.render('postAR.html',{root: dir[0]});
});

app.get('/cARd', function(req, res){
    res.render('cARd.html',{root: dir[0]});
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

app.get('/media/sounds/:sound_id', function(req, res){
    var sound_id = req.params.sound_id;
    res.sendFile(sound_id, {root: dir[7]});
});

app.get('/media/model/:model_id', function(req, res){
    var model_id = req.params.model_id;
    res.sendFile(model_id, {root: dir[8]});
});

app.get('/uploads/:upload_id', function(req, res){
    var upload_id = req.params.upload_id;
    res.sendFile(upload_id, {root: dir[9]});
});

app.get('/drafts/docs/:doc_id', function(req, res){
    var doc_id = req.params.doc_id;
    res.sendFile(doc_id, {root: dir[10]});
});

app.get('/media/card/:card_id', function(req, res){
    var card_id = req.params.card_id;
    res.sendFile(card_id+'.html', {root: dir[12]});
});

app.get('/media/room/media/model/:room_model_id', function(req, res){
    var room_model_id = req.params.room_model_id;
    res.sendFile(room_model_id, {root: dir[14]});
});

app.get('/media/img/bg/:img_id', function(req, res){
    var img_id = req.params.img_id;
    res.sendFile(img_id, {root: dir[13]});
});

app.get('/css/roomsapp/:style_id', function(req, res){
    var style_id = req.params.style_id;
    res.sendFile('roomsapp/'+style_id, {root: dir[1]});
});

app.get('/css/postARapp/:style_id', function(req, res){
    var style_id = req.params.style_id;
    res.sendFile('postARapp/'+style_id, {root: dir[1]});
});

app.post('/generate', function(req, res){
    var src = req.body.src;
    var patt = req.body.pattern;

  //  console.log(src);
    console.log('------------------------');
    console.log(patt);
    
    // save pattern in local patt file
    fs.writeFile(dir[5]+'/auto.patt', patt, function (err) {
        if (err) {
            return console.log('there is an error saving the pattern');
        }
 
        console.log('the pattern file was saved');
    });
    
    // build ar-template page markup
    var markup = `<!DOCTYPE html>
    <html>
    <head>
        <meta charset='utf-8' />
        <meta name='viewport' content='width=device-width,initial-scale=1.0' />
        <title>AR Template | v 0.9.1</title>
        <link rel='stylesheet' type='text/css' href='../../css/roomsapp/profile.css' />
        <script src='../../js/jquery-3.2.1.min.js'></script>
        <script src='../../js/aframe.min.js'></script>
        <script src="https://rawgit.com/mayognaise/aframe-gif-shader/master/dist/aframe-gif-shader.min.js"></script>
        <script src='../../js/ar.min.js'></script>
        <script>
            var sessionManager;

            function requestFullScreen(element) { //    makes the application fullscreen on fullscreen equipped browsers
                var requestMethod = element.requestFullScreen || element.webkitRequestFullScreen || element.mozRequestFullScreen || element.msRequestFullScreen; // Supports most browsers and their versions.

                if (requestMethod) { // Native full screen.
                    requestMethod.call(element);
                } else if (typeof window.ActiveXObject !== "undefined") { // Older IE.
                    var wscript = new ActiveXObject("WScript.Shell");
                    if (wscript !== null) {
                        wscript.SendKeys("{F11}");
                    }
                }
            }

            function initializeSession(data){
                sessionManager = {
                    audio: {
                        player: null,
                        isPlaying: false,
                        focus: null,
                        state: 0 // 0 = inactive; 1 = playing; 2 = paused
                    },
                    application: {
                        focus: 0, // 0 = home; 1 = audio; 2 = visual; 3 = search
                        players: {
                            available: [
                                'audioAR',
                                'visualAR'
                            ],
                            loaded: null
                        }
                    },
                    visual: {
                        player: null,
                        isPlaying: false,
                        focus: null,
                        state: 0 // 0 = inactive; 1 = playing; 2 = paused
                    },
                };

               // loadAREnvironment(0);
                /**/

                sessionManager.audio.focus = 0;
            }

            $(document).ready(function(){
                initializeSession();

                // FIRST STAGE
                $('#launch-application-page').click(function(){

                    console.log('application launch...');

                    var elem = document.body;
                    //requestFullScreen(elem);

                    $(this).animate({
                        height: 0
                    }, 2500, function(){
                        $(this).hide();
                    });
                });

            });
        </script>
    </head>
    <body>
        <div id='launch-application-page' class='entry-layer overlay'>
            <div id='instructions'>
                tap anywhere
                <div id='logo'></div>
                to launch app
            </div>
        </div>
        <div class='control-layer overlay'>
        </div>
        <!-- FOR PRODUCTION PURPOSES ONLY-->
        <a-scene embedded arjs id='main-app-container' class='viewer-layer'>
            <a-assets>
                <img id='floor-texture' src='../../media/texture/grid_pattern.png' preload='true' />
            </a-assets>

            <!--<a-marker preset='hiro'>-->
            <a-marker preset='custom' type='pattern' url='../../media/pattern/auto'>
                <a-entity id='floor'
                          geometry='primitive: plane; width: 1; height: 1;'
                          material='src: #floor-texture; repeat: 1 1;'
                          text='value: origin; width: 4; color: white; align: center;'
                          position='0 0 0'
                          rotation='-90 0 0'>
                </a-entity>
            </a-marker>

            <a-camera-static />
        </a-scene>
    </body>
    </html>`
    
    // save markup into actual file
    fs.writeFile(dir[12]+'/auto.html', markup, function (err) {
        if (err) {
            return console.log('there is an error building the markup');
        }
 
        console.log('the markup file was saved');
    });
    res.end('success');
});


/* syntax for user defined addresses
*  viewed as hov.fun/your-experience-url
*
*  'your-experience-url' : {
        timestamp: Date(), //currentTime
        id: socket.id, 
        user: socket
    }
*
*
*/


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
    'Vienna/ Fairfax-GMU': {
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
    'Dunn Loring/ Merrifeld': {
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
    'West Falls Church/ VT-UVA': {
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
            capacity: 0,
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
            description: 'This is a the first serialization of an unpermissioned BOARD for DECENTRALIZED IMMERSIVE APPLICATIONS on a HOUSE OF VENUS PUBLIC AUGMENTED REALITY KINECTOME [pARk v. 0.20.0. released on May 21, 2019 at 00:00 (UTC-0500)].'
        }
    },
    'Silver Spring': {
        name: 'Silver Spring',
        handle: '@acornpARk',
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
            console.log('loading new data forENVIRONMENT.');
        }
        else{
            console.log('no action associated with this ENTITY type in the current ATOWN specification v. 0.20.0');
            console.log(type);
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
    
    socket.on('startMindwave', function(data){
        var Mindwave = require('mindwave');
        var mw = new Mindwave();

        mw.on('eeg', function(eeg){
            console.log('eeg', eeg);
        });

       /* mw.on('signal', function(signal){
            console.log('signal', signal);
        });

        mw.on('attention', function(attention){
            console.log('attention', attention);
        });

        mw.on('meditation', function(meditation){
            console.log('meditation', meditation);
        });

        mw.on('blink', function(blink){
            console.log('blink', blink);
        });*/

        // These are the raw EEG data
        // They come in at about 512Hz
        // mw.on('wave', function(wave){
        // 	console.log('wave', wave);
        // });
///dev/cu.MindWaveMobile-DevA
        mw.connect('/dev/tty.MindWaveMobile-DevA');
        socket.emit('mindwaveStarted', {success: true});
    });

    socket.on('createScene', function(data){
        var ori = data.orientation;
        
        socket.emit('clearInitialVideoFeed', {status: 1});
        
        switch(ori){
            case 0: // landmark oriented
                landmarkTrackingTest(socket);
                break;
            case 1: // face oriented
                //facialRecognitionTest(socket, 0, 100);
                facialRecognitionTest(socket, 1, 250);
                break;
            case 2: // hand oriented
                //gestureTrackingTest(socket, 0, 100);
                gestureTrackingTest(socket, 1, 250);
                //gestureTrackingTest(socket, 1, 1000);
                break;
            default:
                console.log('no associated orientation found');
                break;
        }
        
        socket.emit('transitionToBuildView', {buildType: ori});
    });
    
    // TODO DEFINE THUMBS UP gesture to provide  means for exiting the building mode
    
    socket.on('addObjectToLandmarkOrientedScene', function(data){
        console.log('TODO: add object to landmark scenery');
    });
    
    socket.on('addObjectToFaceOrientedScene', function(data){
        console.log('TODO: add object to face scenery');
        
        // TODO change global variable switch that triggers buffer output from that of the face box (eventually mesh) mesh to that of a mask, sunglasses, or heads up display
        // TODO to swipe through the options after the initial change gesture tracking should be involved, e.g. making a motion to wipe your face brings up a new mask
    });
    
    socket.on('addObjectToHandOrientedScene', function(data){
        console.log('TODO: add object to hand scenery');
        if(objectsInSceneHandler.adding){
            objectsInSceneHandler.adding = false;
            objectsInSceneHandler.saveLastVertex = true;
        }
        else{
            objectsInSceneHandler.adding = true;
        }
        // TODO change global variable switch that triggers buffer output from that of the hand mesh to that of the ball
    });
    
    socket.on('generateExperience', function(data){
        console.log(objectsInSceneHandler.points);
        var builder = data.builder;
        var type = builder.orientation;
        console.log('--------------------------');
        console.log('builder:');
        console.log(builder);
        console.log('--------------------------');
        console.log('type:')
        console.log(type);
        console.log('--------------------------');
        
        switch(type){
            case 0:
                console.log('stopping landmark scene builder...');
                
                clearInterval(objectsInSceneHandler.gestureInterval);
                
                console.log('hand gesture tracking stopped.');
                break;
            case 1:
                console.log('stopping face oriented scene builder...');
                
                clearInterval(objectsInSceneHandler.starter);
                
                console.log('face tracking stopped.');
                break;
            case 2:
                console.log('stopping hand oriented scene builder...');
                
                clearInterval(objectsInSceneHandler.gestureInterval);
                
                console.log('hand gesture tracking stopped.');
                break;
            default:
                console.log('no experience generator associated with this type.');
                break;
        }
                
        socket.emit('cleanUpExperienceBuilderScene', {amountCreated: objectsInSceneHandler.points.length});
        
        var experience = buildUserARExperience();   // builder
        objectsInSceneHandler.build.markup = `<!DOCTYPE html>
            <html>
            <head>
                <meta charset='utf-8' />
                <meta name='viewport' content='width=device-width,initial-scale=1.0' />
                <title>AR Template | v 0.9.1</title>
                <link rel='stylesheet' type='text/css' href='../../css/roomsapp/profile.css' />
                <script src='../../js/jquery-3.2.1.min.js'></script>
                <script src='../../js/aframe.min.js'></script>
                <script src="https://rawgit.com/mayognaise/aframe-gif-shader/master/dist/aframe-gif-shader.min.js"></script>
                <script src='../../js/ar.min.js'></script>
                <script>
                    var sessionManager;

                    function requestFullScreen(element) { //    makes the application fullscreen on fullscreen equipped browsers
                        var requestMethod = element.requestFullScreen || element.webkitRequestFullScreen || element.mozRequestFullScreen || element.msRequestFullScreen; // Supports most browsers and their versions.

                        if (requestMethod) { // Native full screen.
                            requestMethod.call(element);
                        } else if (typeof window.ActiveXObject !== "undefined") { // Older IE.
                            var wscript = new ActiveXObject("WScript.Shell");
                            if (wscript !== null) {
                                wscript.SendKeys("{F11}");
                            }
                        }
                    }

                    function initializeSession(data){
                        sessionManager = {
                            audio: {
                                player: null,
                                isPlaying: false,
                                focus: null,
                                state: 0 // 0 = inactive; 1 = playing; 2 = paused
                            },
                            application: {
                                focus: 0, // 0 = home; 1 = audio; 2 = visual; 3 = search
                                players: {
                                    available: [
                                        'audioAR',
                                        'visualAR'
                                    ],
                                    loaded: null
                                }
                            },
                            visual: {
                                player: null,
                                isPlaying: false,
                                focus: null,
                                state: 0 // 0 = inactive; 1 = playing; 2 = paused
                            },
                        };

                       // loadAREnvironment(0);
                        /**/

                        sessionManager.audio.focus = 0;
                    }

                    $(document).ready(function(){
                        initializeSession();

                        // FIRST STAGE
                        $('#launch-application-page').click(function(){

                            console.log('application launch...');

                            var elem = document.body;
                            //requestFullScreen(elem);

                            $(this).animate({
                                height: 0
                            }, 2500, function(){
                                $(this).hide();
                            });
                        });

                    });
                </script>
            </head>
            <body>
                <div id='launch-application-page' class='entry-layer overlay'>
                    <div id='instructions'>
                        tap anywhere
                        <div id='logo'></div>
                        to launch app
                    </div>
                </div>
                <div id='main-app-container' class='viewer-layer'>
                <a-scene embedded>
                    <a-assets>
                        <img id='floor-texture' src='../../media/texture/grid_pattern.png' preload='true' />
                    </a-assets>`+experience+`</a-scene></div></body></html>`;
        
        setTimeout(function(){
            if(type==2){
                objectsInSceneHandler.webcam.release();
                //objectsInSceneHandler.webcam = null;    
            }
            
            socket.emit('loadUserARExperience', {status: 1, source: experience});
            
            setTimeout(function(){
                socket.emit('restartVideoFeed', {status: 1});
            }, 500);
        }, 500);
        
    });
    
    socket.on('recordCurrentObjectType', function(data){
        var type = data.type;
        var source = data.src;
        var scale = data.scale;
        objectsInSceneHandler.objectList.push({type: type, src: source, scale: scale});
    });
    
    socket.on('registerExperience', function(data){
        var fileName = '/'+data.name+'.html';
        
        var markup = objectsInSceneHandler.build.markup;
        
        fs.writeFile(dir[12]+fileName, markup, function (err) {
            if (err) {
                return console.log('there is an error building the markup');
            }

            console.log('the user experience was built and saved. \n file registered in system.');
        });
        
        socket.emit('completeRegistration', {success: true});
    });
    
    socket.on('disconnect', function(){
        console.log(`socket ${socket.id} disconnected.`);
    });
});

function compileObjectMarkup(item, markup){ //, experienceBuilder
    var objectMarkup = markup;
    var i = item;
    var colorArr = [
        'yellow',
        'green',
        'blue',
        'red',
        'purples',
        'orange'
    ];
    
    var objectOrigin = objectsInSceneHandler.points[i];

    var filter = {
        x: objectOrigin.x/100,
        y: objectOrigin.y/100,
        z: 0
    };
    
    var defaultModelMarkup = `<a-entity obj-model="obj: url(media/model/eiffel-tower.obj); mtl: url(media/model/eiffel-tower.mtl)" scale="0.05 0.05 0.05" position="${filter.x} ${filter.y} ${filter.z}"></a-entity>`;
    
    var objectName = objectsInSceneHandler.objectList[i].type;
    
    var objectGeometryLib = {
        'sphere': `<a-sphere color="${colorArr[i]}" position="${filter.x} ${filter.y} ${filter.z}" radius="1"></a-sphere>`,
        'tetra': `<a-tetrahedron color="${colorArr[i]}" position="${filter.x} ${filter.y} ${filter.z}" radius="1"></a-tetrahedron>`,
        'cube': `<a-box color="${colorArr[i]}" position="${filter.x} ${filter.y} ${filter.z}"  depth="1" height="1" width="1"></a-box>`,
        'model': null
    };
    
    if(objectName=='model'){
        var modelSource = objectsInSceneHandler.objectList[i].src;
        var modelScale = objectsInSceneHandler.objectList[i].scale;
        
        defaultModelMarkup = `<a-entity obj-model="obj: url(${modelSource});" scale="${modelScale}" color="${colorArr[i]}" position="${filter.x} ${filter.y} ${filter.z}"></a-entity>`;
        
        console.log(`adding model located at ${modelSource} with scale ${modelScale}`);
    }
    
    objectGeometryLib.model = defaultModelMarkup;
    
    objectMarkup += objectGeometryLib[objectName];
    return objectMarkup;
}

function buildUserARExperience(){   //experienceBuilder
    //var builder = experienceBuilder;
    //console.log('TODO: build user ar experience');
    var objectMarkup = '';
    
    for(var i=0; i<objectsInSceneHandler.points.length; i++){
        objectMarkup = compileObjectMarkup(i, objectMarkup);    //, builder
    }
    
    
    var markup = objectMarkup+`
            <!--<a-entity id='floor'
                      geometry='primitive: plane; width: 100; height: 100;'
                      material='src: #floor-texture; repeat: 100 100;'
                      position='0 0 0'
                      rotation='-90 0 0'>
            </a-entity>-->
            
            <a-entity position="3 1.5 5">
                <a-entity camera="active: true" look-controls wasd-controls></a-entity>
            </a-entity>

            <a-sky material='transparent: true; opacity: 0; color: white;'></a-sky>`
    
    // save markup into actual file
    /*fs.writeFile(dir[12]+'/temp.html', markup, function (err) {
        if (err) {
            return console.log('there is an error building the markup');
        }
 
        console.log('the markup file was saved');
    });*/
    //write the file after the experience name is approved
    
    return markup;
}

var objectsInSceneHandler = {
    points: [],
    adding: false,
    saveLastVertex: false,
    gestureInterval: null,
    starter: null,
    webcam: null,
    objectList: [],
    build: {
        markup: ''
    }
};

function landmarkTrackingTest(source){
    var channel = source;
    console.log('launch landmark orientation handling function');
    console.log(channel.id);
    gestureTrackingTest(channel, 0, 100);
}

function gestureTrackingTest(source, target, renderRate){
    
    var delayInterval = renderRate;
    var objectTarget = target;
    var socket = source;
    
    console.log('TODO: add gesture tracking test');
    
    const cv = require('opencv4nodejs');
    
    const skinColorUpper = hue => new cv.Vec(hue, 0.8 * 255, 0.6 * 255);
    const skinColorLower = hue => new cv.Vec(hue, 0.1 * 255, 0.05 * 255);
    
    const devicePort = 0;
    
    objectsInSceneHandler.webcam = new cv.VideoCapture(devicePort);
    const wCap = objectsInSceneHandler.webcam;
    
    
    const makeHandMask = function(img){
      // filter by skin color
        const imgHLS = img.cvtColor(cv.COLOR_BGR2HLS);
        const rangeMask = imgHLS.inRange(skinColorLower(0), skinColorUpper(15));

      // remove noise
        const blurred = rangeMask.blur(new cv.Size(10, 10));
        const thresholded = blurred.threshold(200, 255, cv.THRESH_BINARY);

        return thresholded;
    };
    
    const getHandContour = function(handMask){
        const contours = handMask.findContours(cv.RETR_EXTERNAL, cv.CHAIN_APPROX_SIMPLE);
      // largest contour
        return contours.sort((c0, c1) => c1.area - c0.area)[0];
    };
    
    const getRoughHull = function(contour, maxDist) {
  // get hull indices and hull points
        const hullIndices = contour.convexHullIndices();
        const contourPoints = contour.getPoints();
        const hullPointsWithIdx = hullIndices.map(idx => ({
            pt: contourPoints[idx],
            contourIdx: idx
        }));
  
        const hullPoints = hullPointsWithIdx.map(ptWithIdx => ptWithIdx.pt);

  // group all points in local neighborhood
  
        const ptsBelongToSameCluster = (pt1, pt2) => ptDist(pt1, pt2) < maxDist;
        const { labels } = cv.partition(hullPoints, ptsBelongToSameCluster);
        const pointsByLabel = new Map();
        labels.forEach(l => pointsByLabel.set(l, []));
  
        hullPointsWithIdx.forEach((ptWithIdx, i) => {
            const label = labels[i];
            pointsByLabel.get(label).push(ptWithIdx);
        });

  // map points in local neighborhood to most central point

        const getMostCentralPoint = function(pointGroup) {
        // find center
            const center = getCenterPt(pointGroup.map(ptWithIdx => ptWithIdx.pt));
        // sort ascending by distance to center
            return pointGroup.sort((ptWithIdx1, ptWithIdx2) => ptDist(ptWithIdx1.pt, center) - ptDist(ptWithIdx2.pt, center))[0];
        };
        const pointGroups = Array.from(pointsByLabel.values());
      // return contour indices of most central points
        return pointGroups.map(getMostCentralPoint).map(ptWithIdx => ptWithIdx.contourIdx);
    };
    
    const getHullDefectVertices = function(handContour, hullIndices) {
        const defects = handContour.convexityDefects(hullIndices);
        const handContourPoints = handContour.getPoints();

      // get neighbor defect points of each hull point
        const hullPointDefectNeighbors = new Map(hullIndices.map(idx => [idx, []]));
        defects.forEach((defect) => {
            const startPointIdx = defect.at(0);
            const endPointIdx = defect.at(1);
            const defectPointIdx = defect.at(2);
            hullPointDefectNeighbors.get(startPointIdx).push(defectPointIdx);
            hullPointDefectNeighbors.get(endPointIdx).push(defectPointIdx);
        });

        return Array.from(hullPointDefectNeighbors.keys())
        // only consider hull points that have 2 neighbor defects
        .filter(hullIndex => hullPointDefectNeighbors.get(hullIndex).length > 1)
        // return vertex points
        .map((hullIndex) => {
            const defectNeighborsIdx = hullPointDefectNeighbors.get(hullIndex);
            return ({
                pt: handContourPoints[hullIndex],
                d1: handContourPoints[defectNeighborsIdx[0]],
                d2: handContourPoints[defectNeighborsIdx[1]]
            });
        });
    };
    
    const filterVerticesByAngle = function(vertices, maxAngleDeg){
        vertices.filter(function(v) {
            const sq = x => x * x;
            const a = v.d1.sub(v.d2).norm();
            const b = v.pt.sub(v.d1).norm();
            const c = v.pt.sub(v.d2).norm();
            const angleDeg = Math.acos(((sq(b) + sq(c)) - sq(a)) / (2 * b * c)) * (180 / Math.PI);
            return angleDeg < maxAngleDeg;
        });
        return vertices;
    }
    
            // returns distance of two points
    const ptDist = function(pt1, pt2){
        return pt1.sub(pt2).norm();  
    } 
    // returns center of all points
    const getCenterPt = pts => 
    pts.reduce((sum, pt) => sum.add(pt), new cv.Point(0, 0)).div(pts.length);
    const blue = new cv.Vec(255, 0, 0);
    const green = new cv.Vec(0, 255, 0);
    const red = new cv.Vec(0, 0, 255);
    
    const pointColor = new cv.Vec(255, 255, 255);
    
    objectsInSceneHandler.gestureInterval = setInterval(function(){
        wCap.readAsync(function(err, frame){
            if(frame.empty){
                wCap.reset();
            }
            frame = wCap.read();
                        // const { grabFrames } = require('./utils'); <-- investigate this function

            // main
            const resizedImg = frame.resizeToMax(640);

            const handMask = makeHandMask(resizedImg);
            const handContour = getHandContour(handMask);
            if (!handContour) {
                return;
            }

            const maxPointDist = 25;
            const hullIndices = getRoughHull(handContour, maxPointDist);

              // get defect points of hull to contour and return vertices
              // of each hull point to its defect points
            const vertices = getHullDefectVertices(handContour, hullIndices);

              // fingertip points are those which have a sharp angle to its defect points

            const maxAngleDeg = 60;
            
            const verticesWithValidAngle = filterVerticesByAngle(vertices, maxAngleDeg);
            
            //var drawThatCircle = false;
            //var vertext;

    
            const result = resizedImg.copy();
            const ballScene = resizedImg.copy();
              // draw bounding box and center line

            resizedImg.drawContours([handContour], pointColor, { thickness: 2 }); //previous version: blue
            
                        
          //  if(verticesWithValidAngle[0].d1!='undefined'){
            try{
                const xValue = verticesWithValidAngle[0].d1.x;
                const vertext = verticesWithValidAngle[0].d1;
                //console.log(xValue);   
                ballScene.drawCircle(vertext, 20, pointColor, -5);       // previous version: 50, blueblue
                
                if(objectsInSceneHandler.saveLastVertex){
                    objectsInSceneHandler.points.push(vertext);
                    objectsInSceneHandler.saveLastVertex = false;
                    
                    socket.emit('getCurrentObjectType', {index: objectsInSceneHandler.points.length});
                    
                    console.log('object position recorded.')
                    console.log(`there are currently ${objectsInSceneHandler.points.length} custom objects in this scene.`);
                }
            }catch(err){
                console.log(err);
            }
                
          //  }
              // draw points and vertices
            verticesWithValidAngle.forEach(function(v){
        
                // previous version: the section below was not commented out
                
            /*    resizedImg.drawLine( v.pt, v.d1, { color: green, thickness: 2 });
                resizedImg.drawLine(v.pt, v.d2, { color: green, thickness: 2 });*/
                resizedImg.drawEllipse(
                    new cv.RotatedRect(v.pt, new cv.Size(10, 10), 0), // previous version: cv.Size(20, 20, 0)
            
                    { color: red, thickness: 2 }
                );
                
                result.drawEllipse(
                    new cv.RotatedRect(v.pt, new cv.Size(10, 10), 0), // previous version: cv.Size(20, 20, 0)
                    { color: red, thickness: 2 }
                );
            });
            
            for(var i=0; i<objectsInSceneHandler.points.length; i++){
                resizedImg.drawCircle(objectsInSceneHandler.points[i], 25, green, -5);
                ballScene.drawCircle(objectsInSceneHandler.points[i], 25, red, -5);
            }
              // display detection result  
            const numFingersUp = verticesWithValidAngle.length-2;
    
            result.drawRectangle(
                new cv.Point(10, 10),
                new cv.Point(70, 70),
                { color: green, thickness: 2 }            
            );

            const fontScale = 2;
    
            result.putText(
                String(numFingersUp),
                new cv.Point(20, 60),
                cv.FONT_ITALIC,
                fontScale,
                { color: green, thickness: 2 }
            );

            
            const { rows, cols } = result;
            
            if(objectTarget==0){
                const sideBySide = new cv.Mat(rows, cols * 2, cv.CV_8UC3);
                ballScene.copyTo(sideBySide.getRegion(new cv.Rect(0, 0, cols, rows)));//result
                resizedImg.copyTo(sideBySide.getRegion(new cv.Rect(cols, 0, cols, rows)));


                //cv.imshow('handMask', handMask);
                cv.imshow('result', sideBySide); //sideBySide= a combination of result and resizedImg  result = circled finger tips only; resizedImg = vertex covered hand (green and blue lines, red circles)

                cv.waitKey(9); 
            }
            else if(objectTarget==1){
                if(objectsInSceneHandler.adding){
                    const matRGBA = ballScene.channels === 1
                      ? ballScene.cvtColor(cv.COLOR_GRAY2RGBA)
                      : ballScene.cvtColor(cv.COLOR_BGR2RGBA);

                    var bufArray = matRGBA.getData();

                    socket.emit('paintCanvas', {buf: bufArray, rows: ballScene.rows, cols: ballScene.cols, type: 'hand'});  
                }
                else{
                    /* Hand mesh*/
                    const matRGBA = resizedImg.channels === 1
                      ? resizedImg.cvtColor(cv.COLOR_GRAY2RGBA)
                      : resizedImg.cvtColor(cv.COLOR_BGR2RGBA);

                    var bufArray = matRGBA.getData();

                   // console.log(bufArray);

                    socket.emit('paintCanvas', {buf: bufArray, rows: resizedImg.rows, cols: resizedImg.cols, type: 'hand'});/**/    
                }                
            }
        });    
    }, delayInterval);    
}

function facialRecognitionTest(source, target, renderRate){
    
    var delayInterval = renderRate;
    var socket = source;
    var outputTarget = target;
    
    const cv = require('opencv4nodejs');

    const devicePort = 0;
    const wCap = new cv.VideoCapture(devicePort);

    socket.emit('captureResponse', {
        status: 0,
        health: 'good'
    });

    const classifier = new cv.CascadeClassifier(cv.HAAR_FRONTALFACE_ALT2);
    //var interval = setInterval(function(){
        //frame = wCap.read();
    objectsInSceneHandler.starter = setInterval(function(){
        wCap.readAsync(function(err, frame){
            if(frame.empty){
                wCap.reset();
            }
            frame = wCap.read();
            //cv.imshow('frame', res);
            //cv.imwrite('./media/capture/cap1.png', frame);
            const resizeFrame = frame.resizeToMax(640);
            const grayImg = resizeFrame.bgrToGray();

            classifier.detectMultiScaleAsync(grayImg, function(err, res){
                if (err) { return console.error(err); }

                const { objects, numDetections } = res;
              //  console.log(objects);
            //  console.log(numDetections);

                if (!objects.length) {
                    console.log('no face detected');
                    
                    return;
                }

                  // draw detection
                const facesImg = resizeFrame.copy();
                const numDetectionsTh = 10;
                objects.forEach(function(rect, i){
                    const thickness = numDetections[i] < numDetectionsTh ? 1 : 2;
                    const drawRect = facesImg.drawRectangle(rect, cv.Vec(255, 0, 0), 2, cv.LINE_8);
                    //drawBlueRect(facesImg, rect, { thickness });
                });
                
                if(outputTarget==0){
                   cv.imshow('frame', facesImg);
                }
                else if(outputTarget==1){
                    // convert your image to rgba color space
                    const matRGBA = facesImg.channels === 1
                      ? facesImg.cvtColor(cv.COLOR_GRAY2RGBA)
                      : facesImg.cvtColor(cv.COLOR_BGR2RGBA);

                    var bufArray = matRGBA.getData();

                   // console.log(bufArray);

                    socket.emit('paintCanvas', {buf: bufArray, rows: facesImg.rows, cols: facesImg.cols, type: 'face'});   
                }
                else{
                    console.log('no specified output target for processing results');
                }
            });

            cv.waitKey(10);

        });
    }, delayInterval);
}