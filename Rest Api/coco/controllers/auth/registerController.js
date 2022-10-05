import Joi from "joi";

const registerController = {
  register(req, res, next) {
    // validation
    const registerSchema = Joi.object({
      name: Joi.string().min(3).max(20).required(),
      email: Joi.string().email().required(),
      password: Joi.string()
        .pattern(new RegExp(`^[a-zA-Z0-9][3-30]$`))
        .required(),
      repeatPassword: Joi.ref("password"),
    });

    const { error } = registerSchema.validate(req.body);
    if (error) {
      return next(error);
    }

    res.json({ msg: "Hello there" });
  },
};

export default registerController;
