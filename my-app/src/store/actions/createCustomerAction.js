import { CREATE_CUSTOMER } from "../stores/types/constants"

export const CreateCustomer = (customer) => ({
    type: CREATE_CUSTOMER,
    payload: customer
})