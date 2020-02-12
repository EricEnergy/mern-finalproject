import React, { useEffect, useState } from "react";
import API from "../utils/API";
import { makeStyles } from '@material-ui/core/styles';
import { Col, Row, Container } from "../components/Grid";
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDateTimePicker } from '@material-ui/pickers';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import ModalImage from "react-modal-image";

// IMGs
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import CloseIcon from '@material-ui/icons/Close';
import TextField from '@material-ui/core/TextField';

const categories = [
    "Barbershop", "Salon", "Beauty", "Tattoo", "Nails", "Piercings", "Photography"
];

const useStyles = makeStyles(theme => ({
    card: {
        paddingTop: '5vh',
        maxHeight: '90vh',
        overflowY: 'scroll',
        backgroundColor: 'rgba(187,208,213,0)',
    },
    details: {
        color: 'White',
    },
    cover: {
        width: "100%",
        height: '100%',
    },
    coverImage: {
        width: "90%",
        margin: '5% 5%',
    },
    controls: {
    },
    gridList: {
        margin: '5vh auto',
        backgroundColor: 'rgba(255, 255, 255, 0)',
        width: '100%',
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
    img: {
        height: 300
    },
    btn: {
        maxHeight: '85vh',
        paddingTop: '5vh',
    },
    description: {
        overflowY: 'scroll',
        height: '20vh',
    },
    companyName: {
        marginBottom: '2vh',
        textShadow: '2px 2px 4px #000000',
    },
    companyINFO: {
        marginBottom: '2vh',
        color: 'white',
        fontWeight: 'bold',
        fontSize: '1.5rem',
    },
    senders: {
        color: '#4fa19a',
    },
    dater: {
        marginBottom: '5vh',
    },
    MuiPickersToolbar: {
        backgroundColor: 'black',
    },
    small: {
        width: theme.spacing(5),
        height: theme.spacing(5),
    },
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },
}));

const styles = theme => ({
    root: {
        margin: 0,
        padding: theme.spacing(2),
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },
});

export default function Search() {
    const [accounts, setAccounts] = useState([])
    const [sideBar, setSideBar] = useState()
    const [selectedDate, setSelectedDate] = useState(new Date());
    const classes = useStyles();
    const [backBtn, setBackBtn] = useState('none');
    const [servInfo, setServInfo] = useState();
    const [avatar, setAvatar] = useState('none')
    const [appointName, setAppointName] = useState()
    const [open, setOpen] = React.useState(false);
    const [companyImages, setcompanyImages] = useState()
    const [selectedImages, setSelectedImages] = useState()

    function handleListItemClick(value) {
        if (value === 'back') {
            setBackBtn('none');
            setAvatar('none');
            let categoryList = accounts.map(o => { return o.companyCategory })
            let newArray = categoryList.filter(function (item, pos, self) {
                return self.indexOf(item) === pos;
            })
            setSideBar(newArray)
        } else if (categories.includes(value)) {
            setBackBtn('block');
            setAvatar('block');
            let selectedCategory = accounts.filter(o => o.companyCategory === value)
            let companyList = selectedCategory.map(o => { return  o.companyName })
            setSideBar(companyList)
        } else {
            let selectedCompany = accounts.filter(o => o.companyName === value)
            let selectedId = selectedCompany[0]._id
            let imagesCopy = companyImages.filter(o => o.accountID === selectedId)
            setServInfo(selectedCompany);
            setSelectedImages(imagesCopy[0])
        }
    };
    const DialogTitle = withStyles(styles)(props => {
        const { children, classes, onClose, ...other } = props;
        return (
            <MuiDialogTitle disableTypography className={classes.root} {...other}>
                <Typography variant="h6">{children}</Typography>
                {onClose ? (
                    <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                        <CloseIcon />
                    </IconButton>
                ) : null}
            </MuiDialogTitle>
        );
    });

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
            let dateString = selectedDate.toString()
            let day = dateString.substring(0, 3);
            let dateOnly = dateString.substring(4, 15);
            let time = dateString.substring(16, 21);
            if (servInfo) {
                API.addAppt({
                    fullName: appointName,
                    day: day,
                    date: dateOnly,
                    time: time,
                    accountID: servInfo[0]._id
                })
            }
    };

    const handleDateChange = date => {
        setSelectedDate(date);
    };
    function getposts() {
        API.getPosts()
        .then(res=> setcompanyImages(res.data))
        .catch(err => console.log(err));
    }
    function getAccounts() {
        API.getAccounts()
            .then(res => {
                setAccounts(res.data)
                let categorysList = res.data.map(o => o.companyCategory)
                let newArray = categorysList.filter(function (item, pos, self) {
                    return self.indexOf(item) === pos;
                })
                setSideBar(newArray)
            })
            .catch(err => console.log(err));
    }

    useEffect(() => {
        getAccounts()
        getposts();
    },[])

    return (
        <div className={classes.root}>
            <Container fluid>
                <Row>
                    <Col size="xs-12 sm-4 md-4 lg-2">
                        {sideBar ?
                            <div className={classes.btn}>
                                <List component="nav" aria-label="main mailbox folders">
                                    <ListItem style={{ display: backBtn }}
                                        key={1}
                                        button
                                        onClick={() => handleListItemClick('back')}
                                    >
                                        <ListItemText primary={'Categories'} />
                                        <hr></hr>
                                    </ListItem>
                                    {sideBar.map(o =>
                                        <ListItem
                                            key={o}
                                            button
                                            onClick={() => handleListItemClick(o)}
                                        >
                                            <Avatar style={{ display: avatar }} alt="Remy Sharp" src="https://res.cloudinary.com/ericnrgnash/image/upload/v1580676864/serv/s_xhmmky.png" className={classes.small} />
                                            <ListItemText primary={o.replace(/^\w/, c => c.toUpperCase())} />
                                        </ListItem>
                                    )}
                                </List>                                
                            </div>
                            : <div></div>}
                    </Col>
                    {/* right col */}
                    <Col size="xs-12 sm-8 md-8 lg-10">
                        <Card className={classes.card}>
                            <Row>
                                {/* Company img */}
                                <Col size='xs-12 sm-12 md-12 lg-4 xl-4'>
                                    <div className={classes.cover}>
                                        <img
                                            alt= 'cover'
                                            className={classes.coverImage}
                                            src={selectedImages ? selectedImages.companyImageURL :"./servICON.png"}
                                            title="Live from space album cover"
                                        />
                                    </div>
                                </Col>
                                <Col size='xs-12 sm-12 md-12 lg-8'>
                                    <div className={classes.details}>
                                        <CardContent className={classes.content}>
                                            <Row>
                                                <Col size='xs-6 md-6'>
                                                    <Typography component="h3" variant="h3" className={classes.companyName}>
                                                        {servInfo ? servInfo[0].companyName : 'Welcome To Serv'}
                                                    </Typography>
                                                    <Typography variant="subtitle1" color="textSecondary" className={classes.companyINFO}>
                                                        Category: {servInfo ? servInfo[0].companyCategory : ''}
                                                    </Typography>
                                                    <Typography variant="subtitle1" color="textSecondary" className={classes.companyINFO}>
                                                        Location: {servInfo ? `${servInfo[0].companyCity}, ${servInfo[0].companyState}` : ''}
                                                    </Typography>
                                                </Col>
                                                <Col size='xs-6 md-6'>
                                                    {servInfo ? 
                                                    <div>
                                                        <Button variant="outlined" style={{borderColor: 'white', color: 'white'}} color="secondary" onClick={handleClickOpen}>
                                                            Appointment
                                                        </Button>
                                                        <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                                                            <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                                                                Set Appointment
                                                            </DialogTitle>
                                                            <DialogContent dividers>

                                                                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                                                    <Grid container justify="space-around" className={classes.dater}>
                                                                        <KeyboardDateTimePicker
                                                                            margin="normal"
                                                                            id="date-picker-dialog"
                                                                            label="Date picker dialog"
                                                                            format="MM/dd/yyyy"
                                                                            value={selectedDate}
                                                                            onChange={handleDateChange}
                                                                            KeyboardButtonProps={{
                                                                                'aria-label': 'change date',
                                                                            }}
                                                                        />
                                                                    </Grid>
                                                                </MuiPickersUtilsProvider>
                                                                <form className={classes.root} noValidate autoComplete="off">
                                                                    <TextField onChange={(e) => setAppointName(e.target.value)}
                                                                    id="outlined-basic" label="Name" variant="outlined" />
                                                                </form>
                                                            </DialogContent>
                                                            <DialogActions>
                                                                <Button autoFocus onClick={handleClose} color="primary">
                                                                    Save changes
                                                                 </Button>
                                                            </DialogActions>
                                                        </Dialog>
                                                    </div> :
                                                    <div>
                                                       <Button variant="outlined" disabled>
                                                            Appointment
                                                        </Button>
                                                    </div>}
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col size='md-12'>
                                                    <Typography variant="subtitle1" color="textSecondary" className={classes.description}>
                                                        Description: {servInfo ? servInfo[0].companyDescription : `Our team at Serv wanted to bring the services of trademen and women to one place where you can find them and they can showcase their craft.`}
                                                    </Typography>
                                                </Col>
                                            </Row>
                                        </CardContent>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                            <Col size="md-2">
                                <div></div>
                            </Col>
                                <Col size="md-8">
                                    <div className={classes.gridList}>

                                        <GridList cellHeight={300} cols={3} style={{ width: '200' }}>
                                            {selectedImages ? selectedImages.postImageURL.map(tile => (
                                                <GridListTile key={tile} style={{ width: 300 }}>
                                                       <ModalImage
                                                        // smallSrcSet={tile}
                                                        src={tile}
                                                        large={tile}
                                                        alt='Name' />
                                                </GridListTile>
                                            )) :<p></p>
                                            })
                                        }
                                        </GridList>
 
                                    </div>
                                </Col>
                                <Col size="md-2">
                            </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}


