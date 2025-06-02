import React from 'react';

const PaymentDetails = () => {
  return (
    <div className="p-6">
      <div className="">
        <p className="mb-4">
          All Payments will be made through bank draft / pay order in favour of
          "Defence Housing Authority Bahawalpur" along with covering letter
          containing particulars i.e. Plot / File No, Complete Name, Father /
          Husband Name, CNIC / NICOP Number, Address, Contact Number.
        </p>
        <p className="mb-6">
          For online payments (Overseas Clients) contact: 0345 009 5095 (09:00 AM to 05:00 PM)
          <br />
          For Transfer and Record Documentations (Overseas Clients) contact: <b>0344 873 9714</b> (09:00 AM to 05:00 PM)
        </p>

        <h2 className="text-xl font-semibold mb-4">HBL Online Account Details</h2>
        <div className="mb-6">
          <p><strong>Account Title:</strong> DHA Bahawalpur</p>
          <p><strong>For Overseas:</strong> PK 15HABB000870-79018075-01</p>
          <p><strong>For Pakistan's:</strong> 79018075-1</p>
          <p><strong>Branch Code:</strong> 0870</p>
          <p><strong>NTN:</strong> 0801647-0</p>
          <p><strong>Address:</strong> HBL Ghallah Mandi Branch Bahawalpur</p>
          <p><strong>Finance Br Email:</strong> info.finance@dhabahawalpur.com</p>
          <p><strong>Alternate Email:</strong> AM.Finance@dhabahawalpur.com</p>
          <p><strong>Finance Branch WhatsApp:</strong> 0345-0095095 / 0310-6954430</p>
        </div>

        <h2 className="text-xl font-semibold mb-4">
          Following information required along with deposit slip:
        </h2>
        <ul>
          <li>Name</li>
          <li>CNIC</li>
          <li>Plot Ref #</li>
          <li>Plot No</li>
          <li>Sector</li>
          <li>Phone No</li>
        </ul>
      </div>
    </div>
  );
};

export default PaymentDetails;
