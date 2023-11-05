import { Router } from "express";

const router = Router();

import {
  getArticle,
  getAllArticles,
  deleteArticle,
  updateArticle,
  createArticle
} from "../controllers/articleController.js";
import {
  validateArticleInput,
  validateIdParam,
} from "../middleware/validationmiddleware.js";

router.route("/").get(getAllArticles).post(validateArticleInput, createArticle);
router
  .route("/:id")
  .get(validateIdParam, getArticle)
  .patch(validateIdParam, validateArticleInput, updateArticle)
  .delete(validateIdParam, deleteArticle);

export default router;
