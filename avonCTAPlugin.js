videojs.registerPlugin('avonCTAPlugin', function() {
    var player = this;
    player.ready(function() {
        player.on('loadedmetadata',function(){
            var info = player.mediainfo;
            console.log('Info: ', info);
            var buttonCTA = document.createElement('a');
            buttonCTA.setAttribute('class', 'cta-button');
            buttonCTA.setAttribute('href', info.relatedLink);
            buttonCTA.innerHTML = 'Buy Now!';
            document.getElementsByClassName('video-js')[0].append(buttonCTA);
        });
    });

});