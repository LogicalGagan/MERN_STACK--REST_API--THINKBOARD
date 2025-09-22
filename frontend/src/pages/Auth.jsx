import React, { useState } from 'react';
import api from '../libs/axios.js';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const Auth = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const endpoint = isLogin ? '/users/login' : '/users/register';
        const payload = isLogin ? { email, password } : { name, email, password };

        try {
            const { data } = await api.post(endpoint, payload);
            localStorage.setItem('userInfo', JSON.stringify(data));
            toast.success(`Successfully ${isLogin ? 'logged in' : 'registered'}!`);
            navigate('/');
        } catch (error) {
            toast.error(error.response.data.message);
        }
    };

    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-[#10141a] font-sans">
            <div className="max-w-md w-full p-8 bg-[#1a1f26] rounded-2xl shadow-lg">
                <h2 className="text-3xl font-bold text-center text-white mb-8">
                    {isLogin ? 'Login' : 'Sign Up'}
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    {!isLogin && (
                        <div>
                            <label className="text-sm font-medium text-gray-300" htmlFor="name">
                                Name
                            </label>
                            <input
                                id="name"
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full px-4 py-3 mt-2 bg-[#2a2f36] text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                                required
                            />
                        </div>
                    )}
                    <div>
                        <label className="text-sm font-medium text-gray-300" htmlFor="email">
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-3 mt-2 bg-[#2a2f36] text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                            required
                        />
                    </div>
                    <div>
                        <label className="text-sm font-medium text-gray-300" htmlFor="password">
                            Password
                        </label>
                        <input
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-3 mt-2 bg-[#2a2f36] text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-3 font-semibold text-white bg-cyan-600 rounded-lg hover:bg-cyan-700 transition-colors duration-300"
                    >
                        {isLogin ? 'Login' : 'Sign Up'}
                    </button>
                </form>
                <p className="mt-6 text-center text-gray-400">
                    {isLogin ? "Don't have an account?" : 'Already have an account?'}
                    <button
                        onClick={() => setIsLogin(!isLogin)}
                        className="ml-2 text-cyan-400 hover:underline"
                    >
                        {isLogin ? 'Sign Up' : 'Login'}
                    </button>
                </p>
            </div>
        </div>
    );
};

export default Auth;
