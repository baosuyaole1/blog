import path from 'path'
import { generateSidebarConfig } from '../utils'
const pagesDirPath = path.join(__dirname, '../../view')

const exclude = ['.DS_Store', 'assets']

const options = {
  collapsable: false,
}
const sidebarConfig = generateSidebarConfig(pagesDirPath, exclude)
// 组装侧边栏
const sidebar = (sidebarConfig) => {
  let list = []
  for (const key in sidebarConfig) {
    list.push({
      text: sidebarConfig[key][0].title,
      collapsable: true,
      items: sidebarConfig[key][0].children.map((item) => {
        return {
          text: item[1],
          link: key + item[0],
        };
      }),
    });
  }
  return list
}

module.exports = sidebar(sidebarConfig)