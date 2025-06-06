import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { restaurants } from "../utils/RestaurantApiCalls"
import RestaurantCard from "./RestaurantCard"


const Search =({listOfRestaurants,setFilter})=>{
  const [search,setSearch]=useState('')
  console.log(search)
  return  (
    <div className="flex gap-2 flex-grow max-w-xl">
      <input
        className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-red-500"
        placeholder="Search restaurants..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        className="px-6 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
        onClick={() => setFilter(listOfRestaurants.filter(items => 
          items?.info?.name.toLowerCase().includes(search.toLowerCase())
        ))}
      >
        Search
      </button>
    </div>
  )
}

const Filter =({listOfRestaurants,setFilter})=>{
  const [click,setClick]=useState(false)
  return  (
    <div className="flex gap-2">
      <button
        className="px-4 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
        onClick={() => {
          setClick(true)
          setFilter(listOfRestaurants.filter(items => items?.info?.avgRating > 4.3))
        }}
      >
        Filter
      </button>
      {click && (
        <button
          className="px-4 py-2 bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300 transition-colors"
          onClick={() => {
            setClick(false)
            setFilter(listOfRestaurants)
          }}
        >
          Reset
        </button>
      )}
    </div>
  )
}




  
   
const RestaurantContainer =()=>{
  const [listOfRestaurants, setRestaurants]=useState([])
  const [filterData, setFilter]=useState([])
  
  const getData = async() =>{
    const result = await restaurants()
    setRestaurants(result)
    setFilter(result)
  }

  useEffect(()=>{
   getData()
  },[])


  return (
    <>
      <div className="flex gap-2 px-5 py-3 bg-gray-50 items-center">
        <Search listOfRestaurants={listOfRestaurants} setFilter={setFilter}/>
        <Filter listOfRestaurants={listOfRestaurants} setFilter={setFilter}/>
      </div>
      <div className="flex flex-wrap gap-5 p-5 justify-center">
        <RestaurantCard listOfRestaurants={filterData}/>
      </div>
    </>
  )
   }

export default RestaurantContainer