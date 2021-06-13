import React, { useEffect, useState } from "react";
import { TimePicker } from "@material-ui/pickers"
import { Button } from "@material-ui/core";
import axios from "axios";

function dateRangeOverlaps(a_start, a_end, b_start, b_end) {
    if (a_start <= b_start && b_start <= a_end) return true; // b starts in a
    if (a_start <= b_end   && b_end   <= a_end) return true; // b ends in a
    if (b_start <  a_start && a_end   <  b_end) return true; // a in b
    return false;
}

export default function Form(props) {

    const [firstDate, setFirstDate] = useState(new Date());
    const [secondDate, setSecondDate] = useState(new Date());
    const handler = async () => {
        props.setFetching(true);
        const {data} = await axios.get('http://localhost:1337/orders');
        const BoardList = await axios.get('http://localhost:1337/boards');
        console.log(data);
        let busyBoards = [];
        if (data && data.length) {
            data.forEach(item => {
                const fDate = new Date(item.first_date).getTime();
                const sDate = new Date(item.second_date).getTime();

                const overlapping = dateRangeOverlaps(fDate, sDate, firstDate.getTime(), secondDate.getTime());

                if (overlapping)
                    busyBoards.push(item.board.id)
            })
        }

        props.setData(BoardList.data);
        props.setFetching(false);
    }

    return (
    <div className="header-bkg">
       <div className="header col center-all ">
           <div className="title">
               Вітаємо в кафе RainCoffee
           </div>
           <div className="todoLabel">
               Вкажіть час Вашого відвідання, щоб знайти вільні столики.
           </div>
           <br/>
           <div className="row">
            <TimePicker 
                onChange={(date) => {setFirstDate(date)}}
                className="time-input"
                style={{  color: "white", height: 100 }}
                emptyLabel="Час"
                variant="inline"
                inputVariant="filled"
                disabled={props.isFetching}
            />
            <TimePicker 
                onChange={(date) => {setSecondDate(date)}}
                className="time-input"
                style={{  color: "white", height: 100 }}
                emptyLabel="Час"
                variant="inline"
                inputVariant="filled"
                disabled={props.isFetching}
            />
           </div>
           <div className="row">
               <Button variant="contained" color="primary" disabled={props.isFetching} onClick={async () => { await handler() }}>Пошук</Button>
           </div>
        </div>
    </div>)
}