import { useState } from 'react';

const AccordionItem = ({ title, children, initialOpen }) => {
  const [isOpen, setIsOpen] = useState(initialOpen);

  const handleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border border-gray-200 rounded-lg mb-4 shadow-sm transition-all duration-300 hover:shadow-md">
      <div 
        className="flex justify-between items-center p-4 bg-gray-50 cursor-pointer rounded-t-lg"
        onClick={handleAccordion}
      >
        <h2 className="font-bold text-gray-800 text-lg">{title}</h2>
        <span className="text-gray-500 text-lg transform transition-transform duration-300">
          {isOpen ? '▲' : '▼'}
        </span>
      </div>
      {isOpen && (
        <div className="bg-white p-4 border-t border-gray-100 rounded-b-lg">
          {children}
        </div>
      )}
    </div>
  );
};

const MenuItem = ({ item }) => {
  const isDish = item?.dish?.info;
  const info = isDish ? item.dish.info : item?.card?.info;
  const imageUrl = info?.imageId 
    ? `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${info.imageId}`
    : null;
  
  const price = info?.defaultPrice 
    ? info.defaultPrice / 100 
    : info?.price 
      ? info.price / 100 
      : null;

  return (
    <div className="flex justify-between gap-6 p-4 border-b border-gray-100 last:border-0">
      <div className="flex-grow">
        <h3 className="font-semibold text-gray-800">{info?.name}</h3>
        <p className="text-sm text-gray-600 mt-1">{info?.description}</p>
        <p className="text-gray-700 font-medium mt-2">
          {price ? `₹${price}` : 'Price not available'}
        </p>
      </div>
      
      <div className="relative flex-shrink-0">
        {imageUrl && (
          <>
            <img 
              className="w-32 h-32 object-cover rounded-lg"
              src={imageUrl} 
              alt={info?.name} 
            />
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/3">
              <button className="bg-white text-green-600 shadow-lg px-6 py-2 rounded-lg border border-gray-200 hover:bg-green-50 hover:scale-105 transition-all font-bold whitespace-nowrap cursor-pointer">
                ADD
              </button>
            </div>
          </>
        )}
        {!imageUrl && (
          <button className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-colors font-bold cursor-pointer">
            ADD
          </button>
        )}
      </div>
    </div>
  );
};

const Accordion = ({ menu }) => {
  return (
    <div className="max-w-4xl mx-auto">
      {menu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.map((items) => {
        const cardData = items?.card?.card;
        const hasTitle = !!cardData?.title;
        const hasCategories = !!cardData?.categories;

        if (hasTitle && !hasCategories) {
          return (
            <AccordionItem
              key={cardData.title}
              title={cardData.title}
              initialOpen={true}
            >
              <div className="space-y-6">
                {cardData?.itemCards ? (
                  cardData.itemCards.map((item) => (
                    <MenuItem key={item?.card?.info?.id} item={item} />
                  ))
                ) : cardData?.carousel ? (
                  cardData.carousel.map((item, index) => (
                    <MenuItem key={item?.dish?.info?.id || index} item={item} />
                  ))
                ) : (
                  <div className="text-center py-8 text-gray-500">
                    No content available
                  </div>
                )}
              </div>
            </AccordionItem>
          );
        } else if (hasTitle && hasCategories) {
          return (
            <div key={cardData?.title} className="mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                {cardData?.title}
              </h2>
              <div className="space-y-4">
                {cardData?.categories?.map((category) => (
                  <AccordionItem
                    key={category?.title}
                    title={category?.title}
                    initialOpen={false}
                  >
                    <div className="space-y-6">
                      {category?.itemCards?.map((item) => (
                        <MenuItem key={item?.card?.info?.id} item={item} />
                      ))}
                    </div>
                  </AccordionItem>
                ))}
              </div>
            </div>
          );
        }
        return null;
      })}
    </div>
  );
};

export default Accordion;