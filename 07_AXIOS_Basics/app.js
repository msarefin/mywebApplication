//Text Data
let textbutton = document.querySelector('#text-btn');
textbutton.addEventListener('click',function(){
    fetchTextData();
});

let fetchTextData = ()=>{
    axios.get('./data/message.txt').then((response)=>{
        if(response.status !== 200){
            console.log(`Something went wrong: ${response.status}`);
            retuen; 
        }
        let fileContent = response.data; 
        // console.log(fileContent);
        document.querySelector('#text-card').innerHTML = fileContent; 
    }).catch((err)=>{
        console.error(err);
    });
};

//JSON Data 
let jsonButton = document.querySelector('#json-btn'); 
jsonButton.addEventListener('click', function(){
    fetchJSONData(); 
});

let fetchJSONData = () =>{
    axios.get('./data/mobile.json').then((response)=>{
        if(response.status !==200){
            console.log(`Something went wrong: ${response.status}`);
            return;
        }
        let mobile = response.data; 
        let htmlTemplate = `
            <ul class="list-group">
                <li class="list-group-item">Name: ${mobile.Name}</li>
                <li class="list-group-item">Model: ${mobile.model}</li>
                <li class="list-group-item">Year: ${mobile.country}</li>
                <li class="list-group-item">Country: ${mobile.country}</li>
            </ul>`;
        document.querySelector('#json-card').innerHTML = htmlTemplate; 

    }).catch((err)=>{
        console.error(err);
    }); 
};

//API Data 
let apiButton = document.querySelector('#api-btn'); 
apiButton.addEventListener('click',function(){
    fetchAPIData(); 
});

let fetchAPIData = ()=>{
    axios.get('https://jsonplaceholder.typicode.com/users').then((response)=>{
        if(response.status !== 200){
            console.log(`Something went wrong: ${response.status}`);
            return; 
        }
        let users = response.data; 
        // console.log(users);
        let htmlTemp = ''; 
        for(let user of users){
            htmlTemp +=`
                <ul class = "list-group">
                    <li class ="list-group-item">ID: ${user.id}</li>
                    <li class ="list-group-item">Name: ${user.name}</li>
                    <li class ="list-group-item">Username: ${user.username}</li>
                    <li class ="list-group-item">email: ${user.email}</li>
                    <li class ="list-group-item">Address:
                        <ul>
                            <li class="list-group-item">Street: ${user.address.street}</li>
                            <li class="list-group-item">Suite: ${user.address.suite}</li>
                            <li class="list-group-item">City: ${user.address.city}</li>
                            <li class="list-group-item">Zip Code: ${user.address.code}</li>
                        </ul>    
                    </li>
                </ul>    
            `
        }
        document.querySelector('#api-card').innerHTML=htmlTemp;
    }).catch((err)=>{
        console.error(err);
    });
};