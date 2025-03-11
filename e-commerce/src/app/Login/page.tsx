import Link from "next/link"
import Image from "next/image"

export default function Login() {
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="w-full bg-[#F2F0FF] px-4 sm:px-6 lg:px-20 py-8 sm:py-10">
                <h1 className="text-2xl sm:text-3xl font-serif font-bold">My Account</h1>
                <ul className="flex gap-2 text-sm sm:text-base mt-2">
                    <li>Home_</li>
                    <li>Pages_</li>
                    <li className="text-pink-600">MyAccount</li>
                </ul>
            </div>

            <div className="container mx-auto px-4 py-8 sm:py-12">
                <div className="max-w-md mx-auto">
                    <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8">
                        <div className="text-center mb-8">
                            <h1 className="text-2xl sm:text-3xl font-bold text-[#1A0B5B] mb-2">Login</h1>
                            <p className="text-sm text-gray-500">Please login using account detail below.</p>
                        </div>

                        <form className="space-y-4">
                            <div>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email Address"
                                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 text-sm"
                                />
                            </div>

                            <div>
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 text-sm"
                                />
                            </div>

                            <div className="flex justify-end">
                                <button className="text-sm text-gray-500 hover:text-pink-600 transition-colors">
                                    Forgot your password?
                                </button>
                            </div>

                            <button
                                type="submit"
                                className="w-full py-3 bg-pink-600 text-white rounded-md hover:bg-pink-700 transition-colors text-sm sm:text-base font-medium"
                            >
                                Sign In
                            </button>

                            <p className="text-center text-sm text-gray-500">
                                Dont have an Account?{' '}
                                <Link href="/" className="text-pink-600 hover:text-pink-700 transition-colors font-medium">
                                    Create account
                                </Link>
                            </p>
                        </form>
                    </div>

                    <div className="mt-8 flex justify-center">
                        <Image
                            src="/images/Signatures.png"
                            alt="Signature"
                            width={300}
                            height={120}
                            className="w-48 sm:w-64 h-auto"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}