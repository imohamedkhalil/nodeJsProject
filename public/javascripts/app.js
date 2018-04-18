$.ajax('/users', {
    accepts: 'application/json',
    success: function(data, status){
        var $body = $('body');
        data.forEach(function(user){
            var $elem = '<div>' + user.name + ' - ' + user.age + '</div>';
            $body.append($elem);
        })
    },
});

$('#submitBtn').on('click', function(e){
    var name = $('input[name="name"]').val();
    var age = $('input[name="age"]').val();
    $.ajax('/sendData',{
        method: "POST",
        contentType: 'application/json',
        data: JSON.stringify({
            name: name,
            age: age
        }),
        success: function(data, status){
            var $body = $('body');
            var $elem = '<div>' + data.name + ' - ' + data.age + '</div>';
            $body.append($elem);
        }
    });
})