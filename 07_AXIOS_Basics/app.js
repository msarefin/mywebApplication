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
        console.log(fileContent);
        document.querySelector('#text-card').innerHTML = fileContent; 
    }).catch((err)=>{
        console.error(err);
    });
};