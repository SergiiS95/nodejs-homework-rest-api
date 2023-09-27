import express from "express";

import contactsController from "../../controllers/contacts-controller.js";

import * as contactSchemas from "../../models/Contact.js"

import { validateBody } from "../../decorators/index.js";

import { authenticate, isValidId } from "../../middleware/index.js";

const contactAddValidate = validateBody(contactSchemas.contactAddSchema);
const contactUpdateFavoriteValidate = validateBody(
  contactSchemas.contactUpdateFavoriteSchema
);
const contactsRouter = express.Router();

contactsRouter.use(authenticate);

contactsRouter.get("/", contactsController.getAll);

contactsRouter.get("/:id", isValidId, contactsController.getById);

contactsRouter.post("/", contactAddValidate, contactsController.add);

contactsRouter.delete("/:id", isValidId, contactsController.deleteById);

contactsRouter.put(
  "/:id",
  isValidId,
  contactAddValidate,
  contactsController.updateById
);

contactsRouter.patch(
  "/:id/favorite",
  isValidId,
  contactUpdateFavoriteValidate,
  contactsController.updateStatusContact
);
export default contactsRouter;
