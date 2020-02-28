const appStore = 'talkItStore'

export const storeState = (state) => {
  localStorage.setItem(appStore, JSON.stringify(state))
}

export const retrieveState = _ => {
  const jsonState = localStorage.getItem(appStore)

  if (!jsonState) {
    return null
  }

  return JSON.parse(jsonState)
}
