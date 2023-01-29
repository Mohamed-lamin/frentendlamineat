// eslint-disable-next-line import/no-anonymous-default-export
export default (Restaurant = [], action) => {
  switch (action.type) {
    case "FETCHALLABOUTRESTAURANT":
      return action.payload

    case "CREATERestauant":
      return [...Restaurant, action.payload]

    default:
      console.log(Restaurant)
      return Restaurant
  }
}
