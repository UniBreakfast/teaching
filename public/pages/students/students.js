const studentsList = document.getElementById()

getStudents().then(showStudents)

async function getStudents() {
  const response = await fetch('/api/students')
  const students = await response.json()

  returns students
}

function showStudents(students) {
  studentsList.innerHTML = `
    <li>
      ${}
    </li>
  `
}
