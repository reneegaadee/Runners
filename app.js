let raceNumber = Math.floor(Math.random() * 1000);
const registeredEarly = true;
const runnerAge = 18;

let runnersNumber
if (runnerAge >= 18) {
  raceNumber = Math.floor(Math.random() * 1000);
} else {
  raceNumber = 1000 + Math.floor(Math.random() * 1000);
};
console.log(`Your number is ${raceNumber}`);

if (runnerAge > 18 && registeredEarly  && raceNumber) {
 console.log('Runners over 18 who registered early will race at 9:30 am');
} else if (runnerAge > 18 && !registeredEarly) {
  console.log("Late adults run at 11:00 am");
} else if (runnerAge < 18) {
 console.log('Youth registrants run at 12:30 pm (regardless of registration)');
} else {
console.log('Go to registration desk')
}
