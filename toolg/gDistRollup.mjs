import rollupFiles from 'w-package-tools/src/rollupFiles.mjs'
//import getFiles from 'w-package-tools/src/getFiles.mjs'


let fdSrc = './src'
let fdTar = './dist'


rollupFiles({
    fns: 'WJsonviewTree.mjs',
    fdSrc,
    fdTar,
    nameDistType: 'kebabCase',
    globals: {
    },
    external: [
    ],
})

