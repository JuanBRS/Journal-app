import { Link as RouterLink, useSearchParams } from "react-router-dom";
import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks";
import { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startCreatingUserWithEmailPaassword } from "../../store/auth/thunks";

const formData = {
  email: " ",
  password: " ",
  displayName: " ",
};

const formValidations = {
  email: [(value) => value.includes("@"), "El correo debe tener una @"],
  password: [(value) => value?.length >= 6, "El password debe tener  6 letras"],
  displayName: [(value) => value?.length >= 1, "El nombre es obligatorio"],
};

export const RegisterPage = () => {
  const dispatch = useDispatch();

  const [formSubmitted, setformSubmitted] = useState(false);

  const { status, errorMessage} = useSelector( state => state.auth);
  const isChekingAuthentication = useMemo ( () =>status === "checking", [status]);


  const {
    formState,
    displayName,
    email,
    password,
    onInputChange,
    isFormValid,
    displayNameValid,
    emailValid,
    passwordValid,
  } = useForm(formData, formValidations);

  const onSumit = (event) => {
    event.preventDefault();
    setformSubmitted(true);

    if (!isFormValid) return;

    dispatch(startCreatingUserWithEmailPaassword(formState));
  };

  return (
    <AuthLayout title="Crear una cuenta">
      <h1>FormValid: {isFormValid ? "Es valido" : "es Incorrecto"} </h1>
      <form onSubmit={onSumit}>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Nombre completo"
              type="text"
              placeholder="Juan Pablo"
              fullwidth="true"
              name="displayName"
              value={displayName}
              onChange={onInputChange}
              error={!!displayNameValid && formSubmitted}
              helperText={displayNameValid}
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="correo"
              type="email"
              placeholder="correo@google.com"
              fullwidth="true"
              name="email"
              value={email}
              onChange={onInputChange}
              error={!!emailValid && formSubmitted}
              helperText={emailValid}
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Contraseña"
              type="password"
              placeholder="Contraseña"
              fullwidth="true"
              name="password"
              value={password}
              onChange={onInputChange}
              error={!!passwordValid && formSubmitted}
              helperText={passwordValid}
            />
          </Grid>
          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item 
            xs={12}
            display={ !!errorMessage ? "" : "none"}
            >

              <Alert severity="error">{errorMessage}  </Alert>
            
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <Button
            disabled = {isChekingAuthentication}
            type="submit" variant="contained" fullwidth="true">
              Crear cuenta
            </Button>
          </Grid>
        </Grid>

        <Grid container direction="row" justifyContent="end">
          <Typography sx={{ mr: 1 }}>¿Ya tienes cuenta?</Typography>
          <Link component={RouterLink} color="inherit" to="/auth/login">
            ingresar
          </Link>
        </Grid>
      </form>
    </AuthLayout>
  );
};
