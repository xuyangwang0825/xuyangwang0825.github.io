const ap = new APlayer({
    container: document.getElementById('aplayer'),
    listFolded: false,
    listMaxHeight: 90,
    autoplay: true,
    audio: [
        {
            name: '拝啓、少年よ',
            artist: 'Hump Back',
            url: 'http://music.163.com/song/media/outer/url?id=864648423.mp3',
            cover: '/images/Hump.jpg',
        }
    ]
});