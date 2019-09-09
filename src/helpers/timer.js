export const getTimeStringFromSeconds = (seconds) => {
    const min = Math.floor(seconds/60);
    const sec = seconds % 60;
    return ten(min) + ' : ' + ten(sec);
}

export const ten = (val) => val >= 10 ? val : '0' + val;
