export default class StorageAdapter {
  private namespace = "";

  constructor(namespace: string) {
    this.namespace = namespace;
  }

  public write<T extends {}>(value: T, path: string = "") {
    localStorage.setItem(
      `${this.namespace}${path}`,
      JSON.stringify(value ?? null)
    );
  }

  public read<T>(defaultValue: T, path: string = ""): T {
    const value = localStorage.getItem(`${this.namespace}${path}`);

    return value !== null ? JSON.parse(value) : defaultValue;
  }
}
