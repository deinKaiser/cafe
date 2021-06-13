import { Button, makeStyles } from "@material-ui/core";
import React from "react";
import OrderList from "./OrderConfirm";
import { TabScrollButton, TextField } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
      height: "400px",
      overflowY: "scroll"
    },
    text: {
        color: "black"
    }
  }));

export default function OrderWindow(props) {
    const classes = useStyles(); 

    return (
        <div className="order-window col space-between">
            <div className="row space-between">
                <div class="order-info-title">Час 13:35 - 14:40</div>
                <TextField id="test" placeholder="Ім'я" aria-label="Ім'я" aria-labelledby="Ім'я" color="primary"
                        inputProps={{ className: classes.text }} variant="standard" />
            </div>
            <div className="row space-between">
                <OrderList />
                <Button style={{height: 50, alignSelf: "flex-end"}} color="primary" variant="contained" >Готово</Button>
            </div>
        </div>
    )
}