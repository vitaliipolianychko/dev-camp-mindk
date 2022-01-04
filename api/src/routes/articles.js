const express = require("express");

const router = new express.Router();
const db = require("../services/db");

const moment = require("moment");

router.get("/", async (req, res) => {
  const users = await db.select()
    .from("articles")
    .orderBy("id");
  res.status(200)
    .json(users);
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const user = await db.select()
    .from("articles")
    .where("id", id);
  res.status(200)
    .json(user);
});

router.post("/", async (req, res) => {
  const createdAt = moment()
    .utc()
    .format();
  await db.insert({ ...req.body, createdat: createdAt })
    .into("articles");
  res.status(201)
    .json("Article added");
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const updatedAt = moment()
    .utc()
    .format();
  const updatedArticle = { ...req.body, updatedat: updatedAt };
  await db("articles")
    .where("id", id)
    .update(updatedArticle);
  return res.status(200)
    .json("Article updated!!!");
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  await db("articles")
    .where("id", id)
    .del();
  res.status(200)
    .json("Article DELETED!!!");
});

module.exports = router;
