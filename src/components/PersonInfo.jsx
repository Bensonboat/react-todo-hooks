import React, { useState } from 'react'
import '../index.css'


function ShowInfo({ info, removeInfoCard, index, getEditInfoCard }) {
    return (
        <div className='person-info-card'>
            <div className='info-card'>
                <img src="/logo192.png" alt="" style={{ width: '50px', height: '50px' }} className='app-logo-person' />
                <br />
                <br />
                <div>Name: {info.name}</div>
                <div>Contact: {info.email}</div>
                <div>Saying: {info.intro}</div>
                <button onClick={() => {
                    if (window.confirm('Sure?')) {
                        removeInfoCard(index)
                    } else {
                        return
                    }
                }} style={{ marginTop: '20px', backgroundColor: 'darkred', color: 'white' }}>Delete</button>
                <button onClick={() => {
                    document.getElementById('edit_person_card').style.display = 'block'
                    getEditInfoCard(index)
                }}>Edit</button>
                <br />
                <br />
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
        const newInfo = [...people, info];
        setPerson(newInfo);
    }

    const removeInfoCard = index => {
        const newInfo = [...people]
        newInfo.splice(index, 1);
        setPerson(newInfo)
    }

    const getEditInfoCard = index => {
        const editedInfo = [...people]
        document.getElementById('editing_name').value = editedInfo[index].name
        document.getElementById('editing_email').value = editedInfo[index].email
        document.getElementById('editing_intro').value = editedInfo[index].intro
    }

    const updatePersonInfo = index => {
        const newInfo = [...people];

        // 
        //  STILL WORKING ON IT
        // 
        newInfo[index].name = document.getElementById('editing_name').value
        newInfo[index].email = document.getElementById('editing_email').value
        newInfo[index].intro = document.getElementById('editing_intro').value
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
                    removeInfoCard={removeInfoCard}
                    index={index}
                    getEditInfoCard={getEditInfoCard}

                />
            ))}
                <EditPersonCard updatePersonInfo={updatePersonInfo}></EditPersonCard>

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
        if (info.name === '' || info.email === '' || info.intro === '') {
            alert('Complete The Form')
            return
        };

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

function EditPersonCard({ updatePersonInfo }) {
    return (
        <div style={{}}>
            <div id='edit_person_card' style={{ border: 'solid 1px rgba(0,0,0,.3)', width: '400px', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', display: 'none' }}>
                <input type="text" className='edit-info-input' placeholder='text' id='editing_name' />
                <input type="text" className='edit-info-input' placeholder='text' id='editing_email' />
                <input type="text" className='edit-info-input' placeholder='text' id='editing_intro' />
                <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px' }}>
                    <button onClick={updatePersonInfo}>Confirm</button>
                    <button onClick={() => {
                        document.getElementById('edit_person_card').style.display = 'none'
                    }}>Cancel</button>
                </div>
            </div>
        </div>
    )
}

export default PersonInfo