const CalcReadingTime = ({ date }) => {
    const wordsPerMinute = 200;
    const words = date.split(" ").length;
    const minutes = Math.ceil(words / wordsPerMinute);
    return `${minutes} min read`;
};

export default CalcReadingTime;
