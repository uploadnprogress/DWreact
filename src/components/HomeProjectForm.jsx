<<<<<<< HEAD
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const HomeProjectForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', address: '', address2: '', zip: '', city: '', state: '', 
    email: '', phone: '', projectName: '', budget: '', projectDescription: ''
  });

=======
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const HomeProjectForm = ({ preselectedService, specialPrice, specialTitle }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', address: '', address2: '', zip: '', city: '', state: '', 
    email: '', phone: '', 
    serviceType: 'tv-mounting',
    assemblyTier: 'standard',
    helper: 'no',
    spacePrep: 'clear',
    hasLadderWork: false,
    hasHeavyLift: false,
    hasBiohazard: false,
    hasNonStandardWall: false,
    projectDescription: ''
  });

  const [submitStatus, setSubmitStatus] = useState(null);
  const [isSpecial, setIsSpecial] = useState(false);

  // Set preselected service when component loads or prop changes
  useEffect(() => {
    if (preselectedService) {
      setFormData(prev => ({
        ...prev,
        serviceType: preselectedService
      }));
    }
    if (specialPrice) {
      setIsSpecial(true);
    }
  }, [preselectedService, specialPrice]);

  // Calculate estimated price
  const calculateEstimate = () => {
    // If special price is set, use it
    if (isSpecial && specialPrice) {
      let hazardAdd = 0;
      if (formData.hasLadderWork) hazardAdd += 50;
      if (formData.hasHeavyLift) hazardAdd += 50;
      if (formData.hasBiohazard) hazardAdd += 100;
      if (formData.hasNonStandardWall) hazardAdd += 100;
      return { 
        estimated: specialPrice + hazardAdd, 
        note: `Special: ${specialTitle || 'Special Offer'} + hazards`,
        isSpecial: true 
      };
    }

    let base = 0;
    let hourly = 0;
    let cap = 0;
    let helperAdd = 0;
    let hazardAdd = 0;

    if (formData.serviceType === 'tv-mounting') {
      base = 149;
    } else if (formData.serviceType === 'drywall-patch') {
      base = 199;
    } else if (formData.serviceType === 'assembly') {
      if (formData.assemblyTier === 'standard') {
        hourly = 89;
      } else if (formData.assemblyTier === 'complex') {
        hourly = 110;
        cap = 1100;
      } else if (formData.assemblyTier === 'heavy') {
        hourly = 130;
        cap = 2600;
      }
    } else if (formData.serviceType === 'other') {
      return { estimated: 497, note: 'Custom quote', isSpecial: false };
    }

    if (formData.helper === 'yes') {
      helperAdd = 50;
    }

    if (formData.hasLadderWork) hazardAdd += 50;
    if (formData.hasHeavyLift) hazardAdd += 50;
    if (formData.hasBiohazard) hazardAdd += 100;
    if (formData.hasNonStandardWall) hazardAdd += 100;

    if (formData.serviceType === 'assembly') {
      const effectiveHourly = hourly + helperAdd;
      if (cap > 0) {
        return { estimated: cap + hazardAdd, note: `Capped at ${cap} + hazards`, isSpecial: false };
      }
      return { estimated: effectiveHourly, note: `${effectiveHourly}/hr, 1hr min`, isSpecial: false };
    }

    const total = base + hazardAdd;
    return { estimated: total, note: 'Flat rate', isSpecial: false };
  };

  const estimate = calculateEstimate();

>>>>>>> 6d035b70184908aaff21b118d39cf3f86063c40c
  const handleZipChange = async (e) => {
    const zip = e.target.value;
    setFormData({ ...formData, zip });
    if (zip.length === 5) {
      try {
        const res = await fetch(`https://api.zippopotam.us/us/${zip}`);
        if (res.ok) {
          const data = await res.json();
          setFormData(prev => ({ ...prev, city: data.places[0]['place name'], state: data.places[0]['state abbreviation'] }));
        }
      } catch (err) { console.error(err); }
    }
  };

<<<<<<< HEAD
  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const myForm = e.target;
    const formDataObj = new FormData(myForm); // Use FormData to handle file uploads
=======
  const handleChange = (e) => {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    setFormData({ ...formData, [target.name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitStatus('submitting');
    const myForm = e.target;
    const formDataObj = new FormData(myForm);
>>>>>>> 6d035b70184908aaff21b118d39cf3f86063c40c
    
    fetch("/", {
      method: "POST",
      body: formDataObj
    })
      .then(() => {
<<<<<<< HEAD
        alert("Project Request Received! We will contact you shortly.");
        navigate("/");
      })
      .catch(error => alert(error));
=======
        setSubmitStatus('success');
        alert("Project Request Received! We will contact you shortly.");
        navigate("/");
      })
      .catch(error => {
        setSubmitStatus('error');
        alert(error);
      });
>>>>>>> 6d035b70184908aaff21b118d39cf3f86063c40c
  };

  // Get friendly service name for the banner
  const getServiceName = () => {
    const names = {
      'tv-mounting': '📺 TV Mounting',
      'assembly': '🛋️ Furniture Assembly',
      'drywall-patch': '🩹 Drywall Patch',
      'other': '🔧 Other Service'
    };
    return names[formData.serviceType] || 'Service';
  };

  const isOtherSelected = formData.serviceType === 'other';

  return (
<<<<<<< HEAD
    <form onSubmit={handleSubmit} className="project-form">
      <input type="hidden" name="form-name" value="home-project" />
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
        <div className="form-group"><label>First Name*</label><input type="text" name="firstName" required onChange={handleChange} /></div>
        <div className="form-group"><label>Last Name*</label><input type="text" name="lastName" required onChange={handleChange} /></div>
      </div>
      
      <div className="form-group"><label>Street Address*</label><input type="text" name="address" required onChange={handleChange} /></div>
      <div className="form-group"><label>Apartment, Unit, Suite</label><input type="text" name="address2" onChange={handleChange} /></div>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '15px' }}>
        <div className="form-group"><label>ZIP*</label><input type="text" name="zip" required value={formData.zip} onChange={handleZipChange} maxLength="5" /></div>
        <div className="form-group"><label>City*</label><input type="text" name="city" value={formData.city} readOnly /></div>
        <div className="form-group"><label>State*</label><input type="text" name="state" value={formData.state} readOnly /></div>
      </div>

      <div className="form-group"><label>Email*</label><input type="email" name="email" required onChange={handleChange} /></div>
      <div className="form-group"><label>Phone</label><input type="tel" name="phone" onChange={handleChange} /></div>
      
      <div className="form-group"><label>Brief Project Title*</label><input type="text" name="projectName" placeholder="e.g. Kitchen Faucet Replacement" required onChange={handleChange} /></div>

      <div className="form-group">
        <label>Estimated Budget*</label>
        <select name="budget" required onChange={handleChange}>
          <option value="">Select Budget</option>
          <option value="0-1000">$0 - $1,000</option>
          <option value="1000-5000">$1,000 - $5,000</option>
          <option value="5000-10000">$5,000 - $10,000</option>
          <option value="10000plus">$10,000+</option>
        </select>
      </div>
      
      <div className="form-group"><label>Project Description*</label><textarea name="projectDescription" required onChange={handleChange} rows="5"></textarea></div>
      
      <div className="form-group">
        <label>Upload Files (Optional)</label>
        <input type="file" name="projectFileUpload" multiple accept=".pdf,.doc,.docx,.jpg,.png" />
      </div>
      
      <button type="submit" className="btn">Submit Project Request</button>
=======
    <form onSubmit={handleSubmit} className="project-form" style={{ maxWidth: '700px', margin: '0 auto' }} noValidate>
      <input type="hidden" name="form-name" value="home-project" />
      
      {/* PRESELECTED SERVICE BANNER - WITH SPECIAL PRICE */}
      {(preselectedService || isSpecial) && (
        <div 
          style={{ 
            background: isSpecial ? '#fff8e1' : '#e3f2fd',
            padding: '15px 20px', 
            borderRadius: '8px', 
            marginBottom: '20px',
            border: isSpecial ? '2px solid #ffb300' : '1px solid #90caf9',
            textAlign: 'center'
          }}
          role="status"
          aria-live="polite"
        >
          {isSpecial ? (
            <>
              <span style={{ fontWeight: 'bold', color: '#e65100', fontSize: '1.1rem' }}>
                🔥 Special Offer: {specialTitle || 'Special'}
              </span>
              <span style={{ marginLeft: '10px', fontSize: '1rem', color: '#2e7d32', fontWeight: 'bold' }}>
                ${specialPrice}
              </span>
              <span style={{ marginLeft: '8px', fontSize: '0.9rem', color: '#999', textDecoration: 'line-through' }}>
                Regular price may vary
              </span>
              <div style={{ fontSize: '0.9rem', color: '#555', marginTop: '4px' }}>
                (You can change options below if needed)
              </div>
            </>
          ) : (
            <>
              <span style={{ fontWeight: 'bold', color: '#0d47a1' }}>
                You selected: {getServiceName()}
              </span>
              <span style={{ marginLeft: '10px', fontSize: '0.9rem', color: '#555' }}>
                (You can change below if needed)
              </span>
            </>
          )}
        </div>
      )}

      <h2 style={{ textAlign: 'center' }}>Residential Service Request</h2>
      <p style={{ textAlign: 'center', color: '#666' }}>Fill out the form below and we'll get back to you within 2 hours.</p>

      {/* SERVICE SELECTION */}
      <div className="form-group" style={{ marginBottom: '20px' }}>
        <label htmlFor="serviceType" style={{ fontWeight: 'bold', display: 'block', marginBottom: '5px' }}>
          Select Service<span aria-hidden="true">*</span>
          <span className="sr-only">(required)</span>
        </label>
        <select 
          id="serviceType"
          name="serviceType" 
          required 
          aria-required="true"
          onChange={handleChange} 
          value={formData.serviceType} 
          style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
        >
          <option value="tv-mounting">📺 TV Mounting ($149)</option>
          <option value="assembly">🛋️ Furniture Assembly ($89/hr)</option>
          <option value="drywall-patch">🩹 Drywall Patch ($199+)</option>
          <option value="other">🔧 Other (Custom Quote)</option>
        </select>
      </div>

      {/* ASSEMBLY TIER - Conditional */}
      {formData.serviceType === 'assembly' && (
        <div className="form-group" style={{ marginBottom: '20px' }}>
          <label htmlFor="assemblyTier" style={{ fontWeight: 'bold', display: 'block', marginBottom: '5px' }}>
            Assembly Type<span aria-hidden="true">*</span>
            <span className="sr-only">(required)</span>
          </label>
          <select 
            id="assemblyTier"
            name="assemblyTier" 
            required 
            aria-required="true"
            onChange={handleChange} 
            value={formData.assemblyTier} 
            style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
          >
            <option value="standard">Standard (Tables, Chairs, Shelves) – $89/hr</option>
            <option value="complex">Complex (Drawers, Doors, Hinges) – $110/hr (10hr cap / $1,100 max)</option>
            <option value="heavy">Heavy Structure (Playsets, Gazebos, Outdoor Bars) – $130/hr (20hr cap / $2,600 max)</option>
          </select>
        </div>
      )}

      {/* "OTHER" INFO MESSAGE */}
      {isOtherSelected && (
        <div 
          style={{ 
            background: '#f5f5f5', 
            padding: '15px', 
            borderRadius: '8px', 
            marginBottom: '20px',
            border: '1px solid #ddd',
            textAlign: 'center'
          }}
          role="note"
        >
          <p style={{ margin: 0, color: '#333' }}>
            🔧 <strong>Custom Project</strong> – Tell us what you need and we'll provide a custom quote.
          </p>
        </div>
      )}

      {/* CONTACT INFO */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
        <div className="form-group">
          <label htmlFor="firstName">First Name<span aria-hidden="true">*</span><span className="sr-only">(required)</span></label>
          <input type="text" id="firstName" name="firstName" required aria-required="true" onChange={handleChange} value={formData.firstName} />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name<span aria-hidden="true">*</span><span className="sr-only">(required)</span></label>
          <input type="text" id="lastName" name="lastName" required aria-required="true" onChange={handleChange} value={formData.lastName} />
        </div>
      </div>
      
      <div className="form-group">
        <label htmlFor="address">Street Address<span aria-hidden="true">*</span><span className="sr-only">(required)</span></label>
        <input type="text" id="address" name="address" required aria-required="true" onChange={handleChange} value={formData.address} />
      </div>
      <div className="form-group">
        <label htmlFor="address2">Apartment, Unit, Suite</label>
        <input type="text" id="address2" name="address2" onChange={handleChange} value={formData.address2} />
      </div>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '15px' }}>
        <div className="form-group">
          <label htmlFor="zip">ZIP<span aria-hidden="true">*</span><span className="sr-only">(required)</span></label>
          <input type="text" id="zip" name="zip" required aria-required="true" value={formData.zip} onChange={handleZipChange} maxLength="5" />
        </div>
        <div className="form-group">
          <label htmlFor="city">City<span aria-hidden="true">*</span><span className="sr-only">(required)</span></label>
          <input type="text" id="city" name="city" value={formData.city} readOnly style={{ background: '#f0f0f0' }} aria-readonly="true" />
        </div>
        <div className="form-group">
          <label htmlFor="state">State<span aria-hidden="true">*</span><span className="sr-only">(required)</span></label>
          <input type="text" id="state" name="state" value={formData.state} readOnly style={{ background: '#f0f0f0' }} aria-readonly="true" />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="email">Email<span aria-hidden="true">*</span><span className="sr-only">(required)</span></label>
        <input type="email" id="email" name="email" required aria-required="true" onChange={handleChange} value={formData.email} />
      </div>
      <div className="form-group">
        <label htmlFor="phone">Phone</label>
        <input type="tel" id="phone" name="phone" onChange={handleChange} value={formData.phone} />
      </div>

      {/* HELPER TOGGLE */}
      <fieldset className="form-group" style={{ marginBottom: '20px', border: 'none', padding: 0 }}>
        <legend style={{ fontWeight: 'bold', display: 'block', marginBottom: '10px' }}>Will this job require a second person?</legend>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <label style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
            <input type="radio" name="helper" value="no" checked={formData.helper === 'no'} onChange={handleChange} style={{ width: 'auto', margin: 0 }} />
            <span>No, I will help (I'll assist with lifting, moving, and holding)</span>
          </label>
          <label style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
            <input type="radio" name="helper" value="yes" checked={formData.helper === 'yes'} onChange={handleChange} style={{ width: 'auto', margin: 0 }} />
            <span>Yes, bring a helper (+$50/hr)</span>
          </label>
        </div>
      </fieldset>

      {/* SPACE PREP */}
      <fieldset className="form-group" style={{ marginBottom: '20px', background: '#fff3e0', padding: '15px', borderRadius: '8px', border: 'none' }}>
        <legend style={{ fontWeight: 'bold', display: 'block', marginBottom: '10px' }}>📦 Work Area Preparation</legend>
        <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '10px' }}>
          Please make sure the work area is clear of furniture, boxes, and personal items before I arrive.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <label style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
            <input type="radio" name="spacePrep" value="clear" checked={formData.spacePrep === 'clear'} onChange={handleChange} style={{ width: 'auto', margin: 0 }} />
            <span>I confirm the work area is clear and accessible</span>
          </label>
          <label style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
            <input type="radio" name="spacePrep" value="needs-help" checked={formData.spacePrep === 'needs-help'} onChange={handleChange} style={{ width: 'auto', margin: 0 }} />
            <span>I need help clearing the space</span>
          </label>
        </div>
      </fieldset>

      {/* HAZARD CHECKBOXES */}
      <fieldset className="form-group" style={{ marginBottom: '20px', background: '#fce4ec', padding: '15px', borderRadius: '8px', border: 'none' }}>
        <legend style={{ fontWeight: 'bold', display: 'block', marginBottom: '10px' }}>⚠️ Difficulty / Hazard Conditions</legend>
        <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '10px' }}>Check any that apply. These will be added to your estimate.</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <label style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
            <input type="checkbox" name="hasLadderWork" checked={formData.hasLadderWork} onChange={handleChange} style={{ width: 'auto', margin: 0 }} />
            <span>Over 6ft Ladder Work (+$50)</span>
          </label>
          <label style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
            <input type="checkbox" name="hasHeavyLift" checked={formData.hasHeavyLift} onChange={handleChange} style={{ width: 'auto', margin: 0 }} />
            <span>Heavy Lifting &gt;50lbs (+$50)</span>
          </label>
          <label style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
            <input type="checkbox" name="hasBiohazard" checked={formData.hasBiohazard} onChange={handleChange} style={{ width: 'auto', margin: 0 }} />
            <span>Biohazard / Waste Area (+$100)</span>
          </label>
          <label style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
            <input type="checkbox" name="hasNonStandardWall" checked={formData.hasNonStandardWall} onChange={handleChange} style={{ width: 'auto', margin: 0 }} />
            <span>Non-Standard Wall (Brick/Concrete) (+$100)</span>
          </label>
        </div>
      </fieldset>

      {/* ESTIMATE DISPLAY */}
      <div 
        style={{ 
          background: isSpecial ? '#fff8e1' : '#e8f5e9',
          padding: '15px', 
          borderRadius: '8px', 
          marginBottom: '20px',
          border: isSpecial ? '2px solid #ffb300' : '1px solid #a5d6a7',
          textAlign: 'center'
        }}
        role="status"
        aria-live="polite"
        aria-atomic="true"
      >
        <p style={{ margin: 0, fontWeight: 'bold', color: isSpecial ? '#e65100' : '#2e7d32', fontSize: '1.1rem' }}>
          {isSpecial ? '🔥 Special Price' : 'Estimated Price'}: ${estimate.estimated}
          <span style={{ fontWeight: 'normal', fontSize: '0.9rem', marginLeft: '10px', color: '#555' }}>
            ({estimate.note})
          </span>
        </p>
        {isSpecial && (
          <p style={{ margin: '4px 0 0', fontSize: '0.85rem', color: '#e65100' }}>
            Special offer – act fast!
          </p>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="projectDescription">Project Description<span aria-hidden="true">*</span><span className="sr-only">(required)</span></label>
        <textarea id="projectDescription" name="projectDescription" required aria-required="true" onChange={handleChange} value={formData.projectDescription} rows="4" placeholder="Describe what you need help with..."></textarea>
      </div>
      
      <div className="form-group">
        <label htmlFor="projectFileUpload">Upload Files (Optional)</label>
        <input type="file" id="projectFileUpload" name="projectFileUpload" multiple accept=".pdf,.doc,.docx,.jpg,.png" />
      </div>

      {submitStatus === 'error' && (
        <p role="alert" style={{ color: 'red', marginTop: '10px', textAlign: 'center' }}>
          Error submitting your request. Please try again or call us at (253) 250-5758.
        </p>
      )}
      
      <button 
        type="submit" 
        className="btn submit-btn" 
        style={{ display: 'block', margin: '20px auto 0', width: '100%', maxWidth: '300px' }}
        disabled={submitStatus === 'submitting'}
        aria-label={submitStatus === 'submitting' ? 'Submitting your request...' : 'Submit your project request'}
      >
        {submitStatus === 'submitting' ? 'Submitting...' : 'Submit Project Request'}
      </button>
>>>>>>> 6d035b70184908aaff21b118d39cf3f86063c40c
    </form>
  );
};

export default HomeProjectForm;