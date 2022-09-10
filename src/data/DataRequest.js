import { PostHeader } from './DataLoader'
import { API } from './env'

export function AddLesson(name, image, description, callBack) {
  let body = { name: name, description: description, image: image, content: '' }
  fetch(API + 'lessons', {
    method: 'POST',
    headers: PostHeader(),
    body: JSON.stringify(body),
    referrerPolicy: "unsafe-url"
  }).then((response) => response.json()).then((data) => {
    console.log(data)
    callBack(!data.success)
  })
}

export function AddAdmin(name, email, password, callBack) {
  let body = { name: name, password: password, email: email }
  fetch(API + 'admins', {
    method: 'POST',
    body: JSON.stringify(body),
    headers: PostHeader(),
    referrerPolicy: "unsafe-url"
  }).then((response) => response.json()).then((data) => {
    callBack(!data.success)
  })
}

export function AddStudent(name, pn, ppn, callBack) {
  let body = { name: name, pn: pn, ppn: ppn, country: '' }
  fetch(API + 'students', {
    method: 'POST',
    body: JSON.stringify(body),
    headers: PostHeader(),
    referrerPolicy: "unsafe-url"
  }).then((response) => response.json()).then((data) => {
    callBack(!data.success)
  })
}

export function DeleteStudent(id, callBack) {
  let body = { id: id }
  fetch(API + 'students', {
    method: 'DELETE',
    body: JSON.stringify(body),
    headers: PostHeader(),
    referrerPolicy: "unsafe-url"
  }).then((response) => response.json()).then((data) => {
    callBack()
  })
}