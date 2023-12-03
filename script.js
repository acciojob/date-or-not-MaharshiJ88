var isDate = function (input) {
  //   write your code here
	// Check if the input is a Date object
  if (input instanceof Date) {
    return true;
  }

  // Check if the input is a valid date string
  if (typeof input === 'string') {
    const parsedDate = new Date(input);
    return !isNaN(parsedDate.getTime());
  }

  // Check if the input is a valid timestamp (number)
  if (typeof input === 'number' && input >= 0) {
    const timestampDate = new Date(input);
    return !isNaN(timestampDate.getTime());
  }

  // If none of the above conditions are met, return false
  return false;
};

// Do not change the code below.
const input = prompt("Enter Date.");
alert(isDate(input));
