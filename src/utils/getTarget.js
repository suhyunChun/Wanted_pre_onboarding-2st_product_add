export const getTarget = (elem, className) => {
  while (!elem.classList.contains(className)) {
    elem = elem.parentNode;

    if (elem.nodeName === 'BODY') {
      elem = null;
      return;
    }
  }
  const currentCheckbox = elem.getElementsByClassName('checkbox')[0];
  return currentCheckbox;
};
