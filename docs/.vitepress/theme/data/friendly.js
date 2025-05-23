import { ref, onMounted } from "vue";
// import json from "./friendly.json";

const data = ref([]);

export function useFriendly() {
  onMounted(async () => {
    if (data.value && data.value.length) return;

    const result = await fetch("https://qiniu.sonve.asia/qrcode/friendly.json"); // 会跨域
    const json = await result.json();

    data.value = json && json.links ? json.links : [];
  });

  return {
    data,
  };
}
