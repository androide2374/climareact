const getDayOfWeek = (date) => {
  const dayOfWeek = new Date(date).getDay()
  return isNaN(dayOfWeek)
    ? null
    : [
        'Domingo',
        'Lunes',
        'Martes',
        'Miercoles',
        'Jueves',
        'Viernes',
        'Sabado',
      ][dayOfWeek]
}
export default getDayOfWeek