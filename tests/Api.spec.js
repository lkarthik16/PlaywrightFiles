import { test, expect } from '@playwright/test';
import { request } from 'http';

test('post method', async ({ request }) => {
    const response = await request.post('https://reqres.in/api/users', {
        data: {
                name: "morpheus",
                job: "leader"
            },
            headers:{"x-api-key": "reqres-free-v1"}
    });

    const responseBody = await response.json();
    expect(response.status()).toBe(201);
    expect(responseBody.name).toBe('morpheus');
});


test('get method', async({request}) => {
    const response = await request.get('https://reqres.in/api/users?page=2');
    const responseBody = await response.json();
    expect(response.status()).toBe(200);
    expect(responseBody.data[0].id).toBe(7);
});


test('put method', async({request}) => {
    const response = await request.put('https://reqres.in/api/users?page=2');
    const responseBody = await response.json();
    expect(response.status()).toBe(200);
    expect(responseBody.job).toBe('zion resident');
});