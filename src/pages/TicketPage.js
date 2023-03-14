import React from 'react'
import { Box, Anchor, Input, Text, Divider, Select, Radio } from 'dracula-ui'
import { useState } from 'react'

const TicketPage = () => {
    const [formData, setFormData] = useState({
        status: 'not started',
        progress: 0,
        timestamp: new Date().toISOString()
    })
    const editMode = true

    const handleSubmit = () => {
        console.log("submitted")
    }

    const handleChange = (e) => {
        const value = e.target.value
        const name = e.target.name

        setFormData((prevState) => ({
            ...prevState,
            [name]: value
        })
        )
    }

    const categories = ['Test 1', 'Test 2']

    console.log(formData)

    return (
        <Box className="ticket">
            <Anchor
                href="#" color="cyanGreen"
                hoverColor="yellowPink" mb="sm"
            >
                {editMode ? 'Update your ticket' : 'Create a ticket'}
            </Anchor>
            <Box mb="sm" mt="sm">
                <Divider color="green" />
            </Box>
            <Box ml="sm" rounded="lg" color="blackSecondary">



                <Box className="ticket-container">
                    <form onSubmit={handleSubmit}>
                        <section>
                            <Text mb="xs" htmlFor="title">Title</Text>
                            <Input
                                color="green"
                                variant="outline"
                                borderSize="sm"
                                size="sm"
                                mb="sm"
                                placeholder="Ticket title"
                                id="title"
                                name="title"
                                type="text"
                                onChange={handleChange}
                                required={true}
                                value={formData.title}
                            />

                            <Text mb="xs" htmlFor="description">Description</Text>
                            <Input
                                color="green"
                                variant="outline"
                                borderSize="sm"
                                size="sm"
                                mb="sm"
                                placeholder="Description"
                                id="description"
                                name="description"
                                type="text"
                                onChange={handleChange}
                                required={true}
                                value={formData.description}
                            />

                            <Text mb="xs">Category</Text>
                            <Select
                                variant="outline" color="green" 
                                mb="sm"
                                name="category"
                                value={formData.category}
                                onChange={handleChange}
                            >
                                {categories?.map((category, _index) => (
                                    <option key={_index} value={category}>
                                        {category}
                                    </option>
                                ))}
                            </Select>

                            <Text mb="xs" htmlFor="new-category">New Category</Text>
                            <Input
                                color="green"
                                variant="outline"
                                borderSize="sm"
                                size="sm"
                                mb="sm"
                                placeholder="Category"
                                id="new-category"
                                name="category"
                                type="text"
                                onChange={handleChange}
                                required={true}
                                value={formData.category}
                            />

                            <Text mb="xs">Priority </Text>
                            <Box mb="sm" className="multiple-input-container">
                                <Text htmlFor="priority-1">1</Text>
                                <Radio
                                    color="green"
                                    id="priority-1"
                                    name="priority"
                                    type="radio"
                                    onChange={handleChange}
                                    value={1}
                                    checked={formData.priority === 1}
                                />

                                <Text htmlFor="priority-2">2</Text>
                                <Radio
                                    color="green"
                                    id="priority-2"
                                    name="priority"
                                    type="radio"
                                    onChange={handleChange}
                                    value={2}
                                    checked={formData.priority === 2}
                                />

                                <Text htmlFor="priority-3">3</Text>
                                <Radio
                                    color="green"
                                    id="priority-3"
                                    name="priority"
                                    type="radio"
                                    onChange={handleChange}
                                    value={3}
                                    checked={formData.priority === 3}
                                />

                                <Text htmlFor="priority-4">4</Text>
                                <Radio
                                    color="green"
                                    id="priority-4"
                                    name="priority"
                                    type="radio"
                                    onChange={handleChange}
                                    value={4}
                                    checked={formData.priority === 4}
                                />

                                <Text htmlFor="priority-5">5</Text>
                                <Radio
                                    color="green"
                                    id="priority-5"
                                    name="priority"
                                    type="radio"
                                    onChange={handleChange}
                                    value={5}
                                    checked={formData.priority === 5}
                                />
                            </Box>

                            {editMode &&
                                <>
                                    <Text mb="xs" htmlFor="progress"> Progress</Text>
                                    <Input
                                        type="range"
                                        className="slider"
                                        id="progress"
                                        name="progress"
                                        mb="sm"
                                        value={formData.progress}
                                        min="0"
                                        max="100"
                                        onChange={handleChange}
                                    />


                                    <Text mb="xs">Status</Text>
                                    <Select
                                        color="green"
                                        variant="outline"
                                        borderSize="sm"
                                        size="sm"
                                        mb="sm"
                                        name="status"
                                        value={formData.status}
                                        onChange={handleChange}
                                    >
                                        <option selected={formData.status === 'done'} value='done'>done</option>
                                        <option selected={formData.status === 'working on it'} value='working on it'>working on it</option>
                                        <option selected={formData.status === 'stuck'} value='stuck'>stuck</option>
                                        <option selected={formData.status === 'not started'} value='not started'>not started</option>
                                    </Select>
                                </>
                            }

                            <Input 
                                color="green"
                                variant="outline"
                                borderSize="sm"
                                size="md"
                                mb="sm" 
                                type="submit" />

                        </section>

                        <section>
                            <Text mb="xs" htmlFor="owner">Owner</Text>
                            <Input
                                color="green"
                                variant="outline"
                                borderSize="sm"
                                size="sm"
                                mb="sm"
                                placeholder="Owner"
                                id="owner"
                                name="owner"
                                type="text"
                                onChange={handleChange}
                                required={true}
                                value={formData.owner}
                            />

                            <Text mb="xs" htmlFor="avatar">Avatar</Text>
                            <Input
                                color="green"
                                variant="outline"
                                borderSize="sm"
                                size="sm"
                                mb="xs"
                                placeholder="Avatar"
                                id="avatar"
                                name="avatar"
                                type="url"
                                onChange={handleChange}
                                required={true}
                                value={formData.avatar}
                            />
                            <Box className="img-preview">
                                {formData.avatar && (
                                    <img src={formData.avatar} alt="preview" />
                                )}

                            </Box>


                        </section>
                    </form>
                </Box>
            </Box>
        </Box>

    )
}

export default TicketPage