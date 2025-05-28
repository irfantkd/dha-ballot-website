// src/services/hblPaymentService.js
import JSEncrypt from 'jsencrypt';

const PUBLIC_KEY = `-----BEGIN PUBLIC KEY-----
MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEAl24q/s0bX9jE25hNyz0J
G46R08aL7xVJ0vGroqoQLYmyQat9TEff9pcldkfcWg8irsz+6ZZAmN2uHT1fP4NQ
b4sq02sm5FfM3Z7jelKBiRgt5KAMRdvRS5gbBe+B6IB8BkQIl7ri+DlCtUQSLFXV
yeDd3ttISXTHSZcI5m3b1wYFp6jzPqd6dPZrFqKyxR0LihZRYYfP1hoaS5Kjhyqb
TjKS8+4sAlELk3LdaUsbufrMka3vtBExSCO18q+XwXvU4dKjIood+y0vJz6M9+1f
xzWgpZhmNrH0253DnWuwtpRr6c7v3S+1R+7rKJgDEgmqmk0z4GPEq8YDrOC1fDfP
r0tSn0laeYCKnBdSRtYwAqtaADHIZH95tkyEysAPJCJoFTLuKkiGBh6N/WbdPwrz
sCZj1dEtAy39D2UVgjScfwiLK1N65GKJoDNqnJCbmlX3hk6ueBTL2XaXg7hcoTcQ
l7hxzM9dsVF0Sr/9kPc4R9xQgQMopaduYc9EKkPg1H0hXuS4+UL3iQ75GoxU114t
WO/Flg8RgKhF30XEqXgXI0l9b+OKIYPJT17EKasiJDtaUncnbgBKBvRCLhqJhPro
JcJGWBr6SSTMf2ciRoZysxLc4SjQjWGpXhius2WtjxijHIkdB+k1pFY18ir+W/+b
96AMFNUJ64LHpfXOxReSlfMCAwEAAQ==
-----END PUBLIC KEY-----`;

// const PUBLIC_KEY="PUBLIC_KEY_HERE"

const PAYMENT_API_URL =
  'https://digitalbankingportal.hbl.com/hostedcheckout/api/checkout';

// Function to recursively encrypt all values in an object except USER_ID
const encryptObjectValues = (obj, encrypt) => {
  const result = {};

  for (const [key, value] of Object.entries(obj)) {
    if (key === 'USER_ID') {
      result[key] = value;
      continue;
    }

    if (typeof value === 'object' && value !== null) {
      result[key] = encryptObjectValues(value, encrypt);
    } else {
      const encrypted = encrypt.encrypt(value.toString());
      result[key] = encrypted;
    }
  }

  return result;
};

export const initiateHBLPayment = async (formData) => {
  try {
    const nameParts = formData.name.split(' ');
    const forename = nameParts[0];
    const surname = nameParts.slice(1).join(' ');

    const paymentData = {
      USER_ID: 'dhabahawalpur',
      PASSWORD: 'ZtTZJtzvXZ',
      CLIENT_NAME: 'dhabahawalpur',
      RETURN_URL:
        'https://dhabahawalpur.com/memberpayment/register_success.php',
      CANCEL_URL:
        'https://dhabahawalpur.com/memberpayment/register_success.php',
      CHANNEL: 'HBLPay_DHABahawalpur_Website',
      TYPE_ID: '0',
      ORDER: {
        DISCOUNT_ON_TOTAL: '0',
        SUBTOTAL: formData.amount.toString(),
        OrderSummaryDescription: [
          {
            ITEM_NAME: formData.plotReferenceNo,
            QUANTITY: '1',
            UNIT_PRICE: formData.amount.toString(),
            OLD_PRICE: '0',
            CATEGORY: formData.purposeOfDeposit,
            SUB_CATEGORY: formData.purposeOfDeposit,
          },
        ],
      },
      SHIPPING_DETAIL: {
        NAME: 'No Shipping',
        SHIPPING_COST: '0',
      },
      ADDITIONAL_DATA: {
        REFERENCE_NUMBER: formData.plotReferenceNo,
        CUSTOMER_ID: '123',
        CURRENCY: 'PKR',
        BILL_TO_FORENAME: forename,
        BILL_TO_SURNAME: surname,
        BILL_TO_EMAIL: formData.email,
        BILL_TO_PHONE: formData.phoneNumber,
        BILL_TO_ADDRESS_LINE: formData.address?.substring(0, 50) || '',
        BILL_TO_ADDRESS_CITY: formData.district,
        BILL_TO_ADDRESS_STATE: formData.province,
        BILL_TO_ADDRESS_COUNTRY: 'PK',
        BILL_TO_ADDRESS_POSTAL_CODE: '00000',
        MerchantFields: {
          MDD1: 'WC',
          MDD2: 'YES',
          MDD4: formData.purposeOfDeposit,
          MDD5: 'No',
          MDD7: '1',
          MDD20: 'NO',
        },
      },
    };

    const encrypt = new JSEncrypt();
    encrypt.setPublicKey(PUBLIC_KEY);

    // Encrypt all values except USER_ID
    const encryptedPayload = encryptObjectValues(paymentData, encrypt);

    const response = await fetch(PAYMENT_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(encryptedPayload),
    });

    const result = await response.json();

    if (
      result.IsSuccess &&
      result.ResponseMessage === 'Success' &&
      result.ResponseCode === 0
    ) {
      const sessionId = btoa(result.Data.SESSION_ID);
      window.location.href = `https://digitalbankingportal.hbl.com/hostedcheckout/Site/index.html#/checkout?data=${sessionId}`;
    } else {
      throw new Error(result.ResponseMessage || 'Payment initiation failed');
    }
  } catch (error) {
    console.error('Payment error:', error);
    throw error;
  }
};
