import Joi from "joi";
import bcrypt from "bcrypt";
import { RefreshToken, User } from "../../models";
import CustomErrorHandler from "../../services/customError";
import Jwtservice from "../../services/JwtService";
import { JWT_REFRESH_SECRET } from "../../config";

const loginController = {
  async login(req, res, next) {
    // validation
    const loginSchema = Joi.object({
      email: Joi.string().email().required(),
      password: Joi.string()
        .pattern(new RegExp(`^[a-zA-Z0-9]{3,30}$`))
        .required(),
    });

    const { error } = loginSchema.validate(req.body);

    if (error) {
      return next(error);
    }

    //  Check if the user exists in the database
    try {
      const user = await User.findOne({ email: req.body.email });
      if (!user) {
        return next(CustomErrorHandler.wrongCredentials());
      }

      //    Comapare the password
      const match = await bcrypt.compare(req.body.password, user.password);
      if (!match) {
        return next(CustomErrorHandler.wrongCredentials());
      }

      //   Token
      const access_token = Jwtservice.sign({
        _id: user._id,
        role: user.role,
      });

      const refresh_token = Jwtservice.sign(
        {
          _id: user._id,
          role: user.role,
        },
        "1y",
        JWT_REFRESH_SECRET
      );
      await RefreshToken.create({ token: refresh_token });

      //   Reaponse
      res.status(200).json({ access_token, refresh_token });
    } catch (error) {
      return next(error);
    }
  },

  async logout(req, res, next) {
    // Validation
    const refreshSchema = Joi.object({
      refresh_token: Joi.string().required(),
    });

    const { error } = refreshSchema.validate(req.body);

    if (error) {
      return next(error);
    }

    // Delete refresh token form Database
    try {
      await RefreshToken.deleteOne({ token: req.body.refresh_token });
    } catch (error) {
      return next(new Error("Somting went wrong in the database"));
    }

    // Response
    res.status(200).json({ message: "User Logout Successful" });
  },
};

export default loginController;
