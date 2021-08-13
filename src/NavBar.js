class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { liked: false };
    }

    render() {

        return (
            <div>
                <div style={{ background: '#EAE1FF', flexDirection: 'row', display: 'flex', borderRadius: 8, justifyContent: 'space-between', verticalAlign: 'center'}}>
                    <div id="links" style={{marginTop: '23px'}}>
                        <a id="homeLink" href="../dist/Home.html">Home</a>
                        <a id="aboutLink" href="../dist/About.html">About</a>
                    </div>
                    <h1 id="nameTitle">
                        Olivia Rose
                    </h1>
                    <div style={{marginTop: '12px'}}>
                        <a href="https://www.linkedin.com/in/olivia-foster-van/">
                            <img src="../dist/images/linkedin-68-433326.png" id="profileLink" width={30} height={30}/>
                        </a>
                        <a href="mailto:oliviarfoster@gmail.com">
                            <img src="../dist/images/60662-200.png"  id="mailLink" width={40} height={45}/>
                        </a>

                    </div>
                </div>

            </div>
        );
    }
}
ReactDOM.render(<NavBar />, document.getElementById('navbar'));