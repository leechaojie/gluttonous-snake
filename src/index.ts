import './style/index.scss'

import Food from './modules/Food'
import ScorePanel from './modules/ScorePanel'

const food = new Food()
console.log(food.X, food.Y)
food.change()
console.log(food.X, food.Y)


const scorePanel = new ScorePanel()
for (let i = 0; i < 10; i++) {
  scorePanel.addScore()
}
