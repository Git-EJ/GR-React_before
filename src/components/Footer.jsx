
function Footer() {
    return (

        <footer className="footer">
            <p className="contact">
                <button name="contact@gaillonrenovation.fr" onClick={() =>
                    window.location = 'mailto:contact@gaillonrenovation.fr'}> @ Contact 
                </button>
            </p>

            <div className="pbottom">
                <p>GAILLON RENOVATION</p>
                <p>Siret: 789.069.614.00012 </p>
            </div>
        </footer>
    )
}

export default Footer;



