Ingredient = {}

Ingredient.add = function(context, data) {
    $('<p>'+data+'</p>').appendTo(context).text(data);
}

$('#new').click(function() {
    Ingredient.add($('body'),$('#ingredient').val());
});
