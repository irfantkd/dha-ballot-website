import React from 'react';
import Heading from '../../ui/Heading';
import Header from '../../ui/Header';
import { useGetQuery } from '../../services/apiService';
import Loader from '../../ui/Loader';

const TermAndConditions = () => {
  const { data: page } = useGetQuery({
    path: '/getAllPages?name=Disclaimer',
  });

  const pageslug = page?.data?.[0]?.slug;
  const { data, error, isLoading } = useGetQuery({
    path: `/page/${pageslug}`,
  });

  const disclaimerData = data?.data;

  return (
    <>
      <Header>
        {{
          headingText: 'Term and Conditions', // Pass the text as headingText
        }}
      </Header>
      <section className="mx-auto  my-16  w-[85%]  md:my-24">
        <Heading className="mb-8 text-center font-poppins font-medium capitalize text-black md:text-start">
          Term and Conditions
        </Heading>

        {isLoading ? (
          <Loader />
        ) : error ? (
          <p className="text-center text-red-500">
            Error loading disclaimer. Please try again later.
          </p>
        ) : disclaimerData ? (
          <p
            className="mb-5 text-center font-poppins text-sm leading-normal text-zinc-500 md:text-start"
            dangerouslySetInnerHTML={{ __html: disclaimerData.content }}
          />
        ) : (
          <>
            <p className="mb-5 text-center font-poppins text-sm leading-normal text-zinc-500 md:text-start">
              DHA Bahawalpur (“Defence Housing Authority, Bahawalpur”) maintains
              website/mobile app to provide general information to the internet
              community. Such information may be subject to amendment / updating
              / maintenance without notice.
            </p>

            <p className="mb-5 text-center font-poppins text-sm leading-normal text-zinc-500 md:text-start">
              The information contained on this website is for general
              information purposes only. The sole purpose of this website is to
              provide information to the reader. It is not intended to be used
              for investment purpose and DHA shall not be responsible for any
              such decision form the basis of any investment decision.
            </p>

            <p className="mb-5 text-center font-poppins text-sm leading-normal text-zinc-500 md:text-start">
              The information is provided by DHA Bahawalpur and whilst DHA
              Bahawalpur strives to keep the information up-to-date and correct,
              no representations or warranties of any kind, express or implied,
              about the completeness, accuracy, reliability, suitability or
              availability with respect to the website or the information,
              products, services, or related graphics including Maps contained
              on the website for any purpose whatsoever. Any reliance you place
              on such information is therefore strictly at your own risk.
            </p>

            <p className="mb-5 text-center font-poppins text-sm leading-normal text-zinc-500 md:text-start">
              Any financial projections given are illustrative only, none of the
              projections or assumptions should be taken as forecasts or
              promises on the part of DHA Bahawalpur nor should they be taken as
              implying any indication, assurance or guarantee that those
              assumptions are correct or exhaustive.
            </p>

            <p className="mb-5 text-center font-poppins text-sm leading-normal text-zinc-500 md:text-start">
              In no event DHA Bahawalpur will be liable for any loss or damage
              including without limitation, indirect or consequential loss or
              damage, or any loss or damage whatsoever arising from loss of data
              or profit arises out of or in connection with the use of this
              website.
            </p>

            <p className="mb-5 text-center font-poppins text-sm leading-normal text-zinc-500 md:text-start">
              Through this website you may be able to link to other websites
              which are not under the control of DHA Bahawalpur. DHA Bahawalpur
              has no control over the nature, content and availability of those
              sites. The inclusion of any links does not necessarily imply a
              recommendation or endorse the views expressed within them.
            </p>

            <p className="mb-5 text-center font-poppins text-sm leading-normal text-zinc-500 md:text-start">
              It is your duty to make sure you are using the latest version of a
              reliable antivirus and DHA shall not be responsible for any virus
              / malware detected as a result of visiting this website.
            </p>

            <p className="mb-5 text-center font-poppins text-sm leading-normal text-zinc-500 md:text-start">
              Every effort is made to keep the website up and running smoothly.
              However, DHA Bahawalpur takes no responsibility for and will not
              be liable for the website being temporarily unavailable due to
              technical issues beyond our control.
            </p>
          </>
        )}
      </section>
    </>
  );
};

export default TermAndConditions;
