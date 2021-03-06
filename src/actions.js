export const longpress = (node, threshold = 500) => {
  const start = () => {
    const timeout = setTimeout(() => {
      node.dispatchEvent(new CustomEvent('longpress'));
    }, threshold);

    const cancel = () => {
      clearTimeout(timeout);
      node.removeEventListener('mousemove', cancel);
      node.removeEventListener('mouseup', cancel);
    };

    node.addEventListener('mousemove', cancel);
    node.addEventListener('mouseup', cancel);
  };

  node.addEventListener('mousedown', start);

  return {
    destroy() {
      node.removeEventListener('mousedown', start);
    }
  };
};
