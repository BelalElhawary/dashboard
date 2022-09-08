import { PostHeader } from './DataLoader'

export function AddLesson(name, image, description, callBack) {
  let body = { name: name, description: description, image: image, content: '' }
  fetch('http://nodejsapi-dev.eu-central-1.elasticbeanstalk.com/api/lessons', {
    method: 'POST',
    headers: PostHeader(),
    body: JSON.stringify(body),
  }).then((response) => response.json()).then((data) => {
    console.log(data)
    callBack(!data.success)
  })
}

export function AddAdmin(name, email, password, callBack) {
  let body = { name: name, password: password, email: email }
  fetch('http://nodejsapi-dev.eu-central-1.elasticbeanstalk.com/api/admins', {
    method: 'POST',
    body: JSON.stringify(body),
    headers: PostHeader(),
  }).then((response) => response.json()).then((data) => {
    callBack(!data.success)
  })
}

export function AddStudent(name, pn, ppn, callBack) {
  let body = { name: name, pn: pn, ppn: ppn, country: '' }
  fetch('http://nodejsapi-dev.eu-central-1.elasticbeanstalk.com/api/students', {
    method: 'POST',
    body: JSON.stringify(body),
    headers: PostHeader(),
  }).then((response) => response.json()).then((data) => {
    callBack(!data.success)
  })
}

export function DeleteStudent(id, callBack) {
  let body = { id: id }
  fetch('http://nodejsapi-dev.eu-central-1.elasticbeanstalk.com/api/students', {
    method: 'DELETE',
    body: JSON.stringify(body),
    headers: PostHeader(),
  }).then((response) => response.json()).then((data) => {
    callBack()
  })
}