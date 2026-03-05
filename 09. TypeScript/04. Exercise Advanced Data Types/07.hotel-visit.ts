type HallwayWithPass = {
  hallway: "A";
  pass?: "Guest";
};

type HallwayWithoutPass = {
  hallway: "C";
};

type TrainFloor = {
  number: 1;
  train: () => void;
} & (HallwayWithPass | HallwayWithoutPass);

type DineFloor = {
  number: 2;
  dine: () => void;
} & (HallwayWithPass | HallwayWithoutPass);

type SleepFloor = {
  number: 3;
  sleep: () => void;
  hallway: "A" | "C";
};

function visitFloor(floor: TrainFloor | DineFloor | SleepFloor) {
  switch (floor.number) {
    case 1:
      floor.train();
      return;
    case 2:
      floor.dine();
      return;
    case 3:
      floor.sleep();
      return;
  }
}

///---Working Calls---
visitFloor({ train() {}, number: 1, hallway: "A", pass: "Guest" });
visitFloor({ dine() {}, number: 2, hallway: "A" });
visitFloor({ sleep() {}, number: 3, hallway: "C" });
visitFloor({ train() {}, number: 1, hallway: "C" });
visitFloor({ train() {}, number: 1, hallway: "A" });
visitFloor({ dine() {}, number: 2, hallway: "A", pass: "Guest" });
visitFloor({ sleep() {}, number: 3, hallway: "A" });
visitFloor({ dine() {}, number: 2, hallway: "C" });

//---TS Errors---
// visitFloor({ train() {}, number: 1, hallway: "C", pass: "Guest" });
// visitFloor({ train() {}, number: 4, hallway: "A" });
// visitFloor({ train() {}, number: 2, hallway: "A" });
// visitFloor({ train() {}, number: 3, hallway: "C" });
// visitFloor({ train() {}, number: 3, hallway: "C", pass: "Guest" });

// visitFloor({ dine() {}, number: 2, hallway: "C", pass: "Guest" });
// visitFloor({ dine() {}, number: 1, hallway: "A" });
// visitFloor({ dine() {}, number: 1, hallway: "B" });
// visitFloor({ dine() {}, number: 1, hallway: "C" });
// visitFloor({ dine() {}, number: 3, hallway: "C" });
// visitFloor({ dine() {}, number: 1, hallway: "A", pass: "Guest" });

// visitFloor({ sleep() {}, number: 3, hallway: "D" });
// visitFloor({ sleep() {}, number: 4, hallway: "C" });
// visitFloor({ sleep() {}, number: 1, hallway: "C" });
// visitFloor({ sleep() {}, number: 1, hallway: "A" });
// visitFloor({ sleep() {}, number: 2, hallway: "A" });
// visitFloor({ sleep() {}, number: 2, hallway: "C" });
