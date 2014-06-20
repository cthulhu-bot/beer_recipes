describe('clicking submit', function() {
    it('adds a row', function() {
        // given
        var context = $('body');
        $('#ingredients').nextAll().remove();

        // when
        Ingredient.add(context,'');

        // then
        expect(context.find('p'));
    });
});

describe('clicking submit with an ingredient value', function() {
    it('adds a row with ingredient text', function() {
        // given
        var context = $('body');
        // empty the ingredient dom elements
        $('#ingredients').nextAll().remove();

        // when
        Ingredient.add(context,'paprika');

        // then
        expect(context.find('p').text()).toBe('paprika');
    });
});

describe('clicking the remove button', function() {
    it('removes the ingredient row', function() {
        // given
        var context = $('body');
        $('#ingredients').nextAll().remove();
        Ingredient.add(context,'paprika');

        // when
        Ingredient.remove();

        // then
        expect(context.find('p').text()).not.toBe('paprika');

    });
});

describe('adding an amount to an ingredient and hitting enter', function() {
    it('saves the amount and converts it to a text field', function() {
    });
});

describe('mousing over the ingredient', function() {
    it('highlights the row', function() {
    });
});

describe('double clicking the ingredient row', function() {
    it('converts the amount text into an input field', function() {
    });

    it('retains the original text value', function() {
    });
});
