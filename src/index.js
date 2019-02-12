const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const session = require('express-session')
const helmet = require('helmet')

require('dotenv').config()

const routes = require('./routes')

mongoose.connect(process.env.MONGO_URI)

const app = express()
const sess = {
  secret: process.env.SECRET || 'keyboard cat',
  cookie: {},
}

if (process.env.NODE_ENV === 'production') {
  app.set('trust proxy', 1) // trust first proxy
  sess.cookie.secure = true // serve secure cookies
}

app.use(session(sess))
app.use(helmet())
app.use(cors())

app.get('/', (req, res) => res.status(200).json({ message: 'Server OK' }))

app.use('/api/v1', routes)

app.listen(process.env.PORT || 3000)
