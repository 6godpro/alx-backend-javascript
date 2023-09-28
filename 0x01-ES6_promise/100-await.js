import { uploadPhoto, createUser } from "./utils";

export default async function asyncUploadUser() {
  const photo = uploadPhoto();
  const user = createUser();

  return Promise.all([photo, user]).then((res) => {
    const result = {};

    result.photo = res[1];
    result.user = res[0];

    return result;
  });
}
