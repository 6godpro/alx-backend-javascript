import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const userPromise = signUpUser(firstName, lastName);
  const photoPromise = uploadPhoto(fileName);

  return Promise.allSettled([userPromise, photoPromise]).then((results) => {
    const res = [];

    results.forEach((result) => {
      if (result.status === 'fulfilled') {
        res.push({ status: result.status, value: result.value });
      } else {
        res.push({ status: result.status, value: `${result.reason}` });
      }
    });
    return res;
  });
}
