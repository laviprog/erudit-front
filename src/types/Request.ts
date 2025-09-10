export default interface RequestObj {
  name: string;
  email: string | null;
  phone: string | null;
  message: string | null;
  type: 'consultation' | 'partnership' | 'event_game_order' | 'other' | null;
}
