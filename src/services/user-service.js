const UserRepository = require('../repository/user-repository');
const jwt = require('jsonwebtoken');
const { JWT_KEY } = require('../config/serverConfig');
const bcrypt = require('bcrypt');
class UserService {

    constructor() {
        this.userRepository = new UserRepository();

    }
    async create(data) {
        try {
            const user = await this.userRepository.create(data);
            return user;
            
        } catch (error) {
            console.log('error on service layer');
            throw error;
            
        }

    }
    async getById(userId) {
        try {
            const user = await this.userRepository.getById(userId);
            return user;    
        } catch (error) {
            console.log('error on service layer');
            throw error;
            
        }

    }

    async signIn(email,plainPassword) {
        try {
            //fetch the user using email
            const user = await this.userRepository.getByEmail(email);
            //s compare incoming plainpassword with stores encrypted password
              const passwordMatch = this.checkPassword(plainPassword,user.password); 
              
              if(!passwordMatch){
                console.log('password not match');
                throw {error:'incorrect Password'};
              }
              //if password match create token and return to user
              const newJWT = this.createToken({email:user.email,id:user.id});
              return newJWT;     
        } catch (error) {
           console.log('error in singIn process'); 
           throw {error:'can not be sing iN'};
        }
    }

     createToken(user) {
        try {
            const result = jwt.sign(user,JWT_KEY, {expiresIn : '1d'});
            return result;    
        } catch (error) {
            console.log('error on token creation');
            throw error;
        }

     }

     verifyToken(token) {
        try {
            const response = jwt.verify(token,JWT_KEY);
            return response;
            
        } catch (error) {
            console.log('error on token validation');
            throw error;
        }
     }

     checkPassword(userInputPlainPassword,encryptedPassword) {
        try {
            return bcrypt.compareSync(userInputPlainPassword,encryptedPassword);
            
        } catch (error) {
            console.log('error on password comparison');
            throw error;
        }
     }

}
module.exports = UserService;