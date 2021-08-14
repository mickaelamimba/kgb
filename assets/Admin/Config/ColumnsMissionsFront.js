import memoize from "memoize-one";
import {Box, Button, Flex, Paragraph} from "theme-ui";
import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye, faTrashAlt} from "@fortawesome/free-solid-svg-icons";
const eye =<FontAwesomeIcon icon={faEye}  />
let variants

export const ColumnsMissionsFront= memoize( (history) =>[
    { name: "ID",
        selector: row => <div>{row.id}</div>,
        sortFunction: (a, b) => a.id - b.id
    },
    { name: "Tire",
        selector: row => <div>{row.title}</div>,
        sortFunction: (a, b) => a.title.localeCompare(b.title)
    },
    { name: "Description",
        selector: row => <div>{row.description}</div>,
        sortFunction: (a, b) => a.description.localeCompare(b.description)
    },
    { name: "Non de Code",
        selector: row => <div>{row.codeName}</div> ,
        sortFunction: (a, b) => a.codeName.localeCompare(b.codeName)
    },
    { name: "Pays",
        selector: row => <Box>{row.country}</Box>,
        sortFunction: (a, b) => a.country.localeCompare(b.country)
    },



    { name: "Type de Missions",
        selector: row => <div>{row.missionType}</div>,
        sortFunction: (a, b) => a.missionType.localeCompare(b.missionType)
    },
    { name: "Statut",
        selector: row => <Box  sx={{
            padding:1,
            borderRadius:9,
            variant:row.status === 'En préparation' ? 'cards.preparation':row.status ==='échec' ? 'cards.failure':row.status === 'en cours' ? 'cards.progress' :
                row.status === 'Terminé' ? 'cards.finished' :''
        }}>{row.status} { } </Box>,
        sortFunction: (a, b) => a.status.localeCompare(b.status)
    },

    { name: "Date de début",
        selector: row => <div>{new Date(row.startDate).toISOString().slice(0,10)}</div>,
        sortFunction: (a, b) => a.startDate.localeCompare(b.startDate)
    },
    { name: "Date de fin",
        selector: row => <div>{new Date(row.endDate).toISOString().slice(0,10)}</div>,
        sortFunction: (a, b) => a.endDate.localeCompare(b.endDate)
    },

    {
        name:'Action',
        cell: (row) => <div>
            <Button variant='primaryBtn.info'  onClick={()=>history.push(`/missions/${row.id}`)} id={row.id}>{eye}</Button>
        </div>,
        ignoreRowClick: true,
        allowOverflow: true,
        button: true,
    },

])