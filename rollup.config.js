import typescript from 'rollup-plugin-typescript2';
import commonjs from 'rollup-plugin-commonjs';
import depExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import resolve from 'rollup-plugin-node-resolve';
import url from 'rollup-plugin-url';
import svgr from '@svgr/rollup';

function createConfig(input, external, output, tsConfig) {
  return {
    input,
    external,
    output: [
      {
        file: output + '/index.js',
        format: 'cjs',
        exports: 'named',
        sourcemap: true
      },
      {
        file: output + '/index.es.js',
        format: 'es',
        exports: 'named',
        sourcemap: true
      }
    ],
    plugins: [
      depExternal(),
      postcss({
        modules: true
      }),
      url(),
      svgr(),
      resolve(),
      typescript(
        Object.assign(
          {
            rollupCommonJSResolveHack: true,
            clean: true
          },
          tsConfig
        )
      ),
      commonjs()
    ]
  };
}

const styledComponentsConfig = createConfig(
  'src/styled-components/index.ts',
  ['styled-components'],
  'dist',
  {
    tsconfigOverride: {
      include: ['src/styled-components']
    },
    include: ['src/styled-components/*'],
    exclude: ['src/emotion/*']
  }
);

const emotionConfig = createConfig(
  'src/emotion/index.ts',
  ['@emotion/core', '@emotion/styled'],
  'emotion',
  {
    tsconfigOverride: {
      include: ['src/emotion']
    },
    include: ['src/emotion/*'],
    exclude: ['src/styled-components/*']
  }
);

export default [emotionConfig, styledComponentsConfig];
