describe('String to pascal case', function() {
  it('should return a pascal cased string', function() {
    chai.assert.equal(toPascalCase('foo bar'), 'FooBar');
    chai.assert.equal(toPascalCase('Foo Bar'), 'FooBar');
    chai.assert.equal(toPascalCase('fooBar'), 'FooBar');
    chai.assert.equal(toPascalCase('FooBar'), 'FooBar');
    chai.assert.equal(toPascalCase('--foo-bar--'), 'FooBar');
    chai.assert.equal(toPascalCase('__FOO_BAR__'), 'FooBar');
    chai.assert.equal(toPascalCase('!--foo-¿?-bar--121-**%'), 'FooBar121');
  });
});
