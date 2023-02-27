import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import "./Benefits.scss";

export const Benefits = () => {
    return (
        <div>
            <div className="title-container">
                <Typography variant="h4" className="title">
                    BENEFICIOS
                </Typography>
            </div>
            <Grid container spacing={1}>
                <Grid item xs={12} sm={6} className="passenger-container">
                    <Typography variant="h5">PASAJERO</Typography>
                    <Typography variant="p">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Est maiores blanditiis velit eius error vero
                        temporibus animi enim nisi impedit provident, distinctio
                        suscipit itaque eveniet iste corrupti a, placeat
                        aliquid?r
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6} className="driver-container">
                    <Typography variant="h5">CONDUCTOR</Typography>
                    <Typography variant="p">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Est maiores blanditiis velit eius error vero
                        temporibus animi enim nisi impedit provident, distinctio
                        suscipit itaque eveniet iste corrupti a, placeat
                        aliquid?r
                    </Typography>
                </Grid>
            </Grid>
        </div>
    );
};
