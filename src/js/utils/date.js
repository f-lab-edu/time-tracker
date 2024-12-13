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
  getFullYear(date) {
    return date.getFullYear();
  },
  getDay(date) {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    return days[date.getDay()];
  },
  getDate(date) {
    return date.getDate();
  },
  getCurrentMonthAndDay(separate) {
    const txtSeparate = !!separate ? separate : '.';

    const date = new Date();
    return `${this.getMonth(date)}${txtSeparate}${this.getDate(date)}${txtSeparate}${this.getDay(date)}`;
  },
};
