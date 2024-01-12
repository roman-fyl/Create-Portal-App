const SaveLocalStorage = ({key, value}) => {
    localStorage.setItem(key, JSON.stringify(value));
    console.log(`Stored data: ${key}`, value )
    return;
};

export default SaveLocalStorage;