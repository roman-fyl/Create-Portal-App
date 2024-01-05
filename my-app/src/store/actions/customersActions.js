import { SET_CUSTOMER } from "../stores/types/constants"

export const setCustomers = (customers) => ({
    type: SET_CUSTOMER,
    payload: customers
})