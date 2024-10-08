export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      const res = { status: 200, body: "Success" };
      resolve(res);
    } else {
      const error_message = new Error("The fake API is not working currently");
      reject(error_message);
    }
  });
}
