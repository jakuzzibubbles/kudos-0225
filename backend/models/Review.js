import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema({
  employerName: { type: String, required: true },
  reviewerName: { type: String, required: true },
  reviewerRole: { type: String, required: true },
  rating: { type: Number, required: true },
  comments: { type: String, required: true },
}, { timestamps: true });

const Review = mongoose.model('Review', reviewSchema);

export default Review;