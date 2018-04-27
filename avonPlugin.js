videojs.registerPlugin('avonSharePlugin', function(options) {
    var player = this;

    player.ready(function() {

        if (player && player.socialButton) {
            player.socialButton.hide();
        }

        player.on('loadstart',function(){
            var info = player.mediainfo,
                socialOverlay = player.socialOverlay;
            if (info.tags && info.tags.indexOf('shareable') > -1){
                player.socialButton.show();
            } else {
                player.socialButton.hide();
            }
            var rep = window.location.search.split('repid=')[1];
            var repid = rep? rep.split('&')[0] : 'undefined';

            //use customURL as base url if is present if not use the defgault
            var urlbase = options.customURL? options.customURL : 'https://www.avon.com/video-share';

            //Use the value of player id passed on the plugin options. If not use the current player Id.
            var playerId = options.playerId? options.playerId : player.bcinfo.playerId;

            //query parameters
            var qp = '?video='+info.id+'&player='+playerId+'&repid='+repid;

            // replace the query parameters on the embed code
            var ec = socialOverlay.getEmbedCode();
            var qsStart = ec.indexOf('?');
            var qsEnd = ec.split('?')[1].indexOf(' ') + qsStart;
            var finalEC = ec.replace(ec.substring(qsStart, qsEnd), qp);

            var url = urlbase + qp;

            socialOverlay.setDirectLink(url);
            socialOverlay.setEmbedCode(finalEC);
        });

        player.on('loadedmetadata',function(){
            var info = player.mediainfo,
                socialOverlay = player.socialOverlay;
            if (info.tags && info.tags.indexOf('shareable') > -1){
                player.socialButton.show();
            } else {
                player.socialButton.hide();
            }
            var rep = window.location.search.split('repid=')[1];
            var repid = rep? rep.split('&')[0] : 'undefined';

            //use customURL as base url if is present if not use the defgault
            var urlbase = options.customURL? options.customURL : 'https://www.avon.com/video-share';

            //Use the value of player id passed on the plugin options. If not use the current player Id.
            var playerId = options.playerId? options.playerId : player.bcinfo.playerId;

            //query parameters
            var qp = '?video='+info.id+'&player='+playerId+'&repid='+repid;

            // replace the query parameters on the embed code
            var ec = socialOverlay.getEmbedCode();
            var qsStart = ec.indexOf('?');
            var qsEnd = ec.split('?')[1].indexOf(' ') + qsStart;
            var finalEC = ec.replace(ec.substring(qsStart, qsEnd), qp);

            var url = urlbase + qp;

            socialOverlay.setDirectLink(url);
            socialOverlay.setEmbedCode(finalEC);
        });

        player.on('endscreen', function(event){

            //Hidding sharing options from end screen, removing 'Share: ' from the title and centering
            //restart button when the video is not shareable
            var info = player.mediainfo;
            if (!info.tags || info.tags.indexOf('shareable') === -1) {

                if (document.getElementsByClassName('vjs-social-share-links')[0]) {
                    document.getElementsByClassName('vjs-social-share-links')[0].style.display = 'none';
                }
                if (document.getElementsByClassName('vjs-social-direct-link')[0]) {
                    document.getElementsByClassName('vjs-social-direct-link')[0].style.display = 'none';
                }
                if (document.getElementsByClassName('vjs-social-embed-code')[0]){
                    document.getElementsByClassName('vjs-social-embed-code')[0].style.display = 'none';
                }
                if (document.getElementsByClassName('vjs-restart')[0]){
                    document.getElementsByClassName('vjs-restart')[0].classList.add('restart-centered');
                }
                if(document.getElementsByClassName('vjs-social-title')[0]) {
                    document.getElementsByClassName('vjs-social-title')[0].innerHTML = document.getElementsByClassName('vjs-social-title')[0].innerHTML.replace('Share: ', '');
                }
            }
        });
    });
});

