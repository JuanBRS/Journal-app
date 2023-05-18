import {
  LoginWithEmailPassword,
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

    const result = await registerUserWithEmailPasword({
      email,
      password,
      displayName,
    });
if (!result.ok) return dispatch (logout(result.errorMessage));

dispatch (login(result));
 
  }
}

export const  startLoginWithEmailPassword = ({email, password}) =>{

return async (dispatch) => {

  dispatch ( checkingCredentials ())

  const result = await LoginWithEmailPassword ({email, password});

  console.log (result);

  if (!result.ok) return dispatch (logout( result));

dispatch ( login( result ));


}
  
}