export const restaurants = async()=>{
    const response = await fetch(`https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`)

    const result = await response.json()

    const restaurantsCard = result?.data?.cards.find(
    items => items?.card?.card?.id === "top_brands_for_you"
    );
    
    return restaurantsCard?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

}

export const menuCard =async(resId)=>{
    
    const menuData= await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.07480&lng=72.88560&restaurantId=`+resId)

    const menu = await menuData.json()

    return menu

}