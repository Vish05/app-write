import { Client as Appwrite, Databases, Account } from "appwrite";
import { Server } from "../utils/config";

let api = {
  sdk: null,

  provider: () => {
    if (api.sdk) {
      return api.sdk;
    }
    let appwrite = new Appwrite();
    appwrite.setEndpoint(Server.endpoint).setProject(Server.project);
    const account = new Account(appwrite);
    const database = new Databases(appwrite);

    api.sdk = { database, account };
    return api.sdk;
  },

  // createAccount: (email, password, name) => {
  //   return api.provider().account.createAnonymousSession();
  // },

  getAccount: () => {
    let account = api.provider().account;
    return account.get();
  },

  createSession: () => {
    return api.provider().account.createAnonymousSession();
  },

  deleteCurrentSession: () => {
    return api.provider().account.deleteSession("current");
  }
};

export default api;
