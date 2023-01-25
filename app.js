function display(data, callback) {
	
	var randInt = Math.random() * (10 - 1) +1;
	var err = randInt > 5? new Error("Ошибка выполнения. randInt больше 5"): null;

	setTimeout(function() {
		callback(err, data);
	}, 0)
}

console.log("Start working programm");

display("Data processing....", function(err, data) {
	if(err) throw err;
	console.log(data);
});
