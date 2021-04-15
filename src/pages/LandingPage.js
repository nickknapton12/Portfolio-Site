import '../styles/landingPageStyles.css';

function LandingPage() {
    return (
        <div>
            <h2 className="landingPageHeader">Nicholas Knapton</h2>
            <h3 className="landingPageSubHeader">A<span style={{ color: `rgb(0, 203, 253)` }}>&#00;&#60;SoftwareEngineering /&#62;&#00;</span>Student</h3>
            <div className="introContainer">
                <i class="material-icons" id="atIcon">place</i>
                <h3 className="landingPageSubHeader" id="school">University of Calgary</h3>
            </div>

            <p className="landingPageDescription">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a commodo nisl. Aliquam dapibus est porttitor orci aliquam,
            sit amet congue erat accumsan. Maecenas volutpat, purus et venenatis facilisis, risus tortor porta felis, non ultrices velit lectus ut sapien. Donec volutpat
            congue ante. Vivamus laoreet felis at lacus molestie viverra eget id nibh. Aenean quis neque dapibus, luctus magna nec, pharetra libero. Maecenas laoreet metus
            vitae elit consectetur lobortis. Mauris posuere arcu non tellus dictum, at ornare nunc ornare. Quisque sit amet massa condimentum, posuere lectus eget, tincidunt
            justo. In ut lobortis dolor. Nulla sit amet nibh dui. Sed vel libero tortor. Maecenas eu augue id orci varius auctor id eu lorem.
            </p>
            <a href="#"><h3 className="landingPageSubHeader" id="resume">Resume</h3></a>

        </div>
    )
}

export default LandingPage;
