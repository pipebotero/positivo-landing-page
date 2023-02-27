import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";
import FormHelperText from "@mui/material/FormHelperText";
import FormGroup from "@mui/material/FormGroup";
import TextField from "@mui/material/TextField";
import OutlinedInput from '@mui/material/OutlinedInput';
// import TextareaAutosize from "@mui/material/TextareaAutosize";
import "./Company.scss";

const Company = () => {
    return (
        <div>
            <div className="title-container">
                <Typography variant="h4" className="title">
                    NOSOTROS
                </Typography>
            </div>
            <Grid container spacing={10}>
                <Grid item xs={12} md={6} className="passenger-container">
                    <Typography variant="h5">POSITIVO APP</Typography>
                    <Typography variant="p">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Est maiores blanditiis velit eius error vero
                        temporibus animi enim nisi impedit provident, distinctio
                        suscipit itaque eveniet iste corrupti a, placeat
                        aliquid?r
                    </Typography>
                </Grid>
                <Grid item xs={12} md={6} className="driver-container">
                    <Typography variant="h5">Escribenos</Typography>
                    <FormGroup>
                        <FormControl>
                            <InputLabel htmlFor="email-input">
                                Email
                            </InputLabel>
                            <Input
                                id="email-input"
                                aria-describedby="email"
                                variant="outlined"
                                sx={{
                                    maxWidth: 300,
                                }}
                            />
                            <FormHelperText id="my-helper-text">
                                Nunca comportatiremos tu email.
                            </FormHelperText>

                            {/* <TextareaAutosize
                            aria-label="empty textarea"
                            placeholder="Empty"
                            style={{ width: 200 }}
                        /> */}
                        </FormControl>
                        <FormControl>
                            {/* <InputLabel htmlFor="textarea-p">Texto</InputLabel> */}
                            <TextField
                                id="textarea-p"
                                placeholder="Escriba aquí..."
                                multiline
                                rows={2}
                                maxRows={4}
                                variant="standard"
                            />
                            {/* <Input
                                id="my-input-2"
                                aria-describedby="my-helper-text"
                                inputComponent="textarea"
                                fullWidth={true}
                                sx={{
                                    resize: "both",
                                }}
                            /> */}
                        </FormControl>
                    </FormGroup>
                </Grid>
            </Grid>
        </div>
    );
};

export default Company;
