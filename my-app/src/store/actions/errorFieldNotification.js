const errorFieldNotification = (element) => {
   if (element) {
    console.log("Element found");
    element.classList.add('error-notification');
    setTimeout(() => {
        element.classList.remove('error-notification');
    }, 10000);
   } else {
    console.error("Element not found");
   }
}

export default errorFieldNotification;
