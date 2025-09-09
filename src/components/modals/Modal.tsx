'use client';

import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';
import { ApplicationFormData, Event} from '@/types/Event';
import EventForm from '@/components/form/EventForm';
import { AnimatePresence, motion } from 'framer-motion';
import { toast } from 'react-toastify';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  events?: Event[];
  selectedEvent?: Event | null;
  className?: string;
}

export default function Modal({
  isOpen,
  onClose,
  title,
  selectedEvent = null,
  className = '',
}: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const [modalRoot, setModalRoot] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setModalRoot(document.getElementById('modal-root') || document.body);
  }, []);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === modalRef.current) onClose();
  };

  const handleFormSubmit = async (formData: ApplicationFormData) => {
    console.log('Form submitted:', formData);
    onClose();
    if (formData.event) {
      try {
        const data = {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          teamName: formData.teamName,
          teamParticipantsNumber: formData.teamParticipantsNumber,
          eventId: formData.event.id,
        }
        const response = await fetch('/api/applications', {
          method: 'POST',
          body: JSON.stringify(data),
          headers: { 'Content-Type': 'application/json' },
        })
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        toast.success('Заявка успешно отправлена!')
      }
      catch (error) {
        console.error('Error submitting form:', error);
        toast.error('Ошибка при отправке заявки. Попробуйте еще раз.')
      }
    }
  };

  const modalContent = (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={modalRef}
          onClick={handleBackdropClick}
          className="fixed inset-0 z-[1001] flex items-center justify-center bg-black/40 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className={`bg-white rounded-2xl shadow-2xl w-full max-w-lg mx-2 sm:mx-4 md:mx-6 md:p-6 max-md:px-4 max-md:py-3 relative ${className}`}
            initial={{ y: 50, opacity: 0, scale: 0.95 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 50, opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className="flex items-center justify-between">
              <h2 className="md:text-2xl text-xl font-semibold text-gray-800 text-center">
                {title}
              </h2>
              <button
                onClick={onClose}
                className="p-1 rounded-full hover:bg-black/8 transition duration-200 cursor-pointer"
                aria-label="Закрыть"
              >
                <X className="md:w-8 md:h-8 w-6 h-6 text-neutral-800" strokeWidth={3} />
              </button>
            </div>

            <div className="max-h-[70vh] overflow-y-auto pr-2">
              <EventForm
                selectedEvent={selectedEvent}
                onSubmit={handleFormSubmit}
                onCancel={onClose}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  if (!modalRoot) return null;
  return createPortal(modalContent, modalRoot);
}
