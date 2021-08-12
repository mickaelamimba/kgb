import {Box, Button} from "theme-ui";
import React from "react";
import PropTypes from "prop-types";
import {useOpenModal} from "../../../Context/OpenModalContext";
import {useHistory} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPen, faTrashAlt} from "@fortawesome/free-solid-svg-icons";

const ShowBox =({children,handleDelete,path,deleteId})=>{
    const pen = <FontAwesomeIcon icon={faPen}/>
    const trash = <FontAwesomeIcon icon={faTrashAlt} />
    const modal = useOpenModal()
    const history = useHistory()
    return(
        <Box sx={{
            padding:3,
            borderTop:'gray',
            boxShadow:'0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
            borderRadius:4,
            'dl':{
                borderRightWidth:'calc(1px * 0)',
                borderLeftWidth:'calc(1px * calc(1 - 0))',
                'div':{
                    display:'grid',
                    gap:1,
                    gridTemplateColumns: 'repeat(3,minmax(0,1fr))',
                    paddingBottom:2
                }
            }
        }}>
            {children}

            <dl>
                <Box mt={5}>
                    <dt>Action</dt>
                    <div>
                        <dd><Button onClick={()=>history.push(`/Admin/${path}`)}>Retour</Button></dd>
                        <dd><Button variant='primaryBtn.edit'  onClick={modal.handleOpenModalUpdate}>Modifier {pen} </Button></dd>
                        <dd><Button variant='primaryBtn.delete' onClick={()=>handleDelete(deleteId)} bg='danger'>Suprimer {trash}</Button></dd>
                    </div>

                </Box>
            </dl>
        </Box>
    )
}
export default ShowBox
ShowBox.propTypes = {
    children : PropTypes.node,
}