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
app.use(cors());
app.use(bodyParser.json())
app.use(passport.initialize());
app.use(passport.session());

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
        db.get_user([profile.identities[0].user_id]).then( user => {
            if (user[0]) {
                done(null, user[0].id)
            } else {
                db.create_user([
                    profile.emails[0].value,
                    profile.identities[0].user_id]).then( user => {
                        done(null, user[0].id)
                    })
            }})
      }))

     passport.serializeUser(function(userId, done) {
        done(null, userId);
    })
      passport.deserializeUser( function( userId, done) {
        app.get('db').current_user(userId).then(user => {
                done(null, user[0])
    })
    })
    app.get('/auth', passport.authenticate('auth0'));
    app.get('/auth/callback', passport.authenticate('auth0',{
        successRedirect: process.env.SUCCESS_REDIRECT,
        failureRedirect: process.env.FAILURE_REDIRECT
    }))

    app.get('/auth/logout', (req,res) => {
        req.logOut();
        res.redirect(302, process.env.LOGOUT_REDIRECT)
    })

    app.get('/api/user',  passport.authenticate('auth0'), (req, res) => {
        req.app.get('db').current_user().then(user =>{
            res.status(200).send(user)
        }).catch((err) => {console.log(err)})
    })

    app.post('/api/history', (req, res) => {
        const history = app.get('db')
        req.app.get('db').create_history([req.user.id, req.body.searches]).then(search =>{
            res.send()
            
        })
        .catch( function(err){
            console.log(err)
        })
    })
    
    app.get('/api/history', (req, res) => {
        req.app.get('db').get_history(req.user.id, req.body.searches).then(history =>{
            res.status(200).send(history);
        }).catch((err) => {console.log(err)})
    })

    app.get('/api/youtubevideos', (req, res) => {
    const request = require('request');
    request('https://www.googleapis.com/youtube/v3/search?snippet.title', function (error, response, body) {
            res.send(body)   
        })
    })

    app.get('/api/vimeo', (req, res) => {
        const request = require('request')
        request('https://vimeo.com/api/oembed.json?url=https%3A//vimeo.com/video/search?q=d', function (error, response, body) {
            if (!error && response.statusCode == 200) {
                res.send(body)
            }
        })
    })

    app.post('/api/uploads', (req, res) => {
        const videos = app.get('db')
        req.app.get('db').add_video([req.user.id, req.body.title, req.body.source]).then(search =>{
            res.send()
    })
})

    app.get('/api/uploads', (req, res) => {
    req.app.get('db').get_video(req.user.id, req.body.title, req.body.source).then(vids =>{
        res.status(200).send(vids);
    }).catch((err) => {console.log(err)})
})
    app.delete('/api/uploads/:id', (req, res)  => {
            req.app.get('db').delete_video([req.user.id, req.params.id]).then(vids =>{
                req.app.get('db').get_video([req.user.id]).then(vids => {
                    res.status(200).send(vids);
            })
            }).catch((err) => {console.log(err
        )})
        
    })

    app.put('/api/uploads/:id', (req, res) => {
        req.app.get('db').edit_video([req.user.id, req.params.id, req.body.title]).then(title => {
            req.app.get('db').get_video([req.user.id]).then(vids => {
                res.send()
            })
            })
            })
        

// app.use( express.static( `${__dirname}/../build` ) );

// const path = require('path')
// app.get('*', (req, res)=>{
//   res.sendFile(path.join(__dirname, '../build/index.html'));
// })

const port = 3535;

app.listen(port, () => console.log(`listening on port ${port}`));