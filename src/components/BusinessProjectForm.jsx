import React from 'react';

function BusinessProjectForm() {
  return (
    <form name="BusinessProjectRequest" method="POST" data-netlify="true" action="/faq">
      <input type="hidden" name="form-name" value="BusinessProjectRequest" />
      <div className="form-group">
        <label>Company Name*</label>
        <input type="text" name="companyName" required />
      </div>
      <div className="form-group">
        <label>Contact Person*</label>
        <input type="text" name="contactName" required />
      </div>
      <div className="form-group">
        <label>Work Required*</label>
        <textarea name="details" rows="5" required></textarea>
      </div>
      <div className="form-button-wrapper">
        <button type="submit" className="btn">Submit Business Project</button>
      </div>
    </form>
  );
}

export default BusinessProjectForm;