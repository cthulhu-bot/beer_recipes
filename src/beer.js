Ingredient = {}

var ingredientHead = ('<div class="row" id="row"><p>').concat('<input type="button" id="removeRow" value="X">');
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

$('body').on('mouseenter', 'div.row', function() {
    $(this).css('background', 'yellow');
});
$('body').on('mouseout', 'div.row', function() {
    $(this).css('background', 'white');
});

$('body').on('keydown','#amount',function(e) {
    if (e.keyCode == 13) {
        var amount = $(this).closest('#amount').val();
        var amountText = ('<span class="amt">').concat(amount).concat('</span>');
        $(this).closest('#amount').replaceWith(amountText);
    }
});
