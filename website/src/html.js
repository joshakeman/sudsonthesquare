import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
        <script
          dangerouslySetInnerHTML={{
            __html: `
            document.body.classList.add('js-loading');
            window.onload = (event) => {
              document.body.classList.remove('js-loading');
            };
                `,
          }}
        />
        <script src="https://www.eventbrite.com/static/widgets/eb_widgets.js" />
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
            console.log("Loaded widget")
            var exampleCallback = function() {
              console.log('Order complete!');
          };
      
          window.EBWidgets.createWidget({
              widgetType: 'checkout',
              eventId: '168951395171',
              modal: true,
              modalTriggerElementId: 'eventbrite-widget-modal-trigger-168951395171',
              onOrderComplete: exampleCallback
          });
                `,
          }}
        />
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
