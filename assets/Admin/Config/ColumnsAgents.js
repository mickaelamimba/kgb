import React from 'react'
import memoize from 'memoize-one';
import {Button, Flex} from "theme-ui";
import {useHistory} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye, faTrashAlt} from "@fortawesome/free-solid-svg-icons";
const eye =<FontAwesomeIcon icon={faEye}  />
const trash = <FontAwesomeIcon icon={faTrashAlt} color='red'/>

export const ColumnsAgents = memoize( (handleDelete,history) =>[
    { name: "ID",
        selector: row => <div>{row.id}</div>,
        sortFunction: (a, b) => a.id - b.id
    },
    { name: "Prénom",
        selector: row => <div>{row.firstName}</div> ,
        sortFunction: (a, b) => a.firstName.localeCompare(b.firstName)
    },
    { name: "Nom",
        selector: row => <div>{row.lastName}</div>,
        sortFunction: (a, b) => a.lastName.localeCompare(b.lastName)
    },
    { name: "Date de naissance",
        selector: row => <div>{new Date(row.birthDate).toISOString().slice(0,10)}</div>,
        sortFunction: (a, b) => a.birthDate.localeCompare(b.birthDate)
    },
    { name: "Code d'ientification",
        selector: row => <div>{row.indentificationCode}</div> ,
        sortFunction: (a, b) => a.indentificationCode - b.indentificationCode
    },
    { name: "Nationalité",
        selector:row => <div>{row.nationality}</div>,
        sortFunction: (a, b) => a.nationality.localeCompare(b.nationality)
    },
    { name: "Spécialité",
        selector:row => <Flex sx={{
            flexDirection:'column'
        }}>{row.agentSpecialties.map(x => <span key={x.id}>{x.name}</span>)}</Flex>,
        sortFunction: (a,b) => a-b
    },
    {
        name:'Action',
        cell: (row) => <Button  onClick={()=>handleDelete(row.id)} id={row.id}>{trash}</Button>,
        ignoreRowClick: true,
        allowOverflow: true,
        button: true,
    },
    {

        cell: (row) => <Button  onClick={()=>history.push(`/Admin/agents/${row.id}/show/`)} id={row.id}>{eye}</Button>,
        ignoreRowClick: true,
        allowOverflow: true,
        button: true,
    }
])

