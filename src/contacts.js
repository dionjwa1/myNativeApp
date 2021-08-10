import React from 'react'
// import { FlatList } from 'react-native'

const contacts = [
    {
        index: 0,
        name: 'Dion Mustard',
        phone: '2-Hot-2-Handle'
    },
    {
        index: 1,
        name: 'Tim Tboz',
        phone: '4-Your-Eyez-Only'
    },
    {
        index: 2,
        name: 'Alex Axel-Rod',
        phone: '911'
    },
]

function Contacts() {
    return (
        <div>
            <button> Your Contacts, Fool </button>
            {/* <FlatList /> */}
        </div>
    )
}

export default Contacts;