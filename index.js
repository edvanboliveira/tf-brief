const chalk = require('chalk');

function categorize(plan) {
  const changes = plan.resource_changes || [];

  const grouped = {
    add: [],
    update: [],
    delete: [],
    replace: [],
  };

  for (const r of changes) {
    const actions = r.change.actions;
    const name = r.address;

    if (actions.includes('create') && actions.includes('delete')) {
      grouped.replace.push(name);
    } else if (actions.includes('create')) {
      grouped.add.push(name);
    } else if (actions.includes('update')) {
      grouped.update.push(name);
    } else if (actions.includes('delete')) {
      grouped.delete.push(name);
    }
  }

  return grouped;
}

function printTable(grouped) {
  console.log(`\n${chalk.bold("Overview of Planned Resource Changes:")}\n`);

  console.log('+-----------+---------------------------------------------+');
  console.log('| ACTION    | RESOURCE                                    |');
  console.log('+-----------+---------------------------------------------+');

  const printGroup = (label, items, colorFn) => {
    if (!items.length) return;

    items.forEach((item, i) => {
      const changeLabel = i === 0 ? label.padEnd(9) : ' '.repeat(9);

      console.log(
        `| ${colorFn(changeLabel)} | ${colorFn(item.padEnd(43))} |`
      );
    });

    console.log('+-----------+---------------------------------------------+');
  };

  printGroup('Add', grouped.add, chalk.green);
  printGroup('Update', grouped.update, chalk.yellow);
  printGroup('Delete', grouped.delete, chalk.red);
  printGroup('Replace', grouped.replace, chalk.magenta);
}

function summarizeCounts(grouped) {
  return {
    add: grouped.add.length,
    update: grouped.update.length,
    delete: grouped.delete.length,
    replace: grouped.replace.length,
  };
}

function printSummary(summary) {
  console.log(chalk.bold('\nTerraform Plan Summary\n'));

  console.log(chalk.green(`Add: ${summary.add}`));
  console.log(chalk.yellow(`Change: ${summary.update}`));
  console.log(chalk.red(`Delete: ${summary.delete}`));
  console.log(chalk.magenta(`Replace: ${summary.replace}`));
}

module.exports = {
  categorize,
  printTable,
  summarizeCounts,
  printSummary,
};