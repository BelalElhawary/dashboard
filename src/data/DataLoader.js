import { Pos } from "@syncfusion/ej2/progressbar"

export let Token = JSON.parse(localStorage.getItem('auth'))? JSON.parse(localStorage.getItem('auth')).token : ""
export let valiedToken = false

export function PostHeader(){ return new Headers({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${Token}`
})}

export function GetHeader(){ return new Headers({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${Token}`
})}

export function GetTokenHeader(){ return new Headers({
    'Content-Type': 'application/x-www-form-urlencoded',
    'Authorization': `Bearer ${Token}`
})}

export let lessons = []
let innerCallback = null
export let admins = []
export let students = []
export let calendar = []



export function LoadLessons(callBack) {
    fetch('http://nodejsapi-dev.eu-central-1.elasticbeanstalk.com/api/lessons/all', {
        method: 'GET',
        headers: GetHeader(),
    }).then((response) => response.json()).then((data) => {
        lessons = data.data
        innerCallback = callBack
        if(innerCallback)
            callBack(data.data)
    })
}

export function LoadAdmins(callBack) {
    fetch('http://nodejsapi-dev.eu-central-1.elasticbeanstalk.com/api/admins/all', {
        method: 'GET',
        headers: GetHeader(),
    }).then((response) => response.json()).then((data) => {
        admins = data.data
        innerCallback = callBack
        if(innerCallback)
            callBack(data.data)
    })
}

export function LoadStudents(callBack) {
    fetch('http://nodejsapi-dev.eu-central-1.elasticbeanstalk.com/api/students/count', {
        method: 'GET',
        headers: GetHeader(),
    }).then((response) => response.json()).then((data) => {
        students = data.result
        innerCallback = callBack
        if(innerCallback)
            innerCallback(data.result)
    })
}

export function LoadCalendar(callBack) {
    fetch('http://nodejsapi-dev.eu-central-1.elasticbeanstalk.com/api/calendar/load', {
        method: 'GET',
        headers: GetHeader(),
    }).then((response) => response.json()).then((data) => {
        calendar = data.result
        innerCallback = callBack
        if(innerCallback)
            innerCallback(data.result)
    })
}

export function SaveCalendar(callBack) {
    let body = {value: calendar}
    fetch('http://nodejsapi-dev.eu-central-1.elasticbeanstalk.com/api/calendar/save', {
        method: 'POST',
        headers: PostHeader(),
        body: JSON.stringify(body)
    }).then((response) => response.json()).then((data) => {
        calendar = callBack()
    })
}

export function GetCurrentUser()
{
    const usr = localStorage.getItem("user");
    const email = JSON.parse(usr).email;
    let final = admins.find(item => item.email == email);
    console.log(final + " is user");
    return final
}

export function LogIn(username, password, callBack) {
    fetch('http://nodejsapi-dev.eu-central-1.elasticbeanstalk.com/api/admins/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: username, password: password })
    }).then((response) => response.json()).then((data) => {
        console.log(data);
        Token = data.token
        let usr = {email:username}
        localStorage.setItem("auth", JSON.stringify(data));
        localStorage.setItem("user", JSON.stringify(usr));
        CheckToken(callBack)
    })
}

export function CheckToken(callBack){
    fetch('http://nodejsapi-dev.eu-central-1.elasticbeanstalk.com/api/check', {
        method: 'GET',
        headers: GetTokenHeader()
    }).then((response) => response.json()).then((data) => {
        valiedToken = data.success
        callBack(data.success)
        console.log(data)
    })
}


export function LoadToken() {
    Token = JSON.parse(localStorage.getItem('auth')).token
}