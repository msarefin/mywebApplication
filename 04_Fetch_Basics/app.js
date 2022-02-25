// Text Button

let textButton = document.querySelector('#text-btn');
 textButton.addEventListener('click',function(){
     fetchTextData(); 
 });
let fetchTextData = ()=>{
    fetch('./Data/message.txt').then((response)=>{
        if(response.status !==200){
            console.log(`Something went worng :${response.status}`);
            return; 
        }
        response.text().then((data)=>{
            document.querySelector('#text-card').innerHTML=data; 
            // console.log(data);
        }); 
    }).catch((err)=>{
        console.error(err);
    });
}; 

// JSON Button

let jsonButton = document.querySelector('#json-btn');
jsonButton.addEventListener('click', function(){
    fetchJsonData(); 
});  

let fetchJsonData = ()=>{
    fetch('./Data/mobile.json').then((response)=>{
        if(response.status !==200){
            console.log(`Something went worng: ${response.status}`);
            return; 
        }
        response.json().then((data)=>{
            let mobile = data; 
            let htmltemp =`
                <ul class = "list-group mt-1">
                    <li class = "list-group-item">Name: ${mobile.name}</li>
                    <li class = "list-group-item">Model:${mobile.model}</li>
                    <li class = "list-group-item">Year:${mobile.Year}</li>
                    <li class = "list-group-item">Country:${mobile.Country}</li>    
                </ul>`;
            document.querySelector('#json-card').innerHTML = htmltemp;     
        });
    });
};

// API Button 

let apiButton = document.querySelector('#api-btn');
apiButton.addEventListener('click', function(){
    fetchAPIData();
}); 

let fetchAPIData = ()=>{
    fetch('https://jsonplaceholder.typicode.com/users').then((response)=>{
        if(response.status!==200){
            console.log(`Something went worng: ${response.status}`);
            return;
        }
        response.json().then((data)=>{
            let users = data; 

            let apiHtmlTemp = ''; 

            for(let user of users){
                apiHtmlTemp +=`
                    <ul class = "list-group mt-1">
                        <li class = "list-group-item">ID: ${user.id}</li>
                        <li class = "list-group-item">Name: ${user.name}</li>
                        <li class = "list-group-item">Email: ${user.email}</li>
                        <li class = "list-group-item">Address: <ul class="list-group mt-1">
                            <li class = "list-group-item">${user.address.street}</li>
                            <li class = "list-group-item">${user.address.city}</li>
                            <li class = "list-group-item">Zip Code: ${user.address.zipcode}</li>
                        </li></ul>
                        <li class = "list-group-item"></li>
                    </ul>
                `;
            }
           
            document.querySelector('#api-card').innerHTML = apiHtmlTemp; 
            // console.log(users); 
        });
    }).catch((err)=>{
        console.error(err);
    });
};