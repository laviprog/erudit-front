import ContactForm from '@/components/form/ContactForm';

export default function Contact() {
  return (
    <section className="flex items-center h-screen">
      <div id='contact-form' className="lg:scroll-mt-21 md:scroll-mt-18 scroll-mt-16 sm:bg-white/97 rounded-4xl w-full sm:h-[90%] flex justify-center">
        <ContactForm />
      </div>
    </section>
  );
}
