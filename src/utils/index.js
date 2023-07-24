export const precio = (price) =>
  Number(price).toLocaleString('es-MX', {
    style: 'currency',
    currency: 'MXN'
  })
