import { StarOutline } from "@mui/icons-material";
import { Grid, Typography } from "@mui/material";

export const NothingSelectedWiew = () => {
  return (
    <Grid
      container
      spacing={0}
      direction="colum"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: "calc(100vh - 110px)", backgroundColor: "primary.main", borderRadius: 3 }}
    >
      <grid item xs={12}>
        <StarOutline sx={{ fontSize: 100, color: "white" }} />
      </grid>

      <grid item xs={12}>
        <Typography color="white" variant="h5">
          Selecciona o crea una entrada
        </Typography>
      </grid>
    </Grid>
  );
};
