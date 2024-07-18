export const useFormatearFecha = () => {
  const formatDate = (dateString : string) => {
    const fecha = new Date(dateString);
    const año = fecha.getFullYear();
    const mes = (fecha.getMonth() + 1).toString().padStart(2, "0");
    const dia = fecha.getDate().toString().padStart(2, "0");
    return `${año}-${mes}-${dia}`;
  };

  return { formatDate };
};
