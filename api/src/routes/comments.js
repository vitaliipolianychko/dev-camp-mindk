const express = require("express");

const router = new express.Router();
const db = require("../services/db");

const moment = require("moment");

router.get("/", async (req, res) => {
  const { articleid } = req.query;
  // get comments by article id
  let comments = [];
  if (articleid) {
    comments = await db.select()
      .from("comments")
      .orderBy("id")
      .where("articleid", articleid);
    return res.status(200)
      .json(comments);
  }
  comments = await db.select()
    .from("comments")
    .orderBy("id");
  return res.status(200)
    .json(comments);
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const like = await db.select()
    .from("comments")
    .where("id", id);
  res.status(200)
    .json(like);
});

router.post("/", async (req, res) => {
  const createdAt = moment()
    .utc()
    .format();
  await db.insert({ ...req.body, createdat: createdAt })
    .into("comments");
  res.status(201)
    .json("Comment added");
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const updatedAt = moment()
    .utc()
    .format();
  const updatedArticle = { ...req.body, updatedat: updatedAt };
  await db("comments")
    .where("id", id)
    .update(updatedArticle);
  return res.status(200)
    .json("Сomment updated!!!");
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  await db("comments")
    .where("id", id)
    .del();
  res.status(200)
    .json("Comment removed");
});

module.exports = router;
