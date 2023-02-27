import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from '@mui/material/Typography';
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
// import PropTypes from 'prop-types'
import "./Home.scss";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
    {
        label: "React",
        imgPath:
            "https://images.prismic.io/ionicframeworkcom/13ff7b23-d3b5-400f-98c3-3b31f2912743_hero-ionic-react%402x.png?auto=compress,format",
    },
    {
        label: "Vue",
        imgPath:
            "https://images.prismic.io/ionicframeworkcom/bbb24dd3-f799-4a98-b840-f53b13ceaa06_hero-ionic-vue%402x.png?auto=compress,format",
    },
    {
        label: "Angular",
        imgPath:
            "https://images.prismic.io/ionicframeworkcom/99b1d5e6-4a0a-4d8f-a45f-521f0643d8ac_hero-ionic-angular%402x.png?auto=compress,format.png",
    },
];

const titles = [
    { text: "Pedir un servicio de transporte asasas" },
    { text: "Ofertar el valor que desees" },
    { text: "Llegar a tu destino" },
];

export function Home() {
    return (
        <div className="home-bg">
            <section className="home-section">
                <Grid container spacing={0}>
                    <Grid item xs={12} sm={6} className="left-content">
                        {/* <h1>Con Positivo App</h1> */}
                        <Typography variant="h4">CON POSITIVO APP</Typography>
                        <AutoPlaySwipeableViews axis="x">
                            {titles.map((title, index) => (
                                <div key={title.text}>
                                    <Typography
                                        variant="h5"
                                    >
                                        {title.text}
                                    </Typography>
                                </div>
                            ))}
                        </AutoPlaySwipeableViews>
                    </Grid>
                    <Grid item xs={12} sm={6} className="right-content">
                        <AutoPlaySwipeableViews axis="x">
                            {images.map((step, index) => (
                                <div key={step.label}>
                                    <Box
                                        component="img"
                                        sx={{
                                            height: "auto",
                                            display: "block",
                                            maxWidth: 400,
                                            overflow: "hidden",
                                            width: "100%",
                                        }}
                                        src={step.imgPath}
                                        alt={step.label}
                                    />
                                </div>
                            ))}
                        </AutoPlaySwipeableViews>
                    </Grid>
                </Grid>
            </section>
        </div>
    );
}

// Home.propTypes = {}

// export default Home
