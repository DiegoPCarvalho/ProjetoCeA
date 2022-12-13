const path = require('path');
const express = require('express');
const app = express();
const app2 = express();
const port = 5000;
const port2 = 3000;
 
app.use(express.static(path.join(__dirname, 'build')));
// app.use(express.static("public"));



app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, ".", "build", "index.html"));
});


app2.use((req, res, next)=>{
  res.sendFile(path.join(__dirname, ".", "build", "Login.html"));
})



app.listen(port, (err) => {
  try{
      console.log('Servidor Online ' + port);
  }catch(error) {
    console.log("Erro: " + error)
  }
});



app2.listen(port2, (err) => {
  try{
      console.log('Servidor Online ' + port2);
  }catch(error) {
    console.log("Erro: " + error)
  }
});