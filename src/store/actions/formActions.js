import {
    SUBMIT_DONORS_FORM,
    TOTAL_RECIPIENTS,
    SUBMIT_RECIPIENTS_FORM,
    TOTAL_DONORS,
} from '../constants/formConstants';

export const DonorsForm = () => {

    dispatch({
        type: SUBMIT_DONORS_FORM,
        payload: {}
    })
}

export const RecipientsForm = () => {

    dispatch({
        type: SUBMIT_RECIPIENTS_FORM,
        payload: {}
    })
}

export const totalDonors = (donorDetails) => {
    return {
        type: TOTAL_DONORS,
        payload: donorDetails
    }
}
export const totalRecipients = () => {
    return {
        type: TOTAL_RECIPIENTS,
        payload: {}
    }
}