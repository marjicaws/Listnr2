import api from "./apiConfig";

export const getMusicians = async () => {
  try {
    const response = await api.get("/listnr/");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getMusician = async (id) => {
  try {
    const response = await api.get(`/listnr/${id}`);
    console.log(response)
    return response.data;
  } catch (error) {
    throw error;
    
  }
};

export const createMusician = async (musician) => {
    try {
      const response = await api.post("/listnr/", musician);
      console.log(response)
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  export const updateMusician = async (id, musician) => {
    try {
      const response = await api.put(`/listnr/${id}`, musician);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  export const deleteMusician = async (id) => {
    try {
      const response = await api.delete(`/listnr/${id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  };
