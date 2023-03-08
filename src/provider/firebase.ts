import {
  FirebaseAuthProvider,
  FirebaseDataProvider,
  RAFirebaseOptions,
} from "react-admin-firebase";
import { getFunctions } from "firebase/functions";
import { DataProvider } from "react-admin";
import { getStorage } from "firebase/storage";
import useFirebaseEmulator from "config";
import config from "./config.json";
import CustomProviders from "./customProviders";

const options: RAFirebaseOptions = {};
const isProd = process.env.NODE_ENV === "production";

export const dataProviderLegacy = FirebaseDataProvider(config, options);
export const authProvider = FirebaseAuthProvider(config, options);
export const db = dataProviderLegacy.app.firestore();
export const cloudFunctions = getFunctions();
export const storage = getStorage();

if (useFirebaseEmulator && !isProd) db.useEmulator("localhost", 8090);

const getCustomConvertor = async (
  resource: string,
  params: any,
  method: keyof DataProvider
) => {
  const provider = CustomProviders.find((e) => e.resource === resource);

  if (provider) {
    if (provider[method] !== undefined)
      return provider[method](resource, params);
    else if (!isProd) {
      console.warn(
        `${method}() Not Implemented For ${resource}.`,
        "Ignore if using default provider is fine."
      );
    }
  }
  return dataProviderLegacy[method](resource, params);
};

const DataProviderCustom: DataProvider = {
  create: async (resource, params) =>
    getCustomConvertor(resource, params, "create"),

  delete: async (resource, params) =>
    getCustomConvertor(resource, params, "delete"),

  deleteMany: async (resource, params) =>
    getCustomConvertor(resource, params, "deleteMany"),

  getList: async (resource, params) =>
    getCustomConvertor(resource, params, "getList"),

  getOne: async (resource, params) =>
    getCustomConvertor(resource, params, "getOne"),

  getMany: async (resource, params) =>
    getCustomConvertor(resource, params, "getMany"),

  getManyReference: async (resource, params) =>
    getCustomConvertor(resource, params, "getManyReference"),

  update: async (resource, params) =>
    getCustomConvertor(resource, params, "update"),

  updateMany: async (resource, params) =>
    getCustomConvertor(resource, params, "updateMany"),
};

export const dataProvider = DataProviderCustom;
