const express = require('express');
const app = express();
const pool = require('./db');

const nodemailer = require('nodemailer');
const router = express.Router();

router.get('/', async (req, res) => {
    const thana = req.query.thana;

    try {
        const query1 = 'SELECT * FROM hospital WHERE policestation = $1';
        const { rows: hospitals } = await pool.query(query1, [thana]);

        if (hospitals.length < 3) {
            console.log("hi");
            const nearbyThanasQuery = `
                SELECT h.*
                FROM thana_nearest tn
                JOIN hospital h ON LOWER(tn.thana_name_from) = LOWER(h.policestation)
                WHERE LOWER(tn.thana_name_to) = LOWER($1)
                UNION
                SELECT h.*
                FROM thana_nearest tn
                JOIN hospital h ON LOWER(tn.thana_name_to) = LOWER(h.policestation)
                WHERE LOWER(tn.thana_name_from) = LOWER($1)
            `;

            const { rows: nearbyHospitals } = await pool.query(nearbyThanasQuery, [thana]);
            hospitals.push(...nearbyHospitals);
        }
        
        console.log(hospitals);
        res.json({ hospitals });

    } catch (error) {
        console.error('Error fetching hospitals:', error);
        res.status(500).json({ error: 'An error occurred while fetching hospitals.' });
    }
});



const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'roya4412@gmail.com',
        pass: 'bgxi uxwe tnbe llhf'
    }
});

router.get('/sendMail', async (req, res) => {
    try {
        const hospitalData = req.query.hospitalData;
        const name = req.query.user;
        const thana = req.query.thana;
        const age = req.query.age;
        const weight = req.query.weight;
        const blood_group = req.query.blood_group;

        console.log(hospitalData);

        const emailPromises = hospitalData.map(hospital => {
            const mailOptions = {
                from: '"HealthSolution Admin" <roya4412@gmail.com>',
                to: hospital.email,
                subject: 'Emergency Health Servive Needed',
                text: `Dear ${hospital.name},

A person named ${name}, age ${age}, blood group ${blood_group}, weight ${weight} kg, in 30/A, Robin Garden, ${thana} is in need of health service. Please send your help as soon as possible.

Best regards,
HealthSolution Admin`
            };

            return transporter.sendMail(mailOptions);
        });

        // Use try-catch here to handle potential errors from Promise.all
        try {
            await Promise.all(emailPromises);
            res.status(200).send('Emails sent successfully');
        } catch (error) {
            console.error('Error sending some emails:', error);
            res.status(500).send('Error sending some emails');
        }
    } catch (error) {
        console.error('Error in email process:', error);
        res.status(500).send('Error in email process');
    }
});

module.exports = router;