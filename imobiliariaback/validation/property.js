const { check, validationResult } = require("express-validator");

function validateProperty() {
    return [
        check("title")
            .notEmpty().withMessage("O campo title é obrigatório")
            .isLength({ min: 5 }).withMessage("O campo title deve ter pelo menos 5 caracteres"),
            
        check("type")
            .notEmpty().withMessage("O campo tipo é obrigatório")
            .isIn(["Casa", "Apartamento", "Condomínio", "Terreno", "Loteamento", "Escritório"]),

        check("localization").notEmpty().withMessage("O campo localização é obrigatório"),

        check("description")
            .notEmpty().withMessage("O campo description é obrigatório")
            .isLength({ min: 10 }).withMessage("O campo descrição deve ter pelo menos 10 caracteres"),

        check("price")
            .notEmpty().withMessage("O campo preço é obrigatório")
            .isFloat().withMessage("O campo preço so pode conter números"),

        check("sqmeters")
            .optional()
            .isFloat()
            .notEmpty().withMessage("O campo área é obrigatório"),

        check("beds")
            .optional()
            .isNumeric().withMessage("O campo so permite numeros"),

        check("bath")
            .optional()
            .isNumeric(),

        async (req, res, next) => {
            try {
                const errors = validationResult(req);

                if (!errors.isEmpty()) {
                    return res.status(400).json(errors);
                }

                next();
            } catch (error) {
                return res.status(400).json({ errors: error });
            }
        },
    ];
}

module.exports = validateProperty;
