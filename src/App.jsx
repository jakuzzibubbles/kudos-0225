import React, { useState } from "react";
import axios from "axios";
import FormInput from "./components/FormInput";
import StarRating from "./components/StarRating";
import FormSection from "./components/FormSection";
import useFormData from "./hooks/useFormData";

function App() {
  const { formData, handleChange, handleRatingChange } = useFormData();
  const [finalRating, setFinalRating] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/reviews",
        formData
      );
      alert(response.data.message);
      setFinalRating(`${response.data.finalRating.toFixed(1)}/5`);
    } catch (err) {
      console.error(err);
      alert("Error submitting review");
    }
  };

  const calculateRatingSum = () => {
    const {
      skills,
      availability,
      communication,
      quality,
      deadlines,
      cooperation,
    } = formData;

    if (
      skills === 0 ||
      availability === 0 ||
      communication === 0 ||
      quality === 0 ||
      deadlines === 0 ||
      cooperation === 0
    ) {
      return "";
    }

    const total =
      skills + availability + communication + quality + deadlines + cooperation;
    const average = total / 6;
    return `${average.toFixed(1)}/5`;
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-6">Kudos 🎉</h1>
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <FormSection title="Who are you to judge?">
            <FormInput
              label="What's your full name?"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <FormInput
              label="What's your role?"
              type="text"
              name="jobTitle"
              value={formData.jobTitle}
              onChange={handleChange}
              required
            />
            <FormInput
              label="Which organization should take credit (or blame) for your expertise?"
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              required
            />
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                When did you work together?
              </label>
              <div className="flex gap-4">
                <input
                  type="date"
                  name="workFrom"
                  value={formData.workFrom}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="date"
                  name="workTo"
                  value={formData.workTo}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                In what capacity did you work together?
              </label>
              <select
                name="connectionType"
                value={formData.connectionType}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select</option>
                <option value="Client">Client</option>
                <option value="Manager">Manager</option>
                <option value="Team Mate">Team Mate</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </FormSection>

          <FormSection title="How many stars would you give them before HR gets involved?">
            {[
              "skills",
              "availability",
              "communication",
              "quality",
              "deadlines",
              "cooperation",
            ].map((category) => (
              <div
                key={category}
                className="grid grid-cols-2 items-center gap-4"
              >
                <label className="text-sm font-medium text-gray-700">
                  {category.charAt(0).toUpperCase() + category.slice(1)}:
                </label>
                <StarRating
                  rating={formData[category]}
                  onRatingChange={(value) =>
                    handleRatingChange(category, value)
                  }
                />
              </div>
            ))}
            <div className="grid grid-cols-2 gap-4">
              <label className="text-sm font-medium text-gray-700">
                Final rating:
              </label>
              <input
                type="text"
                value={calculateRatingSum()}
                readOnly
                className="w-full px-3 py-2"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Got anything extra to add? Spill the tea 🍰
              </label>
              <textarea
                name="comments"
                value={formData.comments}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </FormSection>

          <div className="col-span-full flex justify-center">
            <button
              type="submit"
              className="w-auto max-w-full bg-cyan-500 text-white py-2 px-4 rounded-md hover:bg-cyan-800 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            >
              Submit
            </button>
          </div>
        </form>

        {finalRating !== null && (
          <div className="mt-6 text-center">
            <h2 className="text-2xl font-bold">Final Rating: {finalRating}</h2>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;