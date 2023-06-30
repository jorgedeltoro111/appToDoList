import React from 'react';

function useLocalStorage(itemName, initialValue) {
    const localStorageItem = localStorage.getItem(itemName);
    let parsedItem = localStorageItem ? JSON.parse(localStorageItem) : initialValue;
  
    if (!Array.isArray(parsedItem)) {
      parsedItem = initialValue;
    }
  
    const [item, setItem] = React.useState(parsedItem);
  
    const saveItem = (newItem) => {
      localStorage.setItem(itemName, JSON.stringify(newItem));
      setItem(newItem);
    };
  
    return [saveItem, item];
  }

  export { useLocalStorage };