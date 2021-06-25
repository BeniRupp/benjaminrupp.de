export default async function loadTemplateContent(templatePath) {
  const templateFile = await fetch(templatePath)
  const templateRaw = await templateFile.text()
  const template = document.createElement('template')
  template.innerHTML = templateRaw
    .replace('<template>', '')
    .replace('</template>', '')
  return template.content.cloneNode(true)
}
