export class BrainHttp{
    constructor (){
        this.http = new XMLHttpRequest();
    }

    // GET Request - Read 

    get = (url, callback) =>{
        this.http.open('GET',url, true); 
        this.http.send(); 
        this.http.onload = () =>{
            if(this.http.status ===200){
                let data = this.http.responseText; 
                let employees = JSON.parse(data);
                
                callback(null,employees);
            }else{
                callback(`Error: ${this.http.status}`);
            }
        };
    }


    // POST Request - Insert

    post = (url, employee, callback) =>{
        this.http.open('POST',url, true);
        this.http.setRequestHeader('Content-type', 'application/json'); 
        this.http.send(JSON.stringify(employee)); 
        this.http.onload =() => {
            let data = this.http.responseText; 
            let employees = JSON.parse(data);
            callback(employees);
        } 
    };

    // PUT Request - Update
    put = (url, employee, callback) =>{
        this.http.open('PUT', url, true);
        this.http.setRequestHeader('Content-type','application/json');
        this.http.send(JSON.stringify(employee)); 
        this.http.onload =()=>{
            let data = this.http.responseText;
            let employees = JSON.parse(data);
            callback(employees); 
        };
    };


    // DELETE Request - Delete
    delete  =(url, callback)=>{
        this.http.open('DELETE',url, true);
        this.http.setRequestHeader('Content-type','application/json');
        this.http.send();
        this.http.onload = ()=>{
            let data = this.http.responseText; 
            let employees = JSON.parse(data);
            callback(employees);
        };
    };

}