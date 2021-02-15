import {Header} from '../components/header';
import { Typography, Button, Grid } from "@material-ui/core";
import {BarChart} from '@material-ui/icons'

export default function HomePage() {
    return (
        <div className="App">
            <Header/>
            <Grid container className={'jumbotron'} spacing={1} justify={'center'} alignContent={'center'} direction={'column'}>
                <Grid item><Typography variant={'h3'}>MathWix</Typography></Grid>
                <Grid item><Typography>Wanna ace 🤴 that next math  test?</Typography></Grid>
                <Grid item> <Typography> Well you're in the right place! 😎</Typography></Grid>
               <Grid item><Button variant={'contained'} startIcon={<BarChart />}>Start Practicing</Button></Grid>
    
            </Grid>
            <Grid container className={'section'} spacing={1} justify={'center'} alignContent={'center'} direction={'column'}>
                <Grid item><Typography variant={'h4'}>Yeah, math is hard. We know</Typography></Grid>
                <Grid item><Typography>Looking to ace 🤴 that next math  test?</Typography></Grid>
                <Grid item> <Typography> Well you're in the right place! 😎</Typography></Grid>
                <Grid item><Button variant={'contained'} startIcon={<BarChart />}>Start Practicing</Button></Grid>

            </Grid>
        </div>
    );
}