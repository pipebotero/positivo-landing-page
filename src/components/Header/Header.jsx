import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import logoImage from "../../logo.svg";
import Logo from "../Logo/Logo";
import NavContainer from "../NavContainer/NavContainer";
import HeaderSocial from "../HeaderSocial/HeaderSocial";
import "./Header.scss";

export function Header() {
    return (
        <header>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={2}>
                        <Logo src={logoImage} />
                    </Grid>
                    <Grid item xs={10}>
                        <Stack
                            direction="row"
                            divider={
                                <Divider orientation="vertical" flexItem />
                            }
                            spacing={2}
                        >
                            <NavContainer direction="row"/>
                            <HeaderSocial />
                        </Stack>
                    </Grid>
                </Grid>
            </Box>
        </header>
    );
}
