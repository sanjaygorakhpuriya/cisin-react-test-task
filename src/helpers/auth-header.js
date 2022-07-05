export function jsonAuthHeader() {
  let user = JSON.parse(sessionStorage.getItem("user"));

  if (user && user.token) {
    return {
      "Content-Type": "application/json",
      Authorization: "Bearer " + user.token,
    };
  } else {
    return {};
  }
}

export function formAuthHeader() {
  let user = JSON.parse(sessionStorage.getItem("user"));

  if (user && user.token) {
    return {
      "Content-Type": "multipart/form-data",
      Authorization: "Bearer " + user.token,
    };
  } else {
    return {};
  }
}
