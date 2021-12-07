const express = require('express');
const { createUser, getUser, updateUser, deleteUser } = require('../controllers/user');
const router = express.Router();

router.post("/user/create", createUser);
router.get("/user", getUser);
router.patch("/user/update", updateUser);
router.put("/user/update", updateUser);
router.delete('/user/delete', deleteUser);

module.exports = router;