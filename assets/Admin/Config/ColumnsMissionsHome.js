import memoize from "memoize-one";
import {Box, Button, Flex, Paragraph} from "theme-ui";
import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye, faTrashAlt} from "@fortawesome/free-solid-svg-icons";
const eye =<FontAwesomeIcon icon={faEye}  />
const trash = <FontAwesomeIcon icon={faTrashAlt} />

export const ColumnsMissionsHome= memoize( (history) =>[
    { name: "ID",
        selector: row => <div>{row.id}</div>,
        sortFunction: (a, b) => a.id - b.id
    },
    { name: "Tire",
        selector: row => <div>{row.title}</div>,
        sortFunction: (a, b) => a.title.localeCompare(b.title)
    },

    { name: "Pays",
        selector: row => <div>{row.country}</div>,
        sortFunction: (a, b) => a.country.localeCompare(b.country)
    },


    { name: "Type de Missions",
        selector: row => <div>{row.missionType}</div>,
        sortFunction: (a, b) => a.missionType.localeCompare(b.missionType)
    },
    { name: "Statut",
        selector: row => <Box sx={{
            px:2,
            py:1,
            borderRadius:10,
            variant:row.status === 'En préparation' ? 'cards.preparation':row.status ==='Échec' ? 'cards.failure':row.status === 'En cours' ? 'cards.progress' :
                row.status === 'Terminé' ? 'cards.finished' :''
        }}>{row.status}</Box>,
        sortFunction: (a, b) => a.status.localeCompare(b.status)
    },

    { name: "Spécialité",
        selector: row => <div>{row.specialties.name}</div>,
        sortFunction: (a, b) => a.specialties.name.localeCompare(b.specialties.name)
    },
    {
        name:'Action',
        cell: (row) => <div>
            <Button variant='primaryBtn.info'  onClick={()=>history.push(`/Admin/missions/${row.id}/show/`)} id={row.id}>{eye}</Button>
        </div>,
        ignoreRowClick: true,
        allowOverflow: true,
        button: true,
    },

])