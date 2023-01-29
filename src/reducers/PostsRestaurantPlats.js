// eslint-disable-next-line import/no-anonymous-default-export
export default (PostsResaurantPlats = [], action) => {
  switch (action.type) {
    case "FETCHALL":
      return action.payload

    case "CREATE":
      return [...PostsResaurantPlats, action.payload]

    default:
      return PostsResaurantPlats
  }
}
