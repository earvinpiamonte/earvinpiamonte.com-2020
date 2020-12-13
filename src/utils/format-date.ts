
const formatDate = (date: Date | string = '', options?: object) : string => {

  const defaultOptions = {
    timeZone: 'Asia/Manila',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }

  const dateInstance = date instanceof Date ? date : new Date(date)

  return dateInstance.toLocaleDateString('en-US', {...defaultOptions, ...options});
}

export default formatDate
