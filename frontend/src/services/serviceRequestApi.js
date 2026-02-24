import axios from "axios";

const BASE_URL = "http://localhost:8080/api/service-requests";

export const getAllRequests = () => axios.get(BASE_URL);

export const createRequest = (data) => axios.post(BASE_URL, data);

export const updateRequest = (id, data) =>
  axios.put(`${BASE_URL}/${id}`, data);

export const deleteRequest = (id) =>
  axios.delete(`${BASE_URL}/${id}`);