import {Router} from 'express';
import {addCustomer, deleteCustomer, getCustomers, getCustomerById, updateCustomer} from "../controllers/customers.controller.js";

const router = Router();

router.get('/customers', getCustomers);

router.get('/customers/:id', getCustomerById);

router.post('/customers', addCustomer);

router.patch('/customers/:id', updateCustomer);

router.delete('/customers/:id', deleteCustomer);

export default router;
