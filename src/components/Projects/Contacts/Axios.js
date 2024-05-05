import axios from 'axios';
export const loadList = async(url) => {
  try{
    const response = await axios.get(url);
    return response.data;
    } catch (error) {
      throw new Error("Failed to fetch data"); 
    }
};

