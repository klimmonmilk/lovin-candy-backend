import { Router } from "express";
import { createUser, delAddress, getUsers, login, updateAddress, createAddress } from "../modules/users/users.controller.js";

export const router = Router();

router.get("/", getUsers);

router.post("/", createUser);

router.post("/:id", createAddress);

router.delete("/:id", delAddress);

router.put("/:id", updateAddress);

router.post("/login", login);