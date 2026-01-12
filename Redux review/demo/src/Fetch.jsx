import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { showData } from './FetchSlice';

function Fetch() {
    const dispatch = useDispatch();

    const items = useSelector((state) => state.fetch.items) //This was the error(used "Fetch" instead of "fetch")


    const user = {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
                "lat": "-37.3159",
                "lng": "81.1496"
            }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
        }
    }

    return (
        <div>
            <button onClick={() => dispatch(showData(user))}>show</button>
                <div>
                    <h2>Name:{items.name}</h2>
                    <h2>Username:{items.username}</h2>
                    <h2>Email:{items.email}</h2>
                </div>
        </div>

    )
}

export default Fetch