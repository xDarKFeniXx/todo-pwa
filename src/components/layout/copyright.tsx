import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import React from "react";


export function Copyright() {
    return (
        <Typography variant="body2" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://github.com/xDarKFeniXx">
                xDarKFeniXx
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}
