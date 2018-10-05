const express           = require('express'),
      path              = require('path'),
      socketIO          = require('socket.io'),
      http              = require('http'),
      {generateMessage} = require('./utils/message');

      app               = express(),
      port              = process.env.PORT || 3000,
      publicPath        = path.join(__dirname, '../public'),
      server            = http.createServer(app),
      io                = socketIO(server);


app.use(express.static(publicPath));
io.on('connection', (socket) => {
    console.log('new user connected');

    socket.emit('newMessage', generateMessage('Otis', 'Welcom to Brooks Falls. rawrrwaannnarrrnnmm!'));

    socket.broadcast.emit('newMessage', ('Otis', 'New bear joined'));

    socket.on('createMessage', (message) => {
        console.log('createMessage', message);
        io.emit('newMessage', generateMessage(message.from, message.text));
        //     from: message.from,
        //     text: message.text,
        //     createdAt: new Date().getTime()
        // });
    });

    socket.on('disconnect', () => {
        console.log('client disconnected');
    })
}); 


server.listen(port, () => { console.log(`server is up on port ${port}`); });

