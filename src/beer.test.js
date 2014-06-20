describe('beer', function() {
    it('adds ingredient', function() {
        // given
        var context = $('body');

        // when
        Ingredient.add(context,'paprika');

        // then
        expect(context.find('p').text()).toBe('paprika');
    });
});
