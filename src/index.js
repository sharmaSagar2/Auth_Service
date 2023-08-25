const express = require('express');

const { PORT } = require('./config/serverConfig');
const apiRoutes = require('./routes/index');

const bodyParser = require('body-parser');
const app = express();

//const UserService = require('./services/user-service'); 


const prepareAndStartServer = () => {

   app.use(bodyParser.json());
   app.use(bodyParser.urlencoded({extended:true}));
   app.use('/api',apiRoutes);
     app.listen(3001, () => {
        console.log(`server started  on Port :${PORT}`);
        //const service = new UserService();
      //   const newToken = service.createToken({email:'sanket@admin.com',id:1});
      //   console.log("new token is",newToken);

      // const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNhbmtldEBhZG1pbi5jb20iLCJpZCI6MSwiaWF0IjoxNjkyOTQwNjk2LCJleHAiOjE2OTI5NDA3MjZ9.2d-1fGbN49dW4I0Xl-0HRntI1blPdJF6SqwyjojI3iA';
      // const response = service.verifyToken(token);
      // console.log(response);
     })
}
prepareAndStartServer(); 