console.log('AJAX Basics!');

// Text Button

let textButton = document.querySelector('#text-btn');
textButton.addEventListener('click',function(){
	// Create an AJAX request
	let xhr = new XMLHttpRequest();

	// Prepare the request
	xhr.open('GET','./data/message.txt',true);
	// Send the request 
	xhr.send();

	xhr.onload = () => {
		// Check the server response status 
		if(xhr.status ===200){
			// To catch the data response 
			let data = xhr.responseText;
			dispayTextData(data);
			
		}
	};
});


let dispayTextData = (data) =>{
    let htmlTemplate = `<p>${data}</p>`;
    document.querySelector('#text-card').innerHTML = htmlTemplate; 
};

// JSON Button 

let jsonButton = document.querySelector('#json-btn'); 
jsonButton.addEventListener('click',function(){
    let xhr = new XMLHttpRequest(); 
    xhr.open('GET','./data/mobile.json',true);
    xhr.send(); 
    xhr.onload = () =>{
        if(xhr.status===200){
            let data = xhr.responseText; 
            let mobile = JSON.parse(data);
            displayJsonData(mobile);
            // console.log(mobile);
        }
    }; 

})

let displayJsonData = (mobile) =>{
    let htmlTemplate = ''; 
    htmlTemplate = 
    `<ul class="list-group">
        <li class="list-group-item">Manufacturer : ${mobile.name}</li>
        <li class="list-group-item">Model No. : ${mobile.model}</li>
        <li class="list-group-item">Release year : ${mobile.Year}</li>
        <li class="list-group-item">Made in  : ${mobile.Country}</li>
    </ul>`;
    document.querySelector('#json-card').innerHTML = htmlTemplate;
};

// API Button 

let apiButton = document.querySelector('#api-btn');
apiButton.addEventListener('click', function(){
    let xhr = new XMLHttpRequest(); 
    let api = 'https://jsonplaceholder.typicode.com/users';    
    xhr.open('GET',api,true);
    xhr.send();
    xhr.onload =() =>{
        if(xhr.status===200){
            let data  = xhr.responseText; 
            let users = JSON.parse(data);
            dispalyApiData(users);
            console.log(users);
        }
    };
});

let dispalyApiData = (users) =>{
    let htmlTemplate = '';
    for(let user of users){
        htmlTemplate+=
        `<ul class ="list-group">
            <li class = "list-group-item">ID : ${user.id}</li>
            <li class = "list-group-item">name : ${user.name}</li>
            <li class = "list-group-item">username : ${user.username}</li>
            <li class = "list-group-item">email : ${user.email}</li>
            <li class = "list-group-item">address : 
                <ul>
                    <li class = "list-group-item">Street: ${user.address.street}</li>
                    <li class = "list-group-item">Suite: ${user.address.suite}</li>
                    <li class = "list-group-item">City: ${user.address.city}</li>
                    <li class = "list-group-item">Zip Code: ${user.address.zipcode}</li>
                </ul>
            </li>
        </ul><br>`;
    }
   
    document.querySelector('#api-card').innerHTML = htmlTemplate;
};