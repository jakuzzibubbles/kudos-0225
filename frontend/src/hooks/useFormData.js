import { useState } from 'react';

const useFormData = () => {
  const [formData, setFormData] = useState({
    name: '',
    jobTitle: '',
    company: '',
    workFrom: '',
    workTo: '',
    connectionType: '',
    skills: 0,
    availability: 0,
    communication: 0,
    quality: 0,
    deadlines: 0,
    cooperation: 0,
    comments: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRatingChange = (category, value) => {
    setFormData({ ...formData, [category]: value });
  };

  return { formData, handleChange, handleRatingChange };
};

export default useFormData;