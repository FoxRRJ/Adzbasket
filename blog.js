function render(data) {

    var html = ` <ul class="list-comments">
    <li><div class="comment-avatar" ><img src="img/blog/user1.png" alt=""></div><div class="comment-details"> <h4 id="author"class="comment-author">  ${data.name}</h4> <span id="commnt-date"> ${data.time}</span> <p id="cmmnt-data"> ${data.body}</div></li></ul>`;

    $("#container").append(html);

}


$(document).ready(function () {

    var content = [];

    if (!localStorage.contentdata) {
        localStorage.contentdata = [];

    } else {
        content = JSON.parse(localStorage.contentdata);
    }

    for (var i = 0; i < content.length; i++) {

        render(content[i]);
    }

    $("#comment-btn").click(function () {
        var addobj = {
            "name": $("#inputName").val(),
            "time": $("#comment-date").val(),
            "body": $("#textMessage").val()
        };
        content.push(addobj);
        localStorage.contentdata = JSON.stringify(content);
        render(addobj);
        $("#inputName").val();
        $("#comment-date").val('dd/mm/yyyy');
        $("#textMessage").val();


    });

})

