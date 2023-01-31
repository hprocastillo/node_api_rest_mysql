import {pool} from "../db/db.js";

export const getCustomers = async (req, res) => {
    try {
        const [rows] = await pool.query('select * from cliente');
        res.json(rows);
    } catch (error) {
        return res.status(500).json({message: 'Algo malo paso, intentalo nuevamente...'});
    }
};

export const getCustomerById = async (req, res) => {
    try {
        const [rows] = await pool.query('select * from cliente where id = ?', [req.params.id]);
        if (rows.length <= 0) return res.status(404).json({message: "No se encontro al cliente"});
        res.send(rows[0]);
    } catch (error) {
        return res.status(500).json({message: 'Algo malo paso, intentalo nuevamente...'});
    }
};

export const addCustomer = async (req, res) => {
    const {customer, phone} = req.body;

    try {
        const [rows] = await pool.query('INSERT INTO cliente (cliente, telefono) VALUES (?, ?)', [customer, phone]);
        res.send({id: rows.insertId, customer, phone,});
    } catch (error) {
        return res.status(500).json({message: 'Algo malo paso, intentalo nuevamente...'});
    }
};

export const updateCustomer = async (req, res) => {
    const {id} = req.params;
    const {customer, phone} = req.body;

    try {
        const [result] = await pool.query('UPDATE cliente SET cliente = IFNULL(?,cliente), telefono = IFNULL(?,telefono) WHERE id = ?', [customer, phone, id]);
        if (result.affectedRows <= 0) return res.sendStatus(404).json({message: "No se encontro al cliente"});
        const [rows] = await pool.query('SELECT * FROM cliente WHERE id=?', [id]);
        res.json(rows[0]);
    } catch (error) {
        return res.status(500).json({message: 'Algo malo paso, intentalo nuevamente...'});
    }
}

export const deleteCustomer = async (req, res) => {
    try {
        const [result] = await pool.query('delete from cliente where id = ?', [req.params.id]);
        if (result.affectedRows <= 0) return res.status(404).json({message: "No se encontro al cliente"});
        res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({message: 'Algo malo paso, intentalo nuevamente...'});
    }

}