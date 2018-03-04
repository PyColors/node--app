const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const session = require('express-session')

// Template ejs
app.set('view engine', 'ejs')

/*
Middleware
*/
app.use('/assets', express.static('public'))

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
//
app.use(session({
    secret: 'aazeazeeaz',
    resave: false,
    saveUninitialized: true,
    // no HTTPS
    cookie: { secure: false }
}))

app.use(require('../middlewares/flash'))

/*
 Routes
 */
app.get('/', (request, response) => {
    response.render('pages/index')
})

app.get('/cameras', (request, response) => {
    response.render('pages/cameras')
})

// Route for error
app.post('/', (request, response) => {
    console.log(request.body)
    if (request.body.message === undefined || request.body.message === '') {
        response.flash('error', "There is no message")
        response.redirect('/')
    } else {

    }
})

app.listen(8080)