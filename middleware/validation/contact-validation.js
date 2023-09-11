import contactSchema from "../../schemas/contact-schema.js";

import { validateBody } from "../../decorator/index.js"

const addContactValidate = validateBody(contactSchema.contactAddSchema);

export default {
    addContactValidate,
}