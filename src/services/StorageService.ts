
import storage from 'use-storage-node'
import storageKey from './config';
const key = storageKey || 'storage_key';
const store = storage(key);
export default store