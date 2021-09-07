/**
 * 蛇
 */
class Snake {
  element: HTMLElement // 蛇的容器
  head: HTMLElement // 蛇头
  bodies: HTMLCollection // 蛇的身体（包括蛇头）
  constructor() {
    this.element = document.getElementById('snake')!
    this.head = document.querySelector('#snake > div')!
    this.bodies = this.element.getElementsByTagName('div')
  }

  // 获取蛇头 x 坐标
  get X() {
    return this.head.offsetLeft
  }

  // 获取蛇头 y 坐标
  get Y() {
    return this.head.offsetTop
  }

  // 设置蛇头 x 坐标
  set X(value: number) {
    this.head.style.left = value + 'px'
  }

  //  设置蛇头 y 坐标
  set Y(value: number) {
    this.head.style.top = value + 'px'
  }

  // 蛇增加身体
  addBody() {
    this.element.insertAdjacentHTML('beforeend', '<div></div>')
  }
}