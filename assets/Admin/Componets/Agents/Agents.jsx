import React from 'react';
import Form from "../../Form/Form";
import FormLabel from "../../Form/FormLabel";
import FormInput from "../../Form/FormInput";

const Agents =()=>{

    return (
        <Form bntTexte={'Creer'}>
            <FormLabel text={'Non:'}>
                <FormInput type={'text'} placeholder={'Voter Non'} require={true} />
            </FormLabel>
            <FormLabel text={'Prenom:'}>
                <FormInput type={'text'} placeholder={'Voter Prenom'} require={true} />
            </FormLabel>
            <FormLabel text={'Date de naissance:'}>
                <FormInput type={'date'}  require={true} />
            </FormLabel>
            <FormLabel text={'code d\'idetification'}>
                <FormInput type={'text'} placeholder='voter code '  require={true} />
            </FormLabel>
        </Form>
      )
}
export default Agents