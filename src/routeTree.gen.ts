/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as JsonJsonConversionsImport } from './routes/_json/json-conversions'

// Create Virtual Routes

const IndexLazyImport = createFileRoute('/')()
const WebSqlFormatterLazyImport = createFileRoute('/_web/sql-formatter')()
const WebJavascriptMinifierLazyImport = createFileRoute(
  '/_web/javascript-minifier',
)()
const WebJavascriptBeautifierLazyImport = createFileRoute(
  '/_web/javascript-beautifier',
)()
const WebHtmlViewerLazyImport = createFileRoute('/_web/html-viewer')()
const WebHtmlBeautifierLazyImport = createFileRoute('/_web/html-beautifier')()
const WebCssBeautifierLazyImport = createFileRoute('/_web/css-beautifier')()
const TextWordCounterLazyImport = createFileRoute('/_text/word-counter')()
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
const JsonJsonBeautifierLazyImport = createFileRoute('/_json/json-beautifier')()
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

const WebJavascriptBeautifierLazyRoute =
  WebJavascriptBeautifierLazyImport.update({
    id: '/_web/javascript-beautifier',
    path: '/javascript-beautifier',
    getParentRoute: () => rootRoute,
  } as any).lazy(() =>
    import('./routes/_web/javascript-beautifier.lazy').then((d) => d.Route),
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

const WebCssBeautifierLazyRoute = WebCssBeautifierLazyImport.update({
  id: '/_web/css-beautifier',
  path: '/css-beautifier',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/_web/css-beautifier.lazy').then((d) => d.Route),
)

const TextWordCounterLazyRoute = TextWordCounterLazyImport.update({
  id: '/_text/word-counter',
  path: '/word-counter',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/_text/word-counter.lazy').then((d) => d.Route),
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

const JsonJsonBeautifierLazyRoute = JsonJsonBeautifierLazyImport.update({
  id: '/_json/json-beautifier',
  path: '/json-beautifier',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/_json/json-beautifier.lazy').then((d) => d.Route),
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

const JsonJsonConversionsRoute = JsonJsonConversionsImport.update({
  id: '/_json/json-conversions',
  path: '/json-conversions',
  getParentRoute: () => rootRoute,
} as any)

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
    '/_json/json-conversions': {
      id: '/_json/json-conversions'
      path: '/json-conversions'
      fullPath: '/json-conversions'
      preLoaderRoute: typeof JsonJsonConversionsImport
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
    '/_json/json-beautifier': {
      id: '/_json/json-beautifier'
      path: '/json-beautifier'
      fullPath: '/json-beautifier'
      preLoaderRoute: typeof JsonJsonBeautifierLazyImport
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
    '/_text/word-counter': {
      id: '/_text/word-counter'
      path: '/word-counter'
      fullPath: '/word-counter'
      preLoaderRoute: typeof TextWordCounterLazyImport
      parentRoute: typeof rootRoute
    }
    '/_web/css-beautifier': {
      id: '/_web/css-beautifier'
      path: '/css-beautifier'
      fullPath: '/css-beautifier'
      preLoaderRoute: typeof WebCssBeautifierLazyImport
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
    '/_web/javascript-beautifier': {
      id: '/_web/javascript-beautifier'
      path: '/javascript-beautifier'
      fullPath: '/javascript-beautifier'
      preLoaderRoute: typeof WebJavascriptBeautifierLazyImport
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
  '/json-conversions': typeof JsonJsonConversionsRoute
  '/backslash-escape-unescape': typeof EncodingBackslashEscapeUnescapeLazyRoute
  '/base64-encoder-decoder': typeof EncodingBase64EncoderDecoderLazyRoute
  '/digital-certificate-decoder': typeof EncodingDigitalCertificateDecoderLazyRoute
  '/hex-to-unicode-converter': typeof EncodingHexToUnicodeConverterLazyRoute
  '/unicode-to-hex-converter': typeof EncodingUnicodeToHexConverterLazyRoute
  '/url-encoder-decoder': typeof EncodingUrlEncoderDecoderLazyRoute
  '/image-compressor': typeof ImageImageCompressorLazyRoute
  '/image-format-converter': typeof ImageImageFormatConverterLazyRoute
  '/image-resizer': typeof ImageImageResizerLazyRoute
  '/json-beautifier': typeof JsonJsonBeautifierLazyRoute
  '/list-sorter-randomizer': typeof TextListSorterRandomizerLazyRoute
  '/lorem-ipsum-generator': typeof TextLoremIpsumGeneratorLazyRoute
  '/random-string-generator': typeof TextRandomStringGeneratorLazyRoute
  '/text-case-converter': typeof TextTextCaseConverterLazyRoute
  '/text-diff-checker': typeof TextTextDiffCheckerLazyRoute
  '/word-counter': typeof TextWordCounterLazyRoute
  '/css-beautifier': typeof WebCssBeautifierLazyRoute
  '/html-beautifier': typeof WebHtmlBeautifierLazyRoute
  '/html-viewer': typeof WebHtmlViewerLazyRoute
  '/javascript-beautifier': typeof WebJavascriptBeautifierLazyRoute
  '/javascript-minifier': typeof WebJavascriptMinifierLazyRoute
  '/sql-formatter': typeof WebSqlFormatterLazyRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexLazyRoute
  '/json-conversions': typeof JsonJsonConversionsRoute
  '/backslash-escape-unescape': typeof EncodingBackslashEscapeUnescapeLazyRoute
  '/base64-encoder-decoder': typeof EncodingBase64EncoderDecoderLazyRoute
  '/digital-certificate-decoder': typeof EncodingDigitalCertificateDecoderLazyRoute
  '/hex-to-unicode-converter': typeof EncodingHexToUnicodeConverterLazyRoute
  '/unicode-to-hex-converter': typeof EncodingUnicodeToHexConverterLazyRoute
  '/url-encoder-decoder': typeof EncodingUrlEncoderDecoderLazyRoute
  '/image-compressor': typeof ImageImageCompressorLazyRoute
  '/image-format-converter': typeof ImageImageFormatConverterLazyRoute
  '/image-resizer': typeof ImageImageResizerLazyRoute
  '/json-beautifier': typeof JsonJsonBeautifierLazyRoute
  '/list-sorter-randomizer': typeof TextListSorterRandomizerLazyRoute
  '/lorem-ipsum-generator': typeof TextLoremIpsumGeneratorLazyRoute
  '/random-string-generator': typeof TextRandomStringGeneratorLazyRoute
  '/text-case-converter': typeof TextTextCaseConverterLazyRoute
  '/text-diff-checker': typeof TextTextDiffCheckerLazyRoute
  '/word-counter': typeof TextWordCounterLazyRoute
  '/css-beautifier': typeof WebCssBeautifierLazyRoute
  '/html-beautifier': typeof WebHtmlBeautifierLazyRoute
  '/html-viewer': typeof WebHtmlViewerLazyRoute
  '/javascript-beautifier': typeof WebJavascriptBeautifierLazyRoute
  '/javascript-minifier': typeof WebJavascriptMinifierLazyRoute
  '/sql-formatter': typeof WebSqlFormatterLazyRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexLazyRoute
  '/_json/json-conversions': typeof JsonJsonConversionsRoute
  '/_encoding/backslash-escape-unescape': typeof EncodingBackslashEscapeUnescapeLazyRoute
  '/_encoding/base64-encoder-decoder': typeof EncodingBase64EncoderDecoderLazyRoute
  '/_encoding/digital-certificate-decoder': typeof EncodingDigitalCertificateDecoderLazyRoute
  '/_encoding/hex-to-unicode-converter': typeof EncodingHexToUnicodeConverterLazyRoute
  '/_encoding/unicode-to-hex-converter': typeof EncodingUnicodeToHexConverterLazyRoute
  '/_encoding/url-encoder-decoder': typeof EncodingUrlEncoderDecoderLazyRoute
  '/_image/image-compressor': typeof ImageImageCompressorLazyRoute
  '/_image/image-format-converter': typeof ImageImageFormatConverterLazyRoute
  '/_image/image-resizer': typeof ImageImageResizerLazyRoute
  '/_json/json-beautifier': typeof JsonJsonBeautifierLazyRoute
  '/_text/list-sorter-randomizer': typeof TextListSorterRandomizerLazyRoute
  '/_text/lorem-ipsum-generator': typeof TextLoremIpsumGeneratorLazyRoute
  '/_text/random-string-generator': typeof TextRandomStringGeneratorLazyRoute
  '/_text/text-case-converter': typeof TextTextCaseConverterLazyRoute
  '/_text/text-diff-checker': typeof TextTextDiffCheckerLazyRoute
  '/_text/word-counter': typeof TextWordCounterLazyRoute
  '/_web/css-beautifier': typeof WebCssBeautifierLazyRoute
  '/_web/html-beautifier': typeof WebHtmlBeautifierLazyRoute
  '/_web/html-viewer': typeof WebHtmlViewerLazyRoute
  '/_web/javascript-beautifier': typeof WebJavascriptBeautifierLazyRoute
  '/_web/javascript-minifier': typeof WebJavascriptMinifierLazyRoute
  '/_web/sql-formatter': typeof WebSqlFormatterLazyRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/json-conversions'
    | '/backslash-escape-unescape'
    | '/base64-encoder-decoder'
    | '/digital-certificate-decoder'
    | '/hex-to-unicode-converter'
    | '/unicode-to-hex-converter'
    | '/url-encoder-decoder'
    | '/image-compressor'
    | '/image-format-converter'
    | '/image-resizer'
    | '/json-beautifier'
    | '/list-sorter-randomizer'
    | '/lorem-ipsum-generator'
    | '/random-string-generator'
    | '/text-case-converter'
    | '/text-diff-checker'
    | '/word-counter'
    | '/css-beautifier'
    | '/html-beautifier'
    | '/html-viewer'
    | '/javascript-beautifier'
    | '/javascript-minifier'
    | '/sql-formatter'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/json-conversions'
    | '/backslash-escape-unescape'
    | '/base64-encoder-decoder'
    | '/digital-certificate-decoder'
    | '/hex-to-unicode-converter'
    | '/unicode-to-hex-converter'
    | '/url-encoder-decoder'
    | '/image-compressor'
    | '/image-format-converter'
    | '/image-resizer'
    | '/json-beautifier'
    | '/list-sorter-randomizer'
    | '/lorem-ipsum-generator'
    | '/random-string-generator'
    | '/text-case-converter'
    | '/text-diff-checker'
    | '/word-counter'
    | '/css-beautifier'
    | '/html-beautifier'
    | '/html-viewer'
    | '/javascript-beautifier'
    | '/javascript-minifier'
    | '/sql-formatter'
  id:
    | '__root__'
    | '/'
    | '/_json/json-conversions'
    | '/_encoding/backslash-escape-unescape'
    | '/_encoding/base64-encoder-decoder'
    | '/_encoding/digital-certificate-decoder'
    | '/_encoding/hex-to-unicode-converter'
    | '/_encoding/unicode-to-hex-converter'
    | '/_encoding/url-encoder-decoder'
    | '/_image/image-compressor'
    | '/_image/image-format-converter'
    | '/_image/image-resizer'
    | '/_json/json-beautifier'
    | '/_text/list-sorter-randomizer'
    | '/_text/lorem-ipsum-generator'
    | '/_text/random-string-generator'
    | '/_text/text-case-converter'
    | '/_text/text-diff-checker'
    | '/_text/word-counter'
    | '/_web/css-beautifier'
    | '/_web/html-beautifier'
    | '/_web/html-viewer'
    | '/_web/javascript-beautifier'
    | '/_web/javascript-minifier'
    | '/_web/sql-formatter'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexLazyRoute: typeof IndexLazyRoute
  JsonJsonConversionsRoute: typeof JsonJsonConversionsRoute
  EncodingBackslashEscapeUnescapeLazyRoute: typeof EncodingBackslashEscapeUnescapeLazyRoute
  EncodingBase64EncoderDecoderLazyRoute: typeof EncodingBase64EncoderDecoderLazyRoute
  EncodingDigitalCertificateDecoderLazyRoute: typeof EncodingDigitalCertificateDecoderLazyRoute
  EncodingHexToUnicodeConverterLazyRoute: typeof EncodingHexToUnicodeConverterLazyRoute
  EncodingUnicodeToHexConverterLazyRoute: typeof EncodingUnicodeToHexConverterLazyRoute
  EncodingUrlEncoderDecoderLazyRoute: typeof EncodingUrlEncoderDecoderLazyRoute
  ImageImageCompressorLazyRoute: typeof ImageImageCompressorLazyRoute
  ImageImageFormatConverterLazyRoute: typeof ImageImageFormatConverterLazyRoute
  ImageImageResizerLazyRoute: typeof ImageImageResizerLazyRoute
  JsonJsonBeautifierLazyRoute: typeof JsonJsonBeautifierLazyRoute
  TextListSorterRandomizerLazyRoute: typeof TextListSorterRandomizerLazyRoute
  TextLoremIpsumGeneratorLazyRoute: typeof TextLoremIpsumGeneratorLazyRoute
  TextRandomStringGeneratorLazyRoute: typeof TextRandomStringGeneratorLazyRoute
  TextTextCaseConverterLazyRoute: typeof TextTextCaseConverterLazyRoute
  TextTextDiffCheckerLazyRoute: typeof TextTextDiffCheckerLazyRoute
  TextWordCounterLazyRoute: typeof TextWordCounterLazyRoute
  WebCssBeautifierLazyRoute: typeof WebCssBeautifierLazyRoute
  WebHtmlBeautifierLazyRoute: typeof WebHtmlBeautifierLazyRoute
  WebHtmlViewerLazyRoute: typeof WebHtmlViewerLazyRoute
  WebJavascriptBeautifierLazyRoute: typeof WebJavascriptBeautifierLazyRoute
  WebJavascriptMinifierLazyRoute: typeof WebJavascriptMinifierLazyRoute
  WebSqlFormatterLazyRoute: typeof WebSqlFormatterLazyRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexLazyRoute: IndexLazyRoute,
  JsonJsonConversionsRoute: JsonJsonConversionsRoute,
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
  JsonJsonBeautifierLazyRoute: JsonJsonBeautifierLazyRoute,
  TextListSorterRandomizerLazyRoute: TextListSorterRandomizerLazyRoute,
  TextLoremIpsumGeneratorLazyRoute: TextLoremIpsumGeneratorLazyRoute,
  TextRandomStringGeneratorLazyRoute: TextRandomStringGeneratorLazyRoute,
  TextTextCaseConverterLazyRoute: TextTextCaseConverterLazyRoute,
  TextTextDiffCheckerLazyRoute: TextTextDiffCheckerLazyRoute,
  TextWordCounterLazyRoute: TextWordCounterLazyRoute,
  WebCssBeautifierLazyRoute: WebCssBeautifierLazyRoute,
  WebHtmlBeautifierLazyRoute: WebHtmlBeautifierLazyRoute,
  WebHtmlViewerLazyRoute: WebHtmlViewerLazyRoute,
  WebJavascriptBeautifierLazyRoute: WebJavascriptBeautifierLazyRoute,
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
        "/_json/json-conversions",
        "/_encoding/backslash-escape-unescape",
        "/_encoding/base64-encoder-decoder",
        "/_encoding/digital-certificate-decoder",
        "/_encoding/hex-to-unicode-converter",
        "/_encoding/unicode-to-hex-converter",
        "/_encoding/url-encoder-decoder",
        "/_image/image-compressor",
        "/_image/image-format-converter",
        "/_image/image-resizer",
        "/_json/json-beautifier",
        "/_text/list-sorter-randomizer",
        "/_text/lorem-ipsum-generator",
        "/_text/random-string-generator",
        "/_text/text-case-converter",
        "/_text/text-diff-checker",
        "/_text/word-counter",
        "/_web/css-beautifier",
        "/_web/html-beautifier",
        "/_web/html-viewer",
        "/_web/javascript-beautifier",
        "/_web/javascript-minifier",
        "/_web/sql-formatter"
      ]
    },
    "/": {
      "filePath": "index.lazy.tsx"
    },
    "/_json/json-conversions": {
      "filePath": "_json/json-conversions.tsx"
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
    "/_json/json-beautifier": {
      "filePath": "_json/json-beautifier.lazy.tsx"
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
    "/_text/word-counter": {
      "filePath": "_text/word-counter.lazy.tsx"
    },
    "/_web/css-beautifier": {
      "filePath": "_web/css-beautifier.lazy.tsx"
    },
    "/_web/html-beautifier": {
      "filePath": "_web/html-beautifier.lazy.tsx"
    },
    "/_web/html-viewer": {
      "filePath": "_web/html-viewer.lazy.tsx"
    },
    "/_web/javascript-beautifier": {
      "filePath": "_web/javascript-beautifier.lazy.tsx"
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
