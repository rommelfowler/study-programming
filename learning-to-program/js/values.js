var projectName = 'kittenbook';
var versionNumber = '0.0.1';
var currentDate = new Date();                         // Create date object
                                                      // to build out dates.

// currentTime will look like '2014-01-25 at 14:25:12'
var currentTime = currentDate.getFullYear() + '-' + //set year
    (currentDate.getMonth() + 1) + '-' +              //set month
    currentDate.getDate() + ' at ' +                //set date of the month
    currentDate.getHours() + ':' +                //set hours (military)
    currentDate.getMinutes() + ':' +                //set minutes
    currentDate.getSeconds();                       //set seconds

