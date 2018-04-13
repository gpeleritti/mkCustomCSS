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
    });
});