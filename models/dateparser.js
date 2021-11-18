const express = require('express');
const moment=require("moment-timezone")

var localDateOnly = function(timezone, d) {

    if (d == undefined) { d = new Date(); } // current date/time
    return String( moment(d).tz(timezone).format("YYYY-MM-DD") 
    
    );
  }


  var myDate = localDateOnly("Asia/Baghdad");
  var yesterDate=localDateOnly("Asia/Baghdad",moment().subtract(1,"day"));
  var threedate=localDateOnly("Asia/Baghdad",moment().subtract(2,"day"));
  var fourdate=localDateOnly("Asia/Baghdad",moment().subtract(3,"day"));
  var fivedate=localDateOnly("Asia/Baghdad",moment().subtract(4,"day"));
  var sixedate=localDateOnly("Asia/Baghdad",moment().subtract(5,"day"));




  
  /*db.birthdays.insert(
  { dateonly: myDate, event: "This day is my birthday!" }
);*/
/*

// today
var myDate = localDateOnly("America/New_York");
db.birthdays.find( { dateonly: myDate } );

// tomorrow
var myDate = localDateOnly(
  "America/New_York",
  moment().add( 1, "days" )
);  // tomorrow
db.birthdays.find( { dateonly: myDate } );

// someone wants to know birthdays on the calendar on July 15, 2015
// regardless which time zone they are in
// just find the date in YYYYMMDD format
db.birthdays.find( { dateonly: 20150715 } );*/



const todaydate=myDate;
const yesterDateAct=yesterDate;
const threago=threedate;
const fourago=fourdate;
const fiveago=fivedate;
const sixago=sixedate;




module.exports = {todaydate,yesterDateAct,threago,fourago,fiveago,sixago};