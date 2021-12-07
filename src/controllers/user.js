const User = require('../models/user');

exports.createUser = (req, res) => {
    User.findOne({ email: req.body.email })
        .exec((error, user) => {
            if (user) return res.status(400).json({
                message: 'User alreay exist.'
            });

            const {
                firstName,
                lastName,
                email,
                contact,
                address
            } = req.body;

            const _user = new User({
                firstName,
                lastName,
                email,
                contact,
                address
            });

            _user.save((error, data) => {
                if (error) return res.status(400).json({
                    message: error
                })
                if (data) return res.status(200).json({
                    data: data
                })
            });

        });
};

exports.getUser = (req, res) => {

    const id = req.query.id;
    const contact = req.query.phoneNumber;
    if ( id ) {
        User.find({ _id: id, contact: contact }).exec((err, data) =>{
            if (err) { res.status(400).json(err); return; };
            res.status(200).json({
                data: data
            });
        });
    }
    else {
        User.find({}).exec(function (err, data) {
            if (err) { res.status(400).json(err); return; };
            res.status(200).json({
                data: data
            });
        });
    }
};

exports.updateUser = (req, res) => {
    const id = req.query.id;
        User.findByIdAndUpdate(id, req.body, { new: true }, (err, doc) => {
            if (err) return res.status(400).json({ error: err });
            return res.status(200).json({
                data: doc
            });
        })
};
exports.deleteUser = (req, res) => {
    const id = req.query.id;
    if (id) {
        User.findByIdAndRemove(id, (err, doc) => {
            if (err) return res.status(400).json({ error: err });
            return res.send('Deleted successfully.');
        })
    }
    else {
        User.deleteMany({}, (err, doc) => {
            if (err) return res.status(400).json({ error: err });
            return res.send('Deleted successfully.');
        })
    }
};
