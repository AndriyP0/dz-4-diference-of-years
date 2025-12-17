"use strict";
/**
 *
 * @param {number} fatherAge
 * @param {number} sonAge
 * @returns {number} difference of years
 */
const getYearDifferent = (fatherAge, sonAge) => {
  if (
    sonAge <= 0 ||
    fatherAge - sonAge < 15 ||
    typeof fatherAge !== "number" ||
    typeof sonAge !== "number"
  )
    return NaN;
  else return fatherAge - 2 * sonAge;
};

/**
 *
 * @param {number} year
 * @returns {string} message
 */
const sendMessage = (year) => {
  if (Number.isNaN(year)) {
    return "Invalid data";
  }

  switch (true) {
    case year === 0:
      return "The father is twice as old as the son";

    case year === 1:
      return "The father will be twice as old as the son in 1 year";

    case year === -1:
      return "The father was twice as old as the son 1 year ago";

    case year > 0:
      return `The father will be twice as old as the son in ${year} years`;

    default:
      return `The father was twice as old as the son ${Math.abs(year)} years ago`;
  }
};


const result = getYearDifferent(44, 20);
console.log(sendMessage(result));