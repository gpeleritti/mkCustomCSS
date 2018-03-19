videojs.registerPlugin('avonSharePlugin', function() {
    var player = this;

    player.ready(function() {

        if (player && player.socialButton) {
            player.socialButton.hide();
        }

        player.on('loadedmetadata',function(){
            ar = player.mediainfo.tags;
            if (ar.indexOf('shareable') > -1){
                player.socialButton.show();
            }
        });
    });

    player.on('loadstart', function() {
        var info = player.mediainfo,
            socialOverlay = player.socialOverlay;
        //location.href format should looks like http://.....?...&repId=repIdValue
        var repId = window.location.search.split('repid=')[1] || '5464798';
        var url = 'https://www.avon.com/video-share?video='+info.id+'&player='+player.bcinfo.playerId +'&repid='+repId;
        socialOverlay.setDirectLink(url);
    });
});