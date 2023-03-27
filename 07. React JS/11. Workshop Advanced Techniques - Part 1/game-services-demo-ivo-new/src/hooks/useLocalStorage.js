import { useEffect, useState, useId } from "react";

export const useLocalStorage = (key, initialValue) => {
  //export const useLocalStorage = (initialValue) => {
  //const key = useId();
  const [state, setState] = useState(() => {
    const persistedStateSerialized = localStorage.getItem(key);

    if (persistedStateSerialized) {
      const persistedState = JSON.parse(persistedStateSerialized);
      return persistedState;
    }

    return initialValue;
  });
  // const [state, setState] = useState(initialValue);

  //   useEffect(() => {
  //     const persistedStateSerialized = localStorage.getItem(key);

  //     if (persistedStateSerialized) {
  //       const persistedState = JSON.parse(persistedStateSerialized);
  //       setState(persistedState);
  //     }
  //   }, []);

  const setLocalStorageState = (value) => {
    setState(value);

    localStorage.setItem(key, JSON.stringify(value));
  };

  return [state, setLocalStorageState];
};

// const [neshto, setNeshto] = useState(defaultValue);
// const [asd, setAsd] = useLocalStorage("auth", defaultValue);
