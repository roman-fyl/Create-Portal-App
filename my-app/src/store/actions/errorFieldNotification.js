const errorFieldNotification = (element) => {
   if(element) {
    element.className.add('error-notification')

    setTimeout(() => {
        element.className.remove('error-notification')}, 5000)
   }
   else {
    return
   }
}

export default errorFieldNotification;
    