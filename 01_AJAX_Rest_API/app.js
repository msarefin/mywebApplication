console.log("01_ajax rest api ! - Reading from self made nodeJS server")

import {BrainHTTP} from './api/BrainHTTP.js'
const serverURL = `http://127.0.0.1:3000/api`;

// GET  Button 

let getButton = document.querySelector('#get-btn');
getButton.addEventListener('click', function(){
    fetchEmployees();
});

let fetchEmployees = () =>{
    //AJAX calls 
    let http = new BrainHTTP();
    let url = `${serverURL}/employees`;
    http.get(url, (err,employees)=>{
        if(err) throw err; 
        let tableRows = '';
        for(let employee of employees){
            tableRows += 
            `<tr>
                <td>${employee.id}</td>
                <td>${employee.first_name}</td>
                <td>${employee.last_name}</td>
                <td>${employee.email}</td>
                <td>${employee.gender}</td>
                <td>${employee.ip_address}</td>
            </tr>`
        }
        document.querySelector('#table-body').innerHTML = tableRows;
    });
    
};

// POST Button

let postButton = document.querySelector('#post-btn');
postButton.addEventListener('click', function(){
    let url = `${serverURL}/employees`;
    let employee = {
        first_name : 'Samantha',
        last_name : 'Hendrics',
        gender : 'female',
        email : 'samantha@hendrics.com',
        ip_address : '192.186.0.44'
    }
    
    let http= new BrainHTTP();
    http.post(url, employee, (data) =>{
        alert(JSON.stringify(data));
        fetchEmployees();
    } );
});

// PUT Button

let putButton = document.querySelector('#put-btn');
putButton.addEventListener('click',function(){
    let empID= '_abcdef';
    let employee = {
        id:empID, 
        first_name:'Alex',
        last_name:'Smith',
        gender:'male',
        email:'alex_smith@smith-industries.com',
        ip_address:'199.211.31.15'
    };
    let url = `${serverURL}/employees/${empID}`;
    let http = new BrainHTTP();
    http.put(url, employee, (data) => {
        alert(JSON.stringify(data));
        fetchEmployees();
    });
})

// DELETE Button 

let deleteButton = document.querySelector('#delete-btn');
deleteButton.addEventListener('click',function(){
    let empID = '_pqrstw';
    let url = `${serverURL}/employees/${empID}`
    let http = new BrainHTTP(); 
    http.delete(url, (data) =>{
        alert(JSON.stringify(data));
        fetchEmployees();
    });
});