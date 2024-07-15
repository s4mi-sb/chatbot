const now = new Date();
const year = now.getFullYear();
const month = now.getMonth();
const date = now.getDate();
const day = now.getDay();
let hours = now.getHours();
const min = now.getMinutes();
const sec = now.getSeconds();
const monthArr = ["January", "Febuary", "March", 
"April", "May", "June", "July", "August", "September",
"October", "November", "December"
];
const dayArr = ["Sunday", "Monday", "Tuesday", "Wednesday", 
"Thursday", "Friday", "Saturday"
];
const amPm = hours >= 12 ? 'PM' : 'AM';
hours = hours % 12 || 12;

const fileName = `${dayArr[day]}, ${monthArr[month]},${date},${year}-${hours}:${min}:${sec} ${amPm}`;

export default fileName;