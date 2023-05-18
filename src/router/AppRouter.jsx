import { Navigate, Route, Routes } from "react-router-dom";
import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { JournalRoutes } from "../journal/routes/JournalRoutes";
import { useDispatch, useSelector } from "react-redux";
import { CheckingAuth } from "../ui/components/checkingAuth";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { FirebaseAuth } from "../firebase/config";
import { login, logout } from "../store/auth/authSlice";

export const AppRouter = () => {
  const { status } = useSelector((state) => state.auth);

  const dispath = useDispatch();

  useEffect(() => {
    onAuthStateChanged(FirebaseAuth, async (user) => {
      if (!user) return dispath(logout());

      const { uid, email, displayName, photoURL } = user;

      dispath(login({ uid, email, displayName, photoURL }));
    });
  }, []);

  if (status === "checking") {
    return <CheckingAuth />;
  }

  return (
    <Routes>

      {





 <Route path="/auth/*" element={<AuthRoutes />} /> 

      }

      <Route path="/*" element = { <Navigate to = "/auth/login"/>}/>
   

      {/* <Route path="/auth/*" element={<AuthRoutes />} /> */}

      {/* // <Route path="/*" element={<JournalRoutes />} /> */}
    </Routes>
  );
};
