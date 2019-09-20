import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { readSync } from 'fs'

const EmployeeApi = () => {
    const [loading_status, setLoadingStatus] = useState(false)

    const getEmployeeData = () => {
        document.getElementById('employee_data').innerHTML = "";

        if (!loading_status) {
            document.getElementById('employee_status').innerText = 'Loading...'
        }

        axios.get('http://dummy.restapiexample.com/api/v1/employees')
            .then(res => {
                let data = [...res.data]
                data.map((value, index) => {
                    console.log(value);
                    let name_block = document.createElement('div');
                    name_block.innerText = 'Dog Name ' + value.id + ': ' + value.employee_name;
                    name_block.id = index
                    document.getElementById('employee_data').appendChild(name_block)
                })
            })
            .catch((err) => {
                console.log(err)
            })
            .finally(() => {
                console.log('loading done');
                document.getElementById('employee_status').innerText = 'Top is the result'
            })
    }
    return (
        <div>
            <div id='employee_data' style={{ border: 'solid 2px rgba(0,0,0,.5)', padding: '8px 12px', width: '40%', margin: '20px auto', wordBreak: 'break-all' }}></div>
            <div style={{ margin: '50px auto', width: '200px' }}>
                <div id='employee_status'></div>
                <button onClick={getEmployeeData} >Click To Get</button>
            </div>
        </div>
    )
}

export default EmployeeApi

//  test from developing

// test from feature branch

