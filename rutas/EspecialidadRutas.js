const EspecialidadOperaciones = require("../operaciones/EspecialidadOperaciones");
const router = require("express").Router();

router.get("/", EspecialidadOperaciones.consultarEspecialidades);
router.get("/:id", EspecialidadOperaciones.consultarEspecialidad);
router.post("/", EspecialidadOperaciones.crearEspecialidad);

module.exports = router;