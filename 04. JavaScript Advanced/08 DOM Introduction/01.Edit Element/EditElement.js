function editElement(element, match, replacer) {
  const text = element.textContent;

  //------------
  //----variable1
  // const result = text.replace(match, replacer)

  //----variable2
  // const pattern = new RegExp(match, 'g')
  // const result = text.replace(pattern, replacer)

  //----variable3
  const result = text.split(match).join(replacer);
  //--------------

  element.textContent = result;
}
