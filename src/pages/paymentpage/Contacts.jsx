import React from 'react';
import { FaUser, FaPhoneAlt, FaBuilding } from 'react-icons/fa';

const contacts = [
  {
    id: 1,
    authority: 'DHA Bahawalpur',
    name: 'Finance Directorate',
    contactNo: '03450095095',
  },
  // {
  //   id: 2,
  //   authority: 'HBL',
  //   name: 'Mr. Hassan',
  //   contactNo: '03216802235',
  // },
];

function ContactCard({ authority, name, contactNo }) {
  return (
    <div className="transform rounded-xl bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
            <FaBuilding className="text-lg text-blue-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900">{authority}</h3>
        </div>
        <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800">
          Available
        </span>
      </div>

      <div className="space-y-3">
        <div className="flex items-center gap-3 text-gray-600">
          <FaUser className="text-gray-400" />
          <span>{name}</span>
        </div>

        <div className="flex items-center gap-3">
          <FaPhoneAlt className="text-gray-400" />
          <a
            href={`tel:${contactNo}`}
            className="text-blue-600 hover:text-blue-800 hover:underline"
          >
            {contactNo}
          </a>
        </div>
      </div>
    </div>
  );
}

function Contacts() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold text-gray-900">
          Contact Information
        </h2>
        <p className="mt-4 text-gray-600">
          Get in touch with our support team for any queries or assistance
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {contacts?.map((contact) => (
          <ContactCard
            key={contact.id}
            authority={contact.authority}
            name={contact.name}
            contactNo={contact.contactNo}
          />
        ))}

        {/* Additional Support Card */}
        <div className="rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 p-6 text-white shadow-lg">
          <div className="mb-6">
            <h3 className="text-lg font-semibold">Need More Help?</h3>
            <p className="mt-2 text-sm text-blue-100">
              Our support team is available 24/7 to assist you with any queries
            </p>
          </div>

          <a
            href="tel:+926211111518"
            className="mt-4 w-full rounded-lg bg-white px-4 py-2 text-center text-sm font-medium text-blue-600 transition-colors hover:bg-blue-50"
          >
            Contact Support
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
