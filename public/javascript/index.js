let socket = io();
socket.on('connect', function() {
    console.log('connected to server');
    socket.emit('newMessage', {
        from: "Jimbo",
        text: "bear speak (translate)"
    });
});

socket.on('disconnect', function() {
    console.log('server disconnected');
});

// socket.on('newEmail', function(email) {
//     console.log("new email", email);
// });

socket.on('newMessage', function(message) {
    console.log("new message", message)
});