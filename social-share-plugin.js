videojs.registerPlugin('socialSharePlugin', function() {
    debugger;
    console.log('starting');
    var player = this;
    player.on('loadstart', function() {
        var info = player.mediainfo,
            socialOverlay = player.socialOverlay;
        var url = 'http://marykay.gallry.video?videoId=' + info.id;
        console.log('url: ',url);
        socialOverlay.setDirectLink(url);
    });
});