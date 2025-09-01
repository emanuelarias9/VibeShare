export const apiClientService = async ({
  urlPeticion,
  method = "GET",
  token = null,
  data = null,
  file = false,
}) => {
  let peticion;
  let loading = true;
  let apiResponse;

  const baseHeaders = { "Content-Type": "application/json" };
  const headers = token
    ? { ...baseHeaders, Authorization: token }
    : baseHeaders;

  if (method === "HEAD") {
    peticion = await fetch(urlPeticion, {
      method,
    });
    apiResponse = peticion;
    loading = false;
    return { apiResponse, loading };
  }

  if (method === "GET" || method === "DELETE") {
    peticion = await fetch(urlPeticion, {
      method,
      headers,
    });
    apiResponse = await peticion.json();
    loading = false;
    return { apiResponse, loading };
  }

  if (file && (method === "PUT" || method === "POST")) {
    peticion = await fetch(urlPeticion, {
      method,
      body: data,
      headers: token ? { Authorization: token } : undefined,
    });
    apiResponse = await peticion.json();
    loading = false;
    return { apiResponse, loading };
  }

  if (!file && (method === "PUT" || method === "POST")) {
    peticion = await fetch(urlPeticion, {
      method,
      headers,
      body: JSON.stringify(data),
    });
    apiResponse = await peticion.json();
    loading = false;
    return { apiResponse, loading };
  }
};
