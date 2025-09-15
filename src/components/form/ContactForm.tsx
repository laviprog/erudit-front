'use client';

import { useState } from 'react';
import { toast } from 'react-toastify';
import RequestObj from '@/types/Request';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading'>('idle');
  const [formData, setFormData] = useState<RequestObj>({
    name: '',
    email: '',
    phone: '',
    message: '',
    type: null,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const clearForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
      type: null,
    });
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const data = {
        name: formData.name,
        email: formData.email || null,
        phone: formData.phone || null,
        message: formData.message || null,
        type: formData.type || null,
      };

      if (data.type == 'other') {
        data.type = null;
      }
      console.log('Submitting form data:', data);
      const response = await fetch('/api/requests', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      toast.success('Заявка успешно отправлена! Мы скоро с вами свяжемся.');
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Ошибка при отправке. Попробуйте еще раз.');
    }
    finally {
      setStatus('idle');
      clearForm();
    }
  };
  //
  // if (status === 'success') {
  //   return (
  //     <div className="flex items-center justify-center text-center text-black">
  //       <div className="w-[80%] flex flex-row-reverse gap-3 items-center">
  //         <Image
  //           src="/brain-strong.webp"
  //           alt="Эрудит пати сильный мозг"
  //           width={400}
  //           height={400}
  //           className="pointer-events-none select-none w-1/2"
  //           priority
  //         />
  //         <p className="mb:text-2xl text-xl w-1/2">
  //           Ваша заявка отправлена. Мы свяжемся с вами в ближайшее время.
  //         </p>
  //       </div>
  //     </div>
  //   );
  // }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white border my-auto max-sm:mx-2 border-neutral-200 shadow-xl space-y-3 p-6 rounded-3xl max-w-xl w-full text-[var(--dark)]"
    >
      <h2 className="text-3xl font-bold text-center">Связаться с нами</h2>

      <div>
        <label htmlFor="name" className="block font-medium mb-1">
          Ваше имя*
        </label>
        <input
          id="name"
          type="text"
          name="name"
          placeholder="Иван Иванов"
          value={formData.name || ''}
          onChange={handleChange}
          className="input"
          required
        />
      </div>

      <div>
        <label htmlFor="email" className="block font-medium mb-1">
          Email
        </label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="example@mail.ru"
          value={formData.email || ''}
          onChange={handleChange}
          className="input"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block font-medium mb-1">
          Телефон
        </label>
        <input
          id="phone"
          type="tel"
          name="phone"
          placeholder="+7 (999) 123-45-67"
          value={formData.phone || ''}
          onChange={handleChange}
          className="input"
        />
      </div>

      <div>
        <label htmlFor="type" className="block font-medium mb-1">
          Цель обращения
        </label>
        <Select
          value={formData.type || ''}
          onValueChange={(value: 'consultation' | 'partnership' | 'event_game_order' | 'other') => {
            setFormData((p) => ({ ...p, type: value }));
          }}
        >
          <SelectTrigger id="type" className="input text-base">
            <SelectValue placeholder="Выберите вариант" />
          </SelectTrigger>
          <SelectContent>
              <SelectItem value="consultation">Получить консультацию</SelectItem>
              <SelectItem value="event_game_order">Заказать игру для мероприятия</SelectItem>
              <SelectItem value="partnership">Стать партнёром</SelectItem>
              <SelectItem value="other">Другое</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <label htmlFor="message" className="block font-medium mb-1">
          Сообщение
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="Например: Хотим заказать игру на корпоратив"
          value={formData.message || ''}
          onChange={handleChange}
          className="input resize-y min-h-27 max-h-40"
          rows={4}
        ></textarea>
      </div>

      <button
        type="submit"
        disabled={status === 'loading'}
        className="max-sm:text-lg btn-card btn-open text-lg font-medium text-white"
      >
        {status === 'loading' ? 'Отправка...' : 'Отправить'}
      </button>
    </form>
  );
}
