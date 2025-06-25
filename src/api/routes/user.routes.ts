import express from "express";
import userController from "../controllers/user.controller";
import { validate } from "../middlewares/validate.middleware";
import {
  idSchema,
  createUserSchema,
  updateUserSchema,
} from "../validations/user.validation";

const router = express.Router();

router.get("/users", userController.getAll);

router.get("/users/:id", validate(idSchema, "params"), userController.getById);

router.post(
  "/users",
  validate(createUserSchema, "body"),
  userController.create
);

router.put(
  "/users/:id",
  validate(idSchema, "params"),
  validate(updateUserSchema, "body"),
  userController.update
);

router.delete(
  "/users/:id",
  validate(idSchema, "params"),
  userController.delete
);

export default router;
