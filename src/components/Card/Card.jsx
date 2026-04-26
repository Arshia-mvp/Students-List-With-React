import "./Card.css";

function Card ({fullName , userAge , userJob , userEmail , gender}) {
    return (
        <div className={`student-card ${gender == "man" ? "man" : "woman"}`}>
            <div>fullname : {fullName}</div>
            <div>userage : {userAge}</div>
            <div>userjob : {userJob}</div>
            <div>useremail : {userEmail}</div>
            <div>gender : {gender}</div>
        </div>
    );
}

export default Card;