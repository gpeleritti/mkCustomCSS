videojs.registerPlugin('avonCTAPlugin', function() {
    var player = this;
    player.ready(function() {
        player.on('loadedmetadata',function(){
            var info = player.mediainfo;
            info.link = info.link? info.link : {
                url: 'https://www.avon.com/'
            }
            if (info.link && info.link.url) {
                var buttonCTA = document.createElement('a');
                buttonCTA.setAttribute('class', 'cta-button');
                buttonCTA.setAttribute('href', info.link.url);
                buttonCTA.setAttribute('target', '_blank');
                var textCTA = document.createElement('span');
                textCTA.setAttribute('class', 'cta-text');
                textCTA.innerHTML = info.link.text? info.link.text : 'Buy Now!';
                buttonCTA.appendChild(textCTA);
                document.getElementsByClassName('video-js')[0].append(buttonCTA);
            }
        });
    });

});