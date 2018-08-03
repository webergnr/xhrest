var XHRest = (()=>{
    "use strict";

    function XHRest (url, settings = {}) {

        this.url = url;
        this.endpoint = (settings.hasOwnProperty('endpoint')) ? settings.endpoint : "" ;
        this.token = (settings.hasOwnProperty('token')) ? settings.token : false ;
        this.async = (settings.hasOwnProperty('async')) ? settings.async : false ;        
        this.callback = (settings.hasOwnProperty('callback')) ? settings.callback : false ;        
    };

    XHRest.prototype.post = function (request, customUrl = "", customHeaders = {}) {

        var defaultPostHeaders = {
            "Content-type": "application/x-www-form-urlencoded"
        }

        if(this.token) {
            defaultPostHeaders['Authorization'] = "Bearer " + this.token;
        }

        var fd = "";

        for (let key in request) {
            if (fd != "") {
                fd += "&";
            }
            fd += key + "=" + encodeURIComponent(request[key]);
        }

        var xhr = new XMLHttpRequest();
        xhr.open('POST', this.url + this.endpoint + customUrl, this.async);

        //Heders overwrite (custom headers)
        for (let customHeader in customHeaders){
            if (customHeader in defaultPostHeaders){
                defaultPostHeaders[customHeader] = customHeaders[customHeader];
            }
        }

        //XHR Setting headers
        for (let header in defaultPostHeaders){
            xhr.setRequestHeader(header, defaultPostHeaders[header]);
        }

        var response = {};
        var callback = this.callback;
        
        xhr.onreadystatechange = function() {

            if(callback){
                window[callback](xhr.readyState);
            }

            if(xhr.readyState === XMLHttpRequest.DONE) {
                response.text = xhr.responseText;
                response.status = xhr.status;
                try {
                    response.json = JSON.parse(xhr.responseText);
                } catch (e) {
                    response.json = false;
                }
            }
        }

        xhr.send(fd);

        return response;
    };

    XHRest.prototype.get = function (request = false, customHeaders = {}) {

        var defaultPostHeaders = {
            "Content-type": "application/x-www-form-urlencoded"
        }

        if(this.token) {
            defaultPostHeaders['Authorization'] = "Bearer " + this.token;
        }

        var rqUrl = "";

        if (typeof(request) === 'object') {
            for (let key in request) {
                if (rqUrl != "") {
                    rqUrl += "&";
                }
                rqUrl += key + "=" + encodeURIComponent(request[key]);
            }
            rqUrl = "?" + rqUrl;
        } else if(typeof(request) === 'string'){
            rqUrl += "/" + encodeURIComponent(request);
        }
        

        var xhr = new XMLHttpRequest();
        xhr.open('GET', this.url + this.endpoint + rqUrl, this.async);

        //Heders overwrite (custom headers)
        for (let customHeader in customHeaders){
            if (customHeader in defaultPostHeaders){
                defaultPostHeaders[customHeader] = customHeaders[customHeader];
            }
        }

        //XHR Setting headers
        for (let header in defaultPostHeaders){
            xhr.setRequestHeader(header, defaultPostHeaders[header]);
        }

        var response = {};
        var callback = this.callback;
        
        xhr.onreadystatechange = function() {

            if(callback){
                window[callback](xhr.readyState);
            }

            if(xhr.readyState === XMLHttpRequest.DONE) {

                response.text = xhr.responseText;
                response.status = xhr.status;
                
                try {
                    response.json = JSON.parse(xhr.responseText);
                } catch (e) {
                    response.json = false;
                }

            }
        }

        xhr.send();

        return response;
    };

    XHRest.prototype.put = function (request, customUrl = "", customHeaders = {}) {

        var defaultPostHeaders = {
            "Content-type": "application/x-www-form-urlencoded"
        }

        if(this.token) {
            defaultPostHeaders['Authorization'] = "Bearer " + this.token;
        }

        var fd = "";

        for (let key in request) {
            if (fd != "") {
                fd += "&";
            }
            fd += key + "=" + encodeURIComponent(request[key]);
        }

        var xhr = new XMLHttpRequest();
        xhr.open('PUT', this.url + this.endpoint + customUrl, this.async);

        //Heders overwrite (custom headers)
        for (let customHeader in customHeaders){
            if (customHeader in defaultPostHeaders){
                defaultPostHeaders[customHeader] = customHeaders[customHeader];
            }
        }

        //XHR Setting headers
        for (let header in defaultPostHeaders){
            xhr.setRequestHeader(header, defaultPostHeaders[header]);
        }

        var response = {};
        var callback = this.callback;
        
        xhr.onreadystatechange = function() {

            if(callback){
                window[callback](xhr.readyState);
            }

            if(xhr.readyState === XMLHttpRequest.DONE) {

                response.text = xhr.responseText;
                response.status = xhr.status;
                
                try {
                    response.json = JSON.parse(xhr.responseText);
                } catch (e) {
                    response.json = false;
                }

            }
        }

        xhr.send(fd);

        return response;
    };

    XHRest.prototype.patch = function (request, customUrl = "", customHeaders = {}) {

        var defaultPostHeaders = {
            "Content-type": "application/x-www-form-urlencoded"
        }

        if(this.token) {
            defaultPostHeaders['Authorization'] = "Bearer " + this.token;
        }

        var fd = "";

        for (let key in request) {
            if (fd != "") {
                fd += "&";
            }
            fd += key + "=" + encodeURIComponent(request[key]);
        }

        var xhr = new XMLHttpRequest();
        xhr.open('PATCH', this.url + this.endpoint + customUrl, this.async);

        //Heders overwrite (custom headers)
        for (let customHeader in customHeaders){
            if (customHeader in defaultPostHeaders){
                defaultPostHeaders[customHeader] = customHeaders[customHeader];
            }
        }

        //XHR Setting headers
        for (let header in defaultPostHeaders){
            xhr.setRequestHeader(header, defaultPostHeaders[header]);
        }

        var response = {};
        var callback = this.callback;
        
        xhr.onreadystatechange = function() {

            if(callback){
                window[callback](xhr.readyState);
            }
            
            if(xhr.readyState === XMLHttpRequest.DONE) {

                response.text = xhr.responseText;
                response.status = xhr.status;
                
                try {
                    response.json = JSON.parse(xhr.responseText);
                } catch (e) {
                    response.json = false;
                }

            }
        }

        xhr.send(fd);

        return response;
    };

    XHRest.prototype.delete = function (request, customUrl = "", customHeaders = {}) {

        var defaultPostHeaders = {
            "Content-type": "application/x-www-form-urlencoded"
        }

        if(this.token) {
            defaultPostHeaders['Authorization'] = "Bearer " + this.token;
        }

        var rqUrl = "";

        if (typeof(request) === 'object') {
            for (let key in request) {
                if (rqUrl != "") {
                    rqUrl += "&";
                }
                rqUrl += key + "=" + encodeURIComponent(request[key]);
            }
        } else if(typeof(request) === 'string'){
            rqUrl += "/" + encodeURIComponent(request);
        }

        var xhr = new XMLHttpRequest();

        if (typeof(request) === "object") {
            xhr.open('DELETE', this.url + this.endpoint + customUrl, this.async);
        } else{
            xhr.open('DELETE', this.url + this.endpoint + customUrl + rqUrl, this.async);
        }

        //Heders overwrite (custom headers)
        for (let customHeader in customHeaders){
            if (customHeader in defaultPostHeaders){
                defaultPostHeaders[customHeader] = customHeaders[customHeader];
            }
        }

        //XHR Setting headers
        for (let header in defaultPostHeaders){
            xhr.setRequestHeader(header, defaultPostHeaders[header]);
        }

        var response = {};
        var callback = this.callback;
        
        xhr.onreadystatechange = function() {

            if(callback){
                window[callback](xhr.readyState);
            }

            if(xhr.readyState === XMLHttpRequest.DONE) {

                response.text = xhr.responseText;
                response.status = xhr.status;
                
                try {
                    response.json = JSON.parse(xhr.responseText);
                } catch (e) {
                    response.json = false;
                }

            }
        }

        if (typeof(request) === "object") {
            xhr.send(rqUrl);
        }else{
            xhr.send();
        }

        return response;
    };

    return XHRest;

})();