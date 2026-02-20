import React, { useCallback, useEffect, useState, Component } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Eye, EyeOff, RefreshCw } from 'lucide-react';
const NEW_LOGO = "/Image_20-02-26_at_14.22.png";

const NEW_LOGO_BLUE = "/Image_20-02-26_at_14.22-1.png";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSwitch?: () => void;
}
// ── Animal captcha pool ──────────────────────────────────────────────────────
const ANIMALS = [
{
  answer: 'kucing',
  image:
  'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=300&q=80',
  label: 'Kucing (Cat)'
},
{
  answer: 'anjing',
  image:
  'https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=300&q=80',
  label: 'Anjing (Dog)'
},
{
  answer: 'kelinci',
  image:
  'https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?auto=format&fit=crop&w=300&q=80',
  label: 'Kelinci (Rabbit)'
},
{
  answer: 'burung',
  image:
  'https://images.unsplash.com/photo-1444464666168-49d633b86797?auto=format&fit=crop&w=300&q=80',
  label: 'Burung (Bird)'
}];

function pickRandom<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}
// ── Password strength validator ──────────────────────────────────────────────
function validatePassword(pw: string): string {
  if (pw.length < 8) return 'Kata sandi minimal 8 karakter.';
  const upperCount = (pw.match(/[A-Z]/g) ?? []).length;
  if (upperCount < 2)
  return 'Kata sandi harus mengandung minimal 2 huruf kapital.';
  if (!/[^a-zA-Z0-9]/.test(pw))
  return 'Kata sandi harus mengandung minimal 1 simbol.';
  return '';
}
// ── Animal Captcha Component ─────────────────────────────────────────────────
function AnimalCaptcha({
  value,
  onChange,
  verified,
  onVerify





}: {value: string;onChange: (v: string) => void;verified: boolean;onVerify: () => void;}) {
  const [animal, setAnimal] = useState(() => pickRandom(ANIMALS));
  const [showImage, setShowImage] = useState(false);
  const [timeLeft, setTimeLeft] = useState(45);
  const [wrong, setWrong] = useState(false);
  useEffect(() => {
    if (timeLeft <= 0) {
      setAnimal(pickRandom(ANIMALS));
      setTimeLeft(45);
      onChange('');
      setShowImage(false);
    }
    const t = setTimeout(() => setTimeLeft((p) => p - 1), 1000);
    return () => clearTimeout(t);
  }, [timeLeft]);
  const refresh = () => {
    setAnimal(pickRandom(ANIMALS));
    setTimeLeft(45);
    onChange('');
    setShowImage(false);
    setWrong(false);
  };
  const handleVerify = () => {
    if (value.toLowerCase().trim() === animal.answer) {
      onVerify();
      setWrong(false);
    } else {
      setWrong(true);
      onChange('');
      setTimeout(refresh, 800);
    }
  };
  return (
    <div className="bg-[#0f172a] rounded-xl p-4 border border-white/10">
      <div className="flex justify-between items-center mb-3">
        <span className="text-white text-sm font-medium">Hewan apa ini?</span>
        <div className="flex items-center gap-2">
          <span className="text-slate-400 text-xs">Waktu: {timeLeft}s</span>
          <button
            type="button"
            onClick={refresh}
            className="text-slate-500 hover:text-white transition-colors">

            <RefreshCw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
      <div className="relative h-28 bg-black rounded-lg overflow-hidden mb-3">
        <img
          src={animal.image}
          alt="Captcha"
          className={`w-full h-full object-cover transition-all duration-300 ${showImage ? 'blur-0' : 'blur-xl'}`} />

        <button
          type="button"
          onClick={() => setShowImage((p) => !p)}
          className="absolute bottom-2 right-2 p-1.5 bg-black/50 rounded-lg text-white hover:bg-black/70 transition-colors">

          {showImage ?
          <EyeOff className="w-3.5 h-3.5" /> :

          <Eye className="w-3.5 h-3.5" />
          }
        </button>
        {verified &&
        <div className="absolute inset-0 bg-green-500/20 flex items-center justify-center">
            <span className="text-green-400 font-bold text-sm">
              ✓ Terverifikasi
            </span>
          </div>
        }
      </div>
      {!verified &&
      <div className="flex gap-2">
          <input
          type="text"
          placeholder="Ketik nama hewan (Indonesia)"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleVerify()}
          className={`flex-1 bg-white/10 border rounded-lg py-2 px-3 text-white text-sm placeholder:text-slate-500 focus:outline-none focus:border-[#063aa4] ${wrong ? 'border-red-500' : 'border-white/20'}`} />

          <button
          type="button"
          onClick={handleVerify}
          className="px-4 py-2 bg-white/10 text-white text-sm font-medium rounded-lg hover:bg-white/20 transition-colors">

            Verify
          </button>
        </div>
      }
      {wrong &&
      <p className="text-red-400 text-xs mt-1">Jawaban salah. Coba lagi.</p>
      }
    </div>);

}
// ── Register Modal ────────────────────────────────────────────────────────────
export function RegisterModal({ isOpen, onClose, onSwitch }: ModalProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [captchaInput, setCaptchaInput] = useState('');
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setEmail(val);
    if (
    val.includes('@gmail.com') ||
    val.includes('@yahoo.com') ||
    val.includes('@hotmail.com'))
    {
      setEmailError('Gunakan email bisnis. Email pribadi tidak diterima.');
    } else {
      setEmailError('');
    }
  };
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setPassword(val);
    setPasswordError(val ? validatePassword(val) : '');
  };
  const isFormValid =
  email && !emailError && !passwordError && password && captchaVerified;
  return (
    <AnimatePresence>
      {isOpen &&
      <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
          <motion.div
          initial={{
            opacity: 0
          }}
          animate={{
            opacity: 1
          }}
          exit={{
            opacity: 0
          }}
          onClick={onClose}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

          <motion.div
          initial={{
            opacity: 0,
            scale: 0.95,
            y: 20
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0
          }}
          exit={{
            opacity: 0,
            scale: 0.95,
            y: 20
          }}
          className="relative w-full max-w-md bg-[#0a1640] rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">

            <div className="p-6 pb-0 flex justify-between items-start">
              <img
              src={NEW_LOGO}
              alt="Immenzo"
              className="h-8 w-auto brightness-0 invert" />

              <button
              onClick={onClose}
              className="text-white/50 hover:text-white transition-colors">

                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 overflow-y-auto">
              <h2 className="text-2xl font-bold text-white mb-6">Buat Akun</h2>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Nama Lengkap <span className="text-red-500">*</span>
                  </label>
                  <input
                  type="text"
                  placeholder="Nama Lengkap"
                  className="w-full bg-white/10 border border-white/20 rounded-xl py-3 px-4 text-white placeholder:text-slate-400 focus:outline-none focus:border-[#063aa4] transition-colors" />

                </div>
                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Nama Bisnis <span className="text-red-500">*</span>
                  </label>
                  <input
                  type="text"
                  placeholder="Nama Bisnis"
                  className="w-full bg-white/10 border border-white/20 rounded-xl py-3 px-4 text-white placeholder:text-slate-400 focus:outline-none focus:border-[#063aa4] transition-colors" />

                </div>
                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                  placeholder="nama@company.com"
                  className={`w-full bg-white/10 border rounded-xl py-3 px-4 text-white placeholder:text-slate-400 focus:outline-none transition-colors ${emailError ? 'border-red-500' : 'border-white/20 focus:border-[#063aa4]'}`} />

                  {emailError &&
                <p className="text-red-400 text-xs mt-1">{emailError}</p>
                }
                </div>
                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Nomor Telepon <span className="text-red-500">*</span>
                  </label>
                  <div className="flex">
                    <div className="bg-white/10 border border-white/20 border-r-0 rounded-l-xl px-3 flex items-center gap-2">
                      <span className="text-lg">🇮🇩</span>
                      <span className="text-white text-sm font-medium">ID</span>
                    </div>
                    <input
                    type="tel"
                    placeholder="+62 8156111355"
                    className="w-full bg-white/10 border border-white/20 rounded-r-xl py-3 px-4 text-white placeholder:text-slate-400 focus:outline-none focus:border-[#063aa4] transition-colors" />

                  </div>
                </div>
                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Kata Sandi <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={handlePasswordChange}
                    placeholder="Min. 8 karakter, 2 huruf kapital, 1 simbol"
                    className={`w-full bg-white/10 border rounded-xl py-3 px-4 text-white placeholder:text-slate-400 focus:outline-none transition-colors pr-10 ${passwordError ? 'border-red-500' : 'border-white/20 focus:border-[#063aa4]'}`} />

                    <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white">

                      {showPassword ?
                    <EyeOff className="w-4 h-4" /> :

                    <Eye className="w-4 h-4" />
                    }
                    </button>
                  </div>
                  {passwordError &&
                <p className="text-red-400 text-xs mt-1">{passwordError}</p>
                }
                  {!passwordError && password &&
                <p className="text-green-400 text-xs mt-1">
                      ✓ Kata sandi kuat
                    </p>
                }
                </div>
                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Konfirmasi Kata Sandi{' '}
                    <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    placeholder="Masukkan ulang kata sandi"
                    className="w-full bg-white/10 border border-white/20 rounded-xl py-3 px-4 text-white placeholder:text-slate-400 focus:outline-none focus:border-[#063aa4] transition-colors pr-10" />

                    <button
                    type="button"
                    onClick={() =>
                    setShowConfirmPassword(!showConfirmPassword)
                    }
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white">

                      {showConfirmPassword ?
                    <EyeOff className="w-4 h-4" /> :

                    <Eye className="w-4 h-4" />
                    }
                    </button>
                  </div>
                </div>
                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Kode Referral (Opsional)
                  </label>
                  <input
                  type="text"
                  placeholder="Masukkan kode referral"
                  className="w-full bg-white/10 border border-white/20 rounded-xl py-3 px-4 text-white placeholder:text-slate-400 focus:outline-none focus:border-[#063aa4] transition-colors" />

                </div>

                <AnimalCaptcha
                value={captchaInput}
                onChange={setCaptchaInput}
                verified={captchaVerified}
                onVerify={() => setCaptchaVerified(true)} />


                <button
                disabled={!isFormValid}
                className={`w-full py-4 rounded-full font-bold text-white transition-all mt-4 ${isFormValid ? 'bg-[#063aa4] hover:bg-[#052e83] shadow-lg shadow-[#063aa4]/20' : 'bg-[#063aa4]/40 cursor-not-allowed'}`}>

                  BUAT AKUN
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      }
    </AnimatePresence>);

}
// ── Sign In Modal ─────────────────────────────────────────────────────────────
export function SignInModal({ isOpen, onClose, onSwitch }: ModalProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [captchaInput, setCaptchaInput] = useState('');
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setEmail(val);
    if (
    val && (
    val.includes('@gmail.com') ||
    val.includes('@yahoo.com') ||
    val.includes('@hotmail.com')))
    {
      setEmailError('Gunakan email bisnis.');
    } else {
      setEmailError('');
    }
  };
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setPassword(val);
    setPasswordError(val ? validatePassword(val) : '');
  };
  const canSubmit =
  email && !emailError && password && !passwordError && captchaVerified;
  return (
    <AnimatePresence>
      {isOpen &&
      <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
          <motion.div
          initial={{
            opacity: 0
          }}
          animate={{
            opacity: 1
          }}
          exit={{
            opacity: 0
          }}
          onClick={onClose}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

          <motion.div
          initial={{
            opacity: 0,
            scale: 0.95,
            y: 20
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0
          }}
          exit={{
            opacity: 0,
            scale: 0.95,
            y: 20
          }}
          className="relative w-full max-w-sm bg-white rounded-2xl shadow-2xl overflow-hidden p-8">

            <div className="flex justify-center mb-6">
              <img src={NEW_LOGO_BLUE} alt="Immenzo" className="h-10 w-auto" />
            </div>

            <button
            onClick={onClose}
            className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors">

              <X className="w-5 h-5" />
            </button>

            <h2 className="text-2xl font-bold text-slate-900 text-center mb-1">
              Login ke Immenzo
            </h2>
            <p className="text-slate-500 text-center text-sm mb-6">
              Akses dashboard dan fitur eksklusif Anda
            </p>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-slate-700 text-sm font-bold mb-2">
                  Email
                </label>
                <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="nama@company.com"
                className={`w-full border rounded-xl py-3 px-4 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#063aa4]/20 focus:border-[#063aa4] transition-all ${emailError ? 'border-red-400' : 'border-slate-200'}`} />

                {emailError &&
              <p className="text-red-500 text-xs mt-1">{emailError}</p>
              }
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="block text-slate-700 text-sm font-bold">
                    Kata Sandi
                  </label>
                  <a
                  href="#"
                  className="text-sm text-[#063aa4] font-bold hover:underline">

                    Lupa kata sandi?
                  </a>
                </div>
                <div className="relative">
                  <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={handlePasswordChange}
                  placeholder="Masukkan kata sandi"
                  className={`w-full border rounded-xl py-3 px-4 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#063aa4]/20 focus:border-[#063aa4] transition-all pr-10 ${passwordError ? 'border-red-400' : 'border-slate-200'}`} />

                  <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600">

                    {showPassword ?
                  <EyeOff className="w-4 h-4" /> :

                  <Eye className="w-4 h-4" />
                  }
                  </button>
                </div>
                {passwordError &&
              <p className="text-red-500 text-xs mt-1">{passwordError}</p>
              }
              </div>

              {/* Animal Captcha for login too */}
              <AnimalCaptcha
              value={captchaInput}
              onChange={setCaptchaInput}
              verified={captchaVerified}
              onVerify={() => setCaptchaVerified(true)} />


              <button
              disabled={!canSubmit}
              className={`w-full py-3 font-bold rounded-xl transition-colors shadow-lg shadow-[#063aa4]/20 ${canSubmit ? 'bg-[#063aa4] text-white hover:bg-[#052e83]' : 'bg-[#063aa4]/40 text-white/70 cursor-not-allowed'}`}>

                Masuk
              </button>
            </form>
          </motion.div>
        </div>
      }
    </AnimatePresence>);

}