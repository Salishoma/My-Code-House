/*
Given the array restaurants where  restaurants[i] = [idi, ratingi, veganFriendlyi, pricei, distancei]. You have to filter the restaurants using three filters.

The veganFriendly filter will be either true (meaning you should only include restaurants with veganFriendlyi set to true) or false (meaning you can include any restaurant). In addition, you have the filters maxPrice and maxDistance which are the maximum value for price and distance of restaurants you should consider respectively.

Return the array of restaurant IDs after filtering, ordered by rating from highest to lowest. For restaurants with the same rating, order them by id from highest to lowest. For simplicity veganFriendlyi and veganFriendly take value 1 when it is true, and 0 when it is false.

LeetCode: 1333. Filter Restaurants by Vegan-Friendly, Price and Distance
*/

var filterRestaurants = function(restaurants, veganFriendly, maxPrice, maxDistance) {
    const arr = [];
    for(let restaurant of restaurants){
        const [id,rating,vegan,price,dist] = restaurant;
        if( price <= maxPrice && dist <= maxDistance && veganFriendly<= vegan){
            arr.push([rating, id]);
        }
    }
    return arr.sort((a, b) => {
        if(a[0] === b[0]) return b[1] - a[1];
        return b[0] - a[0];
    }).map((x) => x[1])
};
filterRestaurants([[1,4,1,40,10],[2,8,0,50,5],[3,8,1,30,4],[4,10,0,10,3],[5,1,1,15,1]],1,50,10)