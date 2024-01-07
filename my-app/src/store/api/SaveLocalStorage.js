const SaveLocalStorage = (data) => {
    localStorage.setItem(data.key, JSON.stringify(data.value));
    return;
};

export default SaveLocalStorage;