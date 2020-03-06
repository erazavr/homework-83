const mongoose = require('mongoose');

const HistorySchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectID,
            ref: 'User',
            required: true
        },
        track: {
            type: mongoose.Schema.Types.ObjectID,
            ref: 'Track',
            required: true
        },
        datetime: {
            type: Date,
            default: Date.now
        },

    },
    { versionKey: false }
);

const History = mongoose.model('History', HistorySchema);

module.exports = History;