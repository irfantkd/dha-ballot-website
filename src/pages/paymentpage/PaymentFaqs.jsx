/* eslint-disable no-undef */
import React, { useState } from 'react';
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
} from '@material-tailwind/react';

const CUSTOM_ANIMATION = {
  mount: { scale: 1 },
  unmount: { scale: 0.9 },
};

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? 'rotate-180' : ''
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

const faqData = [
  {
    title: 'How to Pay via Credit Card',
    description: `Step 1. Visit "Pay Now" link and fill the form\n
Step 2. Enter all required fields and select payment option "Pay Via Credit Card"\n
Step 3. Deposit payment via Internet Payment Gateway (Visa Card/ Master Card / Union Pay)\n
Step 4. For query contact us at: +92 62 111 111 518 or email: info.fin@dhabahawalpur.com or Mobile: 03450095095\n
Note:\n
a. "Transfer Services Charges" from the Credit Card users will be deducted by Bank from the paid amount\n
b. Customer required to include "Transfer Service Charges" in principal amount prior to process of payment`,
  },
  {
    title: 'Why I have to enter captcha at the end of application form?',
    description:
      'This procedure is adopted to make your transactions secure & safe.',
  },
  {
    title: 'What are steps to Pay Online?',
    description: `Dear Valued Customer Follow these steps for successful submission of Credit Card Payments:\n
1. Check your card is open for e-commerce transaction.\n
2. Fill and proceed form in due time (5 Min max). Otherwise your connected session will expire and you need to start as fresh.\n
3. Furthermore, Kindly insert your details in the given format: Full Name (mention on CNIC/NICOP/Credit Card , No Extra Space in Name); Email(should be correct); Contact# (format= 92xxxxxxxxx); Address(should be compact, not so long and without Special Characters, No Extra Spaces, Avoid Enter Keys ); Credit Card (Visa / Master / Union Pay).`,
  },
  {
    title: 'What are WhatsApp numbers for contact?',
    description: 'For Online Forms Query (WhatsApp): 03450095095',
  },
  {
    title: 'I am submitting payment from USA OR Canada but having problem?',
    description: `Dear Valued Customer, USA and Canada "Country and State Names are showing restrictions". Our Technical Team are working on our side to resolve this issue. Meanwhile you can either wait for few days and apply again, OR you can select "Country" as "Pakistan" but insert address and phone of your present residential country and proceed.`,
  },
  {
    title: 'Can I use my debit card?',
    description: `Dear Valued Customer, You can perform all the transactions online through "Credit Card" only. However, any debit card with logo of "Visa" or "Master Card" is also acceptable. Thanks for contacting us.`,
  },
];

function PaymentFaqs() {
  const [open, setOpen] = useState(null);

  const handleOpen = (index) => setOpen(open === index ? null : index);

  return (
    <>
      <section>
        <div className="w-[85%] mx-auto my-16 md:my-24">
          <div >
            {faqData.length > 0 ? (
              faqData?.map((faq, index) => (
                <div
                  key={index}
                  className="rounded-xl bg-brand-white p-3 font-poppins"
                >
                  <Accordion
                    open={open === index}
                    animate={CUSTOM_ANIMATION}
                    icon={<Icon id={index} open={open} />}
                  >
                    <AccordionHeader
                      onClick={() => handleOpen(index)}
                      className="font-poppins"
                    >
                      {faq.title}
                    </AccordionHeader>
                    <AccordionBody className="whitespace-pre-line font-poppins">
                      {faq.description}
                    </AccordionBody>
                  </Accordion>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-500">
                No FAQs found for your search.
              </p>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default PaymentFaqs;
