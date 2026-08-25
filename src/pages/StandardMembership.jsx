import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';

const StandardMembership = () => {
  const navigate = useNavigate();

  const handleApply = (tierName) => {
    navigate('/membership-application', { state: { selectedTier: tierName } });
  };

  return (
    <div className="form-section">
      <Helmet><title>The DoneWright Standard | Premium Property Care</title></Helmet>
      
      <div className="form-container" style={{ maxWidth: '1100px', margin: '0 auto', padding: '40px' }}>
        
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h1 className="section-title">The DoneWright Standard</h1>
          <p style={{ fontSize: '20px', color: '#444', marginBottom: '20px' }}>
            Premium property care, zero coordination fees.
          </p>
          <div style={{ background: '#e6f2ff', border: '2px solid #007bff', padding: '15px 20px', borderRadius: '8px', display: 'inline-block', fontWeight: 'bold', color: '#0056b3' }}>
            ⚡ Special Offer: Your Initial Setup Fee is completely waived if you book a qualifying project within 48 hours of your Initial Safety Audit.
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', marginBottom: '60px' }}>
          <div style={{ padding: '20px', borderLeft: '4px solid #007bff', background: '#f8f9fa' }}>
            <h3 style={{ marginBottom: '10px' }}>$0 Coordination Fees</h3>
            <p>You never pay the 5% client fee on any project. We only collect from our network contractors.</p>
          </div>
          <div style={{ padding: '20px', borderLeft: '4px solid #007bff', background: '#f8f9fa' }}>
            <h3 style={{ marginBottom: '10px' }}>Vetted Priority Access</h3>
            <p>Skip the line. Standard members get matched and scheduled with our elite pros first.</p>
          </div>
          <div style={{ padding: '20px', borderLeft: '4px solid #007bff', background: '#f8f9fa' }}>
            <h3 style={{ marginBottom: '10px' }}>Preventative Care</h3>
            <p>Move from reactive repairs to proactive management with our comprehensive Safety Audits.</p>
          </div>
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid #eee', marginBottom: '50px' }} />

        <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>Select Your Standard</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', marginBottom: '40px' }}>
          
          {/* TIER 1: FLEX */}
          <div style={{ border: '1px solid #ddd', padding: '30px', borderRadius: '8px', textAlign: 'center', background: '#fff', display: 'flex', flexDirection: 'column' }}>
            <h3 style={{ fontSize: '22px' }}>The Flex Standard</h3>
            <p style={{ fontSize: '32px', fontWeight: 'bold', color: '#007bff', margin: '15px 0' }}>$249 <span style={{fontSize: '16px', color: '#666', fontWeight: 'normal'}}>/mo</span></p>
            <p style={{ fontSize: '14px', color: '#666' }}>$499 Initial Setup Fee</p>
            <hr style={{ margin: '20px 0' }}/>
            <ul style={{ listStyle: 'none', padding: 0, textAlign: 'left', lineHeight: '2.2', fontSize: '15px', flexGrow: 1 }}>
              <li>✅ <strong>Monthly:</strong> 1st-Hour Free Labor Credit</li>
              <li>✅ <strong>Annually:</strong> 1x 20-Point Safety Audit</li>
              <li>✅ <strong>Always:</strong> $0 Client Coordination Fees</li>
              <li>✅ <strong>Access:</strong> On-demand vetted pros</li>
            </ul>
            <button onClick={() => handleApply('The Flex Standard')} className="btn submit-btn" style={{ width: '100%', marginTop: '20px' }}>Apply for Flex</button>
          </div>

          {/* TIER 2: ESTATE */}
          <div style={{ border: '3px solid #007bff', padding: '30px', borderRadius: '8px', textAlign: 'center', position: 'relative', background: '#fff', transform: 'scale(1.02)', boxShadow: '0 10px 20px rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column' }}>
            <div style={{ position: 'absolute', top: '-15px', left: '50%', transform: 'translateX(-50%)', background: '#007bff', color: 'white', padding: '5px 20px', borderRadius: '20px', fontSize: '12px', fontWeight: 'bold', letterSpacing: '1px' }}>MOST POPULAR</div>
            <h3 style={{ fontSize: '22px' }}>The Estate Standard</h3>
            <p style={{ fontSize: '32px', fontWeight: 'bold', color: '#007bff', margin: '15px 0' }}>$399 <span style={{fontSize: '16px', color: '#666', fontWeight: 'normal'}}>/mo</span></p>
            <p style={{ fontSize: '14px', color: '#666' }}>$999 Initial Setup Fee</p>
            <hr style={{ margin: '20px 0' }}/>
            <ul style={{ listStyle: 'none', padding: 0, textAlign: 'left', lineHeight: '2.2', fontSize: '15px', flexGrow: 1 }}>
              <li style={{ color: '#007bff', fontWeight: 'bold', marginBottom: '10px' }}>⚡ Everything in Flex, plus:</li>
              <li>✅ <strong>Quarterly:</strong> The Preventative Drop <br/><span style={{ fontSize: '12px', color: '#666', fontWeight: 'normal', marginLeft: '25px' }}>(Premium Filters & Batteries Delivered)</span></li>
              <li>✅ <strong>Upgraded:</strong> Quarterly Safety Audits</li>
              <li>✅ <strong>Access:</strong> Priority VIP Scheduling</li>
            </ul>
            <button onClick={() => handleApply('The Estate Standard')} className="btn submit-btn" style={{ width: '100%', marginTop: '20px' }}>Apply for Estate</button>
          </div>

          {/* TIER 3: PORTFOLIO */}
          <div style={{ border: '1px solid #ddd', padding: '30px', borderRadius: '8px', textAlign: 'center', background: '#fff', display: 'flex', flexDirection: 'column' }}>
            <h3 style={{ fontSize: '22px' }}>The Portfolio Standard</h3>
            <p style={{ fontSize: '32px', fontWeight: 'bold', color: '#007bff', margin: '15px 0' }}>$699 <span style={{fontSize: '16px', color: '#666', fontWeight: 'normal'}}>/mo</span></p>
            <p style={{ fontSize: '14px', color: '#666' }}>$2,499 Initial Setup Fee</p>
            <hr style={{ margin: '20px 0' }}/>
            <ul style={{ listStyle: 'none', padding: 0, textAlign: 'left', lineHeight: '2.2', fontSize: '15px', flexGrow: 1 }}>
              <li style={{ color: '#007bff', fontWeight: 'bold', marginBottom: '10px' }}>⚡ Everything in Estate, plus:</li>
              <li>✅ <strong>Always:</strong> Zero-Fee Emergency Dispatch</li>
              <li>✅ <strong>Upgraded:</strong> Monthly Property Audits</li>
              <li>✅ <strong>Dedicated:</strong> Personal Account Lead</li>
            </ul>
            <button onClick={() => handleApply('The Portfolio Standard')} className="btn submit-btn" style={{ width: '100%', marginTop: '20px' }}>Apply for Portfolio</button>
          </div>

        </div>

        {/* === CLEAN WAIVER LOGISTICS SECTION === */}
        <div style={{ background: '#f0f4f8', padding: '25px', borderRadius: '8px', border: '1px solid #d9e2ec', maxWidth: '850px', margin: '0 auto 50px auto', textAlign: 'center' }}>
          <p style={{ fontSize: '15px', color: '#334e68', fontStyle: 'italic', margin: '0', lineHeight: '1.6' }}>
            *To trigger the Initiation Setup Fee waiver, your first qualifying project must be booked and deposited within 48 hours of receiving your Initial Safety Audit. Minimum qualifying project totals apply based on your tier: $500 for Flex, $1,000 for Estate, and $2,500 for Portfolio. Waived fees apply to the initiation cost only; standard monthly recurring dues apply immediately upon activation.
          </p>
        </div>

      </div>
    </div>
  );
};

export default StandardMembership;