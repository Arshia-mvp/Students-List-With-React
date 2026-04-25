import "./Card.css";

function Card ({fullName , userAge , userJob , userEmail}) {
    return (
        <div className="student-card">
            <div>fullname : {fullName}</div>
            <div>userage : {userAge}</div>
            <div>userjob : {userJob}</div>
            <div>useremail : {userEmail}</div>
        </div>
    );
}

export default Card;