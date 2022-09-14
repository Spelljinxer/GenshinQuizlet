

var images = ['bg-1.png', 'bg-2.png', 'bg-3.png', 'bg-4.png', 'bg-5.png', 'bg-6.png', 'bg-7.png'];
    $('body').css({
        'background-image': 'url(' + '../static/images/' + images[Math.floor(Math.random() * images.length)] + ')',
    });


