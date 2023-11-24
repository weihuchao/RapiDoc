/* eslint-disable no-use-before-define */
export default function encodeIfChinese(text) {
  return /[\u4e00-\u9fa5]/.test(text) ? encodeURIComponent(text) : text;
}
