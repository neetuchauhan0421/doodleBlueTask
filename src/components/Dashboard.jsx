
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";
import ContactsIcon from '@material-ui/icons/Contacts';
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import DialogActions from "@material-ui/core/DialogActions";
import InputAdornment from '@material-ui/core/InputAdornment';

import UserBox from './ViewContactList'
import FullWidthGrid from './ViewContact'
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Search from "../components/Search";
import {
    addContactDetails,
} from "../containers/actions/userActions";

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});
function SimpleCard(props) {
    const [open, setOpen] = React.useState(false);
    const [scroll, setScroll] = React.useState("paper");
    const handleClickOpen = (scrollType) => () => {
        setOpen(true);
        setScroll(scrollType);
    };

   
    function handleClose() {
        setOpen(false);
    };
    function handleClick(e) {
        e.preventDefault();
        let dict = {};
        let tmp = '';

        let arr = e.target.fullname.value.split(" ");
        if (arr.length > 1 && arr[1][0]) {
            tmp = arr[0][0].concat(arr[1][0]).toUpperCase();
        }
        else{
            tmp = arr[0][0].toUpperCase();
        }
        dict['fullname'] = e.target.fullname.value;
        dict['email'] = e.target.email.value;
        dict['phoneno'] = e.target.phoneno.value;
        dict['company'] = e.target.company.value;
        dict['address'] = e.target.address.value;
        dict['avtar'] = tmp;
        let userdetail = props.user.add_details;
        userdetail.push(dict)
        props.addContactDetails(userdetail)
        console.log(tmp,arr)
        //props.history.push("/Seller")
        console.log(props.detail)
        console.log(e.target.address.value);
        console.log(e.target.fullname.value);
        console.log(e.target.email.value);
        console.log(e.target.phoneno.value);
        console.log(props.user.user_detail)
        // whatever you typed into the input
        setOpen(false);
    }
    const classes = useStyles();
   

    return (
        <Grid container style={{ display: "flex", flexDirection: "row", marginTop: "4rem" }}>
            <Grid item xs={12} sm={6}>
                <Grid >
                    <ContactsIcon  style={{ marginLeft: "4rem", marginTop: "-2rem" }} />
                    <Typography style={{ marginLeft: "6rem", marginTop: "-2rem" }}
                        variant="h5" color="textSecondary" gutterBottom>
                        Contact
                    </Typography>
                </Grid>
                <Grid style={{marginLeft:"6rem",marginTop:"3rem"}}  >
                  
                            <Button
                                onClick={handleClickOpen("paper")}
                                variant="contained" color="secondary"
                            >
                                +Add Contacts
                            </Button>
                      
<Search/>
              <UserBox /> 
                </Grid>

            </Grid>
                <Grid item xs={12} sm={6}>
                <FullWidthGrid/>
                
                </Grid>
                      

            
            <Dialog
                open={open}
                onClose={handleClose}
                scroll={scroll}
                aria-labelledby="scroll-dialog-title">
                <DialogTitle>ADD </DialogTitle>
                <FormControl className={classes.margin}>
                    <form onSubmit={handleClick}>

                        <Grid>

                            <Grid style={{ marginTop: "2rem", marginLeft: "2rem" }}>
                                <TextField
                                    style={{ width: "13rem" }}
                                    id="full name"
                                    label="Full Name"
                                    name="fullname"
                                ></TextField>
                            </Grid>
                            <Grid>
                                <TextField
                                    className={classes.margin}
                                    style={{
                                        marginTop: "2rem",
                                        marginLeft: "2rem",
                                        width: "13rem"
                                    }}
                                    id="email"
                                    name="email"
                                    label="Email"

                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            </Grid>
                            <Grid>
                                <TextField
                                    className={classes.margin}
                                    style={{
                                        marginTop: "2rem",
                                        marginLeft: "2rem",
                                        width: "13rem"
                                    }}
                                    id="phone no"
                                    name="phoneno"
                                    label="Enter Phone no"
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            </Grid>
                            <Grid>
                                <TextField
                                    className={classes.margin}
                                    style={{
                                        marginTop: "2rem",
                                        marginLeft: "2rem",
                                        width: "13rem"
                                    }}
                                    id="company"
                                    name="company"
                                    label="Company"
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            </Grid>
                            <Grid>
                                <TextField
                                    className={classes.margin}
                                    style={{
                                        marginTop: "2rem",
                                        marginLeft: "2rem",
                                        width: "13rem"
                                    }}
                                    id="address"
                                    name="address"
                                    label="Enter address"
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            </Grid>
                        </Grid>

                    <DialogActions >
                        <Button onClick={handleClose} color="primary">
                            Cancel
                        </Button>
                        <Button type="submit" variant="contained" color="primary">Save</Button>

                    </DialogActions>
                    </form>

                </FormControl>
            </Dialog>
            </Grid>

    );
}
const mapStateToProps = (state) => ({
    user: state.user,
});

export default connect(mapStateToProps, {

    addContactDetails
})(withRouter(SimpleCard));
