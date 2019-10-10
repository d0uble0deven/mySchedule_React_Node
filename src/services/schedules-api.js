const BASE_URL = "/api/schedule";

export function getAll() {
  return fetch(BASE_URL).then(res => res.json());
}

export function create(sched) {
  return fetch(BASE_URL, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(sched)
  }).then(res => res.json());
}

export function update(sched) {
  return fetch(`${BASE_URL}/${sched._id}`, {
    method: "PUT",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(sched)
  }).then(res => res.json());
}

export function deleteOne(id) {
  return fetch(`${BASE_URL}/${id}`, {
    method: "DELETE"
  }).then(res => res.json());
}
