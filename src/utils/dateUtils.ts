// Function to format date to string in format: "day monthName" PL language (e.g. "1 stycznia")
export const formatDateShort = (date: Date) => {
    return date.toLocaleDateString('pl-PL', { day: 'numeric', month: 'long' });
  };

// Function to format date to string in format: "weekday day month" PL language (e.g. "poniedziałek, 1 stycznia")
export const formatDateLong = (date: Date) => {
    return date.toLocaleDateString('pl-PL', { weekday: 'long', day: 'numeric', month: '2-digit'})
  };

// Function to get current week (from Monday to Sunday) based on provided date
export const getCurrentWeek = (date: Date = new Date()): Date[] => {
    const startOfWeek = new Date(date);
    startOfWeek.setDate(date.getDate() - date.getDay() + 1); // Monday
    return Array.from({ length: 7 }).map((_, i) => {
      const day = new Date(startOfWeek);
      day.setDate(startOfWeek.getDate() + i);
      return day;
    });
  };