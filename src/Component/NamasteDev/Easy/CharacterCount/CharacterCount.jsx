import { useState } from "react";

function CharacterCount() {
    const [limit, setLimit] = useState(50);
    const [character, setCharacter] = useState('');

    return (
        <>
            <h1>Character Count</h1>
            <label htmlFor="">Max Length:</label>
            <input type="number" style={{ width: "5%" }} onChange={(e) => setLimit(e.target.value)} min={1} /> <br />
            <textarea
                placeholder="start typing.."
                name="" id=""
                rows={5}
                cols={40}
                style={{ marginTop: "15px" }}
                onChange={(e) => setCharacter(e.target.value)}>
            </textarea>

            <div>{`${character.length}/${limit}`}</div>
            {
                character.length > limit ? (
                    <div>You are exceed limit with {character.length - limit}</div>
                ) : (

                    (limit * (90 / 100)) <= character.length && (
                        <div>You are close to limit</div>
                    )
                )
            }

        </>
    )
}

export default CharacterCount;