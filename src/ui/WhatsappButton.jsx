// import React from 'react';
// import WhatsAppIcon from '../assets/images/whatsapp-icon.svg'; // Update the path to your local icon

// const WhatsAppButton = ({ phoneNumber, message, className }) => {
//   const whatsappURL = `https://wa.me/${phoneNumber.replace(
//     /\D/g,
//     ''
//   )}?text=${encodeURIComponent(message || '')}`;

//   return (
//     <a
//       href={whatsappURL}
//       target="_blank"
//       rel="noopener noreferrer"
//       className={`fixed bottom-20 right-3 z-50 flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-green-500 shadow-lg hover:bg-green-600 sm:bottom-28 sm:right-9 ${className}`}
//     >
//       <img src={WhatsAppIcon} alt="WhatsApp" className="h-8 w-8" />
//     </a>
//   );
// };

// export default WhatsAppButton;

import React, { useEffect, useState } from 'react';
import WhatsAppIcon from '../assets/images/whatsapp-icon.svg';

const WhatsAppButton = ({ phoneNumber, message, className }) => {
  const [mounted, setMounted] = useState(false);

  // This ensures the component is fully mounted before applying styles
  useEffect(() => {
    setMounted(true);
  }, []);

  const whatsappURL = `https://wa.me/${phoneNumber.replace(
    /\D/g,
    ''
  )}?text=${encodeURIComponent(message || '')}`;

  // Set base styles that will be consistent
  const baseStyles =
    'fixed z-50 flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-green-500 shadow-lg hover:bg-green-600';

  // Apply conditional rendering to ensure styles are properly applied
  if (!mounted) {
    return null; // Don't render until component is mounted
  }

  return (
    <a
      href={whatsappURL}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseStyles} bottom-20 right-3 md:bottom-28 md:right-9 ${className}`}
      style={{
        // Fallback inline styles to ensure positioning works consistently
        position: 'fixed',
        zIndex: 50,
        bottom: window.innerWidth >= 768 ? '7rem' : '5rem',
        right: window.innerWidth >= 768 ? '2.25rem' : '0.75rem',
      }}
    >
      <img src={WhatsAppIcon} alt="WhatsApp" className="h-8 w-8" />
    </a>
  );
};

export default WhatsAppButton;
