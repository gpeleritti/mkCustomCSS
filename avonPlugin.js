videojs.registerPlugin('avonSharePlugin', function() {
    var player = this;

    player.ready(function() {

        if (player && player.socialButton) {
            player.socialButton.hide();
        }

        player.on('loadedmetadata',function(){
            var info = player.mediainfo,
                socialOverlay = player.socialOverlay;
            if (info.tags.indexOf('shareable') > -1){
                player.socialButton.show();
            }

            var rep = window.location.search.split('repid=')[1];
            var repid = rep? rep.split('&')[0] : 'undefined';

            var url = 'https://www.avon.com/video-share?video='+info.id+'&player='+player.bcinfo.playerId +'&repid='+repid;
            socialOverlay.setDirectLink(url);
        });
    });
});