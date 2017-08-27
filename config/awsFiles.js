var AWS = require('aws-sdk'); 
var s3 = new AWS.S3();

var fs = require('fs')

var bucketName = process.env.S3_BUCKET || "mcapaverdestorage";

module.exports.uploadFile = function (fileName, fileData, callback) {	

    s3.putObject({
    	Bucket: bucketName,
    	Key: fileName, 
    	Body: fileData
    }, function(err, data) {
	  if(err) {
	      return console.error('error running query', err);
	  }
	  return callback(null);
	});
};

module.exports.getFile = function (fileName, callback) {
	fs.stat('./public/path/' + fileName, function(err, stat) {
	  if (err != null) { 
		var file = fs.createWriteStream('./public/path/' + fileName);
		console.log(fileName);
		var stream = s3.getObject({
			Bucket: bucketName,
			Key: fileName
		}).createReadStream().pipe(file());
		stream.on('finish', function () { 
			return callback(null);
		});
	  } else {
		  return callback(null);
	  }
	}); 
	
	
};
