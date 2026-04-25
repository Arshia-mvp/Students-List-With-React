import Card from "./components/Card/Card";

function App () {
    let students = [
        {fullName : "Arshia Zahedi" , userAge : 17 , userJob : "Website Programmer" , userEmail : "arshiazahedi@gmail.com"},
        {fullName : "Amir Mohamad Eshaghi" , userAge : 16 , userJob : "artificial intelligence" , userEmail : "mohamadeshaghi@gmail.com"},
        {fullName : "Ilia ghasemi" , userAge : 15 , userJob : "Website Programmer" , userEmail : "ghasemi@gmail.com"},
        {fullName : "Mohamad Mahdi Jerban" , userAge : 11 , userJob : "Programmer" , userEmail : "mahdijerban@gmail.com"},
    ]
    return (
        <div className="card-container">
            
            {students.map((student) => (
                <Card fullName={student.fullName} userAge={student.userAge} userJob={student.userJob} userEmail={student.userEmail} />
            ))};

        </div>
    );
}
export default App;