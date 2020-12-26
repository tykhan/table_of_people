import { START_SPINNER, STOP_SPINNER } from '../../_variables/constants'

export const startLoading = () => ({ type: START_SPINNER });
export const stopLoading = () => ({ type: STOP_SPINNER });
