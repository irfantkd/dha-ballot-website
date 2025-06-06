import { Clock, Calendar, AlertCircle } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function CountdownTimerSection() {
  // Define the ballot end date in UTC
  // Example: PKT (UTC+5) 23:59:59 on 2025-07-15 is 18:59:59 UTC on 2025-07-15
  const ballotEndDate = new Date('2025-07-15T18:59:59Z').getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [isExpired, setIsExpired] = useState(false);
  const [localTimezone, setLocalTimezone] = useState('');

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = ballotEndDate - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
        setIsExpired(false);
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        setIsExpired(true);
      }
    }, 1000);

    // Get user's local timezone
    try {
      setLocalTimezone(
        Intl.DateTimeFormat().resolvedOptions().timeZone || 'Your Local Time'
      );
    } catch (e) {
      console.error('Could not determine local timezone:', e);
      setLocalTimezone('Your Local Time');
    }

    return () => clearInterval(timer);
  }, [ballotEndDate]);

  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      timeZoneName: 'short', // This is the key addition!
    });
  };

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-950 py-16">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.2'%3E%3Cpath d='M30 0L60 30L30 60L0 30z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <div className="rounded-full border border-white/20 bg-white/10 p-3 shadow-lg">
              <Clock className="h-8 w-8 text-white" />
            </div>
            <h2
              className="text-3xl font-extrabold tracking-tight text-white md:text-4xl lg:text-5xl"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Exclusive Ballot Registration
            </h2>
          </div>
          <p
            className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-300 md:text-xl"
            style={{ fontFamily: 'Roboto, sans-serif' }}
          >
            Seize this unparalleled opportunity to register for DHA Bahawalpur's
            premier residential plots. Time is running out to secure your future
            in Pakistan's most sought-after community.
          </p>
        </div>

        {/* Countdown Display */}
        {!isExpired ? (
          <div className="mb-12">
            <div className="mx-auto grid max-w-5xl grid-cols-2 gap-4 md:grid-cols-4 md:gap-8">
              {/* Days */}
              <div className="transform rounded-2xl border border-gray-700 bg-gray-800/60 p-6 text-center shadow-xl backdrop-blur-xl transition-transform duration-300 ease-in-out hover:scale-105 md:p-8">
                <div
                  className="mb-2 text-5xl font-extrabold text-white drop-shadow-md md:text-6xl lg:text-7xl"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {timeLeft.days.toString().padStart(2, '0')}
                </div>
                <div
                  className="text-sm font-semibold uppercase tracking-widest text-gray-300 md:text-base"
                  style={{ fontFamily: 'Roboto, sans-serif' }}
                >
                  Days
                </div>
              </div>

              {/* Hours */}
              <div className="transform rounded-2xl border border-gray-700 bg-gray-800/60 p-6 text-center shadow-xl backdrop-blur-xl transition-transform duration-300 ease-in-out hover:scale-105 md:p-8">
                <div
                  className="mb-2 text-5xl font-extrabold text-white drop-shadow-md md:text-6xl lg:text-7xl"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {timeLeft.hours.toString().padStart(2, '0')}
                </div>
                <div
                  className="text-sm font-semibold uppercase tracking-widest text-gray-300 md:text-base"
                  style={{ fontFamily: 'Roboto, sans-serif' }}
                >
                  Hours
                </div>
              </div>

              {/* Minutes */}
              <div className="transform rounded-2xl border border-gray-700 bg-gray-800/60 p-6 text-center shadow-xl backdrop-blur-xl transition-transform duration-300 ease-in-out hover:scale-105 md:p-8">
                <div
                  className="mb-2 text-5xl font-extrabold text-white drop-shadow-md md:text-6xl lg:text-7xl"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {timeLeft.minutes.toString().padStart(2, '0')}
                </div>
                <div
                  className="text-sm font-semibold uppercase tracking-widest text-gray-300 md:text-base"
                  style={{ fontFamily: 'Roboto, sans-serif' }}
                >
                  Minutes
                </div>
              </div>

              {/* Seconds */}
              <div className="transform rounded-2xl border border-gray-700 bg-gray-800/60 p-6 text-center shadow-xl backdrop-blur-xl transition-transform duration-300 ease-in-out hover:scale-105 md:p-8">
                <div
                  className="mb-2 text-5xl font-extrabold text-white drop-shadow-md md:text-6xl lg:text-7xl"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {timeLeft.seconds.toString().padStart(2, '0')}
                </div>
                <div
                  className="text-sm font-semibold uppercase tracking-widest text-gray-300 md:text-base"
                  style={{ fontFamily: 'Roboto, sans-serif' }}
                >
                  Seconds
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Expired State */
          <div className="mb-12 text-center">
            <div className="mx-auto max-w-2xl rounded-2xl border border-gray-700 bg-gray-800/60 p-8 shadow-xl backdrop-blur-xl">
              <AlertCircle className="mx-auto mb-4 h-16 w-16 animate-pulse text-yellow-400" />
              <h3
                className="mb-2 text-2xl font-bold text-white md:text-3xl"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Registration Period Has Concluded
              </h3>
              <p
                className="leading-relaxed text-gray-300"
                style={{ fontFamily: 'Roboto, sans-serif' }}
              >
                Thank you for your interest. The ballot registration period has
                now closed. Please stay connected for announcements regarding
                future opportunities.
              </p>
            </div>
          </div>
        )}

        {/* End Date Info */}
        <div className="mb-8 text-center">
          <div className="mx-auto max-w-2xl rounded-xl border border-gray-700 bg-gray-800/30 p-6 shadow-lg backdrop-blur-md">
            <div className="mb-2 flex items-center justify-center gap-2">
              <Calendar className="h-5 w-5 text-gray-400" />
              <span
                className="font-medium tracking-wide text-gray-300"
                style={{ fontFamily: 'Roboto, sans-serif' }}
              >
                Official Registration Deadline
              </span>
            </div>
            <p
              className="text-lg font-bold text-white md:text-xl"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              {formatDate(ballotEndDate)}
            </p>
            {localTimezone && (
              <p
                className="mt-1 text-sm text-gray-400"
                style={{ fontFamily: 'Roboto, sans-serif' }}
              >
                Displayed in your local time: {localTimezone}
              </p>
            )}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <button
            className="transform rounded-full bg-red-600 px-10 py-4 text-lg font-bold text-white shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-500 focus:ring-opacity-50 md:text-xl"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Register for Ballot Now
          </button>
          <p
            className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-gray-300"
            style={{ fontFamily: 'Roboto, sans-serif' }}
          >
            This is your golden opportunity to secure a prime plot in Pakistan's
            most prestigious residential development. Don't miss out!
          </p>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute left-0 top-0 h-32 w-32 -translate-x-16 -translate-y-16 rounded-full bg-white/5 blur-xl" />
      <div className="absolute bottom-0 right-0 h-48 w-48 translate-x-24 translate-y-24 rounded-full bg-white/5 blur-xl" />
      <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-600/10 blur-3xl" />
    </section>
  );
}
