import Review from '../models/Review.js';

export const getReviews = async (req, res) => {
  try {
    const reviews = await Review.find();
    res.status(200).json(reviews);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const createReview = async (req, res) => {
  const { employerName, reviewerName, reviewerRole, rating, comments } = req.body;

  const newReview = new Review({
    employerName,
    reviewerName,
    reviewerRole,
    rating,
    comments,
  });

  try {
    const savedReview = await newReview.save();
    res.status(201).json(savedReview);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};