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
        {
            index: 3,
            name: 'Herk',
            phone: '21-21'
        },
        {
            index: 4,
            name: 'Van-Man',
            phone: '86'
        },
    },
]

function Contacts() {
    return (
        <div>
            <button> Your Contacts, Fool </button>
            <scroll> Hello `${Contacts.index}</scroll>
            {/* <FlatList /> */}
        </div>
    )
}

export default Contacts;