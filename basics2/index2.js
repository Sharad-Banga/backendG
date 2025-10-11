import express from "express"; // esmodule
const app = express();

function subscibe(req,res,next){
  let sub = true;
  if(sub){
    next();
  }else{
    console.log("paise dedo");
    
  }
}

app.get("/wednesday" ,subscibe , function(req,res){

  res.send({
    "message" : "this is your movie"
  });

});

app.listen(3000);