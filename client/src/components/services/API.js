const baseURL = "http://localhost:3003";
const privateUrl = `/private`;
const publicUrl = `/public`;

async function getTasks(filter) {
    let url = "/tasks";
    if(filter){
        const queryParams = "?filter=" + filter;
        url += queryParams;
    }
    const response = await fetch(baseURL + url);
    const tasksJson = await response.json();
    if(response.ok){
        //return tasksJson.map((t) => Task.from(t));
        // return tasksJson.map((t) => new Task(t.id,t.description,t.important, t.privateTask,t.deadline,t.project, t.completed,t.user));
    } else {
        let err = {status: response.status, errObj:tasksJson};
        throw err;  // An object with the error coming from the server
    }
}

async function addTask(task) {
    return new Promise((resolve, reject) => {
        fetch(baseURL + "/tasks", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(task),
        }).then( (response) => {
            if(response.ok) {
                resolve(null);
            } else {
                // analyze the cause of error
                response.json()
                .then( (obj) => {reject(obj);} ) // error msg in the response body
                .catch( (err) => {reject({ errors: [{ param: "Application", msg: "Cannot parse server response" }] }) }); // something else
            }
        }).catch( (err) => {reject({ errors: [{ param: "Server", msg: "Cannot communicate" }] }) }); // connection errors
    });
}

async function updateTask(task) {
    return new Promise((resolve, reject) => {
        fetch(baseURL + "/tasks/" + task.id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(task),
        }).then( (response) => {
            if(response.ok) {

            } else {
                // analyze the cause of error
                response.json()
                .then( (obj) => {reject(obj);} ) // error msg in the response body
                .catch( (err) => {reject({ errors: [{ param: "Application", msg: "Cannot parse server response" }] }) }); // something else
            }
        }).catch( (err) => {reject({ errors: [{ param: "Server", msg: "Cannot communicate" }] }) }); // connection errors
    });
}


async function deleteTask(taskId) {
    return new Promise((resolve, reject) => {
        fetch(baseURL + "/tasks/" + taskId, {
            method: 'DELETE'
        }).then( (response) => {
            if(response.ok) {
                resolve(null);
            } else {
                // analyze the cause of error
                response.json()
                .then( (obj) => {reject(obj);} ) // error msg in the response body
                .catch( (err) => {reject({ errors: [{ param: "Application", msg: "Cannot parse server response" }] }) }); // something else
            }
        }).catch( (err) => {reject({ errors: [{ param: "Server", msg: "Cannot communicate" }] }) }); // connection errors
    });
}

async function userLogin(username, password) {
    return new Promise((resolve, reject) => {
        fetch(publicUrl + '/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({username: username, password: password}),
        }).then((response) => {
            if (response.ok) {
                response.json().then((user) => {
                    resolve(user);
                });
            } else {
                // analyze the cause of error
                response.json()
                    .then((obj) => { reject(obj); }) // error msg in the response body
                    .catch((err) => { reject({ errors: [{ param: "Application", msg: "Cannot parse server response" }] }) }); // something else
            }
        }).catch((err) => { reject({ errors: [{ param: "Server", msg: "Cannot communicate" }] }) }); // connection errors
    });
}

async function userLogout(username, password) {
    return new Promise((resolve, reject) => {
        fetch(baseURL + '/logout', {
            method: 'POST',
        }).then((response) => {
            if (response.ok) {
                resolve(null);
            } else {
                // analyze the cause of error
                response.json()
                    .then((obj) => { reject(obj); }) // error msg in the response body
                    .catch((err) => { reject({ errors: [{ param: "Application", msg: "Cannot parse server response" }] }) }); // something else
            }
        });
    });
}

// APIS
async function getVehicles() {
    let url = "/vehicles";

    const response = await fetch(publicUrl + url);
    const vehiclesJson = await response.json();
    if(response.ok){
        return vehiclesJson.data;
    } else {
        let err = {status: response.status, errObj:vehiclesJson};
        throw err;  // An object with the error coming from the server
    }
}
async function getReservations() {
    let url = "/reservations";
    const response = await fetch(privateUrl + url);
    const json = await response.json();
    if(response.ok){
        return json.data;
    } else {
        let err = {status: response.status, errObj: json};
        throw err;  // An object with the error coming from the server
    }
}

async function getHistory() {
    let url = "/history";
    const response = await fetch(privateUrl + url);
    const json = await response.json();
    if(response.ok){
        return json.data;
    } else {
        let err = {status: response.status, errObj: json};
        throw err;  // An object with the error coming from the server
    }
}


async function isAuthenticated(){
    let url = "/user";
    const response = await fetch(privateUrl + url);
    const userJson = await response.json();
    if(response.ok){
        return userJson;
    } else {
        let err = {status: response.status, errObj:userJson};
        throw err;  // An object with the error coming from the server
    }
}

const API = { 
    isAuthenticated,
    getTasks,
    getReservations,
    addTask,
    updateTask,
    deleteTask,
    userLogin,
    userLogout,
    getVehicles,
    getHistory
} ;
export default API;
