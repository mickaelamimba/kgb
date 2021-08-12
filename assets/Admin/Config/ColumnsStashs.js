import memoize from "memoize-one";
import {Button, Flex} from "theme-ui";
import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye, faTrashAlt} from "@fortawesome/free-solid-svg-icons";
const eye =<FontAwesomeIcon icon={faEye}  />
const trash = <FontAwesomeIcon icon={faTrashAlt} />

export const ColumnsStashs= memoize( (handleDelete,history) =>[
    { name: "ID",
        selector: row => <div>{row.id}</div>,
        sortFunction: (a, b) => a.id - b.id
    },
    { name: "Code",
        selector: row => <div>{row.code}</div>,
        sortFunction: (a, b) => a.code -b.code
    },
    { name: "Adresse",
        selector: row => <div>{row.address}</div>,
        sortFunction: (a, b) => a.address.localeCompare(b.address)
    },
    { name: "Pays",
        selector: row => <div>{row.country}</div>,
        sortFunction: (a, b) => a.country.localeCompare(b.country)
    },
    { name: "Type",
        selector: row => <div>{row.type}</div>,
        sortFunction: (a, b) => a.type.localeCompare(b.type)
    },

    {
        name:'Action',
        cell: (row) => <div>
            <Button mr={2} variant='primaryBtn.delete'  onClick={()=>handleDelete(row.id)} id={row.id}>{trash}</Button>
            <Button variant='primaryBtn.info'  onClick={()=>history.push(`/Admin/stashs/${row.id}/show/`)} id={row.id}>{eye}</Button>
        </div>,
        ignoreRowClick: true,
        allowOverflow: true,
        button: true,
    },

])