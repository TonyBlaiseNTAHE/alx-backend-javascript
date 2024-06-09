// function definition
export default function updateStudentGradeByCity(obj, city, newGrade) {
  const studentByLocation = obj.filter((loc) => loc.location === city);

  const updatedStudents = studentByLocation.map((student) => {
    const gradeOject = newGrade.find((grade) => grade.studentId === student.id);

    if (gradeOject) {
      return { ...student, grade: gradeOject.grade };
    }
    return { ...student, grade: 'N/A' };
  });
  return updatedStudents;
}
