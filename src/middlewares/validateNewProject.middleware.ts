import { Request, Response, NextFunction } from 'express';

const validateNewProject = (req: Request, res: Response, next: NextFunction) => {
    const { titulo, descripcion, requisitos, categoria, habilidades, modalidad, estado } = req.body;

    const specialCharRegex = /[@$%^&*"{}|<>]/;

    if (!titulo || typeof titulo !== 'string' || specialCharRegex.test(titulo)) {
        throw { message: 'El título del proyecto es obligatorio y debe ser texto', code: 400 };
    }

    if (!descripcion || typeof descripcion !== 'string' || specialCharRegex.test(descripcion)) {
        throw { message: 'La descripción del proyecto es obligatoria y debe ser texto', code: 400 };
    }

    if (!requisitos || typeof requisitos !== 'string' || specialCharRegex.test(requisitos)) {
        throw { message: 'Los requisitos del proyecto son obligatorios y debe ser texto', code: 400 };
    }

    if (!categoria || typeof categoria !== 'string' || specialCharRegex.test(categoria)) {
        throw { message: 'La categoría del proyecto es obligatoria y debe ser texto', code: 400 };
    }

    if (!Array.isArray(habilidades) || habilidades.some(h => typeof h !== 'string' || specialCharRegex.test(h))) {
        throw { message: 'Las habilidades del proyecto son obligatorias y debe ser texto', code: 400 };
    }

    if (!modalidad || typeof modalidad !== 'string' || specialCharRegex.test(modalidad)) {
        throw { message: 'La modalidad del proyecto es obligatoria y debe ser texto', code: 400 };
    }

    if (estado === undefined || typeof estado !== 'boolean') {
        throw { message: 'El estado del proyecto es obligatorio y debe ser booleano.', code: 400 };
    }

    next();
};

export default validateNewProject;