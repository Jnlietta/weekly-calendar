interface Event {
  id: number;
  date: string;
  hourStart: number;
  hourEnd: number;
  title: string;
  status: 'busy' | 'free' | 'booked';
  showDetails: boolean; 
}

const initialState = {
    events: [
      { id: '1', date: '2025-03-29', hourStart: 7, hourEnd: 8, title: 'Spotkanie z klientem', status: 'busy' as 'busy', showDetails: false },
      { id: '2', date: '2025-04-03', hourStart: 8, hourEnd: 9, title: 'Spotkanie z klientem', status: 'free' as 'free', showDetails: false },
      { id: '3', date: '2025-04-04', hourStart: 9, hourEnd: 10, title: 'Warsztaty React', status: 'busy' as 'busy', showDetails: false },
      { id: '4', date: '2025-04-05', hourStart: 10, hourEnd: 11, title: 'Spotkanie zespołu', status: 'booked' as 'booked', showDetails: false },
      { id: '5', date: '2025-04-15', hourStart: 11, hourEnd: 12, title: 'Spotkanie zespołu', status: 'free' as 'free', showDetails: false },
      { id: '6', date: '2025-03-29', hourStart: 12, hourEnd: 13, title: 'Spotkanie z klientem', status: 'busy' as 'busy', showDetails: false },
      { id: '7', date: '2025-04-03', hourStart: 13, hourEnd: 14, title: 'Spotkanie z klientem', status: 'free' as 'free', showDetails: false },
      { id: '8', date: '2025-04-04', hourStart: 14, hourEnd: 15, title: 'Warsztaty React', status: 'free' as 'free', showDetails: false },
      { id: '9', date: '2025-04-05', hourStart: 15, hourEnd: 16, title: 'Spotkanie zespołu', status: 'busy' as 'busy', showDetails: false },
      { id: '10', date: '2025-04-15', hourStart: 16, hourEnd: 17, title: 'Spotkanie zespołu', status: 'free' as 'free', showDetails: false },
      { id: '11', date: '2025-03-29', hourStart: 17, hourEnd: 18, title: 'Spotkanie z klientem', status: 'busy' as 'busy', showDetails: false },
      { id: '12', date: '2025-04-03', hourStart: 18, hourEnd: 19, title: 'Spotkanie z klientem', status: 'free' as 'free', showDetails: false },
      { id: '13', date: '2025-04-04', hourStart: 19, hourEnd: 20, title: 'Warsztaty React', status: 'free' as 'free', showDetails: false },
      { id: '14', date: '2025-04-05', hourStart: 20, hourEnd: 21, title: 'Spotkanie zespołu', status: 'free' as 'free', showDetails: false },
      { id: '15', date: '2025-04-15', hourStart: 21, hourEnd: 22, title: 'Spotkanie zespołu', status: 'free' as 'free', showDetails: false },
      { id: '16', date: '2025-04-18', hourStart: 8, hourEnd: 9, title: 'Warsztaty JavaScript', status: 'free' as 'free', showDetails: false },
      { id: '17', date: '2025-04-19', hourStart: 10, hourEnd: 11, title: 'Spotkanie z zespołem IT', status: 'busy' as 'busy', showDetails: false },
      { id: '18', date: '2025-04-20', hourStart: 14, hourEnd: 15, title: 'Szkolenie UX', status: 'free' as 'free', showDetails: false },
      { id: '19', date: '2025-04-21', hourStart: 16, hourEnd: 17, title: 'Spotkanie z klientem', status: 'booked' as 'booked', showDetails: false },
      { id: '20', date: '2025-04-22', hourStart: 9, hourEnd: 10, title: 'Spotkanie zespołu', status: 'free' as 'free', showDetails: false }
    ],
}

export default initialState;