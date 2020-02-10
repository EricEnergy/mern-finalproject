import React, { useEffect, useState } from "react";
import API from "../utils/API";
import { makeStyles } from '@material-ui/core/styles';
import { Col, Row, Container } from "../components/Grid";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Main from '../components/cloudinary/cloudtwo';
import Main2 from '../components/cloudinary/cloudone';
import ButtonBase from '@material-ui/core/ButtonBase';
import Greentrees from '../components/images/greentrees.jpg'

const image = [
    {
        url: 'https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?format=webp&v=1530129081',
        title: '',
    },
    
]

const useStyles = makeStyles(theme => ({
    input: {
        display: 'none',
    },
    coverImage: {
        width: "60%",
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: "360px",
        margin: '10% 20%',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    },
    gridList: {
        margin: '5vh auto',
        width:'100%'
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
    img: {
        width: '100%',
    },
    table: {
        overflowY: 'scroll',
        marginTop: '5vh',
        marginBottom: '5vh',
    },
    TOTtable: {
        marginBottom: '5vh',
    },
    companyName: {
        textAlign: 'center',
        fontWeight: 'bolder',
    },
    companyINFO: {
        marginBottom: '2vh',
    },
    description: {
        overflowY: 'scroll',
        height: '20vh',
        marginBottom: '5vh',
    },
    imageButton: {
        position: 'absolute',
        left: 0,
        right: '100px',
        top: 0,
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: theme.palette.common.white,
    },
}));


export default function Search() {
    const classes = useStyles();
    const [appointments, setAppointments] = useState([])
    const [currentAccount, setCurrentAccount] = useState()
    const [companyImages, setcompanyImages] = useState()
    const user = JSON.parse(localStorage.getItem('user'))
    const userID = user.data.user._id
    const [newImages, setNewImages] = useState();

    useEffect(() => {
            API.getimages(user.data.user._id)
                .then(res => setcompanyImages(res.data))
                .catch(err => console.log(err));
    }, [newImages])
    function childDidMount(data) {
        setNewImages(data);
    }
    
    function loadpageimages() {
     return companyImages ? companyImages.postImageURL.map(tile => (
        <GridListTile key={tile}
        style={{ width: '50%', height: 'inherit' }}
        >
            <img className={classes.img} src={tile} alt={tile.title} />
                }
            />
        </GridListTile>
    )) : <img className={"anon"} src={Greentrees} alt={"placeholder"} />
    } 

    function getAccounts() {
        API.getAccounts()
            .then(res => {
                let userCompany = res.data.filter(o => o._id === userID)
                setCurrentAccount(userCompany)
            })
            .catch(err => console.log(err));
    }

    function getAppointments() {
        API.getAppts()
            .then(res => {
                let currentCompanyAppoint = res.data.filter(o => o.accountID === userID)
                setAppointments(currentCompanyAppoint)
            }).catch(err => console.log(err));
    }

    useEffect(() => {
        getAccounts();
    },[userID])

    useEffect(() => {
        loadpageimages();
    },[])


    useEffect(() => {
        getAppointments();
    },[userID])

    function renderRows() {
        if(appointments.length >= 1) {
            return  appointments.map(o => (
                <TableRow key={o._id}>
                    <TableCell component="th" scope="row">
                        {o.fullName}
                    </TableCell>
                    <TableCell align="right">{o.day}</TableCell>
                    <TableCell align="right">{o.date}</TableCell>
                    <TableCell align="right">{o.time}</TableCell>
                </TableRow>
            ))
        } else {
            return <TableRow><TableCell align='center'> {'No appointments found'} </TableCell></TableRow>
        }
    }

    return (
        <Container>
            <Grid>
                <Row >
                    <Col size='xs-12 sm-12 md-12 lg-12'>
                        <div className={classes.cover}>
                            {companyImages ? 
                            <img
                                alt='cover'
                                className={classes.coverImage}
                                src={companyImages.companyImageURL}
                            /> : 
                            <img
                                alt='cover'
                                className={classes.coverImage}
                                src={image.url}
                            />}
                            <ButtonBase
                                    focusRipple
                                    key={image.title}
                                    className={classes.image}
                                    focusVisibleClassName={classes.focusVisible}
                                    style={{
                                        width: image.width,
                                    }}
                                >
                                    <span
                                        className={classes.imageSrc}
                                        style={{
                                            backgroundImage: `url(${image.url})`,
                                        }}
                                    />
                                    <span className={classes.imageBackdrop} />
                                    <span className={classes.imageButton}>
                                        <Main callback={childDidMount}/>
                                    </span>
                                </ButtonBase>
                        </div>
                    </Col>
                </Row>
            </Grid>
            <Grid>
                <Row>
                <Col size='xs-12 xs-12 md-12 lg-12' >
            <Typography component="h3" variant="h3" className={classes.companyName}>
                            {currentAccount ? currentAccount[0].companyName : 'Name'} <hr/>
                        </Typography>
                        </Col> 
                        </Row>
                <Row>
                    <Col size='xs-12 xs-12 md-6 lg-6'>                        
                        <Typography variant="subtitle1" color="textSecondary" className={classes.companyINFO}>
                            Category: {currentAccount ? currentAccount[0].companyCategory : 'Category'}
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary" className={classes.companyINFO}>
                            Location: {currentAccount ? `${currentAccount[0].companyCity}, ${currentAccount[0].companyState}` : 'Nashville, TN'}
                        </Typography>
                    </Col>
                    <Col size='xs-12 xs-12 md-6 lg-6'>
                        <Typography variant="subtitle1" color="textSecondary" className={classes.description}>
                            Description: {currentAccount ? currentAccount[0].companyDescription : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
                        </Typography>
                    </Col>
                </Row>
            </Grid>
            <Grid>
                <Row>
                    <Col size='md-12'>
                        <TableContainer component={Paper} className={classes.TOTtable}>
                            <Table className={classes.table} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Name</TableCell>
                                        <TableCell align="right">Day</TableCell>
                                        <TableCell align="right">Date</TableCell>
                                        <TableCell align="right">Time</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {renderRows()}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Col>
                </Row>
            </Grid>
            <Grid>
                <Row>
                    <Col size="md-12">
                        <div className={classes.gridList}>
                            <GridList 
                            cellHeight={'auto'}
                            cellWidth={'100%'}
                            cols={3} 
                            >
                                <GridListTile 
                                key={image[0].title} 
                                style={{ width: '50%', height: 'inherit' }}
                                >
                                    <img className={classes.img} src={image[0].url} alt={image[0].title} />
                                    <GridListTileBar
                                        title={image[0].title}
                                        subtitle={<span>Upload </span>}
                                        actionIcon={
                                            <IconButton aria-label={`info about ${image[0].title}`} className={classes.icon}>
                                                <input accept="image/*" className={classes.input} id="icon-button-file" type="file" />
                                                <label htmlFor="icon-button-file">
                                                    <Main2 callback={childDidMount}/>
                                                </label>
                                            </IconButton>
                                        }
                                    />
                                </GridListTile>
                             {loadpageimages()}
                            </GridList>
                        </div>
                    </Col>
                </Row>
            </Grid>
        </Container>
    )
};

