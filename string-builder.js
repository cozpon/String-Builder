// jshint esversion:6

class StringBuilder {
  constructor(string){
    this.string = string;
}
  normalString(){
    return this.string.trim();
}
}

module.exports = StringBuilder;