//format date
function formatDate(now) {
  let hours = now.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = now.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let today = now.getDay();
  let days = ["Sun", "Mon", "Tue", "Wed", "Thurs", "Fri", "Sat"];
  let day = days[today];
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let month = months[now.getMonth()];
  let date = now.getDate();

  return `${day}, ${month} ${date} - ${hours}:${minutes}`;
}

let now = new Date();
let h3 = document.querySelector("h3");
h3.innerHTML = formatDate(now);
