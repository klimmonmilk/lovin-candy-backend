import { Router } from "express";
import { createUser, 
    createAddress, 
    delAddress, 
    getUsers, 
    login, 
    me, 
    register, 
    updateAddress 
} from "../modules/users/users.controller.js";

import { auth } from "../middlewares/auth.middleware.js";
import { isAdmin } from "../middlewares/isAdmin.middleware.js";

export const router = Router();

router.post("/login", login);

router.post("/register", register);

router.get("/me", auth, me);

router.get("/", getUsers);

router.post("/", createUser);

router.post("/address", auth, createAddress);

router.put("/address", auth, updateAddress);

router.delete("/address", auth, delAddress);

router.get("/", auth, isAdmin, getUsers);

router.delete("/:id", auth, isAdmin, delAddress);