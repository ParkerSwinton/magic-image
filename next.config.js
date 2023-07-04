/** @type {import('next').NextConfig} */
const repo = 'magic-image'
const assetPrefix = `/${repo}/`
const basePath = `/${repo}`

module.exports = {
  output: 'export',
  assetPrefix: assetPrefix,
  basePath: basePath,
}
