import {Box, Button, Flex, Grid, Heading} from "theme-ui";
import React from "react";
import PropTypes from "prop-types";
import {useOpenModal} from "../../../Context/OpenModalContext";
import {useHistory} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPen, faTrashAlt,faList} from "@fortawesome/free-solid-svg-icons";
import Configs from "../../../Config/Config.json";
import {useAlert} from "../../../Context/AlertContext";


const ShowBox =({children,handleDelete,path,isUpdateSuccess,isUpdateError,headerTitle})=>{
    const pen = <FontAwesomeIcon icon={faPen}/>
    const trash = <FontAwesomeIcon icon={faTrashAlt} />
    const list = <FontAwesomeIcon icon={faList}/>
    const modal = useOpenModal()
    const history = useHistory()
    const {AlertBox,handleCloseAlert}=useAlert()

    return(
        <React.Fragment>

            {isUpdateSuccess||isUpdateError?
                <AlertBox
                    messages={isUpdateSuccess?Configs.submitSuccess.successUpdate:
                        isUpdateError ?Configs.submitErrors.errorUpdate:null}
                    handleCloseAlert={handleCloseAlert}
                    variant={isUpdateSuccess?'success':isUpdateError ?'danger':null}
                />:null
            }
        <Box mt={3} as='section' sx={{
            padding:3,
            borderTop:'gray',
            boxShadow:'0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
            borderRadius:4,
            'dl':{
                'div':{
                    display:['block','grid'],
                    gap:1,
                    gridTemplateColumns: 'repeat(3,minmax(0,1fr))',
                    paddingTop:2,
                    paddingBottom:2,
                    borderTopWidth: 'calc(1px * calc(1 - 0))',
                    borderBottomWidth: 'calc(1px * 0)',
                    borderStyle:[0, "solid"],
                    borderRight:0,
                    borderLeft:0,

                    borderColor:'rgba(138,141,145,0.59)'
                },
                'dt':{
                    color:' rgba(107,114,128,1)',
                    fontWeight: 500,

                }
            }
        }}>
            <Heading mb={3} as='h2'>{list} {` Détail ${headerTitle}`}</Heading>
            {children}

            <Box>
                <Grid columns={[2,3,2]} as='nav' mt={5} sx={{
                    width:'100%',
                    alignItems:"center",
                    justifyContent:"center",
                }}>
                    <h5>Action</h5>
                    <Grid gap={3} width={[200,100,'8rem']} columns={[1,3,3]} as='ul' sx={{
                        justifyContent:"space-around",
                        'li':{
                            listStyleType:'none'
                        }
                    }}>
                        <li><Button onClick={()=>history.push(`/Admin/${path}`)}>Retour</Button></li>
                        <li><Button variant='primaryBtn.edit'  onClick={modal.handleOpenModalUpdate}>Modifier {pen} </Button></li>
                        <li><Button variant='primaryBtn.delete' onClick={handleDelete} bg='danger'>Suprimer {trash}</Button></li>
                    </Grid>

                </Grid>
            </Box>
        </Box>
        </React.Fragment>
    )
}
export default ShowBox
ShowBox.defaultProps = {
    headerTitle: ''
}
ShowBox.propTypes = {
    headerTitle : PropTypes.string,
    path: PropTypes.string,
    isUpdateError : PropTypes.bool,
    isUpdateSuccess: PropTypes.bool,
    children : PropTypes.node,
}