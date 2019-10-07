var broadcastOriginalAugmentedRealityDapps = {
    author: 'Patrice-Morgan T. Ongoly',
    serialid: '05202019',
    description: 'An object that reads a treeHouse Distributed Ledger to identify all of the public and/or localizable ARias in a pARk and visualizes the network interactions in a way that allows commmunity members to visit and explore, i.e. browse, the pARk DIAs.',
    notes: 'This boARd uses a visualization inspired by the Washington Metropolitan Area Transit Authority Metro Line Route Map. The House of Venus has laid out ARias along these routes as a nod to its commitment to produce technology that benefits the public.',
    main: {
        stations: {
            greenLineStations : {
                'Branch Ave': {
                    name: 'Branch Ave',
                    id: 'branch-ave-station',
                    position: {
                        x: 580,
                        y: 450
                    },
                    url: '@branchave',
                    fillColor: 'white',
                    mission: `<div id='branch-boARd-portal' class='boARd-launch-pin'></div><div class='boARd-launch-info'></div>`
                },
                'Suitland': {
                    name: 'Suitland',
                    id: 'suitland-station',
                    position: {
                        x: 555,
                        y: 425
                    },
                    url: '@suitland',
                    fillColor: 'white',
                    mission: `<div id='suitland-boARd-portal' class='boARd-launch-pin'></div><div class='boARd-launch-info'></div>`
                },
                'Naylor Rd': {
                    name: 'Naylor Rd',
                    id: 'naylor-rd-station',
                    position: {
                        x: 530,
                        y: 400
                    },
                    url: '@naylor',
                    fillColor: 'white',
                    mission: `<div id='naylor-boARd-portal' class='boARd-launch-pin'></div><div class='boARd-launch-info'></div>`
                },
                'Southern Ave': {
                    name: 'Southern Ave',
                    id: 'southern-ave-station',
                    position: {
                        x: 500,
                        y: 405
                    },
                    url: '@southernave',
                    fillColor: 'white',
                    mission: `<div id='southern-boARd-portal' class='boARd-launch-pin'></div><div class='boARd-launch-info'></div>`
                },
                'Congress Heights': {
                    name: 'Congress Heights',
                    id: 'congress-heights-station',
                    position: {
                        x: 470,
                        y: 380
                    },
                    url: '@congressheights',
                    fillColor: 'white',
                    mission: `<div id='congressheights-boARd-portal' class='boARd-launch-pin'></div><div class='boARd-launch-info'></div>`
                },
                'Anacostia': {
                    name: 'Anacostia',
                    id: 'anacostia-station',
                    position: {
                        x: 450,
                        y: 360
                    },
                    url: '@anacostia',
                    fillColor: 'white',
                    mission: `<div id='anacostia-boARd-portal' class='boARd-launch-pin'></div><div class='boARd-launch-info'></div>`
                },
                'Navy Yard-Ballpark': {
                    name: 'Navy Yard-Ballpark',
                    id: 'navy-yard-ballpark-station',
                    position: {
                        x: 410,
                        y: 340
                    },
                    url: '@navyyard',
                    fillColor: 'white',
                    mission: `<div id='ballpark-boARd-portal' class='boARd-launch-pin'></div><div class='boARd-launch-info'></div>`
                },
                'Waterfront': {
                    name: 'Waterfront',
                    id: 'waterfront-station',
                    position: {
                        x: 380,
                        y: 340
                    },
                    url: '@waterfront',
                    fillColor: 'white',
                    mission: `<div id='waterfront-boARd-portal' class='boARd-launch-pin'></div><div class='boARd-launch-info'></div>`
                },
                'L Enfant Plaza': {
                    name: 'L Enfant Plaza',
                    id: 'lenfant-plaza-station',
                    position: {
                        x: 360,
                        y: 280
                    },
                    url: '@lenfant',
                    fillColor: 'white',
                    mission: `<div id='lenfant-boARd-portal' class='boARd-launch-pin'></div><div class='boARd-launch-info'></div>`
                },
                'Archives': {
                    name: 'Archives',
                    id: 'archives-station',
                    position: {
                        x: 360,
                        y: 250
                    },
                    url: '@archives',
                    fillColor: 'white',
                    mission: `<div id='archives-boARd-portal' class='boARd-launch-pin'></div><div class='boARd-launch-info'></div>`
                },
                'Gallery Place': {
                    name: 'Gallery Place',
                    id: 'gallery-place-station',
                    position: {
                        x: 360,
                        y: 220
                    },
                    url: '@galleryplace',
                    fillColor: 'white',
                    mission: `<div id='galleryplace-boARd-portal' class='boARd-launch-pin'></div><div class='boARd-launch-info'></div>`
                },
                'Mt Vernon Sq/7th St-Convention Center': {
                    name: 'Mt Vernon Sq/7th St-Convention Center',
                    id: 'mt-vernon-station',
                    position: {
                        x: 360,
                        y: 190
                    },
                    url: '@mtvernon',
                    fillColor: 'white',
                    mission: `<div id='mtvernon-boARd-portal' class='boARd-launch-pin'></div><div class='boARd-launch-info'></div>`
                },
                'Shaw-Howard U': {
                    name: 'Shaw-Howard U',
                    id: 'shaw-howardu-station',
                    position: {
                        x: 360,
                        y: 160
                    },
                    url: '@howard',
                    fillColor: 'white',
                    mission: `<div id='shaw-boARd-portal' class='boARd-launch-pin'></div><div class='boARd-launch-info'></div>`
                },
                'U Street': {
                    name: 'U Street',
                    id: 'u-street-station',
                    position: {
                        x: 340,
                        y: 140
                    },
                    url: '@ustreet',
                    fillColor: 'white',
                    mission: `<div id='ustreet-boARd-portal' class='boARd-launch-pin'></div><div class='boARd-launch-info'></div>`
                },
                'Columbia Heights': {
                    name: 'Columbia Heights',
                    id: 'columbia-heights-station',
                    position: {
                        x: 310,
                        y: 120
                    },
                    url: '@columbiaheights',
                    fillColor: 'white',
                    mission: `<div id='columbiaheights-boARd-portal' class='boARd-launch-pin'></div><div class='boARd-launch-info'></div>`
                },
                'Georgia Ave-Pentworth': {
                    name: 'Georgia Ave-Pentworth',
                    id: 'georgia-ave-pentworth-station',
                    position: {
                        x: 340,
                        y: 100
                    },
                    url: '@georgiaave',
                    fillColor: 'white',
                    mission: `<div id='georgiaave-boARd-portal' class='boARd-launch-pin'></div><div class='boARd-launch-info'></div>`
                },
                'Fort Totten': {
                    name: 'Fort Totten',
                    id: 'fort-totten-station',
                    position: {
                        x: 370,
                        y: 90
                    },
                    url: '@forttotten',
                    fillColor: 'white',
                    mission: `<div id='forttotten-boARd-portal' class='boARd-launch-pin' style='cursor: pointer; width: 50px; height: 50px; background-image: url("../media/texture/hov-md.png"); background-size: 100% 100%; background-repeat: no-repeat; margin: 1% auto; border-radius: 50%; display: inline-block; border: 2px black solid;'></div> <div style='cursor: pointer; width: 50px; height: 50px; background-image: url("../media/img/shell.png"); background-size: 100% 100%; background-repeat: no-repeat; margin: 1% auto; border-radius: 50%; display: inline-block; border: 2px red solid;'></div>`
                },
                'West Hyattsville': {
                    name: 'West Hyattsville',
                    id: 'west-hyattsville-station',
                    position: {
                        x: 410,
                        y: 70
                    },
                    url: '@hyattsville',
                    fillColor: 'white',
                    mission: `<div id='gmu-boARd-portal' class='boARd-launch-pin'></div><div class='boARd-launch-info'></div>`
                },
                'Prince Georges Plaza': {
                    name: 'Prince Georges Plaza',
                    id: 'pg-plaza-station',
                    position: {
                        x: 440,
                        y: 50
                    },
                    url: '@pgplaza',
                    fillColor: 'white',
                    mission: `<div  id='pgplaza-boARd-portal' class='boARd-launch-pin' style='cursor: pointer; width: 50px; height: 50px; background-image: url("../media/texture/hov-md.png"); background-size: 100% 100%; background-repeat: no-repeat; margin: 1% auto; border-radius: 50%; display: inline-block; border: 2px black solid;'></div> <div style='cursor: pointer; width: 50px; height: 50px; background-image: url("../media/img/shell.png"); background-size: 100% 100%; background-repeat: no-repeat; margin: 1% auto; border-radius: 50%; display: inline-block; border: 2px red solid;'></div>`
                },
                'College Park-U of Md': {
                    name: 'College Park-U of Md',
                    id: 'college-park-station',
                    position: {
                        x: 470,
                        y: 30
                    },
                    url: '@cp',
                    fillColor: 'white',
                    mission: `<div  id='cp-boARd-portal' class='boARd-launch-pin' style='cursor: pointer; width: 50px; height: 50px; background-image: url("../media/texture/hov-md.png"); background-size: 100% 100%; background-repeat: no-repeat; margin: 1% auto; border-radius: 50%; display: inline-block; border: 2px black solid;'></div> <div style='cursor: pointer; width: 50px; height: 50px; background-image: url("../media/img/shell.png"); background-size: 100% 100%; background-repeat: no-repeat; margin: 1% auto; border-radius: 50%; display: inline-block; border: 2px red solid;'></div>`
                },
                'Greenbelt': {
                    name: 'Greenbelt',
                    id: 'greenbelt-station',
                    position: {
                        x: 500,
                        y: 15
                    },
                    url: '@greenbelt',
                    fillColor: 'white',
                    mission: `<div  id='greenbelt-boARd-portal' class='boARd-launch-pin' style='cursor: pointer; width: 50px; height: 50px; background-image: url("../media/texture/hov-md.png"); background-size: 100% 100%; background-repeat: no-repeat; margin: 1% auto; border-radius: 50%; display: inline-block; border: 2px black solid;'></div> <div style='cursor: pointer; width: 50px; height: 50px; background-image: url("../media/img/shell.png"); background-size: 100% 100%; background-repeat: no-repeat; margin: 1% auto; border-radius: 50%; display: inline-block; border: 2px red solid;'></div>`
                }
            },
            yellowLineStations : {
                'Huntington': {
                    name: 'Huntington',
                    id: 'huntington-station',
                    position: {
                        x: 280,
                        y: 470
                    },
                    url: '@huntington',
                    fillColor: 'white',
                    mission: `<div id='huntington-boARd-portal' class='boARd-launch-pin'></div><div class='boARd-launch-info'></div>`
                },
                'Eisenhower Ave': {
                    name: 'Eisenhower Ave',
                    id: 'eisenhower-ave-station',
                    position: {
                        x: 280,
                        y: 445
                    },
                    url: '@eisenhower',
                    fillColor: 'white',
                    mission:  `<div id='eisenhower-boARd-portal' class='boARd-launch-pin'></div><div class='boARd-launch-info'></div>`
                },
                'King St-Old Town': {
                    name: 'King St-Old Town',
                    id: 'king-st-old-town-station',
                    position: {
                        x: 280,
                        y: 415
                    },
                    url: '@kingstoldtown',
                    fillColor: 'white',
                    mission: `<div id='kingstoldtown-boARd-portal' class='boARd-launch-pin'></div><div class='boARd-launch-info'></div>`
                },
                'Braddock Rd': {
                    name: 'Braddock Rd',
                    id: 'braddock-rd-station',
                    position: {
                        x: 280,
                        y: 390
                    },
                    url: '@braddockrd',
                    fillColor: 'white',
                    mission: `<div id='braddock-boARd-portal' class='boARd-launch-pin'></div><div class='boARd-launch-info'></div>`
                },
                'Ronald Reagan Washington National Airport': {
                    name: 'Ronald Reagan Washington National Airport',
                    id: 'ronald-reagan-national-station',
                    position: {
                        x: 280,
                        y: 360
                    },
                    url: '@reagannational',
                    fillColor: 'white',
                    mission: `<div id='reagan-boARd-portal' class='boARd-launch-pin'></div><div class='boARd-launch-info'></div>`
                },
                'Crystal City': {
                    name: 'Crystal City',
                    id: 'crystal-city-station',
                    position: {
                        x: 255,
                        y: 350
                    },
                    url: '@crystalcity',
                    fillColor: 'white',
                    mission: `<div id='crystalcity-boARd-portal' class='boARd-launch-pin'></div><div class='boARd-launch-info'></div>`
                },
                'Pentagon City': {
                    name: 'Pentagon City',
                    id: 'pentagon-city-station',
                    position: {
                        x: 230,
                        y: 340
                    },
                    url: '@navyyard',
                    fillColor: 'white',
                    mission: `<div id='navyyard-boARd-portal' class='boARd-launch-pin'></div><div class='boARd-launch-info'></div>`
                },
                'Pentagon': {
                    name: 'Pentagon',
                    id: 'pentagon-station',
                    position: {
                        x: 230,
                        y: 315
                    },
                    url: '@pentagon',
                    fillColor: 'white',
                    mission: `<div id='pentagon-boARd-portal' class='boARd-launch-pin'></div><div class='boARd-launch-info'></div>`
                }
            },
            blueLineStations : {
                'Franconia-Springfield': {
                    name: 'Franconia-Springfield',
                    id: 'franconia-springfield-station',
                    position: {
                        x: 150,
                        y: 520
                    },
                    url: '@',
                    fillColor: 'white',
                    mission: `<div id='franconia-boARd-portal' class='boARd-launch-pin'></div><div class='boARd-launch-info'></div>`
                },
                'Van Dorn': {
                    name: 'Van Dorn',
                    id: 'van-dorn-station',
                    position: {
                        x: 175,
                        y: 480
                    },
                    url: '@',
                    fillColor: 'white',
                    mission: `<div id='vandorn-boARd-portal' class='boARd-launch-pin'></div><div class='boARd-launch-info'></div>`
                },
                'Arlington Cemetery': {
                    name: 'Arlington Cemetery',
                    id: 'arlington-cemetery-station',
                    position: {
                        x: 190,
                        y: 270 
                    },
                    url: '@',
                    fillColor: 'white',
                    mission: `<div id='arlington-boARd-portal' class='boARd-launch-pin'></div><div class='boARd-launch-info'></div>`
                },
                'Rosslyn': {
                    name: 'Rosslyn',
                    id: 'rosslyn-station',
                    position: {
                        x: 160,
                        y: 200
                    },
                    url: '@',
                    fillColor: 'white',
                    mission: `<div id='rosslyn-boARd-portal' class='boARd-launch-pin'></div><div class='boARd-launch-info'></div>`
                },
                'Foggy Bottom-GWU': {
                    name: 'Foggy Bottom-GWU',
                    id: 'foggy-bottom-gwu-station',
                    position: {
                        x: 220,
                        y: 170
                    },
                    url: '@',
                    fillColor: 'white',
                    mission: `<div id='foggybottom-boARd-portal' class='boARd-launch-pin'></div><div class='boARd-launch-info'></div>`
                },
                'Farragut West': {
                    name: 'Farragut West',
                    id: 'farragut-west-station',
                    position: {
                        x: 250,
                        y: 170
                    },
                    url: '@',
                    fillColor: 'white',
                    mission: `<div id='farragut-boARd-portal' class='boARd-launch-pin'></div><div class='boARd-launch-info'></div>`
                },
                'McPherson Square': {
                    name: 'McPherson Square',
                    id: 'mcpherson-square-station',
                    position: {
                        x: 300,
                        y: 170
                    },
                    url: '@',
                    fillColor: 'white',
                    mission: `<div id='mcpherson-boARd-portal' class='boARd-launch-pin'></div><div class='boARd-launch-info'></div>`
                },
                'Metro Center': {
                    name: 'Metro Center',
                    id: 'metro-center-station',
                    position: {
                        x: 320,
                        y: 200
                    },
                    url: '@',
                    fillColor: 'white',
                    mission: `<div id='metrocenter-boARd-portal' class='boARd-launch-pin'></div><div class='boARd-launch-info'></div>`
                },
                'Federal Triangle': {
                    name: 'Federal Triangle',
                    id: 'federal-triangle-station',
                    position: {
                        x: 320,
                        y: 230
                    },
                    url: '@',
                    fillColor: 'white',
                    mission: `<div id='federaltriangle-boARd-portal' class='boARd-launch-pin'></div><div class='boARd-launch-info'></div>`
                },
                'Smithsonian': {
                    name: 'Smithsonian',
                    id: 'smithsonian-station',
                    position: {
                        x: 320,
                        y: 260
                    },
                    url: '@',
                    fillColor: 'white',
                    mission: `<div id='smithsonian-boARd-portal' class='boARd-launch-pin'></div><div class='boARd-launch-info'></div>`
                },
                'Federal Center SW': {
                    name: 'Federal Center SW',
                    id: 'federal-center-sw-station',
                    position: {
                        x: 400,
                        y: 280
                    },
                    url: '@',
                    fillColor: 'white',
                    mission: `<div id='federalcenter-boARd-portal' class='boARd-launch-pin'></div><div class='boARd-launch-info'></div>`
                },
                'Capitol South': {
                    name: 'Capitol South',
                    id: 'capitol-south-station',
                    position: {
                        x: 430,
                        y: 280
                    },
                    url: '@',
                    fillColor: 'white',
                    mission: `<div id='capitolsouth-boARd-portal' class='boARd-launch-pin'></div><div class='boARd-launch-info'></div>`
                },
                'Eastern Market': {
                    name: 'Eastern Market',
                    id: 'eastern-market-station',
                    position: {
                        x: 460,
                        y: 250
                    },
                    url: '@',
                    fillColor: 'white',
                    mission: `<div id='easternmarket-boARd-portal' class='boARd-launch-pin'></div><div class='boARd-launch-info'></div>`
                },
                'Potomac Ave': {
                    name: 'Potomac Ave',
                    id: 'potomac-ave-station',
                    position: {
                        x: 480,
                        y: 235 
                    },
                    url: '@',
                    fillColor: 'white',
                    mission: `<div id='potomacave-boARd-portal' class='boARd-launch-pin'></div><div class='boARd-launch-info'></div>`
                },        
                'Stadium-Armory': {
                    name: 'Stadium-Armory',
                    id: 'stadium-armory-station',
                    position: {
                        x: 505,
                        y: 220
                    },
                    url: '@',
                    fillColor: 'white',
                    mission: `<div id='stadiumarmory-boARd-portal' class='boARd-launch-pin'></div><div class='boARd-launch-info'></div>`
                },
                'Benning Road': {
                    name: 'Benning Road',
                    id: 'benning-road-station',
                    position: {
                        x: 530,
                        y: 220
                    },
                    url: '@',
                    fillColor: 'white',
                    mission: `<div id='benningroad-portal' class='boARd-launch-pin'></div><div class='boARd-launch-info'></div>`
                },
                'Capitol Heights': {
                    name: 'Capitol Heights',
                    id: 'capitol-heights-station',
                    position: {
                        x: 555,
                        y: 220
                    },
                    url: '@',
                    fillColor: 'white',
                    mission: `<div id='capitolheights-boARd-portal' class='boARd-launch-pin'></div><div class='boARd-launch-info'></div>`
                },
                'Addison Rd/Seat Pleasant': {
                    name: 'Addison Rd/Seat Pleasant',
                    id: 'addison-rd-station',
                    position: {
                        x: 580,
                        y: 220
                    },
                    url: '@',
                    fillColor: 'white',
                    mission: `<div id=addison-boARd-portal' class='boARd-launch-pin'></div><div class='boARd-launch-info'></div>`
                },
                'Morgan Blvd': {
                    name: 'Morgan Blvd',
                    id: 'morgan-blvd-station',
                    position: {
                        x: 605,
                        y: 220
                    },
                    url: '@',
                    fillColor: 'white',
                    mission: `<div id='morganbl-boARd-portal' class='boARd-launch-pin'></div><div class='boARd-launch-info'></div>`
                },
                'Largo Town Center': {
                    name: 'Largo Town Center',
                    id: 'largo-town-center-station',
                    position: {
                        x: 630,
                        y: 220
                    },
                    url: '@',
                    fillColor: 'white',
                    mission: `<div id='largo-boARd-portal' class='boARd-launch-pin'></div><div class='boARd-launch-info'></div>`
                },
            },
            orangeLineStations : {
                'Vienna/ Fairfax-GMU': {
                    name: 'Vienna/ Fairfax-GMU',
                    id: 'vienna-gmu-station',
                    position: {
                        x: 15,
                        y: 230
                    },
                    url: '@gmu',
                    fillColor: 'white',
                    mission: `<div id='gmu-boARd-portal' class='boARd-launch-pin'></div><div class='boARd-launch-info'></div>`
                },
                'Dunn Loring/ Merrifeld': {
                    name: 'Dunn Loring/ Merrifeld',
                    id: 'dunn-loring-merrifeld-station',
                    position: {
                        x: 35,
                        y: 230
                    },
                    url: '@dunnloring',
                    fillColor: 'white',
                    mission: `<div id='dunnloring-boARd-portal' class='boARd-launch-pin'></div><div class='boARd-launch-info'></div>`
                },
                'West Falls Church/ VT-UVA': {
                    name: 'West Falls Church/ VT-UVA',
                    id: 'west-falls-vt-uva-station',
                    position: {
                        x: 55,
                        y: 230
                    },
                    url: '@westfallschurch',
                    fillColor: 'white',
                    mission: `<div id='westfalls-boARd-portal' class='boARd-launch-pin'></div><div class='boARd-launch-info'></div>`
                },
                'East Falls Church': {
                    name: 'East Falls Church',
                    id: 'east-falls-church-station',
                    position: {
                        x: 75,
                        y: 230
                    },
                    url: '@eastfallschurch',
                    fillColor: 'white',
                    mission: `<div id='eastfalls-boARd-portal' class='boARd-launch-pin'></div><div class='boARd-launch-info'></div>`
                },
                'Ballston-MU': {
                    name: 'Ballston-MU',
                    id: 'ballston-mu-station',
                    position: {
                        x: 95,
                        y: 230
                    },
                    url: '@ballston',
                    fillColor: 'white',
                    mission: `<div id='ballstonmu-boARd-portal' class='boARd-launch-pin'></div><div class='boARd-launch-info'></div>`
                },
                'Virginia Sq-GMU': {
                    name: 'Virginia Sq-GMU',
                    id: 'virginia-square-gmu-station',
                    position: {
                        x: 115,
                        y: 230
                    },
                    url: '@gmu',
                    fillColor: 'white',
                    mission: `<div id='gmu-portal' class='boARd-launch-pin'></div><div class='boARd-launch-info'></div>`
                },
                'Clarendon': {
                    name: 'Clarendon',
                    id: 'clarendon-station',
                    position: {
                        x: 135,
                        y: 230
                    },
                    url: '@navyyard',
                    fillColor: 'white',
                    mission: `<div id='clarendon-boARd-portal' class='boARd-launch-pin'></div><div class='boARd-launch-info'></div>`
                },
                'Court House': {
                    name: 'Court House',
                    id: 'court-house-station',
                    position: {
                        x: 155,
                        y: 230
                    },
                    url: '@courthouse',
                    fillColor: 'white',
                    mission: `<div id='courthouse-boARd-portal' class='boARd-launch-pin'></div><div class='boARd-launch-info'></div>`
                },
                'Minnesota Ave': {
                    name: 'Minnesota Ave',
                    id: 'minnesota-ave-station',
                    position: {
                        x: 545,
                        y: 190
                    },
                    url: '@minnesotaave',
                    fillColor: 'white',
                    mission: `<div id='minnesotaave-boARd-portal' class='boARd-launch-pin'></div><div class='boARd-launch-info'></div>`
                },
                'Deanwood': {
                    name: 'Deanwood',
                    id: 'deanwood-station',
                    position: {
                        x: 565,
                        y: 160
                    },
                    url: '@deanwood',
                    fillColor: 'white',
                    mission: `<div id='deanwood-boARd-portal' class='boARd-launch-pin'></div><div class='boARd-launch-info'></div>`
                },
                'Cheverly': {
                    name: 'Cheverly',
                    id: 'cheverly-station',
                    position: {
                        x: 585,
                        y: 130
                    },
                    url: '@cheverly',
                    fillColor: 'white',
                    mission: `<div id='cheverly-boARd-portal' class='boARd-launch-pin'></div><div class='boARd-launch-info'></div>`
                },
                'Landover': {
                    name: 'Landover',
                    id: 'landover-station',
                    position: {
                        x: 605,
                        y: 100
                    },
                    url: '@landover',
                    fillColor: 'white',
                    mission: `<div id='landover-boARd-portal' class='boARd-launch-pin'></div><div class='boARd-launch-info'></div>`
                },
                'New Carrolton': {
                    name: 'New Carrolton',
                    id: 'new-carrolton-station',
                    position: {
                        x: 625,
                        y: 70
                    },
                    url: '@newcarrolton',
                    fillColor: 'white',
                    mission: `<div id='newcarrolton-boARd-portal' class='boARd-launch-pin'></div><div class='boARd-launch-info'></div>`
                }
            },
            silverLineStations : {	
                'Wiehle-Reston East': {
                    name: 'Wiehle-Reston East',
                    id: 'wiehle-reston-east-station',
                    position: {
                        x: 25,
                        y: 130
                    },
                    url: '@wiehle-reston-east',
                    fillColor: 'white',
                    mission: `<div id='wiehlereston-boARd-portal' class='boARd-launch-pin'></div><div class='boARd-launch-info'></div>`
                },
                'Spring Hill': {
                    name: 'Spring Hill',
                    id: 'spring-hill-station',
                    position: {
                        x: 40,
                        y: 150
                    },
                    url: '@springhill',
                    fillColor: 'white',
                    mission:`<div id='springhill-boARd-portal' class='boARd-launch-pin'></div><div class='boARd-launch-info'></div>`
                },
                'Greensboro': {
                    name: 'Greensboro',
                    id: 'greensboro-station',
                    position: {
                        x: 55,
                        y: 170
                    },
                    url: '@greensboro',
                    fillColor: 'white',
                    mission: `<div id='greensboro-boARd-portal' class='boARd-launch-pin'></div><div class='boARd-launch-info'></div>`
                },
                'Tysons Corner': {
                    name: 'Tysons Corner',
                    id: 'tysons-corner-station',
                    position: {
                        x: 70,
                        y: 190
                    },
                    url: '@tysonscorner',
                    fillColor: 'white',
                    mission: `<div id='tysonscorner-boARd-portal' class='boARd-launch-pin'></div><div class='boARd-launch-info'></div>`
                },
                'McLean': {
                    name: 'McLean',
                    id: 'mclean-station',
                    position: {
                        x: 85,
                        y: 210
                    },
                    url: '@mclean',
                    fillColor: 'white',
                    mission: `<div id='mclean-boARd-portal' class='boARd-launch-pin'></div><div class='boARd-launch-info'></div>`
                }
            },
            redLineStations : {        	     
                'Shady Grove': {
                    name: 'Shady Grove',
                    id: 'shady-grove-station',
                    position: {
                        x: 50,
                        y: 20
                    },
                    url: '@shadygrove',
                    fillColor: 'white',
                    mission: `<div id='shadygrove-boARd-portal' class='boARd-launch-pin'></div><div class='boARd-launch-info'></div>`
                },
                'Rockville': {
                    name: 'Rockville',
                    id: 'rockville-station',
                    position: {
                        x: 65,
                        y: 35
                    },
                    url: '@rockville',
                    fillColor: 'white',
                    mission: `<div id='rockville-boARd-portal' class='boARd-launch-pin'></div><div class='boARd-launch-info'></div>`
                },	
                'Twinbrook': {
                    name: 'Twinbrook',
                    id: 'twinbrook-station',
                    position: {
                        x: 80,
                        y: 50
                    },
                    url: '@twinbrook',
                    fillColor: 'white',
                    mission: `<div id='twinbrook-boARd-portal' class='boARd-launch-pin'></div><div class='boARd-launch-info'></div>`
                },
                'White Flint': {
                    name: 'White Flint',
                    id: 'white-flint-station',
                    position: {
                        x: 95,
                        y: 65
                    },
                    url: '@whiteflint',
                    fillColor: 'white',
                    mission: `<div id='whiteflint-boARd-portal' class='boARd-launch-pin'></div><div class='boARd-launch-info'></div>`
                },
                'Grosvenor-Strathmore': {
                    name: 'Grosvenor-Strathmore',
                    id: 'grosvenor-strathmore-station',
                    position: {
                        x: 110,
                        y: 80
                    },
                    url: '@grosvenor-strathmore',
                    fillColor: 'white',
                    mission: `<div id='grosvenor-boARd-portal' class='boARd-launch-pin'></div><div class='boARd-launch-info'></div>`
                },
                'Medical Center': {
                    name: 'Medical Center',
                    id: 'medical-center-station',
                    position: {
                        x: 125,
                        y: 95
                    },
                    url: '@medicalcenter',
                    fillColor: 'white',
                    mission: `<div id='medicalcenter-boARd-portal' class='boARd-launch-pin'></div><div class='boARd-launch-info'></div>`
                },
                'Bethesda': {
                    name: 'Bethesda',
                    id: 'bethesda-station',
                    position: {
                        x: 150,
                        y: 105
                    },
                    url: '@bethesda',
                    fillColor: 'white',
                    mission: `<div id='bethesda-boARd-portal' class='boARd-launch-pin'></div><div class='boARd-launch-info'></div>`
                },
                'Friendship Heights': {
                    name: 'Friendship Heights',
                    id: 'friendship-heights-station',
                    position: {
                        x: 170,
                        y: 105
                    },
                    url: '@friendshipheights',
                    fillColor: 'white',
                    mission: `<div id='friendship-boARd-portal' class='boARd-launch-pin'></div><div class='boARd-launch-info'></div>`
                },         
                'Tenleytown  AU': {
                    name: 'Tenleytown  AU',
                    id: 'tenleytown-au-station',
                    position: {
                        x: 195,
                        y: 105
                    },
                    url: '@tenleytownau',
                    fillColor: 'white',
                    mission: `<div id='tenleytownau-boARd-portal' class='boARd-launch-pin'></div><div class='boARd-launch-info'></div>`
                },
                'Van Ness-UDC': {
                    name: 'Van Ness-UDC',
                    id: 'van-ness-udc-station',
                    position: {
                        x: 215,
                        y: 105
                    },
                    url: '@udc',
                    fillColor: 'white',
                    mission: `<div id='vanness-boARd-portal' class='boARd-launch-pin'></div><div class='boARd-launch-info'></div>`
                },
                'Cleveland Park': {
                    name: 'Cleveland Park',
                    id: 'cleveland-park-station',
                    position: {
                        x: 235,
                        y: 105
                    },
                    url: '@clevelandpARk',
                    fillColor: 'white',
                    mission:`<div id='clevelandpark-boARd-portal' class='boARd-launch-pin'></div><div class='boARd-launch-info'></div>`
                },
                'Woodley Park': {
                    name: 'Woodley Park',
                    id: 'woodley-park-station',
                    position: {
                        x: 250,
                        y: 120
                    },
                    url: '@woodleypARk',
                    fillColor: 'white',
                    mission: `<div id='woodleypark-boARd-portal' class='boARd-launch-pin'></div><div class='boARd-launch-info'></div>`
                },
                'DuPont Circle': {
                    name: 'DuPont Circle',
                    id: 'dupont-circle-station',
                    position: {
                        x: 265,
                        y: 135
                    },
                    url: '@dupontcircle',
                    fillColor: 'white',
                    mission: `<div id='dupont-boARd-portal' class='boARd-launch-pin'></div><div class='boARd-launch-info'></div>`
                },
                'Farragut North': {
                    name: 'Farragut North',
                    id: 'farragut-north-station',
                    position: {
                        x: 280,
                        y: 150
                    },
                    url: '@farragutnorth',
                    fillColor: 'white',
                    mission: `<div id='farragutnorth-boARd-portal' class='boARd-launch-pin'></div><div class='boARd-launch-info'></div>`
                },
                'Takoma': {
                    name: 'Takoma',
                    id: 'takoma-station',
                    position: {
                        x: 325,
                        y: 85
                    },
                    url: '@takoma',
                    fillColor: 'white',
                    mission: `<div id='takoma-boARd-portal' class='boARd-launch-pin'></div><div class='boARd-launch-info'></div>`
                },
                'Judiciary Sq': {
                    name: 'Judiciary Sq',
                    id: 'judiciary-sq-station',
                    position: {
                        x: 395,
                        y: 220
                    },
                    url: '@judiciarysq',
                    fillColor: 'white',
                    mission: `<div id='judiciarysq-boARd-portal' class='boARd-launch-pin'></div><div class='boARd-launch-info'></div>`
                },
                'Union Station': {
                    name: 'Union Station',
                    id: 'union-station-station',
                    position: {
                        x: 425,
                        y: 205
                    },
                    url: '@unionstation',
                    fillColor: 'white',
                    mission: `<div id='union-boARd-portal' class='boARd-launch-pin'></div><div class='boARd-launch-info'></div>`
                },
                'NoMa-Gallaudet U': {
                    name: 'NoMa-Gallaudet U',
                    id: 'noma-gallaudetu-station',
                    position: {
                        x: 425,
                        y: 185
                    },
                    url: '@noma',
                    fillColor: 'white',
                    mission: `<div id='noma-boARd-portal' class='boARd-launch-pin'></div><div class='boARd-launch-info'></div>`
                },
                'Rhode Island Ave': {
                    name: 'Rhode Island Ave',
                    id: 'rhode-island-ave-station',
                    position: {
                        x: 425,
                        y: 165
                    },
                    url: '@rhodeislandave',
                    fillColor: 'white',
                    mission: `<div id='rhodeisland-boARd-portal' class='boARd-launch-pin'></div><div class='boARd-launch-info'></div>`
                },
                'Brookland-CUA': {
                    name: 'Brookland-CUA',
                    id: 'brookland-cua-station',
                    position: {
                        x: 425,
                        y: 145
                    },
                    url: '@brooklancua',
                    fillColor: 'white',
                    mission: `<div id='brooklandcua-boARd-portal' class='boARd-launch-pin'></div><div class='boARd-launch-info'></div>`
                },
                'Takoma': {
                    name: 'Takoma',
                    id: 'takoma-station',
                    position: {
                        x: 340,
                        y: 80
                    },
                    url: '@takoma',
                    fillColor: 'white',
                    mission: `<div style='width: 50px; height: 50px; border-radius: 50%; display: inline-block; background-image: url("../media/texture/hov-md.png"); background-size: 100% 100%; margin: 5% 9%;' id='takoma-boARd-portal' class='boARd-launch-pin'></div><div class='boARd-launch-info'></div>`
                },
                'Silver Spring': {
                    name: 'Silver Spring',
                    id: 'silver-spring-station',
                    position: {
                        x: 325,
                        y: 70
                    },
                    url: '@acornpARk',
                    fillColor: 'red',
                    mission: `<div id='acornpark-boARd-portal' class='boARd-launch-pin'></div><div class='boARd-launch-info'></div>`
                },
                'Forest Glen': {
                    name: 'Forest Glen',
                    id: 'forest-glen-station',
                    position: {
                        x: 325,
                        y: 50
                    },
                    url: '@forestglen',
                    fillColor: 'white',
                    mission: `<div id='forestglen-boARd-portal' class='boARd-launch-pin'></div><div class='boARd-launch-info'></div>`
                },
                'Wheaton': {
                    name: 'Wheaton',
                    id: 'wheaton-station',
                    position: {
                        x: 325,
                        y: 30
                    },
                    url: '@wheaton',
                    fillColor: 'white',
                    mission: `<div id='wheatonboARd-portal' class='boARd-launch-pin'></div><div class='boARd-launch-info'></div>`
                },
                'Glenmont': {
                    name: 'Glenmont',
                    id: 'glenmont-station',
                    position: {
                        x: 325,
                        y: 10
                    },
                    url: '@glenmont',
                    fillColor: 'white',
                    mission: `<div id='glenmont-boARd-portal' class='boARd-launch-pin'></div><div class='boARd-launch-info'></div>`
                }
            },
        },
        map: {
            addStation: function(line, target, delay){
                var station = line[target];
               // console.log(station);
                var svg = document.getElementsByTagName('svg')[0]; //Get svg element
                var newElement = document.createElementNS("http://www.w3.org/2000/svg", 'circle'); //Create a path in SVG's namespace
                newElement.style.stroke = "#000"; //Set stroke colour
                newElement.style.strokeWidth = "2px"; //Set stroke width
                newElement.style.fill = `${station.fillColor}`;
                newElement.setAttribute("id",`${station.id}`);
                newElement.setAttribute("name",`${station.name}`);
                newElement.setAttribute("class","station-marker");
                newElement.setAttribute("cx",`${station.position.x}`);
                newElement.setAttribute("cy",`${station.position.y}`);
                newElement.setAttribute("r","7");
                svg.appendChild(newElement);

                setTimeout(function(){
                    $(`#${station.id}`).animate({
                        opacity: 1.0
                    }, 1000);
                }, delay*100);
            },
            extend: function(obj, src){
                Object.keys(src).forEach(function(key) { obj[key] = src[key]; });
                return obj;
            }
        }
    }
};