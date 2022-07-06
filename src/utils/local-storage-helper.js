const hasStorage = () => {
  try {
    localStorage.setItem('test_storage::internal', 'test');
    localStorage.removeItem('test_storage::internal');
    return true;
  } catch (e) {
    return false;
  }
};

export const persistToLocalStorage = (key, data) => {
  if (hasStorage()) {
    localStorage.setItem(key, JSON.stringify(data));
  }
};

export const restoreFromLocalStorage = key => {
  if (hasStorage()) {
    return JSON.parse(localStorage.getItem(key));
  }

  return undefined;
};
