export const copyLink = async (link: string | undefined) => {
  if (link === undefined) throw new Error('未知内容')
  if (navigator.clipboard) {
    await navigator.clipboard.writeText(link)
  } else {
    const input = document.createElement('input')
    input.value = link
    document.body.appendChild(input)
    input.select()
    document.execCommand('copy')
    document.body.removeChild(input)
  }
  return '拷贝成功'
}
