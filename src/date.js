import React from 'react'

function date() {
    {var today = new Date();
    var day = today.getDay();
        var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
        var dateNow = daylist[day];}
    return (
        <div>
            <h1>{console.log(dateNow)}</h1>
        </div>
    )
}

export default date
