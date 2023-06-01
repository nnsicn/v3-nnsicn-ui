import { ref,computed, onMounted, onUnmounted } from 'vue'
inject: ['globalModel']
export function useMixin(){
    let formModel = computed({
        // getter
        get() {
          return globalModel.formModel
        },
        // setter
        set(newValue) {
            
        }
      })
}