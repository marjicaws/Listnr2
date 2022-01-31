import api from "./apiConfig";


////////////////// Listnrs ///////////////////

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
    const response = await api.get(`/listnr/${id}/`);
    console.log(response);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createMusician = async (musician) => {
  try {
    const response = await api.post("/listnr/", musician);
    console.log(response);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateMusician = async (id, musician) => {
  try {
    const response = await api.put(`/listnr/${id}/`, musician);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteMusician = async (id) => {
  try {
    const response = await api.delete(`/listnr/${id}/`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

////////////////////////Songs///////////////////////

export const getSongs = async () => {
  try {
    const response = await api.get("/song/");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getSong = async (id) => {
  try {
    const response = await api.get(`/song/${id}/`);
    console.log(response);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createSongPost = async (music) => {
  try {
    const headers = {
        "Accept": "application/json, text/plain, */*",
        "Content-Type": "application/json",
        'Access-Control-Allow-Origin': '*'
    }
    const response = await api.post("/song/", music, headers);
    console.log(response);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateSongPost = async (id, music) => {
  try {
    const response = await api.put(`/song/${id}/`, music);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteSongPost = async (id) => {
  try {
    const response = await api.delete(`/song/${id}/`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

///////////////// Reviews ///////////////////

export const getReviews = async () => {
  try {
    const response = await api.get("/review/");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getReview = async (id) => {
  try {
    const response = await api.get(`/review/${id}/`);
    console.log(response);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createReview = async (critique) => {
  try {
    const response = await api.post("/review/", critique);
    console.log(response);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateReview = async (id, critique) => {
  try {
    const response = await api.put(`/review/${id}/`, critique);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteReview = async (id) => {
  try {
    const response = await api.delete(`/review/${id}/`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
