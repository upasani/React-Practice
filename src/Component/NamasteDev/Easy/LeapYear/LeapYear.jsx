import './leapYear.css';

function LeapYear() {
    const handleSubmit = (e) => {
        console.log("Inside th handleSubmit")

    }
    return (
        <>
            <div className='leap-year-container'>
                <h1>Leap Year</h1>
                <div>
                    <label htmlFor="">Enter Year:</label>
                </div>
                <div>
                    <input type="number" style={{ width: "50%" }} /> <br />
                    <button type='button' style={{ width: "50%" }} onClick={handleSubmit}>Check</button>
                </div>

            </div>

        </>
    )

}

export default LeapYear;