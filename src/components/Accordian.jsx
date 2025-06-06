import { useState } from 'react';

const AccordionItem = ({ title, children, initialOpen }) => {
  
  const [isOpen,setIsOpen]=useState(initialOpen)

  const handleAccordion=()=>{
    setIsOpen(!isOpen)
  }

  return (
    <div className="border border-gray-300 rounded-md my-2 w-full max-w-[600px]">
      <div className="bg-gray-100 p-4 cursor-pointer flex justify-between items-center" onClick={handleAccordion} >
        <h2>{title}</h2>
        <span>{isOpen?'▲':'▼' }</span>
      </div>
      {isOpen && <div className="bg-white p-4 border-t border-gray-200">{children}</div>}
    </div>
  );
};


const Accordion = ({ menu }) => {
 
  return (
    <>
      {menu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.map((items) => {
        const cardData = items?.card?.card;
        const hasTitle = !!cardData?.title;
        const hasCategories = !!cardData?.categories;
        console.log('items details------------>',cardData?.itemCards)
        if (hasTitle && !hasCategories) {
          return (
            <AccordionItem
              key={cardData.title}
              title={cardData.title}
              initialOpen={true}
            >
              {cardData?.itemCards ? (
                cardData.itemCards.map((item) => (
                  <div key={item?.card?.info?.id} className='flex justify-around'>
                    <p>{item?.card?.info?.name}</p>
                    <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${item?.card?.info?.imageId}`} alt="" />
                  </div>
                ))
              ) : cardData?.carousel ? (
                cardData.carousel.map((item, index) => (
                  <div key={item?.dish?.info?.id || index}>
                    {item?.dish?.info?.name}
                    <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_292,h_300/${item?.dish?.info?.imageId}`} alt="" />
                  </div>
                ))
              ) : (
                <div>No content available</div>
              )}
            </AccordionItem>
          );
        } else if (hasTitle && hasCategories) {
          return (
            <div className="accordion" key={cardData?.title}>
              <h2>{cardData?.title}</h2>
              {cardData?.categories?.map((category) => (
                <AccordionItem
                  key={category?.title}
                  title={category?.title}
                  initialOpen={false}
                >
                  {category?.itemCards?.map((item) => (
                    <div key={item?.card?.info?.id}>
                      {item?.card?.info?.name}
                      <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${item?.card?.info?.imageId}`} alt="" />
                    </div>
                  ))}
                </AccordionItem>
              ))}
            </div>
          );
        }
        return null;
      })}
    </>
  );
};

export default Accordion;