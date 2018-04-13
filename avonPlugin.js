videojs.registerPlugin('avonSharePlugin', function() {
    var player = this;

    player.ready(function() {

        if (player && player.socialButton) {
            player.socialButton.hide();
        }

        player.on('loadstart',function(){
            var info = player.mediainfo,
                socialOverlay = player.socialOverlay;
            if (info.tags.indexOf('shareable') > -1){
                player.socialButton.show();
            }

            var rep = window.location.search.split('repid=')[1];
            var repid = rep? rep.split('&')[0] : 'undefined';

            console.log('BASEURL: ', options.customURL);

            var url = options.customURL+'?video='+info.id+'&player='+player.bcinfo.playerId +'&repid='+repid;
            socialOverlay.setDirectLink(url);
        });
    });
});