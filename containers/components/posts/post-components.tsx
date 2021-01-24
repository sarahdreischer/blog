import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/nightOwlLight";

export const PostComponents = {};

export const PostStylingComponents = {
  "p.inlineCode": (props) => (
    <code
      {...props}
      style={{
        backgroundColor: "lightgray",
        color: "black",
      }}
    />
  ),
  pre: ({ children }) => <CodeBlock children={children} />,
};

const CodeBlock = ({ children }) => {
  const className = children.props.className || "";
  const matches = className.match(/language-(?<lang>.*)/);
  const language =
    matches && matches.groups && matches.groups.lang ? matches.groups.lang : "";

  return (
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
  );
};
