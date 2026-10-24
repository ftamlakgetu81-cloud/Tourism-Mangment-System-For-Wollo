import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { 
  FaUser, 
  FaEnvelope, 
  FaPhone, 
  FaCalendarAlt, 
  FaLock, 
  FaEye, 
  FaEyeSlash, 
  FaUserPlus, 
  FaMapMarkerAlt, 
  FaBoxOpen, 
  FaBell, 
  FaClipboardList, 
  FaStar, 
  FaChevronDown 
} from 'react-icons/fa';

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [registrationMessage, setRegistrationMessage] = useState(null);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    dob: '',
    password: '',
    confirmPassword: '',
    role: '',
    address: '',
    agreeTerms: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setRegistrationMessage((current) => current?.type === 'error' ? null : current);
    setFormData({ 
      ...formData, 
      [name]: type === 'checkbox' ? checked : value 
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setRegistrationMessage({ type: 'error', text: 'Passwords do not match.' });
      return;
    }
    if (!formData.agreeTerms) {
      setRegistrationMessage({ type: 'error', text: 'Please agree to the Privacy Policy and Terms & Conditions.' });
      return;
    }

    setIsSubmitting(true);
    setRegistrationMessage(null);
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:5000'}/api/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          password: formData.password,
          role: formData.role,
          address: formData.address,
        }),
      });
      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.error || 'Unable to create your account. Please try again.');
      }

      setRegistrationMessage({ type: 'success', text: 'Account created successfully. You can now log in.' });
      setFormData((current) => ({ ...current, password: '', confirmPassword: '' }));
    } catch (error) {
      setRegistrationMessage({
        type: 'error',
        text: error.message || 'Unable to connect to the server. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 antialiased flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Banner Section */}
        <section className="relative isolate flex min-h-[260px] items-center overflow-hidden bg-[#064b49] px-5 py-10 text-white sm:px-8">
          <img
            src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=2200&q=85"
            alt="Register Banner"
            className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#062f2d]/95 via-[#063c3b]/75 to-[#073a36]/40" />
          <div className="relative mx-auto flex w-full max-w-7xl items-center justify-between gap-6">
            <div className="max-w-2xl">
              <p className="mb-2 text-[11px] font-semibold text-emerald-100 sm:text-xs">
                <span>Home</span>
                <span className="mx-2">›</span>
                <span>Register</span>
              </p>
              <h1 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-5xl mb-2">
                Create Your Account
              </h1>
              <p className="text-xs sm:text-sm text-emerald-100 leading-relaxed max-w-xl">
                Join Wollo Tourism Management System and be part of our growing community. Explore, book, and experience the beauty of South Wollo.
              </p>
            </div>
            
            <div className="hidden shrink-0 -rotate-6 text-right lg:block">
              <span className="block font-serif text-3xl italic text-amber-400">Discover</span>
              <span className="block text-4xl font-black italic leading-none text-white">South Wollo</span>
            </div>
          </div>
        </section>

        {/* Main Content Layout (Left Info, Center Form, Right Why Register) */}
        <section className="mx-auto max-w-7xl px-5 py-10 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Journey Starts Here Info (3 Cols) */}
            <div className="lg:col-span-3 hidden lg:flex flex-col justify-between space-y-6 pt-4">
              <div>
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-[#1a5d38] flex items-center justify-center text-xl mb-4 shadow-sm">
                  <FaUserPlus />
                </div>
                <h2 className="font-serif italic text-2xl font-bold text-[#1a5d38] leading-tight mb-2">
                  Your Journey <br />
                  <span className="text-slate-900 not-italic text-3xl font-extrabold">Starts Here</span>
                </h2>
                <p className="text-xs text-slate-600 leading-relaxed mt-3">
                  Register now to get access to personalized travel experiences, exclusive offers, and the latest updates about Wollo tourism.
                </p>
              </div>

              <div className="pt-8">
                <div className="text-[#1a5d38] font-bold text-sm mb-1">⛰️</div>
                <p className="text-[11px] italic text-slate-500 leading-relaxed">
                  Explore · Discover · Experience
                </p>
              </div>
            </div>

            {/* Center Column: Registration Form (6 Cols) */}
            <div className="lg:col-span-6 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
              <div className="mb-6">
                <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                  <FaUserPlus className="text-[#1a5d38] text-sm" /> Register
                </h2>
                <p className="text-xs text-slate-500 mt-0.5">
                  Fill in the form below to create your account.
                </p>
                {registrationMessage && (
                  <p
                    role="status"
                    className={`mt-3 rounded-lg px-3 py-2 text-xs ${registrationMessage.type === 'success' ? 'bg-emerald-50 text-emerald-800' : 'bg-red-50 text-red-700'}`}
                  >
                    {registrationMessage.text}
                  </p>
                )}
              </div>

              <form
                onSubmit={handleRegister}
                onInvalidCapture={() => setRegistrationMessage({ type: 'error', text: 'Please complete all required fields before registering.' })}
                className="space-y-4"
              >
                
                {/* Full Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 mb-1">Full Name *</label>
                    <div className="relative">
                      <FaUser className="absolute left-3.5 top-1/2 -translate-y-1/2 text-xs text-slate-400" />
                      <input
                        type="text"
                        name="fullName"
                        required
                        placeholder="Enter your full name"
                        value={formData.fullName}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-slate-200 bg-slate-50/50 py-2.5 pl-9 pr-3 text-xs outline-none focus:border-[#1a5d38] focus:bg-white focus:ring-1 focus:ring-[#1a5d38]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 mb-1">Email Address *</label>
                    <div className="relative">
                      <FaEnvelope className="absolute left-3.5 top-1/2 -translate-y-1/2 text-xs text-slate-400" />
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="Enter your email address"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-slate-200 bg-slate-50/50 py-2.5 pl-9 pr-3 text-xs outline-none focus:border-[#1a5d38] focus:bg-white focus:ring-1 focus:ring-[#1a5d38]"
                      />
                    </div>
                  </div>
                </div>

                {/* Phone Number & Date of Birth */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 mb-1">Phone Number *</label>
                    <div className="relative">
                      <FaPhone className="absolute left-3.5 top-1/2 -translate-y-1/2 text-xs text-slate-400" />
                      <input
                        type="tel"
                        name="phone"
                        required
                        placeholder="+251 9XX XXX XXX"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-slate-200 bg-slate-50/50 py-2.5 pl-9 pr-3 text-xs outline-none focus:border-[#1a5d38] focus:bg-white focus:ring-1 focus:ring-[#1a5d38]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 mb-1">Date of Birth</label>
                    <div className="relative">
                      <FaCalendarAlt className="absolute left-3.5 top-1/2 -translate-y-1/2 text-xs text-slate-400" />
                      <input
                        type="date"
                        name="dob"
                        value={formData.dob}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-slate-200 bg-slate-50/50 py-2.5 pl-9 pr-3 text-xs text-slate-700 outline-none focus:border-[#1a5d38] focus:bg-white focus:ring-1 focus:ring-[#1a5d38]"
                      />
                    </div>
                  </div>
                </div>

                {/* Password & Confirm Password */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 mb-1">Password *</label>
                    <div className="relative">
                      <FaLock className="absolute left-3.5 top-1/2 -translate-y-1/2 text-xs text-slate-400" />
                      <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        required
                        placeholder="Create a strong password"
                        value={formData.password}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-slate-200 bg-slate-50/50 py-2.5 pl-9 pr-9 text-xs outline-none focus:border-[#1a5d38] focus:bg-white focus:ring-1 focus:ring-[#1a5d38]"
                      />
                      <button 
                        type="button" 
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs"
                      >
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 mb-1">Confirm Password *</label>
                    <div className="relative">
                      <FaLock className="absolute left-3.5 top-1/2 -translate-y-1/2 text-xs text-slate-400" />
                      <input
                        type={showConfirmPassword ? "text" : "password"}
                        name="confirmPassword"
                        required
                        placeholder="Confirm your password"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-slate-200 bg-slate-50/50 py-2.5 pl-9 pr-9 text-xs outline-none focus:border-[#1a5d38] focus:bg-white focus:ring-1 focus:ring-[#1a5d38]"
                      />
                      <button 
                        type="button" 
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs"
                      >
                        {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Role Selection */}
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 mb-1">Role *</label>
                  <div className="relative">
                    <select
                      name="role"
                      required
                      value={formData.role}
                      onChange={handleChange}
                      className="w-full appearance-none rounded-xl border border-slate-200 bg-slate-50/50 py-2.5 px-3.5 pr-8 text-xs text-slate-700 outline-none focus:border-[#1a5d38] focus:bg-white focus:ring-1 focus:ring-[#1a5d38]"
                    >
                      <option value="" disabled>Select your role</option>
                      <option value="Tourist">Tourist / Traveler</option>
                      <option value="Service Provider">Service Provider (Hotel/Guide)</option>
                    </select>
                    <FaChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[10px] text-slate-400 pointer-events-none" />
                  </div>
                </div>

                {/* Address (Optional) */}
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 mb-1">Address (Optional)</label>
                  <div className="relative">
                    <FaMapMarkerAlt className="absolute left-3.5 top-1/2 -translate-y-1/2 text-xs text-slate-400" />
                    <input
                      type="text"
                      name="address"
                      placeholder="Enter your address"
                      value={formData.address}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/50 py-2.5 pl-9 pr-3 text-xs outline-none focus:border-[#1a5d38] focus:bg-white focus:ring-1 focus:ring-[#1a5d38]"
                    />
                  </div>
                </div>

                {/* Agree Terms Checkbox */}
                <div className="pt-2">
                  <label className="flex items-center gap-2 cursor-pointer text-xs">
                    <input
                      type="checkbox"
                      name="agreeTerms"
                      checked={formData.agreeTerms}
                      onChange={handleChange}
                      className="rounded border-slate-300 text-[#1a5d38] focus:ring-[#1a5d38] w-4 h-4"
                    />
                    <span className="text-slate-600">
                      I agree to the <a href="/privacy-policy" className="text-[#1a5d38] font-bold hover:underline">Privacy Policy</a> and <a href="#terms" className="text-[#1a5d38] font-bold hover:underline">Terms & Conditions</a>
                    </span>
                  </label>
                </div>

                {/* Submit Register Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-xl bg-[#0d3d23] hover:bg-emerald-900 disabled:cursor-wait disabled:opacity-70 text-white font-bold py-3 px-4 text-xs flex items-center justify-center gap-2 transition shadow-md mt-4"
                >
                  <FaUserPlus className="text-xs" /> {isSubmitting ? 'Creating account...' : 'Register'}
                </button>

              </form>

              {/* Already have an account */}
              <div className="text-center pt-6 mt-6 border-t border-slate-100 text-xs text-slate-500">
                Already have an account? <a href="/login" className="text-[#1a5d38] font-bold hover:underline">Login</a>
              </div>
            </div>

            {/* Right Column: Why Register Sidebar (3 Cols) */}
            <div className="lg:col-span-3 bg-white rounded-2xl border border-slate-200 p-5 shadow-sm space-y-4">
              <h3 className="font-bold text-slate-900 text-xs mb-3 pb-2 border-b border-slate-100 flex items-center gap-2">
                <FaStar className="text-amber-400" /> Why Register?
              </h3>

              <div className="space-y-3.5 text-xs">
                <div className="flex items-start gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-emerald-50 text-[#1a5d38] flex items-center justify-center shrink-0 mt-0.5">
                    <FaBoxOpen className="text-xs" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-[11px]">Book Tour Packages</h4>
                    <p className="text-[10px] text-slate-500 leading-tight mt-0.5">Easily book your favorite tour packages and manage your trips.</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-emerald-50 text-[#1a5d38] flex items-center justify-center shrink-0 mt-0.5">
                    <FaBell className="text-xs" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-[11px]">Get Latest Updates</h4>
                    <p className="text-[10px] text-slate-500 leading-tight mt-0.5">Be the first to know about events, new destinations and special offers.</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-emerald-50 text-[#1a5d38] flex items-center justify-center shrink-0 mt-0.5">
                    <FaClipboardList className="text-xs" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-[11px]">Manage Your Bookings</h4>
                    <p className="text-[10px] text-slate-500 leading-tight mt-0.5">View and track your bookings, reservations and travel history.</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-emerald-50 text-[#1a5d38] flex items-center justify-center shrink-0 mt-0.5">
                    <FaUser className="text-xs" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-[11px]">Personalized Experience</h4>
                    <p className="text-[10px] text-slate-500 leading-tight mt-0.5">Get recommendations based on your interests and preferences.</p>
                  </div>
                </div>
              </div>

              {/* Small Banner Card inside Sidebar */}
              <div className="relative rounded-xl overflow-hidden mt-4 group">
                <img 
                  src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400&auto=format&fit=crop" 
                  alt="South Wollo" 
                  className="w-full h-32 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent p-3 flex flex-col justify-end text-white text-center">
                  <span className="font-serif italic text-xs text-amber-300">Visit South Wollo</span>
                  <span className="font-extrabold text-sm">Feel the Difference</span>
                </div>
              </div>

            </div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}