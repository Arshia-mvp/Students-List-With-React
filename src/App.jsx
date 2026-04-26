import Card from "./components/Card/Card";

function App () {
    let students = [
        {fullName : "Arshia Zahedi" , userAge : 17 , userJob : "Website Programmer" , userEmail : "arshiazahedi@gmail.com" , gender : "man"},
        {fullName : "Zahra ghasemi" , userAge : 26 , userJob : "tailor" , userEmail : "zahra@gmail.com" , gender : "woman"},
        {fullName : "Amir Mohamad Eshaghi" , userAge : 16 , userJob : "artificial intelligence" , userEmail : "mohamadeshaghi@gmail.com" , gender : "man"},
        {fullName : "nazanin eshaghi" , userAge : 30  , userJob : "housekeeper" , userEmail : "nazanin@gmail.com" , gender : "woman"},
        {fullName : "Ilia ghasemi" , userAge : 15 , userJob : "Website Programmer" , userEmail : "ghasemi@gmail.com" , gender : "man"},
        {fullName : "Mohamad Mahdi Jerban" , userAge : 11 , userJob : "Programmer" , userEmail : "mahdijerban@gmail.com" , gender : "man"},
        {fullName : "fatemeh ahmadi" , userAge : 13 , userJob : "the cook" , userEmail : "fatemeh@gmail.com" , gender : "woman"},
        {fullName : "atefe gholami" , userAge : 19 , userJob : "driver" , userEmail : "gholami@gmail.com" , gender : "woman"},
        {fullName : "miki kalafe" , userAge : 25 , userJob : "Blogger" , userEmail : "mikikalafe@gmail.com" , gender : "man"},
        {fullName : "zhale asghari" , userAge : 35 , userJob : "housekeeper" , userEmail : "zhale@gmail.com" , gender : "woman"},
        {fullName : "amir ali zahedi" , userAge : 18 , userJob : "student" , userEmail : "amirali@gmail.com" , gender : "man"},
    ]
    return (
        <div className="card-container">
            
            {students.map((student) => (
                <Card fullName={student.fullName} userAge={student.userAge} userJob={student.userJob} userEmail={student.userEmail} gender={student.gender} />
            ))};

        </div>
    );
}
export default App;