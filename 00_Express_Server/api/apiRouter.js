const express = require('express');
const router = express.Router(); 

// REST API configuration 

// Employees data
let employees = [
    {
        id : 001,
        first_name : 'Alex',
        last_name : 'Smith',
        email : 'alex@smith.com',
        gender : 'male',
        ip_address : '127.0.0.1'
    },
    {
        id : 002,
        first_name : 'Laura',
        last_name : 'Wilson',
        email : 'laura@wilson.com',
        gender : 'female',
        ip_address : '137.0.0.1'
    }
]

// GET - Employees
router.get('/employees',(request, response) =>{
    response.json(employees)
}); 

module.exports = router; 
