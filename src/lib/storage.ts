import StorageAdapter from "lib/StorageAdapter";

export const NAMESPACE = "@TS-MINES";

const instance = new StorageAdapter(NAMESPACE);

export default instance;
