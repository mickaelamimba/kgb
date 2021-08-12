import {Button, Heading} from "theme-ui";

import React from "react";
import PropTypes from "prop-types";
import DisplayValidRequest from "../DisplayMessage/DisplayValidRequest";
import Configs from "../../../Config/Config.json";
import DisplayError from "../DisplayMessage/DisplayError";

const BoxHeading =({title,handleOpenModal ,btnTitle,children,isSuccess,isError})=>{
    return (
        <React.Fragment>
            <title>{title}</title>
            <Heading mb={3} as='h1'>{title}</Heading>
            <Button mb={3} onClick={handleOpenModal}>{btnTitle}</Button>
            {isSuccess?<DisplayValidRequest message={Configs.submitSuccess.success}/>:
                isError ?<DisplayError message={Configs.submitErrors.error}/> :''
            }

            {children}
        </React.Fragment>
    )
}

export default BoxHeading

BoxHeading.propTypes = {
    title: PropTypes.string,
    handleOpenModal: PropTypes.func,
    btnTitle: PropTypes.string,
    isError: PropTypes.bool,
    isSuccess:PropTypes.bool,
}