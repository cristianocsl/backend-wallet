const dateForMongodb = async (date) => {
  const HYPHEN = '-';
  const BAR = '/';

  function splitDate(separator) {
    const oldDateFormat = date.split(separator);
    const day = oldDateFormat[0];
    const month = oldDateFormat[1];
    const year = oldDateFormat[2];
    const newDateFormat = `${year}${HYPHEN}${month}${HYPHEN}${day}`;
    return newDateFormat;
  }

  const newDateFormat = date.includes(BAR)
    ? splitDate(BAR)
    : splitDate(HYPHEN);

  return newDateFormat;
};

module.exports = dateForMongodb;
