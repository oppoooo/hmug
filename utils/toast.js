function toasts(title, duration = 3000) {
  uni.showToast({
    title,
    icon: 'none',
    duration
  })
}

// 失败提示
toasts.err = function(title, duration = 3000) {
  uni.showToast({
    title,
    icon: 'error',
    duration
  })
}
// 成功提示
toasts.success = function(title, duration = 3000) {
  uni.showToast({
    title,
    icon: "success",
    duration
  })
}
export default toasts
