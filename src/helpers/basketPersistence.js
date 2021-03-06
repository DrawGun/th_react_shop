export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('cart');
    
    if (serializedState == null)
      return [];

    return JSON.parse(serializedState);
  } catch (error) {
    return [];
  }
}

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    
    localStorage.setItem('cart', serializedState);
  } catch (error) {}
}
