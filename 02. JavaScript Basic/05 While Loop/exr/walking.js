function walking(input) {
  let index = 0;
  let command = input[index++];
  let endGoal = 10000;
  isReachedGoal = true;

  while (command !== "Going home") {
    let steps = Number(command);
    endGoal -= steps;
    if (endGoal <= 0) {
      console.log(`Goal reached! Good job!`);
      console.log(`${Math.abs(endGoal)} steps over the goal!`);
      break;
    }
    command = input[index++];
  }
  if (command === "Going home") {
    let steps = Number(input[index++]);
    endGoal -= steps;
    if (endGoal <= 0) {
      console.log(`Goal reached! Good job!`);
      console.log(`${Math.abs(endGoal)} steps over the goal!`);
    } else {
      console.log(`${Math.abs(endGoal)} more steps to reach goal.`);
    }
  }
}

walking(["1000", "1500", "2000", "6500"]);
walking(["1500", "300", "2500", "3000", "Going home", "200"]);
walking(["1500", "3000", "250", "1548", "2000", "Going home", "2000"]);
walking(["125", "250", "4000", "30", "2678", "4682"]);

 function walking(input) {
   let index = 0;
   let command = input[index++];
   let target = 10000;
   let steps = 0;

   while (command !== "Going home") {
     let tempSteps = Number(command);
     steps += tempSteps;
     if (steps >= target) {
       console.log(`Goal reached! Good job!`);
       console.log(`${Math.abs(steps - target)} steps over the goal!`);
       break;
     }
     command = input[index++];
   }
   if (command === "Going home") {
     let tempSteps = Number(input[index++]);
     steps += tempSteps;
     if (steps >= target) {
       console.log(`Goal reached! Good job!`);
       console.log(`${Math.abs(steps - target)} steps over the goal!`);
     } else {
       console.log(`${Math.abs(steps - target)} more steps to reach goal.`);
     }
   }
 }
