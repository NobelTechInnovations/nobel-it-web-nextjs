import React from 'react';

const GoogleMap = () => {
  return (
    <div className="w-full h-[450px] overflow-hidden rounded-lg shadow-lg">
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1425.8596852623405!2d75.7027792980439!3d26.885513215596976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4b37dd34d545%3A0x6394a38273f48116!2sChordias%20Atulya%2C%20Keshupura%2C%20Jaipur%2C%20Rajasthan%20302026!5e0!3m2!1sen!2sin!4v1745761546137!5m2!1sen!2sin" 
        width="100%" 
        height="100%" 
        style={{ border: 0 }} 
        allowFullScreen 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
        title="Nobel Tech Innovation Location"
      />
    </div>
  );
};

export default GoogleMap; 