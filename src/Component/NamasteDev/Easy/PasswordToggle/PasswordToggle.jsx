import { useState } from 'react';
import './passwordToggle.css';
import { Eye, EyeOff } from 'lucide-react';

function PasswordToggle() {
    const [password, setPassword] = useState('');
    const [state, setState] = useState('hidden')
    return (
        <>
            <h1>Toggle Password</h1>
            <input
                className='input-toggle'
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type={state === 'hidden' ? 'password' : 'text'} />
            <div style={{ position: "absolute", left: "150px", top: "44px", cursor: "pointer" }} onClick={() => setState((prev) => prev === 'hidden' ? 'visible' : 'hidden')}>
                {
                    state === 'hidden' ?
                        <EyeOff size={20} />
                        : <Eye size={20} />
                }

            </div>
            <div>password {state}</div>
        </>
    )
}

export default PasswordToggle;