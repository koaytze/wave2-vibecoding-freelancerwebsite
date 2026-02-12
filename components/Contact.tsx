
import React, { useState } from 'react';
import { ContactFormData } from '../types';

const SERVICE_OPTIONS = [
  'Website Development',
  'Web App Development',
  'API Integration',
  'Technical Consultation'
];

const WEBHOOK_URL = 'https://script.google.com/macros/s/AKfycbze_zcPrzlEhamgZbls1kNItEMUJi8hsSVl0XtL-U9NGFpKm0nOpo07RqSj_SELlxhd/exec';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
    services: [],
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<ContactFormData>>({});

  const validate = () => {
    const newErrors: Partial<ContactFormData> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleServiceChange = (service: string) => {
    setFormData(prev => {
      const isSelected = prev.services.includes(service);
      return {
        ...prev,
        services: isSelected 
          ? prev.services.filter(s => s !== service)
          : [...prev.services, service]
      };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    const servicesString = formData.services.length > 0 ? formData.services.join(', ') : 'None specified';

    // 1. Send data to Google Sheets Webhook
    try {
      await fetch(WEBHOOK_URL, {
        method: 'POST',
        mode: 'no-cors', // Essential for Google Apps Script Web Apps to avoid CORS preflight issues
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          services: servicesString,
          submittedAt: new Date().toLocaleString()
        }),
      });
    } catch (err) {
      console.error('Failed to log to sheets:', err);
    }

    // 2. Construct WhatsApp message
    const messageBody = `NEW INQUIRY\nName: ${formData.name}\nEmail: ${formData.email}\nServices: ${servicesString}\nMessage: ${formData.message}`;
    const encodedMessage = encodeURIComponent(messageBody);
    const whatsappUrl = `https://wa.me/60175708320?text=${encodedMessage}`;

    // 3. UI Feedback and Redirect
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      window.open(whatsappUrl, '_blank');
      setFormData({ name: '', email: '', message: '', services: [] });
    }, 800);
  };

  return (
    <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-red-900 rounded-[3rem] overflow-hidden relative shadow-2xl">
        {/* Background Accents */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-red-700/50 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-64 h-64 bg-rose-700/50 rounded-full blur-[80px]"></div>

        <div className="relative grid grid-cols-1 lg:grid-cols-2">
          {/* Left Content */}
          <div className="p-12 lg:p-20 flex flex-col justify-center">
            <h2 className="text-red-300 font-semibold uppercase tracking-wider mb-4">Let's Talk</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-white mb-8 tracking-tight leading-tight">
              Ready to start your <span className="text-red-300">next project?</span>
            </h3>
            <p className="text-lg text-red-100/80 mb-10 leading-relaxed max-w-md">
              Fill out the form to securely log your inquiry and open a WhatsApp chat. I'll get back to you immediately.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4 text-white">
                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-red-200 uppercase tracking-wide">Email Me</p>
                  <p className="text-lg font-semibold">hello@claritas.dev</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 text-white">
                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-red-200 uppercase tracking-wide">WhatsApp</p>
                  <p className="text-lg font-semibold">+60 17-570 8320</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="bg-white/5 backdrop-blur-sm border-l border-white/10 p-12 lg:p-20">
            {isSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center animate-in fade-in duration-500">
                <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4 className="text-3xl font-bold text-white mb-4">Inquiry Logged!</h4>
                <p className="text-red-100 text-lg">
                  Data sent to Google Sheets. WhatsApp should be opening now...
                </p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="mt-8 text-red-300 font-semibold hover:text-white transition-colors underline"
                >
                  Back to form
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-red-100 mb-2">Your Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full bg-white/10 border ${errors.name ? 'border-red-400' : 'border-white/20'} rounded-xl px-4 py-3.5 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all`}
                      placeholder="John Doe"
                    />
                    {errors.name && <p className="mt-1 text-sm text-red-300">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-red-100 mb-2">Email Address</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full bg-white/10 border ${errors.email ? 'border-red-400' : 'border-white/20'} rounded-xl px-4 py-3.5 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all`}
                      placeholder="john@company.com"
                    />
                    {errors.email && <p className="mt-1 text-sm text-red-300">{errors.email}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-red-100 mb-3">Services Needed</label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {SERVICE_OPTIONS.map((service) => (
                      <label key={service} className="flex items-center space-x-3 cursor-pointer group">
                        <div className="relative flex items-center">
                          <input
                            type="checkbox"
                            checked={formData.services.includes(service)}
                            onChange={() => handleServiceChange(service)}
                            className="w-5 h-5 rounded border-white/20 bg-white/10 text-red-600 focus:ring-red-500 focus:ring-offset-red-900 transition-all cursor-pointer appearance-none checked:bg-red-500 checked:border-transparent border-2"
                          />
                          {formData.services.includes(service) && (
                            <svg className="absolute w-3.5 h-3.5 text-white left-0.5 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" /></svg>
                          )}
                        </div>
                        <span className="text-red-100 text-sm group-hover:text-white transition-colors">{service}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-red-100 mb-2">How can I help?</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`w-full bg-white/10 border ${errors.message ? 'border-red-400' : 'border-white/20'} rounded-xl px-4 py-3.5 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all resize-none`}
                    placeholder="Tell me about your goals, timeline, and requirements..."
                  />
                  {errors.message && <p className="mt-1 text-sm text-red-300">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-red-600 hover:bg-red-500 text-white font-bold py-4 rounded-xl shadow-lg shadow-red-900/40 transition-all transform active:scale-[0.98] disabled:opacity-70 flex items-center justify-center space-x-3"
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Submitting Inquiry...
                    </span>
                  ) : (
                    <>
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.659 1.437 5.63 1.438h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                      <span>Submit & WhatsApp</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
