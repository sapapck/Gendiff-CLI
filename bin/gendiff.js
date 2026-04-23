#!/usr/bin/env node
import { readFileSync } from 'fs';
import { program } from 'commander';
import genDiff from '../src/index.js';

const packageJsonPath = new URL('../package.json', import.meta.url);
const { version } = JSON.parse(readFileSync(packageJsonPath));

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version(version)
  .option('-f, --format <type>', 'output format', 'stylish')
  .arguments('<filepath1> <filepath2>')
  .action((filepath1, filepath2) => {
    console.log(genDiff(filepath1, filepath2, program.opts().format));
  });
program.parse();
