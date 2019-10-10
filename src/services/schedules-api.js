import tokenService from "../utils/tokenService";

const BASE_URL = "/api/schedule";

// export function getAll() {
//   return fetch(BASE_URL).then(res => res.json());
// }
export async function getAll(sched) {
  try {
    return fetch(BASE_URL, {
      // taken from create below
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: "Bearer " + tokenService.getToken()
      },
      body: JSON.stringify(sched)
      // above taken from create below
    }).then(res => res.json());
  } catch (error) {
    // always add a try catch block
    console.error(error);
  }
}

export function create(sched) {
  // same stuff
  return fetch(BASE_URL, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization: "Bearer " + tokenService.getToken()
    },
    body: JSON.stringify(sched)
  }).then(res => res.json());
}
// this is es5 promises
// export function update(sched) {
//   return fetch(`${BASE_URL}/${sched._id}`, {
//     method: "PUT",
//     headers: { "content-type": "application/json" },
//     body: JSON.stringify(sched)
//   })
//     .then(res => res.json())
//     .catch(error => console.error(error)); // always add a .catch(err)
// }

// this is es6 async await
export async function asyncUpdate(sched) {
  // this function runs properly but server returns 401
  // TODO : use the getToken function to properly put your token in the headers then every single fetch should use the token the same way
  try {
    const response = await fetch(`${BASE_URL}/${sched._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        Authorization: "Bearer " + tokenService.getToken()
      },
      body: JSON.stringify(sched)
    });
    const updatedRecord = await response.json();
    return updatedRecord;
  } catch (error) {
    // always add a try catch block
    console.error(error);
  }
}

export function deleteOne(id) {
  return fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
    headers: {
      "content-type": "application/json",
      Authorization: "Bearer " + tokenService.getToken()
    }
  }).then(res => res.json());
}
