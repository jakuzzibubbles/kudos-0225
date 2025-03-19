import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReviewList from '../../../components/ReviewList';
import SendReviewForm from '../../../components/SendReviewForm';

const Dashboard = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/reviews');
        setReviews(response.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchReviews();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-6">Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Received Reviews</h2>
            <ReviewList reviews={reviews} />
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Send a Review</h2>
            <SendReviewForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;