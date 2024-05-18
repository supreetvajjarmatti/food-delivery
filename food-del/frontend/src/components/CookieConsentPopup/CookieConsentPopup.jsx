import React, { useState, useEffect } from 'react';
import './CookieConsentPopup.css';

const CookieConsentPopup = ({ onAccept, onReject }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const isConsentAccepted = localStorage.getItem('cookieConsent');

    if (isConsentAccepted === 'accepted') {
      setIsVisible(false);
    }
  }, []);

  const handleAccept = () => {
    setIsVisible(false);
    localStorage.setItem('cookieConsent', 'accepted');
    onAccept();
  };

  const handleReject = () => {
    setIsVisible(false);
    onReject();
  };

  return (
    <>
      {isVisible && (
        <div className="cookie-consent-popup">
          <div className="cookie-content">
            <p>We use cookies to improve your experience on our site.</p>
            <button onClick={handleAccept}>Accept</button>
            <button onClick={handleReject}>Reject</button>
          </div>
        </div>
      )}
    </>
  );
};

export default CookieConsentPopup;
