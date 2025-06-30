import Joi from 'joi';

function validate(schema, target='body'){
    return (req, res, next) => {
        const data = req[target];
        // paso 1verificar datos
        if (!data || Object.keys(data).length === 0) {
            return res.status(400).json({ message: "no data fount" });
        }
        // paso 2 validar datos
        const { error, value } = schema.validate(data, {
            abortEarly: false, // para que retorne todos los errores
            stripUnknown: true, // para eliminar campos desconocidos
        });

        // paso 3 si hay error retornar error
         if (error) {
            return res.status(400).json({
                message: "Validation error",
                details: error.details.map((detail) => ({
                    message: detail.message,
                })),
            });
        }
        // paso 4 si no hay error, continuar

       req[target] = value;
       //continuamos
       next();
    };
}

export default validate;