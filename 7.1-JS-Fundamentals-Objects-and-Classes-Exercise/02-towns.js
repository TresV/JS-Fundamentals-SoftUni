function townLocation(data) {
    let obj = {};

    for (const line of data) {
        let [townName, latitude, longitude] = line.split(' | ');
        obj.town = townName;
        obj.latitude = Number(latitude).toFixed(2);
        obj.longitude = Number(longitude).toFixed(2);
        console.log(obj);
    }
}
townLocation(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625'])