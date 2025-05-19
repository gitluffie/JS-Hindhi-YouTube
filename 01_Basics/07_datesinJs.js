// Create a new Date object
const newDate = new Date();

// Log the full date and time
console.log("Full date and time:", newDate.toString());

// Get and log the weekday name
const weekday = newDate.toLocaleString('default', {
    weekday: "long"
});
console.log("Today is:", weekday);
