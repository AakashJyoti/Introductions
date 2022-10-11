import Joi from "joi";
import { JWT_REFRESH_SECRET } from "../../config";
import { RefreshToken, User } from "../../models";
import CustomErrorHandler from "../../services/customError";
import Jwtservice from "../../services/JwtService";

const refreshControlller = {
  async refresh(req, res, next) {
    // validate
    const refreshSchema = Joi.object({
      refresh_token: Joi.string().required(),
    });

    const { error } = refreshSchema.validate(req.body);

    if (error) {
      return next(error);
    }

    // Check token in database
    let refreshToken;

    try {
      refreshToken = await RefreshToken.findOne({
        token: req.body.refresh_token,
      });
      //   console.log(refreshToken);
      if (!refreshToken) {
        return next(
          CustomErrorHandler.unAuthorized("Invalid refresh Token Received")
        );
      }

      // Verify token
      let userId;
      try {
        const { _id } = await Jwtservice.verify(
          refreshToken.token,
          JWT_REFRESH_SECRET
        );
        userId = _id;
      } catch (error) {
        return next(CustomErrorHandler.unAuthorized("Invalid refresh Token"));
      }

      //   Verify User
      const user = await User.findOne({ _id: userId });
      if (!user) {
        return next(CustomErrorHandler.unAuthorized("No user found"));
      }

      //   Generate new Tokens
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
      return next(new Error("Someting went Wrong" + error.message));
    }
  },
};

export default refreshControlller;
