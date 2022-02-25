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

