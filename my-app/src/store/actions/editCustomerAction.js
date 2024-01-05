import { EDIT_CUSTOMER } from "../stores/types/constants"

export const setEditCustomer = (customer) => ({
    type: EDIT_CUSTOMER,
    payload: customer
})