// jshint esversion:6

class StringBuilder {
  constructor(string){
    this.string = string;
  }

  normalString(){
    return this.string.trim();
  }

  reverse() {
    let split = this.string.split('');
    return split.reverse().join('');
  }

  capitalize() {
    let capitalize = this.string;
    return capitalize.charAt(0).toUpperCase() + capitalize.slice(1);
  }

  toArray() {
    let stringArr = [];
    stringArr.push(this.string);
    return stringArr;
  }

  append(thing) {
    let newArray = this.toArray();
    newArray.push(thing);
    this.string = newArray.join(" ");
    return this.string;
  }

  toString() {
    console.log(this.string);
    return "SB: " + this.string;
  }
}

module.exports = StringBuilder;