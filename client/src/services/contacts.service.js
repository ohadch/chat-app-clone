import apiService from "./api.service";


export default {
    getContacts
}


async function getContacts() {
    const {contacts} = await apiService.request("GET", "/api/contacts")
    return contacts;
}
