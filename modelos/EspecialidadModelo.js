const mongoose = require("mongoose");

const especialidadSchema = mongoose.Schema({
    nombre: { type: String, maxLength: 40, required: true, unique: true },
    descripcion: { type: String, maxLength: 100, required: true },
    atiende_solo_mujeres: { type: Boolean, required: true }
});

module.exports = mongoose.model("especialidades", especialidadSchema);
