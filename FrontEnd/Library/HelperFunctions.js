const categoryURL = "https://localhost:44387/api/category/";
const badgeURL = "https://localhost:44381/api/badge/";

export function GetAll() {
  return fetch(`${categoryURL}`).then(res => res.json());
}

export function GetById(id) {
  return fetch(`${categoryURL}/${id}`).then(res => res.json());
}

export function GetAllBadges() {
  return fetch(`${badgeURL}`).then(res => res.json());
}
