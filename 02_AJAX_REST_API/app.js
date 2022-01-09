import {BrainHttp} from "./API/BrainHttp.js"


let serverURL = `http://127.0.0.1:3000/api/`

// GET Button
let getButton = document.querySelector("#get-btn"); 
getButton.addEventListener('click', function(){
    fetchEmployees();
});

let fetchEmployees = () =>{
    let http = new BrainHttp(); 
    let url = `${serverURL}/employees`;
    http.get(url);
};

// POST Button
let postButtin = document.querySelector("post-btn");

// PUT Button
let putButton = document.querySelector("put-btn"); 

// DELETE Button
let deleteButton = document.querySelector("delete-btn"); 