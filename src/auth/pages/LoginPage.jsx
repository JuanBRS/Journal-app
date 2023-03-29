import { useDispatch } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import { Google } from "@mui/icons-material";
import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks";
import { checkingAuthentication, startGoogleSingIn } from "../../store/auth/thunks";



export const LoginPage = () => {

  const dispatch = useDispatch ();

const {email, password, onInputChange}= useForm ({
  
  email:"juanpablo@gmail.com",
  password : "1234"
});

const onSubmit = (event) =>{

  event.preventDefault();
  console.log ({email, password});
  dispatch ( checkingAuthentication ());

}

const onGoogleSingIn = ()=>{

   console.log('onGoogleSingIn');

   dispatch ( startGoogleSingIn());
}



  return (
    <AuthLayout title="Login">
      <form onSubmit ={onSubmit} >
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="correo"
              type="email"
              placeholder="correo@google.com"
              fullWidth
              name= "email"
              value={email}
              onChange={onInputChange}
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Contraseña"
              type="password"
              placeholder="contraseña"
              fullWidth
              name= "password"
              value={password}
              onChange={onInputChange}
            />
          </Grid>

          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12} sm={6}>
              <Button type="submit" variant="contained" fullWidth>
                Login
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button 
              variant="contained" 
              fullWidth
              onClick={onGoogleSingIn}>
                <Google />
                <Typography sx={{ ml: 1 }}>Google</Typography>
              </Button>
            </Grid>
          </Grid>
          <Grid container  justifyContent="end">
            <Link component={RouterLink} color="inherit" to="/auth/register">
              crear una cuenta
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
