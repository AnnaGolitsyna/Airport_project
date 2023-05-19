import moment from "moment";

const today = moment();
const yesterday = moment().subtract(1, 'day');
const tomorrow = moment().add(1, 'day');

export { today, yesterday, tomorrow };