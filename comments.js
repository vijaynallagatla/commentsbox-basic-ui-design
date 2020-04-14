var comments = [
    {
        "name": "Vijay",
        "datetime": "Tue, 14 Apr 2020 06:11:53 GMT",
        "comment": "I'm the Boss!",
        "profile_pic_url": "https://storage.needpix.com/rsynced_images/profile-2092113_1280.png",
        "likes": 1,
        "replies": [
            {
                "name": "Vinay",
                "datetime": "Tue, 14 Apr 2020 06:12:53 GMT",
                "comment": "Yes we all know that!",
                "profile_pic_url": "https://storage.needpix.com/rsynced_images/profile-2092113_1280.png",
                "likes": 1,
                "replies": []
            }
        ]
    },
]

class CommentBox {
    constructor(comments, commentsContainer) {
        this.comments = comments
        this.commentsContainer = commentsContainer
        this.defaultImageUrl = "https://ih0.redbubble.net/image.1046392278.3346/flat,128x128,075,f-pad,128x128,f8f8f8.u2.jpg"
        this.postAllCards()
    }

    getCommentCard(profile_pic, name, datetime, comment) {
        var card = document.createElement("div");
        card.setAttribute("class", "card");
    
        var pic = document.createElement("img");
        (profile_pic == "") ? pic.setAttribute("src", this.defaultImageUrl) : pic.setAttribute("src", profile_pic);
        
        var commentDiv = document.createElement("div")
        commentDiv.setAttribute("class", "comment")
    
        var cname = document.createElement("h3")
        cname.innerHTML = name
    
        var cdatetime = document.createElement("span")
        cdatetime.style.fontSize = "small"
        cdatetime.innerText = datetime

        var cComment = document.createElement("p")
        cComment.innerHTML = comment
    
        card.append(pic)
        commentDiv.append(cname)
        commentDiv.append(cdatetime)
        commentDiv.append(cComment)
        card.append(commentDiv)
    
        return card
    }

    newComment(name, comment, avatar) {
        this.commentsContainer.append(this.getCommentCard(avatar, name, new Date().toUTCString(), comment))
    }

    postAllCards() {
        for (let comment of this.comments) {
            this.commentsContainer.append(this.getCommentCard(comment.profile_pic_url, comment.name, comment.datetime, comment.comment))
        }
    }
}

var commentsContainer = document.querySelector(".comments-container");
var commentBox = new CommentBox(comments, commentsContainer)

function newComment() {
    let name = document.getElementById("username").value;
    let message = document.getElementById("in-commentbox").value;
    var avatar = document.getElementById("avatar").value;

    if (validation()) {
        commentBox.newComment(name, message, avatar);
        resetCommentBox();
    } else {
        alert("Please enter all the fields!")
    }
    
}

function validation() {
    let name = document.getElementById("username").value;
    let message = document.getElementById("in-commentbox").value;

    if (name === "" || message == "") {
        return false
    }

    return true
}

function resetCommentBox() {
    document.getElementById("username").value = "";
    document.getElementById("in-commentbox").value = "";
}