/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require('fs');
const path = require('path');

const apiKey = process.argv[2];
if (!apiKey) {
  console.error('Error: No API key provided.');
  console.error('Usage: node replace-api-key.js <YOUR_API_KEY>');
  process.exit(1);
}

const filePath = path.join(__dirname, 'network/axiosConfigsTMDB.ts');

fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    process.exit(1);
  }

  const result = data.replace(
    /const TMDB_API_KEY\s*=\s*['"][^'"]*['"];?/g,
    `const TMDB_API_KEY = '${apiKey}';`
  );

  fs.writeFile(filePath, result, 'utf8', (err) => {
    if (err) {
      console.error('Error writing file:', err);
      process.exit(1);
    } else {
      console.log('API key replaced successfully.');
    }
  });
});
