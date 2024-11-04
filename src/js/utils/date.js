export default {
  getMonth(date) {
    switch (date.getMonth()) {
      case 0:
        return 'Jan';

      case 1:
        return 'Feb';

      case 2:
        return 'Mar';

      case 3:
        return 'Apr';

      case 4:
        return 'May';

      case 5:
        return 'Jun';

      case 6:
        return 'Jul';

      case 7:
        return 'Aug';

      case 8:
        return 'Sep';

      case 9:
        return 'Oct';

      case 10:
        return 'Nov';

      case 11:
        return 'Dec';
    }
  },
  getDay(date) {
    switch (date.getDay()) {
      case 0:
        return 'Sun';

      case 1:
        return 'Mon';

      case 2:
        return 'Tue';

      case 3:
        return 'Wed';

      case 4:
        return 'Thu';

      case 5:
        return 'Fri';

      case 6:
        return 'Sat';
    }
  },
  getDate(date) {
    return date.getDate();
  },
  getCurrentMonthAndDay() {
    const date = new Date();
    return `${this.getMonth(date)}. ${this.getDate(date)}. ${this.getDay(date)}`;
  },
};
