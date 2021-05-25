const ap = new APlayer({
    container: document.getElementById('player'),
    listFolded: false,
    listMaxHeight: 90,
    lrcType: 3,
    audio: [
        {
            name: 'Alone',
            artist: 'Alan Walker / Noonie Bao',
            url: 'http://music.163.com/song/media/outer/url?id=444269135.mp3',
            cover: '/images/alone.jpg',
        }
    ]
});