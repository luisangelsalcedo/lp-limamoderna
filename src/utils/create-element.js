const createElement = (
  selector,
  classList = null,
  {
    id,
    name,
    type,
    placeholder,
    required,
    value,
    action,
    target,
    method,
    disabled,
    checked,
    src,
    href,
    style,
  } = {}
) => {
  const element = document.createElement(selector);
  // if (classList) element.classList.add(classList);
  if (classList) element.setAttribute("class", classList);

  if (id) element.id = id;
  if (name) element.setAttribute("name", name);
  if (type) element.setAttribute("type", type);
  if (placeholder) element.setAttribute("placeholder", placeholder);
  if (required) element.setAttribute("required", required);
  if (value) element.setAttribute("value", value);
  if (action) element.setAttribute("action", action);
  if (target) element.setAttribute("target", target);
  if (method) element.setAttribute("method", method);
  if (disabled) element.setAttribute("disabled", disabled);
  if (checked) element.setAttribute("checked", checked);
  if (src) element.setAttribute("src", src);
  if (href) element.setAttribute("href", href);
  if (style) element.setAttribute("style", style);

  return element;
};

export default createElement;
