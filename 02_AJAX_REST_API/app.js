import {BrainHttp} from "./API/BrainHttp.js"


let serverURL = `http://127.0.0.1:3000/api`

// GET Button
let getButton = document.querySelector('#get-btn'); 
getButton.addEventListener('click', function(){
    fetchEmployees();
});

let fetchEmployees = () =>{
    let http = new BrainHttp(); 
    let url = `${serverURL}/employees`;
    http.get(url, (err,employees)=>{
        if(err) throw err; 
        let tablerows = '';
        for(let employee of employees){
            tablerows +=
            `<tr>
                <td>${employee.id}</td>
                <td>${employee.first_name}</td>
                <td>${employee.last_name}</td>
                <td>${employee.gender}</td>
                <td>${employee.email}</td>
                <td>${employee.ip_address}</td>
                
            </tr>`
        }
        document.querySelector('#table-body').innerHTML = tablerows
        
    });
    

};

// POST Button
let postButton = document.querySelector('#post-btn');
postButton.addEventListener('click',function(){
    let url = `${serverURL}/employees`;
    let employee = {
        first_name: 'Rajan',
        last_name: 'Jain',
        gender: 'male',
        email: 'rajan@jain.com',
        ip_address:'198.125.25.22'
    }; 
    let http = new BrainHttp(); 
    http.post(url, employee, (data)=>{
        alert(JSON.stringify(data));
        fetchEmployees();
    });

});

// PUT Button
let putButton = document.querySelector('#put-btn'); 
putButton.addEventListener('click',function(){
    let empID = '_abcdef'
    let url = `${serverURL}/employees/${empID}`
    let employee = {
        id : empID, 
        first_name: 'John',
        last_name : 'Wilson',
        gender: 'Male', 
        email: 'john.wilson@gmail.com', 
        ip_address:'192.168.18.21'
    };
    
    let http = new BrainHttp(); 
    http.put(url, employee, (data)=>{
        alert(JSON.stringify(data));
        fetchEmployees();
    });

});
// DELETE Button
let deleteButton = document.querySelector('#delete-btn'); 
deleteButton.addEventListener('click', function(){
    let empID = '_vwxyz';
    let url = `${serverURL}/employees/${empID}`;
    let http = new BrainHttp(); 
    http.delete(url, (data)=>{
        alert(JSON.stringify(data));
        fetchEmployees();
    })
})