import React from "react";
import PropTypes from "prop-types";
import Link from "@mui/material/Link";
import "./Logo.scss";

function Logo(props) {
    return (
        <Link href="#" underline="none">
            <img src={props.src} className="positivo-logo" alt="logo" />
        </Link>
    );
}

Logo.propTypes = {
    src: PropTypes.string,
};

export default Logo;
