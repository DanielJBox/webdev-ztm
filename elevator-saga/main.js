{
    init: function(elevators, floors) {
        // Whenever the elevator is idle (has no more queued destinations) ...
        elevators[0].on("idle", function() {
            elevators[0].goToFloor(0);
        });
        elevators[1].on("idle", () => {
            elevators[1].goToFloor(0);
        })

        elevators.forEach((elevator) => {
            elevator.on("passing_floor", (floorNum, direction) => {
                if (elevator.destinationQueue.includes(floorNum)) {
                    // remove floorNum from the destinationQueue
                    elevator.destinationQueue = elevator.destinationQueue.filter(
                        floor => floor !== floorNum
                    );
                
                    // Add floorNum to the front of the destinationQueue
                    elevator.destinationQueue.unshift(floorNum);
                    elevator.checkDestinationQueue();
                }
            });
            elevator.on("floor_button_pressed", function(floorNum) {
                elevator.destinationQueue.push(floorNum);
            } );
        });
        
        floors.forEach((floor) => {
            floor.on("up_button_pressed", () => {
                if (isGoingUp(elevators[0]) && elevators[0].currentFloor() <= floor.floorNum) {
                    
                }
                // if elevator 0 is going up and is below or on floor.floorNum then elevator 0 is going 
                // in the right direction

                // if elevator 1 is going up and is below or on floor.floorNum then elevator 1 is going
                // in the right direction

                // if it is not going in the right direction but elevator 0 is then add floor.floorNum to elevator 0's 
                // destination queue
                
            });
            floor.on("down_button_pressed", () => {

            });
        })
        
    },
    update: function(dt, elevators, floors) {
        // We normally don't need to do anything here
    }
}