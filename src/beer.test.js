describe('clicking submit', function() {
    it('adds an ingredient row', function() {
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
