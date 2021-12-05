// Learning AJAX
// Accessing text data
// Focus on html button
let textButton = document.querySelector('#text-btn');
// Setup event listener on the button 
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
			displayTextData(data);
			// console.log(data);
		}
	};
});

// Display Text Data 

let displayTextData = (data) =>{
	let htmlTemplate = `<h3>${data}</h3>`;
	document.querySelector('#text-card').innerHTML = htmlTemplate; 
};

// Accessing JSON data 
let jsonButton = document.querySelector('#json-btn');
jsonButton.addEventListener('click',function(){
	let xhr = new XMLHttpRequest();
	xhr.open('GET','./data/mobiles.json',true);
	xhr.send();
	xhr.onload = () =>{
		let data = xhr.responseText; 
		let mobile = JSON.parse(data);
		
		displayJSONData(mobile);
		console.log(mobile);
	}
});

// Dispaying JSON data

let displayJSONData = (mobile)=>{
	let htmlTemplate = 
	`<ul class="list-group mt-1">
		<li class="list-group-item">ID: ${mobile.id}</li>
		<li class="list-group-item">BRAND: ${mobile.brand}</li>
		<li class="list-group-item">COLOR: ${mobile.color}</li>
		<li class="list-group-item">PRICE: ${mobile.price}</li>
	</ul>`;
	document.querySelector('#json-card').innerHTML = htmlTemplate;
};


// Accessing API data

let apiButton = document.querySelector('#api-btn');
apiButton.addEventListener('click',function(){
	let xhr = new XMLHttpRequest(); 
	xhr.open('GET','https://jsonplaceholder.typicode.com/users',true);
	xhr.send();
	xhr.onload = ()=>{
		let data = xhr.responseText;
		let users = JSON.parse(data); 
		displayUsers(users)
		console.log(users);
	}
});

// Display users 

let displayUsers = (users)=>{
	let htmlTemplate = ''

	for(let user of users){
		htmlTemplate += 
		`<ul class = "list-group m-1">
			<li class = "list-group-item">ID:${user.id}</li>
			<li class = "list-group-item">Name:${user.name}</li>
			<li class = "list-group-item">Username:${user.username}</li>
			<li class = "list-group-item">Email:${user.email}</li>
			<li class = "list-group-item">Address:
				<dl class = "list-group m-1">
					<dt class = "list-group-item">Street: ${user.address.street}</dt>
					<dt class = "list-group-item">City: ${user.address.city}</dt>
					<dt class = "list-group-item">ZipCode: ${user.address.zipcode}</dt>
				</dl>
			</li>	
		</ul>`
	}
	document.querySelector('#api-card').innerHTML = htmlTemplate; 
};
