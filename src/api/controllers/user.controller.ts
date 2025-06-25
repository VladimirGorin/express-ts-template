import { Request, Response, NextFunction } from "express";
import { UserModel } from "../../database";
import { successMiddleware } from "../middlewares/success.middleware";

class UserController {
  async getAll(_req: Request, res: Response, next: NextFunction) {
    try {
      const users = await UserModel.findAll();
      successMiddleware(users, true, res);
    } catch (err) {
      next(err);
    }
  }

  async getById(req: Request, res: Response, next: NextFunction) {
    try {
      const id = Number(req.params.id);

      const user = await UserModel.findByPk(id);
      if (!user) return res.status(404).json({ message: "User not found" });

      successMiddleware(user, true, res);
    } catch (err) {
      next(err);
    }
  }

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const { name } = req.body;
      const user = await UserModel.create({ name });
      successMiddleware(user, true, res, 201);
    } catch (err) {
      next(err);
    }
  }

  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const id = Number(req.params.id);
      const { name } = req.body;

      const user = await UserModel.findByPk(id);
      if (!user) return res.status(404).json({ message: "User not found" });

      user.name = name;
      await user.save();

      successMiddleware(user, true, res);
    } catch (err) {
      next(err);
    }
  }

  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const id = Number(req.params.id);

      const user = await UserModel.findByPk(id);
      if (!user) return res.status(404).json({ message: "User not found" });

      await user.destroy();
      successMiddleware({ message: "User deleted" }, true, res);
    } catch (err) {
      next(err);
    }
  }
}

export default new UserController();
