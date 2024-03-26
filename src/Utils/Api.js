import axios from "axios";

const API_URL = " https://newsdata.io/api/1/news?apikey=pub_40667f2abcf2219cc79fd18d57bfda6d5b93b&language=en";;
const API_KEY = "pub_40667f2abcf2219cc79fd18d57bfda6d5b93b";

export const fetchNewsBasedOnText = async (text) => {
  try {
    const response = await axios.get(
      API_URL
     
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching news:', error);
    throw error;
  }
};
