import {Header} from '../components/header';
import { Typography, Button, Grid, CardContent, CardMedia, List, ListItem, ListItemIcon } from "@material-ui/core";
import {BarChart, Explore} from '@material-ui/icons'

export default function HomePage() {
    return (
        <div className="App">
            <Header/>
            <Grid container className={'jumbotron'} justify={'center'} alignContent={'center'} direction={'column'}>
                <Grid item><Typography variant={'h3'}>MathWiz</Typography></Grid>
                <Grid item><Typography>Wanna ace 🤴 that next math  test?</Typography></Grid>
                <Grid item> <Typography> Well you're in the right place! 😎</Typography></Grid>
               <Grid item><Button variant={'contained'} startIcon={<BarChart />}>Start Practicing</Button></Grid>
    
            </Grid>
            <div className={'section'} >
                <Typography variant={'h4'}>Yeah, math is hard. We know!</Typography>
            <Grid container justify={'center'} alignContent={'center'} style={{marginTop: 10}}>
                <Grid item md={3}><Grid item>
                    <CardMedia><BarChart /></CardMedia>
                    <CardContent><Typography>Get access to popular math questions on all topics with answers and explanations to all questions.</Typography></CardContent>
                </Grid></Grid>
                <Grid item md={3}><Grid item>
                    <CardMedia><BarChart /></CardMedia>
                    <CardContent><Typography>Get access to popular math questions on various topics .</Typography></CardContent>
                </Grid></Grid>
                <Grid item md={3}><Grid item>
                    <CardMedia><BarChart /></CardMedia>
                    <CardContent><Typography>We are also preparing courses on various mathematics topics students find hard to understand, so if you want to see that, please do us a favour by supporting us. 🤗</Typography></CardContent>
                </Grid></Grid>

            </Grid></div>
            <Grid className="jumbotron" >
                <Grid item><Typography variant={'h3'}>Over 20 questions for you to practice on</Typography></Grid>
                <Grid item><Typography>New questions are being added everyday</Typography></Grid>
                <Grid item> <Typography> So stop lazying around and start solving </Typography></Grid>
                <Grid item spacing={5}><Button size={'large'} variant={'contained'} startIcon={<Explore />}>explore</Button></Grid>
                <List>
                    <ListItem button={true}><ListItemIcon><BarChart/></ListItemIcon><Typography>Hello</Typography></ListItem>
                    <ListItem button={true}><ListItemIcon><BarChart/></ListItemIcon><Typography>Hello</Typography></ListItem>
                    <ListItem button={true}><ListItemIcon><BarChart/></ListItemIcon><Typography>Hello</Typography></ListItem>
                    <ListItem button={true}><ListItemIcon><BarChart/></ListItemIcon><Typography>Hello</Typography></ListItem>
                </List>
            </Grid>
        </div>
    );
}