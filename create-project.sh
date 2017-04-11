#!/bin/bash

mkdir $1 &&
cp -r src .babelrc .gitignore package.json rollup.config.js tsconfig.json $1
