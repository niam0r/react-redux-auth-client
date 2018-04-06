

export function signinUser({ email, password }) {
  // redux-thunk give us access to dispatch
  return function(dispatch) {
    //  submit email and password to the server

    // if req is good:
    // - update state to indicate user is auth'd
    // - save the JWT token
    // - redirect to the route '/feature'

    // if req is bad:
    // - show error to the user
  }
}
