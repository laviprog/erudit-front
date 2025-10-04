import ContactForm from '@/components/form/ContactForm';
import Fade from '@/components/animations/Fade';

export default function Contact() {
  return (
    <section className="flex items-center h-screen">
      <div
        id="contact-form"
        className="flex items-center sm:justify-center lg:scroll-mt-21 md:scroll-mt-18 scroll-mt-16 sm:bg-white/97 rounded-4xl w-full sm:h-[90%]"
      >
        <Fade delay={200} className="max-sm:w-full max-sm:mx-2">
          <ContactForm />
        </Fade>
      </div>
    </section>
  );
}
