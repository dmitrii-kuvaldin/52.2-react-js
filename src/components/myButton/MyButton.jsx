import './myButton.css'
// пример отдельного компонента кнопки
// экспорт по умолчанию можно писать как в конце так и в начале объявления функции

function MyButton() {
  return <button className="myButton">Click me!</button>;
}

export default MyButton;
