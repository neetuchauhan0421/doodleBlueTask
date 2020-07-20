import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
   
    Avatar,
  } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        color: theme.palette.text.secondary,
        padding: "31px 26px 11px 29px",
        backgroundColor: "#e1e6e5",
        width:"71%",
        marginTop:"6rem",
        marginLeft:"6rem"
    },
}));
function FullWidthGrid(props
) {
    const classes = useStyles();
let user = props.user.view_details;
    return (
        <div className={classes.root}>
            <Grid
                container
                spacing={2}
                style={{
                    display: "flex",
                }}>
                    <Grid container>
                        {/* <List> */}
                        {/* {props.user.view_details((user) => */}
                        {/* //   <Grid item xs={6} sm={3}> */}
                        {user && user.fullname? (
                            <Paper alignItems="flex-start" className={classes.paper}>
                                <Avatar style={{margin:"auto",backgroundColor:"green",width:"6rem"}}>{user.avtar}</Avatar>
                                <Typography style={{margin:"auto",width:"2rem"}}>{user.fullname}</Typography>

                                
                                <Grid>
                                <Typography>Full Name  </Typography>
                                <Typography style={{display:"flex",justifyContent:"end"}}>{user.fullname}</Typography>
                                </Grid>
                                <Grid>
                                    <Typography>Email: </Typography>
                                    <Typography  style={{display:"flex",justifyContent:"end"}}>
                                    {user.email}
                                    </Typography>
                                </Grid>
                                <Grid>
                                <Typography>Phone No </Typography>

                                <Typography  style={{display:"flex",justifyContent:"end"}} >
                                    {user.phoneno}
                               </Typography>
                                </Grid>
                                <Grid>
                                <Typography>Company </Typography>

                                    <Typography  style={{display:"flex",justifyContent:"end"}}>{user.company}
                                    </Typography>
                                </Grid>
                                <Grid>
                                <Typography>Address </Typography>

                                <Typography  style={{display:"flex",justifyContent:"end"}}>
                                    {user.address}
                                </Typography>
                                </Grid>
                            </Paper>):null}
                        {/* // </Grid> */}
                        {/* )}  */}
                        {/* </List> */}
                    </Grid>
                </Grid>
             </div>
    );
}
const mapStateToProps = (state) => ({
    user: state.user
    ,
});

export default connect(mapStateToProps, {

    // serInformation,
})(withRouter(FullWidthGrid));
