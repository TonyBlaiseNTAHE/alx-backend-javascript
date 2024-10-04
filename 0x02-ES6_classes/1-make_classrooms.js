import ClassRoom from "./0-classroom";

export default function initializeRooms() {
  let array = [19, 20, 34];
  let newClassRooms = [];
  for (let i = 0; i < array.length; i++) {
    const newClass = new ClassRoom(array[i]);
    newClassRooms.push(newClass);
  }
  return newClassRooms;
}
