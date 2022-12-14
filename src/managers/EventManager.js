export const getEvents = () => {
    return fetch("http://localhost:8000/events", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    })
        .then(response => response.json())
}

export const createEvent = (event) => {
    return fetch(`${remoteURL}/events`, { 
        method: "POST",
        headers:{
            "Authorization": `Token ${localStorage.getItem("lu_token")}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(event)
    }).then(response => response.json())
}

export const updateEvent = (event) => {
    return fetch(`${remoteURL}/events/${event.id}`, {
        method: "PUT",
        headers: {
            "Authorization": `Token ${localStorage.getItem("lu_token")}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(event)
    })
}

export const deleteEvent = (id) => {
    return fetch(`${remoteURL}/events/${id}`, { 
        method: "DELETE",
        headers:{
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        },
        body: JSON.stringify(id)
    })
}

export const leaveEvent = (eventId) => {
    return fetch(`${remoteURL}/events/${eventId}/leave`, {
        method: "DELETE",
        headers:{
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    })
}
  
export const joinEvent = (eventId) => {
    return fetch(`${remoteURL}/events/${eventId}/signup`, {
        method: "POST",
        headers:{
            "Authorization": `Token ${localStorage.getItem("lu_token")}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(eventId)
    }).then(response => response.json()) 
}