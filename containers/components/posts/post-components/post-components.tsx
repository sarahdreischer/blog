import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/nightOwlLight";
import styles from "./post-components.module.css";
import Image from "next/image";

export const WrappedComponents = { Image };

export const StylingComponents = {
  h1: ({ children }) => <Heading1 children={children} />,
  h2: ({ children }) => <Heading2 children={children} />,
  h3: ({ children }) => <Heading3 children={children} />,
  a: (props) => <Link {...props} />,
  p: (props) => <Paragraph {...props} />,
  "p.inlineCode": (props) => <InlineCode {...props} />,
  pre: ({ children }) => <CodeBlock children={children} />,
  strong: (props) => <Strong {...props} />,
  personal: (props) => <Personal {...props} />,
  exampleHeading: (props) => <ExampleHeading {...props} />,
  example: (props) => <Example {...props} />,
};

const Heading1 = ({ children }) => {
  return (
    <h1 className="h3 font-weight-bold heading-color pb-3 pt-2">{children}</h1>
  );
};

const Heading2 = ({ children }) => {
  return <h2 className="h4 font-weight-bold heading-color py-2">{children}</h2>;
};

const Heading3 = ({ children }) => {
  return (
    <h2 className="h5 font-weight-bold heading-color py-2 ml-4">{children}</h2>
  );
};

const Paragraph = (props) => {
  return (
    <p
      className={`text-left ${styles.fontSize}`}
      style={{ lineHeight: 2.3 }}
      {...props}
    />
  );
};

const Strong = (props) => <strong {...props} style={{ color: "#093F48" }} />;

const Link = (props) => (
  <strong>
    <a
      {...props}
      style={{
        color: "#00A8D1",
        textDecoration: "underline",
        textUnderlineOffset: 2,
      }}
      target="_blank"
    />
  </strong>
);

const Personal = (props) => {
  return (
    <p
      className={`text-justify ${styles.fontSize}`}
      style={{ lineHeight: 1.9 }}
      {...props}
    />
  );
};

const ExampleHeading = (props) => (
  <p
    {...props}
    className="py-4"
    style={{ fontWeight: "bolder", fontSize: 18, lineHeight: 0 }}
  />
);

const Example = (props) => (
  <div
    {...props}
    className="pb-4"
    style={{ color: "#28566d", fontSize: 18, fontWeight: "bold" }}
  />
);

const InlineCode = (props) => {
  return (
    <code
      {...props}
      style={{
        backgroundColor: "#ececec",
        color: "#323232",
      }}
    />
  );
};

const CodeBlock = ({ children }) => {
  const className = children.props.className || "";
  const matches = className.match(/language-(?<lang>.*)/);
  const language =
    matches && matches.groups && matches.groups.lang ? matches.groups.lang : "";

  return (
    <div className="mx-4">
      <Highlight
        {...defaultProps}
        code={children.props.children.trim()}
        language={language}
        theme={theme}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={className} style={style}>
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </div>
  );
};
