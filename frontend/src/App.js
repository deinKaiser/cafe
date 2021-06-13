import './App.css';
import Form from "./Form";
import BoardList from "./Board"
import { ThemeProvider, createMuiTheme, CircularProgress } from "@material-ui/core";

import { green, orange, common } from '@material-ui/core/colors';
import { MuiPickersUtilsProvider } from "@material-ui/pickers"
import MomentUtils from '@date-io/moment';
import { useState } from 'react';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: orange[500],
      
    },
    secondary: {
      main: green[500]
    }
  },
});

function App() {
  const [isFetching, setFetching] = useState(false);
  const [data, setData] = useState(null);

  return (
    <ThemeProvider theme={theme} >
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <Form isFetching={isFetching} setFetching={setFetching} setData={setData} />
        { isFetching ? (<CircularProgress />) : (
          <div>
            { console.log(data) }
            { data && data.length ? (<BoardList />) : ( <h1>Вільних столиків нема!</h1> ) }
          </div>)
        }
      </MuiPickersUtilsProvider>
    </ThemeProvider>
  );
}

export default App;
