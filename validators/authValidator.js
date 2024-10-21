import { body, validationResult } from "express-validator";

const registerValidator = [
    body('username')
        .trim()
        .notEmpty().withMessage('Username is required')
        .isLength({ min: 3, max: 30 }).withMessage('Username must be between 3 and 30 characters')
        .matches(/^[a-zA-Z0-9]+$/).withMessage('Username can only contain letters and numbers'),
    
    body('email')
        .trim()
        .isEmail().withMessage('Email is not valid')
        .normalizeEmail(),
    
    body('password')
        .trim()
        .notEmpty().withMessage('Password is required')
        .isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/).withMessage('Password must contain at least one uppercase letter, one lowercase letter, and one number'),
];

const loginValidator = [
    body('email')
    .trim()
    .isEmail().withMessage('Email is not valid')
    .normalizeEmail(),
    
    body('password')
        .trim()
        .notEmpty().withMessage('Password is required'),
];

const handleValidationErrors = (req, res, next) => {
    const {errors} = validationResult(req);
    if (errors?.length > 0) {
        return res.status(400).json({ error: errors?.[0]?.msg || "Validation failed" });
    }
    next();
};

export { registerValidator };
export { loginValidator };
export { handleValidationErrors };
