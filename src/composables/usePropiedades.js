import { computed, ref } from 'vue'
import { collection } from 'firebase/firestore'
import { useFirestore, useCollection } from 'vuefire'

export default function usePropiedades() {
  const alberca = ref(false)

  const db = useFirestore()
  const propieddesCollection = useCollection(collection(db, 'propiedades'))

  const propiedadesFiltradas = computed(() => {
    return alberca.value
      ? propieddesCollection.value.filter((propiedad) => propiedad.alberca)
      : propieddesCollection.value
  })

  return {
    alberca,
    propieddesCollection,
    propiedadesFiltradas
  }
}
