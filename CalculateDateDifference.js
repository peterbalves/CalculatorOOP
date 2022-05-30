const date1 = new Date('05/21/2022');
const date2 = new Date('05/20/2022');
const date3 = new Date('05/19/2022');
let calculo1 = (date1.getTime() - date2.getTime()) / (1000 * 3600 * 24);
let calculo2 = (date1.getTime() - date3.getTime()) /(1000 * 3600 * 24);
let calculo3 = (date2.getTime() - date3.getTime()) / (1000 * 3600 * 24);

alert(`The difference between date ${date1.getDate()} and date ${date2.getDate()} is date ${calculo1} days`);
alert(`The difference between date ${date1.getDate()} and date ${date3.getDate()} is date ${calculo2} days`);
alert(`The difference between date ${date2.getDate()} and date ${date3.getDate()} is date ${calculo3} days`);
