const Application = require("../models/applicationModel");

exports.postApplication = async (req, res, next) => {
    try {
        const newApplication = await Application.create(req.body);
        res.status(201).json({
            status: "success",
            data: {
                newApplication,
            },
        });
    } catch (error) {
        console.log(error);
    }
};
