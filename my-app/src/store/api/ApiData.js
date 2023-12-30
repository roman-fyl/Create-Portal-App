
export const fetchData = async (requestedPage) => {
    try {
      const response = await fetch(`https://typicode.com/${requestedPage}`);
      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      console.error(`Error fetching ${requestedPage}:`, error);
    }
  };