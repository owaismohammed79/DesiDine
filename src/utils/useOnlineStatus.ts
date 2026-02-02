const useOnlineStatus = () : boolean => {
    window.addEventListener('online', () => {
        return true;
    })
    return false;
}

export default useOnlineStatus;