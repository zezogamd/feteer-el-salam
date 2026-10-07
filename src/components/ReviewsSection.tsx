import React, { useState } from 'react';
import { Star, MessageSquarePlus, CheckCircle, Quote, ThumbsUp } from 'lucide-react';
import { CUSTOMER_REVIEWS, RESTAURANT_INFO } from '../data/restaurantData';
import { Review } from '../types';

export const ReviewsSection: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>(CUSTOMER_REVIEWS);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newRating, setNewRating] = useState(5);
  const [newName, setNewName] = useState('');
  const [newComment, setNewComment] = useState('');
  const [submittedMessage, setSubmittedMessage] = useState(false);

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName.trim() || !newComment.trim()) return;

    const newRev: Review = {
      id: `rev-${Date.now()}`,
      name: newName.trim(),
      rating: newRating,
      comment: newComment.trim(),
      date: 'الآن',
      verified: true,
    };

    setReviews([newRev, ...reviews]);
    setNewName('');
    setNewComment('');
    setSubmittedMessage(true);

    setTimeout(() => {
      setSubmittedMessage(false);
      setShowAddModal(false);
    }, 1500);
  };

  return (
    <section id="reviews" className="relative bg-[#121212] py-16 lg:py-24 border-b border-zinc-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="text-right space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-950/40 px-3.5 py-1 text-xs font-bold text-amber-300">
              <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
              <span>تقييمات وتجارب حقيقية</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              آراء زبائننا في بهتيم وشبرا الخيمة
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 max-w-2xl">
              ثقة أهالي منطقتنا هي أكبر مكسب لنا، وشهاداتكم فخر يدفعنا لتقديم الأفضل دائماً.
            </p>
          </div>

          {/* Aggregate Rating Scoreboard */}
          <div className="flex items-center gap-4 rounded-2xl border border-zinc-800 bg-zinc-900/80 p-4 sm:p-5 shrink-0">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-amber-400 text-black font-black text-2xl font-mono">
              {RESTAURANT_INFO.rating}
            </div>
            <div className="text-right">
              <div className="flex items-center gap-1 text-amber-400 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < 4
                        ? 'fill-amber-400 text-amber-400'
                        : i === 4
                        ? 'fill-amber-400/50 text-amber-400'
                        : 'text-zinc-600'
                    }`}
                  />
                ))}
              </div>
              <p className="text-xs font-semibold text-zinc-200">
                تقييم عام ممتاز
              </p>
              <p className="text-[11px] text-zinc-400">
                بناءً على {RESTAURANT_INFO.reviewCount} تقييم حقيقي في جوجل
              </p>
            </div>
          </div>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="relative flex flex-col justify-between rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 sm:p-7 transition-all duration-300 hover:border-zinc-700 hover:bg-zinc-900 hover:shadow-lg hover:shadow-black/40"
            >
              <Quote className="absolute top-5 left-5 h-8 w-8 text-zinc-800/80" />

              <div className="space-y-4">
                {/* Rating stars */}
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < Math.floor(rev.rating)
                          ? 'fill-amber-400 text-amber-400'
                          : 'text-zinc-700'
                      }`}
                    />
                  ))}
                  <span className="text-xs font-bold text-zinc-400 mr-1.5 font-mono">
                    {rev.rating} / 5
                  </span>
                </div>

                {/* Review Text */}
                <p className="text-sm leading-relaxed text-zinc-200 font-medium">
                  "{rev.comment}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-6 border-t border-zinc-800/80 mt-6 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-white">{rev.name}</h4>
                  <span className="text-[11px] text-zinc-500">{rev.date}</span>
                </div>
                {rev.verified && (
                  <span className="flex items-center gap-1 text-[11px] font-semibold text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded-md border border-emerald-800/40">
                    <CheckCircle className="h-3 w-3" /> زبون معتمد
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Action to add review */}
        <div className="mt-10 text-center">
          <button
            type="button"
            onClick={() => setShowAddModal(true)}
            className="inline-flex items-center gap-2 rounded-xl border border-zinc-700 bg-zinc-900 px-6 py-3 text-xs sm:text-sm font-bold text-zinc-200 hover:border-amber-500 hover:text-amber-400 transition-colors"
          >
            <MessageSquarePlus className="h-4 w-4" />
            <span>شاركنا تجربتك برأي جديد</span>
          </button>
        </div>

        {/* Modal: Add Review */}
        {showAddModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
            <div className="relative w-full max-w-md rounded-2xl border border-zinc-800 bg-[#18181b] p-6 text-right shadow-2xl animate-in fade-in zoom-in-95 duration-150">
              <h3 className="text-lg font-black text-white mb-2">
                أضف تقييمك لمطعم بيتزا فطائر السلام
              </h3>
              <p className="text-xs text-zinc-400 mb-5">
                رأيك يساعدنا في تحسين وتطوير خدماتنا وطعامنا باستمرار.
              </p>

              {submittedMessage ? (
                <div className="rounded-xl bg-emerald-950/60 border border-emerald-700/50 p-6 text-center text-emerald-300">
                  <CheckCircle className="h-10 w-10 text-emerald-400 mx-auto mb-2" />
                  <p className="font-bold text-sm">شكراً لك! تم إضافة تقييمك بنجاح.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmitReview} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-zinc-300 mb-1.5">
                      التقييم:
                    </label>
                    <div className="flex items-center gap-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setNewRating(star)}
                          className="p-1 focus:outline-none"
                        >
                          <Star
                            className={`h-7 w-7 transition-colors ${
                              star <= newRating
                                ? 'fill-amber-400 text-amber-400'
                                : 'text-zinc-700 hover:text-zinc-500'
                            }`}
                          />
                        </button>
                      ))}
                      <span className="text-xs font-bold text-amber-400 mr-2 font-mono">
                        {newRating} من 5
                      </span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-zinc-300 mb-1.5">
                      اسمك الكريم:
                    </label>
                    <input
                      type="text"
                      required
                      value={newName}
                      onChange={(e) => setNewName(e.target.value)}
                      placeholder="مثال: محمد علي"
                      className="w-full rounded-xl border border-zinc-700 bg-zinc-900 px-3.5 py-2.5 text-sm text-white placeholder-zinc-500 focus:border-red-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-zinc-300 mb-1.5">
                      رأيك في الطعام والخدمة:
                    </label>
                    <textarea
                      required
                      rows={3}
                      value={newComment}
                      onChange={(e) => setNewComment(e.target.value)}
                      placeholder="اكتب تجربتك مع البيتزا أو الفطير وسرعة التوصيل..."
                      className="w-full rounded-xl border border-zinc-700 bg-zinc-900 px-3.5 py-2.5 text-sm text-white placeholder-zinc-500 focus:border-red-500 focus:outline-none resize-none"
                    />
                  </div>

                  <div className="flex items-center justify-end gap-3 pt-3">
                    <button
                      type="button"
                      onClick={() => setShowAddModal(false)}
                      className="rounded-xl border border-zinc-700 px-4 py-2 text-xs font-bold text-zinc-400 hover:text-white"
                    >
                      إلغاء
                    </button>
                    <button
                      type="submit"
                      className="rounded-xl bg-red-700 px-5 py-2 text-xs font-bold text-white hover:bg-red-600 transition-colors shadow-md"
                    >
                      نشر التقييم
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
