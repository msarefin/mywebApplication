export class BrainHttp{
    constructor (){
        this.http = new XMLHttpRequest();
    }

    // GET Request

    get = (url) =>{
        this.http.open('GET',url, true); 
        this.http.send(); 
        this.http.onload = () =>{
            if(this.http.status ===200){
                let data = this.http.responseText; 
                console.log(data);
            }
        };
    }


    // PUSH Reuest

    // POST Request

    // DELETE Request 
}