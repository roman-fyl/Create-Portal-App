let idCounter = parseInt(localStorage.getItem('lastIdCounter')) || 90910001;

export const GenerateId = (existingId) => {
  if (existingId) {
    return existingId; 
  }
    else {
      const newId = idCounter++;
      localStorage.setItem('lastIdCounter', idCounter.toString() );
      return newId;
    }
  };
  