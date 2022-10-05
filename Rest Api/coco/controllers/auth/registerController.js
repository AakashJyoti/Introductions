import Joi from "joi";
import CustomErrorHandler from "../../services/customError";

const registerController = {
  async register(req, res, next) {
    // validation
    const registerSchema = Joi.object({
      name: Joi.string().min(3).max(20).required(),
      email: Joi.string().email().required(),
      password: Joi.string()
        .pattern(new RegExp(`^[a-zA-Z0-9]{3,30}$`))
        .required(),
      repeat_password: Joi.ref("password"),
    });

    const { error } = registerSchema.validate(req.body);
    if (error) {
      return next(error);
    }

    //  Check if the user aleready exists in the database
    try {
      const exist = await User.exists({ email: req.body.email });
      if (exist) {
        return next(
          CustomErrorHandler.alreadyExists("This email is already exists.")
        );
      }
    } catch (error) {
      return next(error);
    }

    res.status(200).json({ message: "Hello from express" });
  },
};

export default registerController;
