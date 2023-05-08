import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithPopup, updateProfile,  } from "firebase/auth";
import { FirebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();

export const singInWithGoogle = async () => {
  try {
    const result = await signInWithPopup (FirebaseAuth, googleProvider);
    // const credentials = GoogleAuthProvider.credentialFromResult( result );
    
   const {displayName, email, photoURL, uid} = result.user;

   return {

    ok: true,

    displayName, email, photoURL, uid
   }


  } catch (error) {

    console.log(error)

    const errorCode = error.code;
    const errorMessage= error.errorMessage;


    return{

      ok: false,
      errorMessage,
      errorCode
    }
  }
}

export const registerUserWithEmailPasword = async ({email, password, displayName})=>{


try {


 const resp = await createUserWithEmailAndPassword (FirebaseAuth, email, password);
 const { uid, photoURL} = resp.user;

 await updateProfile ( FirebaseAuth.currentUser,{displayName} ); 



 return {

  ok: true,
  uid, photoURL, email, displayName
  
 }
  
} catch (error) {

  // console.log(error);
  return {ok:false, errorMessage: "Usuario registrado"}
  
}

}