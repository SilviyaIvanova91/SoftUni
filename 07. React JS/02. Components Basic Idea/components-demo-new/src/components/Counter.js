import { useState } from "react";

const getTitle = (count) => {
  switch (count) {
    case 1:
      return "First Blood";
    case 2:
      return "Double Kill";
    case 3:
      return "Tripple Kill";
    case 4:
      return "Multi Kill";
    case 5:
      return "Unstoppable";
    default:
      return "Counter";
  }
};

const Counter = (props) => {
  const [counter, setCounter] = useState(0);

  const incerementCounterHendler = () => {
    setCounter((oldCounter) => oldCounter + 1);
  };

  const decerementCounterHendler = () => {
    setCounter((oldCounter) => oldCounter - 1);
  };

  const clearCounetHandler = () => {
    setCounter(0);
  };

  const title = getTitle(counter);
  //   let title = "Counter";
  //   if (counter == 1) {
  //     title = "First Blood";
  //   } else if (counter == 2) {
  //     title = "Double Kill";
  //   }

  return (
    <div>
      <p style={{ fontSize: Math.max(counter, 1) / 2 + "em" }}>
        {counter > 5 ? "Godlike" : getTitle(counter)}: {counter}
      </p>
      <button onClick={decerementCounterHendler}>-</button>
      {props.canReset && <button onClick={clearCounetHandler}>0</button>}
      {/* if first is true return button if not skip button */}

      {counter < 10 ? (
        <button onClick={incerementCounterHendler}>+</button>
      ) : null}
    </div>
  );
};

export default Counter;
