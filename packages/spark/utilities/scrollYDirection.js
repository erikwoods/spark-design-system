let scrollPosition = 0;
const scrollYDirection = () => {
  let direction;
  if (window) {
    const newScrollPos = window.scrollY;
    if (newScrollPos < 0) return;
    const diff = newScrollPos - scrollPosition;
    direction = diff > 0 ? 'down' : 'up';
    scrollPosition = newScrollPos;
  }
  return direction;
};

export { scrollYDirection as default };
