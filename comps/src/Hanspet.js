

export class HttpFactory{

    method = "GET";
    mode = "cors";
    credentials = "same-origin";
    headers = {"Content-Type": "application/json; charset=utf-8"};
    url = "";
    cache = "only-if-cached";
    callback = null;
    type = "text";
    body = null;
    /**
     * sends an object and receives JSON as response.
     * Object param must follow { key : "value"} structure and 
     * Callback param must be a method. callback also takes error as an argument.
     * 
     * @param {String} url 
     * @param {Object} searchData 
     * @param {Function} callback 
     */
    static getJSON(url, searchData, callback = null){
        
            let http = new HttpFactory();

            if(callback === null) throw new Error('HttpFactory: callback is undefined.');

            if(typeof searchData === "object"){
                for (const key in searchData) {
                    var get = `?${key}=${searchData[key]}`;
                    break;
                }
                
                http.url = url+get;
                http.callback = callback;
                http.type = "json";

                http.fetchData(http.requestGet());

            }else{
                throw new Error('HttpFactory: getJSON parameter 2 not an object. consider { key : "value" }');
            }
        
        
    }

    static getText(url, searchData, callback = null){
        
        let http = new HttpFactory();

        if(callback === null) throw new Error('HttpFactory: callback is undefined.');

        if(typeof searchData === "object"){
            for (const key in searchData) {
                var get = `?${key}=${searchData[key]}`;
                break;
            }
            
            http.url = url+get;
            http.callback = callback;
            http.type = "text";

            http.fetchData(http.requestGet());

        }else{
            throw new Error('HttpFactory: getJSON parameter 2 not an object. consider { key : "value" }');
        }
    
    
}

    static getBlob(url, callback = null){
        
        let http = new HttpFactory();

        if(callback === null) throw new Error('HttpFactory: callback is undefined.');
            
            http.url = url;
            http.callback = callback;
            this.headers = {"Content-Type": "image/*"};
            http.type = "blob";
            http.fetchData(http.requestGet());   
    
    }

    static getArrayBuffer(url, callback = null){
        
        let http = new HttpFactory();

        if(callback === null) throw new Error('HttpFactory: callback is undefined.');
            
            http.url = url;
            http.callback = callback;
            this.headers = {"Content-Type": "image/*"};
            http.type = "arraybuffer";
            http.fetchData(http.requestGet());   
    
    }

    requestGet = ()=>{

        return new Request(this.url, {
            method: this.method, 
            headers: this.headers,
            mode: this.cors,
            credentials: this.credentials
            
        });
    }

    /**
     * 
     * @param {String} url 
     * @param {Object} searchData 
     * @param {Function} callback 
     */
    static postObject(url, searchData, callback = null, response = "json"){
        
        let http = new HttpFactory();

        if(callback === null) throw new Error('HttpFactory: callback is undefined.');

        if(typeof searchData === "object"){
            try {
                http.body = JSON.stringify(searchData);
                http.url = url;
                http.callback = callback;
                http.headers = {"Content-Type": "application/json"};
                http.type = response;
                http.setMethod("POST");
    
                http.fetchData(http.requestPost());
            }catch(error){
                throw new Error(error);
            }

        }else{
            throw new Error('HttpFactory: getJSON parameter 2 not an object. consider { key : "value" }');
        }
    
    
}

    static postJSON(url, json, callback = null, response = "json"){
            
        let http = new HttpFactory();

        if(callback === null) throw new Error('HttpFactory: callback is undefined.');

        if(typeof json === "string"){
            try {
                JSON.parse(json);
                http.body = json;
                http.url = url;
                http.callback = callback;
                http.headers = {"Content-Type": "application/json"};
                http.type = response;
                http.setMethod("POST");

                http.fetchData(http.requestPost());
            } catch (error) {
                throw new Error(error);
            }

        }else{
            throw new Error('HttpFactory: getJSON parameter 2 not a string. consider { "key" : "value" }');
        }


    }

    /**
     * It accepts HTMLFormElement ID as searchData and returns json.
     * Response can either be json or text. It assumes json as default if not specified.
     * @param {String} url 
     * @param {String} searchData 
     * @param {Function} callback 
     * @param {String} response 
     */
    static postForm(url, FormElement, callback = null, response = "json"){
            
        let http = new HttpFactory();

        if(callback === null) throw new Error('HttpFactory: callback is undefined.');

        if(typeof FormElement === "object"){
            try {
                
                http.setMethod("POST");
                http.body = new FormData(FormElement);
                http.url = url;
                http.callback = callback;
                http.type = response;
                http.fetchData(http.requestPostForm());
            } catch (error) {
                throw new Error(error);
            }

        }else{
            throw new Error('HttpFactory: getJSON parameter 2 not a object. parse form target.');
        }


    }

    requestPost =()=>{
        let request = new Request(this.url, {
            method: this.method,
            body: this.body,
            headers: this.headers,
            mode: this.cors,
            credentials: this.credentials

        });
        return request;
    }

    requestPostForm =()=>{
        return new Request(this.url, {
            method: this.method,
            body: this.body,
            mode: this.cors,
            credentials: this.credentials,

        });
    }

     fetchData = async (request) =>{
        await fetch(request)
        .then(response => {
            if(response.ok){
              console.log(response.headers.get("Content-Type"));
                return this.getResponseByType(response);
            }
            throw new Error(response.statusText);
        }).then(data => {
            this.callback(data);
        }).catch(err =>{
            this.callback(err);
        })
    }

    getResponseByType(response){
        if(this.type === "json"){
            return response.json();
        }
        else if(this.type === "text"){
            return response.text();
        }
        else if(this.type === "blob"){
            return response.blob();
        }
        else if(this.type === "arraybuffer"){
            return response.arrayBuffer();
        }
    }

    setType(type){
        this.type = type;
    }

    /**
     * method: String = POST|GET|PUT|DELETE
     */
    setMethod = (method) => {
        this.method = method.toUpperCase();
    }

    setCORS = (cors) => {
        this.cors = cors;
    }

    setBody = (body)=>{
        this.body = body;
    }
}

export const HP = {
    lorem: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor 
    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
     ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
     in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
      non proident, sunt in culpa qui officia deserunt mollit anim id est laborum`,

    html: {
        attr: function(name, value){
            return "<span ></span>";
        }
    }
    
}
