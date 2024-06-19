// Hotel Management System.

let rooms=[
    {roomNumber:1, status:'available'},
    {roomNumber:2, status:'booked'},
    {roomNumber:3, status:'available'}
];

// Function to check for the availability of a room
function checkAvailability(roomNumber) {
    const room = rooms.find(r => r.number === roomNumber);
    if (!room) {
        console.log(`Room ${roomNumber} does not exist.`);
        return false;
    }
    if (room.status === 'available') {
        console.log(`Room ${roomNumber} is available.`);
        return true;
    } else {
        console.log(`Room ${roomNumber} is not available.`);
        return false;
    }
}

// Function to book a room
function bookRoom(roomNumber) {
    const room = rooms.find(r => r.number === roomNumber);
    if (!room) {
        console.log(`Room ${roomNumber} does not exist.`);
        return;
    }
    if (room.status === 'available') {
        room.status = 'booked';
        console.log(`Room ${roomNumber} has been successfully booked.`);
    } else {
        console.log(`Room ${roomNumber} is not available for booking.`);
    }
}

// Function to checkout a room
function checkout(roomNumber) {
    const room = rooms.find(r => r.number === roomNumber);
    if (!room) {
        console.log(`Room ${roomNumber} does not exist.`);
        return;
    }
    if (room.status === 'booked') {
        room.status = 'available';
        console.log(`Room ${roomNumber} has been successfully checked out.`);
    } else {
        console.log(`Room ${roomNumber} is already available.`);
    }
}
