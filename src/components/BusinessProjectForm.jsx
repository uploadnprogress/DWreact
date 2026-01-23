import React, { useState } from 'react';

const BusinessProjectForm = () => {
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', email: '', phone: '',
    companyName: '',
    address: '', city: '', state: '', zip: '',
    projectName: '', budget: '', projectDescription: '',
    projectFile: null 
  });

  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // 1. THE MISSING ZIP LOGIC
  const handleZipChange = async (e) => {
    const zip = e.target.value;
    setFormData(prevState => ({ ...prevState, zip: zip }));

    if (zip.length === 5) {
      try {
        const res = await fetch(`https://api.zippopotam.us/us/${zip}`);
        if (res.ok) {
          const data = await res.json();
          setFormData(prevState => ({ 
            ...prevState, 
            city: data.places[0]['place name'], 
            state: data.places[0]['state abbreviation'] 
          }));
        }
      } catch (err) { console.error("Zip Error:", err); }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData(prevState => ({ ...prevState, projectFile: e.target.files[0] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const webhookURL = "https://hook.us2.make.com/71zlo1hovhtyhcebw7t37terano9bhpf";
    const data = new FormData();

    data.append("form-name", "business-project");
    data.append("source", "react_business_form");

    Object.keys(formData).forEach(key => {
      if (key === 'projectFile' && formData[key]) {
        data.append('projectFileUpload', formData[key]); 
      } else {
        data.append(key, formData[key]);
      }
    });

    try {
      const response = await fetch(webhookURL, {
        method: "POST",
        body: data,
      });

      if (response.ok) {
        setShowSuccessPopup(true);
        setFormData({
          firstName: '', lastName: '', email: '', phone: '', companyName: '',
          address: '', city: '', state: '', zip: '',
          projectName: '', budget: '', projectDescription: '',
          projectFile: null
        });
      } else {
        alert("Error submitting form.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Network error.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <form className="project-form" onSubmit={handleSubmit}>
        <h3>Business Project Details</h3>
        <div className="form-group">
          <label>Company Name</label>
          <input type="text" name="companyName" value={formData.companyName} onChange={handleChange} />
        </div>

        <div className="form-group-row">
          <div className="form-group half">
            <label>Contact First Name *</label>
            <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
          </div>
          <div className="form-group half">
            <label>Contact Last Name *</label>
            <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
          </div>
        </div>

        <div className="form-group-row">
          <div className="form-group half">
            <label>Email *</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="form-group half">
            <label>Phone *</label>
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
          </div>
        </div>

        <div className="form-group">
          <label>Business Address</label>
          <input type="text" name="address" value={formData.address} onChange={handleChange} />
        </div>

        <div className="form-group-row">
            <div className="form-group third">
                <label>City</label>
                <input type="text" name="city" value={formData.city} onChange={handleChange} />
            </div>
            <div className="form-group third">
                <label>State</label>
                <input type="text" name="state" value={formData.state} onChange={handleChange} />
            </div>
            <div className="form-group third">
                <label>Zip</label>
                {/* 2. ATTACH THE ZIP HANDLER HERE */}
                <input type="text" name="zip" value={formData.zip} onChange={handleZipChange} maxLength="5" />
            </div>
        </div>

        <div className="form-group">
          <label>Project Title *</label>
          <input type="text" name="projectName" value={formData.projectName} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Description *</label>
          <textarea name="projectDescription" rows="5" value={formData.projectDescription} onChange={handleChange} required></textarea>
        </div>

        <div className="form-group">
          <label>Attach Document (RFP/Photos)</label>
          <input type="file" name="projectFile" onChange={handleFileChange} />
        </div>

        <div className="form-button-wrapper">
            <button type="submit" className="submit-btn" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Submit Business Request"}
            </button>
        </div>
      </form>

      {/* SUCCESS POPUP */}
      {showSuccessPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <div className="popup-icon">✅</div>
            <h2>Request Sent!</h2>
            <p>We have received your business inquiry.</p>
            <p>A coordinator will contact <strong>{formData.email}</strong> shortly.</p>
            <button className="popup-close-btn" onClick={() => setShowSuccessPopup(false)}>Close</button>
          </div>
        </div>
      )}
    </>
  );
};

export default BusinessProjectForm;