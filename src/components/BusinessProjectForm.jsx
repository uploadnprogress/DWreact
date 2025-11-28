import React, { useState } from 'react';

function BusinessProjectForm() {
  const [formData, setFormData] = useState({
    companyName: '', contactPerson: '', businessType: '', email: '', phone: '',
    projectTitle: '', projectDetails: '', budget: '', attachment: null // For file upload
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'file' ? files[0] : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Basic Validation
    if (!Object.entries(formData).every(([key, value]) => {
        // Exclude attachment from simple empty check if it's optional
        if (key === 'attachment') return true;
        return String(value).trim() !== '';
    })) {
      alert('Please fill in ALL required fields.');
      setIsSubmitting(false);
      return;
    }

    // Prepare data for submission (FormData for files)
    const dataToSend = new FormData();
    for (const key in formData) {
      dataToSend.append(key, formData[key]);
    }
    dataToSend.append('formType', 'business_project');


    try {
      // THIS IS WHERE YOU WOULD SEND DATA TO YOUR ACTUAL BACKEND/EMAIL SERVICE
      // For demonstration, we'll just log and alert.
      console.log("Submitting Business Project Data (Form Data will include file):", formData);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));

      alert('Business project form submitted! We will contact you soon. (This is a demo)');
      // Reset form (clear form data)
      setFormData({ companyName: '', contactPerson: '', businessType: '', email: '', phone: '', projectTitle: '', projectDetails: '', budget: '', attachment: null });

    } catch (error) {
      console.error('Submission error:', error);
      alert('Submission failed due to an error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

    return (
        <form id="business-project-form" className="form-content-area" onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="companyName">Company Name*</label>
                <input type="text" id="companyName" name="companyName" value={formData.companyName} onChange={handleChange} required />
            </div>
            <div className="form-group">
                <label htmlFor="contactPerson">Contact Person*</label>
                <input type="text" id="contactPerson" name="contactPerson" value={formData.contactPerson} onChange={handleChange} required />
            </div>
            <div className="form-group">
                <label htmlFor="businessType">Type of Business*</label>
                <input type="text" id="businessType" name="businessType" value={formData.businessType} onChange={handleChange} required />
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
                <label htmlFor="projectTitle">Project Title*</label>
                <input type="text" id="projectTitle" name="projectTitle" value={formData.projectTitle} onChange={handleChange} required />
            </div>
            <div className="form-group">
                <label htmlFor="projectDetails">Project Details*</label>
                <textarea id="projectDetails" name="projectDetails" value={formData.projectDetails} onChange={handleChange} required rows="5"></textarea>
            </div>
            <div className="form-group">
                <label htmlFor="budget">Estimated Budget</label>
                <input type="text" id="budget" name="budget" value={formData.budget} onChange={handleChange} placeholder="e.g., $5,000 - $10,000 or discuss with pro" />
            </div>
             <div className="form-group">
                <label htmlFor="attachment">Upload relevant documents (optional)</label>
                <input type="file" id="attachment" name="attachment" onChange={handleChange} />
            </div>

            <div className="form-button-wrapper">
                <button type="submit" className="btn" disabled={isSubmitting}>
                    {isSubmitting ? 'Submitting...' : 'Submit Business Project'}
                </button>
            </div>
        </form>
    );
}

export default BusinessProjectForm;