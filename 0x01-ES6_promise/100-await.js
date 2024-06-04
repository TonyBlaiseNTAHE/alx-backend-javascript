import { createUser, uploadPhoto } from './utils';

export default async function asyncUploadUser() {
  const upPhoto = await uploadPhoto();
  const creUser = await createUser();

  if (upPhoto === null || creUser === null) {
    return {
      photo: null,
      user: null,
    };
  }
  return {
    photo: upPhoto,
    user: creUser,
  };
}
