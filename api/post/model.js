var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PostSchema = new Schema({
	title: String,
	date: { type: Date, default:Date.now },	
	content: String,
	excerpt: String,
	tags: Array,
	imageUrl: String,
	hearts: { type: Number, default: 0 },
	slug: String,
	views: { type: Number, default: 0 }
});

//Pre-save hook
PostSchema.pre('save', function (next){
	this.slug = 
		this.title.toString().toLowerCase()
		.replace(/\s+/g, '-')        // Replace spaces with -
      	.replace(/[^\w\-]+/g, '')   // Remove all non-word chars
      	.replace(/\-\-+/g, '-')      // Replace multiple - with single -
      	.replace(/^-+/, '')          // Trim - from start of text
      	.replace(/-+$/, '');         // Trim - from end of text	
	next();
});

module.exports = mongoose.model('Post', PostSchema);