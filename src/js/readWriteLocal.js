class ReadWriteLocal {
  constructor() {
    this.data = null;
  }

  readLocalCollection(key) {
    this.data = JSON.parse(localStorage.getItem(key)) || [];
    return this.data;
  }

  writeLocalCollection(key, item, single = true) { // When single is false, do a replace
    let existingData;
    if (single) {
      existingData = this.readLocalCollection(key);
      existingData.push(item);
    } else {
      existingData = item;
    }

    localStorage.setItem(key, JSON.stringify(existingData));
    return existingData;
  }
}

const readWriteLocal = new ReadWriteLocal();
export default readWriteLocal;
