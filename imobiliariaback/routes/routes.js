const express = require("express");
const router = express.Router();
const PropertyController = require("../controllers/PropertyController");
// const UsersController = require("../controllers/UsersController");

// const validateProperty = require("../validation/property");

// Show properties
router.get("/propriedades", PropertyController.showAllProperty);
// Show property
router.get("/propriedade/:id", PropertyController.showProperty);
// New property
router.post("/novaPropriedade", PropertyController.newProperty);
// Update property
router.put("/propriedade/:id", PropertyController.updateProperty);
// Delete property
router.delete("/propriedade/:id", PropertyController.deleteProperty);



module.exports = router;
