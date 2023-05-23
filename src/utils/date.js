
import dayjs from 'dayjs';

const yesterday = dayjs().subtract(1, 'day');
const today = dayjs();
const tomorrow = dayjs().add(1, 'day');

export { today, yesterday, tomorrow };