# XHRest

A simple and clean REST js client built with XMLHttpRequest.
#### Examples:

```js
 client = new XHRest('http://example.com/api');

 // GET - (http://example.com/api/2)
 client.get('2');
 
 // or... (http://example.com/api?name=jhon)
 client.get({name: 'jhon'});
 
 // POST/PUT/PATCH/DELETE - request body with data
 client.post({
    name: 'jhon',
    age: 30
 });
 client.put({
    name: 'jhon',
    age: 30
 });
 client.patch({
    id: '1',
    age: 30
 });
 client.delete({
    name: 'jhon'
 });

 //Or (DELETE - http://example.com/api/2)
client.delete("2");
```

### XHRest Methods:
 - post
 - get
 - put
 - patch
 - delete

##### post:
```js
x.post(Object body [, String customUrl [, Object customHeaders]] );
```
	
##### get:
```js
x.get([Object/String url [, Object customHeaders]]);
```

##### put:
```js
x.put(Object body [, String customUrl [, Object customHeaders]] );
```

##### patch:
```js
x.patch(Object body [, String customUrl [, Object customHeaders]] );
```
	
##### delete:
```js
x.delete(Object/String body [, String customUrl [, Object customHeaders]] );
```


### XHRest Constructor:
```js
var x = new XHRest (String url [, Object settings]);
```

### XHRest Settings:
	
 - endpoint
 - token (Bearer)
 - async
 - callback
    
####    example with JQuery Library
```js
var api_url = "http://localhost/api"
var product = new XHRest(api_url, {endpoint: "product"});

$(function() {
	$(document).on('click', '#button_create', function () {
		var p_create = product.create({
			name: 'Test product',
			sku: 112233
			price: 123.33
		});
		
		if (p_create.status === 201){
			alert ('Product created!');
			$("#display_product").html(
			product.get(p_create.json.id.toString())
			);
		}
	});
});
```

### XHRest callbacks:

```js
var x = new XHRest("http://localhost/api/", {
	endpoint: '/Client', 
	async: true,
	callback: 'myFunc'
	});

function myFunc(readyState){
	if(readyState == 4){
		console.log(n.text);
		alert ('Done!');
	}
}

var n = x.get(); //"myFunc" invoked with the "readyState" param from XMLHttpRequest API.
```