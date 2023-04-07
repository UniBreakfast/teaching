import {notify} from '../../common/notification.js' 

notify('hi, user')

const studentsList = document.getElementById('students')

getStudents().then(showStudents)

studentsList.onclick = async e => {
  if (e.target.innerHTML = 'remove') {
    const btn = e.target
    const li = btn.closest('li')
    const id = li.dataset.id
    const result = await removeStudent(id)
    
    btn.disabled = true 
    
    if (result.success) li.remove()
    else btn.disabled = false
  }
}

function removeStudent(id) {
  const init = {method: 'DELETE', body: JSON.stringify({id})
  const response = await fetch('/api/student', init)
  const result = await response.json()
  
  return result 
}

async function getStudents() {
  const response = await fetch('/api/students')
  const students = await response.json()

  return students
}

function showStudents(students) {
  studentsList.innerHTML = students.map(buildStudentItem).join('')
}

function buildStudentItem(student) {
  const {name, _id} = student

  return `
    <li data-id="_id">
      ${name} <button>remove</button>
    </li>
  `
}
