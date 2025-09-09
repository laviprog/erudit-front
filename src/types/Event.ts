export interface Event {
  id: number;
  number: number; // event number
  title: string;
  description: string;
  datetime: string;
  registrationStart: string;
  registrationEnd: string;
  duration: number; // event duration in minutes
  location: string;
  format?: 'classic' | 'family';
  price: number;
  theme?: string; // event theme, e.g., "Star Wars"
  maxTeams: number;
  // teamsRegistered: number;
  imageUrl?: string;
}

export interface ApplicationFormData {
  name: string;
  email: string;
  phone: string;
  teamName: string;
  teamParticipantsNumber: number;
  event: Event | null;
}
