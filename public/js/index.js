var socket = io();
socket.on('connect', function () {
    console.log('Connected to Server');

    socket.emit('createMsg', {
        from: 'Paula',
        text: 'Todo bien?'
    });
});

socket.on('disconnect', function () {
    console.log('Disconnected from server');
});

socket.on('newEmail', function(email){
    console.log('New email', email);
});

socket.on('newMessage', function(msg){
    console.log('newMessage', msg);
});