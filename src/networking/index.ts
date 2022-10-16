interface ResponseType {
  status: boolean;
  results: any;
  error?: any;
}

async function _fetch(url: string, headers: any) {
  try {
    let response = await fetch(url, headers);
    let responseJson = await response.json();
    // console.log(response)
    if (response.ok) {
      return {
        status: true,
        ...responseJson,
      };
    } else {
      return {
        ...responseJson,
        status: false,
      };
    }
  } catch (error) {
    return {
      status: false,
      data: [],
      results: {
        code: [3001],
      },
      error,
    };
  }
}

async function httpGetRequest(
  url: string,
  data: any = {},
  token?: string,
  customHeaders: any = {}
): Promise<ResponseType> {
  let response = {
    status: false,
    data: [],
    results: {
      code: [3001],
    },
    error: null,
  } as any;
  try {
    let headers = {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json; charset=UTF-8",
        //Origin: domain,
        ...(typeof customHeaders == "object" ? customHeaders : {}),
      },
    };

    data = Object.keys(data).length
      ? `?${new URLSearchParams(data).toString()}`
      : "";

    return await _fetch(url + data, headers);
  } catch (error) {
    response.error = error;
    return response;
  }
}

async function httpRequest(
  url: string,
  data: any,
  token?: string,
  method: "POST" | "PUT" | "DELETE" = "POST",
  customHeaders: any = {}
): Promise<ResponseType> {
  let response = {
    status: false,
    data: [],
    results: {
      code: [3001],
    },
    error: null,
  } as any;

  try {
    let headers = {
      method: method,
      headers: {
        Accept: "application/json",
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json; charset=UTF-8",
        //Origin: domain,
        ...(typeof customHeaders == "object" ? customHeaders : {}),
      },
      body: JSON.stringify(data),
    };
    return await _fetch(url, headers);
  } catch (error) {
    response.error = error;
    return response;
  }
}

export { httpGetRequest, httpRequest };
