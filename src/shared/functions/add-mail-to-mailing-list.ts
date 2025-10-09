import axios from "axios";

export interface AddEmailToMailingListPayload {
  mailingListId: string;
  name: string;
  email: string;
  phonenumber: string;
}

export function addEmailToMailingList({ mailingListId, name, email, phonenumber }: AddEmailToMailingListPayload) {
    return new Promise((resolve) => {
      axios
        .post("https://n8nserver.vps.webdock.cloud/webhook/6e3a9809-16ad-45a0-b10a-f23ee775fd8f", {
          mailingListId,
          email: email,
          name: name,
          phone: phonenumber,
        })
        .then((res) => {
          resolve(res);
        })
        .catch((error) => {
          resolve(error);
        });
    });
  }
