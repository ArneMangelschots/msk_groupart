const checkDates = (a, b1, b2) => {
  if (a < b1 && a >= b2) {
    return true;
  } else {
    return false;
  }
};

export default checkDates;
