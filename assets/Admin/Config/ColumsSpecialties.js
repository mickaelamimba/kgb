import memoize from "memoize-one";
import {Button, Flex} from "theme-ui";
import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye, faTrashAlt} from "@fortawesome/free-solid-svg-icons";
const eye =<FontAwesomeIcon icon={faEye}  />
const trash = <FontAwesomeIcon icon={faTrashAlt} />

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
        cell: (row) => <div>
            <Button mr={2} variant='primaryBtn.delete'  onClick={()=>handleDelete(row.id)} id={row.id}>{trash}</Button>
            <Button variant='primaryBtn.info'  onClick={()=>history.push(`/Admin/specialities/${row.id}/show/`)} id={row.id}>{eye}</Button>
        </div>,
        ignoreRowClick: true,
        allowOverflow: true,
        button: true,
    },

])