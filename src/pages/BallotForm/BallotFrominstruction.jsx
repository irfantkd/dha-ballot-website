
import React from 'react';

function BallotFrominstruction() {
  return (
    <div className=" bg-white p-2 sm:p-6 rounded-lg  text-sm leading-relaxed border-2 xl:mr-10">
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
