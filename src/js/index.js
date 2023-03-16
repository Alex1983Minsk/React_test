import 'bootstrap/dist/css/bootstrap.min.css'; //Подключение Bootstrap
import App from "../components/App"
import '../styles/main.css'


function Render ({ root, app}) {
    this.render = () => {
        document.querySelector(root).insertAdjacentHTML('beforeend', app)
    }
}

const root = new Render ({
    root: '#root',
    app: App()
})

root.render()

