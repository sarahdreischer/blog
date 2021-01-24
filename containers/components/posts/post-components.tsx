import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/nightOwlLight";
import styles from "./post-components.module.css";

export const PostComponents = {};

export const PostStylingComponents = {
  h1: ({ children }) => <Heading1 children={children} />,
  h2: ({ children }) => <Heading2 children={children} />,
  p: (props) => <Paragraph {...props} />,
  "p.inlineCode": (props) => <InlineCode {...props} />,
  pre: ({ children }) => <CodeBlock children={children} />,
};

const Heading1 = ({ children }) => {
  return (
    <h3 className="font-weight-bold heading-color pb-3 pt-2">{children}</h3>
  );
};

const Heading2 = ({ children }) => {
  return (
    <h4 className="font-weight-bold heading-color py-2 ml-4">{children}</h4>
  );
};

const Paragraph = (props) => {
  return (
    <p
      className={`text-justify ${styles.fontSize}`}
      style={{ lineHeight: 2.3 }}
      {...props}
    />
  );
};

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
