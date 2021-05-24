const ap = new APlayer({
    container: document.getElementById('player'),
    listFolded: false,//列表默认折叠
    listMaxHeight: 90,//列表最大高度
    lrcType: 3, //此为歌词格式，没有歌词可以直接删掉这一行
    audio: [
        {
            name: 'name1',
            artist: 'artist1',
            url: 'url1.mp3',
            cover: 'cover1.jpg',
            lrc: 'lrc1.lrc',
            theme: '#ebd0c2'
        },
        {
            name: 'name2',
            artist: 'artist2',
            url: 'url2.mp3',
            cover: 'cover2.jpg',
            lrc: 'lrc2.lrc',
            theme: '#46718b'
        }
    ]
});