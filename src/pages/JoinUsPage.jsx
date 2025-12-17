import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

function JoinUsPage() {
  const [formType, setFormType] = useState(''); // 'individual' or 'company'

  return (
    <>
      <Helmet>
        <title>Become a Provider | DoneWright Services</title>
        <meta name="description" content="Join the DoneWright Services nationwide network of vetted professionals." />
      </Helmet>
      <div className="form-section">
        <div className="form-container">
          <h1 className="section-title">Join Our Network</h1>
          <p className="intro" style={{textAlign: 'center', marginBottom: '20px'}}>Select your provider type to begin the application.</p>

          <div className="radio-container">
            <label>
              <input type="radio" name="userTypeToggle" onChange={() => setFormType('individual')} checked={formType === 'individual'} /> Individual Provider
            </label>
            <label>
              <input type="radio" name="userTypeToggle" onChange={() => setFormType('company')} checked={formType === 'company'} /> Company/Team
            </label>
          </div>

          {formType && (
            <form 
              name="ContractorApplication" 
              method="POST" 
              data-netlify="true" 
              encType="multipart/form-data"
              action="/faq" 
            >
              {/* Hidden field required for Netlify to identify the form */}
              <input type="hidden" name="form-name" value="ContractorApplication" />
              <input type="hidden" name="provider-type" value={formType} />

              {formType === 'individual' ? (
                <>
                  <div className="form-group">
                    <label>First Name*</label>
                    <input type="text" name="firstName" required />
                  </div>
                  <div className="form-group">
                    <label>Last Name*</label>
                    <input type="text" name="lastName" required />
                  </div>
                </>
              ) : (
                <>
                  <div className="form-group">
                    <label>Company Name*</label>
                    <input type="text" name="companyName" required />
                  </div>
                  <div className="form-group">
                    <label>Tax ID / EIN*</label>
                    <input type="text" name="taxId" required />
                  </div>
                </>
              )}

              <div className="form-group">
                <label>Email Address*</label>
                <input type="email" name="email" required />
              </div>
              <div className="form-group">
                <label>Phone Number*</label>
                <input type="tel" name="phone" required />
              </div>

              <div className="form-group">
                <label>Proof of Insurance (Upload File)*</label>
                <input type="file" name="insuranceProof" required />
              </div>

              <div className="checkbox-group">
                <label>
                  <input type="checkbox" name="acceptTerms" required />
                  I agree to the <Link to="/terms">Terms</Link> and <Link to="/privacy">Privacy Policy</Link>.
                </label>
              </div>

              <div className="form-button-wrapper">
                <button type="submit" className="btn">Submit Application</button>
              </div>
            </form>
          )}
        </div>
      </div>
    </>
  );
}

export default JoinUsPage;