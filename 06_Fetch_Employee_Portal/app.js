import { BrainHttp } from "./API/BrainHttp.js";

let serverURL = `http://127.0.0.1:3000/api`
//Content loaded
window.addEventListener('DOMContentLoaded', function(e){
    fetchEmployees();
})

let fetchEmployees = () =>{
    let url = `${serverURL}/employees`;
    BrainHttp.get(url).then((data)=>{
        let employees = data;
        let empRow = ''; 
        for (let employee of employees){
            empRow +=`
                <tr>
                    <td>${employee.id}</td>
                    <td>${employee.first_name}</td>
                    <td>${employee.last_name}</td>
                    <td>${employee.gender}</td>
                    <td>${employee.email}</td>
                    <td>${employee.ip_address}</td>
                    <td>
                        <button class ="btn btn-secondary btn-sm mt-0">update</button>
                        <button class ="btn btn-danger btn-sm mt-0">delete</button>
                    </td>
                </tr>`
        }
        document.querySelector('#table-body').innerHTML = empRow;

    }).catch((err)=>{
        console.error(err);
    });
};

let addEmployeeForm = document.querySelector('#add-employee-form');
addEmployeeForm.addEventListener('submit', function(e){
    e.preventDefault();  //prevent form auto submit
    $('#add-employee-modal').modal('hide'); //close the modal

    let employee = {
        first_name : document.querySelector('#add-first-name').value,
        last_name : document.querySelector('#add-last-name').value,
        gender : document.querySelector('#add-gender').value,
        email : document.querySelector('#add-email').value,
        ip_address : document.querySelector('#add-ip-address').value 
    };
    let url = `${serverURL}/employees`;
    BrainHttp.post(url, employee).then((value)=>{
        console.log(value);
        fetchEmployees();
    }).catch((err)=>{
        console.error(err);
    });
    clearFromFields(); 
});

let clearFromFields = () =>{
    document.querySelector('#add-first-name').value ='';
    document.querySelector('#add-last-name').value = '';
    document.querySelector('#add-gender').value = '';
    document.querySelector('#add-email').value ='';
    document.querySelector('#add-ip-address').value = ''; 
}

//Click on table body
let tableBody = document.querySelector('#table-body');
tableBody.addEventListener('click', function(e){
    let targetElement = e.target; 
    console.log(targetElement);
    //delete Button

    if(targetElement.classList.contains('delete')){}
})