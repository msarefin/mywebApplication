const { application, request } = require('express');
const express = require('express');
const router = express.Router();

// Employees Data 

let employees = [
    {
        id: '_abcdef',
        first_name: 'John',
        last_name: 'Wilson',
        gender: 'male',
        email: 'john@wilson.com',
        ip_address: '127.0.0.5'
    },
    {
        id: '_vwxyz',
        first_name: 'Laura',
        last_name: 'Wilson',
        gender: 'female',
        email: 'laura@wilson.com',
        ip_address: '128.0.0.5'
    }
];

// Get ID

let getID = () => {
    return '_' + Math.random().toString(36).substring(2,9);
};



// GET - Employees

router.get('/employees', (request, response) => {
    console.log(`GET Request received at server ...${new Date().toLocaleTimeString()}`);
    response.json(employees);
});

// POST Employees

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

router.put('/employees/:id', (request, response) => {
    let empID = request.params.id;
    let updateEmployee = {
        id: empID,
        first_name: request.body.first_name,
        last_name: request.body.last_name,
        gender: request.body.gender,
        email: request.body.email,
        ip_address: request.body.ip_address
    };
    let existingEmployee = employees.find((employee) => {
        return employee.id === empID;
    });
    employees.splice(employees.indexOf(existingEmployee), 1, updateEmployee);
    console.log(`PUT request received at server...${new Date().toLocaleTimeString}`);
    response.json({ msg: 'PUT request is successful ...!' });
});

// DELETE Request 

router.delete('/employees/:id', (request, response) => {
    let empID = request.params.id;
    employees = employees.filter((employee) => {
        return employee.id !== empID
    });
    console.log(`DELETE Request is successful ...${new Date().toLocaleTimeString()}`);
    response.json({ msg: 'DELETE request is successful ...!' })
});

module.exports = router;


