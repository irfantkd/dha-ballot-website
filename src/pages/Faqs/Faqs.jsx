/* eslint-disable no-undef */
import React, { useEffect, useState } from 'react';
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
} from '@material-tailwind/react';
import Header from '../../ui/Header';
import Search from '../../ui/Search';
import { useGetQuery } from '../../services/apiService';
import CategoriesTabs from '../../ui/CategoriesTabs';
import useCategories from '../../hooks/useCategories';
import Loader from '../../ui/Loader';
import Pagination from '../../ui/Pagination';
// get download categories by type

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

function Faqs() {
  const [open, setOpen] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState(''); // Initial state as empty
  const [categories, setCategories] = useState([]);
  const { categories: categoryData } = useCategories({ type: 'faqs' });
  const [isTabLoading, setIsTabLoading] = useState(true); // Initially true to show the loader
  const [cardsPerPage, setCardsPerPage] = useState(12);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setCategories(
      categoryData.filter(({ category_name }) => category_name !== 'Faqs')
    );
  }, [categoryData]);

  // Set activeTab when categories state is updated
  useEffect(() => {
    if (categories?.length > 0) {
      setActiveTab(categories[0].id); // Set the first category id by default
    }
  }, [categories]);

  const { data, isLoading } = useGetQuery({
    path: activeTab && `/section/faqs?category_id=${activeTab}`,
  });

  const handleOpen = (index) => setOpen(open === index ? null : index);

  // Extract and filter FAQs from API response
  const faqs = data?.data?.section_data || [];

  useEffect(() => {
    if (activeTab) {
      setIsTabLoading(true);
      setCurrentPage(1);
    }
  }, [activeTab]);

  useEffect(() => {
    if (!isLoading && data) {
      setIsTabLoading(false);
    }
  }, [isLoading, data]);

  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.description.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = filteredFaqs?.slice(indexOfFirstCard, indexOfLastCard);

  return (
    <>
      <section>
        <Header>
          {{
            headingText: 'FAQS', // Pass the text as headingText
            searchComponent: (
              <Search
                placeholder="Search By Title"
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                handelclearesearch={() => setSearchTerm('')}
              />
            ),
          }}
        </Header>{' '}
        <div className="mx-auto my-16 w-[85%] md:my-24">
          <div className="mb-9 ml-auto flex w-full justify-center md:justify-end">
            <CategoriesTabs
              dummyData={categories}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
          </div>
          <div className="mx-auto my-24 space-y-3">
            {isLoading || isTabLoading ? (
              <Loader />
            ) : currentCards.length > 0 ? (
              currentCards?.map((faq, index) => (
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
                      className="font-poppins capitalize"
                    >
                      {faq.title}
                    </AccordionHeader>
                    <AccordionBody className="font-poppins">
                      <p
                        className="mb-5 text-center font-poppins text-base leading-normal text-zinc-500 md:text-start"
                        dangerouslySetInnerHTML={{ __html: faq.description }}
                      />
                    </AccordionBody>
                  </Accordion>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-500">
                No FAQs found for your search.
              </p>
            )}

            {faqs?.length > 12 && (
              <Pagination
                totalCards={faqs?.length}
                cardsPerPage={cardsPerPage}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                siblingCount={1}
                setCardsPerPage={setCardsPerPage}
              />
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default Faqs;
