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
import clsx from 'clsx';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading'>('idle');
  const [agreedToPrivacy, setAgreedToPrivacy] = useState(false);
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
    setAgreedToPrivacy(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!agreedToPrivacy) {
      toast.error('Необходимо согласие на обработку персональных данных');
      return;
    }

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
    } finally {
      setStatus('idle');
      clearForm();
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white border h-fit border-neutral-200 shadow-xl space-y-3 p-6 rounded-3xl md:w-xl sm:w-lg w-full text-[var(--dark)]"
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

      <div className="flex items-start gap-2 pt-2">
        <input
          type="checkbox"
          id="privacy-consent"
          checked={agreedToPrivacy}
          onChange={(e) => setAgreedToPrivacy(e.target.checked)}
          className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
          required
        />
        <label htmlFor="privacy-consent" className="text-sm text-gray-700 leading-tight">
          Я согласен с{' '}
          <a
            href="/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            политикой конфиденциальности
          </a>{' '}
          и даю согласие на обработку моих персональных данных*
        </label>
      </div>

      <button
        type="submit"
        disabled={status === 'loading' || !agreedToPrivacy}
        className={clsx("max-sm:text-lg btn-card btn-open text-lg font-medium text-white disabled:!opacity-50 disabled:!cursor-not-allowed")}
      >
        {status === 'loading' ? 'Отправка...' : 'Отправить'}
      </button>

      <p className="text-xs text-gray-500 text-center">
        Нажимая кнопку &quot;Отправить&quot;, вы соглашаетесь с{' '}
        <a href="/terms" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
          пользовательским соглашением
        </a>
      </p>
    </form>
  );
}