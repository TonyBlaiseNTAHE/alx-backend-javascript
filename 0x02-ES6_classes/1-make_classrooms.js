import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const classObjt = [];
  const classValues = [19, 20, 34];

  // eslint-disable-next-line guard-for-in
  for (const i in classValues) {
    const temp = new ClassRoom(classValues[i]);
    classObjt.push(temp);
  }
  return classObjt;
}
