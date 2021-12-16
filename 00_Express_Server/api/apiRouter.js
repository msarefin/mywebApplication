const express = require('express');
const router = express.Router(); 

// REST API configuration 

// Employees data
let employees = [
    {
        id : '_abcdef',
        first_name : 'Alex',
        last_name : 'Smith',
        email : 'alex@smith.com',
        gender : 'male',
        ip_address : '127.0.0.1'
    },
    {
        id : '_pqrstw',
        first_name : 'Laura',
        last_name : 'Wilson',
        email : 'laura@wilson.com',
        gender : 'female',
        ip_address : '137.0.0.1'
    }
]

// Get ID 
let getID = () =>{
    return '_'+Math.random().toString(36).substr(2,9);
};

// GET - Employees
router.get('/employees',(request, response) =>{
    console.log(`GET request receives at server ...${new Date().toLocaleTimeString()}`);
    response.json(employees);
}); 

// POST Request

router.post('/employees',(request, response) =>{
    let employee = {
        id : getID(), 
        first_name : request.body.first_name, 
        last_name : request.body.last_name,
        email : request.body.email, 
        gender : request.body.gender,
        ip_address : request.body.ip_address

    };
    employees.push(employee);
    console.log(`POST request receives at server ...${new Date().toLocaleTimeString()}`);
    response.json({msg : 'POST request is successfull ...!'});
});

// PUT Request
router.put('/employees/:id',(request,response) => {
    let empID = request.params.id
    let updateEmployee = {
        id : empID,
        first_name : request.body.first_name, 
        last_name : request.body.last_name, 
        email : request.body.email, 
        gender : request.body.gender, 
        ip_address :request.body.ip_address
    }
    let existingEmployee = employees.find((employee) =>{
        return employee.id === empID; 
    });
    employees.splice(employees.indexOf(existingEmployee),1,updateEmployee);
    console.log(`PUT request received at server ...${new Date().toLocaleTimeString()}`);
    response.json({msg : 'PUT request is Successfull ...!'});
});

// DELETE  Request 
router.delete('/employees/:id',(request, response) =>{
    let empID = request.params.id; 
    employees = employees.filter((employee) =>{
        return employee.id !== empID; 
    });
    console.log(`DELETE Request at server ...${new Date().toLocaleTimeString()}`);
    response.json({msg : 'DELETE request is successful ...!'});
});

module.exports = router; 

