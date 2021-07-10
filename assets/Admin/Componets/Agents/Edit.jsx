import React from 'react';
import {Box, Button, Input, Label, Select} from "theme-ui";
const Edit =(id)=>{
    return(
        <Box as="form" onSubmit={(e) => e.preventDefault()}>
            <Button onClick={handleClose}>Close</Button>
            {
                formAgentInput.map(({format,value,name,onChange,placeholder,type,label,options},i)=>{
                    return(
                        <React.Fragment key={i}>

                            {format ==='input' ?
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
                                />: format ==='date' ?
                                    <div>
                                        <Label  htmlFor={name} >{label}</Label>
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
                                    </div> : format ==='select' ?
                                        <Select
                                            mb={3}
                                            id={name}
                                            value={value}
                                            onChange={onChange}
                                        >
                                            {
                                                options.map((opition)=>{
                                                    return <option key={opition.id} value={opition['@id']}>{opition.title}</option>
                                                })
                                            }
                                        </Select>: null


                            }
                        </React.Fragment>
                    )
                })
            }

            <Button onClick={handleSubmit}>Edit</Button>

        </Box>
    )
}
export default Edit