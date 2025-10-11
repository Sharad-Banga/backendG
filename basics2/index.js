import express from "express"; // esmodule
const app = express();

app.get("/showTodo" , function(req,res){

  const n = req.query.n;

  

  res.send({
    "message" : "this is your todos",
    "number ??" : `${n}`
  });

});

app.listen(3000);