export const loadLanguage = (lang: any) => {
    return (dispatch: any) => {
        dispatch({ type: 'LOAD_LANG', lang })
    }
}