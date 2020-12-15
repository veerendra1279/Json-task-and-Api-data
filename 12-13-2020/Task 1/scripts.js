// 1.Create a request variable from XMLHttpRequest
var req=new XMLHttpRequest();

// 2.Create a new connection 1.method 2.url 3.boolean->true means rest code will execute if we rae facing connection issue
req.open('GET','https://restcountries.eu/rest/v2/all',true);

// 3.send the request
req.send();

// 4.load the response
req.onload=function(){
    var data = JSON.parse(this.response);
    for(let i in data){
        console.log(data[i]['name']);
        console.log(data[i].name);
    }
    // console.log(data);
}