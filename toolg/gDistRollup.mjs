import rollupFiles from '../tool/rollupFiles.mjs'
//import getFiles from '../tool/getFiles.mjs'


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

