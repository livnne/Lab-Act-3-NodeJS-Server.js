function person(fName, lName) {
  this.fName = fName;
  this.lName = lName;

  this.fuName = function () {
    return fName + ' ' + lName;
  };
}
module.exports = person;
