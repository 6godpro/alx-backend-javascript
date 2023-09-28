import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  const photo = uploadPhoto();
  const user = createUser();

  return Promise.all([photo, user]).then((res) => {
    const result = {};

    const [photo, user] = res;

    result.photo = photo;
    result.user = user;

    return result;
  });
}
