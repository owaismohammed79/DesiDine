import React from 'react'
import { useParams } from 'react-router'
import useRestaurantMenu from '../utils/useRestaurantMenu'

function RestaurantMenu() {
  const id = useParams()
  useRestaurantMenu(id)

  return (
    <div>
        
    </div>
  )
}

export default RestaurantMenu