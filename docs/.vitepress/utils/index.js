import getFileList from './getFileList'
const getSidebarObjList = (list) =>
  list.map((item) => {
    const lastSplitIndex = item.dir.lastIndexOf('/')
    const title = item.dir.substr(lastSplitIndex + 1)
    const dir = '/view' + item.dir.split('view')[1] + '/'

    const mdFileName = item.file
      .map((file) => {
        return file.split('/').pop()
      })
      .filter((fileName) => fileName !== 'README.md')
    return {
      title,
      dir,
      mdFileName,
    }
  })
export const generateSidebarConfig = (path, exclude = [], options = {}) => {
  const sidebarConfig = {}
  const fileList = getFileList(path, exclude).filter((item) => item.file.length)
  const sidebarObjList = getSidebarObjList(fileList)
  sidebarObjList.forEach((obj) => {
    const children = []
    obj.mdFileName.forEach((filename) => {
      children.push([filename, filename.split('.')[0]])
    })
    const curObj = { title: obj.title, children, ...options }
    const arr = []
    arr.push(curObj)
    sidebarConfig[obj.dir] = arr
  })
  return sidebarConfig
}


