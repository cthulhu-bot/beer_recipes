Ingredient = {}

var ingredientHead = ('<div class="row"><p>').concat('<input type="button" id="remove" value="X">');

Ingredient.add = function(context, data) {
    $(ingredientHead.concat(data).concat('<p></div>')).appendTo(context);
}

$('#new').click(function() {
    Ingredient.add($('body'),$('#ingredient').val());
});

$('body').on('click', 'div.row', function(e) {
    $(this).closest('div.row').remove();
    e.preventDefault();
});
