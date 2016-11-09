//pull information from website
//jquery starts with $
$.getJSON('https://fathomless-gorge-57039.herokuapp.com/api/all').then(function(data) {
    data.posts.forEach(function(recall) {
        //pull avatar from website
        if (recall.user.file == true) {
            recall.user.file = "https://fathomless-gorge-57039.herokuapp.com"
        }
        else {
            recall.user.file = "https://cdn.pixabay.com/photo/2016/03/31/14/47/avatar-1292817_960_720.png"
        }
        //user avatar,
        //the body of the chirp,
        //the username
        //the time and date the chirp
        console.log(recall)

        $('.tweet').append('<tr><td>' + recall.user.file + '</td><td>' + recall.chirp + '</td><td>' + recall.user + '</td><td>' + recall.created_at + '</td>')
    })
})
