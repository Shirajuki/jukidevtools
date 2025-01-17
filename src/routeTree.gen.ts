/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'

// Create Virtual Routes

const IndexLazyImport = createFileRoute('/')()
const WebSqlFormatterLazyImport = createFileRoute('/_web/sql-formatter')()
const WebJavascriptMinifierLazyImport = createFileRoute(
  '/_web/javascript-minifier',
)()
const WebJavascriptFormatterLazyImport = createFileRoute(
  '/_web/javascript-formatter',
)()
const WebHtmlViewerLazyImport = createFileRoute('/_web/html-viewer')()
const WebHtmlBeautifierLazyImport = createFileRoute('/_web/html-beautifier')()
const WebCssMinifierLazyImport = createFileRoute('/_web/css-minifier')()
const WebCssFormatterLazyImport = createFileRoute('/_web/css-formatter')()
const UtilitiesRegexTesterLazyImport = createFileRoute(
  '/_utilities/regex-tester',
)()
const TextWordCounterLazyImport = createFileRoute('/_text/word-counter')()
const TextUuidGeneratorLazyImport = createFileRoute('/_text/uuid-generator')()
const TextTextDiffCheckerLazyImport = createFileRoute(
  '/_text/text-diff-checker',
)()
const TextTextCaseConverterLazyImport = createFileRoute(
  '/_text/text-case-converter',
)()
const TextRandomStringGeneratorLazyImport = createFileRoute(
  '/_text/random-string-generator',
)()
const TextLoremIpsumGeneratorLazyImport = createFileRoute(
  '/_text/lorem-ipsum-generator',
)()
const TextListSorterRandomizerLazyImport = createFileRoute(
  '/_text/list-sorter-randomizer',
)()
const JsonYamlToJsonConverterLazyImport = createFileRoute(
  '/_json/yaml-to-json-converter',
)()
const JsonXmlToJsonConverterLazyImport = createFileRoute(
  '/_json/xml-to-json-converter',
)()
const JsonJsonToYamlConverterLazyImport = createFileRoute(
  '/_json/json-to-yaml-converter',
)()
const JsonJsonToXmlConverterLazyImport = createFileRoute(
  '/_json/json-to-xml-converter',
)()
const JsonJsonMinifierLazyImport = createFileRoute('/_json/json-minifier')()
const JsonJsonFormatterLazyImport = createFileRoute('/_json/json-formatter')()
const ImageImageResizerLazyImport = createFileRoute('/_image/image-resizer')()
const ImageImageFormatConverterLazyImport = createFileRoute(
  '/_image/image-format-converter',
)()
const ImageImageCompressorLazyImport = createFileRoute(
  '/_image/image-compressor',
)()
const EncodingUrlEncoderDecoderLazyImport = createFileRoute(
  '/_encoding/url-encoder-decoder',
)()
const EncodingUnicodeToHexConverterLazyImport = createFileRoute(
  '/_encoding/unicode-to-hex-converter',
)()
const EncodingHexToUnicodeConverterLazyImport = createFileRoute(
  '/_encoding/hex-to-unicode-converter',
)()
const EncodingDigitalCertificateDecoderLazyImport = createFileRoute(
  '/_encoding/digital-certificate-decoder',
)()
const EncodingBase64EncoderDecoderLazyImport = createFileRoute(
  '/_encoding/base64-encoder-decoder',
)()
const EncodingBackslashEscapeUnescapeLazyImport = createFileRoute(
  '/_encoding/backslash-escape-unescape',
)()

// Create/Update Routes

const IndexLazyRoute = IndexLazyImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

const WebSqlFormatterLazyRoute = WebSqlFormatterLazyImport.update({
  id: '/_web/sql-formatter',
  path: '/sql-formatter',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/_web/sql-formatter.lazy').then((d) => d.Route),
)

const WebJavascriptMinifierLazyRoute = WebJavascriptMinifierLazyImport.update({
  id: '/_web/javascript-minifier',
  path: '/javascript-minifier',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/_web/javascript-minifier.lazy').then((d) => d.Route),
)

const WebJavascriptFormatterLazyRoute = WebJavascriptFormatterLazyImport.update(
  {
    id: '/_web/javascript-formatter',
    path: '/javascript-formatter',
    getParentRoute: () => rootRoute,
  } as any,
).lazy(() =>
  import('./routes/_web/javascript-formatter.lazy').then((d) => d.Route),
)

const WebHtmlViewerLazyRoute = WebHtmlViewerLazyImport.update({
  id: '/_web/html-viewer',
  path: '/html-viewer',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/_web/html-viewer.lazy').then((d) => d.Route),
)

const WebHtmlBeautifierLazyRoute = WebHtmlBeautifierLazyImport.update({
  id: '/_web/html-beautifier',
  path: '/html-beautifier',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/_web/html-beautifier.lazy').then((d) => d.Route),
)

const WebCssMinifierLazyRoute = WebCssMinifierLazyImport.update({
  id: '/_web/css-minifier',
  path: '/css-minifier',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/_web/css-minifier.lazy').then((d) => d.Route),
)

const WebCssFormatterLazyRoute = WebCssFormatterLazyImport.update({
  id: '/_web/css-formatter',
  path: '/css-formatter',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/_web/css-formatter.lazy').then((d) => d.Route),
)

const UtilitiesRegexTesterLazyRoute = UtilitiesRegexTesterLazyImport.update({
  id: '/_utilities/regex-tester',
  path: '/regex-tester',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/_utilities/regex-tester.lazy').then((d) => d.Route),
)

const TextWordCounterLazyRoute = TextWordCounterLazyImport.update({
  id: '/_text/word-counter',
  path: '/word-counter',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/_text/word-counter.lazy').then((d) => d.Route),
)

const TextUuidGeneratorLazyRoute = TextUuidGeneratorLazyImport.update({
  id: '/_text/uuid-generator',
  path: '/uuid-generator',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/_text/uuid-generator.lazy').then((d) => d.Route),
)

const TextTextDiffCheckerLazyRoute = TextTextDiffCheckerLazyImport.update({
  id: '/_text/text-diff-checker',
  path: '/text-diff-checker',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/_text/text-diff-checker.lazy').then((d) => d.Route),
)

const TextTextCaseConverterLazyRoute = TextTextCaseConverterLazyImport.update({
  id: '/_text/text-case-converter',
  path: '/text-case-converter',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/_text/text-case-converter.lazy').then((d) => d.Route),
)

const TextRandomStringGeneratorLazyRoute =
  TextRandomStringGeneratorLazyImport.update({
    id: '/_text/random-string-generator',
    path: '/random-string-generator',
    getParentRoute: () => rootRoute,
  } as any).lazy(() =>
    import('./routes/_text/random-string-generator.lazy').then((d) => d.Route),
  )

const TextLoremIpsumGeneratorLazyRoute =
  TextLoremIpsumGeneratorLazyImport.update({
    id: '/_text/lorem-ipsum-generator',
    path: '/lorem-ipsum-generator',
    getParentRoute: () => rootRoute,
  } as any).lazy(() =>
    import('./routes/_text/lorem-ipsum-generator.lazy').then((d) => d.Route),
  )

const TextListSorterRandomizerLazyRoute =
  TextListSorterRandomizerLazyImport.update({
    id: '/_text/list-sorter-randomizer',
    path: '/list-sorter-randomizer',
    getParentRoute: () => rootRoute,
  } as any).lazy(() =>
    import('./routes/_text/list-sorter-randomizer.lazy').then((d) => d.Route),
  )

const JsonYamlToJsonConverterLazyRoute =
  JsonYamlToJsonConverterLazyImport.update({
    id: '/_json/yaml-to-json-converter',
    path: '/yaml-to-json-converter',
    getParentRoute: () => rootRoute,
  } as any).lazy(() =>
    import('./routes/_json/yaml-to-json-converter.lazy').then((d) => d.Route),
  )

const JsonXmlToJsonConverterLazyRoute = JsonXmlToJsonConverterLazyImport.update(
  {
    id: '/_json/xml-to-json-converter',
    path: '/xml-to-json-converter',
    getParentRoute: () => rootRoute,
  } as any,
).lazy(() =>
  import('./routes/_json/xml-to-json-converter.lazy').then((d) => d.Route),
)

const JsonJsonToYamlConverterLazyRoute =
  JsonJsonToYamlConverterLazyImport.update({
    id: '/_json/json-to-yaml-converter',
    path: '/json-to-yaml-converter',
    getParentRoute: () => rootRoute,
  } as any).lazy(() =>
    import('./routes/_json/json-to-yaml-converter.lazy').then((d) => d.Route),
  )

const JsonJsonToXmlConverterLazyRoute = JsonJsonToXmlConverterLazyImport.update(
  {
    id: '/_json/json-to-xml-converter',
    path: '/json-to-xml-converter',
    getParentRoute: () => rootRoute,
  } as any,
).lazy(() =>
  import('./routes/_json/json-to-xml-converter.lazy').then((d) => d.Route),
)

const JsonJsonMinifierLazyRoute = JsonJsonMinifierLazyImport.update({
  id: '/_json/json-minifier',
  path: '/json-minifier',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/_json/json-minifier.lazy').then((d) => d.Route),
)

const JsonJsonFormatterLazyRoute = JsonJsonFormatterLazyImport.update({
  id: '/_json/json-formatter',
  path: '/json-formatter',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/_json/json-formatter.lazy').then((d) => d.Route),
)

const ImageImageResizerLazyRoute = ImageImageResizerLazyImport.update({
  id: '/_image/image-resizer',
  path: '/image-resizer',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/_image/image-resizer.lazy').then((d) => d.Route),
)

const ImageImageFormatConverterLazyRoute =
  ImageImageFormatConverterLazyImport.update({
    id: '/_image/image-format-converter',
    path: '/image-format-converter',
    getParentRoute: () => rootRoute,
  } as any).lazy(() =>
    import('./routes/_image/image-format-converter.lazy').then((d) => d.Route),
  )

const ImageImageCompressorLazyRoute = ImageImageCompressorLazyImport.update({
  id: '/_image/image-compressor',
  path: '/image-compressor',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/_image/image-compressor.lazy').then((d) => d.Route),
)

const EncodingUrlEncoderDecoderLazyRoute =
  EncodingUrlEncoderDecoderLazyImport.update({
    id: '/_encoding/url-encoder-decoder',
    path: '/url-encoder-decoder',
    getParentRoute: () => rootRoute,
  } as any).lazy(() =>
    import('./routes/_encoding/url-encoder-decoder.lazy').then((d) => d.Route),
  )

const EncodingUnicodeToHexConverterLazyRoute =
  EncodingUnicodeToHexConverterLazyImport.update({
    id: '/_encoding/unicode-to-hex-converter',
    path: '/unicode-to-hex-converter',
    getParentRoute: () => rootRoute,
  } as any).lazy(() =>
    import('./routes/_encoding/unicode-to-hex-converter.lazy').then(
      (d) => d.Route,
    ),
  )

const EncodingHexToUnicodeConverterLazyRoute =
  EncodingHexToUnicodeConverterLazyImport.update({
    id: '/_encoding/hex-to-unicode-converter',
    path: '/hex-to-unicode-converter',
    getParentRoute: () => rootRoute,
  } as any).lazy(() =>
    import('./routes/_encoding/hex-to-unicode-converter.lazy').then(
      (d) => d.Route,
    ),
  )

const EncodingDigitalCertificateDecoderLazyRoute =
  EncodingDigitalCertificateDecoderLazyImport.update({
    id: '/_encoding/digital-certificate-decoder',
    path: '/digital-certificate-decoder',
    getParentRoute: () => rootRoute,
  } as any).lazy(() =>
    import('./routes/_encoding/digital-certificate-decoder.lazy').then(
      (d) => d.Route,
    ),
  )

const EncodingBase64EncoderDecoderLazyRoute =
  EncodingBase64EncoderDecoderLazyImport.update({
    id: '/_encoding/base64-encoder-decoder',
    path: '/base64-encoder-decoder',
    getParentRoute: () => rootRoute,
  } as any).lazy(() =>
    import('./routes/_encoding/base64-encoder-decoder.lazy').then(
      (d) => d.Route,
    ),
  )

const EncodingBackslashEscapeUnescapeLazyRoute =
  EncodingBackslashEscapeUnescapeLazyImport.update({
    id: '/_encoding/backslash-escape-unescape',
    path: '/backslash-escape-unescape',
    getParentRoute: () => rootRoute,
  } as any).lazy(() =>
    import('./routes/_encoding/backslash-escape-unescape.lazy').then(
      (d) => d.Route,
    ),
  )

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/_encoding/backslash-escape-unescape': {
      id: '/_encoding/backslash-escape-unescape'
      path: '/backslash-escape-unescape'
      fullPath: '/backslash-escape-unescape'
      preLoaderRoute: typeof EncodingBackslashEscapeUnescapeLazyImport
      parentRoute: typeof rootRoute
    }
    '/_encoding/base64-encoder-decoder': {
      id: '/_encoding/base64-encoder-decoder'
      path: '/base64-encoder-decoder'
      fullPath: '/base64-encoder-decoder'
      preLoaderRoute: typeof EncodingBase64EncoderDecoderLazyImport
      parentRoute: typeof rootRoute
    }
    '/_encoding/digital-certificate-decoder': {
      id: '/_encoding/digital-certificate-decoder'
      path: '/digital-certificate-decoder'
      fullPath: '/digital-certificate-decoder'
      preLoaderRoute: typeof EncodingDigitalCertificateDecoderLazyImport
      parentRoute: typeof rootRoute
    }
    '/_encoding/hex-to-unicode-converter': {
      id: '/_encoding/hex-to-unicode-converter'
      path: '/hex-to-unicode-converter'
      fullPath: '/hex-to-unicode-converter'
      preLoaderRoute: typeof EncodingHexToUnicodeConverterLazyImport
      parentRoute: typeof rootRoute
    }
    '/_encoding/unicode-to-hex-converter': {
      id: '/_encoding/unicode-to-hex-converter'
      path: '/unicode-to-hex-converter'
      fullPath: '/unicode-to-hex-converter'
      preLoaderRoute: typeof EncodingUnicodeToHexConverterLazyImport
      parentRoute: typeof rootRoute
    }
    '/_encoding/url-encoder-decoder': {
      id: '/_encoding/url-encoder-decoder'
      path: '/url-encoder-decoder'
      fullPath: '/url-encoder-decoder'
      preLoaderRoute: typeof EncodingUrlEncoderDecoderLazyImport
      parentRoute: typeof rootRoute
    }
    '/_image/image-compressor': {
      id: '/_image/image-compressor'
      path: '/image-compressor'
      fullPath: '/image-compressor'
      preLoaderRoute: typeof ImageImageCompressorLazyImport
      parentRoute: typeof rootRoute
    }
    '/_image/image-format-converter': {
      id: '/_image/image-format-converter'
      path: '/image-format-converter'
      fullPath: '/image-format-converter'
      preLoaderRoute: typeof ImageImageFormatConverterLazyImport
      parentRoute: typeof rootRoute
    }
    '/_image/image-resizer': {
      id: '/_image/image-resizer'
      path: '/image-resizer'
      fullPath: '/image-resizer'
      preLoaderRoute: typeof ImageImageResizerLazyImport
      parentRoute: typeof rootRoute
    }
    '/_json/json-formatter': {
      id: '/_json/json-formatter'
      path: '/json-formatter'
      fullPath: '/json-formatter'
      preLoaderRoute: typeof JsonJsonFormatterLazyImport
      parentRoute: typeof rootRoute
    }
    '/_json/json-minifier': {
      id: '/_json/json-minifier'
      path: '/json-minifier'
      fullPath: '/json-minifier'
      preLoaderRoute: typeof JsonJsonMinifierLazyImport
      parentRoute: typeof rootRoute
    }
    '/_json/json-to-xml-converter': {
      id: '/_json/json-to-xml-converter'
      path: '/json-to-xml-converter'
      fullPath: '/json-to-xml-converter'
      preLoaderRoute: typeof JsonJsonToXmlConverterLazyImport
      parentRoute: typeof rootRoute
    }
    '/_json/json-to-yaml-converter': {
      id: '/_json/json-to-yaml-converter'
      path: '/json-to-yaml-converter'
      fullPath: '/json-to-yaml-converter'
      preLoaderRoute: typeof JsonJsonToYamlConverterLazyImport
      parentRoute: typeof rootRoute
    }
    '/_json/xml-to-json-converter': {
      id: '/_json/xml-to-json-converter'
      path: '/xml-to-json-converter'
      fullPath: '/xml-to-json-converter'
      preLoaderRoute: typeof JsonXmlToJsonConverterLazyImport
      parentRoute: typeof rootRoute
    }
    '/_json/yaml-to-json-converter': {
      id: '/_json/yaml-to-json-converter'
      path: '/yaml-to-json-converter'
      fullPath: '/yaml-to-json-converter'
      preLoaderRoute: typeof JsonYamlToJsonConverterLazyImport
      parentRoute: typeof rootRoute
    }
    '/_text/list-sorter-randomizer': {
      id: '/_text/list-sorter-randomizer'
      path: '/list-sorter-randomizer'
      fullPath: '/list-sorter-randomizer'
      preLoaderRoute: typeof TextListSorterRandomizerLazyImport
      parentRoute: typeof rootRoute
    }
    '/_text/lorem-ipsum-generator': {
      id: '/_text/lorem-ipsum-generator'
      path: '/lorem-ipsum-generator'
      fullPath: '/lorem-ipsum-generator'
      preLoaderRoute: typeof TextLoremIpsumGeneratorLazyImport
      parentRoute: typeof rootRoute
    }
    '/_text/random-string-generator': {
      id: '/_text/random-string-generator'
      path: '/random-string-generator'
      fullPath: '/random-string-generator'
      preLoaderRoute: typeof TextRandomStringGeneratorLazyImport
      parentRoute: typeof rootRoute
    }
    '/_text/text-case-converter': {
      id: '/_text/text-case-converter'
      path: '/text-case-converter'
      fullPath: '/text-case-converter'
      preLoaderRoute: typeof TextTextCaseConverterLazyImport
      parentRoute: typeof rootRoute
    }
    '/_text/text-diff-checker': {
      id: '/_text/text-diff-checker'
      path: '/text-diff-checker'
      fullPath: '/text-diff-checker'
      preLoaderRoute: typeof TextTextDiffCheckerLazyImport
      parentRoute: typeof rootRoute
    }
    '/_text/uuid-generator': {
      id: '/_text/uuid-generator'
      path: '/uuid-generator'
      fullPath: '/uuid-generator'
      preLoaderRoute: typeof TextUuidGeneratorLazyImport
      parentRoute: typeof rootRoute
    }
    '/_text/word-counter': {
      id: '/_text/word-counter'
      path: '/word-counter'
      fullPath: '/word-counter'
      preLoaderRoute: typeof TextWordCounterLazyImport
      parentRoute: typeof rootRoute
    }
    '/_utilities/regex-tester': {
      id: '/_utilities/regex-tester'
      path: '/regex-tester'
      fullPath: '/regex-tester'
      preLoaderRoute: typeof UtilitiesRegexTesterLazyImport
      parentRoute: typeof rootRoute
    }
    '/_web/css-formatter': {
      id: '/_web/css-formatter'
      path: '/css-formatter'
      fullPath: '/css-formatter'
      preLoaderRoute: typeof WebCssFormatterLazyImport
      parentRoute: typeof rootRoute
    }
    '/_web/css-minifier': {
      id: '/_web/css-minifier'
      path: '/css-minifier'
      fullPath: '/css-minifier'
      preLoaderRoute: typeof WebCssMinifierLazyImport
      parentRoute: typeof rootRoute
    }
    '/_web/html-beautifier': {
      id: '/_web/html-beautifier'
      path: '/html-beautifier'
      fullPath: '/html-beautifier'
      preLoaderRoute: typeof WebHtmlBeautifierLazyImport
      parentRoute: typeof rootRoute
    }
    '/_web/html-viewer': {
      id: '/_web/html-viewer'
      path: '/html-viewer'
      fullPath: '/html-viewer'
      preLoaderRoute: typeof WebHtmlViewerLazyImport
      parentRoute: typeof rootRoute
    }
    '/_web/javascript-formatter': {
      id: '/_web/javascript-formatter'
      path: '/javascript-formatter'
      fullPath: '/javascript-formatter'
      preLoaderRoute: typeof WebJavascriptFormatterLazyImport
      parentRoute: typeof rootRoute
    }
    '/_web/javascript-minifier': {
      id: '/_web/javascript-minifier'
      path: '/javascript-minifier'
      fullPath: '/javascript-minifier'
      preLoaderRoute: typeof WebJavascriptMinifierLazyImport
      parentRoute: typeof rootRoute
    }
    '/_web/sql-formatter': {
      id: '/_web/sql-formatter'
      path: '/sql-formatter'
      fullPath: '/sql-formatter'
      preLoaderRoute: typeof WebSqlFormatterLazyImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexLazyRoute
  '/backslash-escape-unescape': typeof EncodingBackslashEscapeUnescapeLazyRoute
  '/base64-encoder-decoder': typeof EncodingBase64EncoderDecoderLazyRoute
  '/digital-certificate-decoder': typeof EncodingDigitalCertificateDecoderLazyRoute
  '/hex-to-unicode-converter': typeof EncodingHexToUnicodeConverterLazyRoute
  '/unicode-to-hex-converter': typeof EncodingUnicodeToHexConverterLazyRoute
  '/url-encoder-decoder': typeof EncodingUrlEncoderDecoderLazyRoute
  '/image-compressor': typeof ImageImageCompressorLazyRoute
  '/image-format-converter': typeof ImageImageFormatConverterLazyRoute
  '/image-resizer': typeof ImageImageResizerLazyRoute
  '/json-formatter': typeof JsonJsonFormatterLazyRoute
  '/json-minifier': typeof JsonJsonMinifierLazyRoute
  '/json-to-xml-converter': typeof JsonJsonToXmlConverterLazyRoute
  '/json-to-yaml-converter': typeof JsonJsonToYamlConverterLazyRoute
  '/xml-to-json-converter': typeof JsonXmlToJsonConverterLazyRoute
  '/yaml-to-json-converter': typeof JsonYamlToJsonConverterLazyRoute
  '/list-sorter-randomizer': typeof TextListSorterRandomizerLazyRoute
  '/lorem-ipsum-generator': typeof TextLoremIpsumGeneratorLazyRoute
  '/random-string-generator': typeof TextRandomStringGeneratorLazyRoute
  '/text-case-converter': typeof TextTextCaseConverterLazyRoute
  '/text-diff-checker': typeof TextTextDiffCheckerLazyRoute
  '/uuid-generator': typeof TextUuidGeneratorLazyRoute
  '/word-counter': typeof TextWordCounterLazyRoute
  '/regex-tester': typeof UtilitiesRegexTesterLazyRoute
  '/css-formatter': typeof WebCssFormatterLazyRoute
  '/css-minifier': typeof WebCssMinifierLazyRoute
  '/html-beautifier': typeof WebHtmlBeautifierLazyRoute
  '/html-viewer': typeof WebHtmlViewerLazyRoute
  '/javascript-formatter': typeof WebJavascriptFormatterLazyRoute
  '/javascript-minifier': typeof WebJavascriptMinifierLazyRoute
  '/sql-formatter': typeof WebSqlFormatterLazyRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexLazyRoute
  '/backslash-escape-unescape': typeof EncodingBackslashEscapeUnescapeLazyRoute
  '/base64-encoder-decoder': typeof EncodingBase64EncoderDecoderLazyRoute
  '/digital-certificate-decoder': typeof EncodingDigitalCertificateDecoderLazyRoute
  '/hex-to-unicode-converter': typeof EncodingHexToUnicodeConverterLazyRoute
  '/unicode-to-hex-converter': typeof EncodingUnicodeToHexConverterLazyRoute
  '/url-encoder-decoder': typeof EncodingUrlEncoderDecoderLazyRoute
  '/image-compressor': typeof ImageImageCompressorLazyRoute
  '/image-format-converter': typeof ImageImageFormatConverterLazyRoute
  '/image-resizer': typeof ImageImageResizerLazyRoute
  '/json-formatter': typeof JsonJsonFormatterLazyRoute
  '/json-minifier': typeof JsonJsonMinifierLazyRoute
  '/json-to-xml-converter': typeof JsonJsonToXmlConverterLazyRoute
  '/json-to-yaml-converter': typeof JsonJsonToYamlConverterLazyRoute
  '/xml-to-json-converter': typeof JsonXmlToJsonConverterLazyRoute
  '/yaml-to-json-converter': typeof JsonYamlToJsonConverterLazyRoute
  '/list-sorter-randomizer': typeof TextListSorterRandomizerLazyRoute
  '/lorem-ipsum-generator': typeof TextLoremIpsumGeneratorLazyRoute
  '/random-string-generator': typeof TextRandomStringGeneratorLazyRoute
  '/text-case-converter': typeof TextTextCaseConverterLazyRoute
  '/text-diff-checker': typeof TextTextDiffCheckerLazyRoute
  '/uuid-generator': typeof TextUuidGeneratorLazyRoute
  '/word-counter': typeof TextWordCounterLazyRoute
  '/regex-tester': typeof UtilitiesRegexTesterLazyRoute
  '/css-formatter': typeof WebCssFormatterLazyRoute
  '/css-minifier': typeof WebCssMinifierLazyRoute
  '/html-beautifier': typeof WebHtmlBeautifierLazyRoute
  '/html-viewer': typeof WebHtmlViewerLazyRoute
  '/javascript-formatter': typeof WebJavascriptFormatterLazyRoute
  '/javascript-minifier': typeof WebJavascriptMinifierLazyRoute
  '/sql-formatter': typeof WebSqlFormatterLazyRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexLazyRoute
  '/_encoding/backslash-escape-unescape': typeof EncodingBackslashEscapeUnescapeLazyRoute
  '/_encoding/base64-encoder-decoder': typeof EncodingBase64EncoderDecoderLazyRoute
  '/_encoding/digital-certificate-decoder': typeof EncodingDigitalCertificateDecoderLazyRoute
  '/_encoding/hex-to-unicode-converter': typeof EncodingHexToUnicodeConverterLazyRoute
  '/_encoding/unicode-to-hex-converter': typeof EncodingUnicodeToHexConverterLazyRoute
  '/_encoding/url-encoder-decoder': typeof EncodingUrlEncoderDecoderLazyRoute
  '/_image/image-compressor': typeof ImageImageCompressorLazyRoute
  '/_image/image-format-converter': typeof ImageImageFormatConverterLazyRoute
  '/_image/image-resizer': typeof ImageImageResizerLazyRoute
  '/_json/json-formatter': typeof JsonJsonFormatterLazyRoute
  '/_json/json-minifier': typeof JsonJsonMinifierLazyRoute
  '/_json/json-to-xml-converter': typeof JsonJsonToXmlConverterLazyRoute
  '/_json/json-to-yaml-converter': typeof JsonJsonToYamlConverterLazyRoute
  '/_json/xml-to-json-converter': typeof JsonXmlToJsonConverterLazyRoute
  '/_json/yaml-to-json-converter': typeof JsonYamlToJsonConverterLazyRoute
  '/_text/list-sorter-randomizer': typeof TextListSorterRandomizerLazyRoute
  '/_text/lorem-ipsum-generator': typeof TextLoremIpsumGeneratorLazyRoute
  '/_text/random-string-generator': typeof TextRandomStringGeneratorLazyRoute
  '/_text/text-case-converter': typeof TextTextCaseConverterLazyRoute
  '/_text/text-diff-checker': typeof TextTextDiffCheckerLazyRoute
  '/_text/uuid-generator': typeof TextUuidGeneratorLazyRoute
  '/_text/word-counter': typeof TextWordCounterLazyRoute
  '/_utilities/regex-tester': typeof UtilitiesRegexTesterLazyRoute
  '/_web/css-formatter': typeof WebCssFormatterLazyRoute
  '/_web/css-minifier': typeof WebCssMinifierLazyRoute
  '/_web/html-beautifier': typeof WebHtmlBeautifierLazyRoute
  '/_web/html-viewer': typeof WebHtmlViewerLazyRoute
  '/_web/javascript-formatter': typeof WebJavascriptFormatterLazyRoute
  '/_web/javascript-minifier': typeof WebJavascriptMinifierLazyRoute
  '/_web/sql-formatter': typeof WebSqlFormatterLazyRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/backslash-escape-unescape'
    | '/base64-encoder-decoder'
    | '/digital-certificate-decoder'
    | '/hex-to-unicode-converter'
    | '/unicode-to-hex-converter'
    | '/url-encoder-decoder'
    | '/image-compressor'
    | '/image-format-converter'
    | '/image-resizer'
    | '/json-formatter'
    | '/json-minifier'
    | '/json-to-xml-converter'
    | '/json-to-yaml-converter'
    | '/xml-to-json-converter'
    | '/yaml-to-json-converter'
    | '/list-sorter-randomizer'
    | '/lorem-ipsum-generator'
    | '/random-string-generator'
    | '/text-case-converter'
    | '/text-diff-checker'
    | '/uuid-generator'
    | '/word-counter'
    | '/regex-tester'
    | '/css-formatter'
    | '/css-minifier'
    | '/html-beautifier'
    | '/html-viewer'
    | '/javascript-formatter'
    | '/javascript-minifier'
    | '/sql-formatter'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/backslash-escape-unescape'
    | '/base64-encoder-decoder'
    | '/digital-certificate-decoder'
    | '/hex-to-unicode-converter'
    | '/unicode-to-hex-converter'
    | '/url-encoder-decoder'
    | '/image-compressor'
    | '/image-format-converter'
    | '/image-resizer'
    | '/json-formatter'
    | '/json-minifier'
    | '/json-to-xml-converter'
    | '/json-to-yaml-converter'
    | '/xml-to-json-converter'
    | '/yaml-to-json-converter'
    | '/list-sorter-randomizer'
    | '/lorem-ipsum-generator'
    | '/random-string-generator'
    | '/text-case-converter'
    | '/text-diff-checker'
    | '/uuid-generator'
    | '/word-counter'
    | '/regex-tester'
    | '/css-formatter'
    | '/css-minifier'
    | '/html-beautifier'
    | '/html-viewer'
    | '/javascript-formatter'
    | '/javascript-minifier'
    | '/sql-formatter'
  id:
    | '__root__'
    | '/'
    | '/_encoding/backslash-escape-unescape'
    | '/_encoding/base64-encoder-decoder'
    | '/_encoding/digital-certificate-decoder'
    | '/_encoding/hex-to-unicode-converter'
    | '/_encoding/unicode-to-hex-converter'
    | '/_encoding/url-encoder-decoder'
    | '/_image/image-compressor'
    | '/_image/image-format-converter'
    | '/_image/image-resizer'
    | '/_json/json-formatter'
    | '/_json/json-minifier'
    | '/_json/json-to-xml-converter'
    | '/_json/json-to-yaml-converter'
    | '/_json/xml-to-json-converter'
    | '/_json/yaml-to-json-converter'
    | '/_text/list-sorter-randomizer'
    | '/_text/lorem-ipsum-generator'
    | '/_text/random-string-generator'
    | '/_text/text-case-converter'
    | '/_text/text-diff-checker'
    | '/_text/uuid-generator'
    | '/_text/word-counter'
    | '/_utilities/regex-tester'
    | '/_web/css-formatter'
    | '/_web/css-minifier'
    | '/_web/html-beautifier'
    | '/_web/html-viewer'
    | '/_web/javascript-formatter'
    | '/_web/javascript-minifier'
    | '/_web/sql-formatter'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexLazyRoute: typeof IndexLazyRoute
  EncodingBackslashEscapeUnescapeLazyRoute: typeof EncodingBackslashEscapeUnescapeLazyRoute
  EncodingBase64EncoderDecoderLazyRoute: typeof EncodingBase64EncoderDecoderLazyRoute
  EncodingDigitalCertificateDecoderLazyRoute: typeof EncodingDigitalCertificateDecoderLazyRoute
  EncodingHexToUnicodeConverterLazyRoute: typeof EncodingHexToUnicodeConverterLazyRoute
  EncodingUnicodeToHexConverterLazyRoute: typeof EncodingUnicodeToHexConverterLazyRoute
  EncodingUrlEncoderDecoderLazyRoute: typeof EncodingUrlEncoderDecoderLazyRoute
  ImageImageCompressorLazyRoute: typeof ImageImageCompressorLazyRoute
  ImageImageFormatConverterLazyRoute: typeof ImageImageFormatConverterLazyRoute
  ImageImageResizerLazyRoute: typeof ImageImageResizerLazyRoute
  JsonJsonFormatterLazyRoute: typeof JsonJsonFormatterLazyRoute
  JsonJsonMinifierLazyRoute: typeof JsonJsonMinifierLazyRoute
  JsonJsonToXmlConverterLazyRoute: typeof JsonJsonToXmlConverterLazyRoute
  JsonJsonToYamlConverterLazyRoute: typeof JsonJsonToYamlConverterLazyRoute
  JsonXmlToJsonConverterLazyRoute: typeof JsonXmlToJsonConverterLazyRoute
  JsonYamlToJsonConverterLazyRoute: typeof JsonYamlToJsonConverterLazyRoute
  TextListSorterRandomizerLazyRoute: typeof TextListSorterRandomizerLazyRoute
  TextLoremIpsumGeneratorLazyRoute: typeof TextLoremIpsumGeneratorLazyRoute
  TextRandomStringGeneratorLazyRoute: typeof TextRandomStringGeneratorLazyRoute
  TextTextCaseConverterLazyRoute: typeof TextTextCaseConverterLazyRoute
  TextTextDiffCheckerLazyRoute: typeof TextTextDiffCheckerLazyRoute
  TextUuidGeneratorLazyRoute: typeof TextUuidGeneratorLazyRoute
  TextWordCounterLazyRoute: typeof TextWordCounterLazyRoute
  UtilitiesRegexTesterLazyRoute: typeof UtilitiesRegexTesterLazyRoute
  WebCssFormatterLazyRoute: typeof WebCssFormatterLazyRoute
  WebCssMinifierLazyRoute: typeof WebCssMinifierLazyRoute
  WebHtmlBeautifierLazyRoute: typeof WebHtmlBeautifierLazyRoute
  WebHtmlViewerLazyRoute: typeof WebHtmlViewerLazyRoute
  WebJavascriptFormatterLazyRoute: typeof WebJavascriptFormatterLazyRoute
  WebJavascriptMinifierLazyRoute: typeof WebJavascriptMinifierLazyRoute
  WebSqlFormatterLazyRoute: typeof WebSqlFormatterLazyRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexLazyRoute: IndexLazyRoute,
  EncodingBackslashEscapeUnescapeLazyRoute:
    EncodingBackslashEscapeUnescapeLazyRoute,
  EncodingBase64EncoderDecoderLazyRoute: EncodingBase64EncoderDecoderLazyRoute,
  EncodingDigitalCertificateDecoderLazyRoute:
    EncodingDigitalCertificateDecoderLazyRoute,
  EncodingHexToUnicodeConverterLazyRoute:
    EncodingHexToUnicodeConverterLazyRoute,
  EncodingUnicodeToHexConverterLazyRoute:
    EncodingUnicodeToHexConverterLazyRoute,
  EncodingUrlEncoderDecoderLazyRoute: EncodingUrlEncoderDecoderLazyRoute,
  ImageImageCompressorLazyRoute: ImageImageCompressorLazyRoute,
  ImageImageFormatConverterLazyRoute: ImageImageFormatConverterLazyRoute,
  ImageImageResizerLazyRoute: ImageImageResizerLazyRoute,
  JsonJsonFormatterLazyRoute: JsonJsonFormatterLazyRoute,
  JsonJsonMinifierLazyRoute: JsonJsonMinifierLazyRoute,
  JsonJsonToXmlConverterLazyRoute: JsonJsonToXmlConverterLazyRoute,
  JsonJsonToYamlConverterLazyRoute: JsonJsonToYamlConverterLazyRoute,
  JsonXmlToJsonConverterLazyRoute: JsonXmlToJsonConverterLazyRoute,
  JsonYamlToJsonConverterLazyRoute: JsonYamlToJsonConverterLazyRoute,
  TextListSorterRandomizerLazyRoute: TextListSorterRandomizerLazyRoute,
  TextLoremIpsumGeneratorLazyRoute: TextLoremIpsumGeneratorLazyRoute,
  TextRandomStringGeneratorLazyRoute: TextRandomStringGeneratorLazyRoute,
  TextTextCaseConverterLazyRoute: TextTextCaseConverterLazyRoute,
  TextTextDiffCheckerLazyRoute: TextTextDiffCheckerLazyRoute,
  TextUuidGeneratorLazyRoute: TextUuidGeneratorLazyRoute,
  TextWordCounterLazyRoute: TextWordCounterLazyRoute,
  UtilitiesRegexTesterLazyRoute: UtilitiesRegexTesterLazyRoute,
  WebCssFormatterLazyRoute: WebCssFormatterLazyRoute,
  WebCssMinifierLazyRoute: WebCssMinifierLazyRoute,
  WebHtmlBeautifierLazyRoute: WebHtmlBeautifierLazyRoute,
  WebHtmlViewerLazyRoute: WebHtmlViewerLazyRoute,
  WebJavascriptFormatterLazyRoute: WebJavascriptFormatterLazyRoute,
  WebJavascriptMinifierLazyRoute: WebJavascriptMinifierLazyRoute,
  WebSqlFormatterLazyRoute: WebSqlFormatterLazyRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/_encoding/backslash-escape-unescape",
        "/_encoding/base64-encoder-decoder",
        "/_encoding/digital-certificate-decoder",
        "/_encoding/hex-to-unicode-converter",
        "/_encoding/unicode-to-hex-converter",
        "/_encoding/url-encoder-decoder",
        "/_image/image-compressor",
        "/_image/image-format-converter",
        "/_image/image-resizer",
        "/_json/json-formatter",
        "/_json/json-minifier",
        "/_json/json-to-xml-converter",
        "/_json/json-to-yaml-converter",
        "/_json/xml-to-json-converter",
        "/_json/yaml-to-json-converter",
        "/_text/list-sorter-randomizer",
        "/_text/lorem-ipsum-generator",
        "/_text/random-string-generator",
        "/_text/text-case-converter",
        "/_text/text-diff-checker",
        "/_text/uuid-generator",
        "/_text/word-counter",
        "/_utilities/regex-tester",
        "/_web/css-formatter",
        "/_web/css-minifier",
        "/_web/html-beautifier",
        "/_web/html-viewer",
        "/_web/javascript-formatter",
        "/_web/javascript-minifier",
        "/_web/sql-formatter"
      ]
    },
    "/": {
      "filePath": "index.lazy.tsx"
    },
    "/_encoding/backslash-escape-unescape": {
      "filePath": "_encoding/backslash-escape-unescape.lazy.tsx"
    },
    "/_encoding/base64-encoder-decoder": {
      "filePath": "_encoding/base64-encoder-decoder.lazy.tsx"
    },
    "/_encoding/digital-certificate-decoder": {
      "filePath": "_encoding/digital-certificate-decoder.lazy.tsx"
    },
    "/_encoding/hex-to-unicode-converter": {
      "filePath": "_encoding/hex-to-unicode-converter.lazy.tsx"
    },
    "/_encoding/unicode-to-hex-converter": {
      "filePath": "_encoding/unicode-to-hex-converter.lazy.tsx"
    },
    "/_encoding/url-encoder-decoder": {
      "filePath": "_encoding/url-encoder-decoder.lazy.tsx"
    },
    "/_image/image-compressor": {
      "filePath": "_image/image-compressor.lazy.tsx"
    },
    "/_image/image-format-converter": {
      "filePath": "_image/image-format-converter.lazy.tsx"
    },
    "/_image/image-resizer": {
      "filePath": "_image/image-resizer.lazy.tsx"
    },
    "/_json/json-formatter": {
      "filePath": "_json/json-formatter.lazy.tsx"
    },
    "/_json/json-minifier": {
      "filePath": "_json/json-minifier.lazy.tsx"
    },
    "/_json/json-to-xml-converter": {
      "filePath": "_json/json-to-xml-converter.lazy.tsx"
    },
    "/_json/json-to-yaml-converter": {
      "filePath": "_json/json-to-yaml-converter.lazy.tsx"
    },
    "/_json/xml-to-json-converter": {
      "filePath": "_json/xml-to-json-converter.lazy.tsx"
    },
    "/_json/yaml-to-json-converter": {
      "filePath": "_json/yaml-to-json-converter.lazy.tsx"
    },
    "/_text/list-sorter-randomizer": {
      "filePath": "_text/list-sorter-randomizer.lazy.tsx"
    },
    "/_text/lorem-ipsum-generator": {
      "filePath": "_text/lorem-ipsum-generator.lazy.tsx"
    },
    "/_text/random-string-generator": {
      "filePath": "_text/random-string-generator.lazy.tsx"
    },
    "/_text/text-case-converter": {
      "filePath": "_text/text-case-converter.lazy.tsx"
    },
    "/_text/text-diff-checker": {
      "filePath": "_text/text-diff-checker.lazy.tsx"
    },
    "/_text/uuid-generator": {
      "filePath": "_text/uuid-generator.lazy.tsx"
    },
    "/_text/word-counter": {
      "filePath": "_text/word-counter.lazy.tsx"
    },
    "/_utilities/regex-tester": {
      "filePath": "_utilities/regex-tester.lazy.tsx"
    },
    "/_web/css-formatter": {
      "filePath": "_web/css-formatter.lazy.tsx"
    },
    "/_web/css-minifier": {
      "filePath": "_web/css-minifier.lazy.tsx"
    },
    "/_web/html-beautifier": {
      "filePath": "_web/html-beautifier.lazy.tsx"
    },
    "/_web/html-viewer": {
      "filePath": "_web/html-viewer.lazy.tsx"
    },
    "/_web/javascript-formatter": {
      "filePath": "_web/javascript-formatter.lazy.tsx"
    },
    "/_web/javascript-minifier": {
      "filePath": "_web/javascript-minifier.lazy.tsx"
    },
    "/_web/sql-formatter": {
      "filePath": "_web/sql-formatter.lazy.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
