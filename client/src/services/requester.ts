const URL = `http://localhost:2000/stock?`;

export async function getStocks(params: Record<string, string>) {
  const queryString = new URLSearchParams(params).toString();
  return fetch(
    `${URL}${queryString}`
  ).then((res) => {
    if (res.status === 200) {
      return res.json();
    } else {
      throw new Error(`getStocks failed with status: ${res.status}`);
    }
  });
}
