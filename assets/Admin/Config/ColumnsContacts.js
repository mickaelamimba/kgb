import memoize from "memoize-one";
import {Button, Flex} from "theme-ui";
import React from "react";

export const ColumnsContacts= memoize( (handleDelete,history) =>[
    { name: "ID",
        selector: row => <div>{row.id}</div>,
        sortable: true
    },
    { name: "Prénom",
        selector: row => <div>{row.firstName}</div> ,
        sortable: true
    },
    { name: "Nom",
        selector: row => <div>{row.lastName}</div>,
        sortable: true
    },
    { name: "Date de naissance",
        cell: row => <div>{row.birthDate}</div>
        , sortable: true  },
    { name: "Non de Code",
        selector: row => <div>{row.codeName}</div> ,
        sortable: true
    },
    { name: "Nationalité",
        selector:row => <div>{row.nationality}</div>,
        sortable: true
    },
    {
        name:'Action',
        cell: (row) => <Button  onClick={()=>handleDelete(row.id)} id={row.id}>Action</Button>,
        ignoreRowClick: true,
        allowOverflow: true,
        button: true,
    },
    {

        cell: (row) => <Button  onClick={()=>history.push(`/Admin/contacts/${row.id}/show/`)} id={row.id}>Modifier</Button>,
        ignoreRowClick: true,
        allowOverflow: true,
        button: true,
    }
])