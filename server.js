// // var io = require('socket.io').listen(3000);
// var socket = require('./socket.io-client')('http://localhost');
// console.log(socket)
// socket.on('connect', function(e){
// 	console.log("server? ", e)
// });
// socket.on('event', function(data){});
// socket.on('disconnect', function(){});

// var connect = require('connect');
// var serveStatic = require('serve-static');
// console.log(this)
// connect().use(serveStatic(this.location.href)).listen(8080, function() {
//     console.log('Server running on 8080...');

// });
// var fs = require('fs');
// console.log(this)
// var jsonStuff = {
// 	"name":"Kyle",
// 	"age": 23
// };
// fs.writeFile("./_APP/myData.json", JSON.stringify(jsonStuff), function(err) {
//     if(err) {
//         return console.log(err);
//     }

//     console.log("The file was saved!");
// }); 