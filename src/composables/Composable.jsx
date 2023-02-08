import { ref } from "vue";

export default function useColorPicker() {
  const colors = ["red", "green", "blue", "purple"];
  const message = ref(" Pick a color");
  const matchColor = (value) => {
    const randomColor = Math.floor(Math.random() * colors.length);
    if (value === colors[randomColor]) {
      message.value = `You got it right [answer is ${colors[randomColor]}]`;
    } else {
      message.value = `You got it wrong [answer is ${colors[randomColor]}]`;
    }
  };
  return { colors, message, matchColor };
}
