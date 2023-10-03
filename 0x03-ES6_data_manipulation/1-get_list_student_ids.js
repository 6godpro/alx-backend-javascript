export default function getListStudentIds(arrayOfStudents) {
  if (!Array.isArray(arrayOfStudents)) {
    return [];
  }
  const studentIDs = [];
  arrayOfStudents.map((student) => studentIDs.push(student.id));

  return studentIDs;
}
