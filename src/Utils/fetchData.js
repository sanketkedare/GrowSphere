const fetchData = async (API) => {
  try {
    const response = await fetch(API);
    const JSON = await response.json();

    return {succes: true,data:JSON};
  } catch (error) {
    return { succes : false, error : error};
  }
};

export default fetchData;
