import memoize from "memoize-one";
import {Box, Button, Flex, Paragraph} from "theme-ui";
import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye, faTrashAlt} from "@fortawesome/free-solid-svg-icons";
const eye =<FontAwesomeIcon icon={faEye}  />
const trash = <FontAwesomeIcon icon={faTrashAlt} />

export const ColumnsMissions= memoize( (handleDelete,history) =>[
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
        selector: row => <div>{row.country}</div>,
        sortFunction: (a, b) => a.country.localeCompare(b.country)
    },
    { name: "Agents",
        selector:row => <Flex sx={{
            flexDirection:'column'
        }}>{row.agents.map(x => <Box key={x.id}>
            <Paragraph as='span' mr={2} >{x.lastName}</Paragraph>
            <Paragraph as='span'>{x.firstName}</Paragraph>
        </Box> )}
    </Flex>,
        sortFunction: (a,b) => a-b
    },
    { name: "Contacts",
        selector:row => <Flex sx={{
            flexDirection:'column'
        }}>{row.contacts.map(x => <Box key={x.id}>
            <Paragraph as='span' mr={2} >{x.lastName}</Paragraph>
            <Paragraph as='span'>{x.firstName}</Paragraph>
        </Box> )}
        </Flex>,
        sortFunction: (a,b) => a-b
    },
    { name: "Cibles",
        selector:row => <Flex sx={{
            flexDirection:'column'
        }}>{row.targets.map(x => <Box key={x.id}>
            <Paragraph as='span' mr={2} >{x.lastName}</Paragraph>
            <Paragraph as='span'>{x.firstName}</Paragraph>
        </Box> )}
        </Flex>,
        sortFunction: (a,b) => a-b
    },
    { name: "Type de Missions",
        selector: row => <div>{row.missionType}</div>,
        sortFunction: (a, b) => a.missionType.localeCompare(b.missionType)
    },
    { name: "Statut",
        selector: row => <div>{row.status}</div>,
        sortFunction: (a, b) => a.status.localeCompare(b.status)
    },
    { name: "Planque",
        selector: row => <div>{row.stashs.code}</div>,
        sortFunction: (a, b) => a.stashs.code.localeCompare(b.stashs.code)
    },
    { name: "Spécialité",
        selector: row => <div>{row.specialties.name}</div>,
        sortFunction: (a, b) => a.specialties.name.localeCompare(b.specialties.name)
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
            <Button mr={2} variant='primaryBtn.delete'  onClick={()=>handleDelete(row.id)} id={row.id}>{trash}</Button>
            <Button variant='primaryBtn.info'  onClick={()=>history.push(`/Admin/missions/${row.id}/show/`)} id={row.id}>{eye}</Button>
        </div>,
        ignoreRowClick: true,
        allowOverflow: true,
        button: true,
    },

])