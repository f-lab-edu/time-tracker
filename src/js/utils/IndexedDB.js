export default {
  db: null,
  open() {
    const request = indexedDB.open('TIMETRACKER', 1);

    request.onsuccess = function (event) {
      this.db = event.target.result;
      console.info('Database opened successfully: ', this.db);
    };

    request.onerror = function (event) {
      console.info('Database failed to open: ', event.target.error);
    };

    request.onupgradeneeded = function (event) {
      console.info('openDB.onupgradeneeded');

      const db = event.target.result;

      if (!db.objectStoreNames.contains('DAILY')) {
        const store = db.createObjectStore('DAILY', {
          keyPath: 'today',
          autoIncrement: true,
        });

        db.createIndex('doing', 'doing', { unique: false });
      }
    };

    console.log('work', myIndexedDb);
  },

  transaction(storeName, mode) {
    /**
     * mode
     * readonly
     * readwrite
     * */

    return this.db.transaction(storeName, mode);
  },
  getObjectStore(storeName, cb) {
    const transaction = this.db.transaction([storeName]);

    return transaction.objectStore(storeName);
  },
  addObjectStore(storeName, cb) {
    console.log(this.db);
    const transaction = this.db.transaction([storeName], 'readwrite');

    console.log(transaction);

    transaction.objectStore(storeName);
  },
  updateObjectStore(storeName) {
    const transaction = this.db.transaction([storeName], 'readWrite');

    transaction.objectStore(storeName);
  },
};
