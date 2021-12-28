import {BrainHTTP} from "./api/BrainHTTP.js"

window.addEventListener('DOMContentLoaded',function(){
    console.log('DOM fully loaded and parsed');
    fetchAllEmployees();
});

let fetchAllEmployees = () =>{
    let http = new BrainHTTP();
    
};