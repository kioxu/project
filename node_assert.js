const assert = require("assert");

const { message } = new assert.AssertionError({
  actual: 1,
  expected: 1,
  operator: "strictEqual"
});

try {
  assert.strictEqual(1, 2);
} catch (error) {
  assert(error instanceof assert.AssertionError);
  assert.strictEqual(error.message.message);
  assert.strictEqual(error.name, "AssertionError");
  assert.strictEqual(error.actual, 1);
  assert.strictEqual(error.expected, 2);
  assert.strictEqual(error.code, "ERR_ASSERTION");
  assert.strictEqual(error.operator, "strictEqual");
  assert.strictEqual(error.generateMessage, true);
}
