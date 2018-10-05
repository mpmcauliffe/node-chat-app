const express    = require('express'),
      path       = require('path'),
      socketIO   = require('socket.io'),
      http       = require('http'),

      app        = express(),
      port       = process.env.PORT || 3000,
      publicPath = path.join(__dirname, '../public'),
      server     = http.createServer(app),
      io         = socketIO(server);


app.use(express.static(publicPath));
io.on('connection', (socket) => {
    console.log('new user connected');

    socket.emit('newMessage', {
        from: 'Otis',
        text: 'Welcom to Brooks Falls. rawrrwaannnarrrnnmm!',
        createdAt: new Date().getTime()
    });

    socket.broadcast.emit('newMessage', {
        from: 'Otis',
        text: 'New user joined',
        createdAt: new Date().getTime()
    })

    socket.on('createMessage', (message) => {
        console.log('createMessage', message);
        io.emit('newMessage', {
            from: message.from,
            text: message.text,
            createdAt: new Date().getTime()
        });
    });

    socket.on('disconnect', () => {
        console.log('client disconnected');
    })
}); 


server.listen(port, () => { console.log(`server is up on port ${port}`); });

