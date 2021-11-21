
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/andrew/Desktop/repos/scad-comotion-2022/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/andrew/Desktop/repos/scad-comotion-2022/src/pages/404.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/andrew/Desktop/repos/scad-comotion-2022/src/pages/index.js"))
}

