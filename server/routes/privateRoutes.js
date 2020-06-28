const express = require("express");
const moment = require("moment");
const router = express.Router();
const db = require('../models/index');
const { QueryTypes } = require("sequelize");

const authErrorObj = { errors: [{  'param': 'Server', 'msg': 'Authorization error' }] };
const serverErrorObj = { errors: [{  'param': 'Server', 'msg': 'Internal error' }] };

router.get('/user', async (req, res) => {
    try {
        const user = req.user && req.user.user;
        const userFound = await db.user.findOne({where: {id: user}});
        res.json({id: userFound.id, name: userFound.username});
    } catch (err) {
        res.status(401).json(authErrorObj);
    }
});
// vehicles
router.get("/category", async function (req, res) {
   try {
    const result = await db.sequelize.query(
        `SELECT distinct category from vehicles`,
        {
        type: QueryTypes.SELECT,
        }
    );

    res.json({
        status: 200,
        data: result,
    });
   } catch (error) {
    res.status(401).json(serverErrorObj);
   }
});
  
router.post("/category_price", async function (req, res) {
    try {
        const price = await db.vehicles.findOne({
            attributes: ["price"],
            where: { category: req.body.category },
        });
        onePrice = price.dataValues;
        res.json({
            status: 200,
            data: onePrice,
        });
    } catch (error) {
        res.status(401).json(serverErrorObj);
    }
});
router.post("/all_vehicles_in_specific_category", async function (req, res) {
    try {
        const total = await db.vehicles.findAndCountAll({
            where: { category: req.body.category },
        });
        const oneTotal = total.count;
        res.json({
            status: 200,
            data: oneTotal,
        });
    } catch (error) {
        res.status(401).json(serverErrorObj);
    }
});

// reservation
router.post("/book", async (req, res) => {
    try {
        const username = "admin";
        const { startDate, endDate, category } = req.body;
        const start_date = moment(startDate).format("YYYY/MM/DD");
        const end_date = moment(endDate).format("YYYY/MM/DD");
        await db.reservations.create({
        startDate: start_date,
        endDate: end_date,
        username: username,
        category: category,
        status: true,
        });
        res.json({
        status: 200,
        });
    } catch (error) {
        res.status(401).json(serverErrorObj);
    }
});
  
router.put("/updating", async (req, res) => {
    try {
        const date = moment(req.body.date).format("YYYY/MM/DD");
        await db.reservations.update(
            { status: false },
            { where: { [startDate.lt]: date } }
        );
        res.json({
            status: 200,
        });
    } catch (error) {
        res.status(401).json(serverErrorObj);
    }
});
  
router.get("/history", async function (req, res) {
    try {
        const result = await db.reservations.findAll({
            where: { status: false, username: req.user.username },
        });
        result.forEach(r => ({
            ...r, 
            startDate: moment(r.startDate).format('YYYY-MM-DD'), 
            endDate: moment(r.endDate).format('YYYY-MM-DD'),
            category: r.category
        }))
        res.json({
            status: 200,
            data: result,
        });
    } catch (error) {
        res.status(401).json(serverErrorObj);
    }
});
router.get("/reservations", async function (req, res) {
    try {
        let result = await db.reservations.findAll({
            where: { status: true, username: req.user.username },
        });
        result.forEach(r => ({
            ...r, 
            startDate: moment(r.startDate).format('YYYY-MM-DD'), 
            endDate: moment(r.endDate).format('YYYY-MM-DD'),
            category: r.category
        }))
        res.json({
            status: 200,
            data: result,
        });
    } catch (error) {
        res.status(401).json(serverErrorObj);
    }
});
  
router.post("/reservation_between_date", async function (req, res) {
    try {
        let result = await db.sequelize.query(
            `
        select count(*) as count from reservations 
        where startDate between $startDate and $endDate
        and category = $category`,
            {
            bind: {
                startDate: req.body.startDate,
                endDate: req.body.endDate,
                category: req.body.category,
            },
            }
        );
        res.json({
            status: 200,
            data: result[0][0].count,
        });
    } catch (error) {
        res.status(401).json(serverErrorObj);
    }
});

module.exports = router;
