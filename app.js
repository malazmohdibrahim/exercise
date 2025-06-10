import express from "express";

const app = express();

const PORT = 3000; 


app.use(express.json());


app.get("/",(req,res) => {

    res.json(
        {
          message:"server is runnig"
        }
    )
});

app.listen(PORT,()=>{
    console.log("server is running on ", PORT);
});

export default app;


