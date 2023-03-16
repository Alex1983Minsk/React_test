import Navbar from "../Navbar/Navbar"

function Footer() {
    return (
        `
        <footer class="footer">
            ${Navbar(['About', 'Contacts'])}
        </footer>    
        `
    )
}

export default Footer