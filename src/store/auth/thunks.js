import {
  registerUserWithEmailPasword,
  singInWithGoogle,
} from "../../firebase/providers";
import { checkingCredentials, login, logout } from "./authSlice";

export const checkingAuthentication = (email, password) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
  };
};

export const startGoogleSingIn = () => {
  return async (dispatch) => {
    dispatch(checkingCredentials());

    const result = await singInWithGoogle();
    if (!result.ok) return dispatch(logout(result.errorMessage));

    dispatch(login(result));
  };
};
export const startCreatingUserWithEmailPaassword = ({
  email,
  password,
  displayName,
}) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());

    const {ok, uid, photoURL, errorMessage} = await registerUserWithEmailPasword({
      email,
      password,
      displayName,
    });
if (!ok) return dispatch (logout({errorMessage}))

dispatch (login({uid,displayName,email, photoURL}));
 
  }
}
