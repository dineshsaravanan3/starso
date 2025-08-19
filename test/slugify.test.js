const slugify = require('../src/string/slugify');

test('slugify converts a string to a URL slug', () => {
  expect(slugify("My Awesome Article!")).toBe("my-awesome-article");
});
