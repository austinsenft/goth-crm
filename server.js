const PORT = 8000
const express = require('express')
const cors = require('cors')
require('dotenv').config()
const axios = require('axios')

const app = express()
app.use(cors())
app.use(express.json())

const url = 'https://907d63aa-2d35-47dc-ac70-d652d8febb82-us-east1.apps.astra.datastax.com/api/rest/v2/namespaces/tickets/collections/tasks'
const token = 'AstraCS:oFWBxoPGxPQbYWQKiuMRmiiq:fbc362e73b2de834b9e53d8b8ed55bf2e4812ce3aafd50456448394216431e43'

// READ
app.get('/tickets', async (req, res) => {
    const options = {
        method: 'GET',
        headers: {
            Accepts: 'application/json',
            'X-Cassandra-Token': token,
        }
    }
    try {
        const response = await axios(`${url}?page-size=20`, options)
        res.status(200).json(response.data)
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: err })
    }
})

// READ ONE
app.get('/tickets/:documentId', async (req, res) => {
    const id = req.params.documentId
    
    const options = {
        method: 'GET',
        headers: {
            Accepts: 'application/json',
            'X-Cassandra-Token': token
        }
    }
    try {
        const response = await axios(`${url}/${id}`, options)
        res.status(200).json(response.data)
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: err })
    }
})


// CREATE
app.post('/tickets', async (req, res) => {
    const formData = req.body.formData
    const options = {
        method: 'POST',
        headers: {
            Accepts: 'application/json',
            'X-Cassandra-Token': token,
            'Content-Type': 'application/json'
        },
        data: formData
    }
    try {
        const response = await axios(url, options)
        res.status(200).json(response.data)
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: err })
    }
})


// DELETE
app.delete('/tickets/:documentId', async (req, res) => {
    const id = req.params.documentId
    const options = {
        method: 'DELETE',
        headers: {
            Accepts: 'application/json',
            'X-Cassandra-Token': token
        }
    }
    try {
        const response = await axios(`${url}/${id}`, options)
        res.status(200).json(response.data)
    } catch (err) {
        console.log(err.response.data)
        res.status(500).json({ message: err })
    }
})

// UPDATE
app.put('/tickets/:documentId', async (req, res) => {
    const id = req.params.documentId
    const data = req.body.data
    const options = {
        method: 'PUT',
        headers: {
            Accepts: 'application/json',
            'X-Cassandra-Token': token
        },
        data
    }
    try {
        const response = await axios(`${url}/${id}`, options)
        res.status(200).json(response.data)
    } catch (err) {
        console.log(err.response.data)
        res.status(500).json({ message: err })
    }
})



app.listen(PORT, () => console.log('server running on PORT ' + PORT))