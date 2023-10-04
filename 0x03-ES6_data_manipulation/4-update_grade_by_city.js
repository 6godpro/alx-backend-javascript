export default function updateStudentGradeByCity(listStudents, city, grades) {
  return listStudents.filter((student) => student.location === city).map((student) => {
    let grade = grades.find((grade) => student.id === grade.studentId);
    grade = grade ? grade.grade : 'N/A';
    return { ...student, grade };
  });
}
