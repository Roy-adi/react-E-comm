import axios from "axios";
export  const Base_url = "http://localhost:1337"

const params = {
    headers: {
        Authorization: "Bearer f3c563e40eca7e5f96a994532a450b7780fe45b7975c9e5d7b5430c6b1b4d9cde56826ea1eb03ed2706d8ecb61f4028087d0f59864fe6caa6031c8990899d6e8dd3764ee31800927cfa2b10929c6345bff01a38137f958293d0bb1f839fabab5a537c89402ab36bd6e6ba3711890dd27e126a39c83b2b40f45c7f9b32a4dec76",
    },
};


export const fetchDataFromApi = async (url) => {
   
    try {
        const { data } = await axios.get(
            Base_url + url,
            params
        );
        console.log(data);
        return data;
    } catch (err) {
        console.log(err + "went wrong");
        return err;
    }
};

export const sendDataFromApi = async (url, params) => {
    console.log('Sending data:', params);
    try {
        const { data } = await axios.post(
            Base_url + url,
            params
        );
        console.log('Response data:', data);
        return data;
    } catch (err) {
        console.log(err + "went wrong");
        return err;
    }
};




const axiosInstance = axios.create({
    baseURL: Base_url, // Use baseURL property
    headers: {
      Authorization: "Bearer f3c563e40eca7e5f96a994532a450b7780fe45b7975c9e5d7b5430c6b1b4d9cde56826ea1eb03ed2706d8ecb61f4028087d0f59864fe6caa6031c8990899d6e8dd3764ee31800927cfa2b10929c6345bff01a38137f958293d0bb1f839fabab5a537c89402ab36bd6e6ba3711890dd27e126a39c83b2b40f45c7f9b32a4dec76",
    },
  });
  
  export default axiosInstance;