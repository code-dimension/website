import axios from "axios";

export function checkIfEmailIsStudent(email: string): Promise<{ isStudent: boolean }> {
  return axios
    .post("https://n8nserver.vps.webdock.cloud/webhook/v2/check-student", {
      email,
    })
    .then((res) => {
      return res.data;
    });
}
