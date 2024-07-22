export function saveSettings<T>(key: string, settings: T) {
    try{
    localStorage.setItem(key, JSON.stringify(settings));
    }
    catch (exception:any){
      throw new Error(exception)
    }
  }

  export function getSettings<T>(key: string) {
    try {
      let data = localStorage.getItem(key);
      if (!data) return undefined;

      let parsed = JSON.parse(data) as T;
      if (!parsed) return undefined;
      return parsed;

    } catch (exception) {
      return undefined;
    }
  }