// eslint-disable-next-line import/no-anonymous-default-export
export default (state = "", action) => {
  switch (action.type) {
    case "AUTHRESTAURANT":
      return action.payload
    case "LEAVE":
      return null
    default:
      return state
  }
}
