/*********** Show Nav On Scroll **********/
const nav = document.querySelector('.nav');
window.addEventListener("scroll", ()=>{
  if (this.scrollY > 20) {
    nav.classList.add('active');
  } else {
    nav.classList.remove('active');
  }
});
const sushanti = {
  firstName: 'Sushant',
  lastName:  'Kumar',
  birthYear: 2001,
  friends: ['Iffat','Jahan','Manha'],
  hasDriversLicense: false,
  calcAge: function() {
    this.age = new Date().getFullYear() - this.birthYear;
    return this.age;
  },
  getSummary: function() {
    return `${this.firstName} is a ${this.calcAge()}-year old guy, and he has ${this.hasDriversLicense ? 'a' : 'no'} drivers license`;
  }
};
console.log(sushanti.getSummary())