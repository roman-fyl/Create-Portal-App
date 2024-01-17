const saveToLocal = ({ key, value }) => {
    try {
        let existingData = JSON.parse(localStorage.getItem(key)) || {};

        if (value !== undefined && value !== null) {
            existingData = { ...existingData, ...value };

            localStorage.setItem(key, JSON.stringify(existingData));
            console.log(`Stored data: ${key}`, existingData);
            return existingData;
        } else {
            console.error(`Error: Value is undefined or null for key ${key}`);
            return existingData;
        }
    } catch (error) {
        console.error(`Error updating data for key ${key}:`, error);
        return null;
    }
};

export default saveToLocal;
