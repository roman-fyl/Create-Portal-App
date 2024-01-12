const errorFieldNotification = (element) => {
    element.classList.add('error-notification')

    setTimeout(() => {
        element.classList.remove('error-notification')}, 5000)
}

export default errorFieldNotification;
