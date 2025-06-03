import { useState } from 'react';
import Button from '../../ui/Button';
import Header from '../../ui/Header';

function HowToApply() {
  const [language, setLanguage] = useState('urdu');

  const toggleLanguage = () => {
    setLanguage(language === 'urdu' ? 'english' : 'urdu');
  };

  const urduContent = (
    <div className="space-y-6 text-gray-800" dir="rtl">
      <h2 className="text-right text-3xl font-bold tracking-tight">
        بیلٹ فارم کے لیے ہدایات
      </h2>
      <ol className="list-inside list-decimal space-y-4 text-right text-lg">
        <li>
          فارم پُر کرنے کے بعد بنک میں چالان ادا کریں اور پھر بیلٹ فارم بنک میں
          جمع کروائیں یا مندرجہ ذیل پتہ پر 15 نومبر 2021 تک ارسال کریں:
          <br />
          <span className="font-semibold text-gray-900">
            ڈی۔ ایچ۔ اے بہاولپور، جناح ایونیو، سیکٹر بی، مین بلیوارڈ 2، احمد پور
            ایسیٹ، کینال روڈ، بہاولپور۔
          </span>
        </li>
        <li>
          احتیاط کے لیے، آپ اپنا فارم بنک چالان کی ادائیگی کے بعد اس کی تصویر
          فراہم کردہ نمبر پر واٹس ایپ بھی کر سکتے ہیں، لیکن قرعہ اندازی میں شامل
          ہونے کے لیے اصل فارم کا پہنچنا لازمی ہے۔
        </li>
      </ol>
      <div className="mt-6 text-right">
        <h3 className="text-xl font-semibold tracking-tight">نوٹ:</h3>
        <ul className="list-inside list-disc space-y-2 text-lg">
          <li>
            آن لائن فارم کی شکایات کے لیے اس نمبر پر رابطہ کریں:{' '}
            <span className="font-semibold text-gray-900">
              03448739716 (واٹس ایپ)
            </span>
          </li>
          <li>
            مینوئل فارم کی شکایات کے لیے اس نمبر پر رابطہ کریں:{' '}
            <span className="font-semibold text-gray-900">
              03448739714 (واٹس ایپ)
            </span>
          </li>
        </ul>
      </div>
    </div>
  );

  const englishContent = (
    <div className="space-y-6 text-left text-gray-800">
      <h2 className="text-3xl font-bold tracking-tight">
        Instructions for Ballot Form
      </h2>
      <ol className="list-inside list-decimal space-y-4 text-lg">
        <li>
          After filling out the form, pay the challan at the bank and then
          submit the ballot form to the bank or send it to the following address
          by November 15, 2021:
          <br />
          <span className="font-semibold text-gray-900">
            DHA Bahawalpur, Jinnah Avenue, Sector B, Main Boulevard 2, Ahmedpur
            East, Canal Road, Bahawalpur.
          </span>
        </li>
        <li>
          For caution, you can also send a picture of your form via WhatsApp to
          the provided number after paying the bank challan, but for inclusion
          in the draw, it is mandatory for the original form to reach the
          specified address.
        </li>
      </ol>
      <div className="mt-6">
        <h3 className="text-xl font-semibold tracking-tight">Note:</h3>
        <ul className="list-inside list-disc space-y-2 text-lg">
          <li>
            For complaints regarding online forms, contact this number:{' '}
            <span className="font-semibold text-gray-900">
              03448739716 (WhatsApp)
            </span>
          </li>
          <li>
            For complaints regarding manual forms, contact this number:{' '}
            <span className="font-semibold text-gray-900">
              03448739714 (WhatsApp)
            </span>
          </li>
        </ul>
      </div>
    </div>
  );

  return (
    <>
      <Header>
        {{
          headingText: 'How To Apply',
        }}
      </Header>
      <div className="flex min-h-screen items-start justify-center bg-gray-100 p-4">
        <div className="flex w-full max-w-6xl flex-col gap-6 rounded-lg bg-white p-6 shadow-xl md:flex-row md:gap-x-12">
          {/* Left Section: Instructions */}
          <div className="w-full md:w-1/2">
            <div className="mb-6 flex justify-end">
              <Button
                onClick={toggleLanguage}
                type="primary"
                size="medium"
                aria-label={
                  language === 'urdu' ? 'Switch to English' : 'Switch to Urdu'
                }
              >
                {language === 'urdu'
                  ? 'Switch to English'
                  : 'اردو میں تبدیل کریں'}
              </Button>
            </div>
            {language === 'urdu' ? urduContent : englishContent}
          </div>

          {/* Right Section: Video */}
          <div className="flex w-full items-center justify-center md:w-1/2">
            <div className="aspect-video w-full overflow-hidden rounded-lg shadow-lg">
              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/your-video-id" // 🔁 Replace with actual video ID
                title="How to Apply Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HowToApply;
