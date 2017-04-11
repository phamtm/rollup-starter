#!/bin/bash

mkdir -p $1 &&
cp -r src .babelrc .gitignore package.json rollup.config.js $1
