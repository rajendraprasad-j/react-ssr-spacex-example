export function launch(http) {
  return {
    all: () => {
      return http.get('/launches?limit=100&amp;launch_success=true');
    },

    filter: filterQuery => {
      return http.get(`/launches?limit=100${filterQuery}`);
    }
  };
}
