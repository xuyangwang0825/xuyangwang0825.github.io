const ap = new APlayer({
    container: document.getElementById('aplayer'),
    listFolded: false,
    listMaxHeight: 90,
    autoplay: true,
    audio: [
        {
            name: 'golden hour',
            artist: 'JVKE',
            url: 'https://markdown.diobrando0825.cn/JVKE%20-%20golden%20hour.mp3',
            cover: 'https://i1.sndcdn.com/artworks-izf8EJlfHMcO-0-t500x500.jpg',
            theme: '#8A2BE2',
        },
        {
            name: 'Playing God',
            artist: 'Polyphia',
            url: 'https://markdown.diobrando0825.cn/Polyphia%20-%20Playing%20God.mp3',
            cover: 'https://i1.sndcdn.com/artworks-b47cUUA1beh4-0-t500x500.jpg',
            theme: '#8A2BE2',
        },
        {
            name: '拝啓、少年よ',
            artist: 'Hump Back',
            url: 'https://markdown.diobrando0825.cn/Hump_Back_-_%28mp3.pm%29.mp3',
            cover: '/images/Hump.jpg',
            theme: '#8A2BE2',
        },
    ]
});