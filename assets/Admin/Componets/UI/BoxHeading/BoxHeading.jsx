import {Button, Heading} from "theme-ui";

import React from "react";
import PropTypes from "prop-types";
import DisplayValidRequest from "../DisplayMessage/DisplayValidRequest";
import Configs from "../../../Config/Config.json";
import DisplayError from "../DisplayMessage/DisplayError";
import {useAlert} from "../../../Context/AlertContext";

const BoxHeading =({title,handleOpenModal ,btnTitle,children,isSuccess,isError})=>{
    const {AlertBox,handleCloseAlert}=useAlert()
    return (
        <React.Fragment>
            <title>{title}</title>
            <Heading mb={3} as='h1'>{title}</Heading>
            <Button mb={3} onClick={handleOpenModal}>{btnTitle}</Button>
            {isSuccess||isError?
                <AlertBox
                    messages={isSuccess?Configs.submitSuccess.success:
                        isError ?Configs.submitErrors.error:null}
                    handleCloseAlert={handleCloseAlert}
                    variant={isSuccess?'success':isError ?'danger':null}
                />:null
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