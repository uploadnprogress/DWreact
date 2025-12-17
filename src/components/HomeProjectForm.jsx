import React from 'react';

function HomeProjectForm() {
  return (
    <form name="HomeProjectRequest" method="POST" data-netlify="true" action="/faq">
      <input type="hidden" name="form-name" value="HomeProjectRequest" />
      <div className="form-group">
        <label>Full Name*</label>
        <input type="text" name="name" required />
      </div>
      <div className="form-group">
        <label>Address*</label>
        <input type="text" name="address" required />
      </div>
      <div className="form-group">
        <label>Email*</label>
        <input type="email" name="email" required />
      </div>
      <div className="form-group">
        <label>Project Details*</label>
        <textarea name="description" rows="5" required></textarea>
      </div>
      <div className="form-button-wrapper">
        <button type="submit" className="btn">Submit Home Project</button>
      </div>
    </form>
  );
}

export default HomeProjectForm;