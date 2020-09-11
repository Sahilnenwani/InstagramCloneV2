Server:
express
mongoose
jsonwebtoken
botenv
bcrypyt.js

Client:
https://materializecss.com/
https://material-ui-x.netlify.app/?path=/story/1-docs-2-columns--page
https://material-ui.com/

https://fonts.google.com/?standard-styles=

Check mail syntex use a regular expression mail

Deployement:
1 client folder past on server side all staff in server
2 Heroku Deployment complete app make react app build npm run build
3 add dev.js in gitignore
4 some start scrip :
"scripts": {
"test": "echo \"Error: no test specified\" && exit 1",
"start": "node server.js",
"heroku-postbuild": "NPM_CONFIG_PRODUCTION=false npm install --prefix client && npm run build --prefix client"
},

5 add some code in if your start file name is server.js, app.js, index.js

6 past this code before of app.listen code
if (process.env.NODE_ENV == 'production') {
app.use(express.static('client/build'))
const path = require('path')
app.get('\*',(req,res)=>res.sendFile(path.resolve(\_\_dirname,'client','build','index.html')))
}

7 login heroku and create new project name the project create on heroku

8 come server folder open folder in termina or cli git init and git add .

9 git remote on past on terminal cli

10 git commit and git push heroku master

11 then crearte enviorment variable database connection string , jwt token and another variable you want to use your aap

12 url create use and share you friends and client aur progaram manager to check and web site :)
