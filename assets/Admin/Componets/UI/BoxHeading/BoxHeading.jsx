import {Heading} from "theme-ui";

import React from "react";

const BoxHeading =({title,children})=>{
    return (
        <React.Fragment>
            <title>{title}</title>

            <Heading mb={3} as='h1'>{title}</Heading>

            {children}
        </React.Fragment>
    )
}

export default BoxHeading