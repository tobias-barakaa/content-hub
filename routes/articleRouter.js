import { Router } from "express";

const router = Router();

import {
  getArticle,
  getAllArticles,
  deleteArticle,
  updateArticle,
  createArticle,
} from "../controllers/articleController.js";
import {
  validateArticleInput,
  validateIdParam,
} from "../middleware/validationmiddleware.js";
import { checkForTestUser } from "../middleware/authMiddleware.js";

router
.route("/")
.get(getAllArticles)
.post(checkForTestUser, validateArticleInput, createArticle);
router
  .route("/:id")
  .get(checkForTestUser, validateIdParam, getArticle)
  .patch(checkForTestUser,validateIdParam, validateArticleInput, updateArticle)
  .delete(validateIdParam, deleteArticle);

export default router;
