$.ajax('/users', {
    accepts: 'application/json',
    success: function(data, status){
        var $body = $('body');
        data.forEach(function(user){
            var $elem = '<div '+ 'id=' + user._id + '>' + user.name + ' - ' + user.age + '<button type="button" class="deleteBtn"'+ 'data-id='+user._id + '>Delete' +'</button>' + '</div>';
            $body.append($elem);
        })
    },
});

$('#submitBtn').on('click', function(e){
    var name = $('input[name="name"]').val();
    var age = $('input[name="age"]').val();
    $.ajax('users/sendData',{
        method: "POST",
        contentType: 'application/json',
        data: JSON.stringify({
            name: name,
            age: age
        }),
        success: function(data, status){
            var $body = $('body');
            var $elem = '<div '+ 'id=' + data._id + '>' + data.name + ' - ' + data.age + '<button type="button" class="deleteBtn"' + 'data-id=' + data._id + '>Delete' +'</button>' + '</div>';
            $body.append($elem);
        }
    });
})
$(function(){
$('body').on('click','.deleteBtn', function(e){
    var _id = $(this).attr('data-id');
    $.ajax('users/delete/'+_id, {
        method: "DELETE",
        success: function(data){
            $('div#'+_id).remove();
        },
        error: function(data){
            alert("error");
        }
    });
})
});