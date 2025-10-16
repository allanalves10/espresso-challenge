export const formatDate = (value: string): string => {
    if (!value) return ''

    const date = new Date(value)

    return date.toLocaleString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    }).replace(',', ' às')
  }