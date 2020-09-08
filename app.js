const config        = require('./utils/config')
const express       = require('express')
const app           = express()
const bodyParser    = require('body-parser')
const cors          = require('cors')
const mongoose      = require('mongoose')

const notesRouter   = require('./routers/notes-router')
const usersRouter   = require('./routers/users-router')
const loginRouter   = require('./routers/login-router')

const {requestLogger, errorHandler, unknownEndpoint} = require('./utils/middleware/middleware')

mongoose.set('useFindAndModify', false)
mongoose.connect(config.MONGODB_URI, {useNewUrlParser: true, useFindAndModify: false, useCreateIndex: true})
    .then(() => {
        console.log('connected to MongoDB')
    })
    .catch((error) => {
        console.log('error cought connecting to MongoDB: ', error.message)
    })

app.use(cors())
if (process.env.NODE_ENV === 'production'){
    app.use(express.static('build'))
      // app.use(express.static('front/build'))
} 

app.use(bodyParser.json())

app.use(requestLogger)

app.use('/api/notes', notesRouter)
app.use('/api/users', usersRouter)
app.use('/api/login', loginRouter)

app.use(errorHandler)
app.use(unknownEndpoint)


module.exports = app
