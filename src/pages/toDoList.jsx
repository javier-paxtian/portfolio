import React, { useEffect, useState } from "react";
import Modal from "./components/modal.component";

const ToDoList = () => {
    const [showAdd, setShowAdd] = useState(false)
    const [showEdit, setShowEdit] = useState(false)
    const [data, setData] = useState([])
    const [formData, setFormData] = useState({
        name: '',
        description: '',
    });
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        setData([...data, formData])
        clearFormData()
        setShowAdd(false)        
    };
    const handleSubmitEdit = (e) => {
        e.preventDefault();
        const newData = [...data];
        newData[formData.index].name = formData.name
        newData[formData.index].description = formData.description
        setData(newData)
        clearFormData()
        setShowEdit(false)        
    };
    const deleteTask = (props) => {
        const { index } = props
        const newData = [...data];
        newData.splice(index, 1);
        setData(newData);
    }
    const clearFormData = () => setFormData({
    })
    
    return <>
        <main className="bg-pink-100 h-full min-h-screen w-full p-[5%] flex flex-col gap-y-9">
            <button type="button" class="text-gray-900  w-fit
            bg-white border border-gray-300 focus:outline-none 
            hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 
            font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2" onClick={() => setShowAdd(!showAdd)}>Add Task</button>            
            <div class="relative overflow-x-auto w-full">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 ">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 ">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                Task Name
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Description
                            </th>
                            <th scope="col" class="px-6 py-3 flex justify-end">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {data && data.length > 0 ? <>
                            {data.map((item, index) => <>
                                <tr key={index} class="bg-white border-b ">
                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                        {item.name}
                                    </th>
                                    <td class="px-6 py-4">
                                        {item.description}
                                    </td>
                                    <td class="px-6 py-4 flex justify-end">
                                        <button type="button"
                                            class="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 
                                            focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2" onClick={() => {
                                                setFormData({
                                                    index: index,
                                                    name: data[index].name,
                                                    description: data[index].description,
                                                })
                                                setShowEdit(!showEdit)
                                            }}>Edit Task</button>
                                        <button type="button"
                                            class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 
                                            focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2" onClick={() => deleteTask({ index: index })}>Delete Task</button>
                                    </td>
                                </tr>
                            </>)}
                        </> : <>
                            <tr class="bg-white border-b ">
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                    Not data
                                </th>
                                <td class="px-6 py-4">
                                </td>
                                <td class="px-6 py-4">
                                </td>
                            </tr>
                        </>}
                    </tbody>
                </table>
            </div>
        </main>
        <Modal show={showAdd}>
            <div className="bg-white w-[90%] max-w-[700px] p-5 rounded-md">
                <div className="flex justify-end">
                    <button onClick={() => setShowAdd(false)}>X</button>
                </div>
                <form class="" onSubmit={handleSubmit}>
                <h2 className="text-xl font-semibold mb-4">Add Task</h2>
                    <div class="mb-5">
                        <label for="name" class="block mb-2 text-sm font-medium text-gray-900">Your name</label>
                        <input type="name" id="name" name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 " required />
                    </div>
                    <div class="mb-5">
                        <label for="description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your description</label>
                        <input type="description" id="description" name="description"
                            value={formData.description}
                            onChange={handleInputChange}
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 " required />
                    </div>
                    <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-purple-500 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ">Submit</button>
                </form>
            </div>
        </Modal>
        <Modal show={showEdit}>
            <div className="bg-white w-[90%] max-w-[700px] p-5 rounded-md">
                <div className="flex justify-end">
                    <button onClick={() => {
                        clearFormData()
                        setShowEdit(false)
                    }}>X</button>
                </div>
                <form class="" onSubmit={handleSubmitEdit}>
                    <div class="mb-5">
                        <label for="name" class="block mb-2 text-sm font-medium text-gray-900">Your name</label>
                        <input type="name" id="name" name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 " required />
                    </div>
                    <div class="mb-5">
                        <label for="description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your description</label>
                        <input type="description" id="description" name="description"
                            value={formData.description}
                            onChange={handleInputChange}
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 " required />
                    </div>
                    <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-purple-500 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ">Submit</button>
                </form>
            </div>
        </Modal>
    </>
}

export default ToDoList