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
