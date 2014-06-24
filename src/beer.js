Ingredient = {}
Amount = {}
Save = {}

var ingredientHead = ('<div class="row" id="row"><p>').concat('<input type="button" id="removeRow" value="X">');
var ingredientAmount = ('<input type="text" class="amt" id="amount">');

// Dynamically construct ingredient divs
Ingredient.add = function(context, data) {
    $(ingredientHead.concat(data).concat(ingredientAmount).concat('<p></div>')).appendTo(context);
}
Ingredient.remove = function(context) {
    $(context).closest('div.row').remove();
}

/*
 *  When entering the ingredient amounts hit 'enter' to save the
 *  entered amount as a text field.  Double clicking on the amount div
 *  will convert it back to an input field.
 */
Amount.add = function(context, amount) {
    var amountText = ('<span class="amt" id="amount">').concat(amount).concat('</span>');
    $(context).closest('#amount').replaceWith(amountText);
}
Amount.remove = function(context) {
    var amt = $($(context).children()[0]).children()[1];
    if ($(amt).is("span")) {
        var amount = $(amt).text();
        var amountInput = '<input type="text" class="amt" id="amount" value="' + amount + '">';
        $(amt).replaceWith(amountInput);
    }
}

// Generate pseudo random numbers based off of id
Save.RoundFunction = function(input) {
    return ((1369 * input + 150889) % 714025) / 714025.0;
}
Save.PermuteId = function(id) {
    var l1=(id >> 16) & 65535;
    var r1=id & 65535;
    var l2, r2;
    for (var i = 0; i < 3; i++)
    {
        l2 = r1;
        r2 = l1 ^ (Save.RoundFunction(r1) * 16383);
        l1 = l2;
        r1 = r2;
    }
    return ((r1 << 16) + l1);
}
Save.GenerateCode = function(id) {
    return Save.PermuteId(id);
}

// Working on save functionality
$('#save').click(function() {
    var requirejs = require('./lib/r.js');
    requirejs.config({
        nodeRequire: require
    });
    var mongoose = requirejs(['mongoose']);
    mongoose.connect('mongodb://localhost/test');
    var db = mongoose.connection;
    db.once('open',function() {
        alert('mongo!');
    });
});

// Event handlers
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
$('body').on('dblclick', 'div.row', function() {
    Amount.remove(this);
});
$('body').on('keydown','#amount',function(e) {
    if (e.keyCode == 13) {
        var amount = $(this).closest('#amount').val();
        Amount.add(this, amount);
    }
});
