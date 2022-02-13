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
        console.log(employees);
    }).catch((err)=>{
        console.error(err);
    });
};