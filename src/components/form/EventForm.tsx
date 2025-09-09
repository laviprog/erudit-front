'use client';

import { useEffect, useState } from 'react';
import { Event, ApplicationFormData } from '@/types/Event';

interface EventFormProps {
  selectedEvent: Event | null;
  onSubmit: (data: ApplicationFormData) => void;
  onCancel: () => void;
}

export default function EventForm({ onSubmit, selectedEvent, onCancel }: EventFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    teamName: '',
    teamParticipantsNumber: 0,
    event: selectedEvent,
  });

  useEffect(() => {
    if (selectedEvent) {
      setFormData((prev) => ({ ...prev, event: selectedEvent }));
    }
  }, [selectedEvent]);

  const clearForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      teamName: '',
      teamParticipantsNumber: 0,
      event: null,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.event) {
      onSubmit(formData);
    }
    clearForm();
  };

  const handleCancel = () => {
    onCancel();
    clearForm();
  };

  return (
    <form onSubmit={handleSubmit} className="sm:space-y-4 space-y-3 my-2">
      {[
        {
          id: 'name',
          label: 'Имя*',
          type: 'text',
          value: formData.name,
          placeholder: 'Иван Иванов',
        },
        {
          id: 'email',
          label: 'Email*',
          type: 'email',
          value: formData.email,
          placeholder: 'example@mail.ru',
        },
        {
          id: 'phone',
          label: 'Телефон*',
          type: 'tel',
          value: formData.phone,
          placeholder: '89874569034',
        },
        {
          id: 'teamName',
          label: 'Название команды*',
          type: 'text',
          value: formData.teamName,
          placeholder: 'Умные утята',
        },
      ].map((field) => (
        <div key={field.id} className="px-1">
          <label htmlFor={field.id} className="block text-sm font-medium text-gray-700 mb-1">
            {field.label}
          </label>
          <input
            id={field.id}
            type={field.type}
            value={field.value}
            placeholder={field.placeholder}
            onChange={(e) => setFormData({ ...formData, [field.id]: e.target.value })}
            required
            className="input"
          />
        </div>
      ))}

      <div className="px-1">
        <label
          htmlFor="teamParticipantsNumber"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Количество участников в команде*
        </label>
        <input
          id="teamParticipantsNumber"
          type="number"
          value={formData.teamParticipantsNumber || ''}
          placeholder="от 2 до 10"
          onChange={(e) =>
            setFormData({
              ...formData,
              teamParticipantsNumber: parseInt(e.target.value) || 0,
            })
          }
          required
          min={1}
          max={12}
          className="input"
        />
      </div>

      <div className="flex justify-end sm:gap-3 gap-2 font-[500]">
        <button
          type="button"
          onClick={handleCancel}
          className="sm:px-5 sm:py-3 max-sm:p-3 bg-neutral-200 rounded-xl text-neutral-800 hover:bg-neutral-300 transition-colors duration-300 cursor-pointer"
        >
          Отмена
        </button>
        <button
          type="submit"
          className="sm:px-5 sm:py-3 max-sm:p-3 bg-[var(--violet-light)] text-white rounded-xl hover:bg-[var(--violet)] transition-colors duration-200 cursor-pointer"
        >
          Отправить заявку
        </button>
      </div>
    </form>
  );
}
