import memoize from "memoize-one";
import {Button, Flex} from "theme-ui";
import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye, faTrashAlt} from "@fortawesome/free-solid-svg-icons";
const eye =<FontAwesomeIcon icon={faEye}  />
const trash = <FontAwesomeIcon icon={faTrashAlt} />
export const ColumnsContacts= memoize( (handleDelete,history) =>[
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
        selector: row => <div>{new Date(row.birthDate).toISOString().slice(0,10)}</div>
        , sortFunction: (a, b) => a.birthDate.localeCompare(b.birthDate)
    },
    { name: "Non de Code",
        selector: row => <div>{row.codeName}</div> ,
        sortFunction: (a, b) => a.codeName.localeCompare(b.codeName)
    },
    { name: "Nationalité",
        selector:row => <div>{row.nationality}</div>,
        sortFunction: (a, b) => a.nationality.localeCompare(b.nationality)
    },
    {
        name:'Action',
        cell: (row) => <div>
            <Button mr={2} variant='primaryBtn.delete'  onClick={()=>handleDelete(row.id)} id={row.id}>{trash}</Button>
            <Button variant='primaryBtn.info'  onClick={()=>history.push(`/Admin/contacts/${row.id}/show/`)} id={row.id}>{eye}</Button>
        </div>,

        ignoreRowClick: true,
        allowOverflow: true,
        button: true,
    },

])