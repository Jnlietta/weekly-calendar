// Function to format date to string in format: "day monthName" PL language (e.g. "1 Styczeń")
export const formatDate = (date: Date) => {
    return date.toLocaleDateString('pl-PL', { day: 'numeric', month: 'long' });
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