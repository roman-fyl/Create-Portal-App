export const DateTime = () => {
    const date = new Date();
    const currentMonth = date.getMonth() + 1;
    const currentDate = date.getDate();
    const currentYear = date.getFullYear();
    const currentDay = date.getDay();
    const currentHour = date.getHours();
    const currentMinute = date.getMinutes();
    const currentSecond = date.getSeconds();
    const currentMilisecond = date.getMilliseconds();
    const currentTime = date.getTime();

    console.log(`${currentMonth < 10 ? '0' : ''}${currentMonth}-${currentDate < 10 ? '0' : ''}${currentDate}-${currentYear}-${currentDay}-${currentHour}-${currentMinute}-${currentSecond}-${currentMilisecond}-${currentTime}`);
    return `${currentMonth < 10 ? '0' : ''}${currentMonth}-${currentDate < 10 ? '0' : ''}${currentDate}-${currentYear}-${currentDay}-${currentHour}-${currentMinute}-${currentSecond}-${currentMilisecond}-${currentTime}`
    
}
