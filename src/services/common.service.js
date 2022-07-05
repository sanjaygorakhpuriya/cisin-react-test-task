import axios from "axios";
import { jsonAuthHeader, formAuthHeader } from "../helpers/auth-header";

const apiUrl = process.env.REACT_APP_BACKEND_URL;

const AuthHeaderJson = jsonAuthHeader();
const AuthHeaderForm = formAuthHeader();

export async function withTokenGet(apiName) {
  let reqOptions = {
    method: "GET",
    url: `${apiUrl + apiName}`,
    headers: AuthHeaderJson,
  };
  const response = await axios.request(reqOptions);
  return response.data;
}

export async function withOutTokenGet(apiName) {
  let reqOptions = {
    method: "GET",
    url: `${apiUrl + apiName}`
  };
  const response = await axios.request(reqOptions);
  return response.data;
}

export async function withTokenPost(apiName, data) {
  let reqOptions = {
    method: "POST",
    url: `${apiUrl + apiName}`,
    headers: AuthHeaderJson,
    data: data,
  };
  const response = await axios.request(reqOptions);
  return response.data;
}

export async function withoutTokenPost(apiName, data) {
  let reqOptions = {
    method: "POST",
    url: `${apiUrl + apiName}`,
    data: data,
  };
  const response = await axios.request(reqOptions);
  return response.data;
}

export async function withTokenPut(apiName, data) {
  let reqOptions = {
    method: "PUT",
    url: `${apiUrl + apiName}`,
    headers: AuthHeaderJson,
    data: data,
  };
  const response = await axios.request(reqOptions);
  return response.data;
}

export async function withTokenDelete(apiName, data) {
  let reqOptions = {
    method: "Delete",
    url: `${apiUrl + apiName}`,
    headers: AuthHeaderJson,
    data: data,
  };
  const response = await axios.request(reqOptions);
  return response.data;
}

export async function withTokenFormPost(apiName, data) {
  let reqOptions = {
    method: "POST",
    url: `${apiUrl + apiName}`,
    headers: AuthHeaderForm,
    data: data,
  };
  const response = await axios.request(reqOptions);
  return response.data;
}

export async function withTokenFormPut(apiName, data) {
  let reqOptions = {
    method: "PUT",
    url: `${apiUrl + apiName}`,
    headers: AuthHeaderForm,
    data: data,
  };
  const response = await axios.request(reqOptions);
  return response.data;
}