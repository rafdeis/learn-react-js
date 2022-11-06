import React, { useContext, useEffect,useState } from "react";
import { Table,TextInput,Checkbox,Label,Button } from "flowbite-react";

import { GlobalContext } from "../context/GlobalContext";
import axios from "axios";


const ManageData = () => {

    const {state, handleFunction} = useContext(GlobalContext)
    const {
        data, setData,
        input, setInput,
        fetchStatus, setFetchStatus,
        currentId, setCurrentId
    } = state
    const {
        handleIndexName,
        handleSubmit,
        handleInput,
        handleDelete,
        handleEdit
    } = handleFunction

    useEffect(() => {

        axios.get('https://backendexample.sanbercloud.com/api/mobile-apps')
        .then((res) => {
            setData([...res.data])
        })
        .catch((err) => {
            console.log(err)
        })
        setFetchStatus(false)
    }, [fetchStatus, setFetchStatus])

    console.log(data)
    return(
        <> 
        <div className="bg-white w-4/5 mx-auto text-left bg-white rounded-2xl mb-20 mt-20 ">
            <h1 className="mb-10 text-2xl"> Manage Data</h1>
        <Table >
        <Table.Head className="text-xs bg-purple-500 text-white">
            <Table.HeadCell>
            NO
            </Table.HeadCell>
            <Table.HeadCell>
            NAMA
            </Table.HeadCell>
            <Table.HeadCell>
            KATEGORI
            </Table.HeadCell>
            <Table.HeadCell>
            DESCRIPTION
            </Table.HeadCell>
            <Table.HeadCell>
            PRICE
            </Table.HeadCell>
            <Table.HeadCell>
            RATING
            </Table.HeadCell>
            <Table.HeadCell>
            RELEASE YEAR
            </Table.HeadCell>
            <Table.HeadCell>
            SIZE
            </Table.HeadCell>
            <Table.HeadCell>
            IS_ANDROID_APP
            </Table.HeadCell>
            <Table.HeadCell>
            IS_IOS_APP
            </Table.HeadCell>
            <Table.HeadCell>
            ACTION
            </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y ">
        { data !== null && data.map((res, index) => { 
            return(
            <Table.Row key={res.id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {index + 1}
            </Table.Cell>
            <Table.Cell>
                {res.name}
            </Table.Cell>
            <Table.Cell>
                {res.category}
            </Table.Cell>
            <Table.Cell>
                {res.description}
            </Table.Cell>
            <Table.Cell>
                {res.price}
            </Table.Cell>
            <Table.Cell>
                {res.rating}
            </Table.Cell>
            <Table.Cell>
                {res.release_year}
            </Table.Cell>
            <Table.Cell>
                {res.size}
            </Table.Cell>
            <Table.Cell>
                {res.is_android_app}
            </Table.Cell>
            <Table.Cell>
                {res.is_ios_app}
            </Table.Cell>
            <Table.Cell className="flex flex-nowrap">
            <div className="mr-2">
            <Button
            onClick={handleEdit}
            value={res.id}
            color="warning">
            Edit
            </Button>
            </div>
             <div className="ml-2">
            <Button 
            onClick={handleDelete}
            value={res.id}            
            color="failure">
            Delete
            </Button>
            </div>
            </Table.Cell>
            </Table.Row>
            )
        })}
        </Table.Body>
        </Table>
        <h1 className="mb-5 mt-10 text-2xl">Create Data</h1>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-10">
                <p>Gambar Data Game</p>
                <hr/>
            <div>
                    <div className="mb-2 block">
                    <Label
                        value="Image URL :"
                    />
                    </div>
                    <TextInput
                    onChange={handleInput}
                    value={input.image_url}
                    name="image_url"
                    type="text"
                    placeholder="URL..."
                    required={true}
                    />
                </div>
                <p>Data Game</p>
                <hr/>
                <div>
                    <div className="mb-2 block">
                    <Label
                        value="Nama :"
                    />
                    </div>
                    <TextInput
                    onChange={handleInput}
                    value={input.name}
                    name="name"
                    type="text"
                    placeholder="Nama..."
                    required={true}
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                    <Label
                        value="Kategori :"
                    />
                    </div>
                    <TextInput
                    onChange={handleInput}
                    value={input.category}
                    name="category"
                    type="text"
                    placeholder="Kategori.."
                    required={true}
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                    <Label
                        value="Description :"
                    />
                    </div>
                    <TextInput
                    onChange={handleInput}
                    value={input.description}
                    name="description"
                    type="text"
                    placeholder="Descripsi..."
                    required={true}
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                    <Label
                        value="Price :"
                    />
                    </div>
                    <TextInput
                    onChange={handleInput}
                    value={input.price}
                    name="price"
                    type="number"
                    placeholder="0"
                    required={true}
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                    <Label
                        value="Rating :"
                    />
                    </div>
                    <TextInput
                    onChange={handleInput}
                    value={input.rating}
                    min="0"
                    max="5"
                    name="rating"
                    type="number"
                    placeholder="0"
                    required={true}
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                    <Label
                        value="Release Year :"
                    />
                    </div>
                    <TextInput
                    onChange={handleInput}
                    value={input.release_year}
                    min="2007"
                    max="2021"
                    name="release_year"
                    type="number"
                    placeholder="2007"
                    required={true}
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                    <Label
                        value="Size :"
                    />
                    </div>
                    <TextInput
                    onChange={handleInput}
                    value={input.size}
                    name="size"
                    type="number"
                    placeholder="0"
                    required={true}
                    />
                </div>
                <p>Jenis Perangkat</p>
                <hr/>
                <div>
                    <div className="mb-2 block">
                    <Label
                        value="Android ?"
                    />
                    </div>
                    <TextInput
                    onChange={handleInput}
                    value={input.is_android_app}
                    name="is_android_app"
                    type="number"
                    placeholder="0"
                    required={true}
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                    <Label
                        value="IOS ?"
                    />
                    </div>
                    <TextInput
                    onChange={handleInput}
                    value={input.is_ios_app}
                    name="is_ios_app"
                    type="number"
                    placeholder="0"
                    required={true}
                    />
                </div>
                <Button 
                className="mt-5 w-24" 
                type="submit">
                    Submit
                </Button>
                </form>
        </div>
        </>
    )
}

export default ManageData