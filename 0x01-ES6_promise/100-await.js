import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  return Promise.all([uploadPhoto(), createUser()])
    .then((res) => {
      const result = {};
      const [photo, user] = res;

      result.photo = photo;
      result.user = user;

      return result;
    })
    .catch(() => ({ photo: null, user: null }));
}
