const express = require('express');

const { PORT } = require('./config/serverConfig');
const apiRoutes = require('./routes/index');

const bodyParser = require('body-parser');
const app = express();

//const UserService = require('./services/user-service'); 
//const {User,Role} = require('./models/index');
//const db = require('./models/index);

const prepareAndStartServer = () => {

   app.use(bodyParser.json());
   app.use(bodyParser.urlencoded({extended:true}));
   app.use('/api',apiRoutes);
     app.listen(3001, async () => {
        console.log(`server started  on Port :${PORT}`);
      //   if(process.env.DB_SYNC) {
      //    db.sequelize.sync({alert:true});
      //   }
      // const u1 = await User.findByPk(10);
      // const r1 = await Role.findByPk(2);
      // //u1.addRole(r1);
      // const response = await r1.getUsers();
      // console.log(response);


         
        //const service = new UserService();
      //   const newToken = service.createToken({email:'sanket@admin.com',id:1});
      //   console.log("new token is",newToken);

      // const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNhbmtldEBhZG1pbi5jb20iLCJpZCI6MSwiaWF0IjoxNjkyOTQwNjk2LCJleHAiOjE2OTI5NDA3MjZ9.2d-1fGbN49dW4I0Xl-0HRntI1blPdJF6SqwyjojI3iA';
      // const response = service.verifyToken(token);
      // console.log(response);
     })
}
prepareAndStartServer(); 