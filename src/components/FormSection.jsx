import React from 'react';

const FormSection = ({ title, children }) => (
  <div className="space-y-6">
    <h2 className="text-xl font-semibold">{title}</h2>
    {children}
  </div>
);

export default FormSection;