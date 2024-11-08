export default {
  getMonth(date) {
    const month = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];

    return month[date.getMonth()];
  },
  getDay(date) {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    return days[date.getDay()];
  },
  getDate(date) {
    return date.getDate();
  },
  getCurrentMonthAndDay() {
    const date = new Date();
    return `${this.getMonth(date)}. ${this.getDate(date)}. ${this.getDay(date)}`;
  },
};
