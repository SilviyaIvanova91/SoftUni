function highJump(input) {
  let index = 0;
  let final = Number(input[index++]);
  let jump = 0;

  let command = input[index++];
  let fails = 0;
  let start = final - 30;

  while (final !== command) {
    let jumping = Number(command);

    if (start > final) {
      break;
    }
    if (start >= jumping) {
      fails++;
      jump++;
      if (fails === 3) {
        break;
      }
    } else {
      start += 5;
      jump++;
      fails = 0;
    }

    command = input[index++];
  }

  if (start > final) {
    console.log(
      `Tihomir succeeded, he jumped over ${final}cm after ${jump} jumps.`
    );
  } else {
    console.log(`Tihomir failed at ${start}cm after ${jump} jumps.`);
  }
}

highJump(["231", "205", "212", "213", "228", "229", "230", "235"]);
highJump(["250", "225", "224", "225", "228", "231", "235", "234", "235"]);

 function highJump(input) {
     let index = 0;
     let target = Number(input[index++]);
     let oldstart = target - 30;
     let start = 0;
     let fails = 0;
     let everyJump = 0;
     let counterJump = 0;
     let command = input[index++];
     while (target >= everyJump) {
       let currentJump = Number(command);
       let start = oldstart;
       start += start;
       counterJump++;

       if (currentJump > start) {
         if (currentJump > target) {
           break;
         }
         start += 5;
         fails = 0;
       } else {
         fails++;
       }
       if (fails === 3) {
         break;
       }
       command = input[index++];
     }
     if (target <= everyJump) {
       console.log(
         `Tihomir succeeded, he jumped over ${start}cm after ${counterJump} jumps.`
       );
     } else {
       console.log(`Tihomir failed at ${start}cm after ${counterJump} jumps.`);
     }
   }
