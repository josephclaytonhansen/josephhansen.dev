#!/bin/bash

# Minify CSS files
postcss dist/assets/*.css -u cssnano -d dist/assets

# Minify JS files
for file in dist/assets/*.js; do
  uglifyjs "$file" -o "${file%.js}.min.js"
  mv "${file%.js}.min.js" "$file"
done