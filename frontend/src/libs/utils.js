export const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString(undefined, {
      year: "2-digit",
      month: "short",
      day: "numeric",
    }) + " " + date.toLocaleTimeString(undefined, { hour: "2-digit", minute: "2-digit" });
  };