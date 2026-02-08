import { useState, useEffect } from "react";

const useRestaurantMenu = (id: string | undefined) => {
    const [menuData, setMenuData] = useState<any>(null);

    useEffect(() => {
        fetchMenu();
    }, [id]);
    const fetchMenu = async() => {
        try {
            console.log('id', id)
            let data = await fetch(`https://foodfire.onrender.com/api/menu?page-type=REGULAR_MENU&complete-menu=true&lat=12.959913533262798&lng=77.5499909&&submitAction=ENTER&restaurantId=${id}`);
            data = await data.json();
            console.log('data', data)
            const categories = data?.data?.cards
                ?.find(x => x.groupedCard)
                ?.groupedCard?.cardGroupMap?.REGULAR?.cards
                ?.filter(c => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory" || c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
                ?.map(c => ({
                id: c.card.card.categoryId || c.card.card.title,
                title: c.card.card.title,
                items: c.card.card.categories ? c.card.card.categories.flatMap(sub => sub.itemCards) : c.card.card.itemCards
                }));
                console.log('categories', categories)
            setMenuData(categories)
        } catch (error) {
            console.log(error)
        }
    }

    return {menuData}
}

//Hooks can't be async
//Don't forget to make use of states inside the hook if you want the
//component using it to re-render when the data is made available

export default useRestaurantMenu