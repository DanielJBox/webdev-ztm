{
    init: function(elevators, floors) {
        let elevator1 = elevators[0]; // Let's use the first elevator
        let passengers = [];
        let currentDirection = "stopped";
        let lastPassedFloor = -1;
        let lastStoppedFloor = -1;
        elevator1.goToFloor(0);
        lastStoppedFllor = 0;
        
        // Whenever the elevator is idle (has no more queued destinations) ...
        elevator1.on("idle", function() {
            // let's go to all the floors (or did we forget one?)
            //elevator1.goToFloor(0);
            
        });
        
        elevator1.on("stopped_at_floor", function(floorNum) {
            lastStoppedFloor = floorNum;
            if (elevator1.destinationQueue[0] > floorNum) {
                
            }
        })
        
        
        
        elevator1.on("floor_button_pressed", function(floorNum) {
            elevator1.destinationQueue.push(floorNum);
            //elevator1.goToFloor(floorNum);
        } );
        floors.forEach((floor) => {
            floor.on("up_button_pressed", function() {
                // if (elevator1.destinationDirection == "up" && floor.floorNum > elevator1.currentFloor) {}
                elevator1.destinationQueue.push(floor.floorNum());
                //elevator1.checkDestinationQueue();
            } );
            floor.on("down_button_pressed", function() {
                elevator1.destinationQueue.push(floor.floorNum());
                //elevator1.checkDestinationQueue();
            } );
        })

    },
        update: function(dt, elevators, floors) {
            // We normally don't need to do anything here
        }
}