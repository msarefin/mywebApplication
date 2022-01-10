import {BrainHttp} from "./api/BrainHttp.js"

const serverURL = "http://127.0.0.1:3000/api"
// DOM Content loaded

window.addEventListener('DOMContentLoaded', function(){
    fetchAllEmployees(); 
});

let fetchAllEmployees = ()=>{
    let http = new BrainHttp();
    let url = `${serverURL}/employees`;

    http.get(url,(err, employees)=>{
        if(err) throw err; 
        let employeeRows = '';
        for(let employee of employees){
            employeeRows += `
        <tr>
            <td>${employee.id}</td>
            <td>${employee.first_name}</td>
            <td>${employee.last_name}</td>
            <td>${employee.gender}</td>
            <td>${employee.email}</td>
            <td>${employee.ip_address}</td>
            <td>
                <button class="btn btn-secondary btn-sm mt-0 update">Update</button>
                <button class="btn btn-danger btn-sm mt-0 delete">Delete</button>    
            </td>
        </tr>`
        }
        document.querySelector('#table-body').innerHTML = employeeRows; 
    });
};


// Add Employee form

let addEmployeeForm = document.querySelector('#add-employee-form');
addEmployeeForm.addEventListener('submit', function(e){
    e.preventDefault();//Stop Form auto submit
    $('#add-employee-modal').modal('hide');//This jquery line is to close the form

    let employee = {
        first_name:document.querySelector('#add-first-name').value, 
        last_name:document.querySelector('#add-last-name').value,
        gender:document.querySelector('#add-gender').value,
        email:document.querySelector('#add-email').value,
        ip_address: document.querySelector('#add-ip-address').value
    }

    let url = `${serverURL}/employees`;

    let http = new BrainHttp(); 
    http.post(url, employee, (data)=>{
        console.log(data)
        fetchAllEmployees();
        clearFormFirlds(); 
    });

});

let clearFormFirlds = ()=> {
    document.querySelector('#add-first-name').value = ''; 
    document.querySelector('#add-last-name').value ='';
    document.querySelector('#add-gender').value ='';
    document.querySelector('#add-email').value ='';
    document.querySelector('#add-ip-address').value ='';
}; 


// Click event on the entire table body 

let tableBody = document.querySelector('#table-body'); 
tableBody.addEventListener('click',function(e){
    let targetElement = e.target; 
    // Click on Delete 
    if(targetElement.classList.contains('delete')){
        let selectedID = targetElement.parentElement.parentElement.firstElementChild.innerHTML; 
        let url = `${serverURL}/employees/${selectedID}`;
        let http = new BrainHttp();
        http.delete(url,(data)=>{
            console.log(data);
            fetchAllEmployees(); 
        })
    }
    // Click on update 
    if(targetElement.classList.contains('update')){
        let selectedID = targetElement.parentElement.parentElement.firstElementChild.innerHTML; 
        let url = `${serverURL}/employees`;
        let http = new BrainHttp(); 
        http.get(url, (err, employees)=>{
            if(err) throw err;
            let selectedEmployee = employees.find((employee)=>{
                return employee.id === selectedID.trim();
            });
            console.log(selectedEmployee);
            populateUpdateModal(selectedEmployee);
        });
         
    }
});

let populateUpdateModal = (selectedEmployee)=>{
    document.querySelector('#update-first-name').value = selectedEmployee.first_name; 
    document.querySelector('#update-last-name').value = selectedEmployee.last_name; 
    document.querySelector('#update-gender').value = selectedEmployee.gender; 
    document.querySelector('#update-email').value = selectedEmployee.email;
    document.querySelector('#update-ip-address').value = selectedEmployee.ip_address;  
    $('#update-employee-modal').modal('show');
};

// Update form submission

let updateEmployeeForm = document.querySelector('#update-employee-form');
updateEmployeeForm.addEventListener('submit',function(e){
    let empID = document.querySelector('#update-emp-id').value.trim();
    e.preventDefault();//Stop Form auto submit
    $('#update-employee-modal').modal('hide');//This jquery line is to close the form
    
    let employee = {
        first_name:document.querySelector('#update-first-name').value, 
        last_name:document.querySelector('#update-last-name').value,
        gender:document.querySelector('#update-gender').value,
        email:document.querySelector('#update-email').value,
        ip_address: document.querySelector('#update-ip-address').value
    }

    let url = `${serverURL}/employees/${empID}`;

    let http = new BrainHttp(); 
    http.put(url, employee, (data)=>{
        console.log(data)
        fetchAllEmployees();
    });
});