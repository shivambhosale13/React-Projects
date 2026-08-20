/**
 * Challenge: Fix our component! 😱
 */

export default function Entry(props) {
    return (
        
        <article className="journal-entry">
            <div className="main-image-container">
                <img 
                    className="main-image"
                    src={props.Entry.img.src} 
                    alt={props.Entry.img.alt}
                />
            </div>
            <div className="info-container">
                <img 
                    className="marker"
                    src="../images/marker.png" 
                    alt="map marker icon"
                />
                <span className="country">{props.Entry.country}</span>
                <a href={props.googleMapsLink} target="_blank">View on Google Maps</a>
                <h2 className="entry-title">{props.title}</h2>
                <p className="trip-dates">{props.Entry.dates}</p>
                <p className="entry-text">{props.Entry.text}</p>
            </div>
            
        </article>
    )
}