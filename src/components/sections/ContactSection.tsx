// src/components/sections/ContactSection.tsx
import React, { useState } from 'react';
import { SectionWrapper } from '../ui/SectionWrapper';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion } from 'motion/react';
import { Send, Mail, MapPin, Linkedin, Github, CheckCircle2 } from 'lucide-react';
import { SOCIAL_URLS } from '../../lib/constants';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export const ContactSection: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setIsError(false);
    
    // Show alert before redirect
    alert("Opening WhatsApp to send your message...");

    try {
      // Build WhatsApp message
      const waMessage = encodeURIComponent(
        '🚀 New Portfolio Inquiry!' + '\n\n' +
        '👤 Name: ' + data.name + '\n' +
        '📧 Email: ' + data.email + '\n' +
        '📌 Subject: ' + data.subject + '\n\n' +
        '💬 Message:' + '\n' + data.message
      );
      
      // Open WhatsApp
      window.open('https://wa.me/923260023261?text=' + waMessage, '_blank');
      
      setIsSuccess(true);
      reset();
      alert('✅ Redirecting to WhatsApp!');
    } catch (error) {
      console.error("Submission error:", error);
      setIsError(true);
    } finally {
      setIsSubmitting(false);
      setTimeout(() => {
        setIsSuccess(false);
        setIsError(false);
      }, 5000);
    }
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'wajidmehmood074@gmail.com', href: SOCIAL_URLS.email },
    { icon: MapPin, label: 'Location', value: 'Islamabad, Pakistan', href: null },
  ];

  const socialLinks = [
    { icon: Linkedin, href: SOCIAL_URLS.linkedin, label: 'LinkedIn' },
    { icon: Github, href: SOCIAL_URLS.github, label: 'GitHub' },
  ];

  return (
    <SectionWrapper id="contact" className="bg-[#0D0D14]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        
        {/* Contact Info */}
        <div className="lg:col-span-5 space-y-12">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-[#F1F0FF] mb-6">
              Let's Build <span className="gradient-text">The Future</span>.
            </h2>
            <p className="text-[#A09DB8] text-lg leading-relaxed">
              Have a complex problem that needs an intelligent solution? 
              I'm always open to discussing new projects, ML research, or 
              on-device AI architecture.
            </p>
          </div>

          <div className="space-y-6">
            {contactInfo.map((info) => (
              <div key={info.label} className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-[#111118] border border-[#1E1E2E] flex items-center justify-center text-[#7C3AED] group-hover:border-[#7C3AED]/40 transition-colors">
                  <info.icon size={20} />
                </div>
                <div>
                  <div className="text-[10px] uppercase font-bold text-[#6B6880] tracking-widest">{info.label}</div>
                  {info.href ? (
                    <a href={info.href} className="text-lg font-bold text-[#F1F0FF] hover:text-[#7C3AED] transition-colors">
                      {info.value}
                    </a>
                  ) : (
                    <div className="text-lg font-bold text-[#F1F0FF]">{info.value}</div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-4">
            <div className="text-[10px] uppercase font-bold text-[#6B6880] tracking-widest">Connect with me</div>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-10 h-10 rounded-lg bg-[#111118] border border-[#1E1E2E] flex items-center justify-center text-[#6B6880] hover:text-[#F1F0FF] hover:border-[#7C3AED]/40 hover:scale-110 transition-all duration-300 relative overflow-hidden"
                  aria-label={social.label}
                  title={social.label}
                >
                  <social.icon size={20} className="relative z-10" />
                  <div className="absolute inset-0 bg-[#7C3AED] opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-300" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-7">
          <Card className="p-8 md:p-10 border-[#1E1E2E] bg-[#111118]">
            {isSuccess ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-12 text-center"
              >
                <div className="w-20 h-20 rounded-full bg-[#10B981]/10 border border-[#10B981]/30 flex items-center justify-center text-[#10B981] mb-6">
                  <CheckCircle2 size={40} />
                </div>
                <h3 className="text-2xl font-bold text-[#F1F0FF] mb-2">✅ Message Sent!</h3>
                <p className="text-[#6EE7B7] font-medium">I'll get back to you within 24 hours.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {isError && (
                  <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-500 text-sm font-medium mb-4">
                    ❌ Something went wrong. Please try again or contact me directly via email.
                  </div>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-[#6B6880] uppercase tracking-widest">Your Name</label>
                    <input
                      {...register('name')}
                      placeholder="John Doe"
                      className="w-full bg-[#0A0A0F] border border-[#2A2A3E] rounded-xl px-4 py-3 text-[#F1F0FF] placeholder:text-[#3D3A50] focus:border-[#7C3AED] focus:ring-1 focus:ring-[#7C3AED] transition-all outline-none"
                    />
                    {errors.name && <p className="text-[#EF4444] text-[10px] font-bold">{errors.name.message}</p>}
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-[#6B6880] uppercase tracking-widest">Email Address</label>
                    <input
                      {...register('email')}
                      placeholder="john@example.com"
                      className="w-full bg-[#0A0A0F] border border-[#2A2A3E] rounded-xl px-4 py-3 text-[#F1F0FF] placeholder:text-[#3D3A50] focus:border-[#7C3AED] focus:ring-1 focus:ring-[#7C3AED] transition-all outline-none"
                    />
                    {errors.email && <p className="text-[#EF4444] text-[10px] font-bold">{errors.email.message}</p>}
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-xs font-bold text-[#6B6880] uppercase tracking-widest">Subject</label>
                  <input
                    {...register('subject')}
                    placeholder="Project Inquiry"
                    className="w-full bg-[#0A0A0F] border border-[#2A2A3E] rounded-xl px-4 py-3 text-[#F1F0FF] placeholder:text-[#3D3A50] focus:border-[#7C3AED] focus:ring-1 focus:ring-[#7C3AED] transition-all outline-none"
                  />
                  {errors.subject && <p className="text-[#EF4444] text-[10px] font-bold">{errors.subject.message}</p>}
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-[#6B6880] uppercase tracking-widest">Message</label>
                  <textarea
                    {...register('message')}
                    rows={5}
                    placeholder="Tell me about your project or inquiry..."
                    className="w-full bg-[#0A0A0F] border border-[#2A2A3E] rounded-xl px-4 py-3 text-[#F1F0FF] placeholder:text-[#3D3A50] focus:border-[#7C3AED] focus:ring-1 focus:ring-[#7C3AED] transition-all outline-none resize-none"
                  />
                  {errors.message && <p className="text-[#EF4444] text-[10px] font-bold">{errors.message.message}</p>}
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full gap-2"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>Send Message <Send size={18} /></>
                  )}
                </Button>
              </form>
            )}
          </Card>
        </div>

      </div>
    </SectionWrapper>
  );
};

export default ContactSection;
