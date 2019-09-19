import React, { useState, useEffect } from 'react'
import '../index.css'

const ApiComment = () => {
    const [hasError, setErrors] = useState(false);
    const [comments, setComments] = useState('');
    const [current_length, setLength] = useState(0)


    async function fetchTodosData() {
        const res = await fetch("https://jsonplaceholder.typicode.com/todos");
        res
            .json()
            .then(res => {
                setComments(res);
                setLength(res.length)
            })
            .catch(err => setErrors(err))
    }

    useEffect(() => {
        fetchTodosData()
    }, [])


    async function fetchCommentsData() {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        res
            .json()
            .then(res => {
                setComments(res);
                setLength(res.length)
            })
            .catch(err => setErrors(err))
    }

    return (
        <div>
            {/* <span>{JSON.stringify(Comments)}</span>
            <hr />
            <span>Has error: {JSON.stringify(hasError)}</span> */}
            {/* <button onClick={fetchCommentsData}>Get Comment</button> */}
            <button onClick={fetchCommentsData}>Get Posts</button>
            <button onClick={fetchTodosData}>Get Todos</button>
            <DataAfterMapping res={comments} length={current_length} />
        </div>
    )
}

const DataAfterMapping = ({ res, length }) => {
    if (res !== '') {
        return (
            <div style={{ margin: '30px auto', position: 'relative'}}>
                <div style={{margin: '0 auto', width: '50vw', textAlign: 'center'}}>Now Data Length : {length}</div>
                <table border='1' style={{margin: '0 auto'}}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {res.map((value, index) => (
                            <tr key={index}>
                                <td style={{ textAlign: 'center' }}>{value.id}</td>
                                <td style={{ padding: '4px 8px' }}>{value.title}</td>
                                <td style={{ padding: '4px 8px' }}>{value.email}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }

    else {
        return (
            <div style={{ textAlign: 'center' }}>Loading...</div>
        )
    }
}


export default ApiComment