import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout, login } from "../store/auth/authSlice";
import { FirebaseAuth } from "../firebase/config";

export const useCheckAuth = () => {
  const { status } = useSelector((state) => state.auth);

  const dispath = useDispatch();

  useEffect(() => {
    onAuthStateChanged(FirebaseAuth, async (user) => {
      console.log(user)
      if (!user) return dispath(logout());
      const { uid, email, displayName, photoURL } = user;
      dispath(login({ uid, email, displayName, photoURL }));
    });
  }, []);

  return status;
};
