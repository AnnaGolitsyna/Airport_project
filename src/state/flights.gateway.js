
export const fetchFlights = async (url) => {
  try {
    const resp = await fetch(url);
    if (!resp.ok) {
      throw new Error(
        `Failed to fetch flights. HTTP status code ${resp.status}`
      );
    }
    const response = await resp.json();
    return response;
    
  } catch (error) {
    throw new Error(error.message);
  }
};


