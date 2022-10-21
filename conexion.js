const mongoose = require("mongoose");

const username = "admin";
const password = "admin";
const database = "DoctorBD";
const URI = "mongodb+srv://"+username+":"+password+"@cluster0.pu6x2hd.mongodb.net/"+database+"?retryWrites=true&w=majority";

const conectar = async() =>{
    try {
        await mongoose.connect(URI);
        console.log("Atlas está en línea");
    } catch (error) {
        console.log("Error en la conexión. "+error);
    }

    /*mongoose.connect(URI)
        .then(()=>{ console.log("Atlas está en línea"); })
        .catch((error)=>{ console.log("Error en la conexión. "+error); })
        */
}
conectar();

module.exports = mongoose;