const CalcReadingTime = ({ data }) => {
    const wordsPerMinute = 200;
    const words = data.split(" ").length;
    const minutes = Math.ceil(words / wordsPerMinute);
    return `${minutes} min read`;
};

export default CalcReadingTime;
