const express    = require('express'),
      path       = require('path'),

      app        = express(),
      port       = process.env.PORT || 3000,
      publicPath = path.join(__dirname, '../public');


app.use(express.static(publicPath));


app.listen(port, () => { console.log(`server is up on port ${port}`); });

