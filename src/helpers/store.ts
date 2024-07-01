const store: any[] = [];
console.log(store);
export function addDataToStore(data: any) {
  const n = { ...data, id: Math.random().toString(36).substr(2, 9) };
  store.push(n);
  return n;
}
export function getDataFromStore() {
  return store;
}
export function getDataById(id: string) {
    console.debug(store);
  return store.find((data) => data.id === id);
}
