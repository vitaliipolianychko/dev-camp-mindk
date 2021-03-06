const express = require("express");

const router = new express.Router();
const db = require("../services/db");

const fileMiddleware = require("../../middleware/file");

router.get("/", async (req, res) => {
  const users = await db.select()
    .from("users")
    .orderBy("id");
  res.status(200)
    .json(users);
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const user = await db.select()
    .from("users")
    .where("id", id);
  res.status(200)
    .json(user);
});

router.post("/", async (req, res) => {
  await db.insert(req.body)
    .into("users");
  res.status(201)
    .json("User added");
});

router.post("/:id/avatar", fileMiddleware.single("avatar"), async (req, res) => {
  try {
    if (req.file) {
      const { id } = req.params;
      await db("users")
        .where("id", id)
        .update({ avatar: req.file.path });
      res.status(200)
        .json("avatar loaded!!!");
    }
  } catch (e) {
    console.log(e);
  }
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  await db("users")
    .where("id", id)
    .update(req.body);
  return res.status(200)
    .json("User updated!!!");
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  await db("users")
    .where("id", id)
    .del();
  res.status(200)
    .json("User DELETED!!!");
});

module.exports = router;
