import dayjs from "dayjs";

const DateFormat = ({ date }) => {
    return dayjs(date).format("MMMM DD, YYYY");
};


export default DateFormat;