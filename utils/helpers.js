

export const getLocalStorage = () => {
  if (typeof window !== 'undefined') {
    let auth = localStorage.getItem('auth')
    return auth
      ? JSON.parse(auth)
      : {
          firstName: '',
          lastName: '',
          email: '',
          accessToken: '',
          privateKey : '',
        }
  }
}


export const classNames = (...classes) => {
  return classes.filter(Boolean).join(' ')
}