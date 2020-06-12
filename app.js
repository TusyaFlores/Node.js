const http = require('http');

const fs =reqire(fs); //file

const hostname ='127.0.0.1';

const port =3000;

fs.readFile('index.html', (err, html)=>{ // call back arrow function
   if(err){  // check for errors
   	throw err;

   }
   const server =http.createServer((req, res)=>{
   res.statusCode =200;
   res.setHeader('Content-type', 'text/plain');
   res.write(html)
   res.end();
});
server.listen(port, hostname, () =>{
	console.log('Server started on port' + port);
});
});
