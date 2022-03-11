import { useState } from 'react';

function useLocalStorage(key, initialValue) {
  const [localStorageValue, setLocalStorageValue] = useState(() =>
    getLocalStorageValue(key, initialValue)
  );

  //this setValue should run every time we update our state. next we take the value and set it to our state[localStorageValue] using setLocalStorageValue and we want to set it to local storage. we have to check if its a function. because when you use your 'set' whatever it is. you can pass in a straight value or a function

  const setValue = value => {
    // checking it its a function
    const valueToStore =
      value instanceof Function ? value(localStorageValue) : value;
    // set to state
    setLocalStorageValue(value);
    //set to local storage
    localStorage.setItem(key, JSON.stringify(valueToStore));
    // we can store an array because of JSON.stringify and JSON.parse
  };

  return [localStorageValue, setValue];
}

function getLocalStorageValue(key, initialValue) {
  // of there is already a key in local storage from Task the value will get put in itemFromStorage
  const itemFromStorage = localStorage.getItem(key);
  return itemFromStorage ? JSON.parse(itemFromStorage) : initialValue;
  // to be able to store the Json as a string and parse it back if its an array or something
}

export default useLocalStorage;
