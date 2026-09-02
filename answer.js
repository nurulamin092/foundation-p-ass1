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

