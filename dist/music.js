const ap = new APlayer({
    container: document.getElementById('aplayer'),
    listFolded: false,
    listMaxHeight: 90,
    autoplay: true,
    audio: [
        {
            name: '咖啡+交換餘生',
            artist: '林俊杰',
            url: 'https://markdown.diobrando0825.cn/2023-02-21-%E6%9E%97%E4%BF%8A%E6%9D%B0-%E5%92%96%E5%95%A1-%E4%BA%A4%E6%8D%A2%E4%BD%99%E7%94%9F.mp3',
            cover: 'https://markdown.diobrando0825.cn/2023-02-21-084048.jpg',
            theme: '#8A2BE2',
        },
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