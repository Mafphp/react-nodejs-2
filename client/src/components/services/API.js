const baseURL = "http://localhost:3003";
const privateUrl = `/private`;
const publicUrl = `/public`;

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


async function getAllVehiclesBaseOnCategory(category) {
    return new Promise((resolve, reject) => {
        fetch(privateUrl + '/all_vehicles_in_specific_category', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({category: category}),
        }).then((response) => {
            if (response.ok) {
                response.json().then((res) => {
                    resolve(res.data);
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

async function getCategoryPrice(category) {
    return new Promise((resolve, reject) => {
        fetch(privateUrl + '/category_price', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({category: category}),
        }).then((response) => {
            if (response.ok) {
                response.json().then((res) => {
                    resolve(res.data.price);
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

async function getReservationBaseOnCategory(body) {
    return new Promise((resolve, reject) => {
        fetch(privateUrl + '/reservation_between_date', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        }).then((response) => {
            if (response.ok) {
                response.json().then((res) => {
                    resolve(res.data.count);
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
async function vehicleBooked(body) {
    return new Promise((resolve, reject) => {
        fetch(privateUrl + '/vehicle_booked', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        }).then((response) => {
            if (response.ok) {
                response.json().then((res) => {
                    resolve();
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

async function cancelReservation(body) {
    return new Promise((resolve, reject) => {
        fetch(privateUrl + '/cancel_reservation', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        }).then((response) => {
            if (response.ok) {
                response.json().then((res) => {
                    resolve();
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


const API = { 
    isAuthenticated,
    getReservations,
    userLogin,
    userLogout,
    getVehicles,
    getHistory,
    getAllVehiclesBaseOnCategory,
    getCategoryPrice,
    getReservationBaseOnCategory,
    vehicleBooked,
    cancelReservation
} ;
export default API;
