import logger from "../logs/loggers.js";

export default function errorHandler(err, req, res, next) {
    console.log("error nombre", err.name);
    logger.error(err.message);

    if (err.name === "validationError") {
        return res.status(400).json({ message: err.message });
    }

    if (err.name === "JsonWebTokenError") {
        return res.status(401).json({ message: err.message });
    }

    if (err.name === "TokenExpiredError") {
        return res.status(401).json({ message: err.message });
    }

    if (
        err.name === "SequelizeValidationError" ||
        err.name === "SequelizeUniqueConstraintError"
    ) {
        const details = err.errors?.map((e) => e.message) || [err.message];
        return res.status(400).json({
            message: "Error de validación",
            details,
        });
    }

    if (err.name === "SequelizeForeignKeyConstraintError") {
        return res.status(400).json({ message: "Error de integridad referencial" });
    }

    // Para errores no manejados específicamente
    return res.status(500).json({ message: err.message });
}
