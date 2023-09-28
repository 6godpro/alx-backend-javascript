import { uploadPhoto, createUser } from "./utils";

export default async function asyncUploadUser() {
  // return Promise.all([uploadPhoto(), createUser()])
  //   .then((res) => {
  //     const result = {};
  //     const [photo, user] = res;

  //     result.photo = photo;
  //     result.user = user;

  //     return result;
  //   })
  //   .catch(() => {
  //     return { photo: null, user: null }
  //   });
  const [photo, user] = await Promise.all([uploadPhoto(), createUser()]);
  try {
    return {photo, user}
  } catch {
    return { photo: null, user: null }
  }
}
