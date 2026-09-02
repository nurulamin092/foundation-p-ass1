// Question 1: Value Detective Write a function describeValue that takes any value and returns a string with two pieces of information joined by a space, a pipe, and another space:

function describeValue(value) {
  const type = typeof value;
  const truthiness = value ? "truthy" : "falsy";
  return `${type} | ${truthiness}`;
}


// Question 2: Bangladesh Weekend Machine Write a function getDayType that takes a day name and returns:

function getDayType(day) {

  const normalized = day.toLowerCase();

  switch (normalized) {
    case "friday":
    case "saturday":
      return "Weekend";
    case "sunday":
    case "monday":
    case "tuesday":
    case "wednesday":
    case "thursday":
      return "Working Day";
    default:
      return "Invalid Day";
  }
}

// Question 3: Username Gatekeeper Write a function validateUsername that takes a username and checks it against these rules, in this order:

function validateUsername(username) {

  if (username.length < 4) {
    return "Too Short";
  }

  if (username.includes(" ")) {
    return "No Space Allowed";
  }

  if (username.toLowerCase().includes("admin")) {
    return "Reserved Word";
  }
  return "Available";
}


// Question 4: Dhaka CNG Fare Meter Write a function getCngFare(distance, isNight, waitingMinutes) that returns the total fare in taka.

function getCngFare(distance, isNight = false, waitingMinutes = 0) {

  let distanceFare;
  if (distance <= 2) {
    distanceFare = 50;
  } else {
    distanceFare = 50 + (distance - 2) * 15;
  }
  const waitingCharge = waitingMinutes * 2;
  let total = distanceFare + waitingCharge;
  if (isNight) {
    total *= 1.2;
  }

  return total;
}

const fare1 = getCngFare(5, false, 10);
console.log(fare1); 