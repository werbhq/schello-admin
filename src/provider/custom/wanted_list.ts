import MAPPING from "provider/mapping";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";
import { v4 as uuidv4 } from "uuid";
import { DataProviderCustom } from "types/DataProvider";
import { dataProviderLegacy, storage } from "provider/firebase";

/**
 * Don't call this directly
 * Use dataProvider
 */
export const WantedListProvider: DataProviderCustom = {
  resource: MAPPING.WANTED_LIST,

  create: async (resource, params) => {
    console.log(params.data);
    let photoId: string | null = null;
    let photoUrl: string | null = null;

    if (params.data.photoUrl) {
      const fileType = params.data.photoUrl.title.split(".").pop();
      photoId = `wanted-list/${uuidv4()}.${fileType}`;
      const storageRef = ref(storage, photoId);
      const photo = await uploadBytes(storageRef, params.data.photoUrl.rawFile);
      const publicUrl = await getDownloadURL(photo.ref);
      photoUrl = publicUrl;
    }

    return await dataProviderLegacy.create(resource, {
      data: {
        ...params.data,
        photoUrl,
        photoId,
      },
    });
  },

  update: async (resource, params) => {
    let photoId: string | null = params.previousData.photoId;
    let photoUrl: string | null = params.previousData.photoUrl;

    if (params.data.photoUrl?.rawFile) {
      const fileType = params.data.photoUrl.title.split(".").pop();

      photoId = `wanted-list/${uuidv4()}.${fileType}`;
      const storageRef = ref(storage, photoId);
      const photo = await uploadBytes(storageRef, params.data.photoUrl.rawFile);
      const publicUrl = await getDownloadURL(photo.ref);
      photoUrl = publicUrl;

      // Delete old image
      const oldRef = ref(storage, params.previousData.photoId);
      await deleteObject(oldRef);
    }

    const newData = await dataProviderLegacy.update(resource, {
      ...params,
      data: {
        ...params.data,
        photoId,
        photoUrl,
      },
    });

    console.log(newData);
    return newData;
  },
};
