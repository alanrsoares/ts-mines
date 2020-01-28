const LS_KEY = "@THE_ROAD_QUIZ";

export default {
  persist<T extends {}>(value: T, path: string = "") {
    const key = `${LS_KEY}${path}`;

    localStorage.setItem(key, JSON.stringify(value));
  },

  read<T>(defaultValue: T, path: string = ""): T {
    const key = `${LS_KEY}${path}`;
    const value = localStorage.getItem(key);

    return value !== null ? JSON.parse(value) : defaultValue;
  }
};
