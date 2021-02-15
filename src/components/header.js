import { AppBar, Toolbar } from '@material-ui/core';
import { Typography } from "@material-ui/core";

export function Header(){
    return <AppBar position='relative' elevation={0} style={{backgroundColor: '#282c34', textAlign: 'centered'}}>
        <Toolbar ><Typography>MathWix</Typography></Toolbar>
    </AppBar>
}