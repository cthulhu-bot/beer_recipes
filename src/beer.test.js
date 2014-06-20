describe('clicking submit', function() {
    it('adds an ingredient row', function() {
        // given
        var context = $('body');

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
        Ingredient.add(context,'paprika');

        // when
        Ingredient.remove();

        // then
        expect(context.find('p').text()).not.toBe('paprika');

    });
});

describe('adding value to the textfield and clicking submit', function() {
    it('adds a row with the ingredient text field', function() {
        // given

        // when

        // then

    });
});
