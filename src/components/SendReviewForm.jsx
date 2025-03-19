import React, { useState } from 'react';
import axios from 'axios';
import FormInput from './FormInput';
import StarRating from './StarRating';
import useFormData from '../hooks/useFormData';

const SendReviewForm = () => {
  const { formData, handleChange, handleRatingChange } = useFormData();
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/reviews', formData);
      setMessage(response.data.message);
    } catch (err) {
      console.error(err);
      setMessage('Error submitting review');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <FormInput
        label="Employer's Name"
        type="text"
        name="employerName"
        value={formData.employerName}
        onChange={handleChange}
        required
      />
      <FormInput
        label="Your Name"
        type="text"
        name="reviewerName"
        value={formData.reviewerName}
        onChange={handleChange}
        required
      />
      <FormInput
        label="Your Role"
        type="text"
        name="reviewerRole"
        value={formData.reviewerRole}
        onChange={handleChange}
        required
      />
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">Rating</label>
        <StarRating rating={formData.rating} onRatingChange={(value) => handleRatingChange('rating', value)} />
      </div>
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">Comments</label>
        <textarea
          name="comments"
          value={formData.comments}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-cyan-500 text-white py-2 px-4 rounded-md hover:bg-cyan-800 focus:outline-none focus:ring-2 focus:ring-cyan-500"
      >
        Submit
      </button>
      {message && <p className="mt-4 text-center text-green-500">{message}</p>}
    </form>
  );
};

export default SendReviewForm;