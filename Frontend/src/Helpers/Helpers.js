import moment from "moment";

function getDatesForWeek() {
    const dates = [];
  
    const sevenDaysAgo = moment().subtract(7, 'days');
  
    for (let i = 0; i < 7; i++) {
      const currentDate = sevenDaysAgo.clone().add(i, 'days');
      const formattedDate = currentDate.format('MM-DD');
      dates.push(formattedDate);
    }
  
    return dates;
  }

export  {getDatesForWeek};
