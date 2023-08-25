const UserService = require('../services/user-service');
const express = require('express');
const app = express();
const userService = new UserService();
const create = async (req,res) => {

    try { 
        const response = await userService.create({
            email : req.body.email,
            password : req.body.password
        }) ;
        return res.status(201).json({
            success:'successfully created a new user',
            data : response,
            err : {}
        });
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message : 'error on controllers layer',
            data : {},
            success : false,
            err : error

        })
        
    }
}

const getById = async (req,res) => {
    try {
        const response = await userService.getById(req.params.id);
        return res.status(201).json({
            success:'successfully get the user details',
            data:response,
            err:{}
        });
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message : 'error on controllers layer',
            data : {},
            success : false,
            err : error

        })
        
    }
}
module.exports = {
    create,getById
}