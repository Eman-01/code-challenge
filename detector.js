function speedDetector(speed){
    let speedLimit = 70;
    let kmPerDemerit = 5;
    let overSpeed = speed - speedLimit;
    let points = Math.floor(overSpeed / kmPerDemerit);
// checks whether the speed is below speed limit and returns Ok
    if (speed <= speedLimit){
        console.log('Ok')
    }
// checks if the points are above 12 and returns license suspended
    else if(points > 12){
        console.log('Licence suspended')
    }
    else if(points < 12){
        console.log('Points', + points)
    }

    

    
}
console.log(speedDetector())