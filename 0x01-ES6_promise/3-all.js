import {uploadPhoto, createUser} from './utils.js';


export default function handleProfileSignup() {
     Promise.all([uploadPhoto(), createUser()])
     .then(([photoRes, createUserRes]) => {
        console.log(`${photoRes.body} ${createUserRes.firstName} ${createUserRes.lastName}`);
     }).catch(error => {
        console.log('Signup system offline');
     });
}