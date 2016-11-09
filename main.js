//pull information from website
//jquery starts with $
$.getJSON('https://fathomless-gorge-57039.herokuapp.com/api/all').then(function(data) {
    data.posts.forEach(function(recall) {
        //Pull avatar from website
        if (recall.user.file == null) {
            recall.user.file = "https://cdn.pixabay.com/photo/2016/03/31/14/47/avatar-1292817_960_720.png"
        }
        else {
            recall.user.file = "https://fathomless-gorge-57039.herokuapp.com" + recall.user.file
        }
        //user avatar,
        //the body of the chirp,
        //the username
        //the time and date the chirp
        console.log(recall)
        $('.tweet').append('<tr><td>' + '<img src="' +  recall.user.file + '" alt="' + recall.user.name + '" height="50" width="50">' + '</td><td>' + '<h2>' + recall.user.name + '<h2>' + '</td><td>' + '</td><td>' +  recall.chirp + '</td><td>' + recall.created_at + '</td></tr>')
    })
})
