import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useUser } from '../context/user';
import './Login.css'; // Import the CSS file

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { user, login } = useUser();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            const session = await login(email, password);
            if (session) {
                console.log('Login successful:', user);
                localStorage.setItem('userEmail', user.email);
                localStorage.setItem('userName', user.name);
                navigate('./dashboard');
            }
        } catch (error) {
            console.error('Login error:', error);
            if (error.code === 401) {
                setError('Invalid email or password');
            } else if (error.code === 429) {
                setError('Too many attempts. Please try again later');
            } else {
                setError(error.message || 'Failed to login. Please try again');
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="login-container">
            <div className="login-card">
                <h2 className="login-title">Sign in to your account</h2>
                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    {error && (
                        <div className="login-error" role="alert">
                            {error}
                        </div>
                    )}
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <input
                                id="email-address"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="login-input"
                                placeholder="Email address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value.trim())}
                            />
                        </div>
                        <div>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                className="login-input"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            disabled={loading}
                            className="login-button"
                        >
                            {loading ? 'Signing in...' : 'Sign in'}
                        </button>
                    </div>

                    <div className="login-links">
                        <Link to="/forgot-password" className="login-link">
                            Forgot your password?
                        </Link>
                        <Link to="/signup" className="login-link">
                            Don't have an account? Sign up
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
