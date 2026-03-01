<template>
  <div class="era">
    <div class="era-header">
      <span class="era-label">{{ era }}</span>
    </div>
    <TimelineEvent
      v-for="(ev, i) in events"
      :key="`${era}-${i}`"
      :event="ev"
    />
  </div>
</template>

<script setup>
import TimelineEvent from './TimelineEvent.vue'

defineProps({
  era: { type: String, required: true },
  events: { type: Array, required: true }
})
</script>

<style scoped>
.era {
  margin-bottom: 1rem;
}

.era-header {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin: 4rem 0 2.5rem;
}

.era-label {
  background: var(--dark);
  padding: 0.4rem 1.5rem;
  border: 1px solid rgba(201, 168, 76, 0.3);
  border-radius: 20px;
  font-size: 0.65rem;
  letter-spacing: 0.35em;
  text-transform: uppercase;
  color: var(--gold);
  position: relative;
  z-index: 1;
}
</style>
