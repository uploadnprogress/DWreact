import React, { useState } from 'react';

const HomeProjectForm = () => {
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', email: '', phone: '',
    address: '', address2: '', city: '', state: '', zip: '',
    projectName: '', budget: '', projectDescription: '',
    projectFile: null 
  });

  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // ZIP LOGIC
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

    data.append("form-name", "home-project");
    data.append("source", "react_home_form");

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
          firstName: '', lastName: '', email: '', phone: '',
          address: '', address2: '', city: '', state: '', zip: '',
          projectName: '', budget: '', projectDescription: '',
          projectFile: null
        });
      } else {
        alert("There was an error submitting your request.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Network error. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <form className="project-form" onSubmit={handleSubmit}>
        <h3>Home Project Details</h3>
        <div className="form-group-row">
          <div className="form-group half">
            <label>First Name *</label>
            <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
          </div>
          <div className="form-group half">
            <label>Last Name *</label>
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
          <label>Address</label>
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
            <input type="text" name="zip" value={formData.zip} onChange={handleZipChange} maxLength="5" />
          </div>
        </div>

        <div className="form-group">
          <label>Project Title *</label>
          <input type="text" name="projectName" placeholder="e.g. Bathroom Tile Repair" value={formData.projectName} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Estimated Budget</label>
          <select name="budget" value={formData.budget} onChange={handleChange}>
            <option value="">Select a Range</option>
            <option value="Under $500">Under $500</option>
            <option value="500-1000">$500 - $1,000</option>
            <option value="1000-5000">$1,000 - $5,000</option>
            <option value="5000+">$5,000+</option>
          </select>
        </div>

        <div className="form-group">
          <label>Description *</label>
          <textarea name="projectDescription" rows="5" value={formData.projectDescription} onChange={handleChange} required></textarea>
        </div>

        <div className="form-group">
          <label>Attach Photo (Optional)</label>
          <input type="file" name="projectFile" onChange={handleFileChange} />
        </div>

        <div className="form-button-wrapper">
            {/* ADDED 'btn' CLASS HERE */}
            <button type="submit" className="btn submit-btn" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Submit Home Request"}
            </button>
        </div>
      </form>

      {/* SUCCESS POPUP */}
      {showSuccessPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <div className="popup-icon">✅</div>
            <h2>Submission Received!</h2>
            <p>Thanks for starting your home project with us.</p>
            <p>We've sent a confirmation to <strong>{formData.email}</strong>.</p>
            <button className="popup-close-btn" onClick={() => setShowSuccessPopup(false)}>Close</button>
          </div>
        </div>
      )}
    </>
  );
};

export default HomeProjectForm;