import {api} from '../../common/js/api/api.js'
import {notify} from '../../common/js/notification.js'

notify('hi, user')

const studentsList = document.getElementById('students')

api.get('students').then(showStudents)

studentsList.onclick = async (e) => {
  if (e.target.innerHTML == 'remove') {
    const btn = e.target
    const li = btn.closest('li')
    const id = li.dataset.id
    
    btn.disabled = true
    
    const result = await api.delete('student', {id})
    
    if (result.success) li.remove()
    else btn.disabled = false
  }
}

function showStudents(students) {
  studentsList.innerHTML = students.map(buildStudentItem).join('')
}

function buildStudentItem(student) {
  const {name, _id} = student

  return `
    <li data-id="${_id}">
      ${name} <button>remove</button>
    </li>
  `
}
