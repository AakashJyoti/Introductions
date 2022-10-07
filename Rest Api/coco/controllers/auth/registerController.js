import Joi from "joi";
import bcrypt from "bcrypt";
import { User } from "../../models";
import CustomErrorHandler from "../../services/customError";
import Jwtservice from "../../services/JwtService";

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

    const { name, email, password } = req.body;

    // Hash Passoword
    const hashedPassword = await bcrypt.hash(password, 10);

    // prepare the Model
    const user = new User({
      name,
      email,
      password: hashedPassword,
    });

    // store in database
    let access_token;
    try {
      const result = await user.save();
      console.log(result);

      // Token
      access_token = Jwtservice.sign({
        _id: result._id,
        role: result.role,
      });
    } catch (error) {
      return next(error);
    }

    // response
    res.status(200).json({ access_token: access_token });
  },
};

export default registerController;
