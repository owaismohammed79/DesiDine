

const useRestaurantMenu = async ({id}) => {
    
    try {
        console.log('id', id)
        let data = await fetch(`https://foodfire.onrender.com/api/menu?page-type=REGULAR_MENU&complete-menu=true&lat=12.959913533262798&lng=77.5499909&&submitAction=ENTER&restaurantId=${id}`);
        data = await data.json();
        console.log(data)
        const categories = data?.cards
            ?.find(x => x.groupedCard)
            ?.groupedCard?.cardGroupMap?.REGULAR?.cards
            ?.filter(c => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory")
            ?.map(c => ({
            title: c.card.card.title,
            items: c.card.card.categories.flatMap(sub => sub.itemCards)
            }));
    } catch (error) {
        console.log(error)
    }
}

export default useRestaurantMenu