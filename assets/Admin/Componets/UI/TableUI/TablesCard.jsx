import React from 'react'

import PropTypes from "prop-types";
import {Box} from "theme-ui";

const TablesCard= ({children})=>{
    return(
        <Box sx={{
            borderRadius:4,

            border:'1, solid',
            borderColor: '#c6c4c4',
            boxShadow:'0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
            padding:[2,3]
        }}>
            {children}
        </Box>
    )
}

export default TablesCard

TablesCard.propTypes={
    children : PropTypes.node
}