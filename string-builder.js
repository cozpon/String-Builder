// jshint esversion:6

class StringBuilder {
  constructor(string){
    this.string = string;
  }

  normalString(){
    this.string = this.string.trim();
    return this.string;
  }

  reverse() {
    let split = this.string.split('');
    return split.reverse().join('');
  }

  capitalize() {
    this.normalString();

    let split = this.string.split(' ');

    for (let i = 0; i < split.length; i++) {
      split[i] = split[i].charAt(0).toUpperCase() + split[i].slice(1);
    }

    this.string = split.join(' ');

    return this.string;
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