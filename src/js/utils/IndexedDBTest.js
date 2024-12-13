const IndexedDBTest = function () {
  this.db = null;
  this.dbName = 'TIMETRACKER';
  this.version = 1;
};

IndexedDBTest.prototype.open = async function () {
  if (this.db) {
    return this.db;
  }

  return new Promise((resolve, reject) => {
    const request = indexedDB.open(this.dbName, this.version);

    request.onsuccess = (event) => {
      this.db = event.target.result;
      console.info('Database opened successfully: ', this.db);

      resolve(this.db);
    };

    request.onerror = (event) => {
      console.info('Database failed to open: ', event.target.error);
    };

    request.onupgradeneeded = (event) => {
      const db = event.target.result;

      if (!db.objectStoreNames.contains('DAILY')) {
        const store = db.createObjectStore('DAILY', {
          keyPath: 'today',
          autoIncrement: true,
        });

        store.createIndex('doing', 'doing', { unique: false });
      }
    };
  });
};

IndexedDBTest.prototype.transaction = function (storeName, mode = 'readonly') {
  if (!this.db) {
    throw new Error('Database is not initialized. Call open() first.');
  }
  return this.db.transaction(storeName, mode);
};

IndexedDBTest.prototype.getObjectStore = function (
  storeName,
  mode = 'readonly',
) {
  return this.transaction(storeName, mode).objectStore(storeName);
};

const initDBTest = new IndexedDBTest();

export default initDBTest;
