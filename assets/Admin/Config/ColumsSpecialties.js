import memoize from "memoize-one";
import {Button, Flex} from "theme-ui";
import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye, faTrashAlt} from "@fortawesome/free-solid-svg-icons";
const eye =<FontAwesomeIcon icon={faEye}  />
const trash = <FontAwesomeIcon icon={faTrashAlt} color='red'/>

export const ColumnsSpecialties= memoize( (handleDelete,history) =>[
    { name: "ID",
        selector: row => <div>{row.id}</div>,
        sortFunction: (a, b) => a.id - b.id
    },
    { name: "Specialité",
        selector: row => <div>{row.name}</div>,
        sortFunction: (a, b) => a.name.localeCompare(b.name)
    },

    {
        name:'Action',
        cell: (row) => <Button  onClick={()=>handleDelete(row.id)} id={row.id}>{trash}</Button>,
        ignoreRowClick: true,
        allowOverflow: true,
        button: true,
    },
    {

        cell: (row) => <Button  onClick={()=>history.push(`/Admin/specialities/${row.id}/show/`)} id={row.id}>{eye}</Button>,
        ignoreRowClick: true,
        allowOverflow: true,
        button: true,
    }
])