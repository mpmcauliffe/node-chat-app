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
    socket.on('disconnect', () => {
        console.log('client disconnected');
    })
}); 


server.listen(port, () => { console.log(`server is up on port ${port}`); });

