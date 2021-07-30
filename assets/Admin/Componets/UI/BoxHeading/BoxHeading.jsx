import {Button, Heading} from "theme-ui";

import React from "react";
import PropTypes from "prop-types";

const BoxHeading =({title,handleOpenModal ,btnTitle,children})=>{
    return (
        <React.Fragment>
            <title>{title}</title>
            <Heading mb={3} as='h1'>{title}</Heading>
            <Button mb={3} onClick={handleOpenModal}>{btnTitle}</Button>

            {children}
        </React.Fragment>
    )
}

export default BoxHeading

BoxHeading.propTypes = {
    title: PropTypes.string,
    handleOpenModal: PropTypes.func,
    btnTitle: PropTypes.string,
}