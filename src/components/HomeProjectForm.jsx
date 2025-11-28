import React, { useState } from 'react';

function HomeProjectForm() {
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', city: '', state: '', address: '', zip: '',
    email: '', phone: '', projectName: '', projectDescription: '', budget: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Basic Validation
    if (!Object.values(formData).every(field => String(field).trim() !== '')) { // Ensure all fields are non-empty
      alert('Please fill in ALL required fields.');
      setIsSubmitting(false);
      return;
    }

    try {
      // THIS IS WHERE YOU WOULD SEND DATA TO YOUR ACTUAL BACKEND/EMAIL SERVICE
      // For demonstration, we'll just log and alert.
      console.log("Submitting Home Project:", formData);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500)); 

      // If successful:
      alert('Thanks! We’re reviewing your request and will connect you with a qualified pro. Keep an eye out for a confirmation soon.');
      setFormData({ firstName: '', lastName: '', city: '', state: '', address: '', zip: '', email: '', phone: '', projectName: '', projectDescription: '', budget: '' }); // Reset form
      
    } catch (error) {
      console.error('Submission error:', error);
      alert('Submission failed due to an error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form id="home-project-form" className="form-content-area" onSubmit={handleSubmit}>
        <div className="form-group">
            <label htmlFor="firstName">First Name*</label>
            <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required />
        </div>
        <div className="form-group">
            <label htmlFor="lastName">Last Name*</label>
            <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required />
        </div>
        <div className="form-group">
            <label htmlFor="address">Address*</label>
            <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} required />
        </div>
        <div className="form-group">
            <label htmlFor="city">City*</label>
            <input type="text" id="city" name="city" value={formData.city} onChange={handleChange} required />
        </div>
        <div className="form-group">
            <label htmlFor="state">State*</label>
            <input type="text" id="state" name="state" value={formData.state} onChange={handleChange} required />
        </div>
        <div className="form-group">
            <label htmlFor="zip">Zip Code*</label>
            <input type="text" id="zip" name="zip" value={formData.zip} onChange={handleChange} required />
        </div>
        <div className="form-group">
            <label htmlFor="email">Email*</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="form-group">
            <label htmlFor="phone">Phone*</label>
            <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
        </div>
        <div className="form-group">
            <label htmlFor="projectName">Project Name/Title*</label>
            <input type="text" id="projectName" name="projectName" value={formData.projectName} onChange={handleChange} required />
        </div>
        <div className="form-group">
            <label htmlFor="projectDescription">Project Description*</label>
            <textarea id="projectDescription" name="projectDescription" value={formData.projectDescription} onChange={handleChange} required rows="5"></textarea>
        </div>
        <div className="form-group">
            <label htmlFor="budget">Estimated Budget</label>
            <input type="text" id="budget" name="budget" value={formData.budget} onChange={handleChange} placeholder="e.g., $500 - $1000 or discuss with pro" />
        </div>

        <div className="form-button-wrapper">
            <button type="submit" className="btn" disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Submit Home Project'}
            </button>
        </div>
    </form>
  );
}

export default HomeProjectForm;