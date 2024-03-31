let state = 'idle'
let user = null
let calculated = '1'


// Only allowed to change below

let hasLoggedUser = false; // Flag to track if the message has been logged
const logCalc = () => {
  // Check if 'calculated' is a string and can be converted to a number
  const isString = typeof calculated === 'string' && !isNaN(calculated);
  // Convert 'calculated' to a number if it's a string
  const calculatedAsNumber = isString ? parseInt(calculated) : calculated;
  // Increment 'calculated' by 1
  calculated = calculatedAsNumber + 1;
}

const calcUser = () => {
  logCalc(); // Call logCalc function to update 'calculated'
  // Check conditions to update 'user' and 'state'
  if (calculated > 2) user = 'John';
  if (calculated > 2) state = 'requesting'; // This line might be redundant as it's repeated below
  if (calculated > 3) state = 'idle'; // Overwrites 'state' if 'calculated' is greater than 3
}

const checkUser = () => {
  // Check conditions to log the user message
  if (user && state === 'requesting' && calculated === 3 && !hasLoggedUser) {
    console.log(`User: ${user} (${calculated})`); // Log the user message
    hasLoggedUser = true; // Set the flag to true after logging the message
  }
}


// Only allowed to change code above
checkUser()
calcUser()
checkUser()
calcUser()
checkUser()
calcUser()
checkUser()
calcUser()
checkUser()
calcUser()