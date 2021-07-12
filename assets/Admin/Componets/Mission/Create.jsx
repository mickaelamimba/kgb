import React from 'react';
import CreateBox from "../UI/CreateBox/CreateBox";
import {Box, Input, Label, Select, Textarea} from "theme-ui";
const Create =({handleSubmit,formMissionInput,handleClose})=>{
    return(
<CreateBox handleSubmit={handleSubmit} handleClose={handleClose} title='Ajouter Mission'>
    {
        formMissionInput.map(({format,value,name,onChange,placeholder,type,label,options},i)=>{

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
                        />
                        : format ==='textarea' ?

                            <Textarea
                                name={name}
                                mb={3}
                                placeholder={placeholder}
                                onChange={onChange}
                                value={value}
                            />:format ==='select' ?
                                <Select
                                    name={name}
                                    mb={3}
                                    id={name}
                                    value={value}
                                    onChange={onChange}
                                >
                                    {
                                        options.map((option,i)=>{
                                            return <option key={i} value={i}>{option}</option>
                                        })
                                    }

                                </Select>:format ==='date' ?<Box>
                                    <Label  htmlFor={name}>{label}</Label>
                                    <Input

                                        type={type}
                                        name={name}
                                        id={name}
                                        mb={3}
                                        value={value}
                                        onChange={onChange}
                                    />
                                </Box> : null
                    }



                </React.Fragment>

            )
        })
    }
</CreateBox>
    )
}
export default Create
