export interface UserStorageData {
  name: string;
  email: string;
  phone: string;
}

export function setUserDataInLocalStorage(data: UserStorageData) {
  localStorage.setItem("user-data", JSON.stringify(data));
}

export function getUserDataFromLocalStorage(): UserStorageData | null {
  return JSON.parse(localStorage.getItem("user-data") || "null");
}
