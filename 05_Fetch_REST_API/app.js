import { BrainHttp } from "./API/BrainHttp.js";

// server url
let serverURL = `http://127.0.0.1:3000/api`;

// Get Button
let getButton = document.querySelector('#get-btn');
getButton.addEventListener('click', function(){
    fetchEmpoyees();
});

// Post Button 
let postButton = document.querySelector('#post-btn'); 
postButton.addEventListener('click',function(){
    let url = `${serverURL}/employees`;
    let newEmployee = {
        first_name: 'Ali',
        last_name: 'Ahmed',
        gender: 'Male',
        email: 'ali@ahmed.com',
        ip_address: '220.42.33.12'
    };
    BrainHttp.post(url,newEmployee).then((data)=>{
        console.log(data);
        fetchEmpoyees();
    }).catch((err)=>{
        console.error(err);
    });
});

// Put Button 
let putButton = document.querySelector('#put-btn');
putButton.addEventListener('click',function(){
    let empID = '_abcdef'; 
    let url = `${serverURL}/employees/${empID}`
    let updateEmployee = {
        first_name : 'John', 
        last_name : 'Wilson', 
        email : 'john_wilson@gmail.com', 
        gender : 'male',
        ip_address : '32.14.32.19'
    }

    BrainHttp.put(url,updateEmployee).then((data)=>{
        console.log(data); 
        fetchEmpoyees(); 
    }).catch((err)=>{
        console.error(err);
    }); 

});

// Delete Button
let deleteButton = document.querySelector('#delete-btn');
deleteButton.addEventListener('click',function(){
    let empID = '_vwxyz';
    let url = `${serverURL}/employees/${empID}`; 
    BrainHttp.delete(url).then((data)=>{
        console.log(data); 
        fetchEmpoyees();
    }).catch((err)=>{
        console.error(err); 
    }); 
});

// Fetch Employees

let fetchEmpoyees = ()=>{
    let url = `${serverURL}/employees`;
    BrainHttp.get(url).then((data)=>{
        let employees = data;
        let employeeRows = ''
        for(let employee of employees){
            employeeRows += `
            <tr>
                <td>${employee.id}</td>
                <td>${employee.first_name}</td>
                <td>${employee.last_name}</td>
                <td>${employee.gender}</td>
                <td>${employee.email}</td>
                <td>${employee.ip_address}</td>
            </tr>`
        }
        document.querySelector('#table-body').innerHTML = employeeRows; 
    }).catch((err)=>{
        console.error(err);
    }); 
};