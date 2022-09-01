function getStudents(classroom) {
  let { hasTeachingAssistant, classList } = classroom;
  let teacher, teachingAssistant, students;

  if (hasTeachingAssistant) {
    [teacher, teachingAssistant, ...students] = classList;
  } else {
    [teache, ...students] = classList;
  }
  return students;
}

console.log(
  getStudents({
    hasTeachingAssistant: false,
    classList: ["Julio", "Ana", "Jean", "lisa"],
  })
);
