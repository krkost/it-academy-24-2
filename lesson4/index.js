const fs = require('fs-extra');

fs.mkdirp('folder1');

fs.createFileSync('folder1/file1.txt');

fs.mkdirp('folder2');

fs.moveSync('folder1/file1.txt', 'folder2/file1.txt');

fs.mkdirp('folder3');

fs.copySync('folder2/file1.txt', 'folder3/file1.txt');

fs.removeSync('folder1/file1.txt');
fs.removeSync('folder2/file1.txt');
fs.removeSync('folder3/file1.txt');

fs.removeSync('folder1');
fs.removeSync('folder2');
fs.removeSync('folder3');