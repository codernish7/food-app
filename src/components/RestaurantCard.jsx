import { Link } from "react-router-dom"

const RestaurantCard = ({ listOfRestaurants }) => {
   if(listOfRestaurants.length === 0) {
    return (
      <div className='shimmerParent'>
        {[...Array(10)].map((_, index) => (
          <div key={index} className="shimmerUI"></div>
        ))}
      </div>
    )
  }

  return (
    <div className="flex flex-wrap gap-5 p-5 justify-center">
      {listOfRestaurants.map((items) => (
        <Link
          key={items?.info?.id}
          to={`restaurant/${items?.info?.id}`}
          className="w-72 transform transition duration-300 hover:-translate-y-1 hover:shadow-lg"
        >
          <div className="border border-gray-200 rounded-lg overflow-hidden bg-white h-full flex flex-col">
            <div className="h-48 overflow-hidden relative">
              <img
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${items?.info?.cloudinaryImageId}`}
                alt={items?.info?.name}
              />
              
              {items?.info?.aggregatedDiscountInfoV3 && (
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
                  <p className="text-white font-bold text-lg">
                    {items?.info?.aggregatedDiscountInfoV3?.header}{" "}
                    {items?.info?.aggregatedDiscountInfoV3?.subHeader}
                  </p>
                </div>
              )}
            </div>
            
            <div className="p-4 flex-grow">
              <h3 className="font-semibold text-gray-800 mb-2 truncate">
                {items?.info?.name}
              </h3>
              <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                {items?.info?.cuisines.join(', ')}
              </p>
              <div className="flex justify-between text-sm text-gray-700 mt-auto">
                <span>🕒 {items?.info?.sla?.deliveryTime} min</span>
                <span className="flex items-center">
                  ⭐ {items?.info?.avgRating}
                </span>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default RestaurantCard