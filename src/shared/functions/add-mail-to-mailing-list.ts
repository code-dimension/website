import axios from "axios";

export interface AddEmailToMailingListPayload {
  mailingListID: string;
  name: string;
  email: string;
  phonenumber: string;
}

export function addEmailToMailingList({
  mailingListID,
  name,
  email,
  phonenumber,
}: AddEmailToMailingListPayload) {
  return axios.post("https://email-server.codedimension.com.br/add-email", {
    mailingListID,
    email: email,
    name: name,
    phone: phonenumber,
  });
}
