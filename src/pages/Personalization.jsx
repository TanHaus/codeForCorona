import React from "react";
import { Grid, Button, Fade } from "@material-ui/core";

function Personalization(props) {
    return (
        <Fade in="true">
        <Grid 
            container
            direction="column"
            justify="center"
            alignItems="center"
        >   
            <Grid item xs>
                <h1>Choose your activities</h1>
                <p>as many as you like</p>
            </Grid>
            <Grid item xs>
                <Button >Let's get started</Button>
            </Grid>
            
        </Grid>
        </Fade>
    );
}

export default Personalization;