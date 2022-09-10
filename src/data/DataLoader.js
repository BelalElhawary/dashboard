import { API } from '../data/env'

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

let innerCallback = null
export let calendar = []

export function LoadCalendar(callBack) {
    fetch(API + 'calendar/load', {
        method: 'GET',
        headers: GetHeader(),
        referrerPolicy: "unsafe-url"
    }).then((response) => response.json()).then((data) => {
        calendar = data.result
        innerCallback = callBack
        if(innerCallback)
            innerCallback(data.result)
    })
}

export function SaveCalendar(callBack) {
    let body = {value: calendar}
    fetch(API + 'calendar/save', {
        method: 'POST',
        headers: PostHeader(),
        body: JSON.stringify(body),
        referrerPolicy: "unsafe-url"
    }).then((response) => response.json()).then((data) => {
        calendar = callBack()
    })
}

export function GetCurrentUser()
{
    const usr = localStorage.getItem("user");
    const data = JSON.parse(usr);
    return data
}

export function LogIn(username, password, callBack) {
    fetch(API + 'admins/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: username, password: password }),
        referrerPolicy: "unsafe-url",
    }).then((response) => response.json()).then((data) => {
        if(data.success)
        {
            Token = data.token
            let usr = {email:username, name:data.name}
            localStorage.setItem("auth", JSON.stringify(data));
            localStorage.setItem("user", JSON.stringify(usr));
            CheckToken(callBack)
            console.log(data.message);
        }else{
            console.log(data.message);
        }
    })
}

export function LogOut()
{
    let auth = {token:''}
    localStorage.setItem("auth", JSON.stringify(auth));
    localStorage.setItem("user", '{}');
    window.location.reload(false);
}

export function CheckToken(callBack){
    fetch(API + 'check', {
        method: 'GET',
        headers: GetTokenHeader(),
        referrerPolicy: "unsafe-url"
    }).then((response) => response.json()).then((data) => {
        console.log(data.message);
        valiedToken = data.success
        callBack(data.success)
    })
}


export function LoadToken() {
    Token = JSON.parse(localStorage.getItem('auth')).token
}