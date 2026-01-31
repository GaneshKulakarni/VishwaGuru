import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    Building2, MessageCircle, Users, Shield, Star, FileText,
    Search, Lock, ShoppingCart, User
} from 'lucide-react';

const Landing = () => {
    const navigate = useNavigate();

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: 'spring',
                stiffness: 100,
                damping: 12
            }
        }
    };

    const slideInLeft = {
        hidden: { x: -100, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                type: 'spring',
                stiffness: 80,
                damping: 15
            }
        }
    };

    const slideInRight = {
        hidden: { x: 100, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                type: 'spring',
                stiffness: 80,
                damping: 15
            }
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
            {/* Header */}
            <motion.header
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 100, damping: 20 }}
                className="bg-white shadow-sm sticky top-0 z-50"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-20">
                        {/* Logo */}
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="flex items-center gap-3 cursor-pointer"
                        >
                            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                                <span className="text-white font-bold text-xl">V</span>
                            </div>
                            <div>
                                <h1 className="text-xl font-bold text-gray-800">
                                    FixMyIndia / <span className="text-blue-600">VishwaGuru</span>
                                </h1>
                            </div>
                        </motion.div>

                        {/* Right side icons */}
                        <div className="hidden md:flex items-center gap-4">
                            <motion.button
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                whileTap={{ scale: 0.95 }}
                                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                            >
                                <Lock className="w-5 h-5 text-gray-600" />
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.1, rotate: -5 }}
                                whileTap={{ scale: 0.95 }}
                                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                            >
                                <ShoppingCart className="w-5 h-5 text-gray-600" />
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                            >
                                <User className="w-5 h-5" />
                                <span className="font-medium">Gover Hiera</span>
                            </motion.button>
                        </div>
                    </div>
                </div>
            </motion.header>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
                {/* Hero Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
                    {/* Left Content */}
                    <motion.div
                        variants={slideInLeft}
                        initial="hidden"
                        animate="visible"
                        className="flex flex-col justify-center space-y-8"
                    >
                        <div className="space-y-6">
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight"
                            >
                                Empowering Citizens
                                <br />
                                <span className="text-gray-800">with for Better Governance</span>
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="text-lg md:text-xl text-gray-600 leading-relaxed"
                            >
                                Report civic Issues and AI generated complaints Telegram via Telegram Propoweri using estizanis.
                            </motion.p>
                        </div>

                        <motion.button
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(59, 130, 246, 0.3)' }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => navigate('/home')}
                            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl transition-all duration-300 w-fit"
                        >
                            Call Action Issue
                        </motion.button>
                    </motion.div>

                    {/* Right Content */}
                    <motion.div
                        variants={slideInRight}
                        initial="hidden"
                        animate="visible"
                        className="space-y-6"
                    >
                        {/* DepMyIndia Card */}
                        <motion.div
                            whileHover={{ scale: 1.02, y: -5 }}
                            className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-6 shadow-2xl cursor-pointer"
                            onClick={() => navigate('/home')}
                        >
                            <div className="flex items-center gap-4 text-white">
                                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                                    <span className="text-2xl">🏛️</span>
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-bold text-lg mb-1">DepMyIndia</h3>
                                    <p className="text-blue-100 text-sm">Reportg Citizens with generated civic govennante</p>
                                </div>
                                <Search className="w-6 h-6 opacity-80" />
                            </div>
                        </motion.div>

                        {/* Government Services Card */}
                        <motion.div
                            whileHover={{ scale: 1.02, y: -5 }}
                            className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden"
                        >
                            <div className="p-5 border-b border-gray-100 flex items-center justify-between">
                                <h3 className="font-bold text-gray-800 text-lg">Government Services</h3>
                                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                                    </svg>
                                </button>
                            </div>

                            <motion.div
                                whileHover={{ backgroundColor: 'rgb(249 250 251)' }}
                                className="p-6 cursor-pointer"
                                onClick={() => navigate('/home')}
                            >
                                <div className="flex items-start gap-4">
                                    <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                                        <MessageCircle className="w-7 h-7 text-white" />
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="font-bold text-gray-900 text-lg mb-2">Question the Government</h4>
                                        <p className="text-gray-600 text-sm leading-relaxed">
                                            Submit queries, demand transparency, and hold officials accountable
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Community Image */}
                        <motion.div
                            whileHover={{ scale: 1.02, y: -5 }}
                            className="rounded-2xl overflow-hidden shadow-2xl"
                        >
                            <div className="relative h-64 bg-gradient-to-br from-green-400 via-blue-500 to-purple-500 flex items-center justify-center">
                                <div className="absolute inset-0 bg-black/10"></div>
                                <div className="relative text-center text-white p-6">
                                    <Users className="w-16 h-16 mx-auto mb-4 opacity-90" />
                                    <h3 className="text-2xl font-bold mb-2">Community in Action</h3>
                                    <p className="text-white/90">Citizens working together for a better tomorrow</p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Bottom Features Section */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="space-y-12"
                >
                    {/* Feature Cards Row 1 */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        <motion.div
                            variants={itemVariants}
                            whileHover={{ scale: 1.05, rotate: 1 }}
                            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all cursor-pointer border border-gray-100"
                            onClick={() => navigate('/home')}
                        >
                            <div className="text-center space-y-4">
                                <div className="w-20 h-20 bg-gray-100 rounded-2xl mx-auto flex items-center justify-center">
                                    <Building2 className="w-10 h-10 text-gray-700" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 mb-1">Public Trust</h3>
                                    <p className="text-gray-600 text-sm">& Ethics</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            variants={itemVariants}
                            whileHover={{ scale: 1.05, rotate: -1 }}
                            className="bg-green-100 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all cursor-pointer border border-green-200"
                            onClick={() => navigate('/home')}
                        >
                            <div className="text-center space-y-4">
                                <div className="w-20 h-20 bg-green-600 rounded-2xl mx-auto flex items-center justify-center">
                                    <MessageCircle className="w-10 h-10 text-white" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900">Civic Issues</h3>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            variants={itemVariants}
                            whileHover={{ scale: 1.05, rotate: 1 }}
                            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all cursor-pointer border border-gray-100"
                            onClick={() => navigate('/home')}
                        >
                            <div className="text-center space-y-4">
                                <div className="w-20 h-20 bg-blue-100 rounded-2xl mx-auto flex items-center justify-center">
                                    <Star className="w-10 h-10 text-blue-600" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 mb-1">VoiceYour Vote</h3>
                                    <p className="text-gray-600 text-xs">Wic carres sedious<br />Share idea for bettarpolicies</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* AI Section Title */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2 }}
                        className="text-center"
                    >
                        <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-2">
                            AI al for Democracy & Civic Actions
                        </h2>
                        <p className="text-gray-600">Layee Therm:</p>
                    </motion.div>

                    {/* AI Feature Cards */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        <motion.div
                            variants={itemVariants}
                            whileHover={{ scale: 1.05 }}
                            className="bg-blue-600 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all cursor-pointer text-white"
                            onClick={() => navigate('/home')}
                        >
                            <div className="text-center space-y-3">
                                <Star className="w-12 h-12 mx-auto" />
                                <h4 className="font-bold">Smart Solutions</h4>
                            </div>
                        </motion.div>

                        <motion.div
                            variants={itemVariants}
                            whileHover={{ scale: 1.05 }}
                            className="bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all cursor-pointer text-white"
                            onClick={() => navigate('/home')}
                        >
                            <div className="text-center space-y-3">
                                <Users className="w-12 h-12 mx-auto" />
                                <h4 className="font-bold">Community</h4>
                            </div>
                        </motion.div>

                        <motion.div
                            variants={itemVariants}
                            whileHover={{ scale: 1.05 }}
                            className="bg-white border-2 border-gray-200 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all cursor-pointer"
                            onClick={() => navigate('/home')}
                        >
                            <div className="text-center space-y-3">
                                <FileText className="w-12 h-12 mx-auto text-gray-800" />
                                <h4 className="font-bold text-gray-800">Transparency</h4>
                            </div>
                        </motion.div>

                        <motion.div
                            variants={itemVariants}
                            whileHover={{ scale: 1.05 }}
                            className="bg-orange-600 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all cursor-pointer text-white"
                            onClick={() => navigate('/home')}
                        >
                            <div className="text-center space-y-3">
                                <Shield className="w-12 h-12 mx-auto" />
                                <h4 className="font-bold">Security</h4>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            {/* Footer */}
            <motion.footer
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="bg-gray-900 text-white py-12 mt-20"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <p className="text-gray-400">
                        &copy; {new Date().getFullYear()} VishwaGuru Civic Platform. All rights reserved.
                    </p>
                </div>
            </motion.footer>
        </div>
    );
};

export default Landing;
