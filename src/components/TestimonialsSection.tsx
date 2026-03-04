import { TESTIMONIALS } from '@/lib/constants';

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-brand-black">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <p className="section-subheading">Customer Reviews</p>
          <h2 className="section-heading">
            What Our Clients Say
          </h2>
          <div className="gold-divider" />
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="flex text-brand-gold text-xl">{'★★★★★'}</div>
            <span className="text-gray-300 font-semibold">5.0 / 5.0</span>
            <span className="text-gray-500 text-sm">(47 Google Reviews)</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              className="card-dark relative"
              itemScope
              itemType="https://schema.org/Review"
            >
              <div className="flex text-brand-gold text-lg mb-3" aria-label={`${t.rating} out of 5 stars`}>
                {'★'.repeat(t.rating)}
              </div>
              <p
                className="text-gray-300 text-sm leading-relaxed mb-4 italic"
                itemProp="reviewBody"
              >
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center justify-between pt-3 border-t border-brand-gray">
                <div>
                  <p
                    className="text-brand-white font-semibold text-sm"
                    itemProp="author"
                    itemScope
                    itemType="https://schema.org/Person"
                  >
                    <span itemProp="name">{t.name}</span>
                  </p>
                  <p className="text-gray-500 text-xs">{t.location}</p>
                </div>
                <span className="text-xs text-brand-gold bg-brand-gold/10 px-2 py-1 rounded-full border border-brand-gold/20">
                  {t.service}
                </span>
              </div>
              <div
                className="absolute top-4 right-4 text-brand-gold/20 text-5xl font-serif leading-none"
                aria-hidden="true"
              >
                &ldquo;
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-gray-400 text-sm mb-4">
            Join hundreds of satisfied customers across Warrington and beyond
          </p>
          <a
            href="https://g.page/r/wcdcardetailing/review"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            Leave a Google Review
          </a>
        </div>
      </div>
    </section>
  );
}
