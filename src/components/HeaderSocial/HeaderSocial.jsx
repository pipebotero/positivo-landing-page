import React from "react";
import PropTypes from "prop-types";
import Stack from "@mui/material/Stack";
import Link from "@mui/material/Link";
import InstagramIcon from "@mui/icons-material/Instagram";

function HeaderSocial(props) {
    return (
        <Stack>
            <Link
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener"
                underline="none"
                color="secondary"
            >
                <InstagramIcon />
            </Link>
        </Stack>
    );
}

HeaderSocial.propTypes = {};

export default HeaderSocial;
