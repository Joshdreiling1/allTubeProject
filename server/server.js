require('dotenv').config();
const express = require('express')
, bodyParser = require('body-parser')
, session = require('express-session')
, massive = require('massive')
, passport = require('passport')
, Auth0Strategy = require('passport-auth0')
, cors = require('cors')

const app = express();
app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true
}))
app.use(passport.initialize());
app.use(passport.session());
app.use(cors());

// massive connection
massive(process.env.CONNECTION_STRING)
.then( db => {
    app.set('db', db)
})

passport.use( new Auth0Strategy({
    domain: process.env.AUTH_DOMAIN,
    clientID: process.env.AUTH_CLIENT_ID,
    clientSecret: process.env.AUTH_CLIENT_SECRET,
    callbackURL: process.env.AUTH_CALLBACK
  }, function(accessToken, refreshToken, extraParams, profile, done) {
    const db = app.get('db');
    // databse stuff
    //     db.get_user([profile.identities[0].user_id]).then( user => {
    //         if (user[0]) {
    //             done(null, user[0].id)
    //         } else {
    //             db.create_user([
    //                 profile.emails[0].value,
    //                 profile.password,
    //                 profile.identities[0].user_id]).then( user => {
    //                     done(null, user[0].id)
    //                 })
    //         }})
    //   }))

     passport.serializeUser(function(userId, done) {
        done(null, userId);
    })
      passport.deserializeUser( function( userId, done) {
        app.get('db').current_user([userId]).then(user => {
                done(null, user[0])
        })
    })
    app.get('/auth', passport.authenticate('auth0'));
    app.get('/auth/callback', passport.authenticate('auth0',{
        successRedirect: 'http://localhost:3000/#/dashboard',
        failureRedirect: '/auth'
      }))
      app.get('/auth/logout', (req,res) => {
        req.logOut();
        res.redirect(302, 'http://localhost:3000/#/')
    })

    app.get('/api/friend/list', (req, res) => {
        console.log('something')
        req.app.get('db').get_friends().then(friends =>{
            res.status(200).send(friends);
        }).catch((err) => {console.log(err)})
    })

    app.get('/api/user', (req, res) => {
        req.app.get('db').current_user().then(user =>{
            res.status(200).send(user)
        }).catch((err) => {console.log(err)})
    })

    // app.update('/api/user', (req, res) => {
    //     let {}
    // })
    

const port = 3535;

app.listen(port, () => console.log(`listening on port ${port}`));