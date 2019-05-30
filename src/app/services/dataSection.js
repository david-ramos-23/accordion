export const dataSection = async (id) => {
  const url = `${process.env.API_URL}/section/${id}`;

  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  };
  try {
      const response = await fetch(url, options)
      const json = await response.json();
      return json;
  } catch (err) {
      console.log('Error getting data section', err)
  }

};
