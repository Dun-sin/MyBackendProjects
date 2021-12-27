const mongoose = require('mongoose');

const subscriberSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	subcribedToChannel: {
		type: String,
		required: true,
	},
	susbcriberDate: {
		type: Date,
		required: true,
		default: Date.now,
	},
});

module.exports = mongoose.model('Subscriber', subscriberSchema);
