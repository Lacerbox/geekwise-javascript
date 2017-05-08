function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color = color + letters[Math.floor(Math.random() * 16)];
        //console.log(letters[Math.floor(Math.random() * 16)]);
        console.log(color);
    }
    return color;
}
getRandomColor();



/*function getRandomColor() {
    var letters = 'ABCDEFGHIJKLMNOP';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color = color + letters[Math.floor(Math.random() * 16)];
        //console.log(letters[Math.floor(Math.random() * 16)]);
        console.log(color);
    }
    return color;
}
getRandomColor();*/
