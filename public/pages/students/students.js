const studentsList = document.getElementById('students')

getStudents().then(showStudents)

async function getStudents() {
  const response = await fetch('/api/students')
  const students = await response.json()

  return students
}

function showStudents(students) {
  studentsList.innerHTML = students.map(buildStudentItem).join('')
}

function buildStudentItem(student) {
  const {name} = student

  return `
    <li>
      ${name}
    </li>
  `
}
