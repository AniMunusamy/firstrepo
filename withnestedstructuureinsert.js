var mongodb=require('mongodb');

var url='mongodb://localhost:27017/example';

mongodb.MongoClient.connect(url,function(eror,db){
	if(eror)
	{
	console.log(eror);
	process.exit(1);
	}
	
	var doc=[
	{
	title:'jatgws',
	year:1976,
	director:'Steven Spielberg',
	rating:{
		critics:80,
		audience:97
	},
	screenplay:['peter Benchley','Carl Gotlieb']
	},
	{
	title:'titanic',
	year:1990,
	director:'Steven Spielberg',
	rating:{
		critics:82,
		audience:23
	},
	screenplay:['aaa','bbb']
	
	
	}
	];
	
	db.collection('movies').insert(doc,function(error,result){
	if(error)
	{
	console.log(error);
	process.exit(1);
	}
	
		db.collection('movies').find({'rating.audience':{'$lte':90}}).toArray(function(error,docs){
		if(error)
		{
		 console.log(error);
		 process.exit(1);
		 }
		 console.log('found docs :');
		 docs.forEach(function(doc){
			console.log(JSON.stringify(doc));
		});
process.exit(0);		
	});
	});
	});