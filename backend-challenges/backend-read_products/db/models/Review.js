/* Create a schema for the `Review` model in the `db/models` folder.

The schema should have the following fields:

- `title` (String)
- `text` (String)
- `rating` (Number) */

import mongoose from "mongoose";

const { Schema } = mongoose;

const reviewSchema = new Schema({
  title: { type: String, required: true },
  text: { type: String, required: true },
  rating: { type: Number, required: true },
});

const Review = mongoose.models.Review || mongoose.model("Review", reviewSchema);

export default Review;