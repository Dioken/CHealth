const {deterministicPartitionKey} = require("./dpk");

console.log(deterministicPartitionKey());

console.log(deterministicPartitionKey({}));
console.log(deterministicPartitionKey({partitionKey: 10}));
console.log(deterministicPartitionKey({partitionKey: "ok"}));