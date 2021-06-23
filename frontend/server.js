/*
* Express configuration for React application
* - define the port to run the application
* - define static folder
* - start listening
*/
const express   = require('express')
const {resolve} = require('path')

const app  = express()
const port = process.env.PORT || 3000 

app.use(
    express.static(
        resolve(
            __dirname,
            './build'
        )
    )
)

app.listen(port, (err) => {
    if(err) {
        return console.log(err)
    }
    return console.log(`Server is running at port ${port}`)
})