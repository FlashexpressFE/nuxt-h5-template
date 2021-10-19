<template>
    <div class="sharethis-inline-share-buttons"></div>
</template>

<script>
export default {
  mounted() {
      const st = window.__sharethis__
    if (!st) {
      const script = document.createElement('script')
      script.src =
        'https://platform-api.sharethis.com/js/sharethis.js#property=6107aaacf506cf0019dc20ad&product=inline-share-buttons'
      document.body.appendChild(script)
    } else if (typeof st.initialize === 'function') {
      st.href = window.location.href
      st.initialize()
    }
  }
}
</script>