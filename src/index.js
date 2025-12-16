"use strict";
/**
 * 
 * @param {number} fatherAge
 * @param {number} sonAge 
 * @returns number diference of years
 */
const yearDiferent = (fatherAge, sonAge) => {
  let year = 0;
  if (
    sonAge > fatherAge ||
    fatherAge <= 0 ||
    sonAge <= 0 ||
    fatherAge - sonAge < 15
  ) {
    year = NaN;
    return NaN;
  } else {
    year = fatherAge - sonAge - sonAge;
    return year ;
  }
};

const message = (year) => {
  if (year === NaN) {
    console.log("Invalid data");
  } else if (year === 0) {
    console.log("The father is twice as old as the son");
  } else if (year > 0) {
    console.log(`The father will be twice as old as the son in ${year} years`);
  } else {
    console.log(`The father was twice as old as the son ${-year} years ago`);
  }
};
const result = yearDiferent(44, 20);
message(result);
console.log(typeof yearDiferent(44, 20) === "number");
