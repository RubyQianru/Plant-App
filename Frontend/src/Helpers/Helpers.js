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

function getScheduledDates(data) {
    const dates = []

    data.forEach((entry) => {
        const startDate = new Date(entry.start_date);
        const endDate = new Date(entry.end_date);
        const dayOfWeek = entry.day_of_week;
        let currentDate = new Date(startDate);
    
        while (currentDate <= endDate) {
            if (currentDate.getUTCDay() === dayOfWeek - 1) {
                console.log(currentDate.getUTCDay())
                dates.push(currentDate.toISOString().split('T')[0]);
            }
            currentDate.setUTCDate(currentDate.getUTCDate() + 1);
        }
    })

    return dates
}

export {
    getDatesForWeek,
    getScheduledDates
};
