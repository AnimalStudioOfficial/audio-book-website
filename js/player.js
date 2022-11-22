function sounds(){
    
    var rand = [
        'https://rafaelgoulartb.github.io/audio-book-website/audios/track.mp3',
        'http://thejazz.ninja/sounds/w.mp3',
        'http://thejazz.ninja/sounds/x.mp3',
        'http://thejazz.ninja/sounds/y.mp3',
        'http://thejazz.ninja/sounds/z.mp3'];

    var randSound = rand[Math.floor(Math.random() * rand.length)];
    
    var player=document.getElementById('player');
    var sourceMp3=document.getElementById('sourceMp3');

    sourceMp3.src='' + randSound + '';
    
   player.load();
   player.play();
}

$('.box').click(sounds);
