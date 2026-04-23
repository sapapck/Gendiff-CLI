import fs from 'fs';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import genDiff from '../src/index.js';
import getParsedData from '../src/parser.js';
import formatAst from '../src/formaters/index.js';
import plain from '../src/formaters/plain.js';
import stylish from '../src/formaters/staylish.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', 'tests', '__fixtures__', filename);

const readFile = (filePath) => fs.readFileSync(getFixturePath(filePath), 'utf-8');

const expectedStylish = readFile('expected-recurcive.txt');
const expectedFlat = readFile('expected-flat.txt');
const expectedPlain = readFile('expected-plain.txt');

const fileJson1 = getFixturePath('file1.json');
const fileJson2 = getFixturePath('file2.json');
const fileYml1 = getFixturePath('file1.yml');
const fileYml2 = getFixturePath('file2.yml');

const fileStylishJson1 = getFixturePath('before.json');
const fileStylishJson2 = getFixturePath('after.json');
const fileStylishYml1 = getFixturePath('before.yml');
const fileStylishYml2 = getFixturePath('after.yml');

test('testing gendiff', () => {
  expect(genDiff(fileJson1, fileJson2)).toEqual(expectedFlat);
  expect(genDiff(fileStylishJson1, fileStylishJson2)).toEqual(expectedStylish);

  expect(genDiff(fileYml1, fileYml2)).toEqual(expectedFlat);
  expect(genDiff(fileStylishYml1, fileStylishYml2)).toEqual(expectedStylish);

  expect(genDiff(fileStylishJson1, fileStylishJson2, 'plain')).toBe(expectedPlain);
  expect(genDiff(fileStylishYml1, fileStylishYml2, 'plain')).toBe(expectedPlain);
});

test('formats ast to json', () => {
  const ast = [
    {
      key: 'host',
      value: 'hexlet.io',
      type: 'added',
    },
  ];

  expect(formatAst(ast, 'json')).toBe(JSON.stringify(ast));
});

test('supports yaml extension in parser', () => {
  const parsed = getParsedData('foo: bar', 'yaml');
  expect(parsed).toEqual({ foo: 'bar' });
});

test('throws for unknown file format', () => {
  expect(() => getParsedData('a=b', 'ini')).toThrow('unknown format of file');
});

test('throws for unknown output format', () => {
  expect(() => formatAst([], 'xml')).toThrow('unknow type of formatxml ');
});

test('throws for unknown node type in plain formatter', () => {
  const invalidAst = [{ key: 'host', type: 'invalid' }];
  expect(() => plain(invalidAst)).toThrow('Unknown');
});

test('returns null for unknown node type in stylish formatter', () => {
  const invalidAst = [{ key: 'host', type: 'invalid' }];
  const result = stylish(invalidAst);
  expect(result.startsWith('{')).toBe(true);
  expect(result.endsWith('}')).toBe(true);
});
