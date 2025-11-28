import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom'; // <-- THE MISSING IMPORT IS ADDED HERE

function JoinUsPage() {
  const [formType, setFormType] = useState(''); // 'individual' or 'company'
  const [formData, setFormData] = useState({
    userType: '',
    firstName: '', lastName: '', email: '', phone: '',
    companyName: '', taxId: '', businessAddress: '',
    serviceCategory: '', experience: '', insuranceProof: null,
    catalogUpload: null, additionalDocs: null,
    paymentMethod: 'bank',
    bankName: '', accountNumber: '', routingNumber: '',
    cardType: '', cardNumber: '', cardExpiry: '', cardCVC: '',
    paypalEmail: '',
    acceptTerms: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : (type === 'file' ? files[0] : value)
    }));
  };

  const handleUserTypeChange = (type) => {
    setFormType(type);
    setFormData(prev => ({ ...prev, userType: type }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // This is where you would add full validation logic
    if (!formType) {
        alert('Please select a provider type.');
        setIsSubmitting(false);
        return;
    }
    if (!formData.acceptTerms) {
        alert('You must accept the terms and conditions.');
        setIsSubmitting(false);
        return;
    }

    const dataToSend = new FormData();
    for (const key in formData) {
      if (formData[key] !== null) {
        dataToSend.append(key, formData[key]);
      }
    }
    dataToSend.append('formType', 'join_us');

    try {
      console.log("Submitting Join Us Form:", formData);
      await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate API call

      alert('Thank you for your application! We will review it and get in touch soon.');
      // Add logic to reset the form state here if needed
      
    } catch (error) {
      alert('Application failed to send. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <>
      <Helmet>
        <title>Become a Provider | DoneWright Services</title>
        <meta name="description" content="Are you a skilled contractor or vendor? Join the DoneWright Services nationwide network to connect with a steady stream of projects." />
      </Helmet>
      <div className="form-section">
        <div className="form-container">
          <h1 className="section-title">Join Our Network</h1>
          <p className="intro" style={{textAlign: 'center', marginBottom: '20px'}}>Ready to expand your reach? Fill out the application below to become a vetted provider.</p>

          <div className="radio-container">
            <label>
              <input 
                type="radio" 
                name="userTypeToggle" 
                value="individual" 
                checked={formType === 'individual'} 
                onChange={() => handleUserTypeChange('individual')} 
              />
              Individual Provider
            </label>
            <label>
              <input 
                type="radio" 
                name="userTypeToggle" 
                value="company" 
                checked={formType === 'company'} 
                onChange={() => handleUserTypeChange('company')} 
              />
              Company/Team
            </label>
          </div>

          {/* This form will now appear after selecting a radio button */}
          {formType && (
            <form id="join-us-form" onSubmit={handleSubmit}>
              {formType === 'individual' && (
                <>
                  <div className="form-group">
                      <label htmlFor="firstName">First Name*</label>
                      <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required />
                  </div>
                  <div className="form-group">
                      <label htmlFor="lastName">Last Name*</label>
                      <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required />
                  </div>
                </>
              )}

              {formType === 'company' && (
                <>
                  <div className="form-group">
                      <label htmlFor="companyName">Company Name*</label>
                      <input type="text" id="companyName" name="companyName" value={formData.companyName} onChange={handleChange} required />
                  </div>
                  <div className="form-group">
                      <label htmlFor="taxId">Tax ID / EIN*</label>
                      <input type="text" id="taxId" name="taxId" value={formData.taxId} onChange={handleChange} required />
                  </div>
                </>
              )}

              <div className="form-group">
                  <label htmlFor="email">Contact Email*</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
              </div>
              <div className="form-group">
                  <label htmlFor="phone">Phone Number*</label>
                  <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
              </div>
              
              <div id="additional-uploads-section">
                <h3>Required Documents</h3>
                <div className="form-group">
                    <label htmlFor="insuranceProof">Proof of Insurance*</label>
                    <input type="file" id="insuranceProof" name="insuranceProof" onChange={handleChange} required />
                </div>
              </div>

              <div className="checkbox-group">
                <label>
                  <input
                    type="checkbox"
                    name="acceptTerms"
                    checked={formData.acceptTerms}
                    onChange={handleChange}
                    required
                  />
                  I agree to the <Link to="/terms" target="_blank" rel="noopener noreferrer">Terms of Service</Link> and <Link to="/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</Link>.*
                </label>
              </div>

              <div className="form-button-wrapper">
                  <button type="submit" className="btn" disabled={isSubmitting}>
                      {isSubmitting ? 'Submitting...' : 'Submit Application'}
                  </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </>
  );
}

export default JoinUsPage;