
export function mockSuccessfulFetch(responseBody: any) {
    const response = Promise.resolve({
        json: () => Promise.resolve(responseBody)
    })
    // @ts-ignore
    jest.spyOn(global, 'fetch').mockImplementation(() => response);
}

export function mockFetchError() {    
    // @ts-ignore
    jest.spyOn(global, 'fetch').mockImplementation(() => {
        new Error('error')
    });
}