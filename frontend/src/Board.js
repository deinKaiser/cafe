import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import Paper from "@material-ui/core/Paper"
import ProductInfo from "./OrderWindow";
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ForkIcon from "@material-ui/icons/KitchenSharp"

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

export default function BoardList(props) {
  const classes = useStyles();
  const [selectedId, setSelectedId] = useState(-1);
  const handleClick = (id) => {
    
  };

  return (
      <div>
    { !props.data ?
    
    (
    <div>
        { selectedId < 0 ? (<ProductInfo/>) :
    (<Paper style={{ width: "40vw", marginTop: 20 }} ><List
      component="nav"
      aria-labelledby="boards-list"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Список столиків
        </ListSubheader>
      }
      className={classes.root}
    >
        
        <ListItem button>
            <ListItemIcon>
            <ForkIcon />
            </ListItemIcon>
            <ListItemText onClick={() => {  }} primary="Біля вікна" />
        </ListItem>

        <ListItem button>
            <ListItemIcon>
            <ForkIcon />
            </ListItemIcon>
            <ListItemText primary="Перший зал" />
        </ListItem>

        <ListItem button>
            <ListItemIcon>
            <ForkIcon />
            </ListItemIcon>
            <ListItemText primary="Другий зал" />
        </ListItem>

        <ListItem button>
            <ListItemIcon>
            <ForkIcon />
            </ListItemIcon>
            <ListItemText primary="Центр" />
        </ListItem>
        </List>
    </Paper>)}
    
    </div>
    ) : 
    (
        <div>
        </div>
    ) }
    </div>
  );
}
