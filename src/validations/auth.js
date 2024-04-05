import Joi from "joi";

const registerValidator = Joi.object({
  username: Joi.string().min(3).max(10).required().messages({
    "any.required": "Username là trường bắt buộc",
    "string.min": "Username phải nhiều hơn 3 kí tự",
  }),
  email: Joi.string().email().messages({
    "string.email": "Email không đúng định dạng",
  }),
  password: Joi.string().required(),
  avatar: Joi.string(),
  role: Joi.string(),
}).options({
  abortEarly: false,
});

const loginValidator = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
}).options({
  abortEarly: false,
});

export { registerValidator, loginValidator };
