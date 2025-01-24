
const fetchData = async (API) => 
{

  try {
    const response = await fetch(API);
    const JSON = await response.json();
    const obj =  {succes: true,data:JSON}
    return obj;
  } catch (error) 
  {
    return { succes : false, error : error};
  }
};

export default fetchData;
