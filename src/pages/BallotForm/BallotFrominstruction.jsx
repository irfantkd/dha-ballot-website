// import React from 'react';

// function BallotFrominstruction() {
//   return (
//     <div className="max-h-fit bg-white p-6">
//       Important Instructions: 
//       -- Fill your form fields as per given format (like
//       Cell Number 923xxxxxxxxx) -- Enter valid email which should not contain
//       special characters
//        -- For country "USA" OR "Canada" please select
//       respective Province/ State
//     </div>
//   );
// }

// export default BallotFrominstruction;


import React from 'react';

function BallotFrominstruction() {
  return (
    <div className="w-full bg-white p-4 sm:p-6 rounded-lg shadow-sm text-sm leading-relaxed">
      <h2 className="text-lg font-semibold mb-2 text-gray-800">Important Instructions:</h2>
      <ul className="list-disc pl-5 space-y-1 text-gray-700">
        <li>Fill your form fields as per given format (e.g., Cell Number: 923xxxxxxxxx).</li>
        <li>Enter a valid email address that does not contain special characters.</li>
        <li>For country "USA" or "Canada", please select the respective Province/State.</li>
      </ul>
    </div>
  );
}

export default BallotFrominstruction;
