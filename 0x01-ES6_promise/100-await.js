import { createUser, uploadPhoto } from './utils';

export default async function asyncUploadUser() {
  try {
    const upPhoto = await uploadPhoto();
    const creUser = await createUser();
    return {
      photo: upPhoto,
      user: creUser,
    };
  } catch (error) {
    return {
      photo: null,
      user: null,
    };
  }
}
