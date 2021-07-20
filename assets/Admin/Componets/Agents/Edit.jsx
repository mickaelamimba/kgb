import React from 'react';
import {Box, Input, Label, Select, Switch} from "theme-ui";
import CreateBox from "../UI/CreateBox/CreateBox";

const Edit = ({formAgentInput, handleClose, handleUpdate}) => {
    return (
        <CreateBox handleClose={handleClose} handleSubmit={handleUpdate} title='Modifier agent'>
            {
                formAgentInput.map(({format, value, name, onChange, placeholder, type, label, options}, i) => {
                    return (
                        <React.Fragment key={i}>

                            {format === 'input' ?
                                <Input
                                    name={name}
                                    mb={3}
                                    placeholder={placeholder}
                                    type={type}
                                    onChange={onChange}
                                    value={value}
                                    sx={{
                                        filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))'
                                    }}
                                /> : format === 'date' ?
                                    <div>
                                        <Label htmlFor={name}>{label}</Label>
                                        <Input
                                            name={name}
                                            id={name}
                                            mb={3}
                                            placeholder={placeholder}
                                            type={type}
                                            onChange={onChange}
                                            value={value}
                                            sx={{
                                                filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))'
                                            }}
                                        />
                                    </div> : format === 'select' ?
                                        <Select
                                            mb={3}
                                            id={name}
                                            value={value}
                                            onChange={onChange}
                                        >
                                            {
                                                options.map(({option},i) => {
                                                    return (<option key={i}
                                                                    value={option.id}>{option.nationalite}</option>)
                                                })
                                            }
                                        </Select> : format === 'checked' ?
                                            <Box>
                                                <Label htmlFor={name}>{label}</Label>
                                                {
                                                    options.map((opition) => {
                                                        return <Switch key={opition.id}
                                                                       onChange={onChange}
                                                                       htmlFor={opition.name}
                                                                       id={opition['@id']}

                                                                       value={value}
                                                                       label={opition.name}/>

                                                    })
                                                }

                                            </Box> : null


                            }
                        </React.Fragment>
                    )
                })
            }


        </CreateBox>
    )
}
export default Edit