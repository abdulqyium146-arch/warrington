import BookingForm from '@/components/booking-form/BookingForm';

export default function BookingSection() {
  return (
    <section className="bg-brand-darkgray border-t border-brand-gray/50 py-16 px-4">
      <div className="mx-auto max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Left — copy */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold mb-3">
              Book a Service
            </p>
            <h2 className="font-heading text-3xl font-bold text-brand-white leading-tight">
              Request a Free Callback
            </h2>
            <p className="mt-4 text-gray-400 leading-relaxed">
              Leave your name and number and we&apos;ll call you back within a few hours to
              arrange your appointment. No payment needed upfront.
            </p>

            <div className="mt-8 space-y-4">
              {[
                { icon: '📞', title: 'We call you back', desc: 'Usually within a few hours' },
                { icon: '📍', title: 'We come to you', desc: 'Home, work, or anywhere in Warrington' },
                { icon: '✓', title: 'No obligation', desc: 'Free quote, no pressure' },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-3">
                  <span className="text-brand-gold text-lg leading-none mt-0.5">{item.icon}</span>
                  <div>
                    <p className="text-sm font-semibold text-brand-white">{item.title}</p>
                    <p className="text-xs text-gray-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t border-brand-gray/50">
              <p className="text-xs text-gray-500 mb-1">Prefer to call directly?</p>
              <a
                href="tel:07375759686"
                className="text-brand-gold font-semibold text-lg hover:text-brand-gold-light transition-colors"
              >
                07375 759686
              </a>
            </div>
          </div>

          {/* Right — form */}
          <div className="rounded-xl border border-brand-gray/50 bg-brand-black p-6 sm:p-8">
            <BookingForm />
          </div>

        </div>
      </div>
    </section>
  );
}
