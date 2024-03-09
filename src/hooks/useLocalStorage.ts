const useLocalStorage = () => {
  function setItem(key: string, content: [] | object | string) {
    localStorage.setItem(key, JSON.stringify(content));
  }

  function getItem(key: string) {
    return localStorage.getItem(key);
  }

  return { setItem, getItem };
};

export default useLocalStorage;
