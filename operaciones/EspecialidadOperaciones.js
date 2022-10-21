const EspecialidadModelo = require("../modelos/EspecialidadModelo");
const EspecialidadOperaciones = {};

EspecialidadOperaciones.crearEspecialidad = async(req, res) => {
    try {
        const objeto = req.body;
        const especialidad = new EspecialidadModelo(objeto);
        const especialidadGuardada = await especialidad.save();
        res.status(201).send(especialidadGuardada);
    } catch (error) {
        res.status(400).send("Mala petición. "+error);
    }
}

EspecialidadOperaciones.consultarEspecialidades = async(req, res) => {
    try {
        const listaEspecialidades = await EspecialidadModelo.find();
        if (listaEspecialidades.length > 0) {
            res.status(200).send(listaEspecialidades);
        }
        else {
            res.status(404).send("No hay datos");
        }

    } catch (error) {
        res.status(400).send("Mala petición");
    }
}

EspecialidadOperaciones.consultarEspecialidad = async(req, res) => {
    try {
        const id = req.params.id;
        const especialidad = await EspecialidadModelo.findById(id);
        if (especialidad != null) {
            res.status(200).send(especialidad);
        }
        else {
            res.status(404).send("No hay datos");
        }

    } catch (error) {
        res.status(400).send("Mala petición. "+error);
    }
}

EspecialidadOperaciones.modificarEspecialidad = async(req, res) => {

}

EspecialidadOperaciones.borrarEspecialidad = async(req, res) => {

}

module.exports = EspecialidadOperaciones;