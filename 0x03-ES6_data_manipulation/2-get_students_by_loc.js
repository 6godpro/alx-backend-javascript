export default function getStudentsByLocation(listStudents, city) {
  if (!Array.isArray(listStudents)) {
    return [];
  }

  const filteredStudents = listStudents.filter((student) => student.location === city);
  return filteredStudents;
}
