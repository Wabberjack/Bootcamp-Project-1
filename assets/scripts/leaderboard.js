// Initialize Firebase
var config = {
	apiKey: "AIzaSyBl7_O3pchKuUbj5TEBAcoOOpAlV-4RDRE",
	authDomain: "bcs-whosaidit.firebaseapp.com",
	databaseURL: "https://bcs-whosaidit.firebaseio.com",
	projectId: "bcs-whosaidit",
	storageBucket: "bcs-whosaidit.appspot.com",
	messagingSenderId: "736508559692"
};
firebase.initializeApp(config);
var database = firebase.database();
function leaderboardPull(){
	dateStr = moment().startOf('day').format("YYMMDD");
	console.log(dateStr)
	var leaderboardAllTime = firebase.database().ref('leaderboard/alltime').orderByValue();
	leaderboardAllTime.once('value').then(function(snapshot){
		console.log("All Time Leaders:")
		for (var i in snapshot.val()){
			console.log(i + ": "+snapshot.val()[i])
		}
	})
	var leaderboardToday = firebase.database().ref('leaderboard/'+dateStr).orderByValue();
	leaderboardToday.once('value').then(function(snapshot){
		console.log("Today's Leaders:")
		for (i in snapshot.val()){
			console.log(i+": "+snapshot.val()[i])
		}
	})
}
leaderboardPull();