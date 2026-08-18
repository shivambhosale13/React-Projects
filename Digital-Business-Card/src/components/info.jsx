export default function Info() {
    return (
        <div className="info-container">

            <img
                src="/profile.jpeg"
                alt="Profile"
                className="profile-photo"
            />

            <div className="info">
                <h1>Shivam Bhosale</h1>
                <h2>Software Developer</h2>
                <h3>github.com/shivambhosale13</h3>
            </div>

            <div className="social-media">
                <button className="Email-button">
                    <i className="fa-solid fa-envelope"></i>
                    Email
                </button>

                <button className="LinkedIn-button">
                    <i className="fa-brands fa-linkedin"></i>
                    LinkedIn
                </button>
            </div>

        </div>
    );
}