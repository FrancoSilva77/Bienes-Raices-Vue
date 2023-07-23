import { computed } from 'vue'
import { collection } from 'firebase/firestore'
import { useFirestore, useCollection } from 'vuefire'

export default function usePropiedades() {
  const db = useFirestore()
  const propieddesCollection = useCollection(collection(db, 'propiedades'))

  const precio = computed(() => {
    return (price) =>
      Number(price).toLocaleString('es-MX', {
        style: 'currency',
        currency: 'MXN'
      })
  })

  return {
    propieddesCollection,
    precio
  }
}
