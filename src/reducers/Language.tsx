const Language = (state = [], action: { type: any; lang: any[]; error: any; }) => {
    switch (action.type) {
        case 'LOAD_LANG':
            return action.lang;
        case 'LANG_ERROR':
            return action.error;
        default:
            return state;
    }
}
export default Language;