const React = require('react');
const { renderToString } = require('react-dom/server');
const { RendererProvider } = require('react-fela');
const { createRenderer } = require('fela');
const { renderToSheetList } = require('fela-dom');

const FelaConfig = require('./fela.config');

const renderer = createRenderer(FelaConfig);

exports.replaceRenderer = ({
  bodyComponent,
  replaceBodyHTMLString,
  setHeadComponents,
}) => {
  const bodyHTML = renderToString(
    <RendererProvider renderer={renderer}>{bodyComponent}</RendererProvider>,
  );
  const sheetList = renderToSheetList(renderer);
  const elements = sheetList.map(({ type, css, media, support }) => (
    <style
      dangerouslySetInnerHTML={{ __html: css }}
      data-fela-type={type}
      data-fela-support={support}
      key={`${type}-${media}`}
      media={media}
    />
  ));
  replaceBodyHTMLString(bodyHTML);
  setHeadComponents(elements);
};
