Ingredient = {}
Amount = {}

var ingredientHead = ('<div class="row" id="row"><p>').concat('<input type="button" id="removeRow" value="X">');
var ingredientAmount = ('<input type="text" class="amt" id="amount">');

Ingredient.add = function(context, data) {
    $(ingredientHead.concat(data).concat(ingredientAmount).concat('<p></div>')).appendTo(context);
}

Ingredient.remove = function(context) {
    $(context).closest('div.row').remove();
}

Amount.add = function(context, e) {
    if (e.keyCode == 13) {
        var amount = $(context).closest('#amount').val();
        var amountText = ('<span class="amt">').concat(amount).concat('</span>');
        $(context).closest('#amount').replaceWith(amountText);
    }
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
    Amount.add(this, e);
});
