const day =  document.getElementById('days');
const hrs =  document.getElementById('hours');
const min =  document.getElementById('mins');
const sec =  document.getElementById('seconds');



const newyear = '1 Jan 2024'
function countdown(){
    const newyeardate = new Date(newyear);
    const currentdate = new Date();
    
    const totalseconds = (newyeardate-currentdate)/1000;
    const days = Math.floor(totalseconds/3600/24);
    const  hours = Math.floor((totalseconds/3600)%24);
    const mins = Math.floor(totalseconds/60)%60;
    const secs = Math.floor(totalseconds)%60;



    day.innerHTML = days;
    hrs.innerHTML = format(hours);
    min.innerHTML = format(mins);
    sec.innerHTML = format(secs);

    function format(time){
        return time<10?(`0${time}`):time;
    }



}

countdown();

setInterval(countdown,1000);








