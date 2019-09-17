import React, { useState } from 'react'
import '../index.css'


function ShowInfo({ info, img }) {
    return (
        <div style={{margin: '0 auto', width: '80vw'}}>
            <div className='info-card'>
                <img src="/logo192.png" alt="" style={{ width: '50px', height: '50px' }} className='app-logo-person' />
                <br />
                <br />
                <div>Name: {info.name}</div>
                <div>Contact: {info.email}</div>
                <div>Saying: {info.intro}</div>
                <button style={{marginTop: '20px'}}>Edit</button>
            </div>
        </div>
    )
}

function PersonInfo() {
    const [people, setPerson] = useState([
        {
            name: 'saiyan',
            email: 'ssh@gmail.com',
            intro: 'save the earth'
        },
        {
            name: 'gohan',
            email: 'han@gmail.com',
            intro: 'someone needs my help'
        }
    ]);

    const addNewInfo = info => {
        const newTasks = [...people, info];
        setPerson(newTasks);
    }

    return (
        <div>
            <CreateNewInfo
                addNewInfo={addNewInfo}
            />
            <div>{people.map((value, index) => (
                <ShowInfo
                    info={value}
                    key={index}
                />
            ))}
            </div>
        </div>
    )
}

function CreateNewInfo({ addNewInfo }) {
    const [info, setInfo] = useState({
        name: '',
        email: '',
        intro: ''
    });

    const handleIndoSubmit = e => {
        e.preventDefault();
        if (info.name === '' || info.email === '' || info.intro === '') return;

        addNewInfo(info);
        setInfo({
            name: '',
            email: '',
            intro: ''
        });
    }

    return (
        <form>
            <div className='person-info-block'>
                <input
                    type='text'
                    className='input'
                    value={info.name}
                    placeholder='Add Name'
                    name='name'
                    onChange={e => setInfo({ ...info, name: e.target.value })}
                    required
                />
                <input
                    type='text'
                    className='input'
                    value={info.email}
                    placeholder='Add Email'
                    name='email'
                    onChange={e => setInfo({ ...info, email: e.target.value })}
                    required
                />
                <input
                    type='text'
                    className='input'
                    value={info.intro}
                    placeholder='Add Intro'
                    name='intro'
                    onChange={e => setInfo({ ...info, intro: e.target.value })}
                    required
                />
                <button onClick={handleIndoSubmit}>Click</button>
            </div>
        </form>
    )
}

export default PersonInfo