#!/usr/bin/env node

const { execSync } = require('child_process');
const {
  categorize,
  printTable,
  summarizeCounts,
  printSummary,
} = require('../index');

const file = process.argv[2];

if (!file) {
  console.error('Usage: tf-brief <planfile>');
  process.exit(1);
}

try {
  const json = execSync(`terraform show -json ${file}`).toString();
  const plan = JSON.parse(json);

  const grouped = categorize(plan);
  const summary = summarizeCounts(grouped);

  printTable(grouped);
//results breakdown
  printSummary(summary);

} catch (err) {
  console.error('Erro:', err.message);
}