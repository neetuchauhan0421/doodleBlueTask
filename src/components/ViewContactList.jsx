import React from "react";

import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import ListItemIcon from '@material-ui/core/ListItemIcon';
import {
  Typography,
  ListItem,
  List,
  Avatar,
  ListItemText,
} from "@material-ui/core";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Divider from "@material-ui/core/Divider";
import { addContactDetails,viewContactDetails } from "../containers/actions/userActions";
function UserBox(props) {
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState("paper");

  

  function handleClose() {
    setOpen(false);
  }
  function deleteFromCart(product) {
    console.log("d");
    props.viewContactDetails(product);

  }

  return (
    <div style={{ marginLeft: "auto" }}>
     
          {props.user.add_details && props.user.add_details.length ? (
            <List>
              {" "}
              {props.user.add_details.map((lsItem, key) => (
                <div key={key}>
                  <ListItem key={key} alignItems="flex-start" button onClick={() => deleteFromCart(lsItem)}>
                  <ListItemIcon>
                    <ListItemAvatar>
                      <Avatar
                        alt="Remy Sharp"
                      >{lsItem.avtar}</Avatar>
                    </ListItemAvatar>
                    </ListItemIcon>
                    <ListItemText
                      primary={lsItem.fullname}
                      secondary={
                        <Typography
                          variant="subtitle1"
                          color="textSecondary"
                          style={{ display: "flex", flexDirection: "row" }}>
                          {lsItem.email}
                        
                        </Typography>
                      }
                    />
                      <Typography
                          variant="subtitle1"
                          color="textSecondary"
                        //   style={{ display: "flex", flexDirection: "row" }}>
                        >
                          {lsItem.company}
                        </Typography>
                  </ListItem>
                  <Divider variant="inset" component="li" />
                </div>
              ))}
            </List>
          ) : (
            <Card style={{ maxWidth: 345, textAlign: "center" }}>
              <CardActionArea>
                <CardMedia
                  style={{ height: 250 }}
                //   image={require("../assets/Images/cart.png")}
                  title="Contemplative Reptile"
                />

              
              </CardActionArea>
            </Card>
          )}
    </div>
  );
}

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps, {
  addContactDetails,
  viewContactDetails,
})(withRouter(UserBox));