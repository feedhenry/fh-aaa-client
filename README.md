# fh-aaa-client

## Usage
	var config = { protocol : "http|https", host : "somehost:someport, e.g. localhost:8818"};
	var aaaClient = require('fh-aaa-client)(config);

See test/fixtures/mockRequest.json for request bodies

## canAccess

	aaaClient.canAccess(req, function(err, res){
      // res.allowed indicates result
	});

## filterList

	aaaClient.filterList(req, function(err, res){
      // res['business-object-ids'] is an array of IDs with permission to access
	});

## Runing Tests

	make test
hello
