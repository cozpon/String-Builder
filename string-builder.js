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
}

module.exports = StringBuilder;