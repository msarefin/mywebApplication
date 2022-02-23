export class BrainHttp{
    constructor(){

    }

    //The following functions will return a Promice

    // GET Request 

    static get(url){ 
        return new Promise((resolve, reject)=>{
            fetch(url).then((response) =>{
                response.json().then((data)=>{
                    resolve(data);
                }).catch((err)=>{
                    reject.error(err);
                })
            });
        });
    }

    // POST Request 

    static post(url, data){
        return new Promise((resolve, reject)=>{
            fetch(url,{
                method:'POST',
                headers:{
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify(data)
            }).then((response)=>{
                response.json().then((data)=>{
                    resolve(data);
                }).catch((err)=>{
                    reject.error(err);
                })
            }); 
        });
    }

    // PUT Request 

    static put(url, data){
        return new Promise((resolve, reject)=>{
            fetch(url,{
                method:'PUT',
                headers:{
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify(data)
            }).then((response)=>{
                response.json().then((data)=>{
                    resolve(data);
                }).catch((err)=>{
                    reject.error(err);
                })
            }); 
        });
    }

    // DELETE Request 

    static delete(url){
        return new Promise((resolve, reject)=>{
            fetch(url,{
                method:'DELETE',
                headers :{
                    'Content-Type' : 'application/json'
                }
            }).then((response)=>{
                response.json().then((data)=>{
                    resolve(data); 
                });
            }).catch((err)=>{
                reject.error(err);
            }); 
        });
    }

}