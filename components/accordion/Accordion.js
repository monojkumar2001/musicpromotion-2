import React, {
  Children,
  cloneElement,
  useEffect,
  useRef,
  useState,
} from "react";

const Accordion = ({ expanded = false, children }) => {
  const [open, setOpen] = useState(expanded);

  const ref = useRef(null);

  const toggle = () => {
    setOpen(!open);
  };

  useEffect(() => {
    let parent = ref.current;

    if (parent) {
      setHeaderHeight(parent.children[0].scrollHeight);
      setParentHeight(parent.scrollHeight);
    }
  }, [ref.current]);

  const modifiedChildren = Children.map(children, (child, ind) => {
    if (ind === 0) return cloneElement(child, { open, onClick: toggle });
    else return child;
  });

  return (
    <div className={`accordion ${open && "active"}`}>{modifiedChildren}</div>
  );
};

export default Accordion;
