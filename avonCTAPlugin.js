videojs.registerPlugin('avonCTAPlugin', function() {
    var player = this;
    player.ready(function() {

        player.socialOverlay.on('modalopen', function(){
            console.log('modalopen');
            document.getElementsByClassName('cta-button')[0].style.display = 'none';
        });


        player.socialOverlay.on('modalclose', function(){
            console.log('modalclose');
            document.getElementsByClassName('cta-button')[0].style.display = 'block';
        });

        player.on('loadedmetadata',function(){
            var info = player.mediainfo;
            if (info.link && info.link.url) {
                var rep = window.location.search.split('repid=')[1];
                var repid = rep? rep.split('&')[0] : 'undefined';
                var target = (info.link.url.indexOf('?')!= -1)? '&repid='+repid : '?repid='+repid;
                var buttonCTA = document.createElement('a');
                buttonCTA.setAttribute('class', 'cta-button');
                buttonCTA.setAttribute('href', info.link.url+target);
                buttonCTA.setAttribute('target', '_blank');
                var textCTA = document.createElement('span');
                textCTA.setAttribute('class', 'cta-text');
                textCTA.innerHTML = info.link.text? info.link.text : (options.defaultText? options.defaultText : 'More Information');
                buttonCTA.appendChild(textCTA);
                document.getElementsByClassName('video-js')[0].append(buttonCTA);
            }
        });
    });
});