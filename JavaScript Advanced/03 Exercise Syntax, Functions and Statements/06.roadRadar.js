function roadRadar(curSpeed, area) {
  let speedLimit = 0;
  switch (area) {
    case "motorway":
      speedLimit = 130;
      break;
    case "interstate":
      speedLimit = 90;
      break;
    case "city":
      speedLimit = 50;
      break;
    case "residential":
      speedLimit = 20;
      break;
  }
  if (curSpeed <= speedLimit) {
    console.log(`Driving ${curSpeed} km/h in a ${speedLimit} zone`);
  } else {
    let diff = curSpeed - speedLimit;
    let status = "";
    if (diff <= 20) {
      status = "speeding";
    } else if (diff > 20 && diff <= 40) {
      status = "excessive speeding";
    } else {
      status = "reckless driving";
    }
    console.log(
      `The speed is ${diff} km/h faster than the allowed speed of ${speedLimit} - ${status}`
    );
  }
}

roadRadar(40, "city");
roadRadar(21, "residential");
roadRadar(120, "interstate");
roadRadar(200, "motorway");
