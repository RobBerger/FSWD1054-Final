import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const PartContext = createContext()

export const PartProvider = (props) => {
    const [parts, setParts] = useState([])

    useEffect(() => {
        async function getParts() {
            await refreshParts()
        }
        getParts()
    }, []);

    function refreshParts() {
        return axios.get("http://localhost:3001/ferrariparts")
        .then(response => {
            setParts(response.data)
        })
    }

    function getPart(id) {
        return axios.get(`http://localhost:3001/ferrariparts/${id}`)
            .then(response => 
                new Promise((resolve) => resolve(response.data)))
    }

    function deletePart(id) {
        axios.delete(`http://localhost:3001/ferrariparts/${id}`)
        .then(refreshParts)
    }

    function addPart(part) {
        return axios.post("http://localhost:3001/ferrariparts", part)
        .then(response => {
            refreshParts()
            return new Promise((resolve) => resolve(response.data))
        })
    }

    function updatePart(part) {
        return axios.put(`http://localhost:3001/ferrariparts/${part.id}`, part)
        .then(response => {
            refreshParts()
            return new Promise((resolve) => resolve(response.data))
        })
    }

    return (
        <PartContext.Provider
            value={{
                parts,
                getPart,
                deletePart,
                addPart,
                updatePart
            }}
        >
            {props.children}
        </PartContext.Provider>
    )
}