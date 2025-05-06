import { ref, onMounted } from "vue";
// import json from "./sponsor.json";

const data = ref();

export function useSponsor() {
  onMounted(async () => {
    if (data.value) return;

    const result = await fetch("https://qiniu.sonve.asia/qrcode/sponsor.json");
    const json = await result.json();

    data.value = json;
  });

  return {
    data,
  };
}
