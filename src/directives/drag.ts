export const drag = {
  mounted(el) {
    console.log(el, '安装了')
  },
  beforeUnmount(el) {
    console.log(el, '卸载了')
  }
}
