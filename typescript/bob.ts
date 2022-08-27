export function hey(message: string): string {
  const trimmedMessage: string = message.trim()
  const responses = {
    'question': 'Sure.',
    'all_caps': 'Whoa, chill out!',
    'all_caps_question': 'Calm down, I know what I\'m doing!',
    'blank': 'Fine. Be that way!',
    'default': 'Whatever.'
  }

  const all_caps = (): boolean => {
    const regexCaps = /[A-Z]/g
    const regexLowerCase = /[a-z]/g
    const hasCaps = trimmedMessage.match(regexCaps)?.length ? true : false
    const hasNoLowerCase = trimmedMessage.match(regexLowerCase)?.length ? false : true
    return hasCaps && hasNoLowerCase
  }

  if (trimmedMessage.endsWith('?') && all_caps()) {
    return responses['all_caps_question']
  }

  if (trimmedMessage.endsWith('?')) {
    return responses['question']
  }

  if (all_caps()) {
    return responses['all_caps']
  }

  if (!trimmedMessage) {
    return responses['blank']
  }

  return responses['default']
}