import NLink from "next/link";

const checkLink = (link) => {
  try {
    const check = new URL(link);
    if (check.protocol.startsWith("http")) {
      return true;
    }
  } catch (error) {
    if (error) return false;
  }
};

const Link = ({ path, children, ...rest }) => {
  if (checkLink(path)) {
    return (
      <a href={path} target="_blank" rel="noreferrer" {...rest}>
        {children}
      </a>
    );
  }
  return (
    <NLink href={path} {...rest}>
      {children}
    </NLink>
  );
};

export default Link;
