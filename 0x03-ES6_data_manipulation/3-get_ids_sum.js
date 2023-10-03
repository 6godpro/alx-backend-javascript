export default function getStudentIdsSum(listStudents) {
  return listStudents.map((student) => student.id).reduce((acc, curr) => acc + curr);
}
