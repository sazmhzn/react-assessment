import axios from "axios";

const BASE_URL = `${import.meta.env.VITE_BASE_URL}/albums`;


export const getAllAlbums = () => {
  return new Promise((resolve, reject) => {
    axios.get(BASE_URL).then((response) => {
      resolve(response.data);
    }).catch((error) => {
      reject(error);
    });
  });
};

export const getAlbumByID = (id) => {
  return new Promise((resolve, reject) => {
    axios.get(`${BASE_URL}/${id}/photos`).then((response) => {
      resolve(response.data);
    }).catch((error) => {
      reject(error);
    });
  });
};