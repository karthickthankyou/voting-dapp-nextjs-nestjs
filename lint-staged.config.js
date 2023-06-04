module.exports = {
  '*.{ts,tsx}': (filenames) => ['yarn format:write', 'yarn validate'],
}
