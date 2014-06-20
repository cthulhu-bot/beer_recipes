Ingredient = {}

var ingredientHead = ('<div class="row"><p>').concat('<input type="button" id="removeRow" value="X">');
var ingredientAmount = ('<input type="text" class="amt" id="amount">');

Ingredient.add = function(context, data) {
    $(ingredientHead.concat(data).concat(ingredientAmount).concat('<p></div>')).appendTo(context);
}

Ingredient.remove = function(context) {
    $(context).closest('div.row').remove();
}

$('#new').click(function() {
    Ingredient.add($('body'),$('#ingredient').val());
});

$('body').on('click', '#removeRow', function() {
    Ingredient.remove(this);
});
