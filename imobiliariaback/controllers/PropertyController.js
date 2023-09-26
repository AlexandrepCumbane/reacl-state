require("../models/Property");
const { json } = require("body-parser");
const mongoose = require("../database/connection");
const Property = mongoose.model("property");

class PropertyController {
    // Show all
    async showAllProperty(req, res) {
        try {
            const properties = await Property.find();
            if (properties) {
                console.log(typeof properties);
                return res.status(200).json( properties);
            }
            throw new Error("error");
        } catch (error) {
            console.log(error);
        }
    }

    // Show One
    async showProperty(req, res) {
        const id = req.params.id;
        try {
            const property = await Property.findById({ _id: id });
            if (!property) return res.status(404).json({ msg: "Propriedade não encontrada!" });
            else {
                return res.status(200).json(property);
            }
        } catch (error) {
            console.log(error.messageFormat);
            return res.status(500).json({ id, error, msg: "Propriedade não encontrada!" });
        }
    }

    // Save Property

    async newProperty(req, res) {
        try {
            const newProperty = await Property.create(req.body);
            console.log(newProperty)
            return res.status(200).json(newProperty);
        } catch (error) {
            console.error(error);
            return res.status(400).json(error);
        }
    }

    // Update Property
    async updateProperty(req, res) {
        try {
            const property = await Property.findById({ _id: req.params.id });
            if (property) {
                property.title = req.body.title;
                property.type = req.body.type;
                property.localization = req.body.localization;
                property.description = req.body.description;
                property.img = req.body.img;
                property.price = req.body.price;
                property.sqmeters = req.body.sqmeters;
                property.beds = req.body.beds;
                property.bath = req.body.bath;

                const updatedProperty = await property.save();
                return res.status(200).json({ msg: "Propriedade atualizada!" });
            } else {
                return res.status(404).json({ msg: "Propriedade não encontrada!" });
            }
        } catch (error) {}
    }

    // Delete Property
    async deleteProperty(req, res) {
        try {
        } catch (error) {}
    }
}

module.exports = new PropertyController();
