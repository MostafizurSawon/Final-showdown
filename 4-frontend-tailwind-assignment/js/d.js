const isoDateString = "2024-06-08T08:51:43.314212Z";
const date = new Date(isoDateString);
const options = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  timeZoneName: 'short'
};

// Convert to a human-readable format
const formattedDate = date.toLocaleString('en-US', options);
console.log(formattedDate);