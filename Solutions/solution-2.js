function checkSpeed() {

    const speed = parseInt(prompt("Enter the speed of the car (in km/h): "), 10);
    
    const speedLimit = 70;
    
    if (speed < speedLimit) {
        console.log("Ok");
    } else {
    
        const excessSpeed = speed - speedLimit;

        const demeritPoints = Math.floor(excessSpeed / 5);
        console.log(`Points: ${demeritPoints}`);

        if (demeritPoints > 12) {
            console.log("License suspended");
        }
    }
}

checkSpeed();
