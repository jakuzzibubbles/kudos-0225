import React from 'react';

const ReviewList = ({ reviews }) => {
  if (reviews.length === 0) {
    return <p>No reviews received yet.</p>;
  }

  return (
    <ul className="space-y-4">
      {reviews.map((review) => (
        <li key={review.id} className="p-4 bg-gray-100 rounded-lg shadow">
          <h3 className="text-xl font-semibold">{review.reviewerName}</h3>
          <p className="text-gray-700">{review.comments}</p>
          <p className="text-gray-500">Rating: {review.finalRating}/5</p>
        </li>
      ))}
    </ul>
  );
};

export default ReviewList;