const express = require("express"); //http server
const cors = require("cors"); //can call server with cors
const axios=require("axios");

const app = express();
app.use(express.json()); //creates http server
app.use(cors({ origin: true })); //can call server from anywhere


app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
  try{
        const r=await axios.put(
            'https://api.chatengine.io/users/',
            { username: username, secret: username, first_name: username },
            { headers: {"private-key": "d491302c-24f1-4f0d-9eda-82ba5536fe36" }}
        )
        return res.status(r.status).json(r.data);
  }catch(e){
    return res.status(e.response.status).json(e.response.data);
  }
});

app.listen(3001);