const path              = require('path')
      express           = require('express')

      app               = express()
      port              = process.env.PORT || 3000,
      publicPath        = path.join(__dirname, '../public')


app.use(express.static(publicPath))




app.listen(port, () => {
    console.log(`Server is on ${port}`)
})