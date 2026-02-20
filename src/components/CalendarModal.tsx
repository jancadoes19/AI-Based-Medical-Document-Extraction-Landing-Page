import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  ChevronLeft,
  ChevronRight,
  Calendar,
  CheckCircle } from
'lucide-react';
interface CalendarModalProps {
  isOpen: boolean;
  onClose: () => void;
}
export function CalendarModal({ isOpen, onClose }: CalendarModalProps) {
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [booked, setBooked] = useState(false);
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const dates = Array.from(
    {
      length: 31
    },
    (_, i) => i + 1
  );
  const timeSlots = [
  '09:00',
  '10:00',
  '11:00',
  '13:00',
  '14:00',
  '15:00',
  '16:00'];

  const handleConfirm = () => {
    if (!selectedDate || !selectedTime) return;
    const [hour, minute] = selectedTime.split(':').map(Number);
    // February 2026
    const start = new Date(2026, 1, selectedDate, hour, minute, 0);
    const end = new Date(2026, 1, selectedDate, hour + 1, minute, 0);
    const fmt = (d: Date) =>
    d.getFullYear().toString() +
    String(d.getMonth() + 1).padStart(2, '0') +
    String(d.getDate()).padStart(2, '0') +
    'T' +
    String(d.getHours()).padStart(2, '0') +
    String(d.getMinutes()).padStart(2, '0') +
    '00';
    const params = new URLSearchParams({
      action: 'TEMPLATE',
      text: 'Immenzo Demo Call',
      dates: `${fmt(start)}/${fmt(end)}`,
      details:
      'Your demo call with the Immenzo team. We look forward to showing you how Immenzo can transform your document workflows.',
      location: 'Google Meet (link will be shared)'
    });
    window.open(
      `https://calendar.google.com/calendar/render?${params.toString()}`,
      '_blank'
    );
    setBooked(true);
  };
  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setBooked(false);
      setSelectedDate(null);
      setSelectedTime(null);
    }, 300);
  };
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
          onClick={handleClose}
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
          className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden p-8">

            <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors">

              <X className="w-6 h-6" />
            </button>

            {booked /* ── Success state ── */ ?
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.95
            }}
            animate={{
              opacity: 1,
              scale: 1
            }}
            className="flex flex-col items-center text-center py-8">

                <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mb-5">
                  <CheckCircle className="w-8 h-8 text-green-500" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 mb-2">
                  Booking Confirmed!
                </h2>
                <p className="text-slate-500 text-sm mb-2">
                  Your demo is scheduled for{' '}
                  <span className="font-semibold text-slate-700">
                    February {selectedDate}, 2026 at {selectedTime}
                  </span>
                  .
                </p>
                <p className="text-slate-400 text-xs mb-8">
                  Google Calendar opened in a new tab — add the event to save it
                  to your calendar.
                </p>
                <button
              onClick={handleClose}
              className="px-8 py-3 bg-[#063aa4] text-white font-bold rounded-xl hover:bg-[#052e83] transition-colors">

                  Done
                </button>
              </motion.div> :

          <>
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-slate-900 mb-2">
                    Book a Demo
                  </h2>
                  <p className="text-slate-500 text-sm">
                    Choose a time that works for you. We'll send calendar
                    invites to both parties.
                  </p>
                </div>

                {/* Calendar Header */}
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-bold text-slate-900 text-lg">
                    February 2026
                  </h3>
                  <div className="flex gap-2">
                    <button className="p-1 hover:bg-slate-100 rounded-full transition-colors">
                      <ChevronLeft className="w-5 h-5 text-slate-600" />
                    </button>
                    <button className="p-1 hover:bg-slate-100 rounded-full transition-colors">
                      <ChevronRight className="w-5 h-5 text-slate-600" />
                    </button>
                  </div>
                </div>

                {/* Calendar Grid */}
                <div className="grid grid-cols-7 gap-2 mb-8 text-center">
                  {days.map((day) =>
              <div
                key={day}
                className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">

                      {day}
                    </div>
              )}
                  <div />
                  <div />
                  {dates.map((date) =>
              <button
                key={date}
                onClick={() => setSelectedDate(date)}
                className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-all mx-auto
                        ${selectedDate === date ? 'bg-[#063aa4] text-white shadow-md' : 'text-slate-700 hover:bg-slate-100'}
                        ${date < 15 ? 'opacity-30 cursor-not-allowed' : ''}
                      `}
                disabled={date < 15}>

                      {date}
                    </button>
              )}
                </div>

                {/* Time Slots */}
                <div className="mb-8">
                  <h4 className="text-sm font-bold text-slate-900 mb-3">
                    Available Times
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {timeSlots.map((time) =>
                <button
                  key={time}
                  onClick={() => setSelectedTime(time)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all border
                          ${selectedTime === time ? 'bg-[#063aa4] text-white border-[#063aa4]' : 'bg-white text-slate-600 border-slate-200 hover:border-[#063aa4] hover:text-[#063aa4]'}
                        `}>

                        {time}
                      </button>
                )}
                  </div>
                </div>

                <button
              onClick={handleConfirm}
              disabled={!selectedDate || !selectedTime}
              className={`w-full py-4 rounded-xl font-bold text-white transition-all flex items-center justify-center gap-2
                    ${selectedDate && selectedTime ? 'bg-[#063aa4] hover:bg-[#052e83] shadow-lg shadow-[#063aa4]/20' : 'bg-slate-200 cursor-not-allowed text-slate-400'}
                  `}>

                  <Calendar className="w-5 h-5" />
                  Confirm Booking
                </button>

                <p className="text-center text-xs text-slate-400 mt-4">
                  A Google Calendar invite will be sent to your email.
                </p>
              </>
          }
          </motion.div>
        </div>
      }
    </AnimatePresence>);

}