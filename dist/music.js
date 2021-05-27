const ap = new APlayer({
    container: document.getElementById('aplayer'),
    listFolded: false,
    listMaxHeight: 90,
    autoplay: false,
    audio: [
        {
            name: '拝啓、少年よ',
            artist: 'Hump Back',
            url: 'http://music.163.com/song/media/outer/url?id=864648423.mp3',
            cover: '/images/Hump.jpg',
            theme: '#8A2BE2',
        },
        {
            name: '小さな恋のうた',
            artist: 'MONGOL800',
            url: 'http://music.163.com/song/media/outer/url?id=22781103.mp3',
            cover: '/images/MONGOL800.png',
            theme: '#8A2BE2',
        },
    ]
});