function hi(shit) {
    let listan = JSON.parse(shit);
    for (let i = 0; i < listan.length; i++) {
        alert(listan[i]);
    }
}

var images = ['bg-1.png', 'bg-2.png', 'bg-3.png', 'bg-4.png', 'bg-5.png', 'bg-6.png'];
    $('body').css({
        'background-image': 'url(' + '../static/images/' + images[Math.floor(Math.random() * images.length)] + ')',
        'background-size': 'cover',
        'background-repeat': 'no-repeat',
        'webkit-background-size': 'cover',
        'moz-background-size': 'cover',
        'o-background-size': 'cover',
    });