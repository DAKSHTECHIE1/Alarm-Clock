const getTimeAsString = (hours, minutes, seconds, zone) => {
    if (minutes / 10 < 1) {
      minutes = "0" + minutes;
    }
    if (seconds / 10 < 1) {
      seconds = "0" + seconds;
    }
    return `${hours}:${minutes}:${seconds} ${zone}`;
  };
var arr=[];
var timeString=-1;
  // Function to display current time on screen
  const currTime = () => {
    var currentTime = document.getElementById("curr-time");
    const currentDate = new Date();
    // console.log(currentDate.getDate());
    // console.log(currentDate.getMonth());
    var hours = currentDate.getHours();
    var minutes = currentDate.getMinutes();
    var seconds = currentDate.getSeconds();
    var zone = hours >= 12 ? "PM" : "AM";
    if (hours > 12) {
      hours = hours % 12;
    }
    timeString = getTimeAsString(hours, minutes, seconds, zone);
    currentTime.innerHTML = timeString;
  };
  setInterval(currTime, 1000);
  const currDate=()=>{
    const currentDate = new Date();
    const date=currentDate.getDate().toString();
    // const month=currentDate.getMonth().toString();
    var month = currentDate.toLocaleString('default', { month: 'long' });
    const total=date+" "+month;
    console.log(total);
    var dater=document.getElementById('curr-date');
    dater.innerHTML = total;
  }
  currDate(setInterval,1000000);
const addAlarm=(event)=>{
    event.preventDefault();
    var obj={};
    var dateaccess=document.getElementById('date');
    const datex=dateaccess.value;
    const months = ["Jan", "Feb", "March", "April", "May", "June",
  "July", "Aug", "Sept", "Oct", "Nov", "Dec"
];
var objDate = new Date(datex);
const odl=objDate.getUTCDate();
const date=odl+' '+months[objDate.getUTCMonth()]+ ' ' + objDate.getUTCFullYear();
console.log(date);
    console.log(typeof(date));
    var hoursaccess=document.getElementById('hours');
    const hours=hoursaccess.value;
    var minsaccess=document.getElementById('mins');
    const mins=minsaccess.value;
    var secsaccess=document.getElementById('secs');
    const secs=(secsaccess.value);
    var zoneaccess=document.getElementById('zone');
    const zone=zoneaccess.value;
    const time = getTimeAsString(hours,mins,secs,zone );
    console.log(typeof(time));
    var timers=document.getElementById('timers');
    const li = document.createElement('div')
    // li.setAttribute('id',`alarm-${time}-${date}`)
     li.setAttribute('class',`glass`);
    li.innerHTML=`
        <span><h3>${date}</h3></span> 
        <span><h3>${time}</h3></span>
        <div class="del" onclick='deleteAlarm(event)' id='${time}-${date}'>X</div>
        
                `
    timers.append(li);
    obj['date']=date;
    obj['time']=time;
    arr.push(obj);
    const myform=document.getElementById('form');
    myform.reset();
    var showbtn=document.getElementById('show-form-button')
    showbtn.innerText='Show Form';
    myform.style.visibility='hidden';
}
  const deleteAlarm=(event)=>{
    event.preventDefault();
    console.log(event.target.id);
    const element=document.getElementById(`alarm-${event.target.id}`);
    element.remove();
     const data=event.target.id;
     for (var i=0;data[i]!='-';i++){

     }
     let time=data.slice(0,i);
     let date=data.slice(i+1);
     console.log('date',date,'time',time);
     let index=0;
     for(let obj of arr){
        if(obj['time']==time&&obj['date']==date){
            break;
        }
        index++;
     }
     arr.splice(index,1);
  }
  //<button onclick='deleteAlarm(event)' id='${time}'>Delete</button>
  const checkAlarm=()=>{
    let dateString = new Date().toJSON().slice(0, 10);
    const samay=timeString;
    const dinank=dateString;
    for(let obj of arr){
        console.log('in');
        if(obj['time']==samay&&obj['date']==dinank){
            alert('uth jao');
            const element=document.getElementById(`alarm-${samay}-${dinank}`);
            element.remove();
            let index=0;
            for(let obj of arr){
               if(obj['time']==samay&&obj['date']==dinank){
                   break;
               }
               index++;
            }
            arr.splice(index,1);
        }

    }

  }
  setInterval(checkAlarm,1000);
  const showform=()=>{
    var data=document.getElementById('show-form-button')
    var form=document.getElementById('form');
    if(data.innerText=='Show Form'){
        data.innerText='Remove Form';
        form.style.visibility='visible';
    }
    else{
        data.innerText='Show Form'
        form.style.visibility='hidden';
    }
   

}