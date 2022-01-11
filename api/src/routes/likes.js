const express = require("express");

const router = new express.Router();
const db = require("../services/db");

router.get("/", async (req, res) => {
  const { articleid } = req.query;
  // get likes by article id
  let likes = [];
  if (articleid) {
    likes = await db.select()
      .from("likes")
      .orderBy("id")
      .where("articleid", articleid);
    return res.status(200)
      .json(likes);
  }
  likes = await db.select()
    .from("likes")
    .orderBy("id");
  return res.status(200)
    .json(likes);
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const like = await db.select()
    .from("likes")
    .where("id", id);
  res.status(200)
    .json(like);
});

router.post("/", async (req, res) => {
  await db.insert(req.body)
    .into("likes");
  res.status(201)
    .json("Like added");
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  await db("likes")
    .where("id", id)
    .del();
  res.status(200)
    .json("Like removed");
});

module.exports = router;
