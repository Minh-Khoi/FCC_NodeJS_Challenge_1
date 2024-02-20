
function formatDate(date) {
  // Day of the week
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const day = days[date.getDay()];

  // Month
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const month = months[date.getMonth()];

  // Date, two digits with leading zero
  const dateNumber = date.getDate().toString().padStart(2, '0');

  // Year
  const year = date.getFullYear();

  // Hours, two digits with leading zero
  const hours = (date.getHours()-7).toString().padStart(2, '0');

  // Minutes, two digits with leading zero
  const minutes = date.getMinutes().toString().padStart(2, '0');

  // Seconds, two digits with leading zero
  const seconds = date.getSeconds().toString().padStart(2, '0');

  // Timezone (using GMT for consistency)
  const timezone = 'GMT';

  // Assemble the formatted string
  const formattedDate = `${day}, ${dateNumber} ${month} ${year} ${hours}:${minutes}:${seconds} ${timezone}`;

  return formattedDate;
}

module.exports = {formatDate};