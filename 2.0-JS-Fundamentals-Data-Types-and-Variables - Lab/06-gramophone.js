function gramophone(bandName, albumName, songName) {
    let singleRotationTime = 2.5;
    let songDuration = (albumName.length * bandName.length) * songName.length / 2;
    let rotationsMade = songDuration / singleRotationTime;
    console.log(`The plate was rotated ${Math.ceil(rotationsMade)} times.`);
}

gramophone('Black Sabbath', 'Paranoid', 'War Pigs')