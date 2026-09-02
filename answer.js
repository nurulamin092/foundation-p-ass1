// Question 1: Value Detective Write a function describeValue that takes any value and returns a string with two pieces of information joined by a space, a pipe, and another space:

function describeValue(value) {
  const type = typeof value;
  const truthiness = value ? "truthy" : "falsy";
  return `${type} | ${truthiness}`;
}
