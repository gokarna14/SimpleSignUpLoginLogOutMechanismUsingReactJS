import React, { useState } from 'react'


function Information(){

    const getDetails = () => {
        var c = JSON.parse(localStorage.getItem('details') || "[]")
        return c[parseInt(localStorage.getItem('id'))]
    }
    const[information, setinformation] = useState(getDetails())
    const[keys, setkeys] = useState(Object.keys(information))

    const keysList = keys.map(
        (keys)=>{
            return <tr> <td>{keys.toUpperCase()}</td> <td>{information[keys]}</td></tr>
        }
    )

    return(
        <div>
            <h1>This is your stored information</h1>
            <div>
                <table className="table table-dark">
                <thead>
                    <tr>
                        <th scope="col">Identifier</th>
                        <th scope="col">Information</th>
                    </tr>
                </thead>
                    <tbody>
                        {keysList}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Information; 